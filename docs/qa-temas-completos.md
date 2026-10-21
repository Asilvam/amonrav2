# QA — aplicación completa de identidades temáticas

Fecha: 2026-10-21, America/Santiago.

## Alcance

Se amplió el tratamiento cromático que antes estaba activo solo en Runas,
Magia e Inciensos a los 15 temas definidos en `amonra-sections.ts`.
Se aplica también la identidad de Astrología a sus ocho artículos internos.

- Heroes: textura original en mosaico, paleta y velos ya definidos en
  `topic-identities.css`, compartidos con los accesos del menú.
- Lectura: fondo liso, detalles, enlaces, pestañas y foco del tema.
- Sin cambios de texto, orden, distribución, imágenes de contenido ni enlaces.
- No se modifican el hero de inicio, Propósito, sitios vinculados, header o
  footer globales, ni el backend.
- No se añaden activos gráficos, dependencias ni textos editoriales.
- Se mantiene la distinción de variantes: Gemas ocre interior, Tarot azul
  interior y Sueños azul grisáceo, acordes con la navegación ya aprobada.

## Implementación

`src/pages/temas/[section].astro` asigna directamente la identidad del slug
de cada tema. `src/pages/temas/astrologia/[article].astro` utiliza
`data-topic-theme="astrologia"` e importa el mismo tratamiento compartido.
El rótulo de Astrología en esos heroes recibe el color de lectura del hero
para mantener contraste sobre la textura; la variante de impresión lo ajusta
a tinta oscura sobre fondo sin imagen.

Las identidades centrales no cambiaron: se utiliza el mismo conjunto de
paletas, texturas y opacidades ya validado en los botones.

## Comprobaciones

- Astro check: 70 archivos, 0 errores, 0 advertencias y 0 sugerencias.
- Build: 29 páginas, correcto.
- ESLint y Prettier de los archivos modificados: PASS.
- `git diff --check`: PASS.
- Las 29 páginas conservan exactamente el mismo texto normalizado por
  SHA-256 que el build anterior, excluyendo marcado, estilos y scripts.
- 55 pruebas automáticas: PASS.
  - Destinos del menú y anterior/siguiente.
  - Identidad de cada uno de los 15 temas y ocho artículos internos.
  - Correspondencia de las 15 identidades compartidas.
  - Texturas presentes y contraste del texto sobre cada píxel compuesto
    con los dos extremos del velo, al menos 4.5:1.
  - Contraste de enlaces sobre papel y superficies secundarias, pestañas
    activas y distintivos: al menos 4.5:1 para cada identidad.
- Navegador real: 15 temas a 320, 390, 768, 1024 y 1440 px (75 casos).
  Todos con textura en el hero, lectura sin textura y sin desbordamientos.
- Navegador real: ocho artículos de Astrología a 320 y 1440 px (16 casos),
  sin desbordamientos y con hero y rótulo coherentes con su identidad.
- Las 52 pestañas principales disponibles se activaron en móvil a 390 px:
  panel correcto visible, una sola pestaña principal seleccionada y sin
  desbordamiento horizontal.
- Sin errores de consola observados; viewport temporal restaurado.

Para repetir la validación automatizada, generar primero el build:

```sh
npm run build
node --test tests/topic-navigation.test.mjs
```

Validación local, sin commit, push ni despliegue.
