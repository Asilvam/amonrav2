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
}

export const CANDLE_ROOM_STORAGE_KEY = "amonra-candle-room-v1";
export const CANDLE_BURN_DURATION_MS = 48 * 60 * 60 * 1000;
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

export function getCandleTimeLeft(startedAt: number, now: number): number {
  return Math.max(0, CANDLE_BURN_DURATION_MS - Math.max(0, now - startedAt));
}

export function readRoomCandles(): RoomCandle[] {
  const stored = sessionStorage.getItem(CANDLE_ROOM_STORAGE_KEY);
  if (!stored) return [];

  const parsed: unknown = JSON.parse(stored);
  if (!Array.isArray(parsed)) {
    throw new Error(
      "Los datos guardados de la sala tienen un formato inválido.",
    );
  }

  return parsed.filter(isRoomCandle);
}

export function saveRoomCandle(candle: RoomCandle): void {
  const candles = readRoomCandles();
  sessionStorage.setItem(
    CANDLE_ROOM_STORAGE_KEY,
    JSON.stringify([
      candle,
      ...candles.filter((item) => item.id !== candle.id),
    ]),
  );
}

function isRoomCandle(value: unknown): value is RoomCandle {
  if (typeof value !== "object" || value === null) return false;
  const candle = value as Partial<RoomCandle>;
  return (
    typeof candle.id === "string" &&
    typeof candle.startedAt === "number" &&
    typeof candle.intention === "string" &&
    typeof candle.dedication === "string" &&
    typeof candle.name === "string" &&
    CANDLE_COLORS.some((color) => color.value === candle.color)
  );
}
