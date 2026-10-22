# QA — Contenido pastel de todos los temas

Fecha: 2026-10-21, America/Santiago.

## Alcance

Los quince temas y los ocho artículos de Astrología tienen `data-topic-pastel`.
La prueba inicial de Runas, Magia, Inciensos, Historia y Fundación se extendió
al resto por solicitud del usuario. El estilo se limita a la sección de lectura.
No se cambian
la portada, los heros, las texturas, la navegación anterior/siguiente ni el
encabezado y pie globales. Peticiones y administración tampoco participan.

Los pasteles son nuevas derivaciones de los colores compartidos del RO, no
transcripciones de colores pastel presentes en el respaldo. Se mezclan con
blanco cálido: 8% para el fondo, 16% para tarjetas, 3% para superficies
elevadas y 22% en hover. Historia mezcla además su ocre con el dorado del RO.
El texto continúa oscuro; los títulos y enlaces conservan la tinta temática.

Algunas tarjetas usan utilidades antiguas `bg-surface-warm/*` que no se generaban
en el CSS actual. Se resuelven únicamente dentro de la lectura temática. No se modifica
el diseño, contenido ni estructura de esas tarjetas.

## Verificación

- Build: 29 páginas. Astro check: 72 archivos, cero errores, advertencias o hints.
- ESLint y Prettier de los archivos de código afectados.
- 111 pruebas: 40 de pasteles, 55 de identidades/navegación y 16 de Horóscopos.
- Contraste calculado de tinta principal, secundaria y temática: al menos
  4.5:1 sobre los cuatro tonos de cada paleta.
- Comparación SHA-256 del texto normalizado de las 29 páginas antes/después:
  ningún cambio de contenido.
- Comparación de estilos calculados en navegador de los 15 temas:
  heros, títulos de hero y
  encabezado/pie globales conservan sus valores anteriores.
- Los quince temas en 320, 390, 768 y 1440 px: sin desbordamiento horizontal;
  fondo de lectura liso y sin textura.
- Ocho artículos de Astrología en 320 y 1440 px: pastel habilitado,
  sin desbordamiento horizontal.
- Las 52 pestañas de los temas activadas con Enter a 390 px:
  un panel visible por selección, sin desbordamientos.

```sh
npm run build
node --test tests/topic-pastels.test.mjs tests/topic-navigation.test.mjs tests/horoscopes-catalogue.test.mjs
```
