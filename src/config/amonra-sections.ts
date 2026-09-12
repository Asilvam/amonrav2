export interface AmonraSection {
  slug: string;
  title: string;
  description: string;
  legacyPath: string;
}

export const amonraSections = [
  {
    slug: "fundacion",
    title: "Fundación",
    description: "Origen y principios de Amonra.",
    legacyPath: "amonra.cl/index_fundacion.htm",
  },
  {
    slug: "historia",
    title: "Historia",
    description: "Raíces de la tradición egipcia.",
    legacyPath: "index_historia.htm",
  },
  {
    slug: "amuletos",
    title: "Amuletos",
    description: "Símbolos, talismanes y sus significados.",
    legacyPath: "amonra.cl/index_amuletos.html",
  },
  {
    slug: "astrologia",
    title: "Astrología",
    description: "Astros, signos y cartas astrales.",
    legacyPath: "amonra.cl/index_astrologia.html",
  },
  {
    slug: "gemas",
    title: "Gemas",
    description: "Piedras y su simbolismo tradicional.",
    legacyPath: "index_gemas.htm",
  },
  {
    slug: "horoscopos",
    title: "Horóscopos",
    description: "Lecturas e interpretaciones zodiacales.",
    legacyPath: "amonra.cl/index_horoscopos.html",
  },
  {
    slug: "inciensos",
    title: "Inciensos",
    description: "Aromas y tradiciones rituales.",
    legacyPath: "amonra.cl/index_inciensos.html",
  },
  {
    slug: "magia",
    title: "Magia",
    description: "Tradiciones y prácticas espirituales.",
    legacyPath: "amonra.cl/index_magia.html",
  },
  {
    slug: "numerologia",
    title: "Numerología",
    description: "Números y significados simbólicos.",
    legacyPath: "index_numerologia.htm",
  },
  {
    slug: "oraculos",
    title: "Oráculos",
    description: "Tradiciones de consulta e interpretación.",
    legacyPath: "amonra.cl/index_oraculos.htm",
  },
  {
    slug: "runas",
    title: "Runas",
    description: "Símbolos de la tradición nórdica.",
    legacyPath: "amonra.cl/index_runas.htm",
  },
  {
    slug: "suenos",
    title: "Sueños",
    description: "Imágenes y símbolos del mundo onírico.",
    legacyPath: "index_suenos.html",
  },
  {
    slug: "tarot",
    title: "Tarot",
    description: "Arcanos y su lenguaje simbólico.",
    legacyPath: "amonra.cl/index_tarot.htm",
  },
  {
    slug: "terapias",
    title: "Terapias",
    description: "Prácticas de bienestar espiritual.",
    legacyPath: "amonra.cl/index_terapias.html",
  },
  {
    slug: "velas",
    title: "Velas",
    description: "Luz, colores y simbolismo ritual.",
    legacyPath: "velas.html",
  },
] as const satisfies readonly AmonraSection[];

export function amonraSectionPath(section: AmonraSection): string {
  return `/temas/${section.slug}/`;
}
