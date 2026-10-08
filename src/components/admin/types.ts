export type PetitionStatus =
  | "pending_confirmation"
  | "received"
  | "accepted"
  | "in_progress"
  | "completed"
  | "cancelled"
  | "expired";

export type ManageablePetitionStatus = Exclude<
  PetitionStatus,
  "pending_confirmation" | "expired"
>;

export type BlockContactType = "email" | "phone";

export const PETITION_STATUS_LABELS: Record<PetitionStatus, string> = {
  pending_confirmation: "Pendiente de confirmación",
  received: "Recibida",
  accepted: "Aceptada",
  in_progress: "En proceso",
  completed: "Realizada",
  cancelled: "Anulada",
  expired: "Expirada",
};

export interface AdminPetition {
  reference: string;
  kind: string;
  duration?: string;
  candleColor?: string;
  candleType?: string;
  message: string;
  name: string;
  phone?: string;
  email: string;
  share: boolean;
  status: PetitionStatus;
  createdAt: string;
  updatedAt: string;
}

export interface AdminPetitionsResponse {
  petitions: AdminPetition[];
}

export interface AdminBlockedContact {
  _id: string;
  type: BlockContactType;
  value: string;
  reason?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AdminBlockedContactsResponse {
  blockedContacts: AdminBlockedContact[];
}

export interface ApiErrorBody {
  statusCode?: number;
  message?: string | string[];
  error?: string;
}

export class AdminApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "AdminApiError";
    this.status = status;
  }
}
