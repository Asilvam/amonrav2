import { useState, type CSSProperties } from "react";
import "./velas.css";
import CandleVisual from "./CandleVisual";
import { CANDLE_COLORS, saveRoomCandle } from "./candle-room";
import type { CandleColor, Intention } from "./candle-room";

type Stage = "arrival" | "intention" | "dedication" | "lighting";

interface IntentionOption {
  label: Intention;
  description: string;
  symbol: string;
}

const INTENTIONS: IntentionOption[] = [
  {
    label: "Gratitud",
    description: "Dar espacio a lo bueno que ya está.",
    symbol: "✳",
  },
  {
    label: "Esperanza",
    description: "Cuidar una posibilidad que comienza.",
    symbol: "↗",
  },
  {
    label: "Calma",
    description: "Volver, con suavidad, al presente.",
    symbol: "≈",
  },
  {
    label: "Amor",
    description: "Acompañar un vínculo importante.",
    symbol: "♡",
  },
  {
    label: "Fortaleza",
    description: "Reconocer la fuerza que te sostiene.",
    symbol: "⌁",
  },
  {
    label: "Recuerdo",
    description: "Mantener cerca a quien llevas contigo.",
    symbol: "✧",
  },
];

const STAGE_COPY: Record<Stage, string> = {
  arrival: "Un momento para ti",
  intention: "Elige lo que quieres honrar",
  dedication: "Pon tu intención en palabras",
  lighting: "Acércate a la luz",
};

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
  const [saveError, setSaveError] = useState("");

  const igniteCandle = () => {
    if (!intention) return;
    try {
      const candleId = window.crypto.randomUUID();
      saveRoomCandle({
        id: candleId,
        intention,
        dedication: dedication.trim(),
        name: name.trim(),
        color,
        startedAt: Date.now(),
      });
      window.location.assign(
        `/sala-de-velas/?vela=${encodeURIComponent(candleId)}`,
      );
    } catch (error) {
      setSaveError(
        error instanceof Error
          ? error.message
          : "No se pudo guardar tu vela en esta sesión del navegador.",
      );
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
            color={color}
            label="Vela sin encender"
            interactive={stage === "lighting"}
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
            {STAGE_COPY[stage]}
          </h1>

          {stage !== "arrival" && (
            <div className="mt-8">
              <StepIndicator stage={stage} />
            </div>
          )}

          {stage === "arrival" && (
            <div className="mt-7">
              <p className="max-w-[35rem] font-editorial text-xl leading-relaxed text-ivory-muted sm:text-2xl">
                No tienes que resolver nada ahora. Solo hacer una pausa y
                regalarle un instante a aquello que importa.
              </p>
              <div className="mt-8 flex items-center gap-3 text-sm text-ivory-muted">
                <span className="ritual-breath-dot" aria-hidden="true" />
                <span>Inhala despacio. Exhala con calma.</span>
              </div>
              <button
                type="button"
                onClick={() => setStage("intention")}
                className="ritual-primary-button mt-9"
              >
                Comenzar
                <span aria-hidden="true">↗</span>
              </button>
              <a href="/sala-de-velas/" className="ritual-text-button ml-4">
                Visitar la sala →
              </a>
              <p className="mt-5 max-w-sm text-xs leading-relaxed text-ivory-muted/70">
                Esta experiencia es privada y simbólica. Tu vela se conserva
                solo en esta pestaña; no se envía al formulario de peticiones.
              </p>
            </div>
          )}

          {stage === "intention" && (
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
                        {option.symbol}
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
                  ← Volver
                </button>
                <button
                  type="button"
                  disabled={!intention}
                  onClick={() => setStage("dedication")}
                  className="ritual-primary-button"
                >
                  Continuar <span aria-hidden="true">↗</span>
                </button>
              </div>
            </div>
          )}

          {stage === "dedication" && (
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
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStage("intention")}
                  className="ritual-text-button"
                >
                  ← Volver
                </button>
                <button
                  type="button"
                  onClick={() => setStage("lighting")}
                  className="ritual-primary-button"
                >
                  Preparar la vela <span aria-hidden="true">↗</span>
                </button>
              </div>
            </div>
          )}

          {stage === "lighting" && (
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
                  ← Volver
                </button>
                <span className="max-w-40 text-right font-interface text-xs text-antique-gold">
                  Toca la mecha de la vela para encender
                </span>
              </div>
              {saveError && (
                <p className="mt-4 text-sm text-red-200" role="alert">
                  {saveError}
                </p>
              )}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
