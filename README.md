# Amonra

Proyecto Astro independiente para `amonra.cl`.

## Desarrollo local

```sh
npm install
npm run dev
```

Servidor local: `http://localhost:4323/`

## Scripts utiles

```sh
npm run build
npm run check
npm run lint
npm run format
```

## Estado actual de contenido

- Secciones con contenido personalizado: `fundacion`, `historia`, `amuletos`,
  `astrologia`.
- Ruta dinamica principal de temas: `src/pages/temas/[section].astro`.
- Ruta dinamica de articulos de astrologia:
  `src/pages/temas/astrologia/[article].astro`.
- `Amuletos` usa navegacion por pestanas dentro del bloque "Indice de amuletos"
  en `src/components/amonra/AmuletsContent.astro`.
- `Astrologia` usa indice de temas en
  `src/components/amonra/AstrologyContent.astro`.
- El contenido de cada articulo de astrologia se renderiza en
  `src/components/amonra/AstrologyArticleContent.astro`.
- Imagenes hero legacy incorporadas para `historia` y `amuletos` en
  `src/assets/amonra/`.
- Imagenes de astrologia incorporadas para portada y articulos en
  `src/assets/amonra/`.
