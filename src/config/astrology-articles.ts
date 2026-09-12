export const astrologyArticles = [
  {
    slug: "astrologia-occidental",
    title: "Astrología occidental",
    description:
      "El horóscopo, los signos y la elaboración de una carta astral personal.",
  },
  {
    slug: "antecedentes-historicos",
    title: "Antecedentes históricos",
    description:
      "Los primeros registros, observaciones y representaciones astrológicas.",
  },
  {
    slug: "vision-caldea",
    title: "La visión caldea",
    description:
      "La antigua división del zodiaco y la precesión de los equinoccios.",
  },
  {
    slug: "ecliptica",
    title: "La eclíptica",
    description:
      "El recorrido aparente del Sol y las coordenadas de la esfera celeste.",
  },
  {
    slug: "zodiaco-signos",
    title: "El zodiaco y los signos zodiacales",
    description:
      "La diferencia entre los signos astrológicos y las constelaciones.",
  },
  {
    slug: "astros",
    title: "Los astros",
    description:
      "Planetas, estaciones y elementos en la tradición astrológica.",
  },
  {
    slug: "que-es-carta-astral",
    title: "¿Qué es la carta astral?",
    description: "Los planetas y las doce casas que componen una carta astral.",
  },
  {
    slug: "tu-carta-astral",
    title: "Tu carta astral",
    description:
      "Una introducción a la lectura personal del cielo en el momento de nacer.",
  },
] as const;

export type AstrologyArticle = (typeof astrologyArticles)[number];
export type AstrologyArticleSlug = AstrologyArticle["slug"];

export function astrologyArticlePath(article: AstrologyArticle) {
  return `/temas/astrologia/${article.slug}/`;
}
