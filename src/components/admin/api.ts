import {
  AdminApiError,
  type AdminBlockedContactsResponse,
  type AdminPetitionsResponse,
  type ApiErrorBody,
  type BlockContactType,
  type ManageablePetitionStatus,
  type PetitionStatus,
} from "./types";

export function getAdminApiBase(): string {
  const configured = import.meta.env.PUBLIC_API_BASE_URL;
  const fallback = import.meta.env.DEV
    ? `http://${window.location.hostname}:3500`
    : window.location.origin;
  let base = (configured || fallback).replace(/\/+$/u, "");

  if (
    import.meta.env.DEV &&
    /^https?:\/\/localhost(:\d+)?$/u.test(base) &&
    window.location.hostname !== "localhost" &&
    window.location.hostname !== "127.0.0.1"
  ) {
    base = `http://${window.location.hostname}:3500`;
  }

  return base;
}

function getErrorMessage(body: ApiErrorBody): string {
  if (Array.isArray(body.message)) return body.message.join(" ");
  return body.message || "No se pudo completar la operación.";
}

export async function adminApi<T>(
  path: string,
  init: RequestInit = {},
): Promise<T> {
  const response = await fetch(`${getAdminApiBase()}/api${path}`, {
    ...init,
    credentials: "include",
    headers: { "Content-Type": "application/json", ...init.headers },
  });
  const body = (await response.json().catch(() => ({}))) as T | ApiErrorBody;

  if (!response.ok) {
    throw new AdminApiError(
      getErrorMessage(body as ApiErrorBody),
      response.status,
    );
  }

  return body as T;
}

export function listAdminPetitions(status: PetitionStatus | "all") {
  return adminApi<AdminPetitionsResponse>(
    `/admin/peticiones?status=${encodeURIComponent(status)}`,
  );
}

export function updatePetitionStatus(
  reference: string,
  status: ManageablePetitionStatus,
) {
  return adminApi<unknown>(
    `/admin/peticiones/${encodeURIComponent(reference)}`,
    { method: "PATCH", body: JSON.stringify({ status }) },
  );
}

export function updatePetitionMessage(reference: string, message: string) {
  return adminApi<unknown>(
    `/admin/peticiones/${encodeURIComponent(reference)}/mensaje`,
    { method: "PATCH", body: JSON.stringify({ message }) },
  );
}

export function deletePetition(reference: string) {
  return adminApi<unknown>(
    `/admin/peticiones/${encodeURIComponent(reference)}`,
    { method: "DELETE" },
  );
}

export function blockContact(
  type: BlockContactType,
  value: string,
  reason?: string,
) {
  return adminApi<unknown>("/admin/bloqueos", {
    method: "POST",
    body: JSON.stringify({ type, value, ...(reason ? { reason } : {}) }),
  });
}

export function listBlockedContacts() {
  return adminApi<AdminBlockedContactsResponse>("/admin/bloqueos");
}

export function unblockContact(id: string) {
  return adminApi<unknown>(`/admin/bloqueos/${encodeURIComponent(id)}`, {
    method: "DELETE",
  });
}
