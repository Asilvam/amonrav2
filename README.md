# Amonra

Sitio web de `amonra.cl`, construido con Astro y generado como un sitio estático.

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
`suenos` y `velas`.

Las secciones en migración son:

`horoscopos`, `magia`, `numerologia`, `oraculos`, `runas`, `tarot` y
`terapias`.

Los bloques con contenido personalizado incluyen Fundación, Historia, Amuletos,
Astrología, Gemas, Inciensos, Sueños y Velas. Amuletos y Astrología incorporan
índices de navegación internos; Astrología además cuenta con páginas dinámicas
para sus artículos.
