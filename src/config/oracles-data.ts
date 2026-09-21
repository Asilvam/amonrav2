/**
 * Modelos de datos y registros canónicos de ORÁCULOS para Amonra.
 * Migrado con fidelidad al 100% desde los 5 archivos históricos de backup-original/public_html/amonra.cl/
 * (index_oraculos.htm, oraculos.html, oraculos_delfos.htm, oraculos_iching.htm, oraculos_tipos.htm).
 */

export interface OracleIntro {
  title: string;
  subtitle: string;
  centralThesis: string;
  foundationalText: string;
  motto: string;
  jungQuote: {
    text: string;
    author: string;
    source: string;
  };
}

export interface OracleHistoricalStage {
  period: string;
  civilization: string;
  title: string;
  description: string;
  legacy: string;
}

export interface DelphiMaxim {
  greek: string;
  transliteration: string;
  translation: string;
  meaning: string;
  philosophicalContext: string;
}

export interface TrigramBagua {
  id: string;
  chineseName: string;
  pinyin: string;
  symbol: string;
  binaryLines: ("solid" | "broken")[];
  element: string;
  nature: string;
  attribute: string;
  familyRole: string;
  cardinalDirection: string;
  description: string;
}

export interface CoinMethodRule {
  sum: number;
  composition: string;
  lineType: string;
  meaning: string;
  mutatesTo: string;
  symbolRepresentation: string;
}

export interface OracleTypeMethod {
  id: string;
  name: string;
  traditionalName: string;
  origin: string;
  element: string;
  description: string;
  procedure: string[];
  virtue: string;
}

export const oraclesIntro: OracleIntro = {
  title: "Los Oráculos: Espejos del Destino y Diálogo Interior",
  subtitle:
    "De la Pitonisa de Delfos y el I Ching milenario a las mancias tradicionales de sabiduría",
  centralThesis:
    "Un oráculo no es un veredicto fatalista ni una sentencia inmutable: es un puente sagrado entre la conciencia humana y las leyes universales. Una invitación iniciática a escuchar la voz profunda del ser para transformar la incertidumbre en discernimiento y acción lúcida.",
  foundationalText:
    "Etimológicamente, la palabra «oráculo» proviene del latín oraculum (del verbo orare, hablar): significa «la palabra viva». Es la Divinidad y el propio Maestro Interior hablando al alma en un espacio consagrado de comunión y respeto. En la doctrina de Amonra, quien consulta un oráculo asume que el destino no está escrito en piedra, sino que se teje con cada elección consciente.",
  motto:
    "«Conócete a ti mismo y conocerás al Universo y a los Dioses» — Precepto délfico del Templo de Apolo.",
  jungQuote: {
    text: "«Durante más de treinta años me he interesado por esta técnica oracular o método para explorar el inconsciente, pues me pareció de una importancia poco común... En el I Ching, el espíritu de la naturaleza se expresa mediante el principio de sincronicidad: una coincidencia significativa entre un estado psíquico interior y un acontecimiento exterior objetivo.»",
    author: "Carl Gustav Jung",
    source: "Prólogo a la edición de Richard Wilhelm del I Ching (1949)",
  },
};

export const oraclesHistory: OracleHistoricalStage[] = [
  {
    period: "Prehistoria y Neolítico",
    civilization: "Chamanismo Tribal",
    title: "El Susurro de la Naturaleza y los Primeros Videntes",
    description:
      "En las primeras comunidades recolectoras y cazadoras, los chamanes y curanderas eran los guardianes de las plantas curativas, los sueños premonitorios y los signos climáticos. Consultaban las corrientes de los ríos, el vuelo de las aves y las piedras sagradas para orientar la supervivencia del clan.",
    legacy:
      "La noción de que la naturaleza entera posee un alma comunicante y responde al corazón humano reverente.",
  },
  {
    period: "Siglos XXIII a VII a.C.",
    civilization: "Mesopotamia (Babilonia y Caldea)",
    title: "Sacerdotes de Shamash y Adad: La Astrología Oracular",
    description:
      "En los zigurats babilónicos, sacerdotes especializados interpretaban los mensajes de Shamash (el dios solar de la justicia) y Adad (el señor de las tempestades). Desarrollaron la observación sistemática de los astros y el vuelo de los pájaros, sentando las bases de la astrología horoscópica y las predicciones estatales.",
    legacy:
      "La correlación matemática entre el movimiento celeste y las vicisitudes del destino terrenal.",
  },
  {
    period: "Siglos VIII a.C. a IV d.C.",
    civilization: "Grecia Clásica y Helenística",
    title: "Delfos, Dodona y el Templo de Apolo",
    description:
      "Grecia elevó la consulta oracular a institución civil y espiritual suprema. Reyes, legisladores como Licurgo y Solón, generales y filósofos jamás emprendían batallas, fundaciones coloniales o reformas políticas sin enviar embajadas a Delfos para consultar a la Pitia sobre el trípode sagrado.",
    legacy:
      "Los preceptos morales de los Siete Sabios inscritos en el pronaos, fundando la ética del autoconocimiento.",
  },
  {
    period: "Dinastías Zhou, Han y Song",
    civilization: "China Imperial",
    title: "El I Ching: El Libro de las Mutaciones",
    description:
      "A partir de los ocho trigramas primitivos atribuidos al mítico soberano Fu Xi, el rey Wen y el duque de Zhou compusieron los 64 hexagramas con sus textos oraculares. Posteriormente, Confucio y sus discípulos añadieron los comentarios filosóficos («Las Diez Alas»), convirtiéndolo en el texto madre de la civilización china.",
    legacy:
      "La comprensión dialéctica del Yin y el Yang y la mutación constante como ley cósmica suprema.",
  },
  {
    period: "Año 314 d.C. en adelante",
    civilization: "Imperio Romano Tardío",
    title: "Cierre de Santuarios y Pérdida de la Tradición",
    description:
      "Con la oficialización del cristianismo bajo Constantino y los decretos de Teodosio a finales del siglo IV, los templos oraculares fueron clausurados y sus prácticas perseguidas. Se impuso el monopolio clerical de la intermediación con lo divino, relegando las antiguas mancias a la marginalidad.",
    legacy:
      "La dispersión clandestina de los saberes oraculares que más tarde renacerían en el Renacimiento y la modernidad.",
  },
  {
    period: "Época Contemporánea",
    civilization: "Pensamiento Psicológico e Introspectivo",
    title: "El Renacimiento del Oráculo como Espejo Psíquico",
    description:
      "Hoy los oráculos viven su época de mayor libertad, estudio y madurez. Gracias al psicoanálisis de Carl Jung y la psicología transpersonal, los métodos oraculares ya no se leen como sentencias supersticiosas, sino como herramientas de introspección, sincronicidad y desbloqueo emocional.",
    legacy:
      "La soberanía absoluta del consultante: el oráculo ilumina, pero el ser humano decide.",
  },
];

export const delphiMaxims: DelphiMaxim[] = [
  {
    greek: "Γνῶθι σεαυτόν",
    transliteration: "Gnothi Seauton",
    translation: "Conócete a ti mismo",
    meaning:
      "El fundamento supremo de toda sabiduría. Ningún oráculo exterior puede orientar a quien ignora sus propias luces, sombras, temores y motivaciones profundas.",
    philosophicalContext:
      "Adoptado por Sócrates como el eje rector de su filosofía moral. Inscrito en letras de oro en el dintel del templo de Apolo.",
  },
  {
    greek: "Μηδὲν ἄγαν",
    transliteration: "Meden Agan",
    translation: "Nada en exceso (Moderación ante todo)",
    meaning:
      "La virtud del equilibrio y la mesura. Todo extremo, incluso en lo virtuoso, genera su propia polaridad de desequilibrio y autodestrucción.",
    philosophicalContext:
      "Atribuido a Solón de Atenas o a Quilón de Esparta; principio rector de la sophrosyne (la prudencia y serenidad griega).",
  },
  {
    greek: "Ἐγγύα πάρα δ' ἄτη",
    transliteration: "Engya para d' ate",
    translation: "La fianza acarrea la ruina (Asume tu responsabilidad)",
    meaning:
      "No asumas compromisos precipitados ni comprometas tu palabra con ligereza. Responder ciegamente por otro sin discernimiento destruye la propia paz.",
    philosophicalContext:
      "Atribuido a Tales de Mileto; advertencia jurídica y espiritual sobre el compromiso consciente y los límites personales.",
  },
];

export const delphiSanctuary = {
  location: "Falda meridional del monte Parnaso, Fócida, Grecia central.",
  deity:
    "Apolo Pitio (vencedor de la serpiente Pitón, personificación de la luz, el orden y la armonía profética).",
  springs: [
    {
      name: "Fuente Castalia",
      role: "Fuente sagrada rodeada de laureles donde los peregrinos y la Pitia se purificaban con baños rituales antes de ingresar al recinto.",
    },
    {
      name: "Fuente Casotis",
      role: "Manantial subterráneo cuyas aguas bebía la sacerdotisa antes de descender al ádyton para recibir el influjo divino.",
    },
  ],
  pythiaRite: [
    {
      step: 1,
      title: "Purificación y Ayuno",
      description:
        "La sacerdotisa ayunaba durante tres días, se bañaba en las frías aguas de Castalia y vestía túnicas sencillas de doncella sin adornos opulentos.",
    },
    {
      step: 2,
      title: "La Prueba de la Cabra",
      description:
        "Los sacerdotes rociaban una cabra consagrada con agua helada. Si el animal temblaba desde los cascos hasta los cuernos sin emitir quejido, Apolo manifestaba su agrado para conceder el oráculo.",
    },
    {
      step: 3,
      title: "El Trance en el Ádyton",
      description:
        "La Pitia descendía a la cámara subterránea más secreta del templo (ádyton), se sentaba sobre el trípode de bronce y oro encima de una grieta geológica por donde manaban vapores aromáticos (pneuma), sostenía una rama de laurel y entraba en comunión extática.",
    },
    {
      step: 4,
      title: "Versificación Sacerdotal",
      description:
        "Los profetas y sacerdotes recogían las palabras crípticas, exclamaciones y cánticos emitidos por la sacerdotisa en trance, componiendo una respuesta en elegantes hexámetros griegos para el consultante.",
    },
  ],
  historicalNote:
    "El oráculo de Delfos llegó a ser el verdadero ombligo del mundo clásico (el ónfalo sagrado). Ciudades enteras enviaban delegaciones antes de promulgar constituciones o fundar ciudades en el sur de Italia (Magna Grecia) y Sicilia.",
};

export const ichingTrigrams: TrigramBagua[] = [
  {
    id: "qian",
    chineseName: "乾",
    pinyin: "Qián",
    symbol: "☰",
    binaryLines: ["solid", "solid", "solid"],
    element: "Cielo (Metal)",
    nature: "Lo Creativo",
    attribute: "Fuerza y Poder Generador",
    familyRole: "El Padre",
    cardinalDirection: "Noroeste",
    description:
      "Tres líneas continuas que representan la energía cósmica pura en su máxima potencia luminosa. Fuerza activa, constancia, perseverancia e iniciativa creadora.",
  },
  {
    id: "kun",
    chineseName: "坤",
    pinyin: "Kūn",
    symbol: "☷",
    binaryLines: ["broken", "broken", "broken"],
    element: "Tierra",
    nature: "Lo Receptivo",
    attribute: "Entrega y Devoción Fértil",
    familyRole: "La Madre",
    cardinalDirection: "Suroeste",
    description:
      "Tres líneas quebradas que encarnan la receptividad pura, la docilidad creadora de la Tierra que acoge la semilla y la nutre sin imponer su ego.",
  },
  {
    id: "zhen",
    chineseName: "震",
    pinyin: "Zhèn",
    symbol: "☳",
    binaryLines: ["broken", "broken", "solid"],
    element: "Trueno (Madera)",
    nature: "Lo Suscitante",
    attribute: "Movimiento y Despertar",
    familyRole: "El Primer Hijo",
    cardinalDirection: "Este",
    description:
      "Una línea continua bajo dos líneas partidas: la energía que brota impetuosa desde las profundidades telúricas, sacudiendo la inercia con el estrépito de la vida.",
  },
  {
    id: "kan",
    chineseName: "坎",
    pinyin: "Kǎn",
    symbol: "☵",
    binaryLines: ["broken", "solid", "broken"],
    element: "Agua",
    nature: "Lo Abismal",
    attribute: "Peligro y Profundidad",
    familyRole: "El Segundo Hijo",
    cardinalDirection: "Norte",
    description:
      "Una línea sólida aprisionada entre dos líneas rotas: el agua que fluye sin cesar a través de los abismos, enseñando a no temer las corrientes profundas del alma.",
  },
  {
    id: "gen",
    chineseName: "艮",
    pinyin: "Gèn",
    symbol: "☶",
    binaryLines: ["solid", "broken", "broken"],
    element: "Montaña (Tierra)",
    nature: "El Aquietamiento",
    attribute: "Reposo y Firmeza Inquebrantable",
    familyRole: "El Tercer Hijo",
    cardinalDirection: "Noreste",
    description:
      "Una línea continua en la cúspide sobre dos líneas quebradas: la montaña que detiene el paso para invitar a la contemplación y a la quietud interior.",
  },
  {
    id: "xun",
    chineseName: "巽",
    pinyin: "Xùn",
    symbol: "☴",
    binaryLines: ["solid", "solid", "broken"],
    element: "Viento / Madera",
    nature: "Lo Suave (La Penetración)",
    attribute: "Flexibilidad y Persistencia",
    familyRole: "La Primera Hija",
    cardinalDirection: "Sureste",
    description:
      "Una línea quebrada en la base bajo dos líneas continuas: el viento que penetra imperceptiblemente en todas las hendiduras con suave constancia.",
  },
  {
    id: "li",
    chineseName: "離",
    pinyin: "Lí",
    symbol: "☲",
    binaryLines: ["solid", "broken", "solid"],
    element: "Fuego",
    nature: "Lo Adherente",
    attribute: "Claridad, Brillo y Conciencia",
    familyRole: "La Segunda Hija",
    cardinalDirection: "Sur",
    description:
      "El fuego que ilumina la oscuridad pero necesita de un combustible virtuoso para no extinguirse; representa el discernimiento lúcido del intelecto.",
  },
  {
    id: "dui",
    chineseName: "兌",
    pinyin: "Duì",
    symbol: "☱",
    binaryLines: ["broken", "solid", "solid"],
    element: "Lago (Metal)",
    nature: "Lo Sereno",
    attribute: "Alegría y Regocijo Compartido",
    familyRole: "La Tercera Hija",
    cardinalDirection: "Oeste",
    description:
      "Una línea quebrada en la superficie de dos líneas firmes: el espejo de agua plácida que refresca a los seres vivos y promueve la fraternidad alegre.",
  },
];

export const ichingCoinRules: CoinMethodRule[] = [
  {
    sum: 6,
    composition: "3 Caras (2 + 2 + 2)",
    lineType: "Yin Viejo (Mutante)",
    meaning:
      "Línea partida de Yin extremo que ha alcanzado su plenitud y muta necesariamente en Yang continuo.",
    mutatesTo: "Línea Yang firme (—)",
    symbolRepresentation: "- - (x)",
  },
  {
    sum: 7,
    composition: "2 Caras + 1 Cruz (2 + 2 + 3)",
    lineType: "Yang Joven (Fijo)",
    meaning:
      "Línea continua de Yang en desarrollo armónico; permanece inmutable sin transformación.",
    mutatesTo: "Permanece fija (—)",
    symbolRepresentation: "———",
  },
  {
    sum: 8,
    composition: "1 Cara + 2 Cruces (2 + 3 + 3)",
    lineType: "Yin Joven (Fijo)",
    meaning:
      "Línea partida de Yin en crecimiento natural; permanece inmutable sin mutación.",
    mutatesTo: "Permanece fija (- -)",
    symbolRepresentation: "- -",
  },
  {
    sum: 9,
    composition: "3 Cruces (3 + 3 + 3)",
    lineType: "Yang Viejo (Mutante)",
    meaning:
      "Línea continua de Yang extremo colmada de calor que transmuta en Yin partido receptivo.",
    mutatesTo: "Línea Yin partida (- -)",
    symbolRepresentation: "——— (o)",
  },
];

export const oracleMethods: OracleTypeMethod[] = [
  {
    id: "cleromancia",
    name: "Cleromancia Tradicional",
    traditionalName: "El Juicio de las Suertes",
    origin: "Grecia arcaica, Roma y el antiguo Israel (Urim y Tumim)",
    element: "Tierra y Aire",
    description:
      "La extracción o lanzamiento ritual de suertes: guijarros pulidos, habas blancas y negras marcadas con signos sagrados, o tabillas de madera arrojadas sobre una tela blanca consagrada.",
    procedure: [
      "Se dispone una superficie circular delimitada por un cordón dorado o círculo de tiza.",
      "El consultante formula su duda en quietud mental y arroja suavemente tres piedras o habas.",
      "La distancia respecto al centro y la polaridad blanco/negro de las piezas revela la respuesta y el curso energético del asunto.",
    ],
    virtue:
      "Simplicidad contundente para desatascar dilemas binarios o reconocer encrucijadas de acción inmediata.",
  },
  {
    id: "astragalomancia",
    name: "Astragalomancia y Dados Sagrados",
    traditionalName: "Los Huesos del Destino",
    origin: "Egipto faraónico, Caldea y santuarios de la Grecia antigua",
    element: "Fuego y Éter",
    description:
      "Lectura mediante el lanzamiento de astrágalos (huesos del tarso de carnero tallados con cifras) o dados de madera noble, hueso y piedra volcánica grabados con puntos rituales.",
    procedure: [
      "Se lanzan tres dados cúbicos tradicionales de seis caras dentro de un plato de cerámica o cuenco de bronce consagrado.",
      "La suma numérica de los tres dados (entre 3 y 18) y sus combinaciones geométricas se correlaciona con tablas poéticas de consejo.",
      "El número 18 (plenitud solar) y el número 3 (humildad del comienzo) delimitan los extremos de la rueda del azar divino.",
    ],
    virtue:
      "Rigor aritmético que une la vibración de los números sagrados con la sincronicidad del lanzamiento.",
  },
  {
    id: "litomancia",
    name: "Litomancia (Oráculo de Gemas)",
    traditionalName: "La Voz de los Cristales",
    origin: "Chamanismo celta, nórdico y de los pueblos andinos",
    element: "Tierra y Agua",
    description:
      "Adivinación mediante la interacción visual y geométrica de trece piedras y cristales semipreciosos arrojados sobre un diagrama astrológico o mandala de cuatro cuadrantes.",
    procedure: [
      "Se eligen trece minerales representativos (cuarzo cristal, amatista, jaspe rojo, ágata, obsidiana, citrino, lapislázuli, etc.).",
      "Se sostienen entre las manos mientras se respira serenamente sobre ellas para impregnarlas de la vibración del consultante.",
      "Se lanzan sobre el mandala: las gemas más cercanas al centro representan las fuerzas nucleares activas; las periféricas, los influjos latentes o superados.",
    ],
    virtue:
      "Sensibilidad cromática y táctil que armoniza la vibración del aura con las sugerencias oraculares.",
  },
  {
    id: "bibliomancia",
    name: "Bibliomancia Espiritual",
    traditionalName: "La Palabra Revelada",
    origin: "Alejandría, templos gnósticos y tradición sufí y mística",
    element: "Aire y Luz",
    description:
      "Apertura espontánea de un libro de alta vibración espiritual (el I Ching, la Biblia, los Diálogos de Platón, la Eneida, poemas de Rumi o textos de sabiduría) en un momento de búsqueda de discernimiento.",
    procedure: [
      "El consultante entra en estado de oración o recogimiento silencioso sosteniendo el libro cerrado sobre su pecho.",
      "Con los ojos cerrados, abre el libro al azar por cualquier página y desliza el dedo índice de la mano izquierda hasta detenerse.",
      "El párrafo o verso señalado se lee como una respuesta directa y simbólica al estado interior de la persona.",
    ],
    virtue:
      "Diálogo íntimo y directo con la palabra escrita a través de la sincronicidad de la atención plena.",
  },
];

export const oracleEthics = [
  {
    title: "1. Soberanía personal y no dependencia",
    detail:
      "Ningún oráculo debe sustituir tu propia capacidad de pensar, sentir y decidir. El oráculo es una linterna que alumbra la senda en la penumbra; pero eres tú quien debe poner un pie delante del otro y caminar.",
  },
  {
    title: "2. Formulación con foco constructivo",
    detail:
      "Evita preguntas que busquen eludir la propia responsabilidad («¿Me va a pasar tal cosa?»). Pregunta mejor: «¿Qué actitud debo cultivar ante esta situación para actuar con rectitud y paz?».",
  },
  {
    title: "3. Respeto al tiempo y a la maduración de los procesos",
    detail:
      "No repitas la misma pregunta compulsivamente cuando una respuesta no complazca a tu ego. Quien insiste en consultar lo mismo en cinco minutos aturde su intuición y degrada el arte sagrado en mero juego nervioso.",
  },
  {
    title: "4. Discernimiento ético y respeto al libre albedrío",
    detail:
      "Los oráculos de luz jamás se emplean para espiar la intimidad de terceros, manipular voluntades ajenas o buscar daño. Toda energía proyectada con mezquindad retorna amplificada hacia quien la originó.",
  },
];
