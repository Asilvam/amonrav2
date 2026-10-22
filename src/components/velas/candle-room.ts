export type Intention =
  "Gratitud" | "Esperanza" | "Calma" | "Amor" | "Fortaleza" | "Recuerdo";

export type CandleColor = "marfil" | "ambar" | "rosa" | "azul";

export interface RoomCandle {
  id: string;
  intention: Intention;
  dedication: string;
  name: string;
  color: CandleColor;
  startedAt: number;
  countryCode?: string;
  cityName?: string;
  publishLocation: boolean;
}

export const CANDLE_BURN_DURATION_MS = 48 * 60 * 60 * 1000;
export const CANDLE_SMOKE_DURATION_MS = 7_000;
export const CANDLE_FRAME_COUNT = 10;

export const CANDLE_FRAMES = Array.from(
  { length: CANDLE_FRAME_COUNT },
  (_, index) =>
    `/images/velas/transicion/etapa-${String(index + 1).padStart(2, "0")}.webp`,
);

export const CANDLE_COLORS: Array<{
  value: CandleColor;
  label: string;
  wax: string;
}> = [
  { value: "marfil", label: "Marfil", wax: "#f5edda" },
  { value: "ambar", label: "Ámbar", wax: "#d9994c" },
  { value: "rosa", label: "Rosa", wax: "#d89b91" },
  { value: "azul", label: "Azul", wax: "#8ca9ba" },
];

export function getCandleFrameIndex(startedAt: number, now: number): number {
  const elapsed = Math.max(0, now - startedAt);
  if (elapsed >= CANDLE_BURN_DURATION_MS) return CANDLE_FRAME_COUNT - 1;

  const burningFrameCount = CANDLE_FRAME_COUNT - 2;
  return (
    1 +
    Math.min(
      burningFrameCount - 1,
      Math.floor((elapsed / CANDLE_BURN_DURATION_MS) * burningFrameCount),
    )
  );
}

export function getCandleFrameBlend(
  startedAt: number,
  now: number,
): { fromIndex: number; toIndex: number; progress: number } | null {
  const elapsed = Math.max(0, now - startedAt);
  if (elapsed >= CANDLE_BURN_DURATION_MS) return null;

  const lastBurningFrame = CANDLE_FRAME_COUNT - 2;
  const frameProgress =
    (elapsed / CANDLE_BURN_DURATION_MS) * (lastBurningFrame - 1);
  const frameOffset = Math.floor(frameProgress);
  const fromIndex = 1 + frameOffset;

  return {
    fromIndex,
    toIndex: Math.min(fromIndex + 1, lastBurningFrame),
    progress: frameProgress - frameOffset,
  };
}

export function getCandleTimeLeft(startedAt: number, now: number): number {
  return Math.max(0, CANDLE_BURN_DURATION_MS - Math.max(0, now - startedAt));
}
