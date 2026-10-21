# QA — piloto de paletas originales

Fecha: 2026-10-21, America/Santiago.

## Alcance

Piloto autorizado en Runas, Magia e Inciensos. No cambia textos,
disposición, imágenes, navegación, inicio, header global ni footer global.
No se modificó el backend. Las texturas autorizadas después del primer piloto
se limitan a los heroes de esos tres temas.

La activación se limita al atributo `data-topic-theme` del artículo
en `src/pages/temas/[section].astro`. Para desactivar un tema basta
con retirarlo de la lista `topicTheme`.

`src/styles/topic-identities.css` centraliza ahora los colores compartidos;
`src/styles/topic-palettes.css` restringe su tratamiento al hero del artículo
y a sus secciones de lectura. Los colores se toman
de estos documentos del respaldo `backup-original/public_html/amonra.cl/`:

| Tema | Documento | Valores utilizados |
| --- | --- | --- |
| Runas | `index_runas.htm` | `#11341F`, `#083D11`, `#E8AD40`, `#F7E1BB` |
| Magia | `index_magia.html` | `#183867`, `#12263D`, `#C0C0C0`, `#D7D5CA` |
| Inciensos | `index_inciensos.html` | `#090000`, `#7B1A09`, `#D1982E`, `#F8EC9C` |

Se reutilizan los valores originales, no su composición completa:
se aplican como degradados del hero, selección de pestañas y detalles.
El fondo general de lectura se conserva en `#DED3BE`; las superficies
secundarias mezclan un 7 % del tono oscuro del tema con ese pergamino.
La pestaña seleccionada conserva una señal no cromática: subrayado.

## Validación

- Astro check: 68 archivos, 0 errores, 0 advertencias y 0 sugerencias.
- ESLint del archivo Astro modificado: PASS.
- Prettier de los dos archivos de implementación: PASS.
- Build: 29 páginas generadas correctamente.
- `git diff --check`: PASS.
- Comparación por SHA-256 del texto de las 15 páginas temáticas antes y
  después del build, excluyendo scripts y estilos: todos idénticos.
- Comparación del HTML del header y footer globales de esas 15 páginas:
  todos idénticos.
- Exactamente tres páginas tienen `data-topic-theme`: Runas, Magia e Inciensos.
- Navegador real a 320, 390, 768, 1024 y 1440 px en los tres temas:
  sin desbordamiento horizontal, una sola pestaña seleccionada.
- Las 12 pestañas del piloto se activaron en móvil: panel correcto visible,
  sin desbordamiento de la página.
- Tecla Home desde la última pestaña: vuelve a la primera y mantiene
  el foco visible en los tres temas.
- Sin errores de consola observados durante las comprobaciones.
- El tamaño de viewport temporal se restauró al terminar.

## Contraste de las combinaciones modificadas

Cálculo de luminancia sRGB sobre los colores utilizados en el navegador.
Para el hero se indica el menor contraste entre sus dos extremos.
No sustituye una auditoría completa de accesibilidad del sitio.

| Tema | Texto del hero, mínimo | Texto de pestaña activa | Enlaces sobre pergamino |
| --- | ---: | ---: | ---: |
| Runas | 7.11:1 | 10.71:1 | 9.23:1 |
| Magia | 4.75:1 | 7.92:1 | 7.87:1 |
| Inciensos | 4.76:1 | 8.76:1 | 7.11:1 |

La tinta principal sobre el pergamino mantiene 11.95:1.

## Prueba de texturas en los heroes

Se copiaron sin modificar tres imágenes del respaldo `public_html/amonra.cl/`:

- Runas: `runas/celticlionback1.jpg` (150 × 150 px).
- Magia: `magia/magiafondo2.jpg` (183 × 176 px).
- Inciensos: `nuevoindex/fondo-egipto.jpg` (109 × 146 px).

Destino: `src/assets/amonra/textures/`. Vite genera sus URLs con hash.
Las imágenes se repiten a tamaño nativo, sin estirarlas ni fijarlas al viewport.
Se superpone un degradado translúcido, más oscuro en la zona del texto.
Los cuerpos de lectura, pestañas, tarjetas y navegación no reciben texturas.

Los mínimos de contraste del hero de la tabla contemplan cada píxel de
la textura original compuesto con los dos extremos del degradado de color.
La comprobación conserva un mínimo superior a 4.5:1 también en los puntos
más claros del fondo, sin depender de una sombra en el texto.

Verificación de esta prueba: build de 29 páginas correcto y SHA-256 de las
tres copias idéntico al respaldo. Las texturas suman 32 623 bytes sin comprimir.
En navegador real, los tres heroes se revisaron a 320, 390, 768 y 1440 px:
texturas presentes, mosaico nativo, fondo no fijo y sin desbordamiento horizontal.
El fondo de las secciones de lectura permanece sin imagen en los 12 casos.
No se observaron errores de consola y se restauró el viewport temporal.

Este informe documenta la validación local; no se realizó despliegue.

## Hero principal de inicio: variante fiel al menú dorado

Por solicitud posterior se probó también la paleta en `AmonraHero.astro`.
La referencia es `public_html/amonra.cl/menu.htm`, la portada de navegación
dorada; no la pantalla de entrada azul de `amonra.cl/index.htm`.

La textura existente `src/assets/amonra/papiro-jeroglificos.jpg` es idéntica
por SHA-256 a `amonra.cl/nuevoindex/bkgegipto.jpg`. Se conserva sin editar,
en mosaico a tamaño nativo, retirando los velos de color y halos decorativos
que antes la aclaraban. No se añadió una imagen nueva para esta prueba.

Colores del documento original: papel `#EADB9B`, marrones `#534A2F` y
`#3A1400`, oro `#E9B867` y detalle `#725124`. El título Amonra mantiene
el rojo previamente aprobado `#D60504`, sin cambios de tipografía.
Conserva un contorno de papel de 1 px mediante sombra de texto para distinguirse
de las zonas más oscuras de la textura. No se afirma que la composición actual
reproduzca toda la página antigua: se preservan el portal y la distribución actuales.

Validación de esta ampliación:

- Astro check: 68 archivos, 0 errores, 0 advertencias y 0 sugerencias.
- ESLint y Prettier del componente: PASS.
- Build: 29 páginas, correcto.
- Texto completo de inicio idéntico por SHA-256 al build previo,
  excluyendo estilos, scripts y marcado.
- Navegador: 320 × 844, 390 × 844, 768 × 900, 1024 × 900,
  1440 × 900 y 844 × 390, sin desbordamiento horizontal.
- Fondo del hero sin degradados; Amonra sigue en `rgb(214, 5, 4)`.
- Botón principal de 50 px de alto; enlaces Explorar y Propósito operativos.
- Foco por teclado visible de 3 px en `#3A1400`.
- Tinta `#3A1400`: contraste mínimo de 7.46:1 sobre todos los píxeles
  del papiro. Botón: 6.32:1 normal y 11.80:1 al pasar el cursor.
- Título grande rojo frente a su contorno de papel: 3.89:1.
- Sin errores de consola observados; viewport temporal restaurado.

Solo se modifica el hero de inicio, no el header global, el resto de la portada
ni los heroes de los temas ya probados. No se realizó despliegue.
