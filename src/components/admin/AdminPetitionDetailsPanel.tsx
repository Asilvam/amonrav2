import { useState } from "react";
import type {
  AdminPetition,
  BlockContactType,
  ManageablePetitionStatus,
  PetitionStatus,
} from "./types";
import { PETITION_STATUS_LABELS } from "./types";

interface Props {
  petition: AdminPetition;
  onClose: () => void;
  onBlockContact: (type: BlockContactType, value: string) => Promise<void>;
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

export default function AdminPetitionDetailsPanel({
  petition,
  onClose,
  onBlockContact,
  onSaveMessage,
  onSaveStatus,
  onDelete,
}: Props) {
  const [isEditingMessage, setIsEditingMessage] = useState(false);
  const [message, setMessage] = useState(petition.message);
  const [selectedStatus, setSelectedStatus] =
    useState<ManageablePetitionStatus>(
      petition.status === "pending_confirmation" ||
        petition.status === "expired"
        ? "received"
        : petition.status,
    );
  const [action, setAction] = useState<"message" | "status" | "delete" | null>(
    null,
  );
  const [blocking, setBlocking] = useState<BlockContactType | null>(null);

  const isPending = petition.status === "pending_confirmation";
  const isExpired = petition.status === "expired";
  const isBusy = action !== null;
  const metadata = [
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

  async function blockContact(type: BlockContactType, value: string) {
    setBlocking(type);
    try {
      await onBlockContact(type, value);
    } catch {
      // The parent already presents the API error in SweetAlert2.
    } finally {
      setBlocking(null);
    }
  }

  return (
    <div className="flex h-full min-h-0 flex-col">
      <header className="shrink-0 border-b border-antique-gold-soft/50 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="eyebrow text-clay-red">Detalle de petición</p>
            <h2
              id={`petition-detail-${petition.reference}`}
              className="mt-2 truncate font-editorial text-2xl text-paper-ink"
            >
              {petition.reference}
            </h2>
            <p className="mt-1 truncate text-sm text-paper-muted">
              {petition.kind}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar detalle de la petición"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-antique-gold-soft text-xl text-paper-ink hover:bg-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-red"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusClass(petition.status)}`}
          >
            {PETITION_STATUS_LABELS[petition.status]}
          </span>
          <span className="text-xs text-paper-muted">
            Actualizada: {formatDate(petition.updatedAt)}
          </span>
        </div>
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto p-5 sm:p-6">
        <section aria-labelledby={`petition-message-${petition.reference}`}>
          <h3
            id={`petition-message-${petition.reference}`}
            className="text-sm font-semibold text-paper-ink"
          >
            Mensaje de la petición
          </h3>
          <p className="mt-2 whitespace-pre-wrap break-words rounded-xl bg-paper p-4 text-sm leading-relaxed text-paper-ink">
            {petition.message}
          </p>
        </section>

        <section
          className="mt-6 border-t border-antique-gold-soft/40 pt-5"
          aria-labelledby={`petition-contact-${petition.reference}`}
        >
          <h3
            id={`petition-contact-${petition.reference}`}
            className="text-sm font-semibold text-paper-ink"
          >
            Datos de contacto
          </h3>
          <dl className="mt-3 grid gap-3 sm:grid-cols-2">
            <DetailItem
              label="Nombre"
              value={petition.name || "Sin nombre registrado"}
            />
            <DetailItem label="Correo" value={petition.email} />
            <DetailItem
              label="WhatsApp o celular"
              value={petition.phone?.trim() || "No informado"}
            />
            <DetailItem
              label="Difusión comunitaria"
              value={petition.share ? "Autorizada" : "No autorizada"}
            />
          </dl>
          {metadata.length > 0 && (
            <p className="mt-3 text-sm text-paper-muted">
              {metadata.join(" · ")}
            </p>
          )}
        </section>

        <section
          className="mt-6 border-t border-antique-gold-soft/40 pt-5"
          aria-labelledby={`petition-administration-${petition.reference}`}
        >
          <h3
            id={`petition-administration-${petition.reference}`}
            className="text-sm font-semibold text-paper-ink"
          >
            {isExpired ? "Archivo" : "Administración"}
          </h3>
          {isExpired ? (
            <p className="mt-3 rounded-lg border border-paper-ink/10 bg-paper/60 p-3 text-sm text-paper-muted">
              Esta petición quedó archivada porque no confirmó el correo dentro
              de 24 horas. Se conserva solo como registro histórico.
            </p>
          ) : (
            <>
              {!isEditingMessage ? (
                <button
                  type="button"
                  disabled={isBusy}
                  onClick={() => setIsEditingMessage(true)}
                  className="mt-3 min-h-10 rounded-full border border-antique-gold-soft px-4 text-sm font-semibold text-paper-ink hover:bg-paper disabled:opacity-60"
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
                      {action === "message" && <LoadingEye />}
                      Guardar mensaje
                    </button>
                  </div>
                </div>
              )}

              {isPending ? (
                <p className="mt-4 rounded-lg border border-clay-red/20 bg-clay-red/5 p-3 text-sm font-semibold text-paper-muted">
                  El correo aún no está confirmado, pero puedes gestionar esta
                  petición manualmente.
                </p>
              ) : null}

              <div className="mt-5 grid gap-3 border-t border-antique-gold-soft/40 pt-4">
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
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-clay-ink px-5 text-sm font-semibold text-white hover:bg-clay-ink/90 disabled:opacity-60"
                >
                  {action === "status" && <LoadingEye />}
                  Guardar estado
                </button>
                <DeleteButton
                  busy={action === "delete"}
                  disabled={isBusy}
                  onClick={() => void removePetition()}
                />
              </div>
            </>
          )}
        </section>

        <section
          className="mt-6 border-t border-antique-gold-soft/40 pt-5"
          aria-labelledby={`petition-blocking-${petition.reference}`}
        >
          <h3
            id={`petition-blocking-${petition.reference}`}
            className="text-sm font-semibold text-paper-ink"
          >
            Bloquear contacto
          </h3>
          <p className="mt-1 text-sm text-paper-muted">
            Puedes bloquear solo el correo o solo el número de WhatsApp. Las
            peticiones actuales se conservarán.
          </p>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              disabled={isBusy || blocking !== null}
              aria-busy={blocking === "email"}
              onClick={() => void blockContact("email", petition.email)}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-clay-red px-4 text-sm font-semibold text-clay-red hover:bg-clay-red hover:text-white disabled:opacity-60"
            >
              {blocking === "email" && <LoadingEye />}
              Bloquear correo
            </button>
            {petition.phone?.trim() ? (
              <button
                type="button"
                disabled={isBusy || blocking !== null}
                aria-busy={blocking === "phone"}
                onClick={() =>
                  void blockContact("phone", petition.phone!.trim())
                }
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-clay-red px-4 text-sm font-semibold text-clay-red hover:bg-clay-red hover:text-white disabled:opacity-60"
              >
                {blocking === "phone" && <LoadingEye />}
                Bloquear WhatsApp
              </button>
            ) : null}
          </div>
        </section>
      </div>
    </div>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-paper-muted">
        {label}
      </dt>
      <dd className="mt-1 break-words text-sm text-paper-ink">{value}</dd>
    </div>
  );
}

function LoadingEye() {
  return (
    <span
      className="amonra-loading-eye amonra-loading-eye--small"
      aria-hidden="true"
    >
      <img src="/ojo-de-horus.png" alt="" width="20" height="20" />
    </span>
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
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-clay-red px-5 text-sm font-semibold text-clay-red hover:bg-clay-red hover:text-white disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-red"
    >
      {busy && <LoadingEye />}
      Eliminar definitivamente
    </button>
  );
}
