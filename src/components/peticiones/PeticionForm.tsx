import { useRef, useState, type SyntheticEvent } from "react";
import { extractApiErrorMessage, getApiBase } from "./api";
import {
  pickAmonraOption,
  showAmonraAlert,
  showAmonraLoading,
  Swal,
  type AmonraSelectOption,
} from "./swal";
import type {
  CandleColor,
  CandleType,
  PeticionCreateResponse,
  PeticionPayload,
  PetitionKind,
  PrayerDuration,
} from "./types";

const KIND_OPTIONS: Array<AmonraSelectOption<PetitionKind>> = [
  { value: "Cadena de oración", label: "Pedir una oración" },
  { value: "Encendido de vela", label: "Encender una vela" },
  { value: "Otra petición", label: "Otro motivo" },
];

const DURATION_OPTIONS: Array<AmonraSelectOption<PrayerDuration>> = [
  { value: "Una semana", label: "Una semana" },
  { value: "Un día", label: "Un día" },
  { value: "Un mes", label: "Un mes" },
];

const CANDLE_COLOR_OPTIONS: Array<AmonraSelectOption<CandleColor>> = [
  { value: "Ayúdame a elegir", label: "Ayúdame a elegir" },
  { value: "Blanca", label: "Blanca" },
  { value: "Amarilla", label: "Amarilla" },
  { value: "Roja", label: "Roja" },
  { value: "Azul", label: "Azul" },
  { value: "Otra", label: "Otra" },
];

const CANDLE_TYPE_OPTIONS: Array<AmonraSelectOption<CandleType>> = [
  { value: "Simbólico", label: "Simbólico" },
  { value: "Vela física", label: "Vela física" },
];

const DEFAULT_KIND: PetitionKind = "Cadena de oración";
const DEFAULT_DURATION: PrayerDuration = "Una semana";
const DEFAULT_CANDLE_COLOR: CandleColor = "Ayúdame a elegir";
const DEFAULT_CANDLE_TYPE: CandleType = "Simbólico";

interface SelectTriggerProps {
  id: string;
  ariaLabel: string;
  value: string;
  onClick: () => void;
}

/** Button that opens a themed SweetAlert2 option picker, replacing the old `.site-select` dropdown. */
function SelectTrigger({ id, ariaLabel, value, onClick }: SelectTriggerProps) {
  return (
    <button
      id={id}
      type="button"
      aria-label={ariaLabel}
      aria-haspopup="dialog"
      onClick={onClick}
      className="flex min-h-12 w-full items-center justify-between gap-4 rounded-lg border border-antique-gold-soft bg-[var(--color-parchment-subtle)] px-4 py-3 text-left font-interface text-base text-paper-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-red"
    >
      <span>{value}</span>
      <span aria-hidden="true" className="text-clay-ink">
        ⌄
      </span>
    </button>
  );
}

/** Petition submission form. Replaces the vanilla `<script>` logic from the former peticiones.astro. */
export default function PeticionForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const [kind, setKind] = useState<PetitionKind>(DEFAULT_KIND);
  const [duration, setDuration] = useState<PrayerDuration>(DEFAULT_DURATION);
  const [candleColor, setCandleColor] =
    useState<CandleColor>(DEFAULT_CANDLE_COLOR);
  const [candleType, setCandleType] = useState<CandleType>(DEFAULT_CANDLE_TYPE);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [phoneLocal, setPhoneLocal] = useState("");
  const [email, setEmail] = useState("");
  const [share, setShare] = useState(false);
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isPrayer = kind === "Cadena de oración";
  const isCandle = kind === "Encendido de vela";

  const handleKindSelect = async () => {
    const selected = await pickAmonraOption(
      "¿Cómo quieres que te acompañemos?",
      KIND_OPTIONS,
      kind,
    );
    if (selected) setKind(selected);
  };

  const handleDurationSelect = async () => {
    const selected = await pickAmonraOption(
      "¿Durante cuánto tiempo quieres que acompañemos tu petición?",
      DURATION_OPTIONS,
      duration,
    );
    if (selected) setDuration(selected);
  };

  const handleCandleColorSelect = async () => {
    const selected = await pickAmonraOption(
      "Color de vela",
      CANDLE_COLOR_OPTIONS,
      candleColor,
    );
    if (selected) setCandleColor(selected);
  };

  const handleCandleTypeSelect = async () => {
    const selected = await pickAmonraOption(
      "Tipo de encendido",
      CANDLE_TYPE_OPTIONS,
      candleType,
    );
    if (selected) setCandleType(selected);
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const value = input.value;
    const caret = input.selectionStart ?? value.length;
    const digitsBeforeCaret = value.slice(0, caret).replace(/\D/gu, "").length;
    let digits = value.replace(/\D/gu, "");
    if (digits.length === 11 && digits.startsWith("569"))
      digits = digits.slice(3);
    else if (digits.length === 9 && digits.startsWith("9"))
      digits = digits.slice(1);
    const localNumber = digits.slice(0, 8);
    let formatted = localNumber.slice(0, 4);
    if (localNumber.length > 4) formatted += ` ${localNumber.slice(4, 8)}`;

    input.value = formatted;
    let nextCaret = 0;
    let countedDigits = 0;
    while (nextCaret < formatted.length && countedDigits < digitsBeforeCaret) {
      if (/\d/u.test(formatted[nextCaret])) countedDigits += 1;
      nextCaret += 1;
    }
    input.setSelectionRange(nextCaret, nextCaret);
    input.setCustomValidity(
      localNumber.length > 0 && localNumber.length < 8
        ? "Completa los ocho dígitos del celular."
        : "",
    );
    setPhoneLocal(formatted);
  };

  const resetForm = () => {
    setKind(DEFAULT_KIND);
    setDuration(DEFAULT_DURATION);
    setCandleColor(DEFAULT_CANDLE_COLOR);
    setCandleType(DEFAULT_CANDLE_TYPE);
    setMessage("");
    setName("");
    setPhoneLocal("");
    setEmail("");
    setShare(false);
    setConsent(false);
    setWebsite("");
  };

  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;
    const form = formRef.current;
    if (!form || !form.reportValidity()) return;
    setIsSubmitting(true);

    const payload: PeticionPayload = {
      kind,
      ...(isPrayer ? { duration } : {}),
      ...(isCandle ? { candleColor, candleType } : {}),
      message: message.trim(),
      name: name.trim(),
      ...(phoneLocal.replace(/\D/gu, "").length === 8
        ? { phone: `+56 9 ${phoneLocal.trim()}` }
        : {}),
      email: email.trim(),
      share,
      consent,
      website,
    };

    showAmonraLoading("Espera mientras enviamos tu petición…");

    try {
      const response = await fetch(`${getApiBase()}/api/peticiones`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(
          extractApiErrorMessage(result) ||
            "No pudimos guardar tu petición. Revisa los datos e inténtalo de nuevo.",
        );
      }

      const createResult = result as PeticionCreateResponse;
      Swal.close();
      const alertResult = await showAmonraAlert({
        icon: createResult.confirmationSent ? "success" : "warning",
        title: createResult.confirmationSent
          ? "Revisa tu correo"
          : "No pudimos enviar el correo",
        text: createResult.confirmationSent
          ? "Revisa tu correo y abre el enlace para confirmar tu petición. Tienes 24 horas; después comenzaremos a gestionarla."
          : "La petición quedó guardada, pero no pudimos enviar el correo de confirmación. Inténtalo nuevamente más tarde.",
      });

      if (createResult.confirmationSent && alertResult.isConfirmed) {
        window.location.assign("/");
        return;
      }
      resetForm();
    } catch (error) {
      Swal.close();
      await showAmonraAlert({
        icon: "error",
        title: "No se pudo enviar",
        text:
          error instanceof Error
            ? error.message
            : "No pudimos conectar con el servicio. Inténtalo de nuevo.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      ref={formRef}
      id="petition-form"
      className="mt-8 space-y-6"
      onSubmit={handleSubmit}
      noValidate
    >
      <div>
        <p className="mb-2 block font-interface text-sm font-semibold text-paper-ink">
          ¿Cómo quieres que te acompañemos?
        </p>
        <SelectTrigger
          id="petition-kind"
          ariaLabel="¿Cómo quieres que te acompañemos?"
          value={
            KIND_OPTIONS.find((option) => option.value === kind)?.label ?? kind
          }
          onClick={handleKindSelect}
        />
      </div>

      {isPrayer && (
        <div id="prayer-details">
          <p className="mb-2 block font-interface text-sm font-semibold text-paper-ink">
            ¿Durante cuánto tiempo quieres que acompañemos tu petición?
          </p>
          <SelectTrigger
            id="prayer-duration"
            ariaLabel="¿Durante cuánto tiempo quieres que acompañemos tu petición?"
            value={duration}
            onClick={handleDurationSelect}
          />
        </div>
      )}

      {isCandle && (
        <div id="candle-details">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <p className="mb-2 block font-interface text-sm font-semibold text-paper-ink">
                Color de vela
              </p>
              <SelectTrigger
                id="candle-color"
                ariaLabel="Color de vela"
                value={candleColor}
                onClick={handleCandleColorSelect}
              />
            </div>
            <div>
              <p className="mb-2 block font-interface text-sm font-semibold text-paper-ink">
                Tipo de encendido
              </p>
              <SelectTrigger
                id="candle-type"
                ariaLabel="Tipo de encendido"
                value={candleType}
                onClick={handleCandleTypeSelect}
              />
            </div>
          </div>
        </div>
      )}

      <div>
        <label
          htmlFor="petition-message"
          className="mb-2 block font-interface text-sm font-semibold text-paper-ink"
        >
          ¿Qué quieres que tengamos presente?
        </label>
        <textarea
          id="petition-message"
          name="message"
          rows={5}
          maxLength={600}
          minLength={5}
          required
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Escribe tu mensaje (máximo 600 caracteres)."
          className="w-full rounded-lg border border-antique-gold-soft bg-[var(--color-parchment-subtle)] px-4 py-3 font-interface text-base leading-relaxed text-paper-ink placeholder:text-paper-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-red"
        />
        <p className="mt-2 text-xs leading-relaxed text-paper-muted">
          No incluyas datos sensibles ni información privada de otras personas.
        </p>
      </div>

      <div className="grid gap-5">
        <div>
          <label
            htmlFor="petition-name"
            className="mb-2 block font-interface text-sm font-semibold text-paper-ink"
          >
            Nombre
          </label>
          <input
            id="petition-name"
            name="name"
            maxLength={80}
            required
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="min-h-12 w-full rounded-lg border border-antique-gold-soft bg-[var(--color-parchment-subtle)] px-4 py-3 font-interface text-base text-paper-ink placeholder:text-paper-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-red"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label
            htmlFor="petition-phone"
            className="mb-2 block font-interface text-sm font-semibold text-paper-ink"
          >
            WhatsApp o celular{" "}
            <span className="font-normal text-paper-muted">(opcional)</span>
          </label>
          <div className="flex min-h-12 items-center rounded-lg border border-antique-gold-soft bg-[var(--color-parchment-subtle)] px-4 py-3 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-clay-red">
            <span className="shrink-0 font-interface text-base text-paper-ink">
              +56 9
            </span>
            <input
              id="petition-phone"
              name="phoneLocal"
              type="tel"
              maxLength={20}
              autoComplete="tel-national"
              aria-describedby="petition-phone-help"
              value={phoneLocal}
              onChange={handlePhoneChange}
              className="min-w-0 flex-1 border-0 bg-transparent pl-2 font-interface text-base text-paper-ink placeholder:text-paper-muted outline-none"
              placeholder="1234 5678"
            />
          </div>
          <p
            id="petition-phone-help"
            className="mt-2 text-xs leading-relaxed text-paper-muted"
          >
            Si lo ingresas, completa los 8 dígitos.
          </p>
        </div>
        <div>
          <label
            htmlFor="petition-email"
            className="mb-2 block font-interface text-sm font-semibold text-paper-ink"
          >
            Correo electrónico
          </label>
          <input
            id="petition-email"
            name="email"
            type="email"
            maxLength={254}
            required
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="min-h-12 w-full rounded-lg border border-antique-gold-soft bg-[var(--color-parchment-subtle)] px-4 py-3 font-interface text-base text-paper-ink placeholder:text-paper-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-red"
            placeholder="tu@correo.cl"
          />
        </div>
      </div>

      <label className="flex items-start gap-3 font-interface text-sm leading-relaxed text-paper-muted">
        <input
          type="checkbox"
          name="share"
          checked={share}
          onChange={(event) => setShare(event.target.checked)}
          className="mt-1 size-4 shrink-0 accent-clay-red"
        />
        <span>
          Autorizo que esta petición se comparta con la comunidad de Amonra. Si
          no marco esta casilla, se mantiene privada.
        </span>
      </label>

      <label className="flex items-start gap-3 font-interface text-sm leading-relaxed text-paper-muted">
        <input
          id="petition-consent"
          type="checkbox"
          name="consent"
          required
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          className="mt-1 size-4 shrink-0 accent-clay-red"
        />
        <span>
          Acepto que Amonra guarde esta petición para gestionarla y que use mi
          correo únicamente para confirmar la solicitud y comunicar su estado.
          Si indico mi celular, autorizo que se use para contactarme por esta
          petición.
        </span>
      </label>

      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="petition-website">Deja este campo vacío</label>
        <input
          id="petition-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
        />
      </div>

      <div className="border-t border-antique-gold-soft/40 pt-5">
        <p className="text-xs leading-relaxed text-paper-muted">
          Para comenzar a gestionar tu petición, confirma tu correo desde el
          enlace que te enviaremos. El enlace vence en 24 horas.
        </p>
        <button
          id="petition-submit"
          type="submit"
          disabled={isSubmitting}
          className="mt-5 inline-flex min-h-12 items-center justify-center rounded-full bg-clay-red px-7 font-interface text-sm font-semibold text-white transition-colors hover:bg-clay-red/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-red disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Enviando…" : "Enviar petición"}
        </button>
      </div>
    </form>
  );
}
