# QA — Catálogo occidental de Horóscopos

Fecha: 2026-10-21. Ruta: `/temas/horoscopos/`.

## Respaldo original (RO)

Se consultó `backup-original/public_html/amonra.cl/horoscopos_signos.html`,
línea 409, en el directorio padre del repositorio. El encabezado original es
«Los Doce Signos del Zodiaco». Se restituyó en lugar de «Catálogo Exhaustivo
de los 12 Signos Zodiacales», expresión que no se encontró al buscarla en
los archivos HTML/HTM de `amonra.cl` del RO.

También se consultó `horoscopos_aries.htm` para identificar la estructura
histórica de la ficha. Esta revisión no certifica que todos los textos
migrados de las cuatro tradiciones sean transcripciones exactas del RO.

## Cambio

- Índice de los doce signos en su orden zodiacal, con sus fechas existentes.
- Imagen, nombre, fechas y representación al comienzo de cada ficha.
- Cuatro datos en lista de definiciones: elemento, modalidad, polaridad y regente.
- Cuerpo de lectura centrado, con ancho limitado, párrafos de 16 px e interlineado 1.8.
- Se elimina la columna lateral que centraba verticalmente la identidad y dejaba
  un gran espacio vacío al comienzo.
- Se conservan las imágenes y los textos que ya mostraban las fichas. No se
  modificaron sus descripciones ni las introducciones de las otras tradiciones.
- A petición del usuario se retiraron los horarios añadidos de las doce fichas
  chinas y el campo `hours` de sus datos.
- Posteriormente, por solicitud expresa del usuario, se incorporaron en ese
  encabezado los diez años de cada animal que figuran en
  `horoscopos_chinacuadroanual.htm` del RO. Se ordenan cronológicamente y no
  se calculan ni añaden años posteriores a los del respaldo. Los nombres
  Conejo, Cordero y Cerdo del cuadro se vinculan a las fichas existentes
  Gato, Cabra y Jabalí, sin renombrarlas ni alterar sus descripciones.

## Validación

- Astro check: 71 archivos, cero errores, advertencias o hints.
- Build: 29 páginas estáticas.
- ESLint, Prettier y revisión de espacios del diff.
- 16 pruebas del catálogo: título, orden, destinos, encabezados accesibles,
  cuatro datos por ficha y huellas SHA-256 de todos los nodos de texto existentes.
  Las huellas comparan antes/después ignorando el orden de los nodos; no son
  una comparación completa contra el RO.
  Se comprueba además que el panel chino no muestre rangos horarios.
  También se verifican los 120 años mostrados en los doce encabezados contra
  los valores transcritos del cuadro anual del RO.
- 55 pruebas de navegación e identidades temáticas.
- Navegador: las doce fichas en 320, 390, 768, 1024 y 1440 px, sin
  desbordamiento horizontal ni identidades fuera de su encabezado.
- Índice: doce activaciones con Enter, con hash y foco correctos.
- Enlace directo a Piscis: pestaña occidental visible y ficha situada bajo
  el margen superior de navegación.
- Las cuatro pestañas se activaron por teclado y mostraron un único panel correcto.

Para repetir las pruebas sobre el HTML generado:

```sh
npm run build
node --test tests/horoscopes-catalogue.test.mjs tests/topic-navigation.test.mjs
```
