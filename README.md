# Amonra

Sitio web de `amonra.cl`, construido con Astro y generado como un sitio estático.

## Estado actual

El proyecto cuenta con las 15 secciones del portal 100% completadas y publicadas:

- **15 secciones publicadas:** Fundación, Historia, Amuletos, Astrología, Gemas,
  Horóscopos, Inciensos, Magia, Numerología, Oráculos, Runas, Sueños, Tarot,
  Terapias y Velas.
- **Arquitectura de Home (Editorial Pura):** Página de inicio optimizada en 3
  bloques fluidos (Hero → Caminos de conocimiento → Propósito) con **0 KB de
  JavaScript**, carga instantánea y navegación por anclas con scroll suave.
- **Analítica web:** Integración nativa con Cloudflare Web Analytics, sin cookies
  invasivas ni degradación de rendimiento.

La migración consolidó los contenidos históricos en páginas temáticas con
índices accesibles, pestañas y fichas reutilizables. El objetivo es conservar
los temas importantes del sitio original en una experiencia serena, digna y
adaptable a móvil, tablet y escritorio.

## Requisitos

- Node.js `>=22.12.0`.
- npm.

La versión recomendada de Node.js está indicada en [.nvmrc](.nvmrc).

## Desarrollo local

Instala las dependencias usando el lockfile del proyecto:

```sh
npm ci
```

Inicia el servidor de desarrollo:

```sh
npm run dev
```

El sitio estará disponible en <http://localhost:4321/>.

## Scripts disponibles

```sh
npm run dev          # Servidor de desarrollo en el puerto 4321
npm run build        # Genera el sitio estático en dist/
npm run preview      # Previsualiza la compilación de dist/
npm run check        # Astro check, ESLint y Prettier
npm run lint         # Ejecuta ESLint
npm run lint:fix     # Corrige automáticamente problemas de ESLint
npm run format       # Formatea los archivos con Prettier
npm run format:check # Comprueba el formato sin modificar archivos
```

Antes de integrar cambios, ejecuta:

```sh
npm run qa:editorial
npm run qa:sections
npm run check
npm run build
```

## Producción

El proyecto usa `output: "static"` y tiene configurado el sitio canónico
`https://www.amonra.cl`. La compilación se genera en `dist/` e incluye el
sitemap producido por `@astrojs/sitemap`.

```sh
npm run build
npm run preview
```

## Estructura principal

- `src/pages/`: páginas y rutas dinámicas de Astro.
- `src/components/`: componentes reutilizables y bloques de contenido de Amonra.
- `src/config/`: secciones, artículos y datos de contenido.
- `src/assets/amonra/`: imágenes procesadas por Astro.
- `src/styles/`: tokens, tipografías, utilidades y estilos globales.
- `public/`: archivos servidos directamente, como `favicon` y `robots.txt`.

## Rutas y contenido

- `src/pages/index.astro`: página de inicio (Hero ceremonial con portal y
  papiro, Caminos de conocimiento con el directorio completo de los 15 temas,
  y Propósito fundacional).
- `src/pages/temas/[section].astro`: páginas de las secciones de Amonra.
- `src/pages/temas/astrologia/[article].astro`: artículos individuales de
  astrología definidos en `src/config/astrology-articles.ts`.

Las secciones marcadas como publicadas en `src/config/amonra-sections.ts` son las 15 secciones totales:

`fundacion`, `historia`, `amuletos`, `astrologia`, `gemas`, `horoscopos`,
`inciensos`, `magia`, `numerologia`, `oraculos`, `runas`, `suenos`, `tarot`,
`terapias` y `velas`.

No restan secciones en migración (100% completado).

Los bloques con contenido personalizado incluyen Fundación, Historia, Amuletos,
Astrología, Gemas, Horóscopos, Inciensos, Magia, Numerología, Oráculos, Runas,
Sueños, Tarot, Terapias y Velas. Amuletos, Gemas, Horóscopos, Magia, Numerología,
Oráculos, Runas, Tarot, Terapias y Astrología incorporan índices o pestañas de
navegación interna; Astrología además cuenta con páginas dinámicas para sus
artículos.

## Criterios editoriales de la migración

- Los contenidos históricos y esotéricos se presentan como tradición cultural,
  mitología o interpretación simbólica cuando no corresponden a hechos
  verificables.
- Gemas, amuletos, inciensos, velas y terapias complementarias no sustituyen
  atención médica, psiquiátrica ni otras formas de ayuda profesional. En particular,
  la sección Gemas no recomienda ingerir agua que haya estado en contacto con
  minerales.
- Terapias aborda la salud integral de los cuatro cuerpos (físico, emocional,
  mental y espiritual), la medicina preventiva tradicional y la aromaterapia sagrada
  como vías complementarias de bienestar, enfatizando que no sustituyen la medicina
  formal ni el diagnóstico clínico.
- Runas distingue el Futhark histórico de incorporaciones oraculares modernas,
  como la Runa en Blanco o Wyrd.
- Oráculos aborda la consulta mántica desde la perspectiva de la sincronicidad
  y el diálogo con el inconsciente propuesta por Carl Gustav Jung, despojándola
  de fatalismo predictivo y priorizando el libre albedrío y la soberanía ética
  del consultante.
- Numerología aborda el simbolismo de los números como arquetipos de
  autoconocimiento y ciclos temporales de la conciencia (Música de las Esferas
  de Pitágoras), distinguiendo el análisis ético y psicológico de cualquier
  determinismo supersticioso.
- Magia aborda la doctrina hermética tradicional, las leyes cósmicas del Kybalion
  y la Rueda del Año desde la transmutación interior de la conciencia y la
  reverencia ética a la naturaleza (enfoque dual austral/boreal), distinguiendo
  el arte de la Voluntad (Magiak) y la Ley del Tres del mero ilusionismo
  escénico profano.
- La sección de Sueños evita repetir el resumen de cada símbolo dentro de su
  interpretación ampliada.

## Validación local

La comprobación habitual se realiza con:

```sh
npm run check
npm run build
```

La build actual genera 24 rutas estáticas y valida las páginas publicadas,
incluidas `/temas/numerologia/`, `/temas/oraculos/`, `/temas/runas/`,
`/temas/tarot/`, `/temas/gemas/`, `/temas/amuletos/`, `/temas/fundacion/` e
`/temas/historia/` y `/temas/horoscopos/`. `qa:editorial` revisa cantidades,
campos obligatorios, textos completos comparados con el backup original,
imágenes árabes byte a byte y el catálogo ampliado de gemas. `qa:sections`
revisa el resto de los artefactos, sus catálogos, rutas, `legacyPath` y activos.

Si `npm run check` informa una advertencia de Prettier en
`docs/migracion_100_amonra.md`, corresponde a documentación pendiente de formato
y no a los componentes de las secciones publicadas.
