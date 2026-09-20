/**
 * Modelos de datos y registros canónicos de RUNAS para Amonra.
 * Integrado a partir de los 32 archivos históricos de backup-original/public_html/amonra.cl/
 * (index_runas.htm, runas_origen.htm, runas_caracteres.htm, runas_preparacion.htm, runas_tecnicas.htm, runas_tecnicas2.htm, runa1.htm a runa25.htm).
 */

export interface RuneCard {
  id: string;
  number: number;
  name: string;
  transliteration: string;
  meaning: string;
  aett: "Aett de Freyr" | "Aett de Heimdall" | "Aett de Tyr" | "Runa de Odín";
  archetype: string;
  keywords: string[];
  symbolism: string;
  upright: string;
  inverted: string;
  counsel: string;
  reversible: boolean;
}

export interface RuneAett {
  id: string;
  name: string;
  ruler: string;
  title: string;
  description: string;
  spiritualFocus: string;
  runesCount: number;
  runeNumbers: number[];
}

export interface RuneSpread {
  id: string;
  name: string;
  subtitle: string;
  runesCount: number;
  usage: string;
  instructions: string[];
  positions: {
    position: number;
    name: string;
    description: string;
  }[];
  advice: string;
}

export interface RuneIntro {
  title: string;
  subtitle: string;
  centralThesis: string;
  foundationalText: string;
  motto: string;
  havamalQuote: {
    verse: string;
    text: string;
    source: string;
  };
}

export const runesIntro: RuneIntro = {
  title: "Las Runas: Sabiduría Nórdica y Oráculo de Odín",
  subtitle:
    "El susurro sagrado de los 25 glifos nórdicos, los tres Aettir y el sendero del Guerrero Espiritual",
  centralThesis:
    "Las Runas no constituyen un mero sistema de adivinación del porvenir, sino un alfabeto sagrado de energías vivas y arquetípicas. Un puente iniciático entre la conciencia cotidiana y las fuerzas cósmicas del destino, donde cada signo actúa como un espejo del alma para la toma de decisiones lúcidas y la autorrealización personal.",
  foundationalText:
    "El término «Runa» deriva de la antigua raíz germánica run-, que significa susurro, secreto sagrado o misterio susurrado al oído. En la doctrina de Amonra, consultar las runas no persigue predecir un destino inexorable ni eludir la propia responsabilidad, sino ingresar en un diálogo reverente con las fuentes vivas del ser: «Me voy a comunicar, voy a escuchar, voy a recibir señales... y el oráculo responde».",
  motto:
    "«La diferencia siempre está en ti: El sabio gobierna sus estrellas y sus runas; el necio es arrastrado por ellas.»",
  havamalQuote: {
    verse: "Estrofas 138-139 del Hávamál (El Canto del Altísimo)",
    text: "«Sé que colgué de un árbol meciente nueve noches enteras, herido con lanza y consagrado a Odín, yo mismo a mí mismo ofrecido, de aquel árbol del cual nadie sabe de qué raíces brota. No me dieron pan ni de beber del cuerno; miré hacia lo hondo, tomé las runas, las tomé cantando, y caí de nuevo de allí.»",
    source: "Edda Poética Mayor (Rúnatal)",
  },
};

export const runesHistory = [
  {
    period: "Edad de Bronce y Neolítico",
    kind: "Orígenes Pétreos",
    title: "Petroglifos de Hallrisringnor y el Culto Solar",
    description:
      "La tradición esotérica relaciona las runas con antiguas incisiones rupestres y símbolos solares del norte de Europa. Esta asociación pertenece a una lectura mitológica posterior; no debe confundirse con una prueba de que las runas alfabéticas surgieran directamente de esos petroglifos.",
  },
  {
    period: "Siglos II a VIII d.C.",
    kind: "Período I — Futhark Antiguo",
    title: "El Futhark Canónico de 24 Caracteres",
    description:
      "El primer alfabeto rúnico completo reunía 24 caracteres organizados en tres familias o Aettir de 8 runas cada una. Su nombre deriva de los sonidos de sus primeras seis letras: Fehu, Uruz, Thurisaz, Ansuz, Raido y Kaunan. Fue utilizado en objetos portátiles y piedras conmemorativas en Noruega, Suecia, Dinamarca, Borgoña y los Balcanes.",
  },
  {
    period: "Siglos IX a XI d.C.",
    kind: "Período II y III — Época Vikinga",
    title: "Evolución Anglosajona y Futhark Joven",
    description:
      "En las islas británicas el alfabeto se expandió a 28 y 33 caracteres (Futhork anglosajón), mientras que en Escandinavia se simplificó a 16 caracteres (Futhark joven o nórdico). En las famosas piedras rúnicas de Gotland y Jelling se preservaron fórmulas de bendición, homenaje a los caídos y protección mágica de sepulcros.",
  },
  {
    period: "Tradición Contemporánea",
    kind: "El Guerrero Espiritual",
    title: "La Runa 25: Wyrd y el Destino Trascendente",
    description:
      "A finales del siglo XX, algunas escuelas de adivinación incorporaron la Runa en Blanco, asociándola con Odín o con el concepto germánico de Wyrd. Es una incorporación moderna de la práctica oracular y no forma parte del Futhark histórico de 24 caracteres.",
  },
];

export const runesAettir: RuneAett[] = [
  {
    id: "aett-freyr",
    name: "Aett de Freyr (y Freyja)",
    ruler: "Freyr y Freyja (Dioses Vanir de la Fertilidad)",
    title: "El Mundo Material, la Fuerza Primordial y los Comienzos",
    description:
      "Primer tercio del Futhark. Representa la creación terrenal, la energía elemental pura, la nutrición básica, la fuerza indomable de la naturaleza, el aliento de los dioses y el gozo de la existencia compartida.",
    spiritualFocus:
      "Establecer cimientos sólidos en el plano físico, honrar el cuerpo y canalizar la fuerza vital sin dejarse arrastrar por el ego.",
    runesCount: 8,
    runeNumbers: [2, 3, 5, 11, 12, 14, 20, 21],
  },
  {
    id: "aett-heimdall",
    name: "Aett de Heimdall",
    ruler: "Heimdall (El Guardián del Bifröst)",
    title: "Las Fuerzas del Cosmos, la Prueba Iniciática y el Invierno",
    description:
      "Segundo tercio del Futhark. Describe la confrontación con el destino exterior, las tormentas de granizo que rompen las estructuras caducas, el frío helado que impone paciencia, el eje sagrado del Yggdrasil y la iluminación victoriosa del Sol.",
    spiritualFocus:
      "Forjar la paciencia, aceptar los límites temporales como crisol de maduración y sostener la luz en mitad de la noche oscura del alma.",
    runesCount: 8,
    runeNumbers: [6, 7, 9, 10, 13, 19, 23, 24],
  },
  {
    id: "aett-tyr",
    name: "Aett de Tyr",
    ruler: "Tyr (Dios del Valor Heroico y la Rectitud Cósmica)",
    title: "El Guerrero Espiritual, la Comunidad y la Trascendencia",
    description:
      "Tercer tercio del Futhark. Aborda la evolución del individuo en sociedad: el sacrificio noble por el bien colectivo, el renacimiento continuo de la primavera interior, la fidelidad en el compañerismo, la navegación de las aguas inconscientes y el florecimiento del hogar ancestral.",
    spiritualFocus:
      "Desarrollar el recto discernimiento, actuar con justicia insobornable y consagrar la propia vida al servicio de la verdad trascendente.",
    runesCount: 8,
    runeNumbers: [1, 4, 8, 15, 16, 17, 18, 22],
  },
  {
    id: "runa-odin",
    name: "Runa de Odín (Wyrd)",
    ruler: "Odín el Padre de Todo y las Tres Nornas",
    title: "Lo Incognoscible, el Vacío Creador y la Confianza Total",
    description:
      "La runa en blanco que corona el oráculo. No posee glifo grabado, pues encarna la matriz invisible de donde nacen y adonde regresan todos los destinos. Es la invitación a soltar el control personal y arrojarse con fe al río de la Existencia.",
    spiritualFocus:
      "Rendición voluntaria ante lo trascendente, disolución del miedo al fracaso y alineación con el propósito kármico superior.",
    runesCount: 1,
    runeNumbers: [25],
  },
];

export const runesConsecration = {
  title: "Preparación del Espacio e Interrogación al Oráculo",
  subtitle: "El Canto Rúnico de Odín y las Tres Advertencias Sagradas",
  intro:
    "El oráculo rúnico no responde a la curiosidad banal ni a la prisa mecánica. Exige un estado de veneración interior, sosiego mental y respeto sagrado ante los símbolos que forjaron la cosmogonía de los pueblos boreales.",
  ritualSteps: [
    {
      title: "Purificación del Espacio Sagrado",
      description:
        "Se recomienda encender una vela consagrada, sahumear el ambiente con incienso puro (salvia, cedro, romero o enebro) y utilizar respiraciones profundas o el pulso monótono de un tambor para serenar las ondas cerebrales.",
    },
    {
      title: "La Invocación Silenciosa",
      description:
        "Se formula mentalmente una plegaria sincera a la Divinidad interior o a los Guías Espirituales, delimitando la consulta con absoluta transparencia para evitar confusiones.",
    },
    {
      title: "Talla y Consagración Elemental",
      description:
        "Si elaboras tus propias runas, recolecta ramas caídas (roble, fresno, tejo o manzano) o piedras de curso de agua vivo. Graba el glifo con veneración y tíñelo tradicionalmente con ocre o tinte vegetal rojo para otorgarle el soplo vital (önd).",
    },
  ],
  odinChant: {
    title: "El Canto Rúnico de Odín",
    learningCalls: [
      {
        call: "Aprende a marcarlas",
        meaning:
          "Talla con pulso firme y concentración sagrada el glifo en el soporte material.",
      },
      {
        call: "Aprende a leerlas",
        meaning:
          "Interpreta el mensaje objetivo del símbolo sin deformarlo según tus temores o apetencias del ego.",
      },
      {
        call: "Aprende a colorearlas",
        meaning:
          "Otorga vibración e intensidad viva a las incisiones para consagrarlas al espíritu.",
      },
      {
        call: "Aprende a evocarlas",
        meaning:
          "Aprende a invocar su presencia en la meditación cuando requieras su arquetipo protector.",
      },
      {
        call: "Aprende a dispersarlas",
        meaning:
          "Libéralas sobre el paño de lectura con ligereza y regrésalas a su bolsa con gratitud reverente.",
      },
    ],
    warnings: [
      {
        warning: "Es mejor no pedir, antes que prometer demasiado.",
        explanation:
          "No comprometas votos o promesas impulsivas que luego no sostendrás con tu conducta.",
      },
      {
        warning: "Un presente requiere otro a cambio.",
        explanation:
          "La ley universal de reciprocidad: toda revelación oracular exige de ti acción, gratitud y compromiso activo.",
      },
      {
        warning: "Mejor es no matar antes que causar demasiadas muertes.",
        explanation:
          "La advertencia contra la violencia, la revancha interior y la destrucción de la paz de otros.",
      },
    ],
    reflection:
      "«Es una advertencia que muy bien vale aún hoy en día: Todos quieren saber, pero muy pocos están dispuestos a aprender. Todos quieren tener, pocos están dispuestos a dar.»",
  },
};

export const runesSpreads: RuneSpread[] = [
  {
    id: "runa-odin",
    name: "1. La Runa de Odín",
    subtitle: "El oráculo de extracción única para respuesta inmediata",
    runesCount: 1,
    usage:
      "Para orientación rápida al iniciar el día o resolver una duda concreta que requiere un principio rector claro.",
    instructions: [
      "Centra tu mente en silencio, formula tu consulta en una frase nítida y remueve las runas dentro de la bolsa.",
      "Extrae una sola runa con la mano izquierda y colócala derecha frente a ti sobre el paño de consulta.",
    ],
    positions: [
      {
        position: 1,
        name: "La Runa Única",
        description:
          "Condiciones presentes, actitud requerida y núcleo de la resolución que el oráculo aconseja adoptar.",
      },
    ],
    advice:
      "No busques segundas opiniones de inmediato: medita en profundidad durante todo el día en el mensaje de esta única runa.",
  },
  {
    id: "tres-runas-nornas",
    name: "2. La Tirada de las Tres Nornas",
    subtitle: "El método universal de pasado, acción presente y futuro",
    runesCount: 3,
    usage:
      "El método clásico por excelencia para analizar cualquier conflicto vital y vislumbrar el camino de acción correcto.",
    instructions: [
      "Con la situación muy clara en la mente, extrae 3 runas una por una de la bolsa.",
      "Dispónlas sobre el paño de lectura de derecha a izquierda por orden de aparición.",
      "La interpretación se realiza comenzando por la primera runa a la derecha.",
    ],
    positions: [
      {
        position: 1,
        name: "Primera Runa (Derecha — La Situación Actual)",
        description:
          "Se refiere a la situación presente tal como está configurada en este momento; el punto de partida real.",
      },
      {
        position: 2,
        name: "Segunda Runa (Centro — La Acción Aconsejada)",
        description:
          "Sugiere lo que debes hacer, la actitud a adoptar y la energía que debes movilizar.",
      },
      {
        position: 3,
        name: "Tercera Runa (Izquierda — El Porvenir)",
        description:
          "Indica lo que vendrá; el desenlace natural que madurará si aplicas la acción recomendada.",
      },
    ],
    advice:
      "Observa la relación entre la segunda y la tercera runa: el futuro es la consecuencia directa de cómo encares la acción central.",
  },
  {
    id: "tres-runas-desbloqueo",
    name: "3. Tirada de Desbloqueo y Claridad",
    subtitle:
      "Método para salir de crisis, confusión o estancamiento emocional",
    runesCount: 3,
    usage:
      "Especialmente recomendada cuando la persona se siente psicológicamente bloqueada y no percibe salida.",
    instructions: [
      "Realiza una respiración lenta y sosegada para disolver la angustia.",
      "Extrae 3 runas y ubícalas en línea horizontal.",
    ],
    positions: [
      {
        position: 1,
        name: "Runa 1 (Tú Ahora)",
        description:
          "Tu estado consciente e inconsciente en medio del bloqueo emocional o laboral.",
      },
      {
        position: 2,
        name: "Runa 2 (El Desafío)",
        description:
          "La raíz oculta que genera el obstáculo; aquello que te niegas a ver o que estás resistiendo.",
      },
      {
        position: 3,
        name: "Runa 3 (La Mejor Salida)",
        description:
          "La vía de liberación más elevada y constructiva para superar el atasco y renovar tu fuerza.",
      },
    ],
    advice:
      "Enfócate en la tercera runa como la puerta de luz que desactiva la tensión de la segunda.",
  },
  {
    id: "cruz-runica",
    name: "4. La Cruz Rúnica",
    subtitle: "El mapa integral de 6 posiciones más la 7ª Runa de Esencia",
    runesCount: 6,
    usage:
      "Para tener un cuadro profundo, panorámico y multidimensional de cualquier dilema vital complejo.",
    instructions: [
      "Se extraen 6 runas colocándolas en forma de cruz rúnica o céltica.",
      "Runa 1 al oeste (pasado), Runa 2 al centro (presente), Runa 3 al este (futuro), Runa 4 al sur (bases), Runa 5 al norte (desafíos) y Runa 6 en la cúspide (resultado).",
      "Si tras interpretarlas persiste una duda profunda, se reingresan las runas a la bolsa y se extrae una 7ª Runa de Esencia.",
    ],
    positions: [
      {
        position: 1,
        name: "Runa 1 (El Pasado)",
        description: "Desde dónde vienes; causas que originaron la situación.",
      },
      {
        position: 2,
        name: "Runa 2 (Tú Ahora)",
        description: "Tu estado personal y vibratorio en el momento presente.",
      },
      {
        position: 3,
        name: "Runa 3 (El Futuro)",
        description:
          "Hacia dónde se dirigen los acontecimientos a corto plazo.",
      },
      {
        position: 4,
        name: "Runa 4 (Las Bases)",
        description:
          "Cimientos inconscientes y aspectos del ser que no han salido a la luz.",
      },
      {
        position: 5,
        name: "Runa 5 (Los Desafíos)",
        description:
          "Fuerzas opuestas o aprendizajes difíciles que deberás superar.",
      },
      {
        position: 6,
        name: "Runa 6 (La Mejor Salida)",
        description:
          "El mejor desenlace posible que puedes cosechar mediante tu sabiduría.",
      },
    ],
    advice:
      "La 7ª runa opcional condensa la esencia trascendente de toda la tirada y disipa cualquier ambigüedad remanente.",
  },
  {
    id: "vidas-pasadas",
    name: "5. La Tirada de las Vidas Pasadas",
    subtitle: "Exploración kármica de encarnaciones y memoria del alma",
    runesCount: 5,
    usage:
      "Para personas interesadas en explorar las lecciones de vidas pasadas y comprender patrones kármicos recurrentes.",
    instructions: [
      "Es conveniente que el consultante esté sereno, tranquilo y relajado; no debe realizarse con prisa ni superficialidad.",
      "Se extraen una por una 5 runas de la bolsa alineándolas de izquierda a derecha.",
    ],
    positions: [
      {
        position: 1,
        name: "Runa 1 (Nacimiento y Niñez)",
        description:
          "Condiciones de ingreso al mundo y marcas tempranas de la vida actual.",
      },
      {
        position: 2,
        name: "Runa 2 (Situación Presente)",
        description:
          "Desafío nuclear y estado evolutivo de tu personalidad actual.",
      },
      {
        position: 3,
        name: "Runa 3 (El Futuro Inmediato)",
        description:
          "Consecución de metas y desenvolvimiento futuro en esta vida.",
      },
      {
        position: 4,
        name: "Runa 4 (Encarnación Pasada)",
        description:
          "Memoria del alma, profesión o conflicto no resuelto de la vida anterior.",
      },
      {
        position: 5,
        name: "Runa 5 (Futura Encarnación)",
        description:
          "La meta evolutiva y dirección hacia donde tu espíritu se proyecta en su sendero.",
      },
    ],
    advice:
      "Compara la Runa 4 con la Runa 2 para detectar si estás repitiendo un error pretérito o conquistando un aprendizaje postergado.",
  },
];

export const runesCatalog: RuneCard[] = [
  {
    id: "manaz",
    number: 1,
    name: "MANNAZ",
    transliteration: "M",
    meaning: "El Sí Mismo, El Yo, La Naturaleza Humana",
    aett: "Aett de Tyr",
    archetype: "Heimdall / La Esencia Humana en la Tierra",
    keywords: [
      "El Sí Mismo",
      "Humildad",
      "Guerrero Espiritual",
      "Claridad Interior",
    ],
    symbolism:
      'punto de partida de todo desarrollo espiritual es uno mismo. Esta runa simboliza el ferviente deseo de cambiar y éste es el momento preciso para hacerlo. Para esto, es imprescindible, en primer lugar, lograr una buena relación con uno mismo, porque desde ahí fluye toda buena relación con los demás y con la Existencia. "Permanece humilde", es el consejo del Oráculo. Se condescendiente, respetuoso, devoto y moderado, no importa cuan importante seas, de esta forma tu vida adquirirá la dirección adecuada, el camino correcto. Está implícito en esta runa que no te identifiques con el mundo en que vives. A pesar de esto, no te cierres, no seas prejuicioso, no seas estrecho de criterio. Siente los impulsos que fluyen desde la divinidad interior y exterior de ti. Reflexiona en esta frase: "Esfuérzate en vivir una vida ordinaria de una forma extraordinaria." Pon mucha atención en las cosas que te están pasando y concéntrate aún más en las que permanecen; esto es lo más importante ahora. Este es un momento de gran crecimiento y rectificación y como regla general, la rectificación viene antes de la evolución. No es el momento de buscar apoyo en los demás, ni buscar recompensas por lo realizado, sino hacer las cosas sólo por amor a ellas. Esto es más difícil para aquéllos que le dan más importancia a las metas que al proceso para alcanzarlas; para aquellos que se han olvidado de jugar por sólo el placer de hacerlo, más que por ganar. En esto consiste el secreto para vivir un verdadero presente. Si divides la runa del SER por la mitad, dentro encontrarás la runa de la alegría, este es el espejo de tu imagen, así es que vive alegremente la vida. Sin embargo, hay una sutil advertencia aquí sobre él cuidado que debes tener contigo mismo y sobre el equilibrio en tus acciones. "Nada en exceso", es la 2° frase escrita en la entrada del Templo de Delfos y el primer consejo dice: "Conócete a ti mismo". Con estas palabras comienza el alfabeto de las runas vikingas.',
    upright:
      'punto de partida de todo desarrollo espiritual es uno mismo. Esta runa simboliza el ferviente deseo de cambiar y éste es el momento preciso para hacerlo. Para esto, es imprescindible, en primer lugar, lograr una buena relación con uno mismo, porque desde ahí fluye toda buena relación con los demás y con la Existencia. "Permanece humilde", es el consejo del Oráculo. Se condescendiente, respetuoso, devoto y moderado, no importa cuan importante seas, de esta forma tu vida adquirirá la dirección adecuada, el camino correcto. Está implícito en esta runa que no te identifiques con el mundo en que vives. A pesar de esto, no te cierres, no seas prejuicioso, no seas estrecho de criterio. Siente los impulsos que fluyen desde la divinidad interior y exterior de ti. Reflexiona en esta frase: "Esfuérzate en vivir una vida ordinaria de una forma extraordinaria." Pon mucha atención en las cosas que te están pasando y concéntrate aún más en las que permanecen; esto es lo más importante ahora. Este es un momento de gran crecimiento y rectificación y como regla general, la rectificación viene antes de la evolución. No es el momento de buscar apoyo en los demás, ni buscar recompensas por lo realizado, sino hacer las cosas sólo por amor a ellas. Esto es más difícil para aquéllos que le dan más importancia a las metas que al proceso para alcanzarlas; para aquellos que se han olvidado de jugar por sólo el placer de hacerlo, más que por ganar. En esto consiste el secreto para vivir un verdadero presente. Si divides la runa del SER por la mitad, dentro encontrarás la runa de la alegría, este es el espejo de tu imagen, así es que vive alegremente la vida. Sin embargo, hay una sutil advertencia aquí sobre él cuidado que debes tener contigo mismo y sobre el equilibrio en tus acciones. "Nada en exceso", es la 2° frase escrita en la entrada del Templo de Delfos y el primer consejo dice: "Conócete a ti mismo". Con estas palabras comienza el alfabeto de las runas vikingas.',
    inverted:
      "Si te sientes bloqueado, esta runa te presiona para que te aceptes a ti mismo, para que te aclares, para que te admitas, para que te quieras y te cuides, con lo cual es posible liberar lo que está bloqueado. No te vuelques a los demás, sino que mira silenciosamente en tu interior y busca allí lo que está entorpeciendo tu evolución. No importa cual área de tu vida parezca estar bloqueada, detente y reconsidera, te darás cuenta que lo que te está entorpeciendo desde afuera, no es sino un pálido reflejo de lo que tú, hasta ahora, no has sido capaz de reconocer, que viene de tu interior. Otro consejo es: No te des importancia ni seas orgulloso. Tu desafío aquí es superar los matos hábitos del pasado y recuerda que en la vida espiritual uno siempre está en el comienzo. Lo siento tienes que instalar Quitcktime para escuchar la musica desde http://www.apple.com/es/quicktime/download/",
    counsel:
      "consejo del Oráculo. Se condescendiente, respetuoso, devoto y moderado, no importa cuan importante seas, de esta forma tu vida adquirirá la dirección adecuada, el camino correcto.",
    reversible: true,
  },
  {
    id: "gebo",
    number: 2,
    name: "GEBO",
    transliteration: "G",
    meaning: "Asociación, Un Regalo, Intercambio Sagrado",
    aett: "Aett de Freyr",
    archetype: "Gefion / El Don Sagrado y la Alianza",
    keywords: ["Unión", "Sociedad", "Libertad", "Generosidad"],
    symbolism:
      "una sociedad. Sin embargo, te advierte que no te dejes avasallar por esta unión. Una verdadera unión sólo puede tener éxito si cada una de las personas que la componen, conservan su propia individualidad. Este consejo se aplica en todos los niveles: en relaciones amorosas, negocios, en sociedades de todo tipo. También es particularmente apropiado, cuando entramos en sociedad con lo que llamamos nuestra conciencia superior o súper yo, es decir, entre nuestro consciente y el inconsciente de cada uno de nosotros. Pero lo mejor de todo, es cuando entramos en relación con lo DIVINO: Dios siempre entra en un plano de igualdad con cada uno de nosotros. GEBO la runa de la unión, no tiene un lado revés, esto significa que se nos ha otorgado el regalo de la libertad y de la libertad fluyen todos los regalos de la vida. Lo siento tienes que instalar Quitcktime para escuchar la musica desde http://www.apple.com/es/quicktime/download/",
    upright:
      "una sociedad. Sin embargo, te advierte que no te dejes avasallar por esta unión. Una verdadera unión sólo puede tener éxito si cada una de las personas que la componen, conservan su propia individualidad. Este consejo se aplica en todos los niveles: en relaciones amorosas, negocios, en sociedades de todo tipo. También es particularmente apropiado, cuando entramos en sociedad con lo que llamamos nuestra conciencia superior o súper yo, es decir, entre nuestro consciente y el inconsciente de cada uno de nosotros. Pero lo mejor de todo, es cuando entramos en relación con lo DIVINO: Dios siempre entra en un plano de igualdad con cada uno de nosotros. GEBO la runa de la unión, no tiene un lado revés, esto significa que se nos ha otorgado el regalo de la libertad y de la libertad fluyen todos los regalos de la vida. Lo siento tienes que instalar Quitcktime para escuchar la musica desde http://www.apple.com/es/quicktime/download/",
    inverted:
      "Esta runa es simétrica e inmutable; no posee posición invertida. Su poder arquetípico opera con igual pureza luminosa en cualquier sentido que aparezca en la tirada.",
    counsel:
      "consejo se aplica en todos los niveles: en relaciones amorosas, negocios, en sociedades de todo tipo.",
    reversible: false,
  },
  {
    id: "ansuz",
    number: 3,
    name: "ANSUZ",
    transliteration: "A",
    meaning: "Señales, Runa Mensajera, Inspiración Divina",
    aett: "Aett de Freyr",
    archetype: "Odín / La Palabra Creadora y el Aliento Divino",
    keywords: ["Mensajes", "Inspiración", "Sabiduría", "Señales"],
    symbolism:
      "sta es la primera de las 12 runas que componen el Ciclo de la transformación del SER que apuntan directamente en el mecanismo del propio cambio. El símbolo es: recibir mensajes, señales, regalos. A menudo, una oportuna advertencia puede significar un regalo. Cuando la runa mensajera trae un conocimiento sagrado, uno debe considerarse bendito. El mensaje puede ser: el desarrollo de una nueva vida. Las nuevas vidas siempre comienzan con nuevas conexiones, con vínculos sorprendentes que nos dirigen a nuevas sendas. Esfuérzate por estar especialmente alerta y consciente durante reuniones, visitas, encuentros casuales, especialmente con personas más sabias que tú. La runa ANSUZ te proporciona un nuevo sentido de solidaridad familiar además, Mercurio da protección a esta runa, a través de su asociación con el escandinavo Dios Loki, un extraño personaje mitológico guardador de las llaves del conocimiento. Mercurio acarrea mensajes entre los dioses y entre los dioses y la humanidad. Esta runa señala la urgencia de integrar causa, acciones o motivos inconscientes a un reconocimiento consciente. Eligiéndola te dice: la conexión con lo Divino está muy cerca de ti. ANSUZ es una señal para explorar las profundidades, las raíces de la vida y experimentar el manantial inagotable de lo Divino de tu propia naturaleza; recuerda que debes extraer de este manantial lo necesario para tu nutrición en primer lugar; luego, habrá más que suficiente para nutrir a los demás.",
    upright:
      "sta es la primera de las 12 runas que componen el Ciclo de la transformación del SER que apuntan directamente en el mecanismo del propio cambio. El símbolo es: recibir mensajes, señales, regalos. A menudo, una oportuna advertencia puede significar un regalo. Cuando la runa mensajera trae un conocimiento sagrado, uno debe considerarse bendito. El mensaje puede ser: el desarrollo de una nueva vida. Las nuevas vidas siempre comienzan con nuevas conexiones, con vínculos sorprendentes que nos dirigen a nuevas sendas. Esfuérzate por estar especialmente alerta y consciente durante reuniones, visitas, encuentros casuales, especialmente con personas más sabias que tú. La runa ANSUZ te proporciona un nuevo sentido de solidaridad familiar además, Mercurio da protección a esta runa, a través de su asociación con el escandinavo Dios Loki, un extraño personaje mitológico guardador de las llaves del conocimiento. Mercurio acarrea mensajes entre los dioses y entre los dioses y la humanidad. Esta runa señala la urgencia de integrar causa, acciones o motivos inconscientes a un reconocimiento consciente. Eligiéndola te dice: la conexión con lo Divino está muy cerca de ti. ANSUZ es una señal para explorar las profundidades, las raíces de la vida y experimentar el manantial inagotable de lo Divino de tu propia naturaleza; recuerda que debes extraer de este manantial lo necesario para tu nutrición en primer lugar; luego, habrá más que suficiente para nutrir a los demás.",
    inverted:
      'Probablemente estás preocupado por la mala comunicación con alguien, por la falta de claridad en asuntos del pasado o en una situación presente. También puede ser que te sientas inhibido para aceptar lo que se te ofrece, o bien, puedes estar deprimido por que te sientes inútil, porque has malgastado tu energía o por lo difícil del camino. Recuerda, sin embargo; que ésta es una de las runas del Ciclo y que lo que está sucediendo es necesario en tu proceso. Si el pozo de tu casa está obstruido, este es el momento de limpiarlo y renovarlo. Invertida Ansuz te está diciendo: "Toma en cuenta que la adversidad es también útil". Lo siento tienes que instalar Quitcktime para escuchar la musica desde http://www.apple.com/es/quicktime/download/',
    counsel:
      "Esfuérzate por estar especialmente alerta y consciente durante reuniones, visitas, encuentros casuales, especialmente con personas más sabias que tú.",
    reversible: true,
  },
  {
    id: "othila",
    number: 4,
    name: "OTHILA",
    transliteration: "O",
    meaning: "Separación, Retiro, Herencia Ancestral",
    aett: "Aett de Tyr",
    archetype: "Los Ancestros / La Casa y el Legado Espiritual",
    keywords: ["Herencia", "Retiro Consciente", "Raíces", "Renovación"],
    symbolism:
      'ste es un momento de caminos separados. Viejas pieles deben ser desprendidas, relaciones que se han estancado deben ser abandonadas. Cuando esta runa aparece en la tirada, se anuncia una limpieza general. OTHILA es una runa. de una severidad radical. Aquí tu acción es someterte y probablemente retirarte, sabiendo como y cuándo hacerlo y además, teniendo la firmeza para "llevarlo a cabo. Esta runa, por otra parte, está asociada con la propiedad, porque Othila es la runa de la adquisición y los beneficios, sin embargo, de los beneficios que recibas, la "herencia", puede derivarse de algo que debes abandonar. Esto puede ser particularmente difícil, debido a que lo que debes entregar o abandonar es parte de tu pasado, de tu herencia cultural, de tus raíces. Por esto, debes mirar muy de cerca lo que hasta ahora has reclamado orgullosamente como parte de tu derecho natural. Si es tu apego a tu posición social, al trabajo que haces o a tus creencias sobre tu propia naturaleza, la separación mencionada ahora, te liberará para que te conviertas auténticamente en lo que eres realmente.',
    upright:
      'ste es un momento de caminos separados. Viejas pieles deben ser desprendidas, relaciones que se han estancado deben ser abandonadas. Cuando esta runa aparece en la tirada, se anuncia una limpieza general. OTHILA es una runa. de una severidad radical. Aquí tu acción es someterte y probablemente retirarte, sabiendo como y cuándo hacerlo y además, teniendo la firmeza para "llevarlo a cabo. Esta runa, por otra parte, está asociada con la propiedad, porque Othila es la runa de la adquisición y los beneficios, sin embargo, de los beneficios que recibas, la "herencia", puede derivarse de algo que debes abandonar. Esto puede ser particularmente difícil, debido a que lo que debes entregar o abandonar es parte de tu pasado, de tu herencia cultural, de tus raíces. Por esto, debes mirar muy de cerca lo que hasta ahora has reclamado orgullosamente como parte de tu derecho natural. Si es tu apego a tu posición social, al trabajo que haces o a tus creencias sobre tu propia naturaleza, la separación mencionada ahora, te liberará para que te conviertas auténticamente en lo que eres realmente.',
    inverted:
      'La advertencia es que te esfuerces por no ser mecánico o inconsciente. No es el momento para estar atado a viejos condicionamientos o patrones anticuados. Pregúntate que sientes que es correcto para ti y actúa de acuerdo a la Luz que posees ahora en tu vida. Es posible que estés por iniciar un camino totalmente diferente; por esto, es necesario una total honestidad, de otro modo, a través de la negligencia o rehusando ver claramente en ti., puedes causar gran dolor a otros y tú te harás daño a ti mismo. En este momento, la actitud apropiada es dejarse fluir, evitando la rigidez. Espera que el Universo actúe. Cuando tú escoges esta runa. Recuerda: "Hacemos sin hacer y Lo obtenemos todo" . Lo siento tienes que instalar Quitcktime para escuchar la musica desde http://www.apple.com/es/quicktime/download/',
    counsel:
      "Si es tu apego a tu posición social, al trabajo que haces o a tus creencias sobre tu propia naturaleza, la separación mencionada ahora, te liberará para que te conviertas auténticamente en lo que eres realmente.",
    reversible: true,
  },
  {
    id: "uruz",
    number: 5,
    name: "URUZ",
    transliteration: "U",
    meaning: "Fuerza Vital, Potencia Primordial, El Uro Salvaje",
    aett: "Aett de Freyr",
    archetype: "El Uro / La Potencia Telúrica de la Naturaleza",
    keywords: ["Vitalidad", "Fuerza Interior", "Transmutación", "Valor"],
    symbolism:
      "sta Runa señala el final de una etapa y un nuevo comienzo. Eligiéndola, indica que la forma en que has estado viviendo ya no te sirve y debes terminarla para que tu energía vital pueda liberarse y tener un nuevo nacimiento, una nueva forma de vida. URUZ es una runa que significa pasar, atravesar y es parte del Ciclo de la transformación del SER. El crecimiento positivo y el cambio, sin embargo, pueden requerir de una pasada por el lado oscuro de la vida, como parte del ciclo de la perpetua renovación de la existencia Tal como en la naturaleza la evolución significa: muerte, descomposición, gestación, germinación y renacimiento. Las cosas que te están ocurriendo ahora, pueden estar impregnadas de dolor y pueden conducirte a una muerte en tu interior. El deseo de evolucionar internamente, nunca es impuesto, somos libres para resistirnos a ello si queremos, sin embargo, permanece atento, porque la nueva forma, la nueva vida es siempre mejor que la anterior. Prepárate entonces, porque esta nueva oportunidad puede ocultar una pérdida. Podría significar el término de un asunto con alguien o con algo con el cual tienes una intensa atadura emocional, importantísima para tu vida, y es ésta parte la que debes recuperar para ti. Ahora, de alguna forma, esa atadura se corta, cambia radicalmente y por ello se experimenta una muerte, busca entre las cenizas y descubrirás una nueva perspectiva y un nuevo nacimiento. El símbolo original para URUZ era un toro salvaje. Cuando el toro salvaje fue domesticado, una tarea casi imposible, pudo transportar cargas pesadas. Aprende adaptarte a las necesidades de este tiempo tan creativo. Esta runa significa que se requiere humildad y al mismo tiempo principios muy firmes, porque para reinar debes aprender a servir. Esta runa te anuncia que tu alma y el universo apoyan tu nuevo crecimiento.",
    upright:
      "sta Runa señala el final de una etapa y un nuevo comienzo. Eligiéndola, indica que la forma en que has estado viviendo ya no te sirve y debes terminarla para que tu energía vital pueda liberarse y tener un nuevo nacimiento, una nueva forma de vida. URUZ es una runa que significa pasar, atravesar y es parte del Ciclo de la transformación del SER. El crecimiento positivo y el cambio, sin embargo, pueden requerir de una pasada por el lado oscuro de la vida, como parte del ciclo de la perpetua renovación de la existencia Tal como en la naturaleza la evolución significa: muerte, descomposición, gestación, germinación y renacimiento. Las cosas que te están ocurriendo ahora, pueden estar impregnadas de dolor y pueden conducirte a una muerte en tu interior. El deseo de evolucionar internamente, nunca es impuesto, somos libres para resistirnos a ello si queremos, sin embargo, permanece atento, porque la nueva forma, la nueva vida es siempre mejor que la anterior. Prepárate entonces, porque esta nueva oportunidad puede ocultar una pérdida. Podría significar el término de un asunto con alguien o con algo con el cual tienes una intensa atadura emocional, importantísima para tu vida, y es ésta parte la que debes recuperar para ti. Ahora, de alguna forma, esa atadura se corta, cambia radicalmente y por ello se experimenta una muerte, busca entre las cenizas y descubrirás una nueva perspectiva y un nuevo nacimiento. El símbolo original para URUZ era un toro salvaje. Cuando el toro salvaje fue domesticado, una tarea casi imposible, pudo transportar cargas pesadas. Aprende adaptarte a las necesidades de este tiempo tan creativo. Esta runa significa que se requiere humildad y al mismo tiempo principios muy firmes, porque para reinar debes aprender a servir. Esta runa te anuncia que tu alma y el universo apoyan tu nuevo crecimiento.",
    inverted:
      "Si no tienes oídos para oír y ojos para ver, puedes fracasar fácilmente en aprovechar las ventajas de este momento. El resultado negativo, podría ser una oportunidad perdida o el debilitamiento de tu posición. Puede parecer que tu propia fuerza está siendo utilizada contra ti. Para algunos, esta runa al revés servirá para alertarlos, dándote las claves a través de pequeños errores y desencantos. Para otros, aquellos más profundamente inconscientes o poco despiertos, les proporcionará un fuerte remezón. Invertida esta runa, requiere de una profunda reflexión sobre la calidad de tu relación contigo mismo. Sé valiente, honesto y considera seriamente el constante ciclo de muerte y renacimiento, el eterno ir y venir de la existencia, todo lo que experimentamos tiene un comienzo, un medio y un final, y esto es seguido por un nuevo comienzo. Por lo tanto, no retrocedas ante el pasaje hacia la oscuridad. Cuando estés en aguas profundas, conviértete en un buzo. Lo siento tienes que instalar Quitcktime para escuchar la musica desde http://www.apple.com/es/quicktime/download/",
    counsel:
      "permanece atento, porque la nueva forma, la nueva vida es siempre mejor que la anterior.",
    reversible: true,
  },
  {
    id: "perth",
    number: 6,
    name: "PERTH",
    transliteration: "P",
    meaning: "Iniciación, Lo Oculto, El Secreto Sagrado",
    aett: "Aett de Heimdall",
    archetype: "Frigg / El Cubilete de las Nornas y el Destino",
    keywords: ["Misterio", "Iniciación", "El Azar Sagrado", "Fénix"],
    symbolism:
      "sta es una runa misteriosa, que apunta hacia aquello que está más allá de nuestros frágiles poderes manipulativos. Esta runa está al lado de los cielos, de lo desconocido y tiene asociaciones con el ave fénix, ese pájaro místico que se consume en el fuego y se levanta de. sus propias cenizas. Los caminos de esta runa son secretos y ocultos. Fuerzas transformadoras y profundas están en funcionamiento en tu interioridad . Aún así, lo que se logra es muy difícil de compartir o expresar. Está involucrada aquí una totalidad, que bien puede estar enmascarada, disfrazada o secreta; después de todo, la forma de llegar a ser total y los medios para lograrlo, son un profundo misterio. En lo que se refiere a lo terrenal y mundano, puede haber sorpresas, no es nada raro que obtengas ganancias inesperadas. Por el lado de la naturaleza humana, esta runa está simbolizada por el vuelo del águila. Un alto vuelo, libre de trabas para observar desde la altura el infinito ir y venir de la existencia, todo esto está indicado aquí. Además, ésta es la runa del cuestionamiento. Perth es otra de las runas del Ciclo, y significa un intenso aspecto de iniciación, no hay nada externo aquí, sólo un pálido reflejo de aquello que está en tu interior. Esta runa está relacionada con el más profundo estrato de tu ser, el fundamento sólido en el cual se basa tu destino. Para algunos PERTH significa experimentar una muerte psíquica. Si es necesario, abandona todo, sin excepciones. Lo único que importa eres tú y la renovación de tu Espíritu.",
    upright:
      "sta es una runa misteriosa, que apunta hacia aquello que está más allá de nuestros frágiles poderes manipulativos. Esta runa está al lado de los cielos, de lo desconocido y tiene asociaciones con el ave fénix, ese pájaro místico que se consume en el fuego y se levanta de. sus propias cenizas. Los caminos de esta runa son secretos y ocultos. Fuerzas transformadoras y profundas están en funcionamiento en tu interioridad . Aún así, lo que se logra es muy difícil de compartir o expresar. Está involucrada aquí una totalidad, que bien puede estar enmascarada, disfrazada o secreta; después de todo, la forma de llegar a ser total y los medios para lograrlo, son un profundo misterio. En lo que se refiere a lo terrenal y mundano, puede haber sorpresas, no es nada raro que obtengas ganancias inesperadas. Por el lado de la naturaleza humana, esta runa está simbolizada por el vuelo del águila. Un alto vuelo, libre de trabas para observar desde la altura el infinito ir y venir de la existencia, todo esto está indicado aquí. Además, ésta es la runa del cuestionamiento. Perth es otra de las runas del Ciclo, y significa un intenso aspecto de iniciación, no hay nada externo aquí, sólo un pálido reflejo de aquello que está en tu interior. Esta runa está relacionada con el más profundo estrato de tu ser, el fundamento sólido en el cual se basa tu destino. Para algunos PERTH significa experimentar una muerte psíquica. Si es necesario, abandona todo, sin excepciones. Lo único que importa eres tú y la renovación de tu Espíritu.",
    inverted:
      'Al revés esta runa te aconseja no esperar demasiado o esperar en forma convencional, debido a que la vida que has vivido en el pasado ha terminado, ya no puedes repetir lo que hiciste antes, porque el hacerlo significa sufrir de nuevo. Al revés, esta runa te advierte que reúnas todas tus energías dispersas y que te concentres sólo en tu propia vida y en tus propias necesidades porque son necesarias para tu crecimiento. Lo más importante que Perth te aconseja es que no te centres en los resultados, que no te ates a los recuerdos de los éxitos del pasado. Si lo haces te puedes privar de un verdadero presente, que es el único tiempo que existe y en el cual es posible tu transformación. Puedes sentirte muy agotado al enfrentar problemas tras problemas en tu camino. Aún así, siempre tienes una elección: ver toda esta aparente negatividad como "mala suerte" o puedes reconocerla como un obstáculo, una prueba específica de la iniciación que vas a experimentar. Es así como cada paso en falso, cada humillación, se convierte en una prueba para tu carácter. Cuando tu ser interno está cambiando y transformándose a un nivel muy profundo, se necesita paciencia, constancia y perseverancia. Así es que permanece centrado, observa tus estados de ánimo y continúa adelante sin detenerte. Lo siento tienes que instalar Quitcktime para escuchar la musica desde http://www.apple.com/es/quicktime/download/',
    counsel: "Lo único que importa eres tú y la renovación de tu Espíritu.",
    reversible: true,
  },
  {
    id: "nauthiz",
    number: 7,
    name: "NAUTHIZ",
    transliteration: "N",
    meaning: "Restricción, Necesidad, Paciencia y Resistencia",
    aett: "Aett de Heimdall",
    archetype: "Nott / La Necesidad que Forja el Carácter",
    keywords: ["Paciencia", "Límite Fértil", "Autocontrol", "Maduración"],
    symbolism:
      'invertida, esta runa es muy difícil. Su lección es proceder con una necesaria restricción . Un aspecto representa las limitaciones que nos causamos nosotros mismos y el otro aspecto considera las limitaciones que nos imponen las personas que nos rodean. Ambas son igualmente difíciles de manejar. El papel de NAUTHIZ es identificar nuestras áreas oscuras, lugares donde el crecimiento está estancado produciendo debilidades que proyectamos negativamente a los demás. Trata de no tomar el mundo en forma personal, esta runa te está diciendo: trabaja tu lado oscuro y examina lo que hay en tu interior que atrae la mala suerte a tu propia vida. Cuando seas capaz de mirar a Nauthiz con una sonrisa, serás capaz de reconocer los problemas, las negatividades y obstáculos de tu vida, como guías o maestros en tu desarrollo. La necesidad de restringirte es incuestionable aquí. Sacando esta runa, se te está advirtiendo que habrá interferencias, razón demás para reconsiderar cuidadosamente tus planes. Solamente recuerda: tus insatisfacciones no son sin una razón, sino que hay trabajo que realizar en tu propio ser, así es que tómalo con buena voluntad y muestra perseverancia. Este es un momento para pagar viejas deudas, restaurar sino la armonía, al menos el equilibrio. Así es que corrige, enmienda y revisa: "cuando los pescadores no pueden hacerse a la mar, reparan sus redes" . Deja que las restricciones de este momento te sirvan para corregir tus relaciones contigo mismo y tu conciencia. Ten presente que la rectificación viene antes que el progreso. Y una vez más considera lo útil que puede ser la adversidad.',
    upright:
      'invertida, esta runa es muy difícil. Su lección es proceder con una necesaria restricción . Un aspecto representa las limitaciones que nos causamos nosotros mismos y el otro aspecto considera las limitaciones que nos imponen las personas que nos rodean. Ambas son igualmente difíciles de manejar. El papel de NAUTHIZ es identificar nuestras áreas oscuras, lugares donde el crecimiento está estancado produciendo debilidades que proyectamos negativamente a los demás. Trata de no tomar el mundo en forma personal, esta runa te está diciendo: trabaja tu lado oscuro y examina lo que hay en tu interior que atrae la mala suerte a tu propia vida. Cuando seas capaz de mirar a Nauthiz con una sonrisa, serás capaz de reconocer los problemas, las negatividades y obstáculos de tu vida, como guías o maestros en tu desarrollo. La necesidad de restringirte es incuestionable aquí. Sacando esta runa, se te está advirtiendo que habrá interferencias, razón demás para reconsiderar cuidadosamente tus planes. Solamente recuerda: tus insatisfacciones no son sin una razón, sino que hay trabajo que realizar en tu propio ser, así es que tómalo con buena voluntad y muestra perseverancia. Este es un momento para pagar viejas deudas, restaurar sino la armonía, al menos el equilibrio. Así es que corrige, enmienda y revisa: "cuando los pescadores no pueden hacerse a la mar, reparan sus redes" . Deja que las restricciones de este momento te sirvan para corregir tus relaciones contigo mismo y tu conciencia. Ten presente que la rectificación viene antes que el progreso. Y una vez más considera lo útil que puede ser la adversidad.',
    inverted:
      'Como parte del ciclo de la Transformación, NAUTHIZ es una gran maestro que se oculta en el dolor y la limitación. Se dice que en los momentos de mayor oscuridad, tomamos conciencia de la LUZ que tenemos dentro, a través de cuyo reflejo llegamos a reconocer la verdadera fuerza creativa de nuestro ser. Cuando algo dentro de nosotros no está asumido, esto provoca estragos. Aquí es necesaria una purificación, comprendiéndolo fortalecemos la voluntad y el carácter. Empieza con lo que te es más difícil y luego con lo más fácil. Recuerda que el "sufrimiento" en su sentido original, significa solamente "experimentar". Así es que tu necesitas experimentar el lado oscuro de tu camino. Controlar tu rabia, controlar tus instintos, conservar tu fe en alto, son las claves aquí. La humildad y el buen carácter son bendiciones esenciales en este momento. Lo siento tienes que instalar Quitcktime para escuchar la musica desde http://www.apple.com/es/quicktime/download/',
    counsel:
      "recuerda: tus insatisfacciones no son sin una razón, sino que hay trabajo que realizar en tu propio ser, así es que tómalo con buena voluntad y muestra perseverancia.",
    reversible: true,
  },
  {
    id: "inguz",
    number: 8,
    name: "INGUZ",
    transliteration: "NG",
    meaning: "Fertilidad, Nuevos Comienzos, Realización",
    aett: "Aett de Tyr",
    archetype: "Ing-Freyr / El Héroe Fértil y la Semilla de Vida",
    keywords: ["Semilla Fértil", "Gestación", "Nuevos Comienzos", "Plenitud"],
    symbolism:
      "Runa 8 INGUZ Fertilidad Nuevos comienzos El dios-héroe Ing E sta runa está relacionada con la luna; la parte intuitiva de nuestra naturaleza que nos lleva a la armonización y a ajustamos en la esfera de las relaciones personales. INGUZ envuelve la necesidad de compartir el anhelo ardiente de ser amado y la búsqueda de los puntos en común. Lo que INGUZ requiere es completar tus comienzos. Puede marcar una época de liberación, de nueva vida, de nuevos comienzos. Es una runa de gran poder; sacándola significa que ahora tienes la fuerza para llegar a la completación, a la resolución, desde la cual llega un nuevo comienzo. Lo más importante de todo es la completación aquí. Puede ser el momento justo para que completes algún proyecto ahora. Si es así, hazlo tu primera prioridad. Quizás un estado mental complicado puede resolverse, aclararse o cambiarse ahora. La aparición de esta runa en la tirada indica que puedes fertilizar el terreno para tu propia liberación. INGUZ señala la salida de un estado cerrado, de un estado de crisálida. Todas las cosas cambian y no podemos vivir eternamente con problemas. Cuando tu resuelvas cambiar lo pasado, experimentarás una liberación de las tensiones e incertidumbres. Puede ser que necesites liberarte de una rutina, un hábito o de una relación, liberarte de alguna actividad que estás lista para dejar atrás. El período justo antes de nacer es generalmente muy peligrosos. El movimiento involucra peligro. Ahora es el momento de entrar en la sala de parto. Esta runa es otra del Ciclo de las runas, INGUZ aconseja preparación . Estando centrado y aterrizado. Ubre de Influencias negativas con buen estado de ánimo, estás en realidad preparado para abrirte a la voluntad de los cielos y esperar con una calma certera, tu salvación. Lo siento tienes que instalar Quitcktime para escuchar la musica desde http://www.apple.com/es/quicktime/download/",
    upright:
      "Runa 8 INGUZ Fertilidad Nuevos comienzos El dios-héroe Ing E sta runa está relacionada con la luna; la parte intuitiva de nuestra naturaleza que nos lleva a la armonización y a ajustamos en la esfera de las relaciones personales. INGUZ envuelve la necesidad de compartir el anhelo ardiente de ser amado y la búsqueda de los puntos en común. Lo que INGUZ requiere es completar tus comienzos. Puede marcar una época de liberación, de nueva vida, de nuevos comienzos. Es una runa de gran poder; sacándola significa que ahora tienes la fuerza para llegar a la completación, a la resolución, desde la cual llega un nuevo comienzo. Lo más importante de todo es la completación aquí. Puede ser el momento justo para que completes algún proyecto ahora. Si es así, hazlo tu primera prioridad. Quizás un estado mental complicado puede resolverse, aclararse o cambiarse ahora. La aparición de esta runa en la tirada indica que puedes fertilizar el terreno para tu propia liberación. INGUZ señala la salida de un estado cerrado, de un estado de crisálida. Todas las cosas cambian y no podemos vivir eternamente con problemas. Cuando tu resuelvas cambiar lo pasado, experimentarás una liberación de las tensiones e incertidumbres. Puede ser que necesites liberarte de una rutina, un hábito o de una relación, liberarte de alguna actividad que estás lista para dejar atrás. El período justo antes de nacer es generalmente muy peligrosos. El movimiento involucra peligro. Ahora es el momento de entrar en la sala de parto. Esta runa es otra del Ciclo de las runas, INGUZ aconseja preparación . Estando centrado y aterrizado. Ubre de Influencias negativas con buen estado de ánimo, estás en realidad preparado para abrirte a la voluntad de los cielos y esperar con una calma certera, tu salvación. Lo siento tienes que instalar Quitcktime para escuchar la musica desde http://www.apple.com/es/quicktime/download/",
    inverted:
      "Esta runa es simétrica e inmutable; no posee posición invertida. Su poder arquetípico opera con igual pureza luminosa en cualquier sentido que aparezca en la tirada.",
    counsel:
      "Lo siento tienes que instalar Quitcktime para escuchar la musica desde http://www.",
    reversible: false,
  },
  {
    id: "eihwaz",
    number: 9,
    name: "EIHWAZ",
    transliteration: "EI",
    meaning: "Defensa, Continuidad, El Tejo Sagrado",
    aett: "Aett de Heimdall",
    archetype: "Yggdrasil / El Tejo Guardián de los Nueve Mundos",
    keywords: [
      "Eje Cósmico",
      "Resistencia",
      "Poderes Conectores",
      "Continuidad",
    ],
    symbolism:
      "fracasos. Al mismo tiempo, desarrollamos dentro de nosotros una aversión a las conductas que crean situaciones tensionales en nuestra existencia. Aquí parece haber un bloqueo en tu camino. pero, sin embargo, puede ser beneficioso considerar un tiempo de espera antes el momento en el cual puedes utilizar tus influencias. La paciencia es el consejo que ofrece esta runa Nada de apresurarse, nada de actuar obsesivamente para alcanzar determinados logros. Esta runa habla de dificultades que aparecen en el principio de una nueva vida, a menudo anuncia un tiempo necesario de espera como el que se necesita para que la fuente se llene completamente de agua o como para que las frutas maduren en las ramas. Perseverancia y mucho cuidado, son tas claves aquí. La habilidad para prevenir las consecuencias antes de actuar, es la característica de una persona con profundidad, es decir, que a través de reflexiones adecuadas aparta anticipadamente tas dificultades. A menudo más que personas de acción somos personas de decisión; cuando nuestra decisión está dará, la acción se efectúa sin esfuerzo, esto se debe a que la existencia respalda y da fuerza a nuestras decisiones. Recibiendo esta runa, estarás advertido que, detrás de los inconvenientes y problemas, está la promesa del crecimiento. Este puede ser un tiempo de prueba y ciertamente puede ser muy significativo. Pone tu casa en orden, atiende tu negocio, aclárate y espera la voluntad del cielo. Lo siento tienes que instalar Quitcktime para escuchar la musica desde http://www.apple.com/es/quicktime/download/",
    upright:
      "fracasos. Al mismo tiempo, desarrollamos dentro de nosotros una aversión a las conductas que crean situaciones tensionales en nuestra existencia. Aquí parece haber un bloqueo en tu camino. pero, sin embargo, puede ser beneficioso considerar un tiempo de espera antes el momento en el cual puedes utilizar tus influencias. La paciencia es el consejo que ofrece esta runa Nada de apresurarse, nada de actuar obsesivamente para alcanzar determinados logros. Esta runa habla de dificultades que aparecen en el principio de una nueva vida, a menudo anuncia un tiempo necesario de espera como el que se necesita para que la fuente se llene completamente de agua o como para que las frutas maduren en las ramas. Perseverancia y mucho cuidado, son tas claves aquí. La habilidad para prevenir las consecuencias antes de actuar, es la característica de una persona con profundidad, es decir, que a través de reflexiones adecuadas aparta anticipadamente tas dificultades. A menudo más que personas de acción somos personas de decisión; cuando nuestra decisión está dará, la acción se efectúa sin esfuerzo, esto se debe a que la existencia respalda y da fuerza a nuestras decisiones. Recibiendo esta runa, estarás advertido que, detrás de los inconvenientes y problemas, está la promesa del crecimiento. Este puede ser un tiempo de prueba y ciertamente puede ser muy significativo. Pone tu casa en orden, atiende tu negocio, aclárate y espera la voluntad del cielo. Lo siento tienes que instalar Quitcktime para escuchar la musica desde http://www.apple.com/es/quicktime/download/",
    inverted:
      "Esta runa es simétrica e inmutable; no posee posición invertida. Su poder arquetípico opera con igual pureza luminosa en cualquier sentido que aparezca en la tirada.",
    counsel:
      "consejo que ofrece esta runa Nada de apresurarse, nada de actuar obsesivamente para alcanzar determinados logros.",
    reversible: false,
  },
  {
    id: "algiz",
    number: 10,
    name: "ALGIZ",
    transliteration: "Z",
    meaning: "Protección, El Alce Sagrado, Refugio Espiritual",
    aett: "Aett de Heimdall",
    archetype: "Heimdall / El Junco Protector y la Espada de Luz",
    keywords: [
      "Protección",
      "Conexión Superior",
      "Escudo Áurico",
      "Vigilancia",
    ],
    symbolism:
      "control de las emociones es el objetivo aquí. En el curso de la vida, durante tiempos de transición se acelera el proceso de crecimiento del Ser; entonces es importante no dejarse sucumbir por las emociones, tanto en las elevadas como en las bajas. Nuevos desafíos y oportunidades son típicos de esta runa y con ellos; llegarán posiblemente quebrantamientos o malas influencias. Esta runa sirve como escudo al Guerrero Espiritual, el que en las batallas está siempre junto a él; la protección del guerrero es como los cuernos curvos del alce o como los juncos, que necesitan tener un espacio abierto alrededor de ellos para protegerse del peligro exterior. Recuerda que una acción oportuna y una correcta conducta son las únicas protecciones verdaderas. Si te sientes apenado, observa la pena, está con ella, no trates de ocultarla con un velo y escapar de la situación, negándola o no enfrentando lo que está pasando. Comprender esto es tu protección.",
    upright:
      "control de las emociones es el objetivo aquí. En el curso de la vida, durante tiempos de transición se acelera el proceso de crecimiento del Ser; entonces es importante no dejarse sucumbir por las emociones, tanto en las elevadas como en las bajas. Nuevos desafíos y oportunidades son típicos de esta runa y con ellos; llegarán posiblemente quebrantamientos o malas influencias. Esta runa sirve como escudo al Guerrero Espiritual, el que en las batallas está siempre junto a él; la protección del guerrero es como los cuernos curvos del alce o como los juncos, que necesitan tener un espacio abierto alrededor de ellos para protegerse del peligro exterior. Recuerda que una acción oportuna y una correcta conducta son las únicas protecciones verdaderas. Si te sientes apenado, observa la pena, está con ella, no trates de ocultarla con un velo y escapar de la situación, negándola o no enfrentando lo que está pasando. Comprender esto es tu protección.",
    inverted:
      "- Preocúpate de tu salud y observa cuidadosamente todas las relaciones que tienes en este momento y trata de no agregar cargas a las que ya posees. Si tienes facilidad para rodearte de gente que te utiliza, permanece consciente de ello y responsabilízate de tu propia posición: sólo entonces tendrás reales beneficios. Por otra parte, no te preocupes si tu trabajo prospera o decae: puedes ganar poco, pero no perderás nunca, porque aprenderás siempre de lo que suceda. La sobriedad y la cortesía son los atributos fundamentales de los poderes protectores de esta runa. Lo siento tienes que instalar Quitcktime para escuchar la musica desde http://www.apple.com/es/quicktime/download/",
    counsel:
      "Recuerda que una acción oportuna y una correcta conducta son las únicas protecciones verdaderas.",
    reversible: true,
  },
  {
    id: "fehu",
    number: 11,
    name: "FEHU",
    transliteration: "F",
    meaning: "Posesiones, Prosperidad, Ganado, Nutrición",
    aett: "Aett de Freyr",
    archetype: "Freyja / La Vaca Audhumla y el Oro Vivo",
    keywords: ["Prosperidad", "Abundancia Nutricia", "Generosidad", "Riqueza"],
    symbolism:
      'Runa 11 FEHU Posesiones, Nutrición, Ganado F EHU es la runa de la plenitud: ambiciones satisfechas, recompensas recibidas, plenitud en tos amores. También esta runa promete nutrición desde lo más mundano hasta lo más sagrado y divino. Porque si el antiguo principio: "Así como es arriba también abajo" , es verdadero, entonces nosotros estamos aquí también para nutrir a Dios. Esta runa nos llama a una profunda reflexión sobre el significado que tienen las ganancias en la vida. Observa con cuidado para saber si es que la riqueza y posesiones las necesitas para tu bienestar o más bien para ejercer el poder , sobre otros y con ello elevar tu ego. Otra importancia e interés de esta runa está relacionada con conservar lo que has logrado. Es muy importante tener el máximo de cuidado, especialmente en momentos de buena fortuna, porque es entonces que probablemente podemos dejarnos llevar por nuestros éxitos por una parte, o conducirnos precipitadamente por otra. Alégrate por tu buena suerte y recuerda que debes compartirla. Lo que distingue a un ser de bien es la capacidad que tiene para nutrir a otros.',
    upright:
      'Runa 11 FEHU Posesiones, Nutrición, Ganado F EHU es la runa de la plenitud: ambiciones satisfechas, recompensas recibidas, plenitud en tos amores. También esta runa promete nutrición desde lo más mundano hasta lo más sagrado y divino. Porque si el antiguo principio: "Así como es arriba también abajo" , es verdadero, entonces nosotros estamos aquí también para nutrir a Dios. Esta runa nos llama a una profunda reflexión sobre el significado que tienen las ganancias en la vida. Observa con cuidado para saber si es que la riqueza y posesiones las necesitas para tu bienestar o más bien para ejercer el poder , sobre otros y con ello elevar tu ego. Otra importancia e interés de esta runa está relacionada con conservar lo que has logrado. Es muy importante tener el máximo de cuidado, especialmente en momentos de buena fortuna, porque es entonces que probablemente podemos dejarnos llevar por nuestros éxitos por una parte, o conducirnos precipitadamente por otra. Alégrate por tu buena suerte y recuerda que debes compartirla. Lo que distingue a un ser de bien es la capacidad que tiene para nutrir a otros.',
    inverted:
      "Es posible que si tu sacas esta runa al revés, tengas una gran frustración en tu vida. En una amplia escala hay cosas que pueden desaparecer de tu vida que van desde lo más superficial hasta lo más profundo. Te quedarás corto con tus esfuerzos, buscarás y perderás, es decir, tú tomarás el tren equivocado. Tal vez tengas que sentarte a observar como Irremediablemente lo que has ganado comienza a desaparecer. Observa lo que está sucediendo, examina los eventos negativos desde una perspectiva de gran apertura y pregúntate ¿Qué lección necesito aprender de esto en mi vida? Inclusive si hay ocasión de alegrarse, no' te dejes llevar por esta alegría en forma inconsciente. Al revés, esta runa indica que hay muchas situaciones dudosas y que llegan en múltiples formas y situaciones; esto quiere decir que te estás conectando con el lado oscuro de las posesiones. Sin embargo, todo viene y va y nada permanece. Al involucrarte con el lado sombrío de esta runa, tienes la oportunidad de reconocer donde se encuentra tu real nutrición. Lo siento tienes que instalar Quitcktime para escuchar la musica desde http://www.apple.com/es/quicktime/download/",
    counsel:
      "recuerda que debes compartirla. Lo que distingue a un ser de bien es la capacidad que tiene para nutrir a otros.",
    reversible: true,
  },
  {
    id: "wunjo",
    number: 12,
    name: "WUNJO",
    transliteration: "W",
    meaning: "Alegría, Luz, Fruto Cumplido, Armonía",
    aett: "Aett de Freyr",
    archetype: "Balder / La Luz Victoriosa y el Gozo del Espíritu",
    keywords: ["Alegría", "Celebración", "Armonía", "Victoria Serena"],
    symbolism:
      "sta runa es como una rama cargada de frutas. El tiempo de tu trabajo ha finalizado y ya has llegado a ti, pudiendo recoger con alegría los regalos que se te ofrecen. Los regalos que estabas esperando han llegado y ahora puedes recibir libremente sus bendiciones, ya sean ganancias materiales, mejoras en tu vida emocional o en el propio desarrollo interior. Este es un momento alquímico en el cual el conocimiento se transmuta en comprensión. El conocimiento es necesario pero no es una condición suficiente en sí mismo. Ahora puedes alegrarte, la comprensión ha sido traída por la voluntad del cielo. La alegría acompaña a una nueva energía, la energía que antes estaba bloqueada. La luz atraviesa las nubes y toca el agua, como si algo hermoso emergiera de las profundidades; el alma se ilumina desde adentro en aquel lugar donde se juntan las aguas, donde se produce el encuentro de la Tierra y el Cielo. Hay una nueva claridad, lo que puede significar que debes renunciar a algo que has planeado, a las ambiciones o a las metas. Es apropiado y oportuno que te sometas, porque esta runa indica restauración del ser, alineado correctamente con sí mismo, a través de la conciencia.",
    upright:
      "sta runa es como una rama cargada de frutas. El tiempo de tu trabajo ha finalizado y ya has llegado a ti, pudiendo recoger con alegría los regalos que se te ofrecen. Los regalos que estabas esperando han llegado y ahora puedes recibir libremente sus bendiciones, ya sean ganancias materiales, mejoras en tu vida emocional o en el propio desarrollo interior. Este es un momento alquímico en el cual el conocimiento se transmuta en comprensión. El conocimiento es necesario pero no es una condición suficiente en sí mismo. Ahora puedes alegrarte, la comprensión ha sido traída por la voluntad del cielo. La alegría acompaña a una nueva energía, la energía que antes estaba bloqueada. La luz atraviesa las nubes y toca el agua, como si algo hermoso emergiera de las profundidades; el alma se ilumina desde adentro en aquel lugar donde se juntan las aguas, donde se produce el encuentro de la Tierra y el Cielo. Hay una nueva claridad, lo que puede significar que debes renunciar a algo que has planeado, a las ambiciones o a las metas. Es apropiado y oportuno que te sometas, porque esta runa indica restauración del ser, alineado correctamente con sí mismo, a través de la conciencia.",
    inverted:
      "- Las cosas se demoran en fructificar. El proceso de nacimiento es largo y arduo y se teme por la seguridad del niño interior. Una crisis, un momento difícil, aunque puede ser breve, está cerca tuyo. Consideración y deliberación son lo oportuno, porque la luz y la sombra están aún entremezcladas y las dudas y los escrúpulos pueden interferir en tu felicidad si no descubres a tiempo que éstas tienen que ver con tu crecimiento. Detén tu ansiedad y pregúntate si posees las virtudes de seriedad, de sinceridad y vacío. Si tú las posees, lograrás la tranquilidad que servirá de base para la claridad, paciencia y perseverancia. Desde el punto de vista de la verdad, todo es una prueba, por lo tanto, si te enfocas en el presente, si eres sincero con los demás y confías en tu proceso, no puedes fallar. Esta runa al revés es muy útil para la meditación. Lo siento tienes que instalar Quitcktime para escuchar la musica desde http://www.apple.com/es/quicktime/download/",
    counsel:
      "Es apropiado y oportuno que te sometas, porque esta runa indica restauración del ser, alineado correctamente con sí mismo, a través de la conciencia.",
    reversible: true,
  },
  {
    id: "jera",
    number: 13,
    name: "JERA",
    transliteration: "J",
    meaning: "Cosecha, Estación Fértil, El Año Productivo",
    aett: "Aett de Heimdall",
    archetype: "Sif / Las Espigas de Oro y la Rueda del Año",
    keywords: [
      "Cosecha Justa",
      "Ciclos Naturales",
      "Recompensa",
      "Tiempo Fértil",
    ],
    symbolism:
      'empresa en la que estés comprometido. Recibiendo esta runa, te sentirás incentivado para que mantengas tu espíritu en alto. Sin embargo, permanece atento porque no puedes esperar resultados rápidos. Un tiempo de espera siempre está envuelto en esta runa, por esto la palabra clave es "un año" que simboliza un período de tiempo previo y necesario. Como por ejemplo, para recoger los frutos de una cosecha, para realizar actividades o para solucionar una situación complicada. Has preparado la tierra y plantado la semilla, ahora debes cultivar con mucho cuidado... Para aquellos quienes han tenido una larga estación de trabajo, el término ha llegado esta runa les ofrece el regalo del éxito. Los resultados están en las manos de la Providencia y esta runa te aconseja continuar perseverando. Recuerda al agricultor que estaba tan ansioso por recoger su cosecha que en las noches iba al sembrado y tiraba con fuerzas tos tallos para que crecieran más rápido . No hay forma empujar al río. igualmente no puedes apresurar la cosecha. Tienes que estar consciente que la paciencia es esencial para el reconocimiento de tu propio proceso, la cual te llevará, en el tiempo apropiado, a la cosecha de tu propio ser. Lo siento tienes que instalar Quitcktime para escuchar la musica desde http://www.apple.com/es/quicktime/download/',
    upright:
      'empresa en la que estés comprometido. Recibiendo esta runa, te sentirás incentivado para que mantengas tu espíritu en alto. Sin embargo, permanece atento porque no puedes esperar resultados rápidos. Un tiempo de espera siempre está envuelto en esta runa, por esto la palabra clave es "un año" que simboliza un período de tiempo previo y necesario. Como por ejemplo, para recoger los frutos de una cosecha, para realizar actividades o para solucionar una situación complicada. Has preparado la tierra y plantado la semilla, ahora debes cultivar con mucho cuidado... Para aquellos quienes han tenido una larga estación de trabajo, el término ha llegado esta runa les ofrece el regalo del éxito. Los resultados están en las manos de la Providencia y esta runa te aconseja continuar perseverando. Recuerda al agricultor que estaba tan ansioso por recoger su cosecha que en las noches iba al sembrado y tiraba con fuerzas tos tallos para que crecieran más rápido . No hay forma empujar al río. igualmente no puedes apresurar la cosecha. Tienes que estar consciente que la paciencia es esencial para el reconocimiento de tu propio proceso, la cual te llevará, en el tiempo apropiado, a la cosecha de tu propio ser. Lo siento tienes que instalar Quitcktime para escuchar la musica desde http://www.apple.com/es/quicktime/download/',
    inverted:
      "Esta runa es simétrica e inmutable; no posee posición invertida. Su poder arquetípico opera con igual pureza luminosa en cualquier sentido que aparezca en la tirada.",
    counsel: "permanece atento porque no puedes esperar resultados rápidos.",
    reversible: false,
  },
  {
    id: "kano",
    number: 14,
    name: "KANO",
    transliteration: "K",
    meaning: "Apertura, Fuego Creador, Antorcha de Claridad",
    aett: "Aett de Freyr",
    archetype: "Hephaistos Nórdico / La Llama que Alumbra la Noche",
    keywords: ["Fuego Sagrado", "Claridad", "Apertura", "Iluminación"],
    symbolism:
      "sta es la runa de la apertura, de la claridad renovada, del esclarecimiento de la oscuridad que ha estado opacando una parte de tu vida. Estás libre ahora para recibir y para conocer la alegría de dar sin pedir nada a cambio. Kano es la runa que sirve para las actividades de la mañana, para la seriedad, claridad y concentración; cualidades éstas, que son necesarias para el comienzo de cualquier trabajo. La protección ofrecida por esta runa es que mientras más luz tengas, mejor puedes ver lo que es superficial y arcaico en tus condicionamientos. En las relaciones puede haber ahora una apertura mutua. Tu puedes servir de gatillo, ya que mediante la conciencia es que la luz de la comprensión posibilita la apertura para ambos. Tienes que reconocer que, mientras por una parte estás limitado y dependiente, por la otra , estás como un perfecto centro, donde las fuerzas armoniosas y benéficas del Universo emergen e irradian. Tú eres el centro. Simplemente confía, sobre todo si has estado operando en la oscuridad. Hay ahora bastante luz para ver que el paciente que está sobre a mesa de operaciones, eres tu mismo.",
    upright:
      "sta es la runa de la apertura, de la claridad renovada, del esclarecimiento de la oscuridad que ha estado opacando una parte de tu vida. Estás libre ahora para recibir y para conocer la alegría de dar sin pedir nada a cambio. Kano es la runa que sirve para las actividades de la mañana, para la seriedad, claridad y concentración; cualidades éstas, que son necesarias para el comienzo de cualquier trabajo. La protección ofrecida por esta runa es que mientras más luz tengas, mejor puedes ver lo que es superficial y arcaico en tus condicionamientos. En las relaciones puede haber ahora una apertura mutua. Tu puedes servir de gatillo, ya que mediante la conciencia es que la luz de la comprensión posibilita la apertura para ambos. Tienes que reconocer que, mientras por una parte estás limitado y dependiente, por la otra , estás como un perfecto centro, donde las fuerzas armoniosas y benéficas del Universo emergen e irradian. Tú eres el centro. Simplemente confía, sobre todo si has estado operando en la oscuridad. Hay ahora bastante luz para ver que el paciente que está sobre a mesa de operaciones, eres tu mismo.",
    inverted:
      "Espera un obscurecimiento de la luz en alguna situación o relación. Una amistad puede morir, un socio, un matrimonio, algún aspecto de ti mismo que ya no es más apropiado para que lo lleves contigo. Esta runa te advierte que el no encarar conscientemente la muerte, significará una gran pérdida de oportunidad para ti. Kano es una runa del Ciclo de auto transformación ; invertida, apunta a la muerte de una forma de vida que te invalida para crecer. Invertida esta runa nos ofrece renunciar alegremente al pasado y estar preparado para vivir por un tiempo en el vacío. Nos alerta para desarrollar nuevo que llegara a iluminarnos en el momento oportuno desarrollar nuestra estabilidad interna, de modo de no dejarse seducir Por antiguos cánones mientras esperamos el advenimiento de lo nuevo que llegara a iluminarnos en el momento oportuno. Lo siento tienes que instalar Quitcktime para escuchar la musica desde http://www.apple.com/es/quicktime/download/",
    counsel:
      "Hay ahora bastante luz para ver que el paciente que está sobre a mesa de operaciones, eres tu mismo.",
    reversible: true,
  },
  {
    id: "tiewaz",
    number: 15,
    name: "TIEWAZ",
    transliteration: "T",
    meaning: "Energía del Guerrero, Victoria Justa, El Dios Tyr",
    aett: "Aett de Tyr",
    archetype: "Tyr / El Valor Heroico y la Estrella Polar",
    keywords: ["Victoria Justa", "Coraje", "Sacrificio Noble", "Fidelidad"],
    symbolism:
      'Runa 15 TIEWAZ ENERGÍA DEL GUERRERO, EL DI0S TIW E sta runa es la del Guerrero Espiritual y está relacionada con la batalla que libra el Guerrero con sí mismo, con su ego, por desarrollarse y crecer. Esta acción la realiza haciendo acopio de toda su energía y voluntad, aunque ignora los resultados que obtendrá. En este momento, permanece consciente que es posible que esté caso hay que dejar que la voluntad del cielo fluya y actúe a través de ti. Estas son las formas de operar de un verdadero Guerrero Espiritual, son su sello personal. Incorporada a esta runa está también la energía de la discriminación; esa energía, que como una afilada espada nos da fuerzas para cortar todo lo antiguo, todo lo muerto y lo superfluo. Con esta runa, además, podemos llogar a convencernos que el universo siempre es el que da el primer paso. La paciencia es la virtud de esta runa y por ello nos trae a la memoria las palabras de San Agustín: "El regalo de la paciencia es la paciencia" . Cuando esta runa aparece en tu tirada, ten presente que el moldeamiento del carácter es realmente la salida. Ahora estás obligado a mirar hacia adentro, tratando de sondear profundamente las raíces de tu vida, solamente realizando esto puedes llegar a comunicarte con las necesidades más íntimas de tu naturaleza y extraer desde allí, al máximo, tus posibilidades. Asociado a esta runa está el Sol, principio activo de la energía masculina, por lo tanto tanto, la conquista de uno mismo es urgente y necesaria, especialmente porque es un deseo largamente anhelado en tu vida, como también, es un llamado a la conciencia para que sea capaz de sobrellevar este camino sin ansiedad y con total entrega. Cuando esta runa llega en respuesta a una situación romántica, indica que la relación es apropiada y providencial, es decir, que el vinculo de unión con la pareja es compartido, pero sin embargó es necesario hacer un trabajo juntos. Si el asunto se refiere a un interés por una causa, una idea o una forma de conducta, la runa guerrera te aconseja perseverancia, aunque algunas veces esa clase de perseverancia significa: paciencia. ¿Cuales son tus prioridades? ¿Cómo estás usando tu energía? Esta es una runa de coraje y dedicación En tiempos antiguos, se usaba esta runa como glifo que los guerreros pintaban en sus escudos antes de tas batallas. Ahora, con energías más refinadas en juego, este mismo símbolo poderoso te ayudará a resolver las luchas de tu Conciencia Superior con tu propio ego.',
    upright:
      'Runa 15 TIEWAZ ENERGÍA DEL GUERRERO, EL DI0S TIW E sta runa es la del Guerrero Espiritual y está relacionada con la batalla que libra el Guerrero con sí mismo, con su ego, por desarrollarse y crecer. Esta acción la realiza haciendo acopio de toda su energía y voluntad, aunque ignora los resultados que obtendrá. En este momento, permanece consciente que es posible que esté caso hay que dejar que la voluntad del cielo fluya y actúe a través de ti. Estas son las formas de operar de un verdadero Guerrero Espiritual, son su sello personal. Incorporada a esta runa está también la energía de la discriminación; esa energía, que como una afilada espada nos da fuerzas para cortar todo lo antiguo, todo lo muerto y lo superfluo. Con esta runa, además, podemos llogar a convencernos que el universo siempre es el que da el primer paso. La paciencia es la virtud de esta runa y por ello nos trae a la memoria las palabras de San Agustín: "El regalo de la paciencia es la paciencia" . Cuando esta runa aparece en tu tirada, ten presente que el moldeamiento del carácter es realmente la salida. Ahora estás obligado a mirar hacia adentro, tratando de sondear profundamente las raíces de tu vida, solamente realizando esto puedes llegar a comunicarte con las necesidades más íntimas de tu naturaleza y extraer desde allí, al máximo, tus posibilidades. Asociado a esta runa está el Sol, principio activo de la energía masculina, por lo tanto tanto, la conquista de uno mismo es urgente y necesaria, especialmente porque es un deseo largamente anhelado en tu vida, como también, es un llamado a la conciencia para que sea capaz de sobrellevar este camino sin ansiedad y con total entrega. Cuando esta runa llega en respuesta a una situación romántica, indica que la relación es apropiada y providencial, es decir, que el vinculo de unión con la pareja es compartido, pero sin embargó es necesario hacer un trabajo juntos. Si el asunto se refiere a un interés por una causa, una idea o una forma de conducta, la runa guerrera te aconseja perseverancia, aunque algunas veces esa clase de perseverancia significa: paciencia. ¿Cuales son tus prioridades? ¿Cómo estás usando tu energía? Esta es una runa de coraje y dedicación En tiempos antiguos, se usaba esta runa como glifo que los guerreros pintaban en sus escudos antes de tas batallas. Ahora, con energías más refinadas en juego, este mismo símbolo poderoso te ayudará a resolver las luchas de tu Conciencia Superior con tu propio ego.',
    inverted:
      "Corres peligro que tus energías se dispersen o se malgasten por una decisión apresurada o inoportuna. Ahora, si has tenido una unión muy corta, no hay que apenarse, sino comprender que ese era su tiempo real. Para poder actuar en el mundo de la manera más auténtica posible, es necesario tener entrega y confianza en la existencia. Esta es una runa poderosa y de gran energía y aún al revés, te exige que examines tus ideas, tus motivaciones y tus intereses. Para esto, hazte las siguientes preguntas: ¿Estás tratando de dominar a otra persona o lo que te interesa es llegar a conquistarte a ti mismo? ¿Estas deseando ciegamente el éxito o estás dedicado seriamente a tu propio proceso? Las respuestas las encontraras dentro de ti, no afuera de ti. No te olvides que cuando consultas las runas, estas consultando a tu conciencia superior. Esta es la forma de actuar de un guerrero espiritual. Lo siento tienes que instalar Quitcktime para escuchar la musica desde http://www.apple.com/es/quicktime/download/",
    counsel:
      "permanece consciente que es posible que esté caso hay que dejar que la voluntad del cielo fluya y actúe a través de ti.",
    reversible: true,
  },
  {
    id: "berkana",
    number: 16,
    name: "BERKANA",
    transliteration: "B",
    meaning: "Crecimiento, Renacimiento, El Abedul Fértil",
    aett: "Aett de Tyr",
    archetype: "Bertha / La Gran Madre Tierra y la Primavera",
    keywords: ["Renacimiento", "Maternidad", "Abedul", "Nutrición Espiritual"],
    symbolism:
      "la runa del proceso de la vida, otra del ciclo de auto-transformación. Esta runa Indica una forma de fertilidad que promete un gran crecimiento real y a la vez simbólico. El crecimiento puede ocurrir en algunos aspectos mundanos, en situaciones familiares o en nuestra relación con uno mismo o con lo Divino. Esta runa nos ofrece guiarnos y su orientación es que debemos florecer y madurar. Lo que se necesita aquí es ir profundamente en las cosas, con mucho cuidado y conciencia. Esta runa está relacionada con el poder de influir en el desarrollo y con el fluir de los seres hacia nuevas formas. Su acción es suave, penetrante y avasalladora. Lo primero que hay que hacer, es alejar toda resistencia y luego completar tu trabajo. Para que esto suceda, tu voluntad tiene que ser clara, controlada y con respecto al objetivo, tus motivos deben ser correctos. Cualquier rincón oscuro debe ser purificado; esto tiene que hacerse con minuciosidad y algunas veces, con ayuda experta. Modestia, paciencia, belleza y generosidad son necesarias. Una vez que hayas vencido la resistencia y la rectificación se haya llevado a cabo y se mantenga firme, entonces, a través de la confianza y una actitud positiva, el florecimiento ocurrirá.",
    upright:
      "la runa del proceso de la vida, otra del ciclo de auto-transformación. Esta runa Indica una forma de fertilidad que promete un gran crecimiento real y a la vez simbólico. El crecimiento puede ocurrir en algunos aspectos mundanos, en situaciones familiares o en nuestra relación con uno mismo o con lo Divino. Esta runa nos ofrece guiarnos y su orientación es que debemos florecer y madurar. Lo que se necesita aquí es ir profundamente en las cosas, con mucho cuidado y conciencia. Esta runa está relacionada con el poder de influir en el desarrollo y con el fluir de los seres hacia nuevas formas. Su acción es suave, penetrante y avasalladora. Lo primero que hay que hacer, es alejar toda resistencia y luego completar tu trabajo. Para que esto suceda, tu voluntad tiene que ser clara, controlada y con respecto al objetivo, tus motivos deben ser correctos. Cualquier rincón oscuro debe ser purificado; esto tiene que hacerse con minuciosidad y algunas veces, con ayuda experta. Modestia, paciencia, belleza y generosidad son necesarias. Una vez que hayas vencido la resistencia y la rectificación se haya llevado a cabo y se mantenga firme, entonces, a través de la confianza y una actitud positiva, el florecimiento ocurrirá.",
    inverted:
      "Los acontecimientos y/o los aspectos del carácter, interfieren en el crecimiento de una nueva vida y en el proceso de la vida. Puedes sentirte frustrado por el fracaso en tomar una actitud correcta, sin embargo, lo que necesitas aquí es no desmayar y actuar con diligencia. Examina lo que te sucede, tu parte en ello, tus necesidades y las necesidades de los otros. ¿Estás considerando primero tus necesidades antes que la de tos otros? Despójate de todo hasta que puedas identificar el bloqueo de tu crecimiento en esta situación; entonces, penetra en ello suavemente, imitando al viento. Puede que necesites fertilizar nuevamente el terreno, pero ten por seguro que a través de una preparación adecuada, el crecimiento está asegurado. Lo siento tienes que instalar Quitcktime para escuchar la musica desde http://www.apple.com/es/quicktime/download/",
    counsel:
      "Una vez que hayas vencido la resistencia y la rectificación se haya llevado a cabo y se mantenga firme, entonces, a través de la confianza y una actitud positiva, el florecimiento ocurrirá.",
    reversible: true,
  },
  {
    id: "ehiwaz",
    number: 17,
    name: "EHWAZ",
    transliteration: "E",
    meaning: "Movimiento, Progreso, El Caballo Sagrado",
    aett: "Aett de Tyr",
    archetype: "Sleipnir / El Caballo de Ocho Patas de Odín",
    keywords: ["Avance Firme", "Compañerismo", "Sleipnir", "Viaje"],
    symbolism:
      'nueva vida. También significa movimiento en el sentido de superar o mejorar cualquier situación. EHIWAZ es la runa del tránsito y de la transición . Hay acerca de esta runa un sentido de desarrollo gradual y progresivo, con el acompañamiento de un crecimiento lento a través de numerosos cambios. Esto puede aplicarse al desarrollo de un negocio o una idea, también una relación necesita sufrir cambios y transformaciones, si se desea mantenerla vigente. Cuando sacas esta runa se te está indicando realizar un esfuerzo moral personal y una constante perseverancia. Puede decirse: "Así como cultivo mi propia naturaleza, así se desarrolla lo demás" . El símbolo de esta runa es un caballo. Desde la Edad del bronce encontramos artefactos relacionados con el sol, el caballo simboliza el sol y se le representa cruzando el cielo. Aquí esta runa está diciendo: "tú has progresado lo suficiente para sentir, en cierta medida , algo de seguridad en tu posición" ahora es el momento de darse vuelta y encarar el futuro y prepararse para compartir la buena fortuna que llegará . El compartir es significativo ya que se relaciona con el poder del sol que es crear vida e iluminar todas tas cosas con su luz.',
    upright:
      'nueva vida. También significa movimiento en el sentido de superar o mejorar cualquier situación. EHIWAZ es la runa del tránsito y de la transición . Hay acerca de esta runa un sentido de desarrollo gradual y progresivo, con el acompañamiento de un crecimiento lento a través de numerosos cambios. Esto puede aplicarse al desarrollo de un negocio o una idea, también una relación necesita sufrir cambios y transformaciones, si se desea mantenerla vigente. Cuando sacas esta runa se te está indicando realizar un esfuerzo moral personal y una constante perseverancia. Puede decirse: "Así como cultivo mi propia naturaleza, así se desarrolla lo demás" . El símbolo de esta runa es un caballo. Desde la Edad del bronce encontramos artefactos relacionados con el sol, el caballo simboliza el sol y se le representa cruzando el cielo. Aquí esta runa está diciendo: "tú has progresado lo suficiente para sentir, en cierta medida , algo de seguridad en tu posición" ahora es el momento de darse vuelta y encarar el futuro y prepararse para compartir la buena fortuna que llegará . El compartir es significativo ya que se relaciona con el poder del sol que es crear vida e iluminar todas tas cosas con su luz.',
    inverted:
      'Aquí hay movimientos que están bloqueados- Asegúrate de que lo que estás haciendo o no estás haciendo, es lo correcto. No hay oportunidades pérdidas, simplemente tenemos que reconocer que no todas tas oportunida&shy;des que tenemos son para nosotros. "La oportunidad que ahora tienes, puede ser, evitar la acción". Si te estás sintiendo perdido, poco claro acerca de la necesidad de actuar, considera lo que es apropiado a tu naturaleza y al momento, recordando que lo que es tuyo, llegará a ti . Lo siento tienes que instalar Quitcktime para escuchar la musica desde http://www.apple.com/es/quicktime/download/',
    counsel:
      "El compartir es significativo ya que se relaciona con el poder del sol que es crear vida e iluminar todas tas cosas con su luz.",
    reversible: true,
  },
  {
    id: "laguz",
    number: 18,
    name: "LAGUZ",
    transliteration: "L",
    meaning: "Flujo, Agua Viva, Intuición y Conducción",
    aett: "Aett de Tyr",
    archetype: "Njord / Las Corrientes Marinas y el Río de la Vida",
    keywords: ["Agua Viva", "Marea Psíquica", "Intuición", "Fluidez"],
    symbolism:
      'quí están actuando los poderes fecundos y creativos de la naturaleza. Los atributos de esta runa son el agua, la fluidez, las mareas y el fluir de las emociones, de los sentimiento y de las relaciones. Laguz llena nuestras necesidades de sumergirnos en la experiencia de vivir sin tener que evaluar o comprender; habla del deseo de consuelo y de la satisfacción de las necesidades emocionales, el lado lunar de nuestra naturaleza; porque mientras el sol se empeña en la diferenciación, la luna nos atrae hacia la unidad y la compenetración. Esta runa, a menudo, señala un tiempo para la purificación, para la reevaluación, la reorganización, con realismo. Por ser una runa de profundo conocimiento y poderes psíquicos, puede llamarte a estudiar materias espirituales como preparación para las profundas transformaciones de tu Ser. Está indicado en esta runa, el éxito en el contacto con el conocimiento intuitivo, de acuerdo al propio ritmo personal. Esta es una runa que anuncia una correcta relación de tu Ser con tu Conciencia Superior, es lo que los alquimistas han llamado "conjuntio" o matrimonio (ying-yang). En los cuentos de hadas es el final feliz, cuando el héroe y la heroína viven felices para siempre.',
    upright:
      'quí están actuando los poderes fecundos y creativos de la naturaleza. Los atributos de esta runa son el agua, la fluidez, las mareas y el fluir de las emociones, de los sentimiento y de las relaciones. Laguz llena nuestras necesidades de sumergirnos en la experiencia de vivir sin tener que evaluar o comprender; habla del deseo de consuelo y de la satisfacción de las necesidades emocionales, el lado lunar de nuestra naturaleza; porque mientras el sol se empeña en la diferenciación, la luna nos atrae hacia la unidad y la compenetración. Esta runa, a menudo, señala un tiempo para la purificación, para la reevaluación, la reorganización, con realismo. Por ser una runa de profundo conocimiento y poderes psíquicos, puede llamarte a estudiar materias espirituales como preparación para las profundas transformaciones de tu Ser. Está indicado en esta runa, el éxito en el contacto con el conocimiento intuitivo, de acuerdo al propio ritmo personal. Esta es una runa que anuncia una correcta relación de tu Ser con tu Conciencia Superior, es lo que los alquimistas han llamado "conjuntio" o matrimonio (ying-yang). En los cuentos de hadas es el final feliz, cuando el héroe y la heroína viven felices para siempre.',
    inverted:
      "Es una advertencia contra la falsedad, un consejo para que trates de no excederte con tus propias fuerzas o funcionar más allá . del poder que has acumulado hasta aquí en tu vida. . Laguz al revés, a menudo indica un fracaso al usar la sabiduría instintiva; como resultado de esto te das cuenta que el lado intuitivo de tu naturaleza está languideciendo, dejándote permanentemente desequilibrado. Lo que debes hacer ahora es ir a tu inte&shy;rior, respetando el lado receptivo de tu naturale&shy;za guerrera. Lo siento tienes que instalar Quitcktime para escuchar la musica desde http://www.apple.com/es/quicktime/download/",
    counsel:
      "En los cuentos de hadas es el final feliz, cuando el héroe y la heroína viven felices para siempre.",
    reversible: true,
  },
  {
    id: "hagalaz",
    number: 19,
    name: "HAGALAZ",
    transliteration: "H",
    meaning: "Fuerza Elemental, Granizo, Transformación Radical",
    aett: "Aett de Heimdall",
    archetype: "Hel / La Tempestad Purificadora que Disuelve lo Obsoleto",
    keywords: [
      "Granizo Transformador",
      "Ruptura Fértil",
      "Despertar Abrupto",
      "Poder Elemental",
    ],
    symbolism:
      'Runa 19 HAGALAZ Las fuerzas, Explosión de la naturaleza, Poder elemental C ambio, libertad, inventiva y liberación son todos atributos de esta runa. Sacándola indica que hay una necesidad imperiosa dentro de la psiquis de liberarse de una identificación que no te permite contactarte con la realidad y no te deja experimentar el mundo de la mente arquetípica. Esta es la runa de la destrucción elemental, Situación que escapa a tu control. A pesar de que esta runa se interpreta solo al derecho, siempre funciona a través del lado revés. Cuando esta runa sale en tu tirada, espera rompimiento o fracaso en tus planes, porque es la gran despertadora, aunque la forma de despertar puede variar; quizás experimentarás un sentimiento de un gran sueño, también la irrupción del poder puede ser tal , que puede destruir el castillo que tu conocías como tu realidad, tu seguridad, tu comprensión de ti mismo, tu trabajo, tus relaciones y tus creencias. Sin embargo, ten consciencia que lo que está operando aquí, en última instancia, no son fuerzas externas, es decir, no estás a merced de lo externo, sino que es tu propia naturaleza la que está creando lo que está sucediendo. La fuerza interior que has acumulado hasta ahora en tu vida es tu soporte y guía al mismo tiempo, cuando todo lo que has dado por hecho está cambiando. Recibiendo esta runa, se te está avisando que puedes sufrir una pérdida o daño: un árbol que puede caer sobre tu casa, una relación que termina, planes que faltan o el origen de tus subsistencias se acaba. Pero como ya estás advertido, atrévete a comprender y aceptar lo que ocurra como necesario para tu crecimiento. No hay nada superficial en esta runa, pues mientras más severa sea la destrucción más significativos y oportunos serán los requerimientos para tu crecimiento, porque esta es otra de tas runas del Ciclo de transformación del Ser. El término "total discontinuidad" describe mejor la acción poderosa y potente de esta runa. El universo y tu propia alma te están exigiendo lo que debes hacer y eso es, por supuesto, crecer. Lo siento tienes que instalar Quitcktime para escuchar la musica desde http://www.apple.com/es/quicktime/download/',
    upright:
      'Runa 19 HAGALAZ Las fuerzas, Explosión de la naturaleza, Poder elemental C ambio, libertad, inventiva y liberación son todos atributos de esta runa. Sacándola indica que hay una necesidad imperiosa dentro de la psiquis de liberarse de una identificación que no te permite contactarte con la realidad y no te deja experimentar el mundo de la mente arquetípica. Esta es la runa de la destrucción elemental, Situación que escapa a tu control. A pesar de que esta runa se interpreta solo al derecho, siempre funciona a través del lado revés. Cuando esta runa sale en tu tirada, espera rompimiento o fracaso en tus planes, porque es la gran despertadora, aunque la forma de despertar puede variar; quizás experimentarás un sentimiento de un gran sueño, también la irrupción del poder puede ser tal , que puede destruir el castillo que tu conocías como tu realidad, tu seguridad, tu comprensión de ti mismo, tu trabajo, tus relaciones y tus creencias. Sin embargo, ten consciencia que lo que está operando aquí, en última instancia, no son fuerzas externas, es decir, no estás a merced de lo externo, sino que es tu propia naturaleza la que está creando lo que está sucediendo. La fuerza interior que has acumulado hasta ahora en tu vida es tu soporte y guía al mismo tiempo, cuando todo lo que has dado por hecho está cambiando. Recibiendo esta runa, se te está avisando que puedes sufrir una pérdida o daño: un árbol que puede caer sobre tu casa, una relación que termina, planes que faltan o el origen de tus subsistencias se acaba. Pero como ya estás advertido, atrévete a comprender y aceptar lo que ocurra como necesario para tu crecimiento. No hay nada superficial en esta runa, pues mientras más severa sea la destrucción más significativos y oportunos serán los requerimientos para tu crecimiento, porque esta es otra de tas runas del Ciclo de transformación del Ser. El término "total discontinuidad" describe mejor la acción poderosa y potente de esta runa. El universo y tu propia alma te están exigiendo lo que debes hacer y eso es, por supuesto, crecer. Lo siento tienes que instalar Quitcktime para escuchar la musica desde http://www.apple.com/es/quicktime/download/',
    inverted:
      "Esta runa es simétrica e inmutable; no posee posición invertida. Su poder arquetípico opera con igual pureza luminosa en cualquier sentido que aparezca en la tirada.",
    counsel:
      "Lo siento tienes que instalar Quitcktime para escuchar la musica desde http://www.",
    reversible: false,
  },
  {
    id: "raido",
    number: 20,
    name: "RAIDO",
    transliteration: "R",
    meaning: "El Viaje, Comunicación, Unión del Carro Sagrado",
    aett: "Aett de Freyr",
    archetype: "Thor / El Carro de los Dioses en su Senda Celeste",
    keywords: ["El Viaje", "Ritmo Cósmico", "Reunión", "Movimiento Armónico"],
    symbolism:
      'sta runa está relacionada con la comunicación, con la armonía de algo que tiene dos lados, dos elementos y con la reunión que llega cuando al final del camino están unidos lo que está arriba y lo que está abajo ; este camino es el camino del alma. Este acercamiento se realiza más por medio de un sentimiento interno que por la fuerza de las circunstancias. Una simple plegaria para el viaje del alma es: "Quiero ser lo que Tú quieras" . Esta plegaria es apropiada en casi cualquier ocasión y es muy conveniente como preámbulo para la sanación. El valor de lo interno es muy grande aquí y durante este período debemos recordar que no podemos depender solamente de nuestro propio poder, sino más bien, preguntarnos cuál es la acción correcta y adecuada que debemos utilizar. Pregunta a través de una oración, dirigiéndote a tu propio conocimiento, al conocimiento de tu cuerpo, a la observación de la conciencia, a tu maestro interno. Una vez que te has aclarado, puedes ver qué es lo que te impide que a través tuyo fluyan tus acciones adecuadas para tu crecimiento. No intentes ningún movimiento, conténtate con esperar y mientras esperas, continúa superando tus resistencias. Al desaparecer las obstrucciones toda la ansiedad desaparece. Como siempre, el viaje es hacia la sanación del Ser, el cambio del Ser y la unión del Ser. Estás tratado aquí, nada menos que con una perfecta unión interna, sin obstrucciones, pero la unión de Cielo y la Tierra no pueden ser forzadas, así es que mantente dentro de tus propios límites y regula todos los excesos en tu vida. Las ventajas materiales no deben pesar en este viaje del Ser hacia sí mismo. Confía en tu propio proceso, esta es la esconda de esta runa y continúa destruyendo tus ilusiones. Apártate de otros que piensan igual que tú, la noción de fuerza de grupo no es aplicable en este caso, porque esta parte del viaje no puede ser compartida. Los sentimientos más profundos deben ser expresados espontáneamente, esa es la única acción correcta aquí. Esta runa te urge a que emprendas tu búsqueda y si ya has comenzado, continua adelante.',
    upright:
      'sta runa está relacionada con la comunicación, con la armonía de algo que tiene dos lados, dos elementos y con la reunión que llega cuando al final del camino están unidos lo que está arriba y lo que está abajo ; este camino es el camino del alma. Este acercamiento se realiza más por medio de un sentimiento interno que por la fuerza de las circunstancias. Una simple plegaria para el viaje del alma es: "Quiero ser lo que Tú quieras" . Esta plegaria es apropiada en casi cualquier ocasión y es muy conveniente como preámbulo para la sanación. El valor de lo interno es muy grande aquí y durante este período debemos recordar que no podemos depender solamente de nuestro propio poder, sino más bien, preguntarnos cuál es la acción correcta y adecuada que debemos utilizar. Pregunta a través de una oración, dirigiéndote a tu propio conocimiento, al conocimiento de tu cuerpo, a la observación de la conciencia, a tu maestro interno. Una vez que te has aclarado, puedes ver qué es lo que te impide que a través tuyo fluyan tus acciones adecuadas para tu crecimiento. No intentes ningún movimiento, conténtate con esperar y mientras esperas, continúa superando tus resistencias. Al desaparecer las obstrucciones toda la ansiedad desaparece. Como siempre, el viaje es hacia la sanación del Ser, el cambio del Ser y la unión del Ser. Estás tratado aquí, nada menos que con una perfecta unión interna, sin obstrucciones, pero la unión de Cielo y la Tierra no pueden ser forzadas, así es que mantente dentro de tus propios límites y regula todos los excesos en tu vida. Las ventajas materiales no deben pesar en este viaje del Ser hacia sí mismo. Confía en tu propio proceso, esta es la esconda de esta runa y continúa destruyendo tus ilusiones. Apártate de otros que piensan igual que tú, la noción de fuerza de grupo no es aplicable en este caso, porque esta parte del viaje no puede ser compartida. Los sentimientos más profundos deben ser expresados espontáneamente, esa es la única acción correcta aquí. Esta runa te urge a que emprendas tu búsqueda y si ya has comenzado, continua adelante.',
    inverted:
      "Recibiendo esta runa al revés, te advierte que debes ser especialmente cuidadoso con tus relaciones personales ; en este período las rupturas son más posibles que las reconcilia&shy;ciones, por esto es necesario que hagas un esfuerzo por mantener tu buen ánimo, no importa lo que suceda, los resultados dependen de ti. Las necesidades de tu proceso pueden desbaratar totalmente tus planes y si tienes aún expectativas que todo se solucionará, esto puede ser una evasión de lo esencial. A pesar de esto, lo que tu consideras desvíos, inconvenientes. destrucciones, bloqueos, fracasos y muertes, van a ser grandes oportunidades de caminos nuevos con unión y reunión, como los únicos destinos permanentes . Lo siento tienes que instalar Quitcktime para escuchar la musica desde http://www.apple.com/es/quicktime/download/",
    counsel:
      "Esta runa te urge a que emprendas tu búsqueda y si ya has comenzado, continua adelante.",
    reversible: true,
  },
  {
    id: "thurisaz",
    number: 21,
    name: "THURISAZ",
    transliteration: "TH",
    meaning: "Puerta Sagrada, No Acción, La Espina Protectora",
    aett: "Aett de Freyr",
    archetype: "Mjöllnir / El Martillo de Thor y el Guardián del Umbral",
    keywords: [
      "Puerta Sagrada",
      "Quietud Consciente",
      "Protección Férrea",
      "Umbral",
    ],
    symbolism:
      'Runa 21 THURISAZ Puerta, Lugar de No Acción C on una puerta como símbolo, esta runa indica que hay trabajo que debe realizarse tanto dentro como fuera de ti mismo. La puerta de tu mundo personal está resguardada por el deseo de transformación del Ser. Llegar aquí es un reconocimiento de que estás preparado para contactarte con el "numinus" , lo Divino, que iluminará tu experiencia de trascender los límites del pequeño ser. Esta runa indica no actuar. La puerta no es para aproximarse y pasar sin contemplación. Aquí estás enfrentado con el verdadero reflejo de lo que está oculto en ti, lo que debe ser expuesto y examinado antes que puede llevarse a cabo una acción con éxito. Esta runa fortalece tu habilidad de esperar, no es un momento para tomar decisiones. Profundas fuerzas transformadoras están trabajando en esta penúltima runa cíclica. Visualízate parado en la cima de una cumbre, tu vida entera yace debajo de ti. Antes de dar un paso hacia la puerta, detente y revisa tu pasado; los aprendizajes y las alegrías, las pruebas y las penas, todo lo que te trajo hasta aquí. Observa todo, bendícelo y déjalo ir. AI dejar el pasado, tu reclamas lo que verdaderamente es tuyo, tu poder en la existencia. Pasa ahora a través de la puerta.',
    upright:
      'Runa 21 THURISAZ Puerta, Lugar de No Acción C on una puerta como símbolo, esta runa indica que hay trabajo que debe realizarse tanto dentro como fuera de ti mismo. La puerta de tu mundo personal está resguardada por el deseo de transformación del Ser. Llegar aquí es un reconocimiento de que estás preparado para contactarte con el "numinus" , lo Divino, que iluminará tu experiencia de trascender los límites del pequeño ser. Esta runa indica no actuar. La puerta no es para aproximarse y pasar sin contemplación. Aquí estás enfrentado con el verdadero reflejo de lo que está oculto en ti, lo que debe ser expuesto y examinado antes que puede llevarse a cabo una acción con éxito. Esta runa fortalece tu habilidad de esperar, no es un momento para tomar decisiones. Profundas fuerzas transformadoras están trabajando en esta penúltima runa cíclica. Visualízate parado en la cima de una cumbre, tu vida entera yace debajo de ti. Antes de dar un paso hacia la puerta, detente y revisa tu pasado; los aprendizajes y las alegrías, las pruebas y las penas, todo lo que te trajo hasta aquí. Observa todo, bendícelo y déjalo ir. AI dejar el pasado, tu reclamas lo que verdaderamente es tuyo, tu poder en la existencia. Pasa ahora a través de la puerta.',
    inverted:
      'Un rápido impulso de tu desarrollo está simbolizado aquí. Cuando el proceso de crecimiento se acelera, tú debes hacer un alto en el camino para reconsiderar lo antiguo y para integrarte a lo nuevo; aprovecha estas detenciones. Si estás sufriendo dificultades, recuerda que la calidad de tu evolución depende solamente de ti, cerciórate que no estás sufriendo encima de tus sufrimientos actuales. Sacando esta runa al revés, te pide contemplación; decisiones apresuradas en este momento pueden causar arrepentimiento, porque lo más probable es que actúes por debilidad, engañándote acerca de las causas y creándote problemas más serios que aquellos que estás tratando de resolver. Los impulsos deben disminuirse conscientemente y soto darte paso a una meditada acción justa y correcta: "No trates de ir más alta de lo que aún no has comenzado" . Permanece tranquilo, intégrate y espera la voluntad del cielo, nada más es apropiado hacer ahora. Lo siento tienes que instalar Quitcktime para escuchar la musica desde http://www.apple.com/es/quicktime/download/',
    counsel: "Pasa ahora a través de la puerta.",
    reversible: true,
  },
  {
    id: "dagaz",
    number: 22,
    name: "DAGAZ",
    transliteration: "D",
    meaning: "Transformación, El Día, Luz y Gran Avance",
    aett: "Aett de Tyr",
    archetype: "Dagr / El Resplandor del Mediodía y la Alquimia Solar",
    keywords: ["Amanecer", "Gran Avance", "Iluminación Plena", "Despertar"],
    symbolism:
      "sta es la última runa del Ciclo de la transformación del Ser . Sacando a DAGAZ , se marca un cambio mayor o trascendencia en el proceso de la evolución personal, una completa transformación en la actitud, un giro en 180 grados. Para algunos, la transformación es tan absoluta que no podrán continuar viviendo más tiempo su vida en la forma habitual en que lo hacían. Debido a que el momento es el adecuado, el resultado está asegurado, aunque desde el punto de vista del futuro, nada es predecible. En cada persona hay al menos un momento trascendental en el cual, si se reconoce su importancia y se pesan sus pro y contra, transforma el curso de la vida para siempre. Por lo tanto, confía y entrégate totalmente aunque este momento requiera que saltes al vacío con las manos atadas. Con esta runa tu naturaleza guerrera se revela. Si DAGAZ está seguido por la Runa en blanco, la magnitud de la transformación puede ser tan radical, que puede pronosticarse una muerte, que sería una conclusión exitosa en tu desarrollo. Un período de grandes logros y prosperidad es algunas veces introducido por esta Runa. La oscuridad está detrás tuyo. la luz del día ha llegado, sin embargo, como siempre tú debes estar alerta para no dejarte llevar o decaer en el futuro o de comportarte descuidadamente en tu nueva situación. Se te advierte* además, que esta transformación envuelve en sí mucho trabajo personal. Lo siento tienes que instalar Quitcktime para escuchar la musica desde http://www.apple.com/es/quicktime/download/",
    upright:
      "sta es la última runa del Ciclo de la transformación del Ser . Sacando a DAGAZ , se marca un cambio mayor o trascendencia en el proceso de la evolución personal, una completa transformación en la actitud, un giro en 180 grados. Para algunos, la transformación es tan absoluta que no podrán continuar viviendo más tiempo su vida en la forma habitual en que lo hacían. Debido a que el momento es el adecuado, el resultado está asegurado, aunque desde el punto de vista del futuro, nada es predecible. En cada persona hay al menos un momento trascendental en el cual, si se reconoce su importancia y se pesan sus pro y contra, transforma el curso de la vida para siempre. Por lo tanto, confía y entrégate totalmente aunque este momento requiera que saltes al vacío con las manos atadas. Con esta runa tu naturaleza guerrera se revela. Si DAGAZ está seguido por la Runa en blanco, la magnitud de la transformación puede ser tan radical, que puede pronosticarse una muerte, que sería una conclusión exitosa en tu desarrollo. Un período de grandes logros y prosperidad es algunas veces introducido por esta Runa. La oscuridad está detrás tuyo. la luz del día ha llegado, sin embargo, como siempre tú debes estar alerta para no dejarte llevar o decaer en el futuro o de comportarte descuidadamente en tu nueva situación. Se te advierte* además, que esta transformación envuelve en sí mucho trabajo personal. Lo siento tienes que instalar Quitcktime para escuchar la musica desde http://www.apple.com/es/quicktime/download/",
    inverted:
      "Esta runa es simétrica e inmutable; no posee posición invertida. Su poder arquetípico opera con igual pureza luminosa en cualquier sentido que aparezca en la tirada.",
    counsel:
      "Lo siento tienes que instalar Quitcktime para escuchar la musica desde http://www.",
    reversible: false,
  },
  {
    id: "isa",
    number: 23,
    name: "ISA",
    transliteration: "I",
    meaning: "Detención, El Hielo, Pausa Necesaria, Quietud",
    aett: "Aett de Heimdall",
    archetype: "Rime-Giants / La Quietud del Invierno Ártico",
    keywords: [
      "Hielo Sagrado",
      "Inmovilidad Fértil",
      "Pausa",
      "Cristalización",
    ],
    symbolism:
      'Runa 23 ISA Detención, lo que impide, El Cielo. E l invierno de la vida espiritual está sobre ti. Puedes encontrarte enredado en una situación de cuyas implicancias estás, en efecto, ciego. Puedes estar indefenso, si es así, no hagas nada excepto someterte, rendirte incluso sacrificando algún deseo que a lo mejor, has anhelado largo tiempo. Sé paciente, porque éste es un período de espera que precede al renacimiento. Es difícil que ocurran logros positivos ahora, pues hay un congelamiento de toda actividad útil y todos tus planes estarán detenidos. Además puedes estar sintiendo una desacostumbrada pérdida de energía y te preguntes: ¿por qué pareciera que un viento muy frío me estuviera convirtiendo en hielo junto con mis viejos condicionamientos? Tratar de detenerlo, podría significar una falta de profundidad en los sentimientos, en el sentido de perder el contacto con tu propia vida, o sea, estar desfasada. Trata de descubrir lo que te paraliza y déjalo ir. Cambia, libérate y purifica todo lo antiguo, viejo y arcaico, eso te hará fluir, deshielar. Generalmente esta runa exige un sacrificio personal, el Yo, el ego. Aún así. no hay razón para la ansiedad. Sométete y quédate tranquilo, porque lo que tú estás experimentando no es necesariamente el resultado, de tus acciones o tus condiciona&shy;mientos, sino de las condiciones del momento contra los cuales tu no puedes hacer nada, porque "lo que ha estado lleno debe vaciarse y lo que ha aumentado debe disminuir" . En esta forma actúa el Cielo y la Tierra rendirse es demostrar valentía y sabiduría. En un momento así, no confíes en la ayuda de los amigos. En tu soledad, ejercita la cautela y no seas obsesivo intentando sólo hacer tu voluntad. Permanece consciente, pues la semilla de lo nuevo está presente en la cáscara de lo antiguo, la semilla del potencial que aún no se ha manifestado, la semilla del Bien. Confía en tu propio proceso y espera con calma los signos de la Primavera que llegará. Lo siento tienes que instalar Quitcktime para escuchar la musica desde http://www.apple.com/es/quicktime/download/',
    upright:
      'Runa 23 ISA Detención, lo que impide, El Cielo. E l invierno de la vida espiritual está sobre ti. Puedes encontrarte enredado en una situación de cuyas implicancias estás, en efecto, ciego. Puedes estar indefenso, si es así, no hagas nada excepto someterte, rendirte incluso sacrificando algún deseo que a lo mejor, has anhelado largo tiempo. Sé paciente, porque éste es un período de espera que precede al renacimiento. Es difícil que ocurran logros positivos ahora, pues hay un congelamiento de toda actividad útil y todos tus planes estarán detenidos. Además puedes estar sintiendo una desacostumbrada pérdida de energía y te preguntes: ¿por qué pareciera que un viento muy frío me estuviera convirtiendo en hielo junto con mis viejos condicionamientos? Tratar de detenerlo, podría significar una falta de profundidad en los sentimientos, en el sentido de perder el contacto con tu propia vida, o sea, estar desfasada. Trata de descubrir lo que te paraliza y déjalo ir. Cambia, libérate y purifica todo lo antiguo, viejo y arcaico, eso te hará fluir, deshielar. Generalmente esta runa exige un sacrificio personal, el Yo, el ego. Aún así. no hay razón para la ansiedad. Sométete y quédate tranquilo, porque lo que tú estás experimentando no es necesariamente el resultado, de tus acciones o tus condiciona&shy;mientos, sino de las condiciones del momento contra los cuales tu no puedes hacer nada, porque "lo que ha estado lleno debe vaciarse y lo que ha aumentado debe disminuir" . En esta forma actúa el Cielo y la Tierra rendirse es demostrar valentía y sabiduría. En un momento así, no confíes en la ayuda de los amigos. En tu soledad, ejercita la cautela y no seas obsesivo intentando sólo hacer tu voluntad. Permanece consciente, pues la semilla de lo nuevo está presente en la cáscara de lo antiguo, la semilla del potencial que aún no se ha manifestado, la semilla del Bien. Confía en tu propio proceso y espera con calma los signos de la Primavera que llegará. Lo siento tienes que instalar Quitcktime para escuchar la musica desde http://www.apple.com/es/quicktime/download/',
    inverted:
      "Esta runa es simétrica e inmutable; no posee posición invertida. Su poder arquetípico opera con igual pureza luminosa en cualquier sentido que aparezca en la tirada.",
    counsel:
      "Permanece consciente, pues la semilla de lo nuevo está presente en la cáscara de lo antiguo, la semilla del potencial que aún no se ha manifestado, la semilla del Bien.",
    reversible: false,
  },
  {
    id: "sowelu",
    number: 24,
    name: "SOWELU",
    transliteration: "S",
    meaning: "Integridad, La Fuerza del Sol, Victoria Solar",
    aett: "Aett de Heimdall",
    archetype: "Sol / Sunna / La Carroza Radiante del Astro Rey",
    keywords: [
      "Sol Invictus",
      "Integridad",
      "Fuerza Vital",
      "Claridad Triunfante",
    ],
    symbolism:
      'lo cual siempre tiende nuestra naturaleza. Esta runa te da el impulso necesario hacia la realización del Ser y te indica el camino individualidad. La búsqueda de la integridad es la tarea del Guerrero Espiritual y lo que te estás esforzando en llegar a ser en la actualidad, es lo que eres por naturaleza, solo que debes hacerlo en forma consciente, darte forma y expresarlo de una manera creativa. Esta es una runa de gran poder, que hace que estén disponibles para ti las fuerzas de la vida para que puedas regenerarte adecuadamente a un nivel celular. Seguramente estás experimentando ese poder que surge de ti, porque las energías que están involucradas pueden ser drásticas. Aunque esta runa no tiene una posición invertida, hay bastante razón para tener cautela, especialmente porque puedes desear retirarte frente a una situación angustiante que te está exigiendo gran pérdida de energía. Debes tener consciencia que tal retirada es un retiro con fuerza y puede significar un viaje a tu interior para centrarte, para equilibrarte y para integrarte. Una retirada a tiempo está dentro de las habilidades de un Guerrero Espiritual. Para algunos, además, esta runa aconseja abrirse, dejando que la luz entre en aquella parte oculta de tu vida que ha estado encerrada, en secreto. Para llevar a cabo esto, se requiere de un profundo reconocimiento que te permita aceptar o admitir ante ti mismo algo que te has negado por mucho tiempo. Hay una plegaria conocida como el Gayatri que simboliza el espíritu de esta runa. Invoca al sol en esta forma: &#8220;Tú que eres la fuente de todo poder cuyos rayos iluminan al mundo entero, ilumina también mi corazón para que pueda hacer su trabajo" Mientras recitas el Gayatri , visualiza los rayos del sol brillando hacia el mundo, entrando en tu propio corazón y luego esparciendo su luz desde el centro de tu corazón. Esta es una plegaria muy poderosa y de gran valor para tu vida. Sin embargo, otra vez hay una advertencia aquí, no presumir. Aún en momentos de gran energía necesitas enfrentarte, conquistar y vencer tu negatividad para que pueda fluir a través de ti la acción correcta deseada. Por lo tanto, no dejes de nutrir esta capacidad porque ella es tu verdadera función. Practica el arte de no forzar, inténtalo verdaderamente y mantén tu objetivo, sin manipulación. Medita en tas palabras de Jesús: "Yo no puedo hacer nada conmigo mismo" y comprende que por nuestro propio poder y voluntada nosotros no podemos hacer nada; aún en el amor, es el amor el que ama a través de nosotros. Esta forma de pensar, el poder de integrarte a nuevas energías y permitirte fluir hacia la integridad. es la meta del Guerrero Espiritual y el más íntimo deseo de realización del ser humano. Lo siento tienes que instalar Quitcktime para escuchar la musica desde http://www.apple.com/es/quicktime/download/',
    upright:
      'lo cual siempre tiende nuestra naturaleza. Esta runa te da el impulso necesario hacia la realización del Ser y te indica el camino individualidad. La búsqueda de la integridad es la tarea del Guerrero Espiritual y lo que te estás esforzando en llegar a ser en la actualidad, es lo que eres por naturaleza, solo que debes hacerlo en forma consciente, darte forma y expresarlo de una manera creativa. Esta es una runa de gran poder, que hace que estén disponibles para ti las fuerzas de la vida para que puedas regenerarte adecuadamente a un nivel celular. Seguramente estás experimentando ese poder que surge de ti, porque las energías que están involucradas pueden ser drásticas. Aunque esta runa no tiene una posición invertida, hay bastante razón para tener cautela, especialmente porque puedes desear retirarte frente a una situación angustiante que te está exigiendo gran pérdida de energía. Debes tener consciencia que tal retirada es un retiro con fuerza y puede significar un viaje a tu interior para centrarte, para equilibrarte y para integrarte. Una retirada a tiempo está dentro de las habilidades de un Guerrero Espiritual. Para algunos, además, esta runa aconseja abrirse, dejando que la luz entre en aquella parte oculta de tu vida que ha estado encerrada, en secreto. Para llevar a cabo esto, se requiere de un profundo reconocimiento que te permita aceptar o admitir ante ti mismo algo que te has negado por mucho tiempo. Hay una plegaria conocida como el Gayatri que simboliza el espíritu de esta runa. Invoca al sol en esta forma: &#8220;Tú que eres la fuente de todo poder cuyos rayos iluminan al mundo entero, ilumina también mi corazón para que pueda hacer su trabajo" Mientras recitas el Gayatri , visualiza los rayos del sol brillando hacia el mundo, entrando en tu propio corazón y luego esparciendo su luz desde el centro de tu corazón. Esta es una plegaria muy poderosa y de gran valor para tu vida. Sin embargo, otra vez hay una advertencia aquí, no presumir. Aún en momentos de gran energía necesitas enfrentarte, conquistar y vencer tu negatividad para que pueda fluir a través de ti la acción correcta deseada. Por lo tanto, no dejes de nutrir esta capacidad porque ella es tu verdadera función. Practica el arte de no forzar, inténtalo verdaderamente y mantén tu objetivo, sin manipulación. Medita en tas palabras de Jesús: "Yo no puedo hacer nada conmigo mismo" y comprende que por nuestro propio poder y voluntada nosotros no podemos hacer nada; aún en el amor, es el amor el que ama a través de nosotros. Esta forma de pensar, el poder de integrarte a nuevas energías y permitirte fluir hacia la integridad. es la meta del Guerrero Espiritual y el más íntimo deseo de realización del ser humano. Lo siento tienes que instalar Quitcktime para escuchar la musica desde http://www.apple.com/es/quicktime/download/',
    inverted:
      "Esta runa es simétrica e inmutable; no posee posición invertida. Su poder arquetípico opera con igual pureza luminosa en cualquier sentido que aparezca en la tirada.",
    counsel:
      "Lo siento tienes que instalar Quitcktime para escuchar la musica desde http://www.",
    reversible: false,
  },
  {
    id: "odin",
    number: 25,
    name: "RUNA EN BLANCO / ODIN",
    transliteration: "—",
    meaning: "El Vacío Creador, Lo Trascendente, Wyrd",
    aett: "Runa de Odín",
    archetype: "Odín el Padre de Todo / El Incognoscible Misterio del Ser",
    keywords: [
      "Wyrd",
      "Confianza Total",
      "El Vacío Sagrado",
      "Destino Trascendente",
    ],
    symbolism:
      'Runas RUNA EN BLANCO El Dios Odín, El que no es posible conocer L a runa en blanco es el final y es el principio. Esta es la runa de la total confianza y debe tomarse como una evidencia excitante de tu contacto más inmediato con tu destino el cual una y otra vez, emerge como el ave fénix de las brasas. La runa en blanco puede anunciar muerte, pero esta muerte es generalmente simbólica y puede estar relacionada con cualquier aspecto de tu vida que estés viviendo ahora. Abandonar el control es el máximo desafío para el Guerrero Espiritual. Aquí, "el que no puede ser conocido" , te informa que en tu vida hay un gran movimiento esta situación nos muestra un indudable potencial, al mismo tiempo repleto y vacío, lo que comprende la totalidad de tu ser y todo aquello que debe ser actualizado. Sacando la runa en blanco, surgen en la superficie nuestros miedos más profundos: ¿Fracasaré? ¿Seré abandonado? ¿Me quitarán todo? pero, a pesar de ellos y dentro de la blancura de la runa, están contenidos nuestros más elevados deseos, nuestras posibilidades más auténticas y nuestros sueños más queridos. Buena voluntad y una gran aceptación es lo que esta runa requiere porque ¿Cómo puedes controlar lo que aún no tiene forma, lo desconocido? Otra vez esta runa exige un acto de valentía, que no sea menor que lanzarse al vacío. Sacándola, por lo tanto, es un acto de Fe. En un sentido, la runa en blanco representa el camino del Karma , la suma total de lo que has hecho y los límites de lo que eres, y lo que serás. Al mismo tiempo esta runa nos enseña que las viejas deudas del Karma cambian y evolucionan, así como tú cambias y evolucionas. Nada está predestinado, no hay nada que no pueda ser modificado. Y si en verdad hay aspectos que están ocultos por los dioses, solo necesitas recordar que lo que se señala aquí es el "poder creativo de lo desconocido" . Cada vez que tú saques la runa en blanco, prepárate: porque te está indicando que es la base del cambio del. Ser y que tomes conciencia que el trabajo de la transformación de tu propio Ser. ha llegado a tu vida. Lo siento tienes que instalar Quitcktime para escuchar la musica desde http://www.apple.com/es/quicktime/download/',
    upright:
      'Runas RUNA EN BLANCO El Dios Odín, El que no es posible conocer L a runa en blanco es el final y es el principio. Esta es la runa de la total confianza y debe tomarse como una evidencia excitante de tu contacto más inmediato con tu destino el cual una y otra vez, emerge como el ave fénix de las brasas. La runa en blanco puede anunciar muerte, pero esta muerte es generalmente simbólica y puede estar relacionada con cualquier aspecto de tu vida que estés viviendo ahora. Abandonar el control es el máximo desafío para el Guerrero Espiritual. Aquí, "el que no puede ser conocido" , te informa que en tu vida hay un gran movimiento esta situación nos muestra un indudable potencial, al mismo tiempo repleto y vacío, lo que comprende la totalidad de tu ser y todo aquello que debe ser actualizado. Sacando la runa en blanco, surgen en la superficie nuestros miedos más profundos: ¿Fracasaré? ¿Seré abandonado? ¿Me quitarán todo? pero, a pesar de ellos y dentro de la blancura de la runa, están contenidos nuestros más elevados deseos, nuestras posibilidades más auténticas y nuestros sueños más queridos. Buena voluntad y una gran aceptación es lo que esta runa requiere porque ¿Cómo puedes controlar lo que aún no tiene forma, lo desconocido? Otra vez esta runa exige un acto de valentía, que no sea menor que lanzarse al vacío. Sacándola, por lo tanto, es un acto de Fe. En un sentido, la runa en blanco representa el camino del Karma , la suma total de lo que has hecho y los límites de lo que eres, y lo que serás. Al mismo tiempo esta runa nos enseña que las viejas deudas del Karma cambian y evolucionan, así como tú cambias y evolucionas. Nada está predestinado, no hay nada que no pueda ser modificado. Y si en verdad hay aspectos que están ocultos por los dioses, solo necesitas recordar que lo que se señala aquí es el "poder creativo de lo desconocido" . Cada vez que tú saques la runa en blanco, prepárate: porque te está indicando que es la base del cambio del. Ser y que tomes conciencia que el trabajo de la transformación de tu propio Ser. ha llegado a tu vida. Lo siento tienes que instalar Quitcktime para escuchar la musica desde http://www.apple.com/es/quicktime/download/',
    inverted:
      "Esta runa es simétrica e inmutable; no posee posición invertida. Su poder arquetípico opera con igual pureza luminosa en cualquier sentido que aparezca en la tirada.",
    counsel:
      "Lo siento tienes que instalar Quitcktime para escuchar la musica desde http://www.",
    reversible: false,
  },
];
