import { useCallback, useEffect, useState } from "react";
import AdminLoginForm from "./AdminLoginForm";
import AdminPetitionCard from "./AdminPetitionCard";
import {
  adminApi,
  deletePetition,
  listAdminPetitions,
  updatePetitionMessage,
  updatePetitionStatus,
} from "./api";
import {
  AdminApiError,
  PETITION_STATUS_LABELS,
  type AdminPetition,
  type ManageablePetitionStatus,
  type PetitionStatus,
} from "./types";
import {
  confirmAdminDeletion,
  showAdminAlert,
  showAdminLoading,
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
];

export default function AdminPeticionesPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingSession, setIsCheckingSession] = useState(true);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [filter, setFilter] = useState<FilterValue>("all");
  const [petitions, setPetitions] = useState<AdminPetition[]>([]);

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

  const loadPetitions = useCallback(
    async (nextFilter: FilterValue) => {
      setIsRefreshing(true);
      try {
        const body = await listAdminPetitions(nextFilter);
        setPetitions(body.petitions);
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
    },
    [showError],
  );

  useEffect(() => {
    const initialLoad = window.setTimeout(() => void loadPetitions("all"), 0);
    return () => window.clearTimeout(initialLoad);
  }, [loadPetitions]);

  async function handleLogin(password: string) {
    setIsLoggingIn(true);
    showAdminLoading("Validando acceso…");
    try {
      await adminApi("/admin/login", {
        method: "POST",
        body: JSON.stringify({ password }),
      });
      await loadPetitions("all");
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
      await loadPetitions(filter);
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
      await loadPetitions(filter);
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
      await loadPetitions(filter);
      await showAdminAlert("success", "Petición eliminada");
    } catch (error) {
      await showError(error, "No pudimos eliminar la petición.");
      throw error;
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
      setPetitions([]);
    }
  }

  function changeFilter(nextFilter: FilterValue) {
    setFilter(nextFilter);
    void loadPetitions(nextFilter);
  }

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
    <section className="mt-8">
      <div className="flex flex-wrap items-end justify-between gap-4 rounded-xl border border-antique-gold-soft/50 bg-[var(--color-parchment-soft)] p-4">
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
        <div className="flex gap-3">
          <button
            type="button"
            disabled={isRefreshing}
            aria-busy={isRefreshing}
            onClick={() => void loadPetitions(filter)}
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
            onClick={() => void handleLogout()}
            className="min-h-11 rounded-full bg-clay-ink px-5 text-sm font-semibold text-white hover:bg-clay-ink/90"
          >
            Cerrar sesión
          </button>
        </div>
      </div>

      {isRefreshing ? (
        <div className="amonra-loading-state mt-6" aria-live="polite">
          <span className="amonra-loading-eye" aria-hidden="true">
            <img src="/ojo-de-horus.png" alt="" width="32" height="32" />
          </span>
          <span className="text-sm text-paper-muted">Cargando peticiones…</span>
        </div>
      ) : null}

      <p
        className="mt-4 text-sm text-paper-muted"
        role="status"
        aria-live="polite"
      >
        {petitions.length
          ? `Se muestran ${petitions.length} peticiones.`
          : "No hay peticiones para este filtro."}
      </p>

      <div className="mt-4 grid gap-5">
        {petitions.map((petition) => (
          <AdminPetitionCard
            key={petition.reference}
            petition={petition}
            onSaveMessage={handleSaveMessage}
            onSaveStatus={handleSaveStatus}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </section>
  );
}
