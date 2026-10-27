import { formatCandleStartedAt } from "./candle-room";

export default function CandleStartedAt({ startedAt }: { startedAt: number }) {
  return (
    <time
      className="candle-room-card__date"
      dateTime={new Date(startedAt).toISOString()}
    >
      Encendida: {formatCandleStartedAt(startedAt)}
    </time>
  );
}
