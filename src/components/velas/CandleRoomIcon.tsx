export type IconName =
  | "candle"
  | "previous"
  | "next"
  | "close"
  | "retry"
  | "sun"
  | "sprout"
  | "waves"
  | "heart"
  | "shield"
  | "star";

const paths: Record<IconName, string[]> = {
  candle: [
    "M12 2c.5 2 2.5 2.8 2.5 4.5a2.5 2.5 0 0 1-5 0C9.5 4.8 11.5 4 12 2Z",
    "M8 11h8v9H8zM6 21h12M12 9v2",
  ],
  previous: ["m14 6-6 6 6 6"],
  next: ["m10 6 6 6-6 6"],
  close: ["m6 6 12 12M18 6 6 18"],
  retry: ["M20 7v5h-5M19.5 12a7.5 7.5 0 1 0-1.8 5"],
  sun: [
    "M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
    "M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5",
  ],
  sprout: [
    "M12 21v-9M12 15C6 15 3 12 3 6c6 0 9 3 9 9ZM12 11c0-5 3-8 9-8 0 6-3 9-9 9",
  ],
  waves: [
    "M3 6c3-4 6 4 9 0s6 4 9 0M3 12c3-4 6 4 9 0s6 4 9 0M3 18c3-4 6 4 9 0s6 4 9 0",
  ],
  heart: ["M12 21 4 13C-2 7 6-1 12 6c6-7 14 1 8 7Z"],
  shield: ["M12 3 4 6v6c0 5 8 9 8 9s8-4 8-9V6ZM12 8v8"],
  star: [
    "m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9Z",
  ],
};

export default function CandleRoomIcon({ name }: { name: IconName }) {
  return (
    <svg
      className="candle-room-icon"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
