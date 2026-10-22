import { useEffect, useMemo, useState } from "react";
import "./velas.css";
import {
  CANDLE_BURN_DURATION_MS,
  CANDLE_FRAMES,
  getCandleFrameIndex,
  getCandleTimeLeft,
  readRoomCandles,
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
  const [now, setNow] = useState(() => Date.now());
  const [ready, setReady] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    const loadRoom = async () => {
      try {
        setCandles(readRoomCandles());
        setSelectedId(new URLSearchParams(window.location.search).get("vela"));
      } catch (storageError) {
        setError(
          storageError instanceof Error
            ? storageError.message
            : "No pudimos abrir la sala en este navegador.",
        );
      }
      setReady(true);
    };
    void loadRoom();

    const interval = window.setInterval(() => setNow(Date.now()), 30_000);
    return () => window.clearInterval(interval);
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
            <span>encendidas en esta sesión</span>
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
        ) : candles.length === 0 ? (
          <section className="candle-room-empty">
            <div className="candle-room-empty__mark" aria-hidden="true">
              ✧
            </div>
            <h2 className="font-editorial text-3xl text-ivory">
              La primera luz puede ser la tuya
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-ivory-muted">
              Enciende una vela desde este navegador y aparecerá aquí con su
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

        <p className="candle-room-note">
          Por ahora, las velas de esta sala se guardan solo en esta pestaña del
          navegador; todavía no se comparten entre visitantes.
        </p>
      </div>
    </div>
  );
}
