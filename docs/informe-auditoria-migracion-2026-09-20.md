# Informe de auditoría de migración de contenidos

**Proyecto:** Amonra (`amonrav2`)  
**Fecha de revisión:** 20 de septiembre de 2026  
**Origen comparado:** `backup-original/public_html/amonra.cl/`  
**Destino revisado:** `src/` y `dist/` de la rama local `develop`

La revisión incluyó el inventario de páginas originales, el mapeo de cada grupo
de archivos hacia las rutas nuevas y una comparación automática del texto visible
generado. La comparación automática sirve como señal de cobertura; no reemplaza
una revisión editorial de cada párrafo porque el nuevo sitio consolida, corrige y
reorganiza parte del contenido.

## Conclusión ejecutiva

El objetivo no es conservar una página nueva por cada archivo antiguo. El
criterio correcto es que los contenidos importantes estén representados en el
nuevo sitio con textos completos o suficientemente considerados, una jerarquía
visual clara, buena experiencia de usuario y navegación interactiva.

Bajo ese criterio, las ocho secciones publicadas evaluadas presentan una
cobertura temática amplia y una reorganización coherente. El portal completo
todavía no puede declararse cerrado: seis secciones no relacionadas con Tarot
permanecen pendientes y Tarot queda fuera de este informe por solicitud expresa.

El criterio aplicado es de **consolidación editorial**: varias páginas antiguas
se reúnen en una página moderna con pestañas, catálogos y bloques de contenido.
Esto evita duplicar páginas antiguas y permite presentar el material de forma
más clara y usable.

## Estado general

- 15 secciones están definidas en `src/config/amonra-sections.ts`.
- 9 secciones están publicadas y tienen contenido propio; 8 de ellas se
  incluyen en esta auditoría.
- 6 secciones no relacionadas con Tarot siguen en estado `migration` y solo
  tienen la estructura base de navegación.
- Tarot queda fuera de este dictamen por solicitud expresa, aunque su trabajo
  local ya está conectado a la ruta y pasa la validación técnica.
- La compilación actual genera 24 páginas HTML estáticas: inicio, 15 rutas de
  sección y 8 artículos de astrología.

## Matriz de páginas migradas

| Sección                | Documentos principales identificados en el respaldo                                                                                             | Situación actual                                                                      | Cobertura temática                                                     |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Fundación              | `index_fundacion.htm`                                                                                                                           | Consolidada en `/temas/fundacion/`                                                    | Cubre el contenido principal de la sección                             |
| Historia               | `index_historia.htm`                                                                                                                            | Consolidada en `/temas/historia/`                                                     | Cubre el contenido principal de la sección                             |
| Amuletos               | `index_amuletos.html`, `amuletos.html`, `amuletos2.html`, `amuletos3.html`, `amuletos4.html`, `amuletos-talismanes.html`, `amuletos_signos.htm` | Reunidos en `/temas/amuletos/` mediante pestañas y catálogos                          | Amplia: símbolos, usos, materiales y correspondencias                  |
| Astrología             | Página índice y artículos históricos, además del enlace externo `tu_carta_astral.html`                                                          | Índice en `/temas/astrologia/` y artículos internos en `/temas/astrologia/[article]/` | Amplia: historia, astrología occidental, signos, astros y carta astral |
| Gemas                  | `index_gemas.htm` y páginas `gemas_*`                                                                                                           | Reunidas en `/temas/gemas/` con pestañas, catálogo y correspondencias zodiacales      | Amplia: sanación, meditación, catálogo y zodiaco                       |
| Inciensos y sahumerios | `index_incienso.html`, `index_inciensos.html`, `inciensos_historia.htm`, `inciensos_elementos.html`, `inciensos_zodiaco.html`                   | Reunidos en `/temas/inciensos/` con cuatro pestañas                                   | Amplia: historia, elementos, zodiaco, usos y preparación               |
| Sueños                 | `index_suenos.html`, `suenos_tipos.html`, `suenos_significado.html`                                                                             | Reunidos en `/temas/suenos/` con doctrina, tipos, diccionario y práctica              | Amplia: teoría, tipos, significados y práctica consciente              |
| Velas                  | `index_velas.html`, `velas_historia.html`, `velas_color.html`, `velas_luzmagica.html`, `velas_artenegativo.html`, `velas_astrologia.html`       | Reunidos en `/temas/velas/` mediante pestañas y datos estructurados                   | Amplia: historia, colores, astrología y prácticas                      |

## Secciones todavía no migradas

Las siguientes secciones no relacionadas con Tarot tienen ruta nueva, pero no
tienen todavía su contenido histórico integrado:

- Runas
- Oráculos
- Numerología
- Magia
- Horóscopos
- Terapias y Aromaterapia

En estas rutas se muestra actualmente la estructura general de la sección, pero
no el conjunto de textos y subpáginas del respaldo original.

Tarot se excluye de esta lista y del dictamen porque su migración se encuentra
en desarrollo local, sin conexión completa con la ruta pública.

## Diferencias encontradas frente al respaldo

### Textos

Los textos actuales no son una transcripción literal archivo por archivo. El
material fue reorganizado para que los conceptos y contenidos relevantes estén
presentes en una experiencia más clara. La validación correcta debe centrarse en
si cada tema importante está cubierto y no en si conserva la misma paginación del
respaldo.

La comparación de texto visible confirma que existen diferencias relevantes entre
los documentos antiguos y las rutas nuevas, especialmente en Amuletos, Gemas,
Astrología, Inciensos y Velas. En Sueños hay páginas con una coincidencia muy
alta, pero eso no significa que el conjunto completo de documentos de la sección
esté reproducido con sus mismas URLs y estructura. Estas diferencias son
compatibles con una migración editorial, pero deben revisarse para confirmar que
no se haya perdido ningún tema esencial.

### Experiencia visual y de usuario

El nuevo sitio mejora la presentación respecto al respaldo antiguo mediante:

- bloques de lectura adaptados a escritorio y móvil;
- pestañas interactivas con navegación por teclado y enlaces directos;
- catálogos y correspondencias generados desde datos estructurados;
- filtros dinámicos en “¿Qué buscas hoy?”;
- sección “Destacados” actualizada desde la configuración de contenidos;
- imágenes optimizadas por Astro y una navegación común entre secciones.

El contenido se genera como sitio estático para rendimiento y SEO, mientras que
la interacción visual de pestañas, filtros y navegación se ejecuta de forma
dinámica en el navegador.

### Imágenes

El nuevo proyecto usa imágenes hero seleccionadas y optimizadas por Astro. No
se trasladó la totalidad de las galerías, banners y decoraciones históricas.
Esto es especialmente visible en Inciensos, donde el respaldo contiene
imágenes como `incienso.jpg`, `incienso_humo.jpg`, `siete05.jpg`, `pal.jpg` y
`esencias.jpg` que no tienen una copia equivalente en `src/assets/amonra/`.

### URLs antiguas

El campo `legacyPath` conserva una referencia documental al origen, pero no hay
redirecciones automáticas configuradas para todas las URLs antiguas. Los
enlaces históricos y el posicionamiento SEO requieren una etapa específica de
redirecciones.

## Validación técnica realizada

- En la validación del árbol de trabajo actual, `npm run check` terminó sin
  errores, advertencias ni problemas de formato.
- `npm run build` terminó correctamente y generó 24 páginas estáticas: inicio,
  15 rutas de sección y 8 artículos de astrología.
- El último commit confirmado de `develop` (`bb8a61a`) también dejó correctas
  las ocho secciones incluidas en esta auditoría.

Durante la revisión apareció trabajo local para Tarot:

- `src/components/amonra/TarotContent.astro`
- `src/config/tarot-data.ts`
- `src/assets/amonra/tarot-hero.jpg`

Ese trabajo ya está conectado al render de la ruta y la validación técnica
actual es correcta. Tarot no se contabiliza en la cobertura editorial de este
informe porque la solicitud fue excluirlo del análisis.

## Dictamen

El estado actual puede describirse profesionalmente como:

> **Etapa 1 migrada y publicada, con cobertura temática amplia, textos
> reorganizados y una experiencia visual moderna.**

Para declarar completado el portal completo todavía se requiere:

1. Integrar las seis secciones pendientes no relacionadas con Tarot y cerrar la
   migración de Tarot.
2. Revisar editorialmente que cada tema esencial del respaldo esté representado
   en las ocho secciones ya publicadas.
3. Decidir qué imágenes históricas se conservan y cuáles se reemplazan por
   recursos nuevos.
4. Configurar redirecciones desde las URLs antiguas importantes.
5. Ejecutar una revisión visual y de navegación de cada sección.
