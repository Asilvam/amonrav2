export type PetitionKind =
  "Cadena de oración" | "Encendido de vela" | "Otra petición";

export type PrayerDuration = "Una semana" | "Un día" | "Un mes";

export type CandleColor =
  "Ayúdame a elegir" | "Blanca" | "Amarilla" | "Roja" | "Azul" | "Otra";

export type CandleType = "Simbólico" | "Vela física";

export type PetitionStatus =
  | "pending_confirmation"
  | "received"
  | "accepted"
  | "in_progress"
  | "completed"
  | "cancelled";

export const PETITION_STATUS_LABELS: Record<PetitionStatus, string> = {
  pending_confirmation: "Pendiente de confirmar el correo",
  received: "Recibida",
  accepted: "Aceptada",
  in_progress: "En proceso",
  completed: "Realizada",
  cancelled: "Anulada",
};

export interface PeticionPayload {
  kind: PetitionKind;
  duration?: PrayerDuration;
  candleColor?: CandleColor;
  candleType?: CandleType;
  message: string;
  name: string;
  phone?: string;
  email: string;
  share: boolean;
  consent: boolean;
  website: string;
}

export interface PeticionCreateResponse {
  confirmationSent: boolean;
}

export interface PeticionConfirmResponse {
  status: PetitionStatus;
  trackingToken: string;
}

export interface PeticionEstadoRequest {
  reference: string;
  trackingToken: string;
}

export interface PeticionEstadoResponse {
  status: PetitionStatus;
  reference: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiErrorBody {
  statusCode?: number;
  message?: string | string[];
  error?: string;
}
