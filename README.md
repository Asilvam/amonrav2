# Amonra

Sitio web de `amonra.cl`, construido con Astro y generado como un sitio estático.

## Estado actual

El proyecto cuenta con 15 secciones configuradas:

- 11 secciones publicadas: Fundación, Historia, Amuletos, Astrología, Gemas,
  Inciensos, Oráculos, Runas, Sueños, Tarot y Velas (73,3% del portal).
- 4 secciones en migración: Horóscopos, Magia, Numerología y Terapias (26,7%
  restante).

La migración consolida los contenidos históricos en páginas temáticas con
índices, pestañas y fichas reutilizables. El objetivo es conservar los temas
importantes del sitio original en una experiencia más clara y adaptable a
escritorio y móvil, sin exigir una página nueva por cada archivo antiguo.

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

- `src/pages/index.astro`: página de inicio.
- `src/pages/temas/[section].astro`: páginas de las secciones de Amonra.
- `src/pages/temas/astrologia/[article].astro`: artículos individuales de
  astrología definidos en `src/config/astrology-articles.ts`.

Las secciones marcadas como publicadas en `src/config/amonra-sections.ts` son:

`fundacion`, `historia`, `amuletos`, `astrologia`, `gemas`, `inciensos`,
`oraculos`, `runas`, `suenos`, `tarot` y `velas`.

Las secciones en migración son:

`horoscopos`, `magia`, `numerologia` y `terapias`.

Los bloques con contenido personalizado incluyen Fundación, Historia, Amuletos,
Astrología, Gemas, Inciensos, Oráculos, Runas, Sueños, Tarot y Velas. Amuletos,
Gemas, Oráculos, Runas, Tarot y Astrología incorporan índices o pestañas de
navegación interna; Astrología además cuenta con páginas dinámicas para sus
artículos.

## Criterios editoriales de la migración

- Los contenidos históricos y esotéricos se presentan como tradición cultural,
  mitología o interpretación simbólica cuando no corresponden a hechos
  verificables.
- Gemas, amuletos, inciensos y velas no sustituyen atención médica ni otras
  formas de ayuda profesional. En particular, la sección Gemas no recomienda
  ingerir agua que haya estado en contacto con minerales.
- Runas distingue el Futhark histórico de incorporaciones oraculares modernas,
  como la Runa en Blanco o Wyrd.
- Oráculos aborda la consulta mántica desde la perspectiva de la sincronicidad
  y el diálogo con el inconsciente propuesta por Carl Gustav Jung, despojándola
  de fatalismo predictivo y priorizando el libre albedrío y la soberanía ética
  del consultante.
- La sección de Sueños evita repetir el resumen de cada símbolo dentro de su
  interpretación ampliada.

## Validación local

La comprobación habitual se realiza con:

```sh
npm run check
npm run build
```

La build actual genera 24 rutas estáticas y valida las páginas publicadas,
incluidas `/temas/oraculos/`, `/temas/runas/`, `/temas/tarot/`, `/temas/gemas/`,
`/temas/amuletos/`, `/temas/fundacion/` e `/temas/historia/`. El smoke test
revisa que estas rutas existan, que incluyan sus contenidos clave y que Gemas no
conserve pautas de ingestión de agua con cristales.

Si `npm run check` informa una advertencia de Prettier en
`docs/migracion_100_amonra.md`, corresponde a documentación pendiente de formato
y no a los componentes de las secciones publicadas.
