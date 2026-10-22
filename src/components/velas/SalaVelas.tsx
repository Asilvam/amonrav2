import { useEffect, useMemo, useState, type SyntheticEvent } from "react";
import "./velas.css";
import {
  getCandleCountries,
  getRoomCandles,
  readTrackingCredentials,
  trackCandle,
} from "./api";
import type { CandleCountry } from "./api";
import {
  CANDLE_BURN_DURATION_MS,
  CANDLE_FRAMES,
  getCandleFrameIndex,
  getCandleTimeLeft,
} from "./candle-room";
import type { RoomCandle } from "./candle-room";
import CandleVisual from "./CandleVisual";

function formatTimeLeft(milliseconds: number): string {
  if (milliseconds <= 0) return "La llama se ha apagado";
  const totalMinutes = Math.ceil(milliseconds / 60_000);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (hours === 0) return `Se consume en ${minutes} min`;
  return `${hours} h ${String(minutes).padStart(2, "0")} min restantes`;
}

function burningProgress(startedAt: number, now: number): number {
  return Math.min(
    100,
    Math.max(0, ((now - startedAt) / CANDLE_BURN_DURATION_MS) * 100),
  );
}

export default function SalaVelas() {
  const [candles, setCandles] = useState<RoomCandle[]>([]);
  const [countries, setCountries] = useState<CandleCountry[]>([]);
  const [locationCountryError, setLocationCountryError] = useState("");
  const [now, setNow] = useState(() => Date.now());
  const [ready, setReady] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [reference, setReference] = useState("");
  const [trackingToken, setTrackingToken] = useState("");
  const [trackedCandle, setTrackedCandle] = useState<RoomCandle | null>(null);
  const [trackingError, setTrackingError] = useState("");
  const [trackingLoading, setTrackingLoading] = useState(false);

  useEffect(() => {
    let active = true;
    const requestedReference = new URLSearchParams(window.location.search).get(
      "vela",
    );
    let savedTrackingError = "";
    const selectedTimer = window.setTimeout(() => {
      setSelectedId(requestedReference);
      if (savedTrackingError) setTrackingError(savedTrackingError);
    }, 0);
    let credentialsTimer: number | undefined;

    const loadRoom = async () => {
      try {
        const result = await getRoomCandles();
        if (active) {
          setCandles(result);
          setError("");
        }
      } catch (loadError) {
        if (active) {
          setError(
            loadError instanceof Error
              ? loadError.message
              : "No pudimos cargar las velas de la sala.",
          );
        }
      } finally {
        if (active) setReady(true);
      }
    };
    const loadCountries = async () => {
      try {
        const result = await getCandleCountries();
        if (active) setCountries(result);
      } catch (countryError) {
        if (active) {
          setCountries([]);
          setLocationCountryError(
            countryError instanceof Error
              ? countryError.message
              : "No pudimos cargar los nombres de países.",
          );
        }
      }
    };
    try {
      const savedCredentials = readTrackingCredentials();
      const saved = savedCredentials.find(
        (item) => item.reference === requestedReference,
      );
      if (saved) {
        credentialsTimer = window.setTimeout(() => {
          setReference(saved.reference);
          setTrackingToken(saved.trackingToken);
        }, 0);
      }
    } catch {
      savedTrackingError =
        "No pudimos leer los datos locales de seguimiento. Puedes ingresarlos manualmente.";
    }
    void loadRoom();
    void loadCountries();

    const clockInterval = window.setInterval(() => setNow(Date.now()), 30_000);
    const refreshInterval = window.setInterval(() => void loadRoom(), 60_000);
    return () => {
      active = false;
      window.clearTimeout(selectedTimer);
      if (credentialsTimer !== undefined) {
        window.clearTimeout(credentialsTimer);
      }
      window.clearInterval(clockInterval);
      window.clearInterval(refreshInterval);
    };
  }, []);

  useEffect(() => {
    for (const frame of CANDLE_FRAMES) {
      const image = new Image();
      image.src = frame;
    }
  }, []);

  const selectedCandle = useMemo(
    () => candles.find((candle) => candle.id === selectedId),
    [candles, selectedId],
  );
  const litCandles = candles.filter(
    (candle) => now - candle.startedAt < CANDLE_BURN_DURATION_MS,
  );
  const extinguishedCandles = candles.filter(
    (candle) => now - candle.startedAt >= CANDLE_BURN_DURATION_MS,
  );
  const locationFor = (candle: RoomCandle) => {
    if (!candle.publishLocation || !candle.countryCode) return "";
    const language = document.documentElement.lang.toLowerCase();
    const country = countries.find((item) => item.code === candle.countryCode);
    const countryName = country
      ? language.startsWith("en")
        ? country.name.en
        : country.name.es
      : candle.countryCode;
    return [candle.cityName, countryName].filter(Boolean).join(", ");
  };
  const submitTracking = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTrackingLoading(true);
    setTrackingError("");
    setTrackedCandle(null);
    try {
      const candle = await trackCandle({
        reference: reference.trim(),
        trackingToken: trackingToken.trim(),
      });
      setTrackedCandle(candle);
    } catch (trackError) {
      setTrackingError(
        trackError instanceof Error
          ? trackError.message
          : "No pudimos consultar esta vela.",
      );
    } finally {
      setTrackingLoading(false);
    }
  };

  return (
    <div className="candle-room-page">
      <div className="candle-room-atmosphere" aria-hidden="true" />
      <div className="relative z-10 mx-auto min-h-[calc(100svh-5rem)] w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <header className="candle-room-heading">
          <div>
            <p className="eyebrow text-antique-gold">
              AMONRA · ESPACIO DE INTENCIÓN
            </p>
            <h1 className="mt-4 max-w-[14ch] font-editorial text-[clamp(2.7rem,6vw,5.5rem)] leading-[0.94] font-medium tracking-[-0.04em] text-ivory">
              Sala de luz
            </h1>
            <p className="mt-4 max-w-2xl font-editorial text-lg leading-relaxed text-ivory-muted sm:text-xl">
              Cada llama conserva una intención. Acompáñala en su recorrido,
              desde el primer brillo hasta su último hilo de humo.
            </p>
          </div>
          <a href="/encender-vela/" className="ritual-primary-button shrink-0">
            Encender una vela <span aria-hidden="true">↗</span>
          </a>
        </header>

        <div className="candle-room-stats" aria-live="polite">
          <div>
            <strong>{ready ? litCandles.length : "—"}</strong>
            <span>encendidas en la sala</span>
          </div>
          <div>
            <strong>{ready ? extinguishedCandles.length : "—"}</strong>
            <span>que ya completaron su ciclo</span>
          </div>
          <span className="candle-room-live">
            <span aria-hidden="true" />
            Sala activa · ciclos de 48 horas
          </span>
        </div>

        {error && (
          <p className="candle-room-error" role="alert">
            {error}
          </p>
        )}

        {!ready ? (
          <p className="mt-12 text-center text-ivory-muted" role="status">
            Preparando la sala de luz…
          </p>
        ) : error && candles.length === 0 ? (
          <section className="candle-room-empty">
            <h2 className="font-editorial text-3xl text-ivory">
              No pudimos cargar la sala
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-ivory-muted">
              La sala no está disponible en este momento. Inténtalo de nuevo.
            </p>
            <button
              type="button"
              className="ritual-primary-button mt-6"
              onClick={() => window.location.reload()}
            >
              Volver a intentar
            </button>
          </section>
        ) : candles.length === 0 ? (
          <section className="candle-room-empty">
            <div className="candle-room-empty__mark" aria-hidden="true">
              ✧
            </div>
            <h2 className="font-editorial text-3xl text-ivory">
              La primera luz puede ser la tuya
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-ivory-muted">
              Enciende una vela y aparecerá aquí para toda la comunidad con su
              evolución, intención y tiempo restante.
            </p>
            <a href="/encender-vela/" className="ritual-primary-button mt-6">
              Encender la primera vela <span aria-hidden="true">↗</span>
            </a>
          </section>
        ) : (
          <>
            {litCandles.length > 0 && (
              <section aria-labelledby="velas-encendidas">
                <div className="mb-6 flex items-end justify-between gap-4">
                  <div>
                    <p className="eyebrow text-antique-gold">EN ESTE MOMENTO</p>
                    <h2
                      id="velas-encendidas"
                      className="mt-2 font-editorial text-3xl text-ivory sm:text-4xl"
                    >
                      Llamas encendidas
                    </h2>
                  </div>
                  <span className="font-interface text-sm text-ivory-muted">
                    {litCandles.length}{" "}
                    {litCandles.length === 1 ? "vela" : "velas"}
                  </span>
                </div>
                <div className="candle-room-grid">
                  {litCandles.map((candle) => {
                    const frameIndex = getCandleFrameIndex(
                      candle.startedAt,
                      now,
                    );
                    const selected = selectedId === candle.id;
                    return (
                      <article
                        key={candle.id}
                        className={`candle-room-card${selected ? " is-selected" : ""}`}
                      >
                        <button
                          type="button"
                          className="candle-room-card__open"
                          aria-pressed={selected}
                          onClick={() =>
                            setSelectedId(selected ? null : candle.id)
                          }
                        >
                          <CandleVisual
                            startedAt={candle.startedAt}
                            now={now}
                            color={candle.color}
                            label={`Vela ${candle.intention.toLowerCase()}, fase ${frameIndex + 1} de 10`}
                            className="candle-room-card__visual"
                          />
                          <span className="candle-room-card__content">
                            <span className="candle-room-card__name">
                              {candle.name || candle.intention}
                            </span>
                            <span className="candle-room-card__meta">
                              {candle.intention} · encendida{" "}
                              {new Intl.DateTimeFormat("es-CL", {
                                hour: "2-digit",
                                minute: "2-digit",
                              }).format(candle.startedAt)}
                            </span>
                            {locationFor(candle) && (
                              <span className="candle-room-card__location">
                                {locationFor(candle)}
                              </span>
                            )}
                            {candle.dedication && (
                              <span className="candle-room-card__dedication">
                                “{candle.dedication}”
                              </span>
                            )}
                            <span className="candle-room-card__time">
                              {frameIndex < CANDLE_FRAMES.length - 1
                                ? `Fase ${frameIndex + 1} de 10 · ${formatTimeLeft(getCandleTimeLeft(candle.startedAt, now))}`
                                : "Fase 10 de 10 · La llama se ha apagado"}
                            </span>
                            <span
                              className="candle-room-progress"
                              role="progressbar"
                              aria-label="Progreso de combustión"
                              aria-valuemin={0}
                              aria-valuemax={100}
                              aria-valuenow={Math.floor(
                                burningProgress(candle.startedAt, now),
                              )}
                            >
                              <span
                                style={{
                                  width: `${burningProgress(candle.startedAt, now)}%`,
                                }}
                              />
                            </span>
                          </span>
                        </button>
                      </article>
                    );
                  })}
                </div>
              </section>
            )}

            {selectedCandle && (
              <aside
                className="candle-room-selected"
                aria-label="Detalle de vela seleccionada"
              >
                <CandleVisual
                  startedAt={selectedCandle.startedAt}
                  now={now}
                  color={selectedCandle.color}
                  label={`Vela de ${selectedCandle.intention.toLowerCase()}`}
                  className="candle-room-selected__visual"
                />
                <div>
                  <p className="eyebrow text-antique-gold">
                    UNA INTENCIÓN, UNA LUZ
                  </p>
                  <h3 className="mt-2 font-editorial text-2xl text-ivory">
                    {selectedCandle.intention}
                  </h3>
                  {selectedCandle.dedication && (
                    <p className="mt-3 font-editorial text-lg italic text-ivory-muted">
                      “{selectedCandle.dedication}”
                    </p>
                  )}
                  {locationFor(selectedCandle) && (
                    <p className="mt-2 text-sm text-ivory-muted">
                      {locationFor(selectedCandle)}
                    </p>
                  )}
                  <p className="mt-3 text-sm text-ivory-muted">
                    {formatTimeLeft(
                      getCandleTimeLeft(selectedCandle.startedAt, now),
                    )}
                  </p>
                </div>
                <button
                  type="button"
                  className="candle-room-selected__close"
                  onClick={() => setSelectedId(null)}
                  aria-label="Cerrar detalle"
                >
                  ×
                </button>
              </aside>
            )}

            {extinguishedCandles.length > 0 && (
              <section
                className="mt-16 border-t border-antique-gold-soft/25 pt-10"
                aria-labelledby="velas-ciclo-completo"
              >
                <p className="eyebrow text-ivory-muted">EL CICLO COMPLETO</p>
                <h2
                  id="velas-ciclo-completo"
                  className="mt-2 font-editorial text-3xl text-ivory"
                >
                  Luces que descansan
                </h2>
                <div className="candle-room-grid mt-6">
                  {extinguishedCandles.map((candle) => (
                    <article
                      key={candle.id}
                      className="candle-room-card is-out"
                    >
                      <CandleVisual
                        startedAt={candle.startedAt}
                        now={now}
                        color={candle.color}
                        label={`Vela apagada por ${candle.intention.toLowerCase()}`}
                        className="candle-room-card__visual"
                      />
                      <div className="candle-room-card__content">
                        <span className="candle-room-card__name">
                          {candle.name || candle.intention}
                        </span>
                        <span className="candle-room-card__meta">
                          {candle.intention} · la llama se ha apagado
                        </span>
                        {locationFor(candle) && (
                          <span className="candle-room-card__location">
                            {locationFor(candle)}
                          </span>
                        )}
                        {candle.dedication && (
                          <span className="candle-room-card__dedication">
                            “{candle.dedication}”
                          </span>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}
          </>
        )}

        <section
          className="candle-tracking-panel"
          aria-labelledby="candle-tracking-title"
        >
          <div>
            <p className="eyebrow text-antique-gold">SEGUIMIENTO PRIVADO</p>
            <h2
              id="candle-tracking-title"
              className="mt-2 font-editorial text-2xl text-ivory"
            >
              Consulta tu vela
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-ivory-muted">
              Usa la referencia y el código que recibiste al encenderla. El
              código es privado y no se publica en la Sala.
            </p>
          </div>
          {locationCountryError && (
            <p className="candle-room-error" role="alert">
              {locationCountryError} La ubicación de las velas visibles se
              mostrará usando el código del país.
            </p>
          )}
          <form className="candle-tracking-form" onSubmit={submitTracking}>
            <label>
              <span>Referencia</span>
              <input
                required
                value={reference}
                onChange={(event) => setReference(event.target.value)}
                autoComplete="off"
              />
            </label>
            <label>
              <span>Código de seguimiento</span>
              <input
                required
                value={trackingToken}
                onChange={(event) => setTrackingToken(event.target.value)}
                autoComplete="off"
              />
            </label>
            <button
              type="submit"
              className="ritual-primary-button"
              disabled={trackingLoading}
            >
              {trackingLoading ? "Consultando…" : "Consultar"}
            </button>
          </form>
          {trackingError && (
            <p className="candle-room-error" role="alert">
              {trackingError}
            </p>
          )}
          {trackedCandle && (
            <div className="candle-tracking-result" role="status">
              <strong>{trackedCandle.intention}</strong>
              <span>
                {formatTimeLeft(
                  getCandleTimeLeft(trackedCandle.startedAt, now),
                )}
              </span>
              {trackedCandle.dedication && (
                <span>“{trackedCandle.dedication}”</span>
              )}
              {locationFor(trackedCandle) && (
                <span>{locationFor(trackedCandle)}</span>
              )}
            </div>
          )}
        </section>

        <p className="candle-room-note">
          La sala muestra las velas registradas por la comunidad. La ubicación
          solo aparece cuando quien encendió la vela autorizó compartirla.
        </p>
      </div>
    </div>
  );
}
