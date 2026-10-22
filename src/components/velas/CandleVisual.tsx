import type { CSSProperties } from "react";
import {
  CANDLE_BURN_DURATION_MS,
  CANDLE_FRAMES,
  CANDLE_SMOKE_DURATION_MS,
  getCandleFrameIndex,
} from "./candle-room";
import type { CandleColor } from "./candle-room";

const FLAME_BOUNDS: Record<number, { top: number; bottom: number }> = {
  1: { top: 7, bottom: 24 },
  2: { top: 8, bottom: 27 },
  3: { top: 3, bottom: 24 },
  4: { top: 7, bottom: 28 },
  5: { top: 11, bottom: 34 },
  6: { top: 14, bottom: 39 },
  7: { top: 21, bottom: 51 },
  8: { top: 38, bottom: 56 },
};

interface CandleVisualProps {
  startedAt?: number;
  now?: number;
  color: CandleColor;
  label: string;
  interactive?: boolean;
  disabled?: boolean;
  onIgnite?: () => void;
  className?: string;
}

export default function CandleVisual({
  startedAt,
  now,
  color,
  label,
  interactive = false,
  disabled = false,
  onIgnite,
  className = "",
}: CandleVisualProps) {
  const frameIndex =
    startedAt === undefined
      ? 0
      : getCandleFrameIndex(startedAt, now ?? startedAt);
  const flameBounds = FLAME_BOUNDS[frameIndex];
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
          "--candle-flame-top": `${flameBounds?.top ?? 14 + burningProgress * 10}%`,
          "--candle-flame-bottom": `${flameBounds?.bottom ?? 30}%`,
          "--candle-flame-center": `${flameBounds ? (flameBounds.top + flameBounds.bottom) / 2 : 20}%`,
        } as CSSProperties
      }
    >
      <div className="candle-photo__glow" aria-hidden="true" />
      <img
        key={frameIndex}
        src={CANDLE_FRAMES[frameIndex]}
        alt={label}
        className="candle-photo__image candle-photo__image--base"
        loading="eager"
      />
      {flameBounds && (
        <img
          src={CANDLE_FRAMES[frameIndex]}
          alt=""
          aria-hidden="true"
          className="candle-photo__image candle-photo__flame"
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
          disabled={disabled}
          aria-label="Tocar la mecha para encender la vela"
        >
          <span>Toca la mecha</span>
        </button>
      )}
    </figure>
  );
}
