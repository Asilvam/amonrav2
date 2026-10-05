import { useRef, useState, type SyntheticEvent } from "react";
import { extractApiErrorMessage, getApiBase } from "./api";
import { showAmonraAlert, showAmonraLoading, Swal } from "./swal";
import { PETITION_STATUS_LABELS, type PeticionEstadoResponse } from "./types";

function formatDate(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleString("es-CL", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

/** Petition status lookup form: queries by reference + tracking token and shows the result. */
export default function PeticionEstado() {
  const formRef = useRef<HTMLFormElement>(null);
  const [reference, setReference] = useState("");
  const [trackingToken, setTrackingToken] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<PeticionEstadoResponse | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = formRef.current;
    if (isSubmitting || !form || !form.reportValidity()) return;

    setIsSubmitting(true);
    setErrorMessage(null);
    showAmonraLoading("Estamos buscando tu petición…");

    try {
      const response = await fetch(`${getApiBase()}/api/peticiones/estado`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          reference: reference.trim().toUpperCase(),
          trackingToken: trackingToken.trim(),
        }),
      });
      const body = await response.json();

      if (!response.ok) {
        throw new Error(
          response.status === 404
            ? "No encontramos una petición con esos datos. Revisa la referencia y el código."
            : extractApiErrorMessage(body) ||
                "No pudimos consultar el estado. Inténtalo más tarde.",
        );
      }

      const estadoResult = body as PeticionEstadoResponse;
      setResult(estadoResult);
      Swal.close();
      await showAmonraAlert({
        icon: "success",
        title: `Estado: ${PETITION_STATUS_LABELS[estadoResult.status] || estadoResult.status}`,
        text: `Referencia: ${estadoResult.reference}`,
      });
    } catch (error) {
      setResult(null);
      Swal.close();
      const message =
        error instanceof Error
          ? error.message
          : "No pudimos conectar con el servicio. Inténtalo más tarde.";
      setErrorMessage(message);
      await showAmonraAlert({
        icon: "error",
        title: "No pudimos consultar el estado",
        text: message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form
        ref={formRef}
        className="mt-8 space-y-5"
        onSubmit={handleSubmit}
        noValidate
      >
        <div>
          <label
            htmlFor="status-reference"
            className="mb-2 block text-sm font-semibold"
          >
            Referencia
          </label>
          <input
            id="status-reference"
            name="reference"
            required
            pattern="AM-[A-Fa-f0-9]{12}"
            maxLength={15}
            placeholder="AM-0123456789AB"
            autoComplete="off"
            value={reference}
            onChange={(event) => setReference(event.target.value)}
            className="min-h-12 w-full rounded-lg border border-antique-gold-soft bg-[var(--color-parchment-subtle)] px-4 py-3 text-paper-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-red"
          />
        </div>
        <div>
          <label
            htmlFor="status-code"
            className="mb-2 block text-sm font-semibold"
          >
            Código de seguimiento
          </label>
          <input
            id="status-code"
            name="trackingToken"
            type="text"
            required
            minLength={10}
            maxLength={60}
            pattern="[A-Za-z0-9_-]+"
            placeholder="AB3K7M9Q2X"
            autoComplete="off"
            autoCapitalize="characters"
            value={trackingToken}
            onChange={(event) => setTrackingToken(event.target.value)}
            className="min-h-12 w-full rounded-lg border border-antique-gold-soft bg-[var(--color-parchment-subtle)] px-4 py-3 font-mono tracking-wider text-paper-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-red"
          />
        </div>
        <button
          id="status-submit"
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-clay-red px-7 font-interface text-sm font-semibold text-white transition-colors hover:bg-clay-red/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-red disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Consultando…" : "Consultar estado"}
        </button>
      </form>

      {(result || errorMessage) && (
        <section
          className="mt-6 rounded-lg border border-antique-gold-soft/60 bg-[var(--color-parchment-subtle)] p-5"
          role="status"
          aria-live="polite"
        >
          {result ? (
            <>
              <h2 className="font-editorial text-2xl text-paper-ink">
                Estado: {PETITION_STATUS_LABELS[result.status] || result.status}
              </h2>
              <p className="mt-2 text-sm text-paper-muted">
                Referencia: {result.reference}
              </p>
              <p className="mt-1 text-sm text-paper-muted">
                Creada: {formatDate(result.createdAt)}
              </p>
              <p className="mt-1 text-sm text-paper-muted">
                Última actualización: {formatDate(result.updatedAt)}
              </p>
            </>
          ) : (
            <p>{errorMessage}</p>
          )}
        </section>
      )}

      <p className="mt-6 text-sm text-paper-muted">
        <a className="underline underline-offset-4" href="/peticiones/">
          Volver a peticiones
        </a>
      </p>
    </>
  );
}
