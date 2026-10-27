import { useEffect, useReducer, useState } from "react";
import { getRoomCandles } from "./api";
import type { CandleStatus } from "./api";
import { CANDLE_PAGE_SIZE } from "./candle-room";
import type { RoomCandle } from "./candle-room";

export function useCandlePage(status: CandleStatus) {
  const [page, setPage] = useState(0);
  const [revision, refresh] = useReducer((value: number) => value + 1, 0);
  const [state, setState] = useState({
    candles: [] as RoomCandle[],
    total: 0,
    page: 0,
    loading: true,
    loaded: false,
    error: "",
  });

  useEffect(() => {
    let active = true;
    let sequence = 0;
    const controller = new AbortController();
    const load = async () => {
      const currentRequest = ++sequence;
      setState((previous) => ({ ...previous, loading: true, error: "" }));
      try {
        const result = await getRoomCandles(
          status,
          page * CANDLE_PAGE_SIZE,
          controller.signal,
        );
        if (!active || currentRequest !== sequence) return;
        const lastPage = Math.max(
          0,
          Math.ceil(result.pagination.total / CANDLE_PAGE_SIZE) - 1,
        );
        if (page > lastPage) {
          setPage(lastPage);
          return;
        }
        setState({
          candles: [...result.candles].sort(
            (a, b) => b.startedAt - a.startedAt || b.id.localeCompare(a.id),
          ),
          total: result.pagination.total,
          page,
          loading: false,
          loaded: true,
          error: "",
        });
      } catch (error) {
        if (!active || currentRequest !== sequence) return;
        setState((previous) => ({
          ...previous,
          loading: false,
          loaded: true,
          error:
            error instanceof Error
              ? error.message
              : "No pudimos cargar las velas de la sala.",
        }));
      }
    };
    void load();
    const timer = window.setInterval(() => void load(), 60_000);
    return () => {
      active = false;
      controller.abort();
      window.clearInterval(timer);
    };
  }, [status, page, revision]);

  return { ...state, setPage, refresh };
}
