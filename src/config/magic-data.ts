export interface MagicTradition {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  principles: string[];
  practices: string[];
  historicalContext: string;
}

export interface SeasonFestival {
  id: string;
  name: string;
  celticName: string;
  symbol: string;
  southHemisphere: string;
  northHemisphere: string;
  meaning: string;
  rituals: string[];
  correspondences: {
    element: string;
    colors: string[];
    herbs: string[];
    altar: string;
  };
}

export interface MagicTool {
  id: string;
  name: string;
  element: string;
  direction: string;
  symbolism: string;
  usage: string;
}

export interface LunarPhase {
  phase: string;
  energy: string;
  recommendedRituals: string[];
  focus: string;
}

export interface SacredPlant {
  name: string;
  popularName?: string;
  properties: string;
  ritualUse: string;
  element: string;
}

export const magicIntro = {
  quote: {
    text: "La magia es la ciencia y el arte sagrado de causar cambios en la conciencia y en el mundo en estricta conformidad con la Voluntad y las Leyes de la Naturaleza.",
    author: "Doctrina Hermética Tradicional",
    source: "Portal Amonra Chile — Colección Esotérica",
  },
  centralThesis:
    "Lejos del ilusionismo escénico de entretenimiento, la verdadera magia es una disciplina de transmutación interior. Es el estudio lúcido de las leyes universales, la fuerza de la voluntad enfocada y la comunión reverente con los ciclos vivientes de la Tierra, donde cada pensamiento, palabra y acto intencionado produce ondas de causa y efecto en el universo.",
  foundationalText:
    "El vocablo 'magia' procede del latín magia y éste del griego mageia, que originalmente designaba el saber sacerdotal de los sabios persas y caldeos. En la tradición esotérica de Amonra, la magia se fundamenta en la polaridad de luz (Magia Blanca): jamás se emplea para forzar la voluntad ajena ni para causar daño, pues la Ley del Tres Universal enseña que toda energía enviada regresa multiplicada a quien la emite. El mago o maga consciente no domina a la naturaleza: se convierte en su aliado y servidor.",
  motto:
    "Amonra: Una luz en vuestro camino. Fuente de sabiduría para vuestro ser. Feliluxor: Fe y felicidad en la luz de oro.",
};

export const hermeticPrinciples = [
  {
    principle: "1. Mentalismo",
    axiom: "«El Todo es Mente; el Universo es Mental.»",
    explanation:
      "La realidad fundamental sobre la que se asienta el cosmos es conciencia viva. El primer paso de todo acto mágico radica en la pureza, claridad y dominio del propio pensamiento.",
  },
  {
    principle: "2. Correspondencia",
    axiom: "«Como es arriba, es abajo; como es abajo, es arriba.»",
    explanation:
      "Existe una concordancia armónica entre los planos espiritual, mental y físico. Conocer las dinámicas del microcosmos humano permite comprender y sintonizar con el macrocosmos cósmico.",
  },
  {
    principle: "3. Vibración",
    axiom: "«Nada está inmóvil; todo se mueve; todo vibra.»",
    explanation:
      "La materia, la energía y el espíritu sólo difieren en su frecuencia vibratoria. Las palabras de poder, los aromas, los colores y las oraciones actúan elevando la tasa de vibración de personas y espacios.",
  },
  {
    principle: "4. Polaridad",
    axiom:
      "«Todo es dual; todo tiene dos polos; los semejantes y los antagónicos son lo mismo.»",
    explanation:
      "Los opuestos son idénticos en naturaleza pero diferentes en grado. La transmutación mágica consiste en polarizar estados densos (miedo, confusión) hacia sus grados elevados (fe, discernimiento).",
  },
  {
    principle: "5. Ritmo",
    axiom:
      "«Todo fluye y refluye; todo tiene sus períodos de avance y retroceso.»",
    explanation:
      "La marea cósmica oscila sin cesar en el latido de las estaciones, las lunaciones y las épocas. El arte mágico no combate el flujo natural, sino que sintoniza sus actos en el momento propicio.",
  },
  {
    principle: "6. Causa y Efecto",
    axiom: "«Toda causa tiene su efecto; todo efecto tiene su causa.»",
    explanation:
      "El azar es simplemente una ley no reconocida. En la magia de luz rige la Ley del Tres: la energía emitida retorna triplicada, por lo que toda intención debe fundarse en el amor y la bendición.",
  },
  {
    principle: "7. Generación",
    axiom:
      "«La generación existe por doquier; todo tiene sus principios masculino y femenino.»",
    explanation:
      "Nada puede manifestarse en el universo sin el concurso sagrado de ambas fuerzas polares: la chispa proyectiva de la voluntad y la matriz receptiva nutricia.",
  },
];

export const magicTraditions: MagicTradition[] = [
  {
    id: "magia-blanca",
    name: "Magia Blanca y Filosofía de la Luz",
    title: "El Sendero del Bien Desinteresado y la Armonía Cósmica",
    subtitle: "Sanación, bendición y respeto incondicional al libre albedrío",
    description:
      "La Magia Blanca representa la vertiente más noble y pura de las artes esotéricas. A diferencia de prácticas que pretenden subordinar al prójimo o manipular los acontecimientos para beneficio egoísta, la Magia Blanca consagra toda su energía al restablecimiento del equilibrio, la protección espiritual del hogar, la sanación integral y la elevación vibracional de la comunidad.",
    principles: [
      "Inofensividad absoluta: Jamás interferir ni doblegar la libre elección de otra alma.",
      "La Ley del Retorno Cósmico (Ley del Tres): La benevolencia sembrada regresa multiplicada por tres.",
      "Alineación con el Plan Divino: Pedir siempre 'conforme a la voluntad divina y para el mayor bien de todos los involucrados'.",
      "Pureza de intención: El soporte material (velas, hierbas, agua) es secundario frente a la claridad del corazón.",
    ],
    practices: [
      "Rituales de bendición y pacificación del hogar.",
      "Círculos de oración y envío de energía sanadora a distancia.",
      "Consagración de amuletos y fetiches de protección personal.",
      "Sahumados de purificación ambiental con resinas sagradas (copal, mirra, olíbano).",
    ],
    historicalContext:
      "Presente en los misterios de Eleusis, el sacerdocio del antiguo Egipto, los tratados de Marsilio Ficino en el Renacimiento y los linajes de sanadores populares que empleaban oraciones cristianas e invocaciones angélicas para aliviar el sufrimiento.",
  },
  {
    id: "magia-celta",
    name: "Magia Celta y Tradición Druídica",
    title: "La Veneración Sagrada de los Bosques, los Árboles y los Vientos",
    subtitle: "El saber oral de la casta sacerdotal druida y el alfabeto Ogham",
    description:
      "Para los antiguos pueblos celtas de Galia, Britania e Hibernia, la naturaleza no era un mero escenario material, sino un santuario vivo habitado por divinidades, númenes y espíritus tutelares. Los Druidas constituían la casta intelectual y espiritual suprema: filósofos, jueces, médicos, astrónomos y sacerdotes que custodiaban la memoria de la tierra y los secretos de las estaciones.",
    principles: [
      "Devoción a la Madre Tierra (Danu / Gaia): Cada árbol, arroyo y colina posee alma y memoria.",
      "Transmisión oral estricta: Los misterios druídicos no se registraban por escrito para mantener vivo el lazo iniciático.",
      "El árbol sagrado (El Roble - Duir): Puerta entre el inframundo, el plano terrestre y las esferas celestiales.",
      "Observación de las señales celestes y las aves: Auspicios tomados del vuelo de águilas, cuervos y lechuzas.",
    ],
    practices: [
      "Cosecha ritual del muérdago sagrado del roble con una hoz de oro en la sexta noche lunar.",
      "Celebración de las cuatro grandes fiestas de fuego (Samhain, Imbolc, Beltane, Lughnasadh).",
      "Consulta oracular a través del alfabeto sagrado de los árboles (el Ogham).",
      "Rituales en nemetones: arboledas sagradas donde no se construían templos de piedra para no aprisionar el cielo.",
    ],
    historicalContext:
      "Documentada en las crónicas de Julio César, Plinio el Viejo y Estrabón, y revivida en los renacimientos célticos modernos como una filosofía de ecología espiritual y comunión íntima con la biosfera.",
  },
  {
    id: "magia-verde",
    name: "Magia Verde y Herbolaria Tradicional",
    title: "La Sabiduría Viviente del Reino Vegetal y la Fitoterapia Sagrada",
    subtitle:
      "Chamanes, curanderas de aldea y las virtudes curativas de las plantas",
    description:
      "La Magia Verde es la rama que trabaja en alianza íntima con el espíritu de las plantas, las raíces, las resinas, las cortezas y las flores. Entiende que la naturaleza es una farmacia sagrada: cada vegetal posee una impronta química medicinal y una vibración sutil capaz de restaurar el campo electromagnético humano.",
    principles: [
      "Respeto y permiso al espíritu de la planta: Jamás arrancar un brote o raíz sin pedir permiso y dejar una ofrenda de agua o agradecimiento.",
      "Conocimiento de las signaturas vegetales: La forma, color y aroma de la planta indican el órgano y emoción que armoniza.",
      "Recolección astronómica: Cosechar en la fase lunar correspondiente y bajo la regencia planetaria propicia.",
      "Complementariedad médica: La herbolaria tradicional acompaña y sostiene la salud, sin reñir con la medicina formal.",
    ],
    practices: [
      "Elaboración de tisanas, ungüentos, tinturas y bálsamos sanadores.",
      "Atados de sahumerio (smudge sticks) de salvia blanca, ruda y romero para limpiezas áuricas.",
      "Baños de florecimiento y despojo con hierbas amargas (limpieza) y dulces (atracción de prosperidad).",
      "Bolsitas mágicas de hierbas (mojos o saquitos gris-gris) llevadas como talismán protector.",
    ],
    historicalContext:
      "Heredera directa de las curanderas medievales, los yerbateros indígenas americanos y los tratados de Paracelso y Nicolás Culpeper sobre la astrología médica de los simples.",
  },
  {
    id: "magia-crowley",
    name: "Magia y Magiak (Magick Hermética)",
    title: "La Ciencia y el Arte de la Voluntad Consciente",
    subtitle:
      "La distinción entre el ilusionismo escénico y la auténtica Magiak con «k»",
    description:
      "A mediados del siglo XX, el investigador y ocultista Aleister Crowley acuñó el término 'Magiak' (Magick) con la letra 'k' para diferenciar rigurosamente la disciplina iniciática real de los trucos de escenario y el teatro ilusionista. Definió la Magiak como 'la Ciencia y el Arte de causar cambios que ocurran en conformidad con la Voluntad'.",
    principles: [
      "Todo acto intencional es un acto mágico: Desde escribir una carta hasta fundar una institución, si emana de la voluntad consciente.",
      "El Postulado Mágico: La naturaleza obedece a leyes objetivas; el fallo de un acto radica en la ignorancia de las condiciones o la dispersión del deseo.",
      "Descubrimiento de la Verdadera Voluntad (Thelema): La misión individual en armonía con la corriente cósmica.",
      "Responsabilidad ineludible: Quien fija su atención en el fracaso o el resentimiento cosecha discordia multiplicada.",
    ],
    practices: [
      "Desarrollo de la concentración mental absoluta (dharana) y respiración rítmica (pranayama).",
      "Consagración rigurosa del templo y las herramientas rituales personales.",
      "Invocación de la Luz divina a través del Ritual Menor del Pentagrama (LBRP).",
      "Registro minucioso en el Diario Mágico de cada operación, hora, luna y resultado obtenido.",
    ],
    historicalContext:
      "Sintetizada en el seno de la Orden Hermética del Amanecer Dorado (Golden Dawn) en Inglaterra en la década de 1890 y continuada en el esoterismo contemporáneo como base del ritual ceremonial.",
  },
  {
    id: "magia-angelical",
    name: "Magia Teúrgica y Angelología",
    title: "La Conexión con las Jerarquías Celestiales de Luz",
    subtitle:
      "Invocación de virtudes supremas, paz interior y guía arcangélica",
    description:
      "La Magia Angelical o Teurgia es la elevación del alma humana hacia la comunión con las inteligencias superiores de luz (arcángeles, ángeles de la guarda y virtudes celestes). No busca beneficios materiales egoístas, sino recibir inspiración, discernimiento y protección espiritual en los momentos cruciales del destino.",
    principles: [
      "Invocación de los Cuatro Grandes Arcángeles protectores de la Creación.",
      "Veneración de la pureza de vida, la devoción contemplativa y el silencio interior.",
      "Uso del rayo de color, la vela blanca y los aromas solares (incienso, mirra, benjuí).",
      "Petición en oración sincera, nunca en exigencia ni conjetura.",
    ],
    practices: [
      "Sintonización diaria con el Ángel Guardián al amanecer y al acostarse.",
      "Ritual de los Cuatro Arcángeles: Miguel (Fuego/Sur), Gabriel (Agua/Oeste), Rafael (Aire/Este), Uriel (Tierra/Norte).",
      "Plegarias de sanación del árbol genealógico y liberación de ataduras del pasado.",
      "Meditación en las 7 Llamas Sagradas y los coros celestes.",
    ],
    historicalContext:
      "Arraigada en la Cábala mística hebrea, los tratados sobre las Jerarquías Celestiales del Pseudo-Dionisio Areopagita y los textos medievales de sanación cristiana.",
  },
];

export const wheelOfYear: SeasonFestival[] = [
  {
    id: "yule",
    name: "Solsticio de Invierno",
    celticName: "Yule / El Renacimiento de la Luz",
    symbol: "El Árbol Perenne, el Tronco Sagrado y la Vela de Esperanza",
    southHemisphere: "21 al 22 de Junio (Solsticio Austral)",
    northHemisphere: "21 al 22 de Diciembre (Solsticio Boreal)",
    meaning:
      "Es la noche más larga y oscura del año, momento en que el solsticio alcanza su punto extremo en la elíptica celeste. Sin embargo, en el vientre de la mayor oscuridad renace la luz: a partir de este instante, los días comienzan imperceptiblemente a crecer. Se celebra el regreso de la esperanza, la vida indestructible y la fuerza solar que vence a las sombras.",
    rituals: [
      "Encendido del Tronco de Yule decorado con ramas de pino, acebo y canela.",
      "Vigilia al anochecer agradeciendo los aprendizajes recogidos durante el año.",
      "Encendido de una vela dorada o blanca al amanecer saludando la reaparición del astro rey.",
      "Compartir vino caliente especiado, frutos secos y pan dulce en comunidad.",
    ],
    correspondences: {
      element: "Tierra y Fuego naciente",
      colors: ["Dorado", "Verde oscuro", "Rojo carmesí", "Blanco nieve"],
      herbs: ["Pino", "Muérdago", "Acebo", "Laurel", "Romero", "Canela"],
      altar:
        "Ramas verdes, piñas secas, velas doradas y esferas que simbolicen el sol renacido.",
    },
  },
  {
    id: "imbolc",
    name: "Fiesta de las Luces y Primeros Brotes",
    celticName: "Imbolc / Brigid / Candelaria",
    symbol: "La Cruz de Brigid, la Leche Nutricia y las Velas Nuevas",
    southHemisphere: "1 al 2 de Agosto (Hemisferio Austral)",
    northHemisphere: "1 al 2 de Febrero (Hemisferio Boreal)",
    meaning:
      "Representa la primera promesa tangible de la primavera mientras la tierra aún se halla bajo el frío invernal. Es la época en que brota la leche en los rebaños y las primeras semillas despiertan en lo profundo del suelo. Fiesta consagrada a la diosa celta Brigid, patrona de la forja, la poesía, la sanación y el hogar.",
    rituals: [
      "Bendición y encendido de todas las velas que se usarán en el año (La Candelaria).",
      "Tejido de la Cruz de Brigid con juncos, paja o trigo para colgar tras la puerta de entrada.",
      "Limpieza profunda y purificación de cada rincón del hogar eliminando cargas viejas.",
      "Dejar una tela blanca o lazo al rocío nocturno para que reciba la bendición sanadora.",
    ],
    correspondences: {
      element: "Fuego sagrado de la inspiración y Agua viva",
      colors: ["Blanco puro", "Plata", "Amarillo pálido", "Verde tierno"],
      herbs: [
        "Campanillas de nieve",
        "Salvia",
        "Albahaca",
        "Romero",
        "Angélica",
      ],
      altar:
        "Cuenco con leche o agua de manantial, velas blancas y semillas recién plantadas.",
    },
  },
  {
    id: "ostara",
    name: "Equinoccio de Primavera",
    celticName: "Ostara / El Despertar Fértil",
    symbol: "El Huevo Cósmico, la Liebre Sagrada y las Flores Silvestres",
    southHemisphere: "21 al 23 de Septiembre (Equinoccio Austral)",
    northHemisphere: "20 al 21 de Marzo (Equinoccio Boreal)",
    meaning:
      "Día de equilibrio perfecto en que la luz y la oscuridad duran exactamente 12 horas en todo el planeta. A partir de aquí, la luz conquista el horizonte diurno. Es el tiempo del renacimiento explosivo, la fecundidad de la tierra, el florecimiento de los árboles y la siembra consciente de nuevos proyectos vitales.",
    rituals: [
      "Pintura y decoración de huevos de ave con símbolos sagrados de prosperidad.",
      "Siembra ritual de flores o hierbas medicinales intencionando metas personales.",
      "Paseos meditativos al aire libre conectando con la fragancia de los primeros capullos.",
      "Ofrenda de miel, pan de trigo y leche a la tierra en jardines y macetas.",
    ],
    correspondences: {
      element: "Aire matinal y Tierra fértil",
      colors: ["Verde primavera", "Rosa suave", "Amarillo dorado", "Lavanda"],
      herbs: ["Jazmín", "Trébol", "Violetas", "Tomillo", "Madreselva"],
      altar:
        "Flores silvestres frescas, huevos decorados, plumas de aves y miel pura.",
    },
  },
  {
    id: "beltane",
    name: "Fuego de la Juventud y Plenitud Vital",
    celticName: "Beltane / Walpurgis / Fuego de Bel",
    symbol: "El Palo de Mayo, las Hogueras y la Corona de Flores",
    southHemisphere: "31 de Octubre al 1 de Noviembre (Austral)",
    northHemisphere: "30 de Abril al 1 de Mayo (Boreal)",
    meaning:
      "La fiesta del florecimiento supremo y la sensualidad sagrada. Conmemora la unión mística de los principios masculino y femenino de la creación que colman de fertilidad a los campos. Es una celebración de pasión, regocijo de vivir, danza y fuerza creadora.",
    rituals: [
      "Danza en torno al Palo de Mayo tejiendo cintas de colores para consagrar la unión.",
      "Salto sobre las brasas de una pequeña fogata ritual para purificar y bendecir el cuerpo.",
      "Lavarse el rostro con el rocío de la mañana de Beltane para conservar la lozanía.",
      "Coronación con flores silvestres y celebración de compromisos de amor mutuo.",
    ],
    correspondences: {
      element: "Fuego triunfante y Tierra florida",
      colors: ["Rojo vivo", "Blanco", "Verde esmeralda", "Dorado"],
      herbs: ["Espino albar", "Rosas", "Lilium", "Menta", "Caléndula"],
      altar:
        "Guirnaldas de flores vivas, cintas rojas y blancas, cáliz con vino dulce y velas aromáticas.",
    },
  },
  {
    id: "litha",
    name: "Solsticio de Verano",
    celticName: "Litha / La Noche de San Juan",
    symbol: "El Sol en el Cenit, la Rueda Solar y las Hierbas de Poder",
    southHemisphere: "21 al 22 de Diciembre (Solsticio Austral)",
    northHemisphere: "21 al 22 de Junio (Solsticio Boreal)",
    meaning:
      "El día más largo y la noche más breve del año. El sol alcanza su máxima plenitud y poder radiante. Es el cenit de la luz: a partir de este hito la rueda comenzará su lento descenso hacia el recogimiento invernal, por lo que se festeja la abundancia presente mientras se cosecha la fuerza para los meses futuros.",
    rituals: [
      "Hogueras de verano: quemar viejos papeles o ataduras para transmutar el pasado.",
      "Recolección de la Hierba de San Juan (hipérico), ruda y verbena bajo el sol del mediodía.",
      "Confección de amuletos solares tejidos con hierbas secas e hilos dorados.",
      "Baños de mar o río a medianoche para purificar las energías corporales y emocionales.",
    ],
    correspondences: {
      element: "Fuego radiante",
      colors: ["Amarillo sol", "Dorado brillante", "Naranja", "Azul celeste"],
      herbs: ["Hierba de San Juan", "Manzanilla", "Ruda", "Laurel", "Girasol"],
      altar:
        "Girasoles, espigas de trigo maduro, velas amarillas encendidas y espejos que reflejen el sol.",
    },
  },
  {
    id: "lughnasadh",
    name: "Primera Cosecha del Grano",
    celticName: "Lughnasadh / Lammas",
    symbol: "La Gavilla de Trigo, el Pan de la Cosecha y el Hojal de Oro",
    southHemisphere: "1 al 2 de Febrero (Austral)",
    northHemisphere: "1 al 2 de Agosto (Boreal)",
    meaning:
      "Consagrado al dios celta Lugh, maestro de todas las artes y artesanos. Marca el inicio de la recolección agrícola: la primera siega del trigo y el centeno. Nos recuerda que para recibir el grano es necesario haber trabajado la tierra con constancia y sacrificio consciente.",
    rituals: [
      "Hornear pan casero con harina de la nueva cosecha y consagrarlo compartiéndolo en familia.",
      "Hacer muñecas de paja o espigas de trigo para proteger la alacena y el sustento familiar.",
      "Dar gracias solemnes por los frutos materiales y aprendizajes recibidos en el trabajo.",
      "Juegos y competencias amistosas en honor a los artesanos y trabajadores de la tierra.",
    ],
    correspondences: {
      element: "Tierra madura y Fuego templado",
      colors: ["Dorado cobrizo", "Ámbar", "Naranja tostado", "Marrón claro"],
      herbs: ["Trigo", "Cebada", "Manzana verde", "Brezo", "Acacia"],
      altar:
        "Espigas de trigo, pan recién horneado, maíz dulce y monedas como símbolo de recompensa justa.",
    },
  },
  {
    id: "mabon",
    name: "Equinoccio de Otoño",
    celticName: "Mabon / La Cosecha de la Gratitud",
    symbol: "La Cornucopia de Frutos, las Uvas y la Hoja Caída",
    southHemisphere: "20 al 21 de Marzo (Equinoccio Austral)",
    northHemisphere: "21 al 23 de Septiembre (Equinoccio Boreal)",
    meaning:
      "El segundo equinoccio del año: día y noche vuelven a equilibrarse en perfecta simetría antes de que la noche comience a dominar. Es la fiesta de la vendimia, la recolección de las frutas tardías (manzanas, calabazas, nueces) y el tiempo sagrado de gratitud por la supervivencia asegurada.",
    rituals: [
      "Comida comunitaria de acción de gracias compartiendo manzanas, uvas y frutos secos.",
      "Recolección de hojas otoñales secas para crear adornos y mandalas protectores.",
      "Balance personal: meditar sobre qué esfuerzos rindieron frutos y qué proyectos deben dejarse descansar.",
      "Donación de alimentos o ropa a personas necesitadas en correspondencia solidaria.",
    ],
    correspondences: {
      element: "Agua emocional y Tierra de vendimia",
      colors: ["Ocre", "Marrón caoba", "Rojo borgoña", "Naranja otoño"],
      herbs: ["Vid", "Salvia", "Calabaza", "Cedro", "Avellano"],
      altar:
        "Canasta con manzanas rojas, uvas, bellotas, hojas secas y vino tinto de vendimia.",
    },
  },
  {
    id: "samhain",
    name: "Año Nuevo Céltico y Conmemoración de Ancestros",
    celticName: "Samhain / El Velo Entre los Mundos",
    symbol:
      "La Calabaza Iluminada, el Callejón de los Ancestros y el Velo Fino",
    southHemisphere: "30 de Abril al 1 de Mayo (Austral)",
    northHemisphere: "31 de Octubre (Boreal)",
    meaning:
      "El festival más sagrado y trascendente del calendario celta. Marca el fin oficial del ciclo agrícola y el inicio del invierno espiritual. La tradición enseña que en esta noche el velo entre el mundo visible y el invisible se vuelve infinitamente sutil, permitiendo honrar la memoria de los antepasados con amor y respeto sin temor.",
    rituals: [
      "Poner un plato adicional en la mesa y encender una vela en la ventana para guiar a los ancestros amados.",
      "Escribir en papel los hábitos dañinos o rencores que se desean desvanecer y quemarlos solemnemente.",
      "Lecturas oraculares del destino (Tarot, Runas) para vislumbrar los patrones del nuevo año espiritual.",
      "Silencio y oración por todas las almas que han partido en paz y luz.",
    ],
    correspondences: {
      element: "Agua profunda y Éter espiritual",
      colors: [
        "Negro obsidiana",
        "Naranja calabaza",
        "Plata",
        "Morado profundo",
      ],
      herbs: ["Ruda", "Romero", "Mugwort (artemisa)", "Calabaza", "Mirra"],
      altar:
        "Retratos de antepasados queridos, manzanas, granadas, velas negras y piedras de río.",
    },
  },
];

export const altarTools: MagicTool[] = [
  {
    id: "athame",
    name: "El Athame (La Daga Sagrada)",
    element: "Aire (o Fuego en algunas tradiciones)",
    direction: "Este (o Sur)",
    symbolism:
      "Representa la mente afilada, el discernimiento implacable que corta la ilusión y la voluntad enfocada. Es una herramienta ritual sin filo cortante material: no se utiliza para cortar objetos físicos, sino para trazar el Círculo Mágico de Protección y dirigir la energía.",
    usage:
      "Se toma con la mano dominante para trazar los límites del espacio sagrado y consagrar los cuatro cuadrantes cósmicos.",
  },
  {
    id: "caliz",
    name: "El Cáliz (La Copa de la Vida)",
    element: "Agua",
    direction: "Oeste",
    symbolism:
      "Simboliza el principio receptivo universal, el Santo Grial, el vientre de la Gran Madre y las profundidades del inconsciente y el amor desinteresado. Es el recipiente donde se unifican las emociones espirituales.",
    usage:
      "Contiene agua bendita consagrada con sal marina o vino ritual empleado para libaciones y bendición de los participantes.",
  },
  {
    id: "varita",
    name: "La Varita Mágica",
    element: "Fuego (o Aire)",
    direction: "Sur (o Este)",
    symbolism:
      "Tradicionalmente tallada en madera de fresno, roble, avellano o sauce. Encarna la voluntad creadora, la chispa de inspiración divina y la conexión viva con el Árbol del Mundo (Axis Mundi).",
    usage:
      "Se utiliza para invocar a las fuerzas de la luz, bendecir talismanes y canalizar corrientes energéticas sin la fuerza cortante del athame.",
  },
  {
    id: "pentaculo",
    name: "El Pentáculo del Altar",
    element: "Tierra",
    direction: "Norte",
    symbolism:
      "Disco consagrado de madera, metal o cerámica que lleva grabada la estrella de cinco puntas dentro de un círculo. Los cuatro vértices inferiores representan los 4 elementos materiales y el superior el Espíritu gobernando la materia.",
    usage:
      "Sirve como base de consagración: sobre él se colocan las velas, cristales, amuletos o hierbas para arraigar su fuerza en el plano físico.",
  },
  {
    id: "caldero",
    name: "El Caldero o Incensario",
    element: "Éter y Fuego de Transmutación",
    direction: "Centro del Altar",
    symbolism:
      "El caldero de Cerridwen de la mitología galesa: matriz alquímica de regeneración y sabiduría donde lo viejo muere para renacer purificado. En el incensario, las resinas vegetales se transforman en humo que asciende al cielo.",
    usage:
      "Se emplea para quemar peticiones escritas, quemar hierbas sagradas en carboncillo vegetal y preparar aguas rituales.",
  },
];

export const lunarPhases: LunarPhase[] = [
  {
    phase: "Luna Nueva (Novilunio)",
    energy: "Semilla Cósmica e Introspección Silenciosa",
    recommendedRituals: [
      "Meditación en silencio y descanso regenerador.",
      "Escritura íntima de nuevas intenciones y proyectos en el diario espiritual.",
      "Rituales de limpieza profunda del aura y purificación del hogar.",
      "Siembra de propósitos que madurarán a lo largo del mes lunar.",
    ],
    focus:
      "El cielo está en penumbra protectora. Es tiempo de mirar hacia dentro, acallar el ruido exterior y sembrar en la fértil oscuridad de la mente lo que se desea manifestar.",
  },
  {
    phase: "Cuarto Creciente",
    energy: "Vitalidad, Impulso Creador y Expansión",
    recommendedRituals: [
      "Encendido de velas verdes, doradas o amarillas para atraer trabajo y prosperidad.",
      "Rituales de fortalecimiento de la salud, vitalidad física y confianza personal.",
      "Bendición de nuevos emprendimientos, contratos y asociaciones de bien.",
      "Estudio consciente y desarrollo de talentos artísticos o intelectuales.",
    ],
    focus:
      "La luz visible se expande noche tras noche. Es el ciclo óptimo para actuar con decisión, regar las semillas sembradas y superar bloqueos con persistencia serena.",
  },
  {
    phase: "Luna Llena (Plenilunio)",
    energy: "Cenit Luminoso, Plenitud y Máxima Potencia Espiritual",
    recommendedRituals: [
      "Consagración mayor de barajas de Tarot, runas, péndulos y cristales bajo el baño de luna.",
      "Carga de Agua de Luna: exponer un frasco de vidrio con agua de manantial al resplandor lunar.",
      "Rituales de gratitud solemne por las metas cumplidas y el amor recibido.",
      "Lecturas oraculares profundas y experiencias de clarividencia e intuición lúcida.",
    ],
    focus:
      "El disco lunar refleja en su totalidad la luz solar. Las emociones y la sensibilidad psíquica alcanzan su cúspide: es el momento supremo de celebración y bendición.",
  },
  {
    phase: "Cuarto Menguante",
    energy: "Purificación, Desapego y Cierre de Ciclos",
    recommendedRituals: [
      "Quema simbólica de ataduras, rencores pasados y hábitos perjudiciales.",
      "Baños de sal marina y hierbas amargas para descargar densidades energéticas acumuladas.",
      "Limpieza de armarios, ordenar papeles pendientes y culminar tareas inconclusas.",
      "Protección y sellado energético de los umbrales del hogar.",
    ],
    focus:
      "La luz solar reflejada decrece. La energía invita al desprendimiento consciente: soltar con agradecimiento lo que ya cumplió su función para no arrastrar cargas innecesarias.",
  },
];

export const sacredPlantsCatalog: SacredPlant[] = [
  {
    name: "Ruda (Ruta graveolens)",
    popularName: "La protectora implacable de los hogares",
    properties:
      "Arbusto perenne de aroma intenso y amargo. Desde la Antigüedad romana y la Europa medieval se le atribuyen virtudes formidables para repeler influencias densas, mal de ojo y vibraciones discordantes.",
    ritualUse:
      "Plantar una ruda hembra y macho a la entrada del hogar. Quemada seca sobre carboncillo, limpia ambientes saturados tras conflictos o visitas pesadas.",
    element: "Fuego",
  },
  {
    name: "Romero (Rosmarinus officinalis)",
    popularName: "El rocío de mar y la memoria sagrada",
    properties:
      "Hierba aromática mediterránea consagrada a la claridad mental, la fidelidad y la pureza de intención. Ayuda a dispersar la tristeza, el letargo espiritual y la confusión.",
    ritualUse:
      "Sahumar el lugar de trabajo o estudio para estimular la concentración. Utilizado en baños rituales para renovar la alegría y la lozanía áurica.",
    element: "Fuego / Sol",
  },
  {
    name: "Salvia (Salvia officinalis / Salvia apiana)",
    popularName: "La hierba de la sabiduría y longevidad",
    properties:
      "Su nombre proviene del latín 'salvare' (salvar o curar). Planta maestra de la purificación ritual en tradiciones nativas americanas y monasterios europeos.",
    ritualUse:
      "El atado de salvia (smudge) encendido es el sahumado supremo para neutralizar energías estancadas antes de cualquier meditación u oración solemne.",
    element: "Aire / Tierra",
  },
  {
    name: "Albahaca (Ocimum basilicum)",
    popularName: "Hierba de la bruja y del amor noble",
    properties:
      "Aroma fresco y vivificante asociado a la prosperidad económica en los negocios familiares y la concordia amorosa en la pareja.",
    ritualUse:
      "Colocar macetas de albahaca fresca en comercios y cocinas para fomentar la fluidez financiera y la calidez en los vínculos personales.",
    element: "Fuego / Marte benéfico",
  },
  {
    name: "Laurel (Laurus nobilis)",
    popularName: "La corona del triunfo y la clarividencia",
    properties:
      "Árbol consagrado a Apolo en el Oráculo de Delfos. Representa la victoria ética sobre las pruebas de la vida, la protección y el don de la inspiración profética.",
    ritualUse:
      "Escribir un deseo honesto en una hoja seca de laurel y quemarla en el fuego sagrado; colocar hojas bajo la almohada para propiciar sueños lúcidos.",
    element: "Fuego / Sol",
  },
  {
    name: "Lavanda (Lavandula angustifolia)",
    popularName: "La flor de la serenidad angelical",
    properties:
      "Flores lilas de fragancia reconfortante que sosiega la mente alterada, ahuyenta el insomnio provocado por pesadillas y armoniza desacuerdos en el hogar.",
    ritualUse:
      "Rociar agua destilada de lavanda sobre las sábanas; llevar saquitos de flores secas en el pecho para calmar crisis de angustia o estrés.",
    element: "Aire / Mercurio",
  },
  {
    name: "Tomillo (Thymus vulgaris)",
    popularName: "El dador de valor y purificación",
    properties:
      "Hierba silvestre que infunde audacia y fortaleza espiritual frente a momentos de temor o indecisión. Los antiguos griegos la quemaban en sus templos para invocar el valor.",
    ritualUse:
      "Sahumar habitaciones donde ha habido enfermos para renovar el aliento vital; baños de vapor reconfortantes para disipar miedos infundados.",
    element: "Aire / Venus",
  },
  {
    name: "Ajo (Allium sativum)",
    popularName: "El escudo arcaico contra la negatividad",
    properties:
      "Bulbo milenario cultivado en Egipto, Grecia y Roma. Físicamente es un poderoso antibiótico natural; esotéricamente absorbe la envidia y el parasitismo psíquico.",
    ritualUse:
      "Colgar una trenza de ajos en la cocina; cuando los dientes se secan y ahuecan, se desechan a la tierra agradeciendo la absorción de cargas densas.",
    element: "Fuego / Marte",
  },
  {
    name: "Muérdago (Viscum album)",
    popularName: "La rama dorada de los druidas celtas",
    properties:
      "Planta aérea que crece sobre las ramas del roble sagrado sin tocar el suelo terrenal. Para los druidas era el remedio universal (All-Heal) y emblema de inmortalidad.",
    ritualUse:
      "Colgar ramas de muérdago sobre el dintel de la puerta en Solsticio de Invierno para bendecir a todo aquel que cruce el umbral.",
    element: "Éter / Agua",
  },
  {
    name: "Verbena (Verbena officinalis)",
    popularName: "La hierba sagrada de los encantamientos",
    properties:
      "Reverenciada por sacerdotes romanos y druidas británicos por igual para purificar altares sagrados. Atrae la paz, suaviza caracteres ásperos y protege contra engaños.",
    ritualUse:
      "Lavar la superficie del altar de madera con infusión de verbena fresca antes de ceremonias importantes.",
    element: "Tierra / Venus",
  },
];
