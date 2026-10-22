import { useState, type SubmitEvent } from "react";

interface Props {
  isLoading: boolean;
  onLogin: (password: string) => Promise<void>;
}

export default function AdminLoginForm({ isLoading, onLogin }: Props) {
  const [password, setPassword] = useState("");

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!password.trim() || isLoading) return;
    void onLogin(password);
  }

  return (
    <section className="mt-8 max-w-xl rounded-2xl border border-antique-gold-soft/60 bg-[var(--color-parchment-soft)] p-6 shadow-sm sm:p-8">
      <h2 className="font-editorial text-2xl">Acceso de administración</h2>
      <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="admin-password"
            className="mb-2 block text-sm font-semibold"
          >
            Contraseña de administración
          </label>
          <input
            id="admin-password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            maxLength={200}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="min-h-12 w-full rounded-lg border border-antique-gold-soft bg-paper px-4 py-3 text-paper-ink"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          aria-busy={isLoading}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-clay-red px-6 text-sm font-semibold text-white disabled:opacity-70"
        >
          {isLoading && (
            <span
              className="amonra-loading-eye amonra-loading-eye--small"
              aria-hidden="true"
            >
              <img src="/ojo-de-horus.png" alt="" width="20" height="20" />
            </span>
          )}
          Iniciar sesión
        </button>
      </form>
    </section>
  );
}
