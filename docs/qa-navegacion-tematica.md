# QA — identidad de los enlaces temáticos

Fecha: 2026-10-21, America/Santiago.

## Alcance

- Los 15 accesos de Caminos de conocimiento en inicio.
- Los botones Anterior/Siguiente al pie de los 15 temas.
- Cada botón utiliza la identidad del destino, no la del artículo actual.
- Los dos accesos de borde a Inicio/Índice conservan el estilo general.
- No cambian títulos, descripciones, etiquetas, enlaces, orden ni grupos.
- No se activan nuevos heroes temáticos; siguen limitados a Runas, Magia e Inciensos.
- No se modifica el hero principal de inicio, el header global, el footer global ni el backend.

## Implementación

`TopicLink.astro` comparte las variantes `menu`, `previous` y `next`.
Son enlaces nativos, con toda la superficie clicable y altura mínima de 120 px.
La interacción añade subrayado y un foco visible de 3 px, además del color.
La variante de preparación conserva el destino `/en-construccion/`.

`topic-identities.css` concentra paleta, textura y velos de contraste de cada tema.
El atributo `data-topic-link` selecciona la identidad del destino.
Las variables de los tres heroes previamente aprobados se trasladaron desde
`topic-palettes.css` sin cambiar ninguno de sus valores; su tratamiento de lectura
y hero permanece en ese archivo.

Las texturas se repiten a tamaño nativo, sin escalado ni animación. Los velos
permiten leer el texto sobre los puntos más claros del mosaico. Las variantes
de impresión y colores forzados eliminan las imágenes de fondo.

## Respaldo y variantes

Fuentes bajo `backup-original/public_html/amonra.cl/`:

| Tema               | Textura original                              |
| ------------------ | --------------------------------------------- |
| Fundación          | `nuevoindex/egyptlovertile1.jpg`              |
| Historia           | `historia/marron.jpg`                         |
| Amuletos           | `amuletos/bkgesoterico.jpg`                   |
| Astrología y Gemas | `astrologia/marron.jpg`                       |
| Horóscopos         | `astrologia/fondogris.jpg`                    |
| Inciensos          | `nuevoindex/fondo-egipto.jpg`, ya incorporada |
| Magia              | `magia/magiafondo2.jpg`, ya incorporada       |
| Numerología        | `numerologia/brown_tile.jpg`                  |
| Oráculos           | `oraculos/marron.jpg`                         |
| Runas              | `runas/celticlionback1.jpg`, ya incorporada   |
| Sueños             | `suenos/suenosfondo.jpg`                      |
| Tarot              | `tarot/tarotfondo.jpg`                        |
| Terapias           | `terapias/fondo-terapia.jpg`                  |
| Velas              | `velas/brillianceinnertile.jpg`               |

Se añadieron 11 archivos que suman 70 643 bytes. Sus SHA-256 son idénticos
al respaldo; Astrología y Gemas comparten un archivo, no una copia duplicada.
Gemas usa la identidad ocre de sus interiores, Tarot la azul de sus artículos
y Sueños la variante azul grisácea de `amonra.cl/index_suenos.html`.
Terapias usa el verde oscuro y texto verde claro presentes en su original
para conservar contraste; no se pone el texto dorado sobre verde brillante.

## Resultados

- Astro check: 70 archivos, 0 errores, 0 advertencias y 0 sugerencias.
- ESLint de componentes, página y prueba: PASS.
- Prettier de los archivos de implementación: PASS.
- Build: 29 páginas, correcto.
- `git diff --check`: PASS.
- Texto de inicio y los 15 temas idéntico por SHA-256 al build anterior,
  excluyendo etiquetas, scripts y estilos.
- 32 pruebas automáticas de regresión: PASS.
  - 15 destinos de inicio únicos y correctos.
  - Anterior/Siguiente correctos en todos los temas y regreso a Inicio en los extremos.
  - Solo tres heroes siguen activados.
  - Una identidad por tema y sus imágenes presentes.
  - Contraste mínimo de 4.5:1 para cada píxel de las 15 texturas,
    compuesto con ambos extremos del velo.
- Navegador real: inicio a 320, 390, 768, 1024 y 1440 px,
  con 15 tarjetas, sin recortes ni desbordamiento horizontal.
- Navegador real: pie de los 15 temas a 320 y 1440 px (30 casos),
  sin recortes ni desbordamiento y con las texturas de destino presentes.
- Foco por teclado en Siguiente/Sueños: contorno visible y título subrayado.
- Recorrido real desde el menú a Runas, de Runas a Sueños y regreso a Runas: PASS.
- Pie de Runas desde `#tiradas` comprobado visualmente a 390 px.
- Sin errores de consola observados; viewport temporal restaurado.

Para repetir las pruebas, generar primero el build y después ejecutar:

```sh
npm run build
node --test tests/topic-navigation.test.mjs
```

Validación local; no se realizó push ni despliegue.
