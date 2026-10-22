import type { CSSProperties } from "react";
import {
  CANDLE_BURN_DURATION_MS,
  CANDLE_FRAMES,
  CANDLE_SMOKE_DURATION_MS,
  getCandleFrameBlend,
  getCandleFrameIndex,
} from "./candle-room";
import type { CandleColor } from "./candle-room";

interface CandleVisualProps {
  startedAt?: number;
  now?: number;
  color: CandleColor;
  label: string;
  interactive?: boolean;
  onIgnite?: () => void;
  className?: string;
}

export default function CandleVisual({
  startedAt,
  now,
  color,
  label,
  interactive = false,
  onIgnite,
  className = "",
}: CandleVisualProps) {
  const frameIndex =
    startedAt === undefined
      ? 0
      : getCandleFrameIndex(startedAt, now ?? startedAt);
  const frameBlend =
    startedAt === undefined
      ? null
      : getCandleFrameBlend(startedAt, now ?? startedAt);
  const extinguishedAt =
    startedAt === undefined ? null : startedAt + CANDLE_BURN_DURATION_MS;
  const smokeIsSettling =
    frameIndex === CANDLE_FRAMES.length - 1 &&
    extinguishedAt !== null &&
    now !== undefined &&
    now >= extinguishedAt &&
    now < extinguishedAt + CANDLE_SMOKE_DURATION_MS;
  const burningProgress =
    startedAt === undefined || now === undefined
      ? 0
      : Math.min(1, Math.max(0, (now - startedAt) / CANDLE_BURN_DURATION_MS));
  return (
    <figure
      className={`candle-photo ${className}`}
      data-color={color}
      data-stage={frameIndex}
      style={
        {
          "--candle-flame-top": `${14 + burningProgress * 10}%`,
        } as CSSProperties
      }
    >
      <div className="candle-photo__glow" aria-hidden="true" />
      <img
        src={CANDLE_FRAMES[frameBlend?.fromIndex ?? frameIndex]}
        alt={label}
        className="candle-photo__image"
        loading="eager"
      />
      {frameBlend && frameBlend.toIndex !== frameBlend.fromIndex && (
        <img
          src={CANDLE_FRAMES[frameBlend.toIndex]}
          alt=""
          aria-hidden="true"
          className="candle-photo__image candle-photo__image--next"
          style={{ opacity: frameBlend.progress }}
          loading="eager"
        />
      )}
      {smokeIsSettling && (
        <img
          src={CANDLE_FRAMES[frameIndex]}
          alt=""
          aria-hidden="true"
          className="candle-photo__smoke"
          loading="eager"
        />
      )}
      {interactive && onIgnite && (
        <button
          type="button"
          className="candle-photo__wick-target"
          onClick={onIgnite}
          aria-label="Tocar la mecha para encender la vela"
        >
          <span>Toca la mecha</span>
        </button>
      )}
    </figure>
  );
}
