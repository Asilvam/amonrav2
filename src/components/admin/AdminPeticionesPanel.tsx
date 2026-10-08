import { useCallback, useEffect, useMemo, useState } from "react";
import AdminBlockedContactsPanel from "./AdminBlockedContactsPanel";
import AdminLoginForm from "./AdminLoginForm";
import AdminPetitionCard from "./AdminPetitionCard";
import AdminPetitionDetailsPanel from "./AdminPetitionDetailsPanel";
import {
  adminApi,
  blockContact,
  deletePetition,
  listAdminPetitions,
  listBlockedContacts,
  unblockContact,
  updatePetitionMessage,
  updatePetitionStatus,
} from "./api";
import {
  AdminApiError,
  PETITION_STATUS_LABELS,
  type AdminPetition,
  type AdminBlockedContact,
  type BlockContactType,
  type ManageablePetitionStatus,
  type PetitionStatus,
} from "./types";
import {
  confirmAdminDeletion,
  confirmAdminBlock,
  showAdminAlert,
  showAdminLoading,
  confirmAdminUnblock,
  Swal,
} from "./swal";

type FilterValue = PetitionStatus | "all";

const filterOptions: Array<{ value: FilterValue; label: string }> = [
  { value: "all", label: "Todas" },
  {
    value: "pending_confirmation",
    label: "Pendientes de confirmación",
  },
  { value: "received", label: "Recibidas" },
  { value: "accepted", label: "Aceptadas" },
  { value: "in_progress", label: "En proceso" },
  { value: "completed", label: "Realizadas" },
  { value: "cancelled", label: "Anuladas" },
  { value: "expired", label: "Expiradas / archivadas" },
];

const dashboardFilters: Array<{
  value: FilterValue;
  label: string;
  description: string;
  accent: string;
}> = [
  {
    value: "all",
    label: "Total",
    description: "Todas las peticiones",
    accent: "border-paper-ink/15 bg-paper",
  },
  {
    value: "pending_confirmation",
    label: "Pendientes",
    description: "Esperando confirmación",
    accent: "border-clay-red/30 bg-clay-red/5",
  },
  {
    value: "received",
    label: "Recibidas",
    description: "Listas para revisar",
    accent: "border-antique-gold-soft bg-antique-gold-soft/10",
  },
  {
    value: "in_progress",
    label: "En proceso",
    description: "Con seguimiento activo",
    accent: "border-clay-ink/20 bg-clay-ink/5",
  },
];

export default function AdminPeticionesPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingSession, setIsCheckingSession] = useState(true);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [filter, setFilter] = useState<FilterValue>("all");
  const [allPetitions, setAllPetitions] = useState<AdminPetition[]>([]);
  const [selectedReference, setSelectedReference] = useState<string | null>(
    null,
  );
  const [isBlockedContactsOpen, setIsBlockedContactsOpen] = useState(false);
  const [blockedContacts, setBlockedContacts] = useState<AdminBlockedContact[]>(
    [],
  );
  const [isLoadingBlockedContacts, setIsLoadingBlockedContacts] =
    useState(false);

  const selectedPetition = useMemo(
    () =>
      selectedReference
        ? allPetitions.find(
            (petition) => petition.reference === selectedReference,
          ) || null
        : null,
    [allPetitions, selectedReference],
  );

  const petitions = useMemo(() => {
    if (filter === "expired") {
      return allPetitions.filter((petition) => petition.status === "expired");
    }
    return allPetitions.filter(
      (petition) =>
        petition.status !== "expired" &&
        (filter === "all" || petition.status === filter),
    );
  }, [allPetitions, filter]);

  const pendingPetitions = useMemo(
    () =>
      petitions.filter(
        (petition) => petition.status === "pending_confirmation",
      ),
    [petitions],
  );

  const manageablePetitions = useMemo(
    () =>
      petitions.filter(
        (petition) =>
          petition.status !== "pending_confirmation" &&
          petition.status !== "expired",
      ),
    [petitions],
  );

  const archivedPetitions = useMemo(
    () => petitions.filter((petition) => petition.status === "expired"),
    [petitions],
  );

  const dashboardCounts = useMemo(() => {
    const counts = new Map<PetitionStatus, number>();
    for (const petition of allPetitions) {
      counts.set(petition.status, (counts.get(petition.status) || 0) + 1);
    }
    return counts;
  }, [allPetitions]);

  const showError = useCallback(async (error: unknown, fallback: string) => {
    if (error instanceof AdminApiError && error.status === 401) {
      setIsAuthenticated(false);
      await showAdminAlert(
        "warning",
        "Sesión expirada",
        "Vuelve a iniciar sesión para continuar.",
      );
      return;
    }
    await showAdminAlert(
      "error",
      "No pudimos completar la operación",
      error instanceof Error ? error.message : fallback,
    );
  }, []);

  const loadPetitions = useCallback(async () => {
    setIsRefreshing(true);
    try {
      const body = await listAdminPetitions("all");
      setAllPetitions(body.petitions);
      setSelectedReference((current) =>
        current &&
        body.petitions.some((petition) => petition.reference === current)
          ? current
          : null,
      );
      setIsAuthenticated(true);
    } catch (error) {
      if (error instanceof AdminApiError && error.status === 401) {
        setIsAuthenticated(false);
      } else {
        await showError(error, "No pudimos conectar con el backend.");
      }
    } finally {
      setIsRefreshing(false);
      setIsCheckingSession(false);
    }
  }, [showError]);

  useEffect(() => {
    const initialLoad = window.setTimeout(() => void loadPetitions(), 0);
    return () => window.clearTimeout(initialLoad);
  }, [loadPetitions]);

  useEffect(() => {
    if (!selectedReference) return;
    if (!selectedPetition) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedReference(null);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedPetition, selectedReference]);

  useEffect(() => {
    if (!isBlockedContactsOpen) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsBlockedContactsOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isBlockedContactsOpen]);

  async function handleLogin(password: string) {
    setIsLoggingIn(true);
    showAdminLoading("Validando acceso…");
    try {
      await adminApi("/admin/login", {
        method: "POST",
        body: JSON.stringify({ password }),
      });
      await loadPetitions();
    } catch (error) {
      if (error instanceof AdminApiError && error.status === 401) {
        await showAdminAlert(
          "error",
          "Credenciales incorrectas",
          "Revisa la contraseña e inténtalo nuevamente.",
        );
      } else {
        await showError(error, "No pudimos iniciar sesión.");
      }
    } finally {
      Swal.close();
      setIsLoggingIn(false);
    }
  }

  async function handleSaveMessage(reference: string, message: string) {
    showAdminLoading("Guardando mensaje…");
    try {
      await updatePetitionMessage(reference, message);
      await loadPetitions();
      await showAdminAlert("success", "Mensaje actualizado");
    } catch (error) {
      await showError(error, "No pudimos actualizar el mensaje.");
      throw error;
    } finally {
      Swal.close();
    }
  }

  async function handleSaveStatus(
    reference: string,
    status: ManageablePetitionStatus,
  ) {
    showAdminLoading("Actualizando estado…");
    try {
      await updatePetitionStatus(reference, status);
      await loadPetitions();
      await showAdminAlert(
        "success",
        "Estado actualizado",
        `${reference}: ${PETITION_STATUS_LABELS[status]}`,
      );
    } catch (error) {
      await showError(error, "No pudimos actualizar el estado.");
      throw error;
    } finally {
      Swal.close();
    }
  }

  async function handleDelete(reference: string) {
    if (!(await confirmAdminDeletion(reference))) return;
    showAdminLoading("Eliminando petición…");
    try {
      await deletePetition(reference);
      setSelectedReference(null);
      await loadPetitions();
      await showAdminAlert("success", "Petición eliminada");
    } catch (error) {
      await showError(error, "No pudimos eliminar la petición.");
      throw error;
    } finally {
      Swal.close();
    }
  }

  async function handleBlockContact(type: BlockContactType, value: string) {
    if (!(await confirmAdminBlock(type, value))) return;
    showAdminLoading("Bloqueando contacto…");
    try {
      await blockContact(type, value);
      await showAdminAlert(
        "success",
        "Contacto bloqueado",
        `Las futuras peticiones con este ${type === "email" ? "correo" : "WhatsApp"} serán rechazadas.`,
      );
    } catch (error) {
      await showError(error, "No pudimos bloquear el contacto.");
      throw error;
    } finally {
      Swal.close();
    }
  }

  async function openBlockedContacts() {
    setIsBlockedContactsOpen(true);
    setIsLoadingBlockedContacts(true);
    try {
      const body = await listBlockedContacts();
      setBlockedContacts(body.blockedContacts);
    } catch (error) {
      await showError(error, "No pudimos cargar los contactos bloqueados.");
    } finally {
      setIsLoadingBlockedContacts(false);
    }
  }

  async function handleUnblockContact(contact: AdminBlockedContact) {
    if (!(await confirmAdminUnblock(contact.value))) return;
    showAdminLoading("Desbloqueando contacto…");
    try {
      await unblockContact(contact._id);
      setBlockedContacts((current) =>
        current.filter((item) => item._id !== contact._id),
      );
      await showAdminAlert("success", "Contacto desbloqueado");
    } catch (error) {
      await showError(error, "No pudimos desbloquear el contacto.");
    } finally {
      Swal.close();
    }
  }

  async function handleLogout() {
    showAdminLoading("Cerrando sesión…");
    try {
      await adminApi("/admin/logout", { method: "POST" });
    } catch {
      // The local session is hidden even when the backend is unreachable.
    } finally {
      Swal.close();
      setIsAuthenticated(false);
      setAllPetitions([]);
      setSelectedReference(null);
    }
  }

  function changeFilter(nextFilter: FilterValue) {
    setFilter(nextFilter);
  }

  const emptyStateMessage =
    filter === "all"
      ? "Todavía no hay peticiones disponibles."
      : `No hay peticiones con estado “${PETITION_STATUS_LABELS[filter]}”.`;

  if (isCheckingSession) {
    return (
      <div className="amonra-loading-state mt-8" aria-live="polite">
        <span className="amonra-loading-eye" aria-hidden="true">
          <img src="/ojo-de-horus.png" alt="" width="32" height="32" />
        </span>
        <span className="text-sm text-paper-muted">Comprobando acceso…</span>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminLoginForm isLoading={isLoggingIn} onLogin={handleLogin} />;
  }

  return (
    <>
      <section className="mt-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-clay-red">Bandeja de trabajo</p>
            <h2 className="mt-2 font-editorial text-2xl text-paper-ink">
              Estado de las peticiones
            </h2>
            <p className="mt-1 text-sm text-paper-muted">
              Revisa el volumen actual y enfócate en lo que requiere atención.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              disabled={isRefreshing}
              aria-busy={isRefreshing}
              onClick={() => void loadPetitions()}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-antique-gold-soft px-5 text-sm font-semibold hover:bg-paper disabled:opacity-70"
            >
              {isRefreshing && (
                <span
                  className="amonra-loading-eye amonra-loading-eye--small"
                  aria-hidden="true"
                >
                  <img src="/ojo-de-horus.png" alt="" width="20" height="20" />
                </span>
              )}
              Actualizar
            </button>
            <button
              type="button"
              onClick={() => void openBlockedContacts()}
              className="min-h-11 rounded-full border border-antique-gold-soft px-5 text-sm font-semibold text-paper-ink hover:bg-paper"
            >
              Bloqueos
            </button>
            <button
              type="button"
              onClick={() => void handleLogout()}
              className="min-h-11 rounded-full bg-clay-ink px-5 text-sm font-semibold text-white hover:bg-clay-ink/90"
            >
              Cerrar sesión
            </button>
          </div>
        </div>

        <div
          className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4"
          aria-label="Resumen de peticiones"
        >
          {dashboardFilters.map((card) => {
            const count =
              card.value === "all"
                ? allPetitions.filter(
                    (petition) => petition.status !== "expired",
                  ).length
                : dashboardCounts.get(card.value) || 0;
            const isSelected = filter === card.value;
            return (
              <button
                key={card.value}
                type="button"
                aria-pressed={isSelected}
                onClick={() => changeFilter(card.value)}
                className={`rounded-2xl border p-4 text-left transition hover:-translate-y-0.5 hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-red ${card.accent} ${isSelected ? "ring-2 ring-clay-red/50" : ""}`}
              >
                <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-paper-muted">
                  {card.label}
                </span>
                <span className="mt-2 block font-editorial text-3xl text-paper-ink">
                  {count}
                </span>
                <span className="mt-1 block text-xs text-paper-muted">
                  {card.description}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-5 flex flex-wrap items-end justify-between gap-4 rounded-xl border border-antique-gold-soft/50 bg-[var(--color-parchment-soft)] p-4">
          <div className="w-full sm:w-auto">
            <label
              htmlFor="petition-filter"
              className="mb-2 block text-sm font-semibold"
            >
              Filtrar por estado
            </label>
            <select
              id="petition-filter"
              value={filter}
              disabled={isRefreshing}
              onChange={(event) =>
                changeFilter(event.target.value as FilterValue)
              }
              className="min-h-11 w-full rounded-lg border border-antique-gold-soft bg-paper px-3 text-paper-ink sm:w-64 md:w-80"
            >
              {filterOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {isRefreshing ? (
          <div className="amonra-loading-state mt-6" aria-live="polite">
            <span className="amonra-loading-eye" aria-hidden="true">
              <img src="/ojo-de-horus.png" alt="" width="32" height="32" />
            </span>
            <span className="text-sm text-paper-muted">
              Cargando peticiones…
            </span>
          </div>
        ) : null}

        {!isRefreshing && petitions.length > 0 ? (
          <p
            className="mt-4 text-sm text-paper-muted"
            role="status"
            aria-live="polite"
          >
            Se muestran {petitions.length} peticiones.
          </p>
        ) : null}

        {!isRefreshing && petitions.length === 0 ? (
          <div
            className="mt-5 rounded-2xl border border-dashed border-antique-gold-soft bg-[var(--color-parchment-soft)] p-8 text-center"
            role="status"
            aria-live="polite"
          >
            <span
              className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-paper text-xl text-clay-red"
              aria-hidden="true"
            >
              ·
            </span>
            <h3 className="mt-4 font-editorial text-xl text-paper-ink">
              Sin peticiones en esta vista
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-paper-muted">
              {emptyStateMessage}
            </p>
            {filter !== "all" ? (
              <button
                type="button"
                onClick={() => changeFilter("all")}
                className="mt-4 min-h-10 rounded-full border border-antique-gold-soft px-5 text-sm font-semibold text-paper-ink hover:bg-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-red"
              >
                Ver todas las peticiones
              </button>
            ) : null}
          </div>
        ) : null}

        {archivedPetitions.length > 0 && (
          <section
            className="mt-5 rounded-2xl border border-paper-ink/10 bg-paper/50 p-4 sm:p-5"
            aria-labelledby="archived-petitions-title"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="eyebrow text-paper-muted">Historial</p>
                <h3
                  id="archived-petitions-title"
                  className="mt-1 font-editorial text-xl text-paper-ink"
                >
                  Peticiones expiradas
                </h3>
                <p className="mt-1 text-sm text-paper-muted">
                  Se conservaron porque no confirmaron el correo dentro de 24
                  horas.
                </p>
              </div>
              <span className="rounded-full bg-paper px-3 py-1 text-sm font-semibold text-paper-ink">
                {archivedPetitions.length}
              </span>
            </div>
            <div className="mt-4 grid gap-3">
              {archivedPetitions.map((petition) => (
                <AdminPetitionCard
                  key={petition.reference}
                  petition={petition}
                  onViewDetails={(selected) =>
                    setSelectedReference(selected.reference)
                  }
                />
              ))}
            </div>
          </section>
        )}

        {pendingPetitions.length > 0 && (
          <section
            className="mt-5 rounded-2xl border border-clay-red/20 bg-clay-red/5 p-4 sm:p-5"
            aria-labelledby="pending-petitions-title"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="eyebrow text-clay-red">Confirmación pendiente</p>
                <h3
                  id="pending-petitions-title"
                  className="mt-1 font-editorial text-xl text-paper-ink"
                >
                  Esperan confirmación
                </h3>
                <p className="mt-1 text-sm text-paper-muted">
                  Puedes eliminarlas o avanzar su estado manualmente mientras
                  esperas la confirmación.
                </p>
              </div>
              <span className="rounded-full bg-paper px-3 py-1 text-sm font-semibold text-paper-ink">
                {pendingPetitions.length}
              </span>
            </div>
            <div className="mt-4 grid gap-3">
              {pendingPetitions.map((petition) => (
                <AdminPetitionCard
                  key={petition.reference}
                  petition={petition}
                  onViewDetails={(selected) =>
                    setSelectedReference(selected.reference)
                  }
                />
              ))}
            </div>
          </section>
        )}

        {manageablePetitions.length > 0 && (
          <section
            className="mt-5"
            aria-labelledby="manageable-petitions-title"
          >
            {pendingPetitions.length > 0 && (
              <div className="mb-3">
                <h3
                  id="manageable-petitions-title"
                  className="font-editorial text-xl text-paper-ink"
                >
                  Peticiones para gestionar
                </h3>
                <p className="mt-1 text-sm text-paper-muted">
                  Abre una fila para revisar el mensaje y actualizar su estado.
                </p>
              </div>
            )}
            <div className="grid gap-3">
              {manageablePetitions.map((petition) => (
                <AdminPetitionCard
                  key={petition.reference}
                  petition={petition}
                  onViewDetails={(selected) =>
                    setSelectedReference(selected.reference)
                  }
                />
              ))}
            </div>
          </section>
        )}
      </section>

      {selectedPetition ? (
        <div className="fixed inset-0 z-[80]" role="presentation">
          <button
            type="button"
            aria-label="Cerrar detalle de la petición"
            onClick={() => setSelectedReference(null)}
            className="absolute inset-0 bg-clay-ink/40 backdrop-blur-[2px]"
          />
          <aside
            role="dialog"
            aria-modal="true"
            aria-labelledby={`petition-detail-${selectedPetition.reference}`}
            className="absolute inset-y-0 right-0 flex w-full max-w-2xl flex-col bg-[var(--color-parchment)] shadow-2xl"
          >
            <AdminPetitionDetailsPanel
              key={selectedPetition.reference}
              petition={selectedPetition}
              onClose={() => setSelectedReference(null)}
              onBlockContact={handleBlockContact}
              onSaveMessage={handleSaveMessage}
              onSaveStatus={handleSaveStatus}
              onDelete={handleDelete}
            />
          </aside>
        </div>
      ) : null}

      {isBlockedContactsOpen ? (
        <div className="fixed inset-0 z-[80]" role="presentation">
          <button
            type="button"
            aria-label="Cerrar contactos bloqueados"
            onClick={() => setIsBlockedContactsOpen(false)}
            className="absolute inset-0 bg-clay-ink/40 backdrop-blur-[2px]"
          />
          <aside
            role="dialog"
            aria-modal="true"
            aria-labelledby="blocked-contacts-title"
            className="absolute inset-y-0 right-0 flex w-full max-w-2xl flex-col bg-[var(--color-parchment)] shadow-2xl"
          >
            <div id="blocked-contacts-title" className="sr-only">
              Contactos bloqueados
            </div>
            <AdminBlockedContactsPanel
              contacts={blockedContacts}
              isLoading={isLoadingBlockedContacts}
              onClose={() => setIsBlockedContactsOpen(false)}
              onUnblock={handleUnblockContact}
            />
          </aside>
        </div>
      ) : null}
    </>
  );
}
