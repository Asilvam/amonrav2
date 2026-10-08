import type { AdminPetition, PetitionStatus } from "./types";
import { PETITION_STATUS_LABELS } from "./types";

interface Props {
  petition: AdminPetition;
  onViewDetails: (petition: AdminPetition) => void;
}

function formatDate(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.valueOf())
    ? value
    : date.toLocaleString("es-CL", { dateStyle: "medium", timeStyle: "short" });
}

function getStatusClass(status: PetitionStatus) {
  if (status === "pending_confirmation") {
    return "bg-clay-red/10 text-clay-red";
  }
  if (status === "in_progress") {
    return "bg-clay-ink/10 text-clay-ink";
  }
  if (status === "completed") {
    return "bg-antique-gold-soft/30 text-paper-ink";
  }
  if (status === "expired") {
    return "bg-paper-ink/10 text-paper-muted";
  }
  return "bg-paper text-paper-ink";
}

export default function AdminPetitionCard({ petition, onViewDetails }: Props) {
  return (
    <article className="overflow-hidden rounded-2xl border border-antique-gold-soft/60 bg-[var(--color-parchment-soft)] shadow-sm transition hover:border-antique-gold-soft hover:shadow-md">
      <button
        type="button"
        onClick={() => onViewDetails(petition)}
        aria-label={`Ver detalle de la petición ${petition.reference}`}
        className="grid w-full grid-cols-1 gap-3 p-4 text-left transition hover:bg-paper/40 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-clay-red sm:grid-cols-[minmax(13rem,1.3fr)_minmax(14rem,1fr)_auto_auto_auto] sm:items-center sm:p-5"
      >
        <span className="min-w-0">
          <span className="block truncate font-semibold text-paper-ink">
            {petition.reference}
          </span>
          <span className="mt-1 block truncate text-sm text-paper-muted">
            {petition.kind}
          </span>
        </span>
        <span className="min-w-0">
          <span className="block truncate text-sm font-semibold text-paper-ink">
            {petition.name || "Sin nombre registrado"}
          </span>
          <span className="mt-1 block truncate text-xs text-paper-muted">
            {petition.email}
          </span>
        </span>
        <span className="text-xs text-paper-muted sm:text-sm">
          {formatDate(petition.createdAt)}
        </span>
        <span
          className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${getStatusClass(petition.status)}`}
        >
          {PETITION_STATUS_LABELS[petition.status]}
        </span>
        <span className="inline-flex items-center gap-2 text-xs font-semibold text-clay-red sm:justify-self-end">
          Ver detalle
          <span aria-hidden="true" className="text-base">
            →
          </span>
        </span>
      </button>
    </article>
  );
}
