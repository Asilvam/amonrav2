import { useState } from "react";
import {
  amonraSections,
  type AmonraIntent,
  type AmonraSection,
} from "../../config/amonra-sections";

const INTENT_LABELS: Record<AmonraIntent, string> = {
  conocer: "Conocer Amonra",
  aprender: "Aprender",
  orientacion: "Buscar orientación",
  profundizar: "Profundizar",
  bienestar: "Bienestar",
  explorar: "Explorar libremente",
};

const intents: AmonraIntent[] = [
  "conocer",
  "aprender",
  "orientacion",
  "profundizar",
  "bienestar",
  "explorar",
];

export default function ExploreByIntent() {
  const [selectedIntent, setSelectedIntent] = useState<AmonraIntent | null>(
    null,
  );

  const recommendations = selectedIntent
    ? amonraSections
        .filter(
          (s: AmonraSection) =>
            s.status === "published" && s.intentions.includes(selectedIntent),
        )
        .slice(0, 4)
    : [];

  return (
    <section
      aria-labelledby="explore-intent-title"
      className="border-b border-antique-gold-soft/40 bg-night py-16 lg:py-24"
    >
      <div className="mx-auto w-full max-w-5xl px-6 lg:px-8">
        <div className="text-center">
          <h2
            id="explore-intent-title"
            className="font-editorial text-[clamp(2.4rem,4vw,3.5rem)] font-medium text-ivory"
          >
            ¿Qué buscas hoy?
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {intents.map((intent) => {
            const isSelected = selectedIntent === intent;
            return (
              <button
                key={intent}
                onClick={() => setSelectedIntent(intent)}
                aria-pressed={isSelected}
                className={`rounded-full border px-6 py-2.5 font-interface text-sm font-medium tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-antique-gold ${
                  isSelected
                    ? "border-antique-gold bg-antique-gold text-night"
                    : "border-antique-gold-soft/50 bg-transparent text-ivory hover:border-antique-gold hover:bg-night-raised"
                }`}
              >
                {INTENT_LABELS[intent]}
              </button>
            );
          })}
        </div>

        {selectedIntent && (
          <div className="mt-16 animate-[fade-in_0.4s_ease-out]">
            <p className="eyebrow mb-8 text-center text-antique-gold">
              Quizás quieras comenzar por aquí
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
              {recommendations.length > 0 ? (
                recommendations.map((section) => (
                  <a
                    key={section.slug}
                    href={`/temas/${section.slug}/`}
                    className="group block border border-antique-gold-soft/35 bg-night p-6 no-underline transition-colors hover:bg-night-raised focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-antique-gold md:p-8"
                  >
                    <h3 className="font-editorial text-2xl font-medium text-ivory group-hover:text-old-papyrus">
                      {section.title}
                    </h3>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-ivory-muted">
                      {section.description}
                    </p>
                    <span
                      className="mt-6 block font-interface text-sm font-semibold text-antique-gold"
                      aria-hidden="true"
                    >
                      Explorar {section.title} →
                    </span>
                  </a>
                ))
              ) : (
                <p className="col-span-full py-8 text-center text-lg italic text-ivory-muted">
                  Pronto agregaremos más contenido para esta búsqueda.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
