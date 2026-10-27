import { extractApiErrorMessage, getApiBase } from "../peticiones/api";
import type { ApiErrorBody } from "../peticiones/types";
import type { CandleColor, Intention, RoomCandle } from "./candle-room";
import { CANDLE_PAGE_SIZE } from "./candle-room";

export type CandleStatus = "active" | "extinguished";
export interface CandlePage {
  candles: RoomCandle[];
  pagination: { total: number; skip: number; limit: number; hasMore: boolean };
}

export interface CandleCountry {
  code: string;
  name: { es: string; en: string };
}

export interface CandleCity {
  id: string;
  name: string;
  region?: string;
}

export interface CreateCandlePayload {
  intention: Intention;
  dedication: string;
  name: string;
  color: CandleColor;
  countryCode?: string;
  cityId?: string;
  cityName?: string;
  publishLocation: boolean;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function apiErrorMessage(value: unknown): string {
  const body = isRecord(value) ? (value as ApiErrorBody) : {};
  return extractApiErrorMessage(body);
}

async function requestJson(path: string, init?: RequestInit): Promise<unknown> {
  let response: Response;
  try {
    response = await fetch(`${getApiBase()}/api/velas${path}`, init);
  } catch {
    throw new Error(
      "No pudimos conectar con el servicio de velas. Inténtalo de nuevo.",
    );
  }

  let body: unknown;
  try {
    body = await response.json();
  } catch {
    if (response.ok) {
      throw new Error("El servicio de velas devolvió una respuesta inválida.");
    }
    body = null;
  }

  if (!response.ok) {
    throw new Error(
      apiErrorMessage(body) ||
        `No pudimos completar la solicitud de velas (${response.status}).`,
    );
  }
  return body;
}

function parseCandle(value: unknown): RoomCandle {
  if (!isRecord(value)) {
    throw new Error("El servicio devolvió una vela con formato inválido.");
  }

  const startedAt =
    typeof value.startedAt === "number"
      ? value.startedAt
      : typeof value.startedAt === "string"
        ? Date.parse(value.startedAt)
        : Number.NaN;
  const validIntention = [
    "Gratitud",
    "Esperanza",
    "Calma",
    "Amor",
    "Fortaleza",
    "Recuerdo",
  ].includes(String(value.intention));
  const validColor = ["marfil", "ambar", "rosa", "azul"].includes(
    String(value.color),
  );

  if (
    typeof value.id !== "string" ||
    !validIntention ||
    !validColor ||
    !Number.isFinite(startedAt) ||
    typeof value.dedication !== "string" ||
    typeof value.name !== "string"
  ) {
    throw new Error("El servicio devolvió una vela con formato inválido.");
  }

  return {
    id: value.id,
    intention: value.intention as Intention,
    dedication: value.dedication,
    name: value.name,
    color: value.color as CandleColor,
    startedAt,
    ...(typeof value.countryCode === "string"
      ? { countryCode: value.countryCode }
      : {}),
    ...(typeof value.cityName === "string" ? { cityName: value.cityName } : {}),
    publishLocation: value.publishLocation === true,
  };
}

export async function getCandleCountries(): Promise<CandleCountry[]> {
  const body = await requestJson("/ubicaciones/paises");
  if (!isRecord(body) || !Array.isArray(body.countries)) {
    throw new Error("No pudimos leer el listado de países.");
  }

  return body.countries.map((value) => {
    if (
      !isRecord(value) ||
      typeof value.code !== "string" ||
      !isRecord(value.name) ||
      typeof value.name.es !== "string" ||
      typeof value.name.en !== "string"
    ) {
      throw new Error("El servicio devolvió un país con formato inválido.");
    }
    return {
      code: value.code,
      name: { es: value.name.es, en: value.name.en },
    };
  });
}

export async function searchCandleCities(
  countryCode: string,
  query: string,
  signal?: AbortSignal,
): Promise<CandleCity[]> {
  const params = new URLSearchParams({ country: countryCode, q: query });
  const body = await requestJson(`/ubicaciones/ciudades?${params}`, { signal });
  if (!isRecord(body) || !Array.isArray(body.cities)) {
    throw new Error("No pudimos leer las ciudades de este país.");
  }

  return body.cities.map((value) => {
    if (
      !isRecord(value) ||
      (typeof value.id !== "string" && typeof value.id !== "number") ||
      typeof value.name !== "string"
    ) {
      throw new Error("El servicio devolvió una ciudad con formato inválido.");
    }
    return {
      id: String(value.id),
      name: value.name,
      ...(typeof value.region === "string" ? { region: value.region } : {}),
    };
  });
}

export async function createCandle(
  payload: CreateCandlePayload,
): Promise<RoomCandle> {
  const body = await requestJson("", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!isRecord(body)) {
    throw new Error("El servicio no devolvió los datos de la vela.");
  }
  return parseCandle(body.candle);
}

export async function getRoomCandles(
  status: CandleStatus,
  skip = 0,
  signal?: AbortSignal,
): Promise<CandlePage> {
  const params = new URLSearchParams({
    status,
    limit: String(CANDLE_PAGE_SIZE),
    skip: String(skip),
  });
  const body = await requestJson(`?${params}`, { signal });
  if (!isRecord(body) || !Array.isArray(body.candles)) {
    throw new Error("No pudimos leer las velas de la sala.");
  }
  const pagination = body.pagination;
  if (
    !isRecord(pagination) ||
    !Number.isInteger(pagination.total) ||
    Number(pagination.total) < 0 ||
    pagination.limit !== CANDLE_PAGE_SIZE ||
    pagination.skip !== skip ||
    typeof pagination.hasMore !== "boolean" ||
    body.candles.length > CANDLE_PAGE_SIZE
  ) {
    throw new Error("El servicio devolvió una paginación inválida.");
  }
  return {
    candles: body.candles.map(parseCandle),
    pagination: {
      total: Number(pagination.total),
      limit: CANDLE_PAGE_SIZE,
      skip,
      hasMore: pagination.hasMore,
    },
  };
}
