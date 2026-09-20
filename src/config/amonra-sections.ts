export type AmonraSectionStatus = "published" | "migration" | "planned";

export type AmonraSectionGroup =
  "amonra" | "autoconocimiento" | "simbolismo" | "practicas" | "bienestar";

export type AmonraIntent =
  | "conocer"
  | "aprender"
  | "orientacion"
  | "profundizar"
  | "bienestar"
  | "explorar";

export interface AmonraSection {
  slug: string;
  title: string;
  description: string;
  group: AmonraSectionGroup;
  intentions: AmonraIntent[];
  status: AmonraSectionStatus;
  featured?: boolean;
  order?: number;
  legacyPath: string;
}

export const amonraSections = [
  {
    slug: "fundacion",
    title: "Fundación",
    description: "Origen y principios de Amonra.",
    group: "amonra",
    intentions: ["conocer"],
    status: "published",
    featured: true,
    order: 1,
    legacyPath: "amonra.cl/index_fundacion.htm",
  },
  {
    slug: "historia",
    title: "Historia",
    description: "Raíces de la tradición egipcia.",
    group: "amonra",
    intentions: ["conocer", "aprender"],
    status: "published",
    order: 2,
    legacyPath: "index_historia.htm",
  },
  {
    slug: "amuletos",
    title: "Amuletos",
    description: "Símbolos, talismanes y sus significados.",
    group: "practicas",
    intentions: ["explorar", "bienestar"],
    status: "published",
    featured: true,
    order: 3,
    legacyPath: "amonra.cl/index_amuletos.html",
  },
  {
    slug: "astrologia",
    title: "Astrología",
    description: "Astros, signos y cartas astrales.",
    group: "autoconocimiento",
    intentions: ["aprender", "orientacion"],
    status: "published",
    featured: true,
    order: 4,
    legacyPath: "amonra.cl/index_astrologia.html",
  },
  {
    slug: "gemas",
    title: "Gemas",
    description: "Piedras y su simbolismo tradicional.",
    group: "practicas",
    intentions: ["explorar", "bienestar"],
    status: "published",
    featured: true,
    order: 5,
    legacyPath: "index_gemas.htm",
  },
  {
    slug: "horoscopos",
    title: "Horóscopos",
    description: "Lecturas e interpretaciones zodiacales.",
    group: "autoconocimiento",
    intentions: ["orientacion"],
    status: "migration",
    order: 6,
    legacyPath: "amonra.cl/index_horoscopos.html",
  },
  {
    slug: "inciensos",
    title: "Inciensos",
    description: "Aromas y tradiciones rituales.",
    group: "practicas",
    intentions: ["bienestar", "explorar"],
    status: "published",
    featured: true,
    order: 7,
    legacyPath: "amonra.cl/index_inciensos.html",
  },
  {
    slug: "magia",
    title: "Magia",
    description: "Tradiciones y prácticas espirituales.",
    group: "practicas",
    intentions: ["profundizar"],
    status: "migration",
    order: 8,
    legacyPath: "amonra.cl/index_magia.html",
  },
  {
    slug: "numerologia",
    title: "Numerología",
    description: "Números y significados simbólicos.",
    group: "autoconocimiento",
    intentions: ["aprender", "orientacion"],
    status: "migration",
    order: 9,
    legacyPath: "index_numerologia.htm",
  },
  {
    slug: "oraculos",
    title: "Oráculos",
    description: "Tradiciones de consulta e interpretación.",
    group: "simbolismo",
    intentions: ["orientacion", "profundizar"],
    status: "migration",
    order: 10,
    legacyPath: "amonra.cl/index_oraculos.htm",
  },
  {
    slug: "runas",
    title: "Runas",
    description: "Símbolos de la tradición nórdica.",
    group: "simbolismo",
    intentions: ["orientacion", "aprender"],
    status: "published",
    featured: true,
    order: 11,
    legacyPath: "amonra.cl/index_runas.htm",
  },
  {
    slug: "suenos",
    title: "Sueños",
    description: "Imágenes y símbolos del mundo onírico.",
    group: "autoconocimiento",
    intentions: ["orientacion", "profundizar"],
    status: "published",
    featured: true,
    order: 12,
    legacyPath: "index_suenos.html",
  },
  {
    slug: "tarot",
    title: "Tarot",
    description: "Arcanos y su lenguaje simbólico.",
    group: "simbolismo",
    intentions: ["orientacion", "profundizar"],
    status: "published",
    featured: true,
    order: 13,
    legacyPath: "amonra.cl/index_tarot.htm",
  },
  {
    slug: "terapias",
    title: "Terapias",
    description: "Prácticas de bienestar espiritual.",
    group: "bienestar",
    intentions: ["bienestar"],
    status: "migration",
    order: 14,
    legacyPath: "amonra.cl/index_terapias.html",
  },
  {
    slug: "velas",
    title: "Velas",
    description: "Luz, colores y simbolismo ritual.",
    group: "practicas",
    intentions: ["explorar", "bienestar"],
    status: "published",
    featured: true,
    order: 15,
    legacyPath: "velas.html",
  },
] as const satisfies readonly AmonraSection[];

export function amonraSectionPath(section: AmonraSection): string {
  return `/temas/${section.slug}/`;
}

export function getPublishedSections(): AmonraSection[] {
  return amonraSections.filter(
    (s: AmonraSection) => s.status === "published",
  ) as unknown as AmonraSection[];
}

export function getFeaturedSections(): AmonraSection[] {
  return amonraSections
    .filter((s: AmonraSection) => s.featured)
    .sort(
      (a, b) =>
        (a.order ?? Number.MAX_SAFE_INTEGER) -
        (b.order ?? Number.MAX_SAFE_INTEGER),
    ) as unknown as AmonraSection[];
}

export function getSectionsByGroup(group: AmonraSectionGroup): AmonraSection[] {
  return amonraSections.filter(
    (s: AmonraSection) => s.group === group,
  ) as unknown as AmonraSection[];
}

export function getSectionsByIntent(intent: AmonraIntent): AmonraSection[] {
  return amonraSections.filter((s: AmonraSection) =>
    s.intentions.includes(intent),
  ) as unknown as AmonraSection[];
}
