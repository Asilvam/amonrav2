import type { AdminBlockedContact } from "./types";

interface Props {
  contacts: AdminBlockedContact[];
  isLoading: boolean;
  onClose: () => void;
  onUnblock: (contact: AdminBlockedContact) => Promise<void>;
}

function formatDate(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.valueOf())
    ? value
    : date.toLocaleString("es-CL", { dateStyle: "medium", timeStyle: "short" });
}

export default function AdminBlockedContactsPanel({
  contacts,
  isLoading,
  onClose,
  onUnblock,
}: Props) {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <header className="shrink-0 border-b border-antique-gold-soft/50 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow text-clay-red">Administración</p>
            <h2 className="mt-2 font-editorial text-2xl text-paper-ink">
              Contactos bloqueados
            </h2>
            <p className="mt-1 text-sm text-paper-muted">
              Estos contactos no podrán crear nuevas peticiones.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar contactos bloqueados"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-antique-gold-soft text-xl text-paper-ink hover:bg-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-red"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto p-5 sm:p-6">
        {isLoading ? (
          <div className="amonra-loading-state" aria-live="polite">
            <span className="amonra-loading-eye" aria-hidden="true">
              <img src="/ojo-de-horus.png" alt="" width="32" height="32" />
            </span>
            <span className="text-sm text-paper-muted">Cargando bloqueos…</span>
          </div>
        ) : contacts.length > 0 ? (
          <div className="grid gap-3">
            {contacts.map((contact) => (
              <article
                key={contact._id}
                className="rounded-2xl border border-antique-gold-soft/60 bg-[var(--color-parchment-soft)] p-4"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.08em] text-paper-muted">
                      {contact.type === "email" ? "Correo" : "WhatsApp"}
                    </p>
                    <p className="mt-1 break-all font-semibold text-paper-ink">
                      {contact.value}
                    </p>
                    <p className="mt-1 text-xs text-paper-muted">
                      Bloqueado: {formatDate(contact.createdAt)}
                    </p>
                    {contact.reason ? (
                      <p className="mt-2 text-sm text-paper-muted">
                        Motivo: {contact.reason}
                      </p>
                    ) : null}
                  </div>
                  <button
                    type="button"
                    onClick={() => void onUnblock(contact)}
                    className="min-h-10 rounded-full border border-antique-gold-soft px-4 text-sm font-semibold text-paper-ink hover:bg-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-red"
                  >
                    Desbloquear
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-antique-gold-soft p-8 text-center">
            <h3 className="font-editorial text-xl text-paper-ink">
              No hay contactos bloqueados
            </h3>
            <p className="mt-2 text-sm text-paper-muted">
              Los bloqueos que hagas desde el detalle aparecerán aquí.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
