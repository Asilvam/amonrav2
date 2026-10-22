import type { CSSProperties } from "react";
import { CANDLE_FRAMES, getCandleFrameIndex } from "./candle-room";
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
  const flickerDuration = `${3 + ((startedAt ?? 0) % 9000) / 10_000}s`;

  return (
    <figure
      className={`candle-photo ${className}`}
      data-color={color}
      data-stage={frameIndex}
      style={{ "--candle-flicker-duration": flickerDuration } as CSSProperties}
    >
      <div className="candle-photo__glow" aria-hidden="true" />
      <img
        key={frameIndex}
        src={CANDLE_FRAMES[frameIndex]}
        alt={label}
        className="candle-photo__image"
        loading="eager"
      />
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
