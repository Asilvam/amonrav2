export interface TarotCard {
  id: string;
  number: number;
  romanNumeral: string;
  name: string;
  archetype: string;
  symbolism: string;
  concrete: string;
  work: string;
  money: string;
  friendship: string;
  family: string;
  health: string;
  love: string;
}

export interface TarotSpreadPosition {
  position: number;
  name: string;
  description: string;
}

export interface TarotSpread {
  id: string;
  name: string;
  subtitle: string;
  cardsCount: number;
  usage: string;
  instructions: string[];
  positions: TarotSpreadPosition[];
  advice?: string;
}

export interface TarotTradition {
  id: string;
  title: string;
  origin: string;
  subtitle: string;
  description: string;
  details: string[];
  correspondences?: {
    item: string;
    equivalent: string;
    meaning: string;
  }[];
}

export interface TarotEthicsRule {
  id: string;
  title: string;
  summary: string;
  avoidTitle?: string;
  avoidExamples?: string[];
  preferTitle?: string;
  preferExamples?: string[];
  explanation: string;
}

export interface TarotHistoryEntry {
  period: string;
  title: string;
  kind: "Historia documentada" | "Tradición esotérica";
  description: string;
}

export const tarotIntro = {
  quote: {
    text: "La vida es un proceso, es un torrente de movimientos. Las cartas de Tarot pueden ayudarte a decidir la naturaleza y las características de lo que sucede a tu alrededor y qué cosas desempeñan un papel en ello.",
    author: "Karen Hamaker Zondag",
    source: "El Tarot como Vía de Conocimiento (Editorial Urano)",
  },
  motto:
    "Amonra: Una luz en vuestro camino. Fuente de sabiduría para vuestro ser. Feliluxor: Fe y felicidad en la luz de oro.",
  centralThesis:
    "El Tarot no decreta un destino pétreo ni inmutable: es un espejo sagrado del inconsciente y un lenguaje de arquetipos universales que permite comprender los procesos vivenciales, transformar las crisis en evolución y tomar decisiones conscientes.",
  foundationalText:
    "Las cartas del Tarot están impregnadas de una profunda simbología iniciática. La evidencia histórica disponible sitúa la formación de los mazos europeos en la Italia del siglo XV. La tradición esotérica posterior los vinculó con juegos antiguos de China y la India, con el antiguo Egipto, el Libro de Thoth y la Tabla Esmeralda; esas conexiones forman parte de la interpretación simbólica, no de un origen histórico demostrado.",
  perspectives: [
    {
      title: "Perspectiva Adivinatoria y Predictiva",
      description:
        "Tradicionalmente el Tarot se ha difundido como una mancia para escrutar el porvenir. Bajo esta premisa, el consultante busca conocer su futuro y puede asumir la existencia de un destino predeterminado. Sus practicantes interpretan las cartas como tendencias o posibilidades; no constituyen una predicción verificable ni sustituyen la decisión personal.",
    },
    {
      title: "Perspectiva Psicológica y Terapéutica",
      description:
        "Desarrollada en diálogo con la psicología simbólica y con autoras como Karen Hamaker Zondag, Sallie Nichols, Rachel Pollack, Mary Greer, Liz Greene y Hajo Banzhaf, esta visión no pretende imponer lo que forzosamente va a ocurrir. Explora el simbolismo de las imágenes para comprender el proceso anímico por el que transita la persona, sin presentarse como psicoterapia clínica.",
    },
  ],
  minorArcanaDoctrine: {
    title: "La estructura de los 56 Arcanos Menores",
    summary:
      "Mientras los 22 Arcanos Mayores rigen las grandes lecciones arquetípicas del alma, los 56 Arcanos Menores revelan las situaciones cotidianas del día a día, los aspectos más inmediatos y mundanos de la experiencia terrenal.",
    structureNote:
      "La estructura tradicional reúne cuatro palos. Cada palo suele recorrer del As al Diez y continúa con cuatro figuras de corte: Sota, Caballero, Reina y Rey. Algunas barajas cambian los nombres o eliminan figuras, por lo que esta descripción debe leerse como una guía de la tradición presentada por Amonra.",
    ranks: [
      {
        name: "Cartas numeradas",
        range: "As al Diez",
        meaning:
          "Describen movimientos, situaciones y aprendizajes graduales de la vida cotidiana.",
      },
      {
        name: "Figuras de corte",
        range: "Sota, Caballero, Reina y Rey",
        meaning:
          "Representan personas, actitudes o grados de madurez en la expresión del palo.",
      },
    ],
    suits: [
      {
        name: "Oros / Diamantes",
        element: "Tierra",
        domain:
          "Trabajo, economía, bienes materiales, esfuerzo práctico y estabilidad tangible.",
        symbolism:
          "La ofrenda terrenal, la semilla fecunda y la prosperidad tangible.",
      },
      {
        name: "Copas / Corazones",
        element: "Agua",
        domain:
          "Sentimientos, afectos, vida familiar, gozo interior y bienestar espiritual.",
        symbolism:
          "El Santo Grial, el cáliz sagrado de comunión y la fuente de la compasión.",
      },
      {
        name: "Espadas / Picas",
        element: "Aire",
        domain:
          "Mente, discernimiento, conflictos éticos, pruebas kármicas y confrontación.",
        symbolism:
          "La espada de David y el ángel que custodia el Paraíso; arma de doble filo que corta la ilusión.",
      },
      {
        name: "Bastos / Tréboles",
        element: "Fuego",
        domain:
          "Iniciativa, voluntad creadora, dinamismo, proyectos y canalización de la pasión.",
        symbolism:
          "La vara florida y la rama del Árbol de la Vida que impulsa el crecimiento incesante.",
      },
    ],
  },
};

export const tarotHistory: TarotHistoryEntry[] = [
  {
    period: "Siglo XV",
    title: "Las primeras referencias europeas",
    kind: "Historia documentada",
    description:
      "Las referencias conservadas sitúan los primeros juegos de Tarot en Italia durante el siglo XV. Entre los testimonios más citados están los mazos vinculados a la familia Visconti-Sforza y a las cortes renacentistas. En esta etapa el Tarot era principalmente un juego de cartas ilustradas, no todavía un sistema ocultista uniforme.",
  },
  {
    period: "Siglos XV–XVI",
    title: "Difusión por Europa y consolidación de los palos",
    kind: "Historia documentada",
    description:
      "Los juegos de Tarot se extendieron desde Italia hacia Francia y otras regiones europeas. Con el tiempo se consolidaron los cuatro palos y distintas familias de barajas, mientras las imágenes adquirían usos lúdicos, alegóricos y posteriormente adivinatorios.",
  },
  {
    period: "1781",
    title: "La lectura egipcia de Court de Gébelin",
    kind: "Tradición esotérica",
    description:
      "Antoine Court de Gébelin propuso que el Tarot conservaba los misterios de Isis y Thoth y que su nombre podía interpretarse como un camino real hacia la sabiduría. Estas ideas tuvieron enorme influencia en el ocultismo posterior, aunque no constituyen una prueba histórica de un origen egipcio.",
  },
  {
    period: "Finales del siglo XVIII",
    title: "Etteilla y el primer Tarot esotérico moderno",
    kind: "Historia documentada",
    description:
      "Jean-Baptiste Alliette, conocido como Etteilla, desarrolló uno de los primeros sistemas de Tarot diseñado específicamente para la adivinación. Incorporó correspondencias astrológicas, motivos egipcios y significados escritos en las cartas.",
  },
  {
    period: "Siglo XIX",
    title: "Cábala, alquimia y ocultismo europeo",
    kind: "Tradición esotérica",
    description:
      "Eliphas Lévi, Papus y otras corrientes ocultistas relacionaron el Tarot con la Cábala, los cuatro elementos y la alquimia. Estas asociaciones ayudaron a formar el lenguaje esotérico moderno del Tarot, aunque deben diferenciarse de la historia documentada de las barajas.",
  },
  {
    period: "1909–1910",
    title: "Rider-Waite-Smith y la imagen moderna",
    kind: "Historia documentada",
    description:
      "Arthur Edward Waite y Pamela Colman Smith crearon una baraja cuya iconografía influyó profundamente en la enseñanza contemporánea. La ilustración de escenas también en los Arcanos Menores facilitó su interpretación visual y pedagógica.",
  },
  {
    period: "1938–1944",
    title: "El Tarot de Thoth",
    kind: "Historia documentada",
    description:
      "Aleister Crowley y Frieda Harris desarrollaron otra baraja de gran influencia en el esoterismo occidental. Su lenguaje combina astrología, Cábala, alquimia y simbolismo ceremonial, y forma una tradición distinta de la de Marsella y Rider-Waite-Smith.",
  },
];

const majorArcanaSource: TarotCard[] = [
  {
    id: "el-loco",
    number: 0,
    romanNumeral: "0",
    name: "El Loco",
    archetype: "Dionisio / La Libertad de Espíritu",
    symbolism:
      "Este arcano representado por Dionisio, es la libertad de espíritu, el ser libre e indómito en esencia, sin ataduras materiales ni místicas. Es simple, natural, es el bohemio por excelencia. Es él, sin importarle como se vive en el mundo, por ello, no se lo compra con dinero, ni halagos, ni amor, ni nada. Es libre para todas sus decisiones, quiere o no quiere, según su voluntad, a la que solo él entiende. Es un incomprendido feliz, su conocimiento de las cosas es generalmente superior al resto de las personas y desde esa sabiduría y creatividad acciona, olvidando que la cotidianeidad social exige otros códigos y normas, por eso se lo percibe y rotula como extravagante, vagabundo, trasgresor. También, en alguna medida, representa la indisciplina que a veces bordea la locura, producto del mundo que no respeta su autonomía en acción y reacción. Son buenos inventores, artistas y aventureros a la conquista de nuevos mundos.",
    concrete:
      "Debe tener cuidado en la elección, posiblemente sea equivocada. Se recomienda ser reflexivo.",
    work: "Eventual o sin control de nadie, sin jefes, autodidacta y emprendedor.",
    money: "En la misma medida que se gana se gasta. No le da valor al dinero.",
    friendship: "Muchas y buenas pero con gran independencia.",
    family: "Bien pero a la distancia.",
    health: "Cuidar los pies y ciático.",
    love: "Auténtico, con gran pureza y sin esperar nada a cambio.",
  },
  {
    id: "el-mago",
    number: 1,
    romanNumeral: "I",
    name: "El Mago",
    archetype: "Mercurio / La Inteligencia Creadora",
    symbolism:
      'Este arcano, representado por Mercurio, hacedor de malabarismos en la comunicación, objeto y sujeto de la verdad y falsedad; transmite " la lucha que trae el triunfo" y derriba todas las opiniones y juicios establecidos sin tener claro el concepto de lo que es la conciencia. Manifiesta la inteligencia creativa y practica que alienta la audacia y conduce al éxito. Otorga el valor y la fuerza necesaria para vencer las adversidades y las enfermedades, porque el espíritu manda sobre el cuerpo físico. Si bien no es una carta de ayuda en temas sentimentales, aporta la inteligencia necesaria para salir de los problemas. Es la voluntad, la habilidad, la fuerza y el poder desde el cielo; energía de protección. Explota su talento de manera egoísta, tanto para utilizarlo al servicio del amor y de la luz, como de las tinieblas. Para el la verdad nunca puede ser absoluta porque siempre incluye un elemento de ilusión.',
    concrete:
      "Capacidad para acercarse al poder de lo alto y dirigirlo hacia la manifestación a través del deseo. Empleo del poder para fines destructivos. Indecisión y voluntad débil.",
    work: "Protección y solución de problemas.",
    money: "Ingenio para conseguirlo, salvación y llegada de dinero.",
    friendship: "Mal entendidos y obstáculos con amistades.",
    family: "Discusiones y malestares pasajeros.",
    health: "Cuidar la cabeza.",
    love: "Surgen conflictos que se resuelven con habilidad.",
  },
  {
    id: "la-sacerdotisa",
    number: 2,
    romanNumeral: "II",
    name: "La Sacerdotisa",
    archetype: "Isis / Los Misterios Ocultos",
    symbolism:
      "Este arcano está asociado a la inteligencia y los misterios ocultos. Está representado por Isis, la máxima exponente de la percepción extrasensorial y los talentos intuitivos como la clarividencia, la telepatía la visualización creativa, la empatía, el conocimiento intuitivo y los poderes de curación, Estas habilidades provienen de la armonía con las máximas verdades de las leyes cósmicas, a las que están sujetas y a cuyo servicio se practican. Energía que irradia iluminación, por tanto comprende pero no realiza. Para los hombres representa la mujer perfecta y soñada. La perceptividad y la habilidad para escuchar su propia voz interior, hacen de ella un ser de luz. Como el camello, que puede recorrer largas distancias por el desierto sin beber agua, las personas que han descubierto su pozo interior proyectan su autoconfianza y satisfacción.",
    concrete:
      "Futuro no revelado, influencias ocultas en acción. Es favorable a mujeres y niños.",
    work: "Aprendizaje que se aplicara en adelante, potencial ascenso.",
    money:
      "Momento de estancamiento por posibles impedimentos legales, promete un buen augurio.",
    friendship:
      "Buenas relaciones con las que se comparte actividades diversas y en donde brilla con sensualidad y encandila con vanidad.",
    family:
      "Reuniones y consejos familiares en los que podrás verte afortunada/o.",
    health: "Cuidar el cráneo y la cara.",
    love: "Son sentimientos poco apasionados pero leales. El amor es más mental que físico.",
  },
  {
    id: "la-emperatriz",
    number: 3,
    romanNumeral: "III",
    name: "La Emperatriz",
    archetype: "Venus / La Fertilidad Sensible",
    symbolism:
      "Este arcano encarna y rige la feminidad en todas sus manifestaciones. Representada por Venus, máxima expresión de amor, instinto maternal, belleza, sabiduría, conexión entre el espíritu y la materia; riqueza interior y exterior. Aparece como amante y madre, gobernante y sabia. Su fuerza radica en la sinergia entre los ideales y valores espirituales mas elevados, la expresión terrenal y sensual de su feminidad y su amor materializado en la alegría de vivir. La asimilación de la parte masculina da a la mujer un brillo especial y la hace más atractiva. Así como el pelicano alimenta a sus crías con su propia sangre, esta energía expresa el amor incondicional de la madre que nutre a sus hijos con todo su ser. La hermosa apariencia no es más que la indicación de algo más grande y más bello que se oculta dentro de sí. El sentimiento se conjuga con la comprensión y surge esa inteligencia especial que la caracteriza por su sensibilidad.",
    concrete:
      "Desplazamientos, vivir la vida rápidamente, felizmente, sin lagrimas. Riqueza material, fertilidad, creatividad,",
    work: "Relaciones sociales y superficialidad. Éxito y triunfo.",
    money: "Mucha apariencia y poco dinero.",
    friendship: "Simpáticas, superficiales e interesadas.",
    family:
      "Relaciones buenas y superficiales. Los problemas resultan un agobio.",
    health:
      "Cuidar zona otorrinolaringológica y genitalidad. Posible embarazo.",
    love: "Los sentimientos son apasionados, con mucha imaginación, pero bastante poco realistas e influenciables.",
  },
  {
    id: "el-emperador",
    number: 4,
    romanNumeral: "IV",
    name: "El Emperador",
    archetype: "Marte / El Liderazgo y la Autoridad",
    symbolism:
      "Este arcano esta representado por Marte, energía que desborda sabiduría creativa, liderazgo, valentía, espíritu aventurero y autoridad. Esta carta revela la otra cara del carnero salvaje; en donde las verdaderas cualidades de mando implican una subordinación humilde a las leyes de la naturaleza. Es el tipo de gobernante ideal, que siente una compasión tan intensa por su pequeña o gran familia, que esta siempre dispuesto a sacrificarse a si mismo por el bien de todos. Mientras que el emperador gobierne al servicio de la transformación y de los nuevos comienzos, su poder será bondadoso; pero habrá que tener cuidado si utiliza su poder para fortalecer lo que ya existe, porque esto paralizaría las estructuras de su reino y transformaría su valentía y firmeza en severidad. Si su autoridad fundada en la sabiduría se convierte en implacable resistencia al flujo constante de la vida, acarrearía su propia condena.",
    concrete:
      "Protección, dominio, actividad mental y poder para declarar la guerra. Se reciben frutos como resultado de la acción.",
    work: "Ejecutivo con dones de mando. Después del esfuerzo se premia la tenacidad con el éxito.",
    money:
      "Fluye generosamente, hay reservas. Buena administración, no se gasta en cosas innecesarias.",
    friendship: "Lealtad y bondad, sin demasiada expresión. Inseguridad.",
    family:
      "Su clan debe permanecer unido porque su autoridad y orgullo así lo requieren.",
    health: "Cuidar tensiones en cuello y espalda, migrañas.",
    love: "Buen amante y consejero, poco comprensivo que siempre quiere hacer a su manera.",
  },
  {
    id: "el-sumo-sacerdote",
    number: 5,
    romanNumeral: "V",
    name: "El Sumo Sacerdote",
    archetype: "El Hierofante / La Guía Espiritual",
    symbolism:
      "Este arcano no hace referencia a un dignatario de la iglesia, describe a alguien que ha sido consagrado e inspirado, ese verdadero maestro espiritual que puede enseñarnos a experimentar lo divino. En presencia del hierofante, todos los mecanismos de defensa deben abandonarse, pues él actúa como espejo para potenciar al máximo nuestro desarrollo. Envuelto del amor en su forma más pura, les otorga a los demás aquello que verdaderamente necesitan, no lo que esperan, provocando pensadamente, que se haga la luz de la conciencia en la oscuridad de la ignorancia. Simboliza la prudencia, el arma que mejor domina y emplea para esconder sus autenticas intenciones que casi nunca son las que manifiesta con la palabra. Aquí se conjugan lo masculino y lo femenino, los rasgos solemnes del guía espiritual y la inocencia del niño, en calido equilibrio con las emociones y los conocimientos. El verdadero cambio solo ocurre si estas sensible y abierto/a, si confías en el amor divino y te sometes a él.",
    concrete:
      "Reflexiones certeras que forjan futuro. Espiritualidad volcada a la materia, inteligencia practica.",
    work: "Con habilidad y prudencia se las ingenia para esforzarse lo menos posible en el trabajo.",
    money: "Fluye generosamente, mientras disimula no tenerlo.",
    friendship: "Falsedades, hipocresías, cobardías a la hora de la verdad.",
    family:
      "Relaciones distantes en donde reina la incomprensión y el escaso intercambio.",
    health: "Cuidar los huesos y la parte superior del tronco.",
    love: "Los sentimientos son poco apasionados, si bien con mucha educación y respeto, hay distancias vivenciadas intensamente por falta de calidez.",
  },
  {
    id: "los-enamorados",
    number: 6,
    romanNumeral: "VI",
    name: "Los Enamorados",
    archetype: "Eros / La Dualidad y la Elección",
    symbolism:
      "Este arcano es la expresión de dos seres opuestos que se desean y se atraen mutuamente. La dualidad reflejada en todos los aspectos de la vida, se experimenta existencialmente en la relación amorosa entre el hombre y la mujer. Cada nuevo intento de reconciliación, unión o contacto, manifiesta el impulso apasionado por restaurar la unidad perdida. Aquellas cosas que hacen irresistible a otra persona, son aspectos de nosotros mismos con los que deseamos encontrarnos. Por regla general, nuestra pareja expresa los aspectos poco desarrollados o reprimidos de nuestra propia personalidad. El motor de esta energía de vida es convertirnos en seres completos. La felicidad que intentamos encontrar desesperadamente en otras personas, solo la podemos hallar y cultivar dentro de nosotros mismos. Esta mixtura entre intelecto, emociones y espiritualidad, permite la comprensión de que una relación por si sola, no necesariamente trae la verdadera satisfacción.",
    concrete:
      "Se vivencia un alto voltaje de atracción e incertidumbre, que llega casi a la obsesión. Pasiones que pueden coronarse en amor verdadero o espejismos engañosos.",
    work: "Bienestar laboral, nuevos proyectos y mucha actividad.",
    money:
      "Hay buena suerte, no es recomendable obsesionarse por conseguir más.",
    friendship: "Admiraciones extremas que confunden la realidad.",
    family: "Periodo de distanciamientos, conflictos y criticas.",
    health: "Cuidar las clavículas, pulmones y órganos sexuales.",
    love: "Se vivencian atracciones que son eminentemente sexuales, despojadas de sentimientos comprometidos.",
  },
  {
    id: "el-carro",
    number: 7,
    romanNumeral: "VII",
    name: "El Carro",
    archetype: "Ares / La Marcha Triunfal",
    symbolism:
      "Este arcano representa el camino real que debemos hacer en la búsqueda de nuestra propia metamorfosis interior. La ruta por la que transita el Carro esta pavimentada de oro. Esta energía sopesa con cuidado las posibles consecuencias antes de empezar algo nuevo; pero una vez que se decide a encaminarse, no hay nada que lo pueda detener. Se aproximan cambios inminentes que irán acompañados de emoción y agitación. Con cada nuevo comienzo dejamos atrás la aburrida rutina de la vida cotidiana; y al hacerlo nos recargamos de energía renovada que nos inspira y multiplica las ideas, permitiéndonos realizar varias actividades a la vez, sin descuidar nuestros más altos ideales. La confianza en nuestro poder y verdad interior se vuelve más grande y profunda; las negatividades desaparecen dando paso concreto a la materialización de nuestros objetivos y metas anheladas.",
    concrete:
      "Es beneficiosa para cualquier situación, presagia triunfo y control sobre los designios de la naturaleza. Proyectos y conquistas rápidas.",
    work: "Llega la oportunidad esperada, no la deje pasar. El éxito vendrá rápidamente. Viajes.",
    money:
      "Mucha afluencia de dinero que se gasta con la misma facilidad con la que se lo gana.",
    friendship:
      "Siempre rodeado/a de gente buena, pero nunca en exclusividad; relaciones que cambian.",
    family: "Mucha unidad y afectividad, pero de vez en cuando.",
    health: "Cuidar las piernas.",
    love: "Buenos sentimientos, claridad, proyectos, compromiso, sensualidad y sexualidad.",
  },
  {
    id: "la-justicia",
    number: 8,
    romanNumeral: "VIII",
    name: "La Justicia",
    archetype: "Atenea / El Equilibrio Cósmico",
    symbolism:
      "Este arcano representa la imagen fascinante de perfectas balanzas, sinónimo del equilibrio más profundo del centro. Solo con un máximo de concentración y con la cesación de todo movimiento es posible crear este estado de equilibrio para todas las cosas; pues el más fugaz pensamiento perturbador, haría que todo tambaleara, alterando la armonía del universo. Simboliza el poder al servicio de los hombres y el cielo. Para los humanos es un instrumento de venganza y para los dioses de justicia. La búsqueda de esta nivelación marca un camino a seguir, pero es la realidad lo que mueve al espíritu, nunca la razón o los sentimientos. Esta es una energía que esgrime tiempos en los que el karma deberá ajustarse, ya sea positivo o negativo, porque la justicia siempre debe cumplirse para retornar a la estabilidad. La personalidad moderada requiere eliminar el exceso de equipaje, las ideas erróneas y las formas inútiles de la enseñanza, para dar paso al fluir de lo que marcan los relojes cósmicos.",
    concrete:
      "La verdad saldrá a la luz y se hará justicia. Retribución equitativa.",
    work: "Movimiento de papeles, nuevos contratos y juicio legal.",
    money: "Suficiente, pero no excesivo.",
    friendship:
      "Los más allegados juzgan nuestros actos y nos comprenden, pero les cuesta expresar sus sentimientos.",
    family:
      "Las apariencias indican armonía, la realidad muestra bienestar, los sentimientos son austeros pero acordes a las normas que impone la sociedad.",
    health: "Cuidar los brazos y el equilibrio.",
    love: "Intención de volver al orden, ya sea separándose de una relación desgastada o bien formalizando una nueva. Divorcio o casamiento legal.",
  },
  {
    id: "el-ermitano",
    number: 9,
    romanNumeral: "IX",
    name: "El Ermitaño",
    archetype: "Cronos / La Soledad y la Sabiduría",
    symbolism:
      "Este arcano representa la búsqueda de la realización interior y el encuentro con la luz. Es tan feliz con las riquezas del mundo espiritual, que el universo material, concreto y tangible, le parece descolorido e insignificante. Esta energía no sigue a la multitud, ni soporta la frivolidad y superficialidad de la gente en general; es por eso que no suele recibir ni atención, ni comprensión de aquellos que la rodean. El objetivo de este viaje es aprender a escuchar la voz interior, descubrir la guía interna y familiarizarse con la propia fuente de curación. El Ermitaño es la máxima representación de la soledad y la sabiduría, de la austeridad material, del pensamiento filosófico de la naturaleza y del revolucionario ferviente defensor de los más débiles, carenciados, oprimidos y discriminados. Consejero prudente y con vocación eclesiástica, que se siente guiado por la fuerza superior que le prohíbe las mezquindades del mundo.",
    concrete:
      "Prudencia y discreción. Recibir la sabiduría de arriba implica solicitar instrucción de un especialista en el campo requerido.",
    work: "Se recomienda no tomar ni decisiones ni iniciativas en este periodo.",
    money: "Hay austeridad económica, pero no se ambiciona más.",
    friendship: "Mayor compenetración en las relaciones y colaboración mental.",
    family:
      "El estado es ausente aún estando en presencia de sus seres queridos.",
    health: "Cuidar las extremidades inferiores.",
    love: "Distanciamiento de una relación que se vive como dificultosa.",
  },
  {
    id: "la-rueda-de-la-fortuna",
    number: 10,
    romanNumeral: "X",
    name: "La Rueda de la Fortuna",
    archetype: "Las Moiras / El Cambio Incesante",
    symbolism:
      "Este arcano es el símbolo de la totalidad, que a pesar de su movimiento constante, no cambia. La rueda gira en medio de una vorágine de energía y relámpagos. Aquí la sabiduría se desarrolla y despliega a partir de la unidad de los instintos animales y los poderes mentales intuitivos; con flexibilidad, discriminación y razonamiento claro. Las buenas oportunidades irradiaran como el sol, posibilitando la iluminación y creatividad que permitan hacerse cargo de ser los arquitectos diseñadores de la propia suerte. La vida siempre nos guarda sorpresas gratificantes e inesperadas, sólo necesitamos un ojo dispuesto y observador para poder registrarlas. Las viejas limitaciones podrán ser analizadas con buen criterio, brindando la calidez necesaria para que germinen las nuevas estrategias y fructifiquen.",
    concrete:
      "La suerte cambia inesperadamente trayendo nuevas y mejores condiciones. Período propicio para recoger lo sembrado.",
    work: "Los logros se conquistaran fácilmente, la buena fortuna ha llegado.",
    money: "Fluye en abundancia y sin esfuerzo.",
    friendship:
      "Las relaciones son muchas, superficiales e interesadas, que se aprovecharan de la generosidad, intentando obtener ventajas de cualquier índole.",
    family:
      "El clima es despreocupado y relajado, se disfrutan placeres y dinero, sin demasiada profundización de las cuestiones pertinentes.",
    health: "Cuidar la digestión y los excesos alimentarios.",
    love: "Los sentimientos son puros y se expresan con enorme calidez, llegó el gran amor.",
  },
  {
    id: "la-fuerza",
    number: 11,
    romanNumeral: "XI",
    name: "La Fuerza",
    archetype: "Heracles / La Pasión sin Violencia",
    symbolism:
      "Este arcano simboliza el impulso interior que mueve al espíritu; la confianza en la razón y el optimismo del que sabe que los Dioses lo protegen. Aquí el placer es más que mera fuerza vital, comprende tanto la pasión como la alegría, así como el gusto de experimentar el poder. Representa los distintos aspectos y actitudes que se integran y se combinan para conseguir una verdad holística en una experiencia orgiástica. La energía que vemos aquí equivale al poder sin frenos del orden creativo original; libre de la moralidad y la lógica opresora. El animal interior no se doma, ni se integra por la fuerza y la represión, sino mediante la aceptación y la sumisión. Este es el secreto del Tantra, la conciencia de que la unión aprovecha cada momento y acepta cada aspecto de la vida sin rechazar nada. El camino hacia la trascendencia lleva por todas las formas de lo terrenal.",
    concrete:
      "Otorga pasión sin violencia, porque el arma será la resistencia. Reivindicación de lo justo.",
    work: "Abundante en cantidad, aunque con algunas luchas y conflictos para alcanzar aquello que se propone.",
    money:
      "Habrá fluidez en los ingresos que se reparten y comparten con altruismo.",
    friendship: "Muchas que buscaran tu ayuda.",
    family:
      "Habrá preocupaciones y esfuerzos en los que no se sentirá correspondido/a.",
    health: "Cuidar el tórax.",
    love: "Los sentimientos son intensos, de profundo amor, a cambio de nada. Etapa de exquisita sexualidad y sensualidad.",
  },
  {
    id: "el-colgado",
    number: 12,
    romanNumeral: "XII",
    name: "El Colgado",
    archetype: "Prometeo / La Pausa y la Entrega",
    symbolism:
      'Este arcano representa el sufrimiento interior, la lucha que mueve y estremece las creencias y vivencias del sujeto. Manifiesta la inconstancia que viene a cobrar su tributo. Es el autosacrificio del que no desea herir a nadie y por ello sufre en silencio destruyendo su esencia. Se ha llegado por fin al punto en que ya no puede negarse la dura realidad. No hay otra alternativa más que enfrentarse a la verdad y liberarse. Esta forma de capitulación, de abandono de la voluntad rígida y de las ideologías inflexibles, va acompañada de cambios importantes; la descomposición de pautas de comportamiento acartonadas, la eliminación de aquellas cosas que estorban; permitiendo la total sumisión al yo más alto, liberado de la estrechez de miras y de pensamientos dogmáticos. El Tao dice: "No se haga mi voluntad sino la tuya; pues tu voluntad es la mía"; la mayor recompensa de una sumisión profunda al todo es la transformación absoluta.',
    concrete:
      "Etapa de decepción, de silencio forzoso y soledad que oprime. Cambio de suerte en la vida, situación dolorosa.",
    work: "Peligro de pérdida de trabajo, obstáculos difíciles de sortear.",
    money:
      "La economía se mantiene igual, pero habrá que repartir, aún con pocas ganas de hacerlo.",
    friendship:
      "Pareciera que no hay amigos, y si los hay, no comprenden ni contienen.",
    family: "No existen deseos de vincularse afectivamente con ellos.",
    health: "Cuidar el abdomen, stress y bajas de defensa.",
    love: "Los sentimientos están en pie de guerra, se tomará una decisión que cambiará la vida.",
  },
  {
    id: "la-muerte",
    number: 13,
    romanNumeral: "XIII",
    name: "La Muerte",
    archetype: "Hades / La Transformación del Fénix",
    symbolism:
      "Este arcano representa la muerte, pero no como fenómeno físico, sino como transformación interior que forzosamente y con angustia acarreará la disolución urgente de viejas relaciones. Hay que cortar los cordones y lazos, hay que liberar a las almas prisioneras de sus ataduras. Este proceso transita con dolor porque la destrucción y la pérdida del vínculo generan muchísima tristeza, melancolía y depresión. Al romper los lazos se tiene ganada la mitad de la batalla y se consigue parte de la victoria; cuánto más grande sea el deseo de aferrarse a las viejas relaciones, más difícil de aceptar será la muerte. El Fénix alza el vuelo una vez que el fuego de la conversión ha consumido todo, reduciéndolo a cenizas. Todo el mundo sabrá que ha sucedido, esta energía es muy fuerte como para pasar desapercibida, hay una transformación pública por la evidencia del cambio. El dolor moral sufrido será beneficioso a lo largo de la vida.",
    concrete: "Transformación, cambio, destrucción seguida por renovación.",
    work: "Cambio de empleo o traslado dentro del mismo lugar de trabajo.",
    money:
      "La suerte vira su camino, la llegada de dinero puede sorprender maravillosamente, como desaparecer o estancarse momentáneamente.",
    friendship:
      "Cambio de relaciones, desaparecen muchas amistades del pasado.",
    family: "Alejamiento de un familiar cercano.",
    health: "Cuidar el sistema nervioso, abdomen e intoxicaciones.",
    love: "Cambio de pareja o nuevo comienzo desde otro compromiso y entrega.",
  },
  {
    id: "la-templanza",
    number: 14,
    romanNumeral: "XIV",
    name: "La Templanza",
    archetype: "Iris / La Unión Alquímica",
    symbolism:
      "Este arcano representa el arte de la transformación en su expresión mas depurada. Aquí se produce la unión alquímica del fuego y el agua, la luz y la oscuridad, lo masculino y lo femenino, la muerte y el renacimiento. Esta unión de los opuestos es el proceso creativo de empezar algo nuevo y como tal sucede primero en el interior y luego se proyecta al mundo exterior. Si exploras las zonas profundas de la tierra, mediante la purificación descubrirás la piedra perdida. Jung recomendaba hacer un retiro periódico que permitiera encontrarse con uno mismo; porque solo en ese encuentro sincero es posible sintetizar los opuestos, acercarnos a un mayor estado de equilibrio, retornando a la armonía. Energía de unión, estabilidad, satisfacción, paciencia, moderación, confianza y lealtad que se refleja en la actitud relajada y placentera que se tiene frente al mundo.",
    concrete:
      "Gran dominio sobre sí mismo, armonía con los demás y materialización de aquellos deseos imaginados.",
    work: "Ambiente placentero con labores que se disfrutan.",
    money: "Hay fluidez y estabilidad en los ingresos, se tienen reservas.",
    friendship: "Relaciones sinceras, fieles y de larga duración.",
    family: "Tranquilidad, unión y armonía.",
    health: "Cuidar capacidad pulmonar y presión sanguínea.",
    love: "Unión profunda con la pareja, amor correspondido.",
  },
  {
    id: "el-diablo",
    number: 15,
    romanNumeral: "XV",
    name: "El Diablo",
    archetype: "Pan / La Energía Creativa Terrenal",
    symbolism:
      "Este arcano es uno de los más incomprendidos del Tarot. Para poder entenderlo debes olvidarte de todas las ideas tradicionales, morales y supersticiosas. Representa la energía creativa en su manifestación más material y masculina. El diablo es un vidente que no solo percibe lo superficial, sino que penetra profundamente en la naturaleza de las cosas. Todo aquel que es conciente de su mundo interior se caracteriza por su especial sentido del humor; sólo los ignorantes muestran un exceso de seriedad que se identifica completamente con sus pensamientos y acciones. Esta conceptualización rígida lleva a la frustración y al sufrimiento; conclusión a la que solo se puede abordar, tras haber vivido varias experiencias existenciales. Libre de restricciones morales, el ser humano disfrutará del éxtasis en todas las cosas y dominará el mundo material sin ser controlado por éste.",
    concrete:
      "Traiciones inesperadas, sólo los instintos dominan el alma. El egoísmo esta en su máxima expresión.",
    work: "Cambios laborales, traiciones que posibilitan la perdida de las condiciones antes logradas.",
    money: "Disminución de los ingresos, robos o pérdidas.",
    friendship: "Falsos amigos que nos traicionan.",
    family: "Incomprensión grave, ambición desmedida.",
    health: "Cuidar el hígado y el páncreas.",
    love: "Etapa de crisis, sensación de decepción, miedo a lo desconocido.",
  },
  {
    id: "la-torre",
    number: 16,
    romanNumeral: "XVI",
    name: "La Torre",
    archetype: "Poseidón / La Purificación del Ego",
    symbolism:
      "Este arcano representa el poder del fuego consumidor y purificador que destruye y barre hacia fuera lo viejo. La Torre del ego se tambalea hasta sus cimientos. Todo lo que intentamos guardar queda destruido y la supuesta seguridad del pasado queda irrevocablemente sacudida. Exige la comprensión de que todo lo que pasa en la vida viene del amor eterno a la misma e incluye oportunidades para aprender y descubrir. Este conocimiento de la verdadera naturaleza de los hechos nos permite reconocer los valiosos regalos que recibimos a través de las perdidas y las desilusiones dolorosas. Simboliza la destrucción implacable que llega desde el cielo. Es una energía absolutamente curativa; tal como es de necesario extirpar del cuerpo aquello que lo enferma; de igual manera se necesita la destrucción de las relaciones y situaciones sin salida que impiden el desarrollo. Todo esto puede resultar muy hostil, pero el alivio automáticamente sucede al trauma.",
    concrete:
      "Cambio repentino que puede ser positivo o negativo. Opresión, ambiciones egoístas, riesgo de accidente.",
    work: "Cambio inesperado de actividad.",
    money: "Etapa de ruina económica.",
    friendship: "Descubrimiento de relaciones hipócritas.",
    family:
      "Ambiente conflictivo, algo se desmorona, se rompe la unidad y la armonía.",
    health: "Cuidar hígado y riñón.",
    love: "Discusiones, distanciamientos, posible ruptura afectiva.",
  },
  {
    id: "la-estrella",
    number: 17,
    romanNumeral: "XVII",
    name: "La Estrella",
    archetype: "Pandora / La Luz de la Verdad",
    symbolism:
      "Este arcano representa el destino, momento de la verdad, donde se obtendrá aquello que se merece, si se es capaz de defenderlo. Simboliza la luz, el saber qué hacer, es la oportunidad que tienes en esta existencia de ser feliz. Esta carta muestra el proceso de recepción de las inspiraciones cósmicas mas elevadas y la aparición de impulsos que generan ideas en el ámbito material. Lo que en el pasado no era más que una vaga impresión, ahora toma forma, cristalizándose en una misión, como consecuencia de una visión totalmente lucida. La persona que se guía por este conocimiento exhibe la cualidad existencial, el aura inherente en sí, que atrae a otros magnéticamente. El egoísmo y la ansiedad pueden abandonarse porque la fuerza de la transformación espiritual revela la falta de sentido de nuestras mascaras de la personalidad y las limitaciones de cada insignificante individuo.",
    concrete:
      "Elección de la verdad. Llega por fin la alegría, la claridad mental y la paz.",
    work: "Es el ideal para tus aspiraciones.",
    money: "Los ingresos fluirán estables y pronto llegará la ansiada mejoría.",
    friendship:
      "Relaciones en donde la verdad esta por encima de todo, amigos verdaderos, de los que no fallan.",
    family: "Unión, paz espiritual. Revelación de algo sorprendente.",
    health: "Controlar los líquidos del cuerpo.",
    love: "Llega el amor verdadero, después de grandes luchas.",
  },
  {
    id: "la-luna",
    number: 18,
    romanNumeral: "XVIII",
    name: "La Luna",
    archetype: "Hécate / El Reino del Inconsciente",
    symbolism:
      "Este arcano simboliza el proceso de adentrarse en lo mas turbio y profundo del alma. Es un periodo de pruebas finales que a menudo resultan muy difíciles. En la oscuridad se esconde el gran peligro de perder de vista el objetivo real. Las percepciones ilusorias y las seducciones tentadoras están al acecho e intentan desviar a la persona que desea progresar. Representa el reino subconsciente de feminidad cambiante, húmeda, sospechosa, seductora e increíble y magnéticamente atractiva. Al penetrar en este pasaje se crea una nueva vida; el camino a la conciencia nos enfrenta a todo lo desconocido y amenazante. La persona que decide cruzar el umbral hacia lo desconocido debe exhibir un coraje invencible y debe estar dispuesta a realizar ejercicios preparatorios. Felices serán los que encuentren un maestro en quien confiar. Incluso los errores y los caminos equivocados pueden llevarnos al progreso si escuchamos la voz de nuestro corazón.",
    concrete:
      "Época de desconfianza que refleja incertidumbres sobre el futuro. Fertilidad, posibilidad de embarazo.",
    work: "Las respuestas se encuentran tras larga reflexión y meditación.",
    money:
      "No hay fluidez, los ingresos se encuentran estancados, pero pronto se resolverá.",
    friendship: "Las dudas generan desconfianza en los vínculos.",
    family: "Ambiente distante en donde cada quien hace lo que quiere.",
    health: "Cuidar órganos reproductores y digestivos.",
    love: "Etapa de desconsuelo, no se sabe como seguir adelante.",
  },
  {
    id: "el-sol",
    number: 19,
    romanNumeral: "XIX",
    name: "El Sol",
    archetype: "Apolo / La Claridad Radiante",
    symbolism:
      "Este arcano representa la protección feliz; la dicha en este mundo, la felicidad de vivir, de sentir paz y alegría; que sólo alcanzan unos pocos, aún sabiendo que no es para siempre. El sol brilla en mitad del cielo y nos baña con la luz escénica de la claridad y de la conciencia más absoluta. En esta danza de la naturaleza, la libre relación de compañerismo entre hombre y mujer hacen posible que hasta las situaciones más comprometidas se expresen con optimismo y entusiasmo. Toda la energía puede dedicarse ahora a seguir un camino creativo conjunto, en lugar de gastarse en luchas por el poder, celos y subterfugios. De la misma manera que el calor del sol produce una reacción química en el proceso de maduración de la fruta, algo nuevo y diferente madura en la naturaleza del hombre. El fénix se quema, pero de sus cenizas renace una nueva ave majestuosa que asciende hasta el cielo. La luz de la conciencia penetra y purifica todos los aspectos de nuestra existencia.",
    concrete:
      "Los deseos se cumplirán y todo se resolverá de forma satisfactoria. Etapa de gran protección.",
    work: "Excelentes condiciones laborales que vislumbran éxito y triunfo.",
    money:
      "Mucha fluidez en los ingresos que serán abundantes, como así también el despilfarro.",
    friendship: "Buenos amigos con los que disfrutar los placeres de la vida.",
    family: "Armonía, comprensión y unidad.",
    health: "Cuidar el corazón.",
    love: "Periodo para recordar por la intensidad vivida en el amor y la felicidad.",
  },
  {
    id: "el-juicio",
    number: 20,
    romanNumeral: "XX",
    name: "El Juicio",
    archetype: "Hermes Psicopompo / El Despertar",
    symbolism:
      "Este arcano representa la claridad de ideas y el momento de la verdad, relacionado también con el karma. Simboliza la justicia de los dioses que hablan con los hombres y los ponen en el lugar que les corresponde. Todo se sabrá y saldrá a la luz, lo bueno y lo malo, nada podrá esconderse ya más. Es la posición idónea para ver las cosas en su totalidad y una clara percepción sirve de base para el juicio crítico global. La crítica que aquí se asienta puede comunicarse de manera que no se juzgue a las personas, sino que se les motive e inspire. Los juicios que provienen de una verdadera comprensión son constructivos y están libres de dogmatismos, aunque generalmente sea necesario un proceso largo y difícil antes de llegar a dicho juicio. La comprensión global no puede alcanzarse solo por el entendimiento analítico; tanto el cuerpo como la mente y el alma tienen derecho a ser considerados; si todos se incluyen en el proceso, el individuo gravitara instintivamente hacia lo que es saludable y se alejara de lo inoportuno.",
    concrete:
      "Nuevas emociones conducen a un cambio de visión de la vida, a una nueva filosofía que no demorara en ponerse en practica.",
    work: "Nuevas perspectivas y relaciones que favorecen lo laboral.",
    money: "Estabilidad económica. Dinero pendiente de cobro.",
    friendship: "Relaciones con buenas amistades, que son muy pocas.",
    family: "Ambiente armonioso.",
    health: "Cuidar dientes y útero.",
    love: "La expresión de los sentimientos es más mental que emocional y apasionada.",
  },
  {
    id: "el-mundo",
    number: 21,
    romanNumeral: "XXI",
    name: "El Mundo",
    archetype: "Eros Primordial / La Totalidad Cósmica",
    symbolism:
      'Este arcano es el último de los mayores, cierra el circulo que empezó "El Loco"; la gran obra a llegado a su fin y retorna a la inocencia y ceguera del comienzo. La culminación se produce simultáneamente en el nivel más alto de la existencia. Ahora uno se ve a uno mismo y al mundo tal como son en realidad; todos los disfraces y las mascaras se han vuelto superfluos. Conectado a la naturalidad original, uno se deja arrastrar por la danza turbulenta del continuo movimiento del universo. Las limitaciones de ese ser tan insignificante que es el individuo desaparecen en la unión orgásmica con el universo. Este arcano representa la elevación espiritual. Simboliza el pensamiento que deja de ser y sentir en la única esencia del yo. Es la soledad en la paz, el saber vivir con lo necesario, el control de lo mundano y el sentimiento elevado que no te pide correspondencia. Ya no se puede recibir daño de nadie, ni tampoco beneficios, todo esta en sus manos.',
    concrete: "Triunfo en todas las empresas. Cambio de residencia. Viajes.",
    work: "No resulta sumamente importante la labor que realiza por inercia.",
    money: "Posición económica privilegiada.",
    friendship:
      "Hay relaciones superficiales en donde no se tiene fé en nadie.",
    family: "Ambiente que se vive en calidez, favorable.",
    health: "Cuidar los huesos y la piel.",
    love: "Los sentimientos no se demuestran, aún cuando el amor existe. Disfruta de la soledad.",
  },
];

// Correcciones ortográficas aplicadas al material heredado antes de mostrarlo.
// Se conserva el texto de origen para no perder la redacción simbólica original.
const tarotEditorialReplacements: [string, string][] = [
  [
    "Este arcano representado por Dionisio",
    "Este arcano, representado por Dionisio",
  ],
  ["como se vive", "cómo se vive"],
  ["trasgresor", "transgresor"],
  ["inteligencia creativa y practica", "inteligencia creativa y práctica"],
  ["Para el la verdad", "Para él la verdad"],
  ["la telepatía la visualización", "la telepatía, la visualización"],
  ["se aplicara en adelante", "se aplicará en adelante"],
  ["valores espirituales mas elevados", "valores espirituales más elevados"],
  ["el pelicano", "el pelícano"],
  ["Este arcano esta", "Este arcano está"],
  ["Este arcano esta representado", "Este arcano está representado"],
  ["esta siempre dispuesto", "está siempre dispuesto"],
  ["a si mismo", "a sí mismo"],
  ["autenticas intenciones", "auténticas intenciones"],
  ["en calido equilibrio", "en cálido equilibrio"],
  ["inteligencia practica", "inteligencia práctica"],
  ["por si sola", "por sí sola"],
  ["Periodo de distanciamientos", "Período de distanciamientos"],
  ["Periodo para recordar", "Período para recordar"],
  ["en este periodo", "en este período"],
  ["y criticas", "y críticas"],
  ["El Carro esta pavimentada", "El Carro está pavimentada"],
  [
    "Las buenas oportunidades irradiaran",
    "Las buenas oportunidades irradiarán",
  ],
  ["se conquistaran fácilmente", "se conquistarán fácilmente"],
  ["en su expresión mas depurada", "en su expresión más depurada"],
  ["no solo percibe", "no solo percibe"],
  ["El egoísmo esta", "El egoísmo está"],
  ["en las perdidas", "en las pérdidas"],
  ["una visión totalmente lucida", "una visión totalmente lúcida"],
  ["la verdad esta por encima", "la verdad está por encima"],
  ["adentrarse en lo mas turbio", "adentrarse en lo más turbio"],
  ["un periodo de pruebas", "un período de pruebas"],
  ["no se sabe como seguir", "no se sabe cómo seguir"],
  ["demorara en ponerse en practica", "demorará en ponerse en práctica"],
  ["cierra el circulo", "cierra el círculo"],
  ["la gran obra a llegado", "la gran obra ha llegado"],
  ["las mascaras", "las máscaras"],
  ["todo esta en sus manos", "todo está en sus manos"],
  ["no se tiene fé", "no se tiene fe"],
];

function correctTarotText(text: string): string {
  return tarotEditorialReplacements.reduce(
    (corrected, [before, after]) => corrected.replaceAll(before, after),
    text,
  );
}

export const majorArcana: TarotCard[] = majorArcanaSource.map((card) => ({
  ...card,
  archetype: correctTarotText(card.archetype),
  symbolism: correctTarotText(card.symbolism),
  concrete: correctTarotText(card.concrete),
  work: correctTarotText(card.work),
  money: correctTarotText(card.money),
  friendship: correctTarotText(card.friendship),
  family: correctTarotText(card.family),
  health: correctTarotText(card.health),
  love: correctTarotText(card.love),
}));

export const tarotTraditions: TarotTradition[] = [
  {
    id: "tarot-egipcio",
    title: "El Tarot Egipcio y el Libro de Thoth",
    origin: "Hermetismo alejandrino y resurgimiento en 1781",
    subtitle: "El camino real a la sabiduría arquetípica",
    description:
      "En la tradición esotérica moderna, el Tarot Egipcio se presenta como uno de los sistemas más enigmáticos. Sus defensores lo vinculan con el ocultismo y la orientación trascendente; sus figuras buscan producir una conexión intuitiva con la iconografía inspirada en el Egipto antiguo.",
    details: [
      "En 1781, Antoine Court de Gébelin propuso que el simbolismo del Tarot preservaba los misterios de Isis y Thoth y que su nombre podía interpretarse como un camino real hacia la sabiduría. Fue una hipótesis influyente para el ocultismo, no una demostración histórica ni una traducción egipcia confirmada.",
      "Poco antes de la Revolución Francesa, Etteilla (Jean-Baptiste Alliette) desarrolló un sistema de Tarot para la adivinación y publicó mazos con correspondencias astrológicas y motivos egipcios. Su trabajo sí pertenece a la historia documentada del Tarot esotérico moderno.",
      "Las barajas egipcias modernas suelen reunir 78 cartas y utilizan imágenes inspiradas en la teogonía, los relieves y la cultura del Egipto antiguo. Entre ellas se encuentra el 'Tarot Egipcio Adivinatorio' diseñado por Margarita Arnal Moscardo (1988), cuya iconografía se presenta como una recreación artística de fuentes egipcias.",
    ],
  },
  {
    id: "tarot-gitano",
    title: "El Tarot Gitano y la Tradición Romaní",
    origin: "Siglo XVI en las rutas europeas",
    subtitle: "El arte de leer la baraja tradicional para guiar la vida",
    description:
      "El llamado Tarot Gitano describe una modalidad de cartomancia que emplea barajas cotidianas —como la española o la inglesa— para explorar dudas y abrir caminos posibles. El nombre reúne una tradición popular diversa y no debe atribuirse de forma general a todas las comunidades romaníes. Nunca debe entenderse como un dictamen cerrado: la decisión final pertenece al consultante.",
    details: [
      "La tradición popular europea vinculó desde temprano a comunidades gitanas con la cartomancia, aunque la evidencia histórica no permite atribuir un único origen ni una práctica uniforme a todas ellas. En la actualidad, distintos lectores utilizan barajas tradicionales para fines adivinatorios.",
      "En el método romaní se pueden utilizar tanto los cuatro palos de la baraja inglesa (picas, corazones, tréboles y diamantes) o española (espadas, copas, bastos y oros). Para una respuesta profunda y completa se combina la baraja de juego con los 22 Arcanos Mayores, aunque los palos menores por sí solos ofrecen orientaciones prácticas rápidas.",
      "Dentro de los repertorios populares asociados a esta modalidad aparecen métodos como la Tirada de la Estrella, la Cruz Francesa, la Tirada Planetaria, la Tirada de las Consecuencias y la Tirada Romaní de Tres Tiempos.",
    ],
    correspondences: [
      {
        item: "Picas (Baraja Inglesa / Espadas)",
        equivalent: "Espadas del Tarot",
        meaning:
          "Indican desafíos, pérdidas personales, desengaños, enfrentamientos y transformaciones forzosas.",
      },
      {
        item: "Tréboles (Baraja Inglesa / Bastos)",
        equivalent: "Bastos del Tarot",
        meaning:
          "Aportan información valiosa, noticias, proyectos de trabajo, movimiento e iniciativa creadora.",
      },
      {
        item: "Corazones (Baraja Inglesa / Copas)",
        equivalent: "Copas del Tarot",
        meaning:
          "Enfocan temas del corazón, amor recíproco, dicha íntima, reconciliación y felicidad familiar.",
      },
      {
        item: "Diamantes (Baraja Inglesa / Oros)",
        equivalent: "Oros del Tarot",
        meaning:
          "Barajan posibilidades económicas, concreción en los negocios, fortuna material y estabilidad patrimonial.",
      },
    ],
  },
  {
    id: "arcanos-menores-palos",
    title: "Simbología Sagrada de los Cuatro Palos",
    origin: "Interpretación simbólica hermética",
    subtitle: "Las cuatro raíces elementales del universo manifiesto",
    description:
      "En algunas lecturas herméticas, los cuatro palos del Tarot se relacionan con imágenes de reliquias, elementos y misterios iniciáticos. Estas correspondencias son interpretaciones simbólicas posteriores y no forman parte demostrable del origen medieval de las cartas.",
    details: [
      "Las Copas evocan el Santo Grial: el cáliz de la Última Cena y la fuente inagotable del amor y la revelación mística.",
      "Las Espadas remiten tanto a la espada vencedora del Rey David como al arma flamígera del arcángel protector y la lanza de Longinos.",
      "Los Bastos simbolizan la vara florida de Aarón y la rama viva del Árbol de la Vida que conecta cielo y tierra.",
      "Los Oros encarnan la ofrenda reverente a la encarnación divina en el plano material, símbolo de equilibrio entre valor espiritual y prosperidad física.",
    ],
  },
];

export const tarotEthics: TarotEthicsRule[] = [
  {
    id: "aceptar-responsabilidad",
    title: "1. Acepta la responsabilidad personal",
    summary:
      "Formula la pregunta de modo que asumas la soberanía sobre tus decisiones en lugar de traspasársela a las cartas.",
    avoidTitle: "Pregunta que elude responsabilidad:",
    avoidExamples: [
      "«¿Debería ingresar a mi padre en una residencia o cuidar de él en mi casa?»",
      "«¿Conseguiré el trabajo en la agencia de publicidad?»",
      "«¿Debería dejar a mi pareja?»",
    ],
    preferTitle: "Pregunta constructiva y responsable:",
    preferExamples: [
      "«¿Qué necesito saber para tomar las mejores medidas en relación con las condiciones de vida de mi padre?»",
      "«¿Cómo puedo optimizar mis capacidades y talentos para postular con éxito a la agencia?»",
      "«¿Qué aspectos de nuestra relación requiero comprender para tomar una decisión madura?»",
    ],
    explanation:
      "En el primer caso, el consultante renuncia a su poder y pretende que las cartas elijan por él. En la segunda formulación, pide información y lucidez al Tarot, consciente de que la decisión y sus consecuencias le pertenecen por entero. El Tarot no toma decisiones por ti: te brinda discernimiento.",
  },
  {
    id: "evitar-fatalismo",
    title: "2. Evita preguntas de «Sí / No» y obsesiones con el tiempo",
    summary:
      "Reemplaza las consultas binarias o cronológicas cerradas por indagaciones profundas sobre procesos y causas.",
    avoidTitle: "Preguntas restrictivas:",
    avoidExamples: [
      "«¿Cuándo me pedirán matrimonio?»",
      "«¿Cuánto tardaré en comprarme una casa?»",
      "«¿Seré feliz en este nuevo proyecto?»",
    ],
    preferTitle: "Aperturas enriquecedoras recomendadas:",
    preferExamples: [
      "«¿Puedes darme una idea del proceso que estamos transitando como pareja?»",
      "«¿Qué circunstancias se hallan implícitas en mi economía actual y cómo puedo canalizarlas?»",
      "«¿Qué lección o propósito encierra esta nueva etapa y qué debo cultivar para su éxito?»",
    ],
    explanation:
      "El tiempo psíquico y espiritual no opera como un cronómetro inflexible: depende del estado interior, los aprendizajes asimilados y las acciones concretas. Preguntar por 'cuándo' fomenta la ansiedad pasiva; indagar por 'qué lección encierra' despierta la acción consciente.",
  },
  {
    id: "mantener-opciones",
    title: "3. Mantén abiertas las opciones",
    summary:
      "No redactes la pregunta cerrándote de antemano a una sola alternativa predeterminada por tus deseos o temores.",
    avoidTitle: "Pregunta condicionada:",
    avoidExamples: [
      "«¿Cómo puedo lograr que mi familiar se mude a otra ciudad?»",
    ],
    preferTitle: "Pregunta de horizonte abierto:",
    preferExamples: [
      "«¿Qué necesito comprender para construir una convivencia armónica y sana con mi familiar?»",
      "«¿Cómo afectaría a mi desarrollo profesional dar un giro hacia una nueva área de trabajo?»",
    ],
    explanation:
      "Cuando la pregunta impone una solución previa, las cartas ven restringida su capacidad de mostrar caminos alternativos mucho más fértiles y saludables para todas las partes involucradas.",
  },
  {
    id: "nivel-de-detalle",
    title: "4. Encuentra el nivel de detalle adecuado",
    summary:
      "Halla el punto medio entre una consulta excesivamente vaga y un cuestionamiento cargado de detalles microscópicos.",
    avoidTitle: "Extremos desaconsejados:",
    avoidExamples: [
      "Demasiado vaga: «¿Cómo puedo mejorar mi situación laboral?»",
      "Demasiado detallada: «¿Cómo ordeno mi escritorio para que mi colega encuentre mis notas?»",
    ],
    preferTitle: "Punto de equilibrio exacto:",
    preferExamples: [
      "«¿Cómo puedo mejorar la comunicación y el flujo de trabajo colaborativo en mi equipo actual?»",
    ],
    explanation:
      "Una formulación vaga diluye la potencia del arquetipo; una formulación microscópica pierde de vista el cuadro general. El equilibrio perfecto enfoca la dinámica clave sin atascarse en minucias triviales.",
  },
  {
    id: "centrarse-en-si-mismo",
    title: "5. Céntrate en ti mismo como sujeto de cambio",
    summary:
      "Cuando realizas una consulta, tú eres el personaje central: la pregunta debe abordar tus actos y percepciones.",
    avoidTitle: "Preguntas que juzgan a terceros:",
    avoidExamples: [
      "«¿Por qué mi hermano tiene ese comportamiento tan destructivo?»",
      "«¿Qué esconde mi pareja sobre sus finanzas?»",
    ],
    preferTitle: "Preguntas centradas en tu rol y aprendizaje:",
    preferExamples: [
      "«¿Qué papel puedo desempeñar de manera constructiva frente a la situación de mi hermano sin invadir su espacio?»",
      "«¿Cómo puedo fomentar la transparencia y la confianza mutua en nuestras finanzas compartidas?»",
    ],
    explanation:
      "Intentar escudriñar a terceros sin asumir nuestra participación desgasta la energía. Enfocarse en nuestra actitud abre puertas inmediatas de transformación real en el vínculo.",
  },
  {
    id: "permanecer-neutral",
    title: "6. Permanece neutral y abierto a perspectivas diversas",
    summary:
      "Si buscas una guía honesta del Tarot, libérate de la necesidad de corroborar que tu postura previa es la única acertada.",
    avoidTitle: "Formulación a la defensiva:",
    avoidExamples: [
      "«¿Por qué soy la única persona de la casa que asume las responsabilidades cotidianas?»",
      "«¿Cómo hago para que mi superior deje de exigirme tanto trabajo?»",
    ],
    preferTitle: "Formulación neutral y conciliadora:",
    preferExamples: [
      "«¿Cómo puedo estimular un espíritu sincero de cooperación y equidad en las labores cotidianas de mi hogar?»",
      "«¿Qué dinámicas laborales están influyendo en las expectativas de mi superior y cómo puedo delimitarlas asertivamente?»",
    ],
    explanation:
      "La neutralidad emocional desarma el sesgo de confirmación y permite que el mensaje de los Arcanos ilumine los puntos ciegos que de otro modo pasarían inadvertidos.",
  },
  {
    id: "enfoque-positivo",
    title: "7. Formula con enfoque constructivo y positivo",
    summary:
      "Orienta el pensamiento hacia el crecimiento, la superación de obstáculos y el desarrollo del potencial interno.",
    avoidTitle: "Lamento derrotista:",
    avoidExamples: [
      "«¿Por qué nunca resultan mis proyectos de investigación?»",
      "«¿Por qué no logro superar el miedo escénico?»",
    ],
    preferTitle: "Impulso constructivo:",
    preferExamples: [
      "«¿Cómo puedo encontrar los canales adecuados y perfeccionar mis proyectos para que logren visibilidad?»",
      "«¿Cómo puedo canalizar mi energía emocional para hablar ante un público con seguridad y empatía?»",
    ],
    explanation:
      "La redacción consciente de una pregunta es en sí misma un ejercicio de meditación y enfoque mental. Tomarse tres o cuatro minutos para refinarla afina la intuición y multiplica los frutos de la tirada.",
  },
];

export const tarotSpreads: TarotSpread[] = [
  {
    id: "cruz-simple",
    name: "Cruz Simple",
    subtitle: "El método universal de 4 láminas para preguntas concretas",
    cardsCount: 4,
    usage:
      "Uno de los métodos más sencillos, antiguos y utilizados. Aporta claridad rápida y equilibrada sobre cualquier asunto.",
    instructions: [
      "El consultante baraja las láminas mientras piensa con serenidad exclusivamente en la cuestión a consultar, permitiendo que las cartas reciban la impronta de sus pensamientos y emociones.",
      "Se cortan los naipes y se distribuyen sobre el tapete cuatro láminas en el siguiente orden geométrico: izquierda, derecha, arriba y abajo.",
    ],
    positions: [
      {
        position: 1,
        name: "Izquierda (Estado actual)",
        description:
          "Representa el estado actual del consultante, su situación de partida, sus problemas y la energía presente en juego.",
      },
      {
        position: 2,
        name: "Derecha (Mundo exterior)",
        description:
          "Indica el entorno, las circunstancias externas, los condicionamientos ajenos y cómo influyen en el estado actual.",
      },
      {
        position: 3,
        name: "Arriba (Yo interior y sentimientos)",
        description:
          "Revela el mundo anímico, los pensamientos conscientes e inconscientes, ideas, temores y la aspiración íntima del ser.",
      },
      {
        position: 4,
        name: "Abajo (Desenlace y destino)",
        description:
          "Muestra la síntesis evolutiva, la vía de resolución, el destino probable y el resultado final que emerge de la situación.",
      },
    ],
    advice:
      "Compara el contraste entre la carta de arriba (lo anímico) y la de abajo (la manifestación concreta) para entender si la actitud mental facilita o retrasa la resolución.",
  },
  {
    id: "arcanos-simples",
    name: "Tirada de Arcanos Simples (Doble Hilera)",
    subtitle:
      "Método de 6 cartas para cuestiones esenciales y bifurcaciones temporales",
    cardsCount: 6,
    usage:
      "Especialmente reservada para temas de gran trascendencia vital, decisiones de fondo o encrucijadas de difícil resolución.",
    instructions: [
      "Se barajan únicamente los 22 Arcanos Mayores. El consultante los distribuye con la mano izquierda en tres pilas de izquierda a derecha, boca abajo.",
      "Se giran las tres pilas boca arriba. Se toman las primeras tres cartas y se disponen en línea horizontal de izquierda a derecha (hilera superior: 1, 2 y 3).",
      "Se repite el procedimiento tomando las siguientes cartas para formar una segunda hilera inferior justo debajo (hilera inferior: 4, 5 y 6).",
      "Las cartas centrales de ambas hileras (número 2 y número 5) constituyen el corazón de la tirada: determinan el desenlace cardinal del problema.",
    ],
    positions: [
      {
        position: 1,
        name: "Carta 1 (Hilera Superior Izquierda)",
        description:
          "Influencias beneficiosas y prácticas que obran a favor en el porvenir inmediato.",
      },
      {
        position: 2,
        name: "Carta 2 (Hilera Superior Centro — Clave Mayor)",
        description:
          "Acontecimiento nuclear del futuro próximo. Respuesta principal a corto plazo.",
      },
      {
        position: 3,
        name: "Carta 3 (Hilera Superior Derecha)",
        description:
          "Culminación de la primera fase de acontecimientos venideros.",
      },
      {
        position: 4,
        name: "Carta 4 (Hilera Inferior Izquierda)",
        description:
          "Bases sólidas, recursos prácticos e influjos favorables que perdurarán a largo plazo.",
      },
      {
        position: 5,
        name: "Carta 5 (Hilera Inferior Centro — Clave Mayor)",
        description:
          "Resolución definitiva a futuro lejano. Señala giros inesperados o el núcleo del resultado.",
      },
      {
        position: 6,
        name: "Carta 6 (Hilera Inferior Derecha)",
        description:
          "Obstáculos imprevistos o aprendizajes tardíos que exigirán vigilancia madura.",
      },
    ],
    advice:
      "Las cartas centrales (2 y 5) son el eje maestro. Si ambas son benéficas, los obstáculos de las esquinas serán sorteados con facilidad.",
  },
  {
    id: "cruz-celtica",
    name: "La Cruz Céltica",
    subtitle: "La tirada maestra completa de 10 posiciones con significador",
    cardsCount: 10,
    usage:
      "El método clásico por excelencia para una radiografía profunda de dilemas complejos, integrando tanto arcanos mayores como menores.",
    instructions: [
      "Se selecciona una carta como 'Significador' representativo de la personalidad del consultante o de la naturaleza del tema, situándola boca arriba en el centro del tapete.",
      "Se barajan las cartas restantes con el espíritu concentrado en la consulta. El consultante corta en tres pilas hacia la izquierda.",
      "Se disponen las seis cartas centrales formando la Cruz (1 sobre el significador, 2 cruzada, 3 debajo, 4 a la izquierda, 5 arriba, 6 a la derecha).",
      "A la derecha de la cruz se levanta una hilera vertical ascendente con las cuatro cartas restantes (7 abajo, 8, 9, y 10 arriba del todo).",
    ],
    positions: [
      {
        position: 1,
        name: "Carta 1 (Sobre el Significador)",
        description:
          "La atmósfera reinante, el estado central del consultante y el tono vibratorio de la situación actual.",
      },
      {
        position: 2,
        name: "Carta 2 (Cruzada sobre la Primera)",
        description:
          "El obstáculo inminente, el desafío inmediato o la fuerza contradictoria que cruza el camino (para bien o para mal).",
      },
      {
        position: 3,
        name: "Carta 3 (Debajo del Significador — La Base)",
        description:
          "Las raíces profundas, el origen causal del problema o los motivos subconscientes que sostienen el asunto.",
      },
      {
        position: 4,
        name: "Carta 4 (Detrás / Izquierda — El Pasado Inmediato)",
        description:
          "Acontecimientos o influencias recientes que acaban de perder vigencia pero condicionan el presente.",
      },
      {
        position: 5,
        name: "Carta 5 (Arriba — La Corona)",
        description:
          "El mejor desenlace posible, las metas conscientes y los ideales hacia los que la persona se proyecta.",
      },
      {
        position: 6,
        name: "Carta 6 (Enfrente / Derecha — El Futuro Cercano)",
        description:
          "La primera manifestación de cambio que ingresará en la vida de la persona en breve tiempo.",
      },
      {
        position: 7,
        name: "Carta 7 (Base de la Columna — El Consultante)",
        description:
          "La actitud personal, temores íntimos y los recursos psíquicos con los que la persona se planta ante el conflicto.",
      },
      {
        position: 8,
        name: "Carta 8 (Segunda en la Columna — El Entorno)",
        description:
          "El hogar, los amigos, la familia y las opiniones ajenas que ejercen presión sobre la circunstancia.",
      },
      {
        position: 9,
        name: "Carta 9 (Tercera en la Columna — Esperanzas y Temores)",
        description:
          "Las emociones contradictorias más íntimas: lo que la persona anhela con fuerza o aquello que más teme que suceda.",
      },
      {
        position: 10,
        name: "Carta 10 (Cúspide de la Columna — Resultado Final)",
        description:
          "La conclusión integral y el desenlace perdurable derivado de todas las dinámicas analizadas en la cruz.",
      },
    ],
    advice:
      "Analiza minuciosamente la tensión entre la Carta 5 (lo que se desea conscientemente) y la Carta 10 (lo que realmente madura).",
  },
  {
    id: "hexagrama",
    name: "Tirada del Hexagrama",
    subtitle:
      "Método de 6 cartas y significador para armonizar polaridades cósmicas",
    cardsCount: 6,
    usage:
      "Especialmente recomendada para discernir las fuerzas que apoyan y las que se oponen a una empresa o meta puntual.",
    instructions: [
      "Se sitúa el Significador en el centro exacto del tapete.",
      "Se reparten seis cartas en el sentido de las agujas del reloj empezando desde el vértice superior (posición 12 en punto).",
      "Las cartas configuran dos triángulos entrelazados: el triángulo superior (posiciones 1, 2 y 6) que conforma los influjos favorables, y el triángulo inferior (posiciones 3, 4 y 5) que devela los desafíos y resistencias.",
    ],
    positions: [
      {
        position: 1,
        name: "Vértice Superior (Carta 1)",
        description:
          "La meta más noble, aspiración espiritual o factor benéfico supremo que guía la consulta.",
      },
      {
        position: 2,
        name: "Vértice Superior Derecho (Carta 2)",
        description:
          "Alianzas, apoyos espontáneos e impulsos que facilitan la cristalización del proyecto.",
      },
      {
        position: 3,
        name: "Vértice Inferior Derecho (Carta 3)",
        description:
          "Resistencias del mundo concreto, lentitud material o exigencias legales imprevistas.",
      },
      {
        position: 4,
        name: "Vértice Inferior Central (Carta 4)",
        description:
          "El escollo principal o sombra oculta que debe integrarse para evitar el fracaso.",
      },
      {
        position: 5,
        name: "Vértice Inferior Izquierdo (Carta 5)",
        description:
          "Fricciones en el ámbito emocional o malentendidos con personas del entorno cercano.",
      },
      {
        position: 6,
        name: "Vértice Superior Izquierdo (Carta 6)",
        description:
          "La sabiduría adquirida y el impulso victorioso que equilibra el hexagrama hacia el éxito.",
      },
    ],
    advice:
      "El triángulo superior (1, 2 y 6) revela tus mayores fortalezas; apóyate en ellas para neutralizar las advertencias del triángulo inferior (3, 4 y 5).",
  },
  {
    id: "tirada-romani",
    name: "Tirada Romaní (Pasado, Presente y Futuro)",
    subtitle: "El legendario método de 3 cartas de la tradición gitana",
    cardsCount: 3,
    usage:
      "Excelente para consultas rápidas, dudas inmediatas del día y orientación fluida ante decisiones cotidianas.",
    instructions: [
      "El consultante formula su pregunta en serenidad y extrae tres cartas al azar tras mezclar y cortar la baraja.",
      "Se alinean de izquierda a derecha sobre el tapete.",
      "Si la tercera carta (futuro) requiere una confirmación o mayor claridad, la tradición gitana indica repetir una segunda y tercera extracción: la suma armónica de los arcanos brindará la solución definitiva.",
    ],
    positions: [
      {
        position: 1,
        name: "Carta 1 (Izquierda — El Pasado)",
        description:
          "La raíz causal: lo que ocurrió previamente y dejó la impronta energética que originó la duda actual.",
      },
      {
        position: 2,
        name: "Carta 2 (Centro — El Presente)",
        description:
          "El momento vivo: la encrucijada actual, el desafío que se está experimentando hoy y la actitud ante él.",
      },
      {
        position: 3,
        name: "Carta 3 (Derecha — El Futuro Inmediato)",
        description:
          "La proyección natural: hacia dónde se encaminan los acontecimientos si se mantiene la dinámica presente.",
      },
    ],
    advice:
      "El futuro es la consecuencia lógica del presente; si la carta 3 no resulta grata, la carta 2 enseña con precisión qué actitud modificar hoy para alterar el destino.",
  },
  {
    id: "tirada-tres-sintesis",
    name: "Tirada de Tres Láminas con Síntesis Numerológica",
    subtitle:
      "Método de 3 naipes extendidos más una 4ª carta hallada teosóficamente",
    cardsCount: 4,
    usage:
      "Un poderoso método de integración que une la adivinación intuitiva con el rigor de la numerología arcana.",
    instructions: [
      "Se disponen tres láminas sobre el tapete de izquierda a derecha (Cartas 1, 2 y 3).",
      "A continuación se halla una cuarta lámina que se coloca a la derecha del conjunto, deducida matemáticamente.",
      "Para hallar la cuarta lámina, se suman los valores numéricos de las tres cartas previas. Si la suma total supera el valor de 22 (El Loco), se reducen teosóficamente sumando entre sí los dígitos del resultado hasta obtener un número entre 1 y 22.",
      "Ejemplo histórico: Si aparecen La Muerte (13), El Loco (22) y El Emperador (4), la suma es 13 + 22 + 4 = 39. Como 39 supera a 22, se suman sus cifras: 3 + 9 = 12. La cuarta carta de resolución será El Colgado (XII).",
    ],
    positions: [
      {
        position: 1,
        name: "Primera Lámina (Izquierda)",
        description:
          "Situación actual y punto de partida real del consultante.",
      },
      {
        position: 2,
        name: "Segunda Lámina (Centro)",
        description:
          "Primera fase de evolución y fuerzas en movimiento que interactúan con el problema.",
      },
      {
        position: 3,
        name: "Tercera Lámina (Derecha)",
        description:
          "Maduración de la situación y desenlace inmediato en el plano terrenal.",
      },
      {
        position: 4,
        name: "Cuarta Lámina (Síntesis Numerológica Teosófica)",
        description:
          "Resolución trascendente y propósito kármico final: la lección oculta que unifica toda la tirada.",
      },
    ],
    advice:
      "La cuarta carta calculada nunca es casual: sintetiza la vibración matemática acumulada de las tres elecciones previas del consultante.",
  },
];
