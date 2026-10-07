import { useState } from "react";
import type { AdminPetition, ManageablePetitionStatus } from "./types";
import { PETITION_STATUS_LABELS } from "./types";

interface Props {
  petition: AdminPetition;
  onSaveMessage: (reference: string, message: string) => Promise<void>;
  onSaveStatus: (
    reference: string,
    status: ManageablePetitionStatus,
  ) => Promise<void>;
  onDelete: (reference: string) => Promise<void>;
}

const manageableStatuses: ManageablePetitionStatus[] = [
  "received",
  "accepted",
  "in_progress",
  "completed",
  "cancelled",
];

function formatDate(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.valueOf())
    ? value
    : date.toLocaleString("es-CL", { dateStyle: "medium", timeStyle: "short" });
}

export default function AdminPetitionCard({
  petition,
  onSaveMessage,
  onSaveStatus,
  onDelete,
}: Props) {
  const [isEditingMessage, setIsEditingMessage] = useState(false);
  const [message, setMessage] = useState(petition.message);
  const [selectedStatus, setSelectedStatus] =
    useState<ManageablePetitionStatus>(
      petition.status === "pending_confirmation" ? "received" : petition.status,
    );
  const [action, setAction] = useState<"message" | "status" | "delete" | null>(
    null,
  );

  const isPending = petition.status === "pending_confirmation";
  const isBusy = action !== null;
  const details = [
    petition.duration && `Duración: ${petition.duration}`,
    petition.candleColor && `Color de vela: ${petition.candleColor}`,
    petition.candleType && `Tipo de encendido: ${petition.candleType}`,
  ].filter(Boolean);

  async function saveMessage() {
    const nextMessage = message.trim();
    if (nextMessage.length < 5 || nextMessage.length > 600) return;
    setAction("message");
    try {
      await onSaveMessage(petition.reference, nextMessage);
      setMessage(nextMessage);
      setIsEditingMessage(false);
    } catch {
      // The parent already presents the API error in SweetAlert2.
    } finally {
      setAction(null);
    }
  }

  async function saveStatus() {
    setAction("status");
    try {
      await onSaveStatus(petition.reference, selectedStatus);
    } catch {
      // The parent already presents the API error in SweetAlert2.
    } finally {
      setAction(null);
    }
  }

  async function removePetition() {
    setAction("delete");
    try {
      await onDelete(petition.reference);
    } catch {
      // The parent already presents the API error in SweetAlert2.
    } finally {
      setAction(null);
    }
  }

  return (
    <article className="rounded-2xl border border-antique-gold-soft/60 bg-[var(--color-parchment-soft)] p-5 shadow-sm sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-antique-gold-soft/40 pb-4">
        <h2 className="font-editorial text-2xl text-paper-ink">
          {petition.kind} · {petition.reference}
        </h2>
        <span className="rounded-full bg-paper px-3 py-1 text-xs font-semibold text-paper-ink">
          {PETITION_STATUS_LABELS[petition.status]}
        </span>
      </div>

      <p className="mt-4 text-sm text-paper-muted">
        Recibida: {formatDate(petition.createdAt)}
      </p>
      <p className="mt-1 break-all text-sm text-paper-ink">
        Nombre: {petition.name || "Sin nombre registrado"}
      </p>
      <p className="mt-1 break-all text-sm text-paper-ink">
        Correo: {petition.email}
      </p>
      <p
        className={`mt-1 break-all text-sm ${petition.phone?.trim() ? "text-paper-ink" : "text-paper-muted"}`}
      >
        WhatsApp o celular: {petition.phone?.trim() || "No informado"}
      </p>
      <p className="mt-1 text-sm text-paper-muted">
        Difusión comunitaria: {petition.share ? "Autorizada" : "No autorizada"}
      </p>
      {details.length > 0 && (
        <p className="mt-2 text-sm text-paper-muted">{details.join(" · ")}</p>
      )}

      <p className="mt-4 whitespace-pre-wrap break-words rounded-lg bg-paper p-4 text-sm leading-relaxed text-paper-ink">
        {petition.message}
      </p>

      {!isEditingMessage ? (
        <button
          type="button"
          disabled={isBusy}
          onClick={() => setIsEditingMessage(true)}
          className="mt-2 min-h-10 rounded-full border border-antique-gold-soft px-4 text-sm font-semibold text-paper-ink hover:bg-paper disabled:opacity-60"
        >
          Editar mensaje
        </button>
      ) : (
        <div className="mt-3 rounded-xl border border-antique-gold-soft/50 bg-paper p-4">
          <textarea
            value={message}
            rows={5}
            minLength={5}
            maxLength={600}
            required
            aria-label="Editar el mensaje de la petición"
            onChange={(event) => setMessage(event.target.value)}
            className="w-full rounded-lg border border-antique-gold-soft bg-[var(--color-parchment-subtle)] px-3 py-2 text-sm leading-relaxed text-paper-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-red"
          />
          <div className="mt-3 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <button
              type="button"
              disabled={isBusy}
              onClick={() => {
                setMessage(petition.message);
                setIsEditingMessage(false);
              }}
              className="min-h-11 rounded-full border border-antique-gold-soft px-5 text-sm font-semibold text-paper-ink hover:bg-[var(--color-parchment-subtle)] disabled:opacity-60"
            >
              Cancelar
            </button>
            <button
              type="button"
              disabled={
                isBusy ||
                message.trim().length < 5 ||
                message.trim().length > 600
              }
              aria-busy={action === "message"}
              onClick={() => void saveMessage()}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-clay-ink px-5 text-sm font-semibold text-white hover:bg-clay-ink/90 disabled:opacity-60"
            >
              {action === "message" && (
                <span
                  className="amonra-loading-eye amonra-loading-eye--small"
                  aria-hidden="true"
                >
                  <img src="/ojo-de-horus.png" alt="" width="20" height="20" />
                </span>
              )}
              Guardar mensaje
            </button>
          </div>
        </div>
      )}

      {isPending ? (
        <>
          <p className="mt-4 text-sm font-semibold text-paper-muted">
            No se puede administrar hasta que se confirme el correo.
          </p>
          <div className="mt-5 flex justify-end border-t border-antique-gold-soft/40 pt-4">
            <DeleteButton
              busy={action === "delete"}
              disabled={isBusy}
              onClick={() => void removePetition()}
            />
          </div>
        </>
      ) : (
        <div className="mt-5 grid grid-cols-1 gap-3 border-t border-antique-gold-soft/40 pt-4 sm:grid-cols-[minmax(12rem,1fr)_auto_auto] sm:items-end">
          <label className="min-w-0 text-sm font-semibold">
            <span className="mb-2 block">Cambiar estado</span>
            <select
              value={selectedStatus}
              disabled={isBusy}
              aria-label={`Cambiar estado. Estado actual: ${PETITION_STATUS_LABELS[petition.status]}`}
              onChange={(event) =>
                setSelectedStatus(
                  event.target.value as ManageablePetitionStatus,
                )
              }
              className="min-h-11 w-full rounded-lg border border-antique-gold-soft bg-paper px-3 text-paper-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-red"
            >
              {manageableStatuses.map((status) => (
                <option key={status} value={status}>
                  {PETITION_STATUS_LABELS[status]}
                </option>
              ))}
            </select>
          </label>
          <button
            type="button"
            disabled={isBusy || selectedStatus === petition.status}
            aria-busy={action === "status"}
            onClick={() => void saveStatus()}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-clay-ink px-3 text-xs font-semibold text-white hover:bg-clay-ink/90 disabled:opacity-60 sm:rounded-full sm:px-5 sm:text-sm"
          >
            {action === "status" && (
              <span
                className="amonra-loading-eye amonra-loading-eye--small"
                aria-hidden="true"
              >
                <img src="/ojo-de-horus.png" alt="" width="20" height="20" />
              </span>
            )}
            Guardar estado
          </button>
          <DeleteButton
            busy={action === "delete"}
            disabled={isBusy}
            onClick={() => void removePetition()}
          />
        </div>
      )}
    </article>
  );
}

function DeleteButton({
  busy,
  disabled,
  onClick,
}: {
  busy: boolean;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      aria-busy={busy}
      onClick={onClick}
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-clay-red px-3 text-xs font-semibold text-clay-red hover:bg-clay-red hover:text-white disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-red sm:rounded-full sm:px-5 sm:text-sm"
    >
      {busy && (
        <span
          className="amonra-loading-eye amonra-loading-eye--small"
          aria-hidden="true"
        >
          <img src="/ojo-de-horus.png" alt="" width="20" height="20" />
        </span>
      )}
      <span className="sm:hidden">Eliminar</span>
      <span className="hidden sm:inline">Eliminar definitivamente</span>
    </button>
  );
}
