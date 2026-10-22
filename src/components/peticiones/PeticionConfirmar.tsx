import { useEffect, useRef, useState } from "react";
import { extractApiErrorMessage, getApiBase } from "./api";
import { showAmonraAlert, showAmonraLoading, Swal } from "./swal";
import { PETITION_STATUS_LABELS, type PeticionConfirmResponse } from "./types";

type ConfirmPhase =
  | "missing-token"
  | "pending"
  | "confirming"
  | "success"
  | "invalid-link"
  | "retry-error";

const PHASE_COPY: Record<
  ConfirmPhase,
  { eyebrow: string; title: string; description: string }
> = {
  "missing-token": {
    eyebrow: "Amonra · confirmación de correo",
    title: "Enlace de confirmación incompleto",
    description: "Estamos verificando tu correo y registrando la petición.",
  },
  pending: {
    eyebrow: "Amonra · confirmación de correo",
    title: "Validando tu petición…",
    description: "Estamos verificando tu correo y registrando la petición.",
  },
  confirming: {
    eyebrow: "Amonra · confirmación de correo",
    title: "Validando tu petición…",
    description: "Estamos verificando tu correo y registrando la petición.",
  },
  success: {
    eyebrow: "Amonra · correo verificado",
    title: "¡Petición validada!",
    description:
      "Tu correo quedó confirmado. La petición está registrada y puede comenzar el proceso.",
  },
  "invalid-link": {
    eyebrow: "Amonra · confirmación de correo",
    title: "El enlace ya no está disponible",
    description: "Estamos verificando tu correo y registrando la petición.",
  },
  "retry-error": {
    eyebrow: "Amonra · confirmación de correo",
    title: "Validando tu petición…",
    description: "Estamos verificando tu correo y registrando la petición.",
  },
};

/** Confirms the email token from the URL and shows the resulting status, including the tracking token the user needs to check on their petition later. */
export default function PeticionConfirmar() {
  const [phase, setPhase] = useState<ConfirmPhase>("pending");
  const [message, setMessage] = useState(
    "Espera un momento mientras validamos el enlace.",
  );
  const [result, setResult] = useState<PeticionConfirmResponse | null>(null);
  const tokenRef = useRef<string | null>(null);

  const confirmPetition = async (tokenValue: string) => {
    setPhase("confirming");
    setMessage("Estamos validando tu enlace…");
    showAmonraLoading("Estamos validando tu enlace…");

    try {
      const response = await fetch(`${getApiBase()}/api/peticiones/confirmar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: tokenValue }),
      });
      const body = await response.json();

      if (!response.ok) {
        const apiMessage =
          extractApiErrorMessage(body) || "No pudimos confirmar el enlace.";
        Swal.close();
        if (response.status === 400) {
          setPhase("invalid-link");
          setMessage(apiMessage);
          await showAmonraAlert({
            icon: "error",
            title: "El enlace ya no está disponible",
            text: apiMessage,
          });
        } else {
          setPhase("retry-error");
          setMessage(apiMessage);
          await showAmonraAlert({
            icon: "error",
            title: "No se pudo confirmar",
            text: apiMessage,
          });
        }
        return;
      }

      const confirmResult = body as PeticionConfirmResponse;
      setResult(confirmResult);
      setPhase("success");
      Swal.close();
      document.title = "Petición validada | Amonra";
      window.history.replaceState({}, document.title, window.location.pathname);
      await showAmonraAlert({
        icon: "success",
        title: "¡Petición validada!",
        text: "Tu correo quedó confirmado. Guarda el código de seguimiento que aparece abajo para consultar el estado de tu petición más adelante.",
      });
    } catch (error) {
      Swal.close();
      const errorText =
        error instanceof Error
          ? error.message
          : "No pudimos validar el enlace. Vuelve a intentarlo.";
      setPhase("retry-error");
      setMessage(errorText);
      await showAmonraAlert({
        icon: "error",
        title: "No se pudo confirmar",
        text: errorText,
      });
    }
  };

  useEffect(() => {
    const run = async () => {
      const urlToken = new URLSearchParams(window.location.search).get("token");
      tokenRef.current = urlToken;
      if (!urlToken) {
        setPhase("missing-token");
        setMessage(
          "Abre el enlace completo desde el correo. Si ya venció, puedes crear una nueva petición.",
        );
        return;
      }
      await confirmPetition(urlToken);
    };
    void run();
  }, []);

  const copy = PHASE_COPY[phase];
  const showRetryButton = phase === "retry-error";
  const backHref =
    phase === "missing-token" || phase === "invalid-link"
      ? "/peticiones/"
      : "/";
  const backLabel =
    phase === "missing-token" || phase === "invalid-link"
      ? "Volver a peticiones"
      : "Volver al inicio";

  return (
    <>
      <p className="eyebrow text-clay-red">{copy.eyebrow}</p>
      <h1 className="mt-3 font-editorial text-4xl text-paper-ink">
        {copy.title}
      </h1>
      <p className="mt-4 max-w-prose leading-relaxed text-paper-muted">
        {copy.description}
      </p>
      {phase !== "success" && (
        <p
          className="mt-6 text-sm leading-relaxed text-paper-ink"
          role="status"
          aria-live="polite"
        >
          {message}
        </p>
      )}
      {phase === "success" && result && (
        <section
          className="mt-6 rounded-xl border border-antique-gold-soft/60 bg-paper p-5"
          aria-live="polite"
        >
          <p className="eyebrow text-clay-red">Estado de la petición</p>
          <p className="mt-2 font-editorial text-2xl font-semibold text-paper-ink">
            {PETITION_STATUS_LABELS[result.status] || "Recibida"}
          </p>
          <p className="mt-4 text-sm font-semibold text-paper-ink">
            Tu código de seguimiento
          </p>
          <code className="amonra-tracking-code">{result.trackingToken}</code>
          <p className="mt-3 text-xs leading-relaxed text-paper-muted">
            Guárdalo: lo necesitarás junto a tu referencia para consultar el
            estado de tu petición en{" "}
            <a
              className="underline underline-offset-4"
              href="/peticiones/estado/"
            >
              /peticiones/estado/
            </a>
            .
          </p>
        </section>
      )}
      {showRetryButton && (
        <button
          type="button"
          onClick={() =>
            tokenRef.current && void confirmPetition(tokenRef.current)
          }
          className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-clay-red px-7 font-interface text-sm font-semibold text-white transition-colors hover:bg-clay-red/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-red"
        >
          Reintentar validación
        </button>
      )}
      <p className="mt-6 text-sm text-paper-muted">
        <a className="underline underline-offset-4" href={backHref}>
          {backLabel}
        </a>
      </p>
    </>
  );
}
