import { useCallback, useEffect, useRef, useState } from "react";
import type { KeyboardEvent, ReactNode } from "react";
import { shouldUseCandleCarousel } from "./candle-room";
import CandleRoomIcon from "./CandleRoomIcon";

interface Props {
  count: number;
  total?: number;
  label: string;
  loading?: boolean;
  children: ReactNode;
}

export default function CandleCollection({
  count,
  total = count,
  label,
  loading = false,
  children,
}: Props) {
  const track = useRef<HTMLDivElement>(null);
  const pendingFrame = useRef<number | undefined>(undefined);
  const [position, setPosition] = useState({
    index: 0,
    visible: 1,
    atStart: true,
    atEnd: false,
  });
  const isCarousel = shouldUseCandleCarousel(total);
  const current = Math.min(position.index, Math.max(0, count - 1));

  const updatePosition = useCallback(() => {
    if (pendingFrame.current !== undefined) return;
    pendingFrame.current = requestAnimationFrame(() => {
      pendingFrame.current = undefined;
      const element = track.current;
      if (!element || !element.firstElementChild) return;
      const bounds = element.getBoundingClientRect();
      const style = getComputedStyle(element);
      const padding = parseFloat(style.paddingLeft) || 0;
      const gap = parseFloat(style.columnGap) || 0;
      const width = element.firstElementChild.getBoundingClientRect().width;
      let nearest = 0;
      let distance = Infinity;
      Array.from(element.children).forEach((card, index) => {
        const offset = Math.abs(
          card.getBoundingClientRect().left - bounds.left - padding,
        );
        if (offset < distance) {
          nearest = index;
          distance = offset;
        }
      });
      const next = {
        index: nearest,
        visible: Math.max(
          1,
          Math.floor(
            (element.clientWidth - padding * 2 + gap + 1) / (width + gap),
          ),
        ),
        atStart: element.scrollLeft <= 1,
        atEnd:
          element.scrollLeft >= element.scrollWidth - element.clientWidth - 1,
      };
      setPosition((previous) =>
        Object.keys(next).every(
          (key) =>
            previous[key as keyof typeof next] ===
            next[key as keyof typeof next],
        )
          ? previous
          : next,
      );
    });
  }, []);

  useEffect(() => {
    const element = track.current;
    if (!element || !isCarousel) return;
    const observer = new ResizeObserver(updatePosition);
    observer.observe(element);
    updatePosition();
    return () => {
      observer.disconnect();
      if (pendingFrame.current !== undefined)
        cancelAnimationFrame(pendingFrame.current);
      pendingFrame.current = undefined;
    };
  }, [count, isCarousel, updatePosition]);

  const moveTo = (index: number) => {
    const element = track.current;
    if (!element) return;
    const next = Math.min(Math.max(index, 0), count - 1);
    const card = element.children[next];
    if (!card) return;
    const bounds = element.getBoundingClientRect();
    const padding = parseFloat(getComputedStyle(element).paddingLeft) || 0;
    element.scrollTo({
      left:
        element.scrollLeft +
        card.getBoundingClientRect().left -
        bounds.left -
        padding,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!isCarousel || event.target !== event.currentTarget) return;
    let next: number;
    switch (event.key) {
      case "ArrowRight":
        next = current + 1;
        break;
      case "ArrowLeft":
        next = current - 1;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = count - 1;
        break;
      default:
        return;
    }
    event.preventDefault();
    moveTo(next);
  };

  return (
    <div
      className="candle-room-collection"
      data-candle-count={total}
      data-page-count={count}
      aria-busy={loading}
      role={isCarousel ? "region" : undefined}
      aria-roledescription={isCarousel ? "carrusel" : undefined}
      aria-label={isCarousel ? label : undefined}
    >
      <div
        ref={track}
        className={`candle-room-grid${isCarousel ? " candle-room-grid--carousel" : ""}`}
        tabIndex={isCarousel ? 0 : undefined}
        onScroll={isCarousel ? updatePosition : undefined}
        onKeyDown={onKeyDown}
      >
        {children}
      </div>
      {isCarousel && count > 0 && (
        <div className="candle-room-carousel-controls">
          <button
            type="button"
            aria-label="Ver vela anterior"
            disabled={loading || position.atStart}
            onClick={() => moveTo(current - 1)}
          >
            <CandleRoomIcon name="previous" />
          </button>
          <span aria-live="polite" aria-atomic="true">
            {current + 1}
            {position.visible > 1
              ? `–${Math.min(count, current + position.visible)}`
              : ""}{" "}
            de {count}
          </span>
          <button
            type="button"
            aria-label="Ver vela siguiente"
            disabled={loading || position.atEnd}
            onClick={() => moveTo(current + 1)}
          >
            <CandleRoomIcon name="next" />
          </button>
        </div>
      )}
    </div>
  );
}
