# QA de Gemas — recuperación del respaldo

Fecha: 2026-10-20 (America/Santiago).

## Fuentes y destinos

Se compararon las dos copias históricas de `../backup-original/public_html/`.
La copia `amonra.cl/` es la fuente de los artículos e imágenes, complementada
por `gemas_poderes.html` de la raíz. Las URLs públicas no respondieron a la
herramienta de consulta, por lo que la comparación se hizo con el respaldo local.

| Documento original       | Destino en la migración                            |
| ------------------------ | -------------------------------------------------- |
| `index_gemas.htm`        | `/temas/gemas/#catalogo`, introducción desplegable |
| `gemas_magnetismo1.html` | `/temas/gemas/#magnetismo-1`                       |
| `gemas_magnetismo2.html` | `/temas/gemas/#magnetismo-2`                       |
| `gemas_magnetismo3.html` | `/temas/gemas/#magnetismo-3`                       |
| `gemas_magnetismo4.html` | `/temas/gemas/#magnetismo-4`                       |
| `gemas_magnetismo5.html` | `/temas/gemas/#magnetismo-5`                       |
| `gemas_signos.html`      | `/temas/gemas/#zodiaco`, introducción completa     |
| `gemas_signos2.html`     | Misma pestaña, Aries a Cáncer                      |
| `gemas_signos3.html`     | Misma pestaña, Leo a Escorpio                      |
| `gemas_signos4.html`     | Misma pestaña, Sagitario a Piscis                  |
| `gemas_meditacion.html`  | `/temas/gemas/#meditacion`                         |
| `gemas_sanacion.html`    | `/temas/gemas/#sanacion`, texto del respaldo       |
| `gemas_poderes.html`     | `/temas/gemas/#poderes`                            |

Estos son destinos de contenido; no se agregaron redirecciones HTTP de las URLs antiguas.

## Recuperación

- 49 entradas del catálogo en cinco grupos, con lectura completa desplegable.
- Se conservan por separado las variantes Carniola/Carnelia, Jaspe/Jasper y
  los dos textos de Turquesa, tal como aparecen en los originales.
- Se reincorporan Alejandría, Calcedonia, Piedra de Lobo, Sardonyx,
  Cuarzo Nieve y Cuarzo Turmalina.
- Introducción zodiacal completa y los doce textos de signos.
- Asociaciones secundarias del zodíaco limitadas a las mencionadas en esos textos.
- Cinco párrafos originales de Meditación y dieciocho de Los poderes de las piedras.
- Sanación recupera los seis párrafos del respaldo en lugar de la reescritura editorial.
- 60 imágenes originales: 44 del catálogo, 12 zodiacales y 4 de los artículos.
- Carniola, Piedra de Lobo y Cuarzo Nieve no tienen imagen asociada en sus
  fichas originales; no se les asignó una ilustración de otra piedra.
- Se eliminó del catálogo la frase duplicada «A lo largo de los siglos...».
- Los textos de scripts, banners, navegación y avisos técnicos antiguos
  no se incorporaron al contenido.

Los datos recuperados y sus documentos fuente se registran en
`src/config/gems-archive.json`. Las imágenes están en `public/images/gemas/`.

## Verificación

Resultado: PASS.

- Astro check: 0 errores, advertencias o sugerencias.
- Build estático: 29 páginas generadas.
- ESLint en los componentes de Gemas modificados o añadidos.
- Comparación de 125 fragmentos de texto con sus documentos originales,
  normalizando entidades HTML, espacios, guiones de separación y erratas puntuales.
- Verificación de presencia de los textos en el HTML generado.
- SHA-256 de las 60 imágenes idéntico al respaldo.
- Las 60 imágenes responden HTTP 200 en la vista previa.
- Navegador real en 320, 390, 768 y 1440 px: cinco pestañas operativas,
  sin desbordamiento horizontal; fichas desplegables y enlaces profundos
  al catálogo y a signos verificados.
- Sin errores de consola en el navegador.
- Las pruebas editoriales y generales de secciones existentes también pasan;
  sus conteos de los antiguos resúmenes de Gemas no sustituyen esta auditoría
  de las 49 entradas recuperadas.

Este informe documenta la validación local; no se realizó despliegue.

## Limpieza editorial y composición

Se retiraron los cinco avisos repetidos de Gemas, su componente, las
aclaraciones añadidas a Sanación y los pies de imagen editoriales. También
se retiraron los avisos y coletillas identificados en Amuletos, Velas, Tarot,
Historia, Fundación y Astrología. El pasaje sobre el carácter predictivo del
Tarot vuelve al texto de su respaldo.

Los estilos de Gemas distribuyen los bloques largos en dos columnas en
escritorio y una en móvil, con una cuadrícula regular para los signos y
alturas de tarjetas alineadas por fila. Se comprobaron las cinco pestañas a
320, 390, 768, 1270 y 1440 px sin desbordamiento horizontal. Las 49 fichas
también se abrieron y revisaron en móvil.
