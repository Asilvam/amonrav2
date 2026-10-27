import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import "./velas.css";
import CandleVisual from "./CandleVisual";
import CandleRoomIcon from "./CandleRoomIcon";
import type { IconName } from "./CandleRoomIcon";
import { createCandle, getCandleCountries, searchCandleCities } from "./api";
import type { CandleCountry, CandleCity } from "./api";
import { CANDLE_COLORS } from "./candle-room";
import type { CandleColor, Intention, RoomCandle } from "./candle-room";

type Stage = "arrival" | "intention" | "dedication" | "lighting";

interface IntentionOption {
  label: Intention;
  description: string;
  symbol: IconName;
}

const INTENTIONS: IntentionOption[] = [
  {
    label: "Gratitud",
    description: "Dar espacio a lo bueno que ya está.",
    symbol: "sun",
  },
  {
    label: "Esperanza",
    description: "Cuidar una posibilidad que comienza.",
    symbol: "sprout",
  },
  {
    label: "Calma",
    description: "Volver, con suavidad, al presente.",
    symbol: "waves",
  },
  {
    label: "Amor",
    description: "Acompañar un vínculo importante.",
    symbol: "heart",
  },
  {
    label: "Fortaleza",
    description: "Reconocer la fuerza que te sostiene.",
    symbol: "shield",
  },
  {
    label: "Recuerdo",
    description: "Mantener cerca a quien llevas contigo.",
    symbol: "star",
  },
];

const STAGE_COPY: Record<Stage, string> = {
  arrival: "Un momento para ti",
  intention: "Elige lo que quieres honrar",
  dedication: "Pon tu intención en palabras",
  lighting: "Acércate a la luz",
};

function prepareGongAudio(): AudioContext | null {
  if (typeof window === "undefined" || !window.AudioContext) return null;

  const context = new AudioContext();
  if (context.state === "suspended") {
    void context.resume().catch(() => {});
  }
  return context;
}

function playMeditationGong(context: AudioContext | null) {
  if (!context || context.state !== "running") return;

  const now = context.currentTime;
  const master = context.createGain();
  master.gain.setValueAtTime(0.0001, now);
  master.gain.exponentialRampToValueAtTime(0.12, now + 0.12);
  master.gain.exponentialRampToValueAtTime(0.0001, now + 6);
  master.connect(context.destination);

  const partials = [
    { frequency: 130.81, gain: 0.34 },
    { frequency: 196.4, gain: 0.22 },
    { frequency: 262.6, gain: 0.15 },
    { frequency: 349.2, gain: 0.1 },
    { frequency: 523.8, gain: 0.06 },
  ];

  for (const partial of partials) {
    const oscillator = context.createOscillator();
    const voice = context.createGain();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(partial.frequency, now);
    voice.gain.setValueAtTime(partial.gain, now);
    oscillator.connect(voice);
    voice.connect(master);
    oscillator.start(now);
    oscillator.stop(now + 6.1);
  }

  window.setTimeout(() => {
    void context.close();
  }, 6_500);
}

function StepIndicator({ stage }: { stage: Stage }) {
  const steps: Stage[] = ["intention", "dedication", "lighting"];
  const activeIndex = steps.indexOf(stage);

  if (activeIndex < 0) return null;

  return (
    <div
      className="mb-8 flex items-center gap-3"
      role="group"
      aria-label={`Paso ${activeIndex + 1} de ${steps.length}`}
    >
      {steps.map((step, index) => (
        <span
          key={step}
          className={`h-1 flex-1 rounded-full transition-colors duration-500 ${
            index <= activeIndex ? "bg-antique-gold" : "bg-antique-gold-soft/25"
          }`}
        />
      ))}
      <span className="ml-1 font-interface text-xs text-ivory-muted">
        {activeIndex + 1}/3
      </span>
    </div>
  );
}

export default function EncenderVela() {
  const [stage, setStage] = useState<Stage>("arrival");
  const [intention, setIntention] = useState<Intention | null>(null);
  const [dedication, setDedication] = useState("");
  const [name, setName] = useState("");
  const [color, setColor] = useState<CandleColor>("marfil");
  const [countries, setCountries] = useState<CandleCountry[]>([]);
  const [countriesLoading, setCountriesLoading] = useState(true);
  const [countriesError, setCountriesError] = useState("");
  const [countryQuery, setCountryQuery] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [countryMenuOpen, setCountryMenuOpen] = useState(false);
  const [cityQuery, setCityQuery] = useState("");
  const [cities, setCities] = useState<CandleCity[]>([]);
  const [citiesLoading, setCitiesLoading] = useState(false);
  const [citiesError, setCitiesError] = useState("");
  const [selectedCity, setSelectedCity] = useState<CandleCity | null>(null);
  const [publishLocation, setPublishLocation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [saveError, setSaveError] = useState("");
  const [completion, setCompletion] = useState(false);
  const [createdCandle, setCreatedCandle] = useState<RoomCandle | null>(null);
  const submissionInProgress = useRef(false);

  useEffect(() => {
    let active = true;
    getCandleCountries()
      .then((result) => {
        if (active) setCountries(result);
      })
      .catch((error: unknown) => {
        if (active) {
          setCountriesError(
            error instanceof Error
              ? error.message
              : "No pudimos cargar los países.",
          );
        }
      })
      .finally(() => {
        if (active) setCountriesLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    const query = cityQuery.trim();
    if (!countryCode || query.length < 2 || selectedCity?.name === query) {
      return;
    }

    const controller = new AbortController();
    const timeout = window.setTimeout(() => {
      setCitiesLoading(true);
      setCitiesError("");
      searchCandleCities(countryCode, query, controller.signal)
        .then(setCities)
        .catch((error: unknown) => {
          if (!controller.signal.aborted) {
            setCitiesError(
              error instanceof Error
                ? error.message
                : "No pudimos buscar ciudades.",
            );
          }
        })
        .finally(() => {
          if (!controller.signal.aborted) setCitiesLoading(false);
        });
    }, 300);

    return () => {
      window.clearTimeout(timeout);
      controller.abort();
    };
  }, [countryCode, cityQuery, selectedCity]);

  const countryLabel = (country: CandleCountry) => {
    const language = document.documentElement.lang.toLowerCase();
    return language.startsWith("en") ? country.name.en : country.name.es;
  };
  const selectedCountry = countries.find(
    (country) => country.code === countryCode,
  );
  const filteredCountries = useMemo(() => {
    const normalize = (value: string) =>
      value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/gu, "")
        .toLocaleLowerCase();
    const search = normalize(countryQuery.trim());
    return countries.filter((country) =>
      search
        ? normalize(
            `${country.name.es} ${country.name.en} ${country.code}`,
          ).includes(search)
        : true,
    );
  }, [countries, countryQuery]);

  const igniteCandle = async () => {
    if (!intention || submissionInProgress.current || completion) return;
    if (cityQuery.trim() && !selectedCity) {
      setSaveError("Elige una ciudad de los resultados o borra la búsqueda.");
      return;
    }
    submissionInProgress.current = true;
    setSaveError("");
    setIsSubmitting(true);
    const gongAudio = prepareGongAudio();
    try {
      const candle = await createCandle({
        intention,
        dedication: dedication.trim(),
        name: name.trim(),
        color,
        ...(countryCode ? { countryCode } : {}),
        ...(selectedCity
          ? { cityId: selectedCity.id, cityName: selectedCity.name }
          : {}),
        publishLocation:
          publishLocation && Boolean(countryCode && selectedCity),
      });
      setCreatedCandle(candle);
      setCompletion(true);
      playMeditationGong(gongAudio);
    } catch (error) {
      submissionInProgress.current = false;
      if (gongAudio) void gongAudio.close();
      setSaveError(
        error instanceof Error
          ? error.message
          : "No se pudo encender la vela. Inténtalo de nuevo.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden bg-night text-ivory">
      <div className="ritual-atmosphere" aria-hidden="true" />
      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-5rem)] w-full max-w-7xl items-center gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.82fr)] lg:gap-16 lg:px-12 lg:py-16">
        <section
          className="relative flex min-h-[25rem] items-center justify-center sm:min-h-[31rem] lg:min-h-[39rem]"
          aria-label="Vela que estás preparando para encender"
        >
          <div
            className="ritual-orbit ritual-orbit--outer"
            aria-hidden="true"
          />
          <div
            className="ritual-orbit ritual-orbit--inner"
            aria-hidden="true"
          />
          <div className="ritual-stars" aria-hidden="true">
            <span>✧</span>
            <span>·</span>
            <span>✳</span>
            <span>·</span>
            <span>✧</span>
          </div>
          <CandleVisual
            startedAt={createdCandle?.startedAt}
            now={createdCandle?.startedAt}
            color={color}
            label={completion ? "Vela recién encendida" : "Vela sin encender"}
            interactive={stage === "lighting"}
            disabled={isSubmitting || completion}
            onIgnite={igniteCandle}
          />
          <p className="absolute bottom-2 font-interface text-[0.65rem] uppercase tracking-[0.3em] text-antique-gold/65">
            AMONRA · LUZ INTERIOR
          </p>
        </section>

        <section className="mx-auto w-full max-w-xl lg:py-10">
          <p className="eyebrow mb-4 text-antique-gold">
            Un gesto simbólico, a tu propio ritmo
          </p>
          <h1
            className="max-w-[13ch] font-editorial text-[clamp(2.6rem,6vw,4.8rem)] leading-[0.98] font-medium tracking-[-0.04em] text-ivory"
            aria-live="polite"
          >
            {completion ? "Gracias por encender tu vela" : STAGE_COPY[stage]}
          </h1>

          {stage !== "arrival" && !completion && (
            <div className="mt-8">
              <StepIndicator stage={stage} />
            </div>
          )}

          {completion && (
            <div className="mt-7 space-y-5" role="status">
              <p className="font-editorial text-xl leading-relaxed text-ivory-muted">
                Tu luz ya forma parte de la Sala de luz y acompaña a la
                comunidad.
              </p>
              <div>
                <a href="/sala-de-velas/" className="candle-room-action">
                  <CandleRoomIcon name="candle" />
                  Ver la sala de luz
                </a>
              </div>
            </div>
          )}

          {!completion && stage === "arrival" && (
            <div className="mt-7">
              <p className="max-w-[35rem] font-editorial text-xl leading-relaxed text-ivory-muted sm:text-2xl">
                No tienes que resolver nada ahora. Solo hacer una pausa y
                regalarle un instante a aquello que importa.
              </p>
              <div className="mt-8 flex items-center gap-3 text-sm text-ivory-muted">
                <span className="ritual-breath-dot" aria-hidden="true" />
                <span>Inhala despacio. Exhala con calma.</span>
              </div>
              <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3">
                <button
                  type="button"
                  onClick={() => setStage("intention")}
                  className="candle-room-action"
                >
                  <CandleRoomIcon name="candle" />
                  Comenzar
                </button>
                <a href="/sala-de-velas/" className="ritual-text-button">
                  Visitar la sala <CandleRoomIcon name="next" />
                </a>
              </div>
              <p className="mt-5 max-w-sm text-xs leading-relaxed text-ivory-muted/70">
                Tu vela se registrará en la sala compartida. La ubicación es
                opcional y solo será pública si lo autorizas expresamente.
              </p>
            </div>
          )}

          {!completion && stage === "intention" && (
            <div className="mt-6">
              <p className="mb-5 text-sm leading-relaxed text-ivory-muted">
                Escoge una palabra como punto de partida. No hay una opción
                correcta.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {INTENTIONS.map((option) => {
                  const selected = intention === option.label;
                  return (
                    <button
                      key={option.label}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => setIntention(option.label)}
                      className={`ritual-intention-card ${
                        selected ? "is-selected" : ""
                      }`}
                    >
                      <span className="text-xl text-antique-gold">
                        <CandleRoomIcon name={option.symbol} />
                      </span>
                      <span className="mt-2 font-interface text-sm font-semibold">
                        {option.label}
                      </span>
                      <span className="mt-1 text-xs leading-snug text-ivory-muted">
                        {option.description}
                      </span>
                    </button>
                  );
                })}
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setStage("arrival")}
                  className="ritual-text-button"
                >
                  <CandleRoomIcon name="previous" /> Volver
                </button>
                <button
                  type="button"
                  disabled={!intention}
                  onClick={() => setStage("dedication")}
                  className="candle-room-action"
                >
                  Continuar <CandleRoomIcon name="next" />
                </button>
              </div>
            </div>
          )}

          {!completion && stage === "dedication" && (
            <div className="mt-6 space-y-6">
              <p className="text-sm leading-relaxed text-ivory-muted">
                Has elegido{" "}
                <span className="font-semibold text-antique-gold">
                  {intention?.toLowerCase()}
                </span>
                . Si quieres, escribe unas palabras para acompañar este momento.
              </p>
              <label className="block">
                <span className="mb-2 block font-interface text-sm font-medium text-ivory">
                  Dedicatoria{" "}
                  <span className="text-ivory-muted">(opcional)</span>
                </span>
                <textarea
                  value={dedication}
                  onChange={(event) =>
                    setDedication(event.target.value.slice(0, 180))
                  }
                  rows={3}
                  maxLength={180}
                  placeholder="Una palabra, un nombre o aquello que quieras llevar contigo…"
                  className="ritual-input min-h-28 resize-y"
                />
                <span className="mt-2 block text-right text-xs text-ivory-muted">
                  {dedication.length}/180
                </span>
              </label>
              <label className="block">
                <span className="mb-3 block font-interface text-sm font-medium text-ivory">
                  Elige el tono de tu luz
                </span>
                <span className="flex flex-wrap gap-3">
                  {CANDLE_COLORS.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      aria-label={`Vela ${option.label.toLowerCase()}`}
                      aria-pressed={color === option.value}
                      onClick={() => setColor(option.value)}
                      className={`ritual-color-swatch ${
                        color === option.value ? "is-selected" : ""
                      }`}
                      style={{ "--swatch-color": option.wax } as CSSProperties}
                    >
                      <span />
                    </button>
                  ))}
                  <span className="self-center text-xs text-ivory-muted">
                    {CANDLE_COLORS.find((option) => option.value === color)
                      ?.label ?? "Marfil"}
                  </span>
                </span>
              </label>
              <label className="block max-w-xs">
                <span className="mb-2 block font-interface text-sm font-medium text-ivory">
                  ¿Cómo quieres firmar?{" "}
                  <span className="text-ivory-muted">(opcional)</span>
                </span>
                <input
                  type="text"
                  value={name}
                  maxLength={48}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Un nombre o iniciales"
                  className="ritual-input"
                />
              </label>
              <fieldset className="space-y-4 border-t border-antique-gold-soft/25 pt-5">
                <legend className="font-interface text-sm font-semibold text-ivory">
                  Ubicación{" "}
                  <span className="font-normal text-ivory-muted">
                    (opcional)
                  </span>
                </legend>
                <div className="relative">
                  <label
                    htmlFor="candle-country"
                    className="mb-2 block font-interface text-sm text-ivory"
                  >
                    País
                  </label>
                  <input
                    id="candle-country"
                    role="combobox"
                    aria-expanded={countryMenuOpen}
                    aria-controls="candle-country-options"
                    aria-autocomplete="list"
                    autoComplete="off"
                    value={
                      countryMenuOpen
                        ? countryQuery
                        : selectedCountry
                          ? countryLabel(selectedCountry)
                          : countryQuery
                    }
                    onFocus={() => {
                      setCountryQuery("");
                      setCountryMenuOpen(true);
                    }}
                    onChange={(event) => {
                      setCountryQuery(event.target.value);
                      setCountryCode("");
                      setSelectedCity(null);
                      setCityQuery("");
                      setPublishLocation(false);
                      setCities([]);
                      setCitiesError("");
                      setCitiesLoading(false);
                      setCountryMenuOpen(true);
                    }}
                    onBlur={() =>
                      window.setTimeout(() => setCountryMenuOpen(false), 150)
                    }
                    placeholder={
                      countriesLoading ? "Cargando países…" : "Buscar país"
                    }
                    className="ritual-input"
                  />
                  {countryMenuOpen && (
                    <ul
                      id="candle-country-options"
                      role="listbox"
                      className="ritual-location-options"
                    >
                      {filteredCountries.map((country) => (
                        <li
                          key={country.code}
                          role="option"
                          aria-selected={country.code === countryCode}
                        >
                          <button
                            type="button"
                            onMouseDown={(event) => event.preventDefault()}
                            onClick={() => {
                              setCountryCode(country.code);
                              setCountryQuery("");
                              setCountryMenuOpen(false);
                              setSelectedCity(null);
                              setCityQuery("");
                              setPublishLocation(false);
                              setCities([]);
                              setCitiesError("");
                              setCitiesLoading(false);
                            }}
                          >
                            {countryLabel(country)}
                          </button>
                        </li>
                      ))}
                      {!countriesLoading && filteredCountries.length === 0 && (
                        <li className="ritual-location-message">
                          No encontramos países con esa búsqueda.
                        </li>
                      )}
                    </ul>
                  )}
                  {countriesLoading && (
                    <p className="mt-2 text-xs text-ivory-muted" role="status">
                      Cargando listado de países…
                    </p>
                  )}
                  {countriesError && (
                    <p className="mt-2 text-xs text-red-200" role="alert">
                      {countriesError}
                    </p>
                  )}
                </div>
                <div className="relative">
                  <label
                    htmlFor="candle-city"
                    className="mb-2 block font-interface text-sm text-ivory"
                  >
                    Ciudad
                  </label>
                  <input
                    id="candle-city"
                    type="search"
                    autoComplete="off"
                    disabled={!countryCode}
                    value={cityQuery}
                    onChange={(event) => {
                      setCityQuery(event.target.value);
                      setSelectedCity(null);
                      setPublishLocation(false);
                      setCities([]);
                      setCitiesError("");
                      setCitiesLoading(false);
                    }}
                    placeholder={
                      countryCode
                        ? "Escribe para buscar…"
                        : "Primero elige un país"
                    }
                    className="ritual-input disabled:opacity-50"
                  />
                  {citiesLoading && (
                    <p className="mt-2 text-xs text-ivory-muted" role="status">
                      Buscando ciudades…
                    </p>
                  )}
                  {citiesError && (
                    <p className="mt-2 text-xs text-red-200" role="alert">
                      {citiesError}
                    </p>
                  )}
                  {!citiesLoading &&
                    !citiesError &&
                    countryCode &&
                    cityQuery.trim().length >= 2 &&
                    cities.length === 0 &&
                    !selectedCity && (
                      <p className="mt-2 text-xs text-ivory-muted">
                        No encontramos ciudades con esa búsqueda.
                      </p>
                    )}
                  {cities.length > 0 && !selectedCity && (
                    <ul
                      className="ritual-location-options"
                      aria-label="Resultados de ciudades"
                    >
                      {cities.map((city) => (
                        <li key={city.id}>
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedCity(city);
                              setCityQuery(city.name);
                              setPublishLocation(false);
                              setCities([]);
                              setCitiesError("");
                            }}
                          >
                            {city.name}
                            {city.region ? ` · ${city.region}` : ""}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                  {selectedCity && (
                    <button
                      type="button"
                      className="ritual-text-button mt-1"
                      onClick={() => {
                        setSelectedCity(null);
                        setCityQuery("");
                        setPublishLocation(false);
                      }}
                    >
                      <CandleRoomIcon name="close" /> Quitar ciudad
                    </button>
                  )}
                </div>
                <label className="flex items-start gap-3 text-sm leading-relaxed text-ivory-muted">
                  <input
                    type="checkbox"
                    checked={publishLocation}
                    disabled={!countryCode || !selectedCity}
                    onChange={(event) =>
                      setPublishLocation(event.target.checked)
                    }
                    className="mt-1 size-4 shrink-0 accent-antique-gold"
                  />
                  <span>
                    Autorizo mostrar mi país y ciudad en la Sala de luz pública
                    {selectedCountry
                      ? ` (${countryLabel(selectedCountry)}${selectedCity ? `, ${selectedCity.name}` : ""})`
                      : ""}
                    . Para publicarla, elige un país y una ciudad. Si no marco
                    esta casilla, la ubicación se mantiene privada.
                  </span>
                </label>
                {countryCode && !selectedCity && (
                  <p className="ml-7 text-xs text-ivory-muted">
                    Selecciona una ciudad para habilitar la publicación de la
                    ubicación.
                  </p>
                )}
              </fieldset>
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStage("intention")}
                  className="ritual-text-button"
                >
                  <CandleRoomIcon name="previous" /> Volver
                </button>
                <button
                  type="button"
                  onClick={() => setStage("lighting")}
                  className="candle-room-action"
                >
                  <CandleRoomIcon name="candle" /> Preparar la vela
                </button>
              </div>
            </div>
          )}

          {!completion && stage === "lighting" && (
            <div className="mt-7">
              <p className="max-w-md font-editorial text-xl leading-relaxed text-ivory-muted">
                {dedication.trim()
                  ? `“${dedication.trim()}”`
                  : `Una luz para ${intention?.toLowerCase() ?? "tu intención"}.`}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-ivory-muted">
                Cuando estés listo, toca la mecha. Tómate el tiempo que
                necesites.
              </p>
              <div className="mt-8 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setStage("dedication")}
                  className="ritual-text-button"
                >
                  <CandleRoomIcon name="previous" /> Volver
                </button>
                <span className="max-w-40 text-right font-interface text-xs text-antique-gold">
                  {isSubmitting
                    ? "Encendiendo tu vela…"
                    : "Toca la mecha de la vela para encender"}
                </span>
              </div>
              {saveError && (
                <p className="mt-4 text-sm text-red-200" role="alert">
                  {saveError}
                </p>
              )}
              {isSubmitting && (
                <p className="sr-only" role="status">
                  Registrando la vela en la sala compartida…
                </p>
              )}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
