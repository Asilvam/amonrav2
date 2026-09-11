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

- Secciones con contenido personalizado: `fundacion`, `historia`, `amuletos`.
- Ruta dinamica principal de temas: `src/pages/temas/[section].astro`.
- `Amuletos` usa navegacion por pestanas dentro del bloque "Indice de amuletos"
  en `src/components/amonra/AmuletsContent.astro`.
- Imagenes hero legacy incorporadas para `historia` y `amuletos` en
  `src/assets/amonra/`.
