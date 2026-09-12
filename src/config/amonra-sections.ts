export interface AmonraSection {
  slug: string;
  title: string;
  legacyPath: string;
}

export const amonraSections = [
  {
    slug: "fundacion",
    title: "Fundación",
    legacyPath: "amonra.cl/index_fundacion.htm",
  },
  {
    slug: "historia",
    title: "Historia",
    legacyPath: "index_historia.htm",
  },
  {
    slug: "amuletos",
    title: "Amuletos",
    legacyPath: "amonra.cl/index_amuletos.html",
  },
  {
    slug: "astrologia",
    title: "Astrología",
    legacyPath: "amonra.cl/index_astrologia.html",
  },
  {
    slug: "gemas",
    title: "Gemas",
    legacyPath: "index_gemas.htm",
  },
  {
    slug: "horoscopos",
    title: "Horóscopos",
    legacyPath: "amonra.cl/index_horoscopos.html",
  },
  {
    slug: "inciensos",
    title: "Inciensos",
    legacyPath: "amonra.cl/index_inciensos.html",
  },
  {
    slug: "magia",
    title: "Magia",
    legacyPath: "amonra.cl/index_magia.html",
  },
  {
    slug: "numerologia",
    title: "Numerología",
    legacyPath: "index_numerologia.htm",
  },
  {
    slug: "oraculos",
    title: "Oráculos",
    legacyPath: "amonra.cl/index_oraculos.htm",
  },
  {
    slug: "runas",
    title: "Runas",
    legacyPath: "amonra.cl/index_runas.htm",
  },
  {
    slug: "suenos",
    title: "Sueños",
    legacyPath: "index_suenos.html",
  },
  {
    slug: "tarot",
    title: "Tarot",
    legacyPath: "amonra.cl/index_tarot.htm",
  },
  {
    slug: "terapias",
    title: "Terapias",
    legacyPath: "amonra.cl/index_terapias.html",
  },
  { slug: "velas", title: "Velas", legacyPath: "velas.html" },
] as const satisfies readonly AmonraSection[];

export function amonraSectionPath(section: AmonraSection): string {
  return `/temas/${section.slug}/`;
}
