import { CANDLE_PAGE_SIZE } from "./candle-room";
import CandleRoomIcon from "./CandleRoomIcon";

interface Props {
  page: number;
  total: number;
  loading: boolean;
  label: string;
  onPageChange: (page: number) => void;
}

export default function CandlePagination({
  page,
  total,
  loading,
  label,
  onPageChange,
}: Props) {
  const pages = Math.ceil(total / CANDLE_PAGE_SIZE);
  if (pages <= 1) return null;
  return (
    <nav
      className="candle-room-pagination"
      aria-label={`Páginas de ${label.toLowerCase()}`}
    >
      <button
        type="button"
        aria-label="Página anterior"
        disabled={loading || page === 0}
        onClick={() => onPageChange(page - 1)}
      >
        <CandleRoomIcon name="previous" />
      </button>
      <span aria-live="polite" aria-atomic="true">
        <strong>
          Página {page + 1} de {pages}
        </strong>
        <small>
          {page * CANDLE_PAGE_SIZE + 1}–
          {Math.min((page + 1) * CANDLE_PAGE_SIZE, total)} de {total} velas
        </small>
      </span>
      <button
        type="button"
        aria-label="Página siguiente"
        disabled={loading || page >= pages - 1}
        onClick={() => onPageChange(page + 1)}
      >
        <CandleRoomIcon name="next" />
      </button>
    </nav>
  );
}
