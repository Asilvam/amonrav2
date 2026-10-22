import type { ApiErrorBody } from "./types";

/**
 * Resolves the backend API base URL, following the same convention used
 * across the site: explicit env var first, then a localhost fallback in
 * dev, then the current origin in production.
 */
export function getApiBase(): string {
  const configured = import.meta.env.PUBLIC_API_BASE_URL;
  const fallback = import.meta.env.DEV
    ? "http://localhost:3500"
    : window.location.origin;
  return (configured || fallback).replace(/\/+$/u, "");
}

/** Known backend/validation messages mapped to friendlier Spanish copy. */
const KNOWN_MESSAGE_PATTERNS: Array<[RegExp, string]> = [
  [
    /message must be longer than or equal to 5 characters/giu,
    "Tu intención o mensaje debe tener al menos 5 caracteres.",
  ],
  [
    /message must be shorter than or equal to 600 characters/giu,
    "Tu intención o mensaje no puede superar los 600 caracteres.",
  ],
  [
    /name must be longer than or equal to 1 characters/giu,
    "Ingresa tu nombre.",
  ],
  [
    /name must be shorter than or equal to 80 characters/giu,
    "Tu nombre no puede superar los 80 caracteres.",
  ],
  [/email must be an email/giu, "Ingresa un correo electrónico válido."],
];

/** Translates a raw API error message into friendlier Spanish copy. */
export function translateApiError(message: string): string {
  let translated = message;
  for (const [pattern, replacement] of KNOWN_MESSAGE_PATTERNS) {
    translated = translated.replace(pattern, replacement);
  }
  return translated;
}

/** Defensively extracts a human-readable message from a NestJS error body. */
export function extractApiErrorMessage(body: ApiErrorBody): string {
  const rawMessage = Array.isArray(body.message)
    ? body.message.join(" ")
    : body.message;
  return translateApiError(rawMessage || "");
}
