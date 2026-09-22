# Hoja de Ruta y Catálogo Exhaustivo para la Migración al 100% de Amonra

**Proyecto:** `amonrav2` (Astro 7.3.2, Tailwind CSS 4, React 19, TypeScript)  
**Fecha de corte:** 2026-09-22  
**Estado Actual:** 12 de 15 secciones migradas y publicadas (**80,0% del portal**) — **¡Etapa 1 y Etapa 2 completadas al 100%!**  
**Objetivo:** Migración del 100% del legado histórico de `backup-original/public_html/amonra.cl/` (216 archivos HTML originales)

---

## 1. Estado Global del Proyecto

| Categoría                            | Cantidad | Porcentaje | Detalle                                                                                                                                 |
| ------------------------------------ | :------: | :--------: | --------------------------------------------------------------------------------------------------------------------------------------- |
| **Secciones Totales del Portal**     |    15    |    100%    | Configuración canónica en `src/config/amonra-sections.ts`                                                                               |
| **Secciones Publicadas (Completas)** |    12    |   80,0%    | `fundacion`, `historia`, `amuletos`, `astrologia`, `velas`, `inciensos`, `gemas`, `suenos`, `tarot`, `runas`, `oraculos`, `numerologia` |
| **Secciones Pendientes (Restantes)** |    3     |   20,0%    | `magia`, `horoscopos`, `terapias` (Etapa 3 final)                                                                                       |
| **Archivos HTML en Backup Original** |   216    |    100%    | Todos los documentos históricos preservados                                                                                             |
| **Archivos HTML ya integrados**      |   101    |   46,8%    | Pertenecientes a las 12 secciones publicadas                                                                                            |
| **Archivos HTML por integrar**       |   115    |   53,2%    | Desglosados exhaustivamente en este documento (Etapa 3 restante)                                                                        |

---

## 2. Inventario Detallado de lo que Falta para el 100%

La migración restante se divide formalmente en dos fases: **Etapa 2 (Simbolismo y Adivinación)** y **Etapa 3 (Magia, Horóscopos y Terapias)**.

```
MIGRACIÓN RESTANTE (168 archivos HTML / 7 secciones)
├── ETAPA 2: Simbolismo y Adivinación Tradicional (4 temas / 53 archivos HTML)
│   ├── Tema 5: Tarot (9 archivos HTML)
│   ├── Tema 6: Runas (32 archivos HTML: 7 doctrinarios + 25 runas individuales)
│   ├── Tema 7: Oráculos (5 archivos HTML)
│   └── Tema 8: Numerología (7 archivos HTML)
└── ETAPA 3: Magia, Zodíacos Comparados y Terapias Holísticas (3 temas / 115 archivos HTML)
    ├── Tema 9: Magia y Ciclos Estacionales (21 archivos HTML: 11 doctrina + 10 solsticios/equinoccios)
    ├── Tema 10: Horóscopos y Zodíacos Comparados (53 archivos HTML: occidental, árabe, druida, chino)
    └── Tema 11: Terapias Holísticas y Aromaterapia (41 archivos HTML: 17 aromaterapia + 24 terapias)
```

---

## ETAPA 2: Simbolismo y Adivinación Tradicional (4 Temas)

### Tema 5: TAROT (`/temas/tarot/`)

- **Estado:** **100% COMPLETADO Y PUBLICADO (`published`)**
- **Archivos HTML integrados (9 archivos, 418 KB):**
  1. `index_tarot.htm` (9 KB) — Apertura conceptual, el Tarot como libro místico de la vida.
  2. `index_tarot.html` (51 KB) — Filosofía del Tarot, sincronía y el espejo arquetípico del alma.
  3. `tarot_historia.html` (54 KB) — Orígenes históricos (Egipto mítico, Hermes Trismegisto, Tabla Esmeralda, corte renacentista, templarios 1307, Court de Gébelin, Etteilla).
  4. `tarot_cartas.html` (107 KB) — Catálogo monográfico completo de los **22 Arcanos Mayores** (El Loco 0 al Mundo XXI), filosofía arquetípica y los 7 pronósticos concretos en vida práctica, trabajo, dinero, amor, amistad, familia y salud; doctrina de los 56 Arcanos Menores y mente arquetípica de Carl Jung.
  5. `tarot_egipcio.html` (21 KB) — El Tarot Egipcio y su correspondencia hermético-astrológica, Libro de Thoth, 78 cartas y baraja de Margarita Arnal Moscardo (1988).
  6. `tarot_gitano.htm` (29 KB) — La tradición gitana del Tarot (siglo XVI), barajas tradicionales española e inglesa, y correspondencia esotérica de los 4 palos.
  7. `tarot_lectura.html` (24 KB) — Perspectiva predictiva vs. perspectiva psicológica/terapéutica (Karen Hamaker Zondag, Carl Jung, el caso de La Torre y maestras de la exploración interior).
  8. `tarot_tiposdelectura.html` (67 KB) — Las 6 tiradas clásicas de Amonra: Cruz Simple (4), Arcanos Simples en doble hilera (6), Cruz Céltica (10 con significador), Hexagrama (6 con polaridades cósmicas), Tirada Romaní (3) y Tirada de Tres con Síntesis Numerológica Teosófica (4).
  9. `tarot_preguntar.html` (56 KB) — Guía ética de consulta según Joan Bunning («Curso Práctico de Tarot»): 7 principios para formular preguntas constructivas y responsables.
- **Activos entregados:** `src/assets/amonra/tarot-hero.jpg` (optimizado a WebP `35 kB`).
- **Entregables técnicos implementados:**
  - `src/config/tarot-data.ts`: Tipado estricto para los 22 Arcanos Mayores, 6 tiradas clásicas, tradiciones egipcia y gitana, 4 palos menores y 7 principios éticos de consulta.
  - `src/components/amonra/TarotContent.astro`: 4 pestañas accesibles (`doctrina`, `arcanos`, `barajas`, `tiradas`), layout 2 columnas de escritorio con `max-w-none` y callouts balanceados.
  - `src/pages/temas/[section].astro`: Integración de héroe compacto, subtítulo y componente de contenido.
  - QA Artifact: `qa_etapa2_tema1_tarot.md` (100% PASS en 18 pruebas funcionales, 3 pruebas técnicas, verificación visual en 1440px y 390px).

---

### Tema 6: RUNAS (`/temas/runas/`)

- **Estado:** **100% COMPLETADO Y PUBLICADO (`published`)**
- **Archivos HTML integrados (32 archivos, 420 KB):**
  - _Doctrina y Métodos (7 archivos):_
    1. `index_runas.htm` (26 KB) — Introducción al Futhark Antiguo, el misterio y el susurro nórdico.
    2. `runas_origen.htm` (38 KB) — Mitología escandinava, Odín colgado del Yggdrasil (Hávamál) y el regalo de los signos.
    3. `runas_caracteres.htm` (35 KB) — Estructura de los tres Aettir (Aett de Freyr, Aett de Heimdall, Aett de Tyr).
    4. `runas_preparacion.htm` (29 KB) — Talla, recolección de madera/piedra, consagración ritual, Canto de Odín y tinción de los caracteres.
    5. `runas_significado.htm` (25 KB) — Compendio y tabla sintética de virtudes adivinatorias.
    6. `runas_tecnicas.htm` (27 KB) — Métodos de tirada (Tirada de Odín, Tirada de las Tres Nornas, Cruz Rúnica).
    7. `runas_tecnicas2.htm` (27 KB) — Tirada de Desbloqueo y Tirada de las Vidas Pasadas.
  - _Catálogo Monográfico Individual de las 25 Runas (25 archivos):_
    - `runa1.htm` (Mannaz: El Sí Mismo) a `runa24.htm` (Sowelu: La Fuerza del Sol)
    - `runa25.htm` (Wyrd / Runa en Blanco / Odín: El Destino Trascendente)
- **Activos entregados:** `src/assets/amonra/runas-hero.jpg` (hero histórico optimizado) + `src/assets/amonra/runas/` (42 imágenes: 25 glifos upright + glifos invertidos).
- **Entregables técnicos implementados:**
  - `src/config/runes-data.ts`: Catálogo íntegro de las 25 runas con etimología nórdica, significado derecho/invertido, correspondencia elemental, consejo del Guerrero Espiritual, 3 Aettir, Canto de Odín y 5 tiradas clásicas.
  - `src/components/amonra/RunesContent.astro`: 4 pestañas accesibles (`origen`, `futhark`, `consagracion`, `tiradas`), layout 2 columnas de escritorio con `max-w-none` y callouts balanceados.
  - `src/pages/temas/[section].astro`: Integración de héroe compacto, subtítulo y componente de contenido.
  - QA Artifact: `qa_etapa2_tema2_runas.md` (100% PASS en 33 pruebas automatizadas de smoke test, build SSG verificado).

---

### Tema 7: ORÁCULOS (`/temas/oraculos/`)

- **Estado:** **100% COMPLETADO Y PUBLICADO (`published`)**
- **Archivos HTML integrados (5 archivos, 200 KB):**
  1. `index_oraculos.htm` (43 KB) — Filosofía de la consulta oracular, sincronicidad y diálogo con la sabiduría interior.
  2. `oraculos.html` (44 KB) — El precepto sagrado «Conócete a ti mismo» (_Gnothi Seauton_) como fundamento oracular.
  3. `oraculos_delfos.htm` (34 KB) — El Templo de Apolo en Delfos, la Pitonisa, rituales de purificación y la tradición griega.
  4. `oraculos_iching.htm` (40 KB) — El I Ching o Libro de las Mutaciones (Yin/Yang, los 8 Trigramas del Bagua, técnica de las tres monedas y hexagramas).
  5. `oraculos_tipos.htm` (37 KB) — Métodos oraculares tradicionales (cleromancia, dados sagrados, oráculo de gemas y bibliomancia).
- **Activos entregados:** `src/assets/amonra/oraculos-hero.jpg` (hero de la Pitia en el trípode délfico) + `src/assets/amonra/oraculos/` (6 imágenes históricas: Pitia, Santuario de Apolo, Bagua, monedas I Ching, cleromancia y ruinas).
- **Entregables técnicos implementados:**
  - `src/config/oracles-data.ts`: Fichas completas del I Ching (8 Trigramas con caracteres, pinyin, elemento y naturaleza; 4 sabios; método de 3 monedas y mutaciones de líneas), el Santuario de Delfos (3 máximas en griego y español, rito de la Pitonisa en 4 pasos, fuentes Castalia y Casotis), 4 mancias tradicionales (cleromancia, astragalomancia, litomancia, bibliomancia) y las 4 leyes éticas de consulta.
  - `src/components/amonra/OraclesContent.astro`: 4 pestañas accesibles (`filosofia`, `delfos`, `iching`, `metodos`), layout 2 columnas de escritorio con `max-w-none`, tipografía editorial y callouts balanceados.
  - `src/pages/temas/[section].astro`: Integración de héroe compacto, subtítulo y componente de contenido.
  - QA Artifact: `qa_etapa2_tema3_oraculos.md` (100% PASS en 34 pruebas automatizadas de smoke test, build SSG verificado).

---

### Tema 8: NUMEROLOGÍA (`/temas/numerologia/`)

- **Estado:** **100% COMPLETADO Y PUBLICADO (`published`)** — **¡ETAPA 2 CULMINADA AL 100%!**
- **Archivos HTML integrados (7 archivos, 338 KB):**
  1. `index_numerologia.htm` (108 KB) — Filosofía pitagórica, la música de las esferas, tetractys, reducción alfabética (A-Z con Ñ=5), cromología (9 colores y 2 octavas), Sendero Natal, Número del Nombre, Número del Poder Personal y Año Personal.
  2. `numerologia1.htm` (50 KB) — Significado exhaustivo de los números simples (1 al 9) y maestros (11 y 22): personalidad, regente planetario, virtudes y Consejos de Oro de Amonra.
  3. `numerologia2.htm` (38 KB) — Los Números Vocales (Deseo del Alma y motivación interior profunda para los números 1 al 9, 11 y 22).
  4. `numerologia3.htm` (36 KB) — Los Números Consonantes (Personalidad e imagen externa ante el entorno para los números 1 al 9, 11 y 22).
  5. `numerologia4.htm` (37 KB) — Arquetipos cósmicos (El Guía, El Ayudante, El Constructor, etc.), Dirección de Aprendizaje, Oportunidad Evolutiva y Destino de Vida.
  6. `numerologia5.htm` (37 KB) — Vibraciones de éxito, vocación y consejos prácticos de realización para cada número.
  7. `numerologia6.htm` (32 KB) — Ciclos Novenarios del Tiempo: dinámicas, actividades clave y precauciones de los 9 Años Personales.
- **Activos entregados:** `src/assets/amonra/numerologia-hero.jpg` (Hombre de Vitruvio de Leonardo da Vinci) + 7 imágenes en `src/assets/amonra/numerologia/` (Hombre de Vitruvio, 2 ilustraciones centrales y 4 láminas ceremoniales de números).
- **Entregables técnicos implementados:**
  - `src/config/numerology-data.ts`: Modelos canónicos tipados (`NumerologyIntro`, `PythagoreanLetterColumn`, `ChromologyColor`, `CalculationMethod`, `NumberProfile`, `TriadVibration`, `PersonalYearCycle`), cita de Pitágoras, Tetractys, tabla de 27 letras, cromología con octavas, 6 fórmulas canónicas con ejemplo histórico, 11 perfiles con Consejos de Oro, 11 vibraciones duales de la tríada y los 9 Años Personales.
  - `src/components/amonra/NumerologyContent.astro`: 4 pestañas accesibles (`pitagoras`, `arquetipos`, `triada`, `ciclos`), layout en 2 columnas para escritorio con `max-w-none`, galería de láminas y callouts de advertencia y bendición Amonra/Feliluxor.
  - `src/pages/temas/[section].astro`: Integración de héroe compacto, subtítulo y componente de contenido.
  - QA Artifact: `qa_etapa2_tema4_numerologia.md` (100% PASS en 36 pruebas automatizadas de smoke test, build SSG verificado).

---

## ETAPA 3: Magia, Zodíacos Comparados y Terapias Holísticas (3 Temas)

### Tema 9: MAGIA (`/temas/magia/`)

- **Estado:** Pendiente (`migration`)
- **Archivos HTML originales (21 archivos, ~1.100 KB):**
  - _Doctrina y Ética Hermética (11 archivos):_
    1. `index_magia.html` (94 KB) — Definición hermética de la magia como transmutación de la propia conciencia. Leyes del Kybalion.
    2. `magia.html` (86 KB) — La voluntad enfocada, el respeto al libre albedrío y el peligro del ego en la práctica ritual.
    3. `magia_blanca.html` (43 KB) — Principios inmutables de la Magia Blanca: polaridad de luz, la Ley del Tres y protección psíquica.
    4. `magia_druida.html` (110 KB) — Tradición de los druidas celtas, bosques sagrados, el roble, el muérdago y la veneración de la naturaleza.
    5. `magia_magia.html` (93 KB) — Correspondencias elementales (Tierra, Aire, Fuego, Agua, Éter) y horas planetarias.
    6. `magia_hechizos.html` (49 KB) — Fórmulas tradicionales de luz para la bendición del hogar, trabajo y armonía familiar.
    7. `rituales.html` (45 KB) — El círculo de protección, invocación de los cuatro puntos cardinales y consagración de herramientas (altar, athame, cáliz, varita, pentáculo).
    8. `magia_rituales.html` (65 KB) — Rituales lunares (Novilunio, Cuarto Creciente, Plenilunio y Cuarto Menguante).
    9. `magia_velas.html` (30 KB) — Vínculo entre la magia ceremonial y el soporte ígneo de las velas.
    10. `magia_hierbas.html` (52 KB) — Herbología mágica tradicional y sahumados protectores.
    11. `magia_amuletos.html` (40 KB) — Carga y consagración de amuletos personales.
  - _Rueda del Año: Solsticios y Equinoccios (10 archivos):_ 12. `solsticio-navidad.html` (35 KB) — El solsticio de invierno (Yule) y el renacimiento de la luz invicta. 13. `solsticio_invierno.html` & `solsticio_invierno10.html` (70 KB) — Rituales del solsticio austral de invierno. 14. `solsticio_verano.html` (48 KB) — El solsticio de verano (Litha), la plenitud de la fuerza solar y fuegos rituales. 15. `equinoccio.htm`, `equinoccio_primavera.html`, `equinoccio_primavera08.html`, `equinoccio_primavera10.htm` (140 KB) — La primavera (Ostara) y la fertilidad de la tierra. 16. `equinoccio-otono10.html` (38 KB) — El otoño (Mabon), la cosecha de frutos y el agradecimiento a la tierra.
- **Activos disponibles:** Carpeta `backup-original/public_html/amonra.cl/magia/` (259 imágenes).
- **Entregables técnicos a construir:**
  - `src/config/magic-data.ts`: Leyes herméticas, correspondencias lunares, herramientas rituales y el calendario de las 8 estaciones.
  - `src/components/amonra/MagicContent.astro`: 4 pestañas (`doctrina`, `druidas`, `estaciones`, `rituales`).
  - `src/assets/amonra/magia-hero.jpg`: Hero histórico optimizado.

---

### Tema 10: HORÓSCOPOS (`/temas/horoscopos/`)

- **Estado:** Pendiente (`migration`)
- **Archivos HTML originales (53 archivos, 1.735 KB) — El módulo más extenso en páginas:**
  - _Zodíaco Solar Tradicional (13 archivos):_
    - `index_horoscopos.html` (índice general)
    - 12 archivos de signos: `horoscopos_aries.htm`, `horoscopos_tauro.htm`, `horoscopos_geminis.htm`, `horoscopos_cancer.htm`, `horoscopos_leo.htm`, `horoscopos_virgo.htm`, `horoscopos_libra.htm`, `horoscopos_escorpio.htm`, `horoscopos_sagitario.htm`, `horoscopos_capricornio.htm`, `horoscopos_acuario.htm`, `horoscopos_piscis.htm`.
  - _Horóscopo Árabe Tradicional (13 archivos):_
    - `horoscopos_arabe.html` (doctrina de las armas del destino)
    - 12 armas tradicionales: `horoscopos_alfanje.htm`, `horoscopos_arco.htm`, `horoscopos_cadena.htm`, `horoscopos_clava.htm`, `horoscopos_daga.htm`, `horoscopos_flecha.htm`, `horoscopos_fronda.htm`, `horoscopos_hacha.htm`, `horoscopos_lanza.htm`, `horoscopos_maza.htm`, `horoscopos_machete.htm`, `horosocopos_punal.htm`.
  - _Horóscopo Druida / Celta de los Árboles (13 archivos):_
    - `horoscopos_druida.html` (el calendario arbóreo sagrado)
    - Signos arbóreos: abedul, fresno, sauce, espino, roble, avellano, parra, hiedra, caña, saúco, abeto, álamo.
  - _Horóscopo Chino y Elementos (14 archivos):_
    - `horoscopos_chino.html` y `horosocopos_chinaelementos.htm` (las 12 Ramas Terrestres y los 5 Elementos Wu Xing: Madera, Fuego, Tierra, Metal, Agua).
    - Los 12 animales: Rata, Búfalo, Tigre, Conejo, Dragón, Serpiente, Caballo, Cabra, Mono, Gallo, Perro, Cerdo.
- **Activos disponibles:** Carpeta `backup-original/public_html/amonra.cl/horoscopo/` (35 imágenes).
- **Estrategia de diseño recomendada:**
  - `src/config/horoscopes-data.ts`: Catálogo estructurado y modular que unifique los 4 sistemas astrológicos para evitar crear 53 subpáginas dispersas.
  - `src/components/amonra/HoroscopesContent.astro`: 4 pestañas accesibles que permitan comparar los sistemas:
    - Tab 1: `occidental` (Los 12 signos solares clásicos).
    - Tab 2: `arabe` (Las 12 armas del zodíaco árabe).
    - Tab 3: `druida` (Los árboles sagrados celtas).
    - Tab 4: `chino` (Los 12 animales y los 5 elementos).
  - `src/assets/amonra/horoscopos-hero.jpg`: Hero histórico optimizado.

---

### Tema 11: TERAPIAS (`/temas/terapias/`)

- **Estado:** Pendiente (`migration`)
- **Archivos HTML originales (41 archivos, 1.150 KB):**
  - _Doctrina General de Salud Holística (1 archivo):_
    - `index_terapias.html` (52 KB) — La salud como equilibrio integral entre cuerpo físico, mente emocional, cuerpo etérico y espíritu.
  - _Módulo de Aromaterapia Sagrada (16 archivos):_
    - `index_aroma.html` & `aromaterapia.html` — Principios curativos de los aceites esenciales puros y olfacción terapéutica.
    - `aroma_astrologia.html` & `aroma_correspastrol.html` — Aromas tutelares según la carta natal.
    - `aroma_correspcristales.htm` — Sinergia entre esencias florales y gemoterapia.
    - `aroma_correspelem.html` — Los cuatro elementos y sus aceites correspondientes.
    - `aroma_corresplanetaria.html` — Siete aceites sagrados de los planetas clásicos.
    - `aroma_corresplunar.html` — Aceites y aplicaciones según las cuatro fases lunares.
    - `aroma_rituales.html` y `aromas_magicos.html` — Baños de descarga, unciones de sosiego y sahumados.
    - Fichas de aceites esenciales: lavanda, sándalo, incienso, mirra, romero, rosa, bergamota.
  - _Catálogo de 24 Terapias Holísticas y Vibracionales (24 archivos):_
    - `index_acupuntura.html` — La red de meridianos de la Medicina Tradicional China.
    - `index_ayurveda.html` — Medicina védica, los 3 doshas (Vata, Pitta, Kapha) y el prana.
    - `index_biomagnetismo.html` — El par biomagnético y el equilibrio de pH.
    - `index_cromoterapia.htm` — El influjo terapéutico de las frecuencias del espectro cromático.
    - `index_eutonia.html` — Regulación del tono neuromuscular y conciencia corporal.
    - `index_fengshui.html` — Armonización del Chi en los espacios habitables.
    - `index_fitoterapia.htm` — Propiedades curativas de las plantas medicinales tradicionales.
    - `index_floresdebach.htm` — El sistema floral del Dr. Edward Bach y la sanación emocional.
    - `index_hipnosis.html` — Hipnosis clínica, relajación profunda y reprogramación subconsciente.
    - `index_homeopatia.html` — El principio de similitud (_Similia similibus curentur_).
    - `index_macrobiotica.htm` — Alimentación equilibrada según el Yin y el Yang.
    - `index_magnetoterapia.html` — Campos magnéticos aplicados a la regeneración celular.
    - `index_meditacion.htm` — Silencio interior, respiración consciente y desapego mental.
    - `index_musicoterapia.html` — Frecuencias armónicas y resonancia acústica celular.
    - `index_osteopatia.html` — Integridad estructural músculo-esquelética y movilidad tisular.
    - `index_quiropraxia.html` — Ajuste vertebral y libre flujo del sistema nervioso central.
    - `index_reflexologia.htm` — Zonas reflejas en las plantas de los pies y correspondencia orgánica.
    - `index_reiki.htm` — Canalización de energía universal (Reiki Usui tradicional).
    - `index_relajacion.htm` — Técnicas somáticas de liberación del estrés crónico.
    - `index_yoga.html` — Unión de cuerpo, respiración y mente a través de asanas y pranayama.
- **Activos disponibles:** Carpetas `terapias/` (194 imágenes) y `aromaterapia/` (129 imágenes).
- **Entregables técnicos a construir:**
  - `src/config/therapies-data.ts`: Fichas completas de las 24 terapias holísticas y el compendio integral de aromaterapia sagrada.
  - `src/components/amonra/TherapiesContent.astro`: 4 pestañas (`holistica`, `aromaterapia`, `vibracionales`, `orientales`).
  - `src/assets/amonra/terapias-hero.jpg`: Hero histórico optimizado.

---

## 3. Matriz Resumen de Archivos Faltantes

| #           | Tema            | Ruta Destino          |       Archivos HTML de Origen        | Imágenes Históricas |  Complejidad   |
| ----------- | --------------- | --------------------- | :----------------------------------: | :-----------------: | :------------: |
| 1           | **Tarot**       | `/temas/tarot/`       |                  9                   |         180         |     Media      |
| 2           | **Runas**       | `/temas/runas/`       |      32 (7 doctrina + 25 runas)      |         102         |     Media      |
| 3           | **Oráculos**    | `/temas/oraculos/`    |                  5                   |         68          |   Baja-Media   |
| 4           | **Numerología** | `/temas/numerologia/` |                  7                   |         48          |     Media      |
| 5           | **Magia**       | `/temas/magia/`       |   21 (11 doctrina + 10 estaciones)   |         259         |   Media-Alta   |
| 6           | **Horóscopos**  | `/temas/horoscopos/`  | 53 (occidental, árabe, celta, chino) |         35          | Alta (volumen) |
| 7           | **Terapias**    | `/temas/terapias/`    |     41 (17 aroma + 24 terapias)      |         323         | Alta (volumen) |
| **TOTALES** | **7 temas**     | —                     |        **168 archivos HTML**         | **1.115 imágenes**  |       —        |

---

## 4. Reglas Técnicas y Estándares de Calidad Consolidados

Para que la migración alcance el 100% manteniendo el estándar de los temas ya completados:

1. **Fidelidad Textual Absoluta (100%):** Todo texto debe proceder literalmente del respaldo original. Cero paráfrasis, inventos o citas espurias. Solo se corrigen tildes, faltas ortográficas evidentes y errores de tipeo originales.
2. **Criterio de Diseño de Escritorio (Commit `e9d1498`):**
   - Pares de lectura en grillas simétricas: `<div class="*-columns mt-6 grid gap-x-10 gap-y-5 lg:grid-cols-2">`.
   - Override obligatorio de ancho: `<p class="max-w-none ...">`.
   - Callouts y notas destacadas en 2 columnas: `<div class="grid gap-x-10 gap-y-3 lg:grid-cols-2 lg:items-center">`.
   - Regla CSS con ámbito en el componente: `:global([data-content-tabs] p.max-w-none) { max-width: none; }`.
3. **Estructura Modular de 4 Pestañas (`ContentTabs`):** Cada sección se articula en 4 pestañas accesibles con WAI-ARIA, navegación por teclado y soporte de anclas URL directas (`#tab-id`).
4. **Optimización de Activos:** Selección del hero histórico más nítido de la carpeta correspondiente, copiado a `src/assets/amonra/` y optimizado automáticamente por Astro a WebP.
5. **QA Automatizado y Visual Obligatorio:**
   - Verificación de 0 errores en `astro check`.
   - Verificación de compilación limpia en `astro build`.
   - Suite de pruebas de contenido y comprobación visual headless a 1440px (escritorio) y 390px (móvil) antes de cada commit.
6. **Compromiso Git:** Confirmación explícita del usuario previa a cualquier `git commit` o `git push`.
