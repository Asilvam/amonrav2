import { useEffect, useMemo, useState } from "react";
import "./velas.css";
import { getCandleCountries } from "./api";
import type { CandleCountry } from "./api";
import {
  CANDLE_BURN_DURATION_MS,
  CANDLE_FRAMES,
  CANDLE_SMOKE_DURATION_MS,
} from "./candle-room";
import type { RoomCandle } from "./candle-room";
import CandleVisual from "./CandleVisual";
import CandleCollection from "./CandleCollection";
import CandleStartedAt from "./CandleStartedAt";
import CandlePagination from "./CandlePagination";
import CandleRoomIcon from "./CandleRoomIcon";
import { useCandlePage } from "./useCandlePage";

function burningProgress(startedAt: number, now: number): number {
  return Math.min(
    100,
    Math.max(0, ((now - startedAt) / CANDLE_BURN_DURATION_MS) * 100),
  );
}

export default function SalaVelas() {
  const [countries, setCountries] = useState<CandleCountry[]>([]);
  const [locationCountryError, setLocationCountryError] = useState("");
  const [now, setNow] = useState(() => Date.now());
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const activePage = useCandlePage("active");
  const restingPage = useCandlePage("extinguished");
  const litCandles = activePage.candles;
  const extinguishedCandles = restingPage.candles;
  const refreshActive = activePage.refresh;
  const refreshResting = restingPage.refresh;
  const candles = useMemo(
    () => [...litCandles, ...extinguishedCandles],
    [litCandles, extinguishedCandles],
  );
  const ready = activePage.loaded && restingPage.loaded;
  const error = [activePage.error, restingPage.error].filter(Boolean).join(" ");

  useEffect(() => {
    let active = true;

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
    void loadCountries();

    const clockInterval = window.setInterval(() => setNow(Date.now()), 1_000);
    return () => {
      active = false;
      window.clearInterval(clockInterval);
    };
  }, []);

  useEffect(() => {
    const nextCandleChangeAt = candles.reduce<number | null>((next, candle) => {
      const extinguishAt = candle.startedAt + CANDLE_BURN_DURATION_MS;
      const nextChangeAt =
        extinguishAt > now
          ? extinguishAt
          : extinguishAt + CANDLE_SMOKE_DURATION_MS;
      return nextChangeAt > now && (next === null || nextChangeAt < next)
        ? nextChangeAt
        : next;
    }, null);
    if (nextCandleChangeAt === null) return;

    const timeout = window.setTimeout(
      () => setNow(Date.now()),
      Math.max(0, nextCandleChangeAt - now),
    );
    return () => window.clearTimeout(timeout);
  }, [candles, now]);

  useEffect(() => {
    if (litCandles.length === 0) return;
    const nextExpiry = Math.min(
      ...litCandles.map((candle) => candle.startedAt + CANDLE_BURN_DURATION_MS),
    );
    const timeout = window.setTimeout(
      () => {
        refreshActive();
        refreshResting();
      },
      Math.max(1000, nextExpiry - Date.now() + 100),
    );
    return () => window.clearTimeout(timeout);
  }, [litCandles, refreshActive, refreshResting]);

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
          <a href="/encender-vela/" className="candle-room-action shrink-0">
            <CandleRoomIcon name="candle" />
            Encender una vela
          </a>
        </header>

        <div className="candle-room-stats" aria-live="polite">
          <div>
            <strong>{ready ? activePage.total : "—"}</strong>
            <span>encendidas en la sala</span>
          </div>
          <div>
            <strong>{ready ? restingPage.total : "—"}</strong>
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
          <div
            className="candle-room-loading mt-12"
            role="status"
            aria-live="polite"
          >
            <span className="candle-room-spinner" aria-hidden="true" />
            <span>Preparando la sala de luz…</span>
          </div>
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
              className="candle-room-action mt-6"
              onClick={() => window.location.reload()}
            >
              <CandleRoomIcon name="retry" />
              Volver a intentar
            </button>
          </section>
        ) : candles.length === 0 ? (
          <section className="candle-room-empty">
            <div className="candle-room-empty__mark" aria-hidden="true">
              <CandleRoomIcon name="candle" />
            </div>
            <h2 className="font-editorial text-3xl text-ivory">
              La primera luz puede ser la tuya
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-ivory-muted">
              Enciende una vela y aparecerá aquí para toda la comunidad con su
              evolución, intención y tiempo restante.
            </p>
            <a href="/encender-vela/" className="candle-room-action mt-6">
              <CandleRoomIcon name="candle" />
              Encender la primera vela
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
                    {activePage.total}{" "}
                    {activePage.total === 1 ? "vela" : "velas"}
                  </span>
                </div>
                <CandleCollection
                  key={`active-${activePage.page}`}
                  count={litCandles.length}
                  total={activePage.total}
                  loading={activePage.loading}
                  label="Llamas encendidas"
                >
                  {litCandles.map((candle) => {
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
                            label={`Vela encendida de ${candle.intention.toLowerCase()}`}
                            className="candle-room-card__visual"
                          />
                          <span className="candle-room-card__content">
                            <span className="candle-room-card__name">
                              {candle.name || candle.intention}
                            </span>
                            <span className="candle-room-card__meta">
                              {candle.intention}
                            </span>
                            <CandleStartedAt startedAt={candle.startedAt} />
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
                </CandleCollection>
                <CandlePagination
                  page={activePage.page}
                  total={activePage.total}
                  loading={activePage.loading}
                  label="Llamas encendidas"
                  onPageChange={activePage.setPage}
                />
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
                  <p className="mt-3">
                    <CandleStartedAt startedAt={selectedCandle.startedAt} />
                  </p>
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
                </div>
                <button
                  type="button"
                  className="candle-room-selected__close"
                  onClick={() => setSelectedId(null)}
                  aria-label="Cerrar detalle"
                >
                  <CandleRoomIcon name="close" />
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
                <div className="mt-6">
                  <CandleCollection
                    key={`extinguished-${restingPage.page}`}
                    count={extinguishedCandles.length}
                    total={restingPage.total}
                    loading={restingPage.loading}
                    label="Luces que descansan"
                  >
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
                          <CandleStartedAt startedAt={candle.startedAt} />
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
                  </CandleCollection>
                  <CandlePagination
                    page={restingPage.page}
                    total={restingPage.total}
                    loading={restingPage.loading}
                    label="Luces que descansan"
                    onPageChange={restingPage.setPage}
                  />
                </div>
              </section>
            )}
          </>
        )}

        {locationCountryError && (
          <p className="candle-room-error" role="alert">
            {locationCountryError} La ubicación de las velas visibles se
            mostrará usando el código del país.
          </p>
        )}
        <p className="candle-room-note">
          La sala muestra las velas registradas por la comunidad. La ubicación
          solo aparece cuando quien encendió la vela autorizó compartirla.
        </p>
      </div>
    </div>
  );
}
