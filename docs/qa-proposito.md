# QA — Objetivo y propósito

Fecha: 2026-10-21, America/Santiago.

## Alcance y fuentes

Cambio limitado al bloque `#proposito` de inicio y `AmonraPurpose.astro`.
Se conserva el emblema, la distribución de columnas, el texto completo
y el control nativo de apertura/cierre. No cambian los sitios vinculados,
el hero, las tarjetas temáticas ni el backend.

Identidad general de Amonra, siguiendo el menú dorado original:
`backup-original/public_html/amonra.cl/menu.htm`.

- Textura: el mismo `papiro-jeroglificos.jpg` del hero de inicio,
  idéntico al original `nuevoindex/bkgegipto.jpg`, sin filtros ni escalado.
- Papel `#EADB9B`, marrones `#3A1400`, `#534A2F`, `#725124`
  y oro `#E9B867` presentes en el documento original.
- Presentación y control de lectura con papiro; texto desplegado sobre
  una superficie lisa de pergamino, sin imagen de fondo.
- Variables cromáticas limitadas al componente, sin cambios de tokens globales.

## Comprobaciones

- Astro check: 70 archivos, 0 errores, 0 advertencias y 0 sugerencias.
- ESLint y Prettier de los dos archivos modificados: PASS.
- Build: 29 páginas, correcto.
- Las 32 pruebas existentes de navegación temática y contraste siguen pasando.
- Texto de toda la portada idéntico por SHA-256 al build previo,
  excluyendo marcado, scripts y estilos.
- Navegador real a 320 × 844, 390 × 844, 768 × 900, 1024 × 900,
  1440 × 900 y 844 × 390. Estado cerrado y abierto comprobados en cada tamaño.
- Ningún desbordamiento horizontal ni recorte del control o panel de lectura.
- El panel desplegado mantiene `background-image: none` en los seis tamaños.
- Apertura y cierre con clic y con Enter; foco visible de 3 px en marrón oscuro.
- Control táctil de más de 44 px de alto.
- Contraste mínimo de presentación/control comprobado sobre todos los píxeles
  del papiro; texto oscuro sin depender de sombras o velos.
- Sin errores de consola observados y viewport temporal restaurado.

Validación local; no se realizó push ni despliegue.
