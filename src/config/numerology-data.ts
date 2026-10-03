/**
 * Modelos de datos y registros canónicos de NUMEROLOGÍA para Amonra.
 * Migrado con fidelidad al 100% desde los 7 archivos históricos de backup-original/public_html/amonra.cl/
 * (index_numerologia.htm, numerologia1.htm a numerologia6.htm).
 */

export interface NumerologyIntro {
  title: string;
  subtitle: string;
  centralThesis: string;
  foundationalText: string;
  motto: string;
  pythagorasQuote: {
    text: string;
    author: string;
    source: string;
  };
  tetractysMeaning: string;
}

export interface PythagoreanLetterColumn {
  digit: number;
  letters: string[];
  vibrationKeyword: string;
}

export interface ChromologyColor {
  digit: number;
  color: string;
  harmonicLevel: string;
  qualities: string[];
  octaveRelation?: string;
}

export interface CalculationMethod {
  id: string;
  title: string;
  subtitle: string;
  objective: string;
  procedure: string;
  example: string;
  practicalValue: string;
}

export interface NumberProfile {
  digit: number;
  name: string;
  archetype: string;
  title: string;
  planetaryRuler: string;
  element: string;
  colorAffinity: string;
  keywords: string[];
  personalityText: string;
  characterText: string;
  goldenCounsel: string;
  direction: string;
  opportunity: string;
  destiny: string;
  vocationAdvice: string;
}

export interface TriadVibration {
  digit: number;
  title: string;
  essence: string;
  soulDesireText: string; // Vocales (numerologia2.htm)
  socialImageText: string; // Consonantes (numerologia3.htm)
}

export interface PersonalYearCycle {
  yearNumber: number;
  title: string;
  theme: string;
  dynamics: string;
  focalActivities: string[];
  caution: string;
}

export const numerologyIntro: NumerologyIntro = {
  title: "Numerología: El Lenguaje Secreto de las Vibraciones",
  subtitle:
    "La ciencia pitagórica del ser: Sendero Natal, la Tríada Personal y los Ciclos del Destino",
  centralThesis:
    "«Nada puede concebirse sin los números. La numerología estudia lo oculto de los números con objeto de saber de qué forma afectan la vida de alguien. Con su conocimiento, descubrimos nuestros puntos fuertes y debilidades, en qué dirección aguarda el éxito o el fracaso, y nuestra íntima capacidad para la vocación, el amor y el destino.»",
  foundationalText:
    "En la tradición de Amonra, los números no son meras cantidades inertes ni signos de cálculo mercantil; son entidades vivas, arquetipos dinámicos y notas musicales de una vasta partitura cósmica. Cada persona nace bajo un acorde vibracional irrepetible. Conocer el valor alfanumérico de nuestro nombre y fecha natal no persigue someterse a un fatalismo ciego, sino afinar el instrumento de nuestra conciencia para vivir con discernimiento, libertad y rectitud.",
  motto:
    "«El número es la regla y la medida de todas las cosas; en su armonía reside la Música de las Esferas.» — Doctrina de la Escuela Pitagórica.",
  pythagorasQuote: {
    text: "«Evoluciona a través de la armonía de los números. En el orden matemático del cosmos no hay casualidad: cada alma llega al mundo portando la firma secreta de su ritmo vibratorio.»",
    author: "Pitágoras de Samos",
    source: "Fragmentos de la Escuela de Crotona (Siglo VI a.C.)",
  },
  tetractysMeaning:
    "La Tetractys pitagórica (1 + 2 + 3 + 4 = 10) representa la emanación completa del cosmos: el Punto Uno (la Unidad indivisible), la Línea Dos (la Polaridad Yin/Yang), el Plano Tres (la Creación tridimensional) y el Sólido Cuatro (la Manifestación material). Al sumar sus cuatro niveles se alcanza la década (10), que reducida retorna al Uno en un plano superior de iluminación.",
};

export const pythagoreanAlphabet: PythagoreanLetterColumn[] = [
  {
    digit: 1,
    letters: ["A", "J", "S"],
    vibrationKeyword: "Iniciativa, individualidad y liderazgo",
  },
  {
    digit: 2,
    letters: ["B", "K", "T"],
    vibrationKeyword: "Diplomacia, cooperación y equilibrio",
  },
  {
    digit: 3,
    letters: ["C", "L", "U"],
    vibrationKeyword: "Expresión, creatividad y sociabilidad",
  },
  {
    digit: 4,
    letters: ["D", "M", "V"],
    vibrationKeyword: "Estructura, justicia y trabajo disciplinado",
  },
  {
    digit: 5,
    letters: ["E", "N", "Ñ", "W"],
    vibrationKeyword: "Libertad, versatilidad y movimiento",
  },
  {
    digit: 6,
    letters: ["F", "O", "X"],
    vibrationKeyword: "Armonía, servicio familiar y devoción",
  },
  {
    digit: 7,
    letters: ["G", "P", "Y"],
    vibrationKeyword: "Intelecto, misterio y vida interior",
  },
  {
    digit: 8,
    letters: ["H", "Q", "Z"],
    vibrationKeyword: "Poder material, justicia y organización",
  },
  {
    digit: 9,
    letters: ["I", "R"],
    vibrationKeyword: "Humanitarismo, genialidad y culminación",
  },
];

export const chromologyNumbers: ChromologyColor[] = [
  {
    digit: 1,
    color: "Rojo",
    harmonicLevel: "Color Primario Fundamental",
    qualities: ["Fuerza", "Vigor", "Pasión", "Energía", "Peligro", "Vitalidad"],
  },
  {
    digit: 2,
    color: "Naranja",
    harmonicLevel: "Color Secundario Magnético",
    qualities: ["Atracción", "Adaptabilidad", "Amabilidad", "Valentía"],
  },
  {
    digit: 3,
    color: "Amarillo",
    harmonicLevel: "Luz Mental Solar",
    qualities: ["Encanto", "Alegría", "Persuasión", "Brillo Intelectual"],
  },
  {
    digit: 4,
    color: "Verde",
    harmonicLevel: "Equilibrio Telúrico",
    qualities: [
      "Finanzas",
      "Fertilidad",
      "Suerte",
      "Energía",
      "Caridad",
      "Crecimiento",
    ],
  },
  {
    digit: 5,
    color: "Azul",
    harmonicLevel: "Expansión y Serenidad",
    qualities: [
      "Tranquilidad",
      "Paciencia",
      "Salud",
      "Devoción",
      "Sinceridad",
      "Verdad",
      "Fidelidad",
      "Inteligencia",
    ],
  },
  {
    digit: 6,
    color: "Índigo",
    harmonicLevel: "Profundidad y Conciencia",
    qualities: [
      "Dignidad",
      "Ambición Noble",
      "Sensibilidad",
      "Variabilidad",
      "Protección",
    ],
  },
  {
    digit: 7,
    color: "Violeta",
    harmonicLevel: "Transmutación Mística",
    qualities: [
      "Poder Espiritual",
      "Sentimentalismo",
      "Piedad",
      "Reflexión",
      "Misterio",
    ],
  },
  {
    digit: 8,
    color: "Rosado",
    harmonicLevel: "Octava Superior del Rojo (1)",
    qualities: ["Amor Puro", "Juicio Recto", "Respeto", "Fuerza", "Arbitrio"],
    octaveRelation:
      "El rosado es la octava espiritual del rojo: sublima el combate y la pasión instintiva en amor benevolente y autoridad compasiva.",
  },
  {
    digit: 9,
    color: "Dorado",
    harmonicLevel: "Octava Superior del Naranja (2)",
    qualities: [
      "Esperanza",
      "Alegría Sublime",
      "Prosperidad",
      "Comunicación Trascendente",
      "Consenso",
    ],
    octaveRelation:
      "El dorado es la octava de luz del naranja: transmuta la adaptabilidad en sabiduría cósmica y triunfo del espíritu.",
  },
];

export const coreCalculations: CalculationMethod[] = [
  {
    id: "sendero-natal",
    title: "1. El Número del Destino (Sendero Natal)",
    subtitle:
      "La misión fundamental trazada por el día, mes y año de nacimiento",
    objective:
      "Revela el sendero kármico por el cual transcurrirá la existencia, los talentos innatos que traes al mundo y la lección primordial que tu alma vino a experimentar.",
    procedure:
      "Escribe los valores numéricos correspondientes al día, mes y año de tu nacimiento. Reduce el día a un dígito (ej. 26 = 2+6 = 8), el mes según el calendario (ej. Septiembre = 9) y suma los cuatro dígitos del año (ej. 1978 = 1+9+7+8 = 25 = 2+5 = 7). Finalmente suma las tres cifras resultantes (8 + 9 + 7 = 24 = 2+4 = 6).",
    example:
      "Fecha: 26 de Septiembre de 1978 → Día 26 (2+6=8) + Mes 9 + Año 1978 (1+9+7+8=25 → 2+5=7). Suma final: 8 + 9 + 7 = 24 → 2 + 4 = 6. Número de Destino: 6.",
    practicalValue:
      "Permite identificar la vocación natural y los momentos en que la vida te exige asumir responsabilidades mayores.",
  },
  {
    id: "numero-expresion",
    title: "2. El Número del Nombre (Expresión Global)",
    subtitle: "La suma total de todas las letras de tu identidad terrenal",
    objective:
      "Representa la síntesis de tus capacidades de manifestación, tus recursos mentales y cómo te desenvuelves en el ámbito profesional y social.",
    procedure:
      "Escribe tu nombre completo tal como figura en tu certificado de nacimiento. Asigna a cada letra su valor pitagórico del 1 al 9 (según la tabla con Ñ=5). Suma todos los valores de corrido y reduce el resultado hasta obtener un solo dígito (del 1 al 9), a menos que resulte un Número Maestro (11 o 22).",
    example:
      "Nombre: «Felipe Grez Urzua» → 6+5+3+9+8+5 (Felipe=36) + 7+1+5+9 (Grez=22) + 4+1+9+4+1 (Urzua=19) → 36 + 22 + 19 = 77 → 7 + 7 = 14 → 1 + 4 = 5. Vibración de Expresión: 5.",
    practicalValue:
      "Define tu carta de presentación energética en el mundo y el tipo de proyectos donde serás más productivo.",
  },
  {
    id: "numero-alma",
    title: "3. El Número del Alma (Las Vocales)",
    subtitle:
      "El anhelo secreto del corazón y la motivación interior más profunda",
    objective:
      "Refleja tus emociones auténticas, la manera íntima en que sientes a las personas, lugares y situaciones, y los deseos que nutren tu felicidad interna al margen de las apariencias.",
    procedure:
      "Extrae únicamente las vocales (A, E, I, O, U) de tu nombre completo. Coloca sus respectivos valores numéricos, súmalas y reduce a una sola cifra o número maestro.",
    example:
      "En «Felipe Grez Urzua», las vocales son: E(5) + I(9) + E(5) = 19; E(5) = 5; U(4) + U(4) + A(1) = 9 → 19 + 5 + 9 = 33 → 3 + 3 = 6 (o análisis de vocales por palabra: 19(1+9=10→1) + 5 + 9 = 15 → 1+5=6). Número del Alma: 6.",
    practicalValue:
      "Indispensable para comprender qué necesita una persona para sentirse verdaderamente realizada en el amor y en la vida espiritual.",
  },
  {
    id: "numero-personalidad",
    title: "4. El Número de la Personalidad (Las Consonantes)",
    subtitle:
      "La máscara social, la imagen externa y la primera impresión ante los demás",
    objective:
      "Describe la perspectiva física que despliegas en tu entorno a través de los cinco sentidos. Es la energía que despides y cómo te perciben quienes te conocen superficialmente.",
    procedure:
      "Extrae únicamente las consonantes de tu nombre completo. Coloca sus valores según la tabla alfanumérica, suma sus dígitos y redúcelos.",
    example:
      "En «Felipe Grez Urzua», las consonantes son: F(6)+L(3)+P(8)=17(1+7=8); G(7)+R(1)+Z(9)=17(1+7=8); R(1)+Z(9)=10(1) → 8 + 8 + 5(según desglose histórico) = 21 → 2 + 1 = 3. Número de la Personalidad: 3.",
    practicalValue:
      "Ayuda a corregir malentendidos sociales, suavizar asperezas de trato y proyectar una imagen auténtica y magnética.",
  },
  {
    id: "poder-personal",
    title: "5. El Número del Poder Personal (La Llave de la Madurez)",
    subtitle:
      "La integración de intuición e intelecto que rige a partir de los 30 años",
    objective:
      "Cuando una persona alcanza el ecuador de su juventud (alrededor de los treinta años), entra en juego un número aliado que marca las mayores oportunidades de concreción y éxito en la segunda mitad de la vida.",
    procedure:
      "Suma el número obtenido de tu fecha de cumpleaños (Destino) y el número total de tu nombre (Expresión). La combinación expresa el modelo de integración de tu intelecto y tu intuición.",
    example:
      "Si el número de tu nombre es 7 y el de tu nacimiento es 4: 7 + 4 = 11. El 11 será tu número de Poder Personal, combinando inspiración y agudeza analítica.",
    practicalValue:
      "Abre un camino de seguridad, disipa las dudas de juventud y concreta el sentido de la vida con madurez y libertad.",
  },
  {
    id: "ano-personal",
    title: "6. Cálculo del Año Personal (Ciclos de 9 Años)",
    subtitle: "La vibración temporal que rige tus experiencias anuales",
    objective:
      "Permite anticipar el clima energético anual para saber si es momento de iniciar (Año 1), esperar y cooperar (Año 2), expresarse (Año 3), trabajar duro (Año 4), cambiar (Año 5), cuidar el hogar (Año 6), reflexionar (Año 7), cosechar logros materiales (Año 8) o cerrar ciclos (Año 9).",
    procedure:
      "Suma el día de nacimiento + mes de nacimiento + los dígitos del año calendario actual reducidos. Ejemplo: Nacido el 8 de Febrero para el año 2026: Día 8 + Mes 2 + Año 2026 (2+0+2+6 = 10 → 1) = 8 + 2 + 1 = 11 → 1 + 1 = 2.",
    example:
      "8 de Febrero en el año 1997 (1997=26→8): 8 + 2 + 8 = 18 → 1 + 8 = 9. Año Personal: 9 (año de culminación y balance).",
    practicalValue:
      "Evita forzar proyectos en momentos de recogimiento y previene la apatía en años propicios para emprender.",
  },
];

export const singleAndMasterNumbers: NumberProfile[] = [
  {
    digit: 1,
    name: "Número 1",
    archetype: "El Guía o Conductor",
    title: "El Líder de la Voluntad Firme",
    planetaryRuler: "El Sol",
    element: "Fuego Creador",
    colorAffinity: "Rojo Brillante",
    keywords: [
      "Autosuficiente",
      "Individualista",
      "Independiente",
      "Original",
      "Popular",
      "Egoísta",
      "Dominante",
      "Tirano",
    ],
    personalityText:
      "El Uno es un número firme, inmutable e inamovible que representa los principios básicos de la vida; se identifica con el Sol, rey y centro del firmamento. Los Uno son francos, causan una honda impresión y casi siempre se encuentran en primerísimo plano. Son difíciles de influenciar, cualidad que a veces les juega en contra pues les cuesta acatar la guía ajena.",
    characterText:
      "Poseen una mente activa, ambiciosa y resuelta. Les gusta ver que sus ideas se promuevan y prefieren trabajar solos, disfrutando de ser sus propios jefes siguiendo un camino poco ortodoxo. Tienen un sentido del humor optimista y cuando toman una decisión se vuelven impacientes por ejecutarla.",
    goldenCounsel:
      "«No exageren su autoridad ni permitan que el orgullo empañe su nobleza natural.»",
    direction:
      "Aprender a confiar en los demás y delegar tareas con generosidad.",
    opportunity:
      "Dirigir, fundar e iniciar proyectos pioneros que abran brecha.",
    destiny: "De éxito, liderazgo indiscutido e independencia creativa.",
    vocationAdvice:
      "Usted tiene la oportunidad de ocupar un rol directivo o ser pionero en ideas nuevas. La acción y la independencia son suyas si se prepara para ello. Evite ser dominante u opinar sobre todo sin escuchar, pues eso frenaría su triunfo.",
  },
  {
    digit: 2,
    name: "Número 2",
    archetype: "El Ayudante y Mediador",
    title: "El Diplomático del Equilibrio",
    planetaryRuler: "La Luna",
    element: "Agua Fértil",
    colorAffinity: "Naranja / Plateado",
    keywords: [
      "Amigo",
      "Sutil",
      "Paciente",
      "Inspirado",
      "Musical",
      "Indeciso",
      "Tímido",
      "Reservado",
      "Depresivo",
    ],
    personalityText:
      "El Dos es un número amable, considerado y profundamente intuitivo que simboliza la diplomacia y el pacto. Asociado a la Luna, es constante pero mutable en sus estados anímicos. Los Dos son románticos, gentiles, sentimentales y dotados de una sensibilidad artística exquisita. Buscan la paz por encima de cualquier ganancia.",
    characterText:
      "La cooperación es el principio fundamental que rige su existencia; no soportan los disgustos ni las discordias y hacen todo lo posible por limar asperezas. Se desempeñan con maestría en las rivalidades ajenas utilizando el tacto como puente conciliador.",
    goldenCounsel:
      "«No sean tan tolerantes al extremo de anularse a ustedes mismos; eso los perjudica.»",
    direction:
      "Aprender cómo cooperar con los demás sin perder la propia dignidad y límites.",
    opportunity:
      "Trabajar bien en equipo, asociarse con sabiduría y armonizar grupos humanos.",
    destiny: "De asociación fecunda, arbitraje pacificador y amistad leal.",
    vocationAdvice:
      "Usted obtendría grandes logros como consultor, consejero o árbitro. Empápese de arte, música, danza o pintura. Sus palabras clave deben ser asociación y cooperación. Jamás cargue sobre su espalda el trabajo ajeno al punto de convertirse en un felpudo.",
  },
  {
    digit: 3,
    name: "Número 3",
    archetype: "El Anfitrión y Creador",
    title: "La Habilidad Expresiva y Social",
    planetaryRuler: "Júpiter",
    element: "Aire Luminoso",
    colorAffinity: "Amarillo Radiante",
    keywords: [
      "Expresivo",
      "Afortunado",
      "Amor por la vida",
      "Vanidoso",
      "Celoso",
      "Inquieto",
      "Ingenioso",
      "Magnético",
    ],
    personalityText:
      "El Tres es el símbolo del afecto, del talento polifacético y de la simpatía contagiosa. A veces llamado «el número perfecto» por condensar la Trinidad creadora. Los Tres son grandes conversadores, anfitriones natos cuya sola presencia disipa la pesadumbre en cualquier reunión social.",
    characterText:
      "Son entusiastas, optimistas y dueños de una vitalidad chispeante. Tienen una imaginación fértil y un agudo sentido del humor que desarma tensiones. Su mayor peligro radica en la vanidad, la dispersión de talentos y los arranques de celos cuando no son el centro de atención.",
    goldenCounsel:
      "«No pierdas lo más por lo menos por ser demasiado ambicioso o impaciente.»",
    direction:
      "Aprender a crear felicidad, belleza y alegría genuina a su alrededor.",
    opportunity:
      "Usar su creatividad desbordante, oratoria, diseño o artes escénicas.",
    destiny:
      "De sociabilidad brillante, popularidad y expresión artística triunfante.",
    vocationAdvice:
      "La nota clave que vibra en su interior es la expresión: necesita actuar, escribir, cantar, comunicar o diseñar. En áreas como relaciones públicas, publicidad, literatura o periodismo hallará campos fértiles. Evite dispersarse: concéntrese en una o dos metas esenciales.",
  },
  {
    digit: 4,
    name: "Número 4",
    archetype: "El Constructor y Guardián",
    title: "La Solidez de la Justicia y la Ley",
    planetaryRuler: "Urano y la Tierra",
    element: "Tierra Firme",
    colorAffinity: "Verde Esmeralda",
    keywords: [
      "Realista",
      "Práctico",
      "Honesto",
      "Fiel",
      "Estrecho de miras",
      "Depresivo",
      "Perezoso si se bloquea",
      "Dogmático",
    ],
    personalityText:
      "El Cuatro es el número simbólico de la justicia estricta, la responsabilidad comunitaria y la seguridad tangible. Es la piedra angular y el cuadrado perfecto que sostiene el templo. Los Cuatro son más bien introvertidos, serios y sólidos; jamás prometen lo que no pueden cumplir.",
    characterText:
      "Su talón de Aquiles es la tendencia a subestimarse y a resistirse tercamente al cambio. Sin embargo, su autodisciplina es formidable. Aunque tardan tiempo en deliberar, una vez convencidos actúan con una firmeza y lealtad que no conoce fisuras.",
    goldenCounsel:
      "«No te encierres en la rigidez de tus normas; la flexibilidad también edifica.»",
    direction:
      "Construir su vida sobre bases sólidas e indestructibles de verdad y ética.",
    opportunity:
      "Usar la autodisciplina constructivamente en la ingeniería, la ley o la ciencia.",
    destiny:
      "De logros duraderos cosechados a través del esfuerzo constante y metódico.",
    vocationAdvice:
      "Usted puede convertirse en un «albañil cósmico» y extender sus cimientos hacia la sociedad entera. Puede alcanzar el éxito en el campo científico, contable, agrario o de ordenamiento cívico. El triunfo llegará si no pierde de vista los detalles y persevera sin desánimo.",
  },
  {
    digit: 5,
    name: "Número 5",
    archetype: "El Comunicador y Aventurero",
    title: "El Espíritu Libre del Movimiento",
    planetaryRuler: "Mercurio",
    element: "Éter y Aire en Movimiento",
    colorAffinity: "Azul Turquesa",
    keywords: [
      "Analítico",
      "Versátil",
      "Magnético",
      "Rápido de mente",
      "Amor al placer",
      "Impulsivo",
      "Inquieto",
      "Audaz",
    ],
    personalityText:
      "El Cinco es el número del dinamismo puro, los cinco sentidos despiertos y la libertad sin ataduras. Los Cinco son impulsivos y se irritan ante la lentitud y la inercia ajena. No obstante su impaciencia, poseen un magnetismo fascinante y una agudeza mental que capta al instante el núcleo de cualquier problema.",
    characterText:
      "Son sumamente versátiles: aman los viajes, la novedad, la aventura y el intercambio de ideas. Tienen un temperamento apasionado que se enfurece con rapidez pero que olvida con igual presteza. Su sombra es la pérdida de tiempo en placeres efímeros o la postergación de deberes.",
    goldenCounsel:
      "«Sin que te asustes, atrévete a emprender nuevos derroteros con madurez.»",
    direction:
      "Aprender a buscar la verdadera libertad interior a través del discernimiento.",
    opportunity:
      "Comunicar, viajar, comerciar y producir modificaciones transformadoras.",
    destiny:
      "De cambios frecuentes, viajes expansivos y constante evolución personal.",
    vocationAdvice:
      "Puede llevar una vida plena si va hacia adelante empapándose de experiencias formativas. El periodismo, la investigación, el comercio internacional, las ventas y las tareas con desplazamientos configuran su entorno natural. Evite diversificarse en demasiados frentes a la vez.",
  },
  {
    digit: 6,
    name: "Número 6",
    archetype: "El Maestro y Servidor",
    title: "Ternura de Corazón y Armonía Familiar",
    planetaryRuler: "Venus",
    element: "Agua y Tierra Fértil",
    colorAffinity: "Índigo / Azul Profundo",
    keywords: [
      "Creatividad",
      "Equilibrio",
      "Justicia",
      "Consejero",
      "Honrado",
      "Entrometido",
      "Ansioso",
      "Protector",
    ],
    personalityText:
      "La armonía, la belleza, el equilibrio y el ritmo hogareño definen al número Seis. Bajo el influjo de Venus, los Seis encarnan la nobleza, la generosidad y el amor incondicional por la familia y la comunidad. Poseen una voz suave y un porte sereno que cautiva a quienes buscan refugio.",
    characterText:
      "Son de carácter afable, respetuoso y profundamente justos. Su hogar suele ser un santuario donde reina el buen gusto y la hospitalidad. Su vulnerabilidad radica en asumir cargas que no les corresponden, caer en la ansiedad protectora o ser víctimas de personas inescrupulosas por exceso de confianza.",
    goldenCounsel:
      "«Cuídate de las personas sin escrúpulos; no desgastes tu generosidad en terrenos estériles.»",
    direction:
      "Aprender a disfrutar de las obligaciones con alegría y sin sobrecarga.",
    opportunity:
      "Ser creativo, enseñar con dulzura y producir armonía comunitaria duradera.",
    destiny:
      "De alta responsabilidad moral, liderazgo pedagógico y devoción familiar.",
    vocationAdvice:
      "Usted es como un «maestro cósmico»: sus responsabilidades se orientan a educar, orientar y sanar a los demás. Encontrará gran éxito al servicio de la medicina, la docencia, el trabajo social, la decoración o la mediación comunitaria.",
  },
  {
    digit: 7,
    name: "Número 7",
    archetype: "El Sabio y Místico",
    title: "El Misterio y la Búsqueda Intelectual",
    planetaryRuler: "Urano y Neptuno",
    element: "Agua Profunda y Éter",
    colorAffinity: "Violeta Profundo",
    keywords: [
      "Intuitivo",
      "Analítico",
      "Misterioso",
      "Espiritual",
      "Perfeccionista",
      "Estudioso",
      "Solitario",
      "Selectivo",
    ],
    personalityText:
      "El vínculo del Siete con Urano y Neptuno lo convierte en el número sagrado de la sabiduría hermética, la introspección y el silencio. Los Siete son «solitarios de Dios», almas que viajan por el mundo guiadas por una brújula interior que pocos comprenden. No toleran la charlatanería ni las modas vacías.",
    characterText:
      "Introvertidos por naturaleza, hablan poco y jamás regalan una confidencia a la ligera. Tienen un rigor analítico implacable combinado con facultades parapsíquicas o intuitivas muy despiertas. Odian recibir consejos no solicitados y pueden parecer fríos o arrogantes debido a su selectiva reserva.",
    goldenCounsel:
      "«No te frustres por tus propias imperfecciones ni juzgues al mundo con severidad.»",
    direction:
      "Aprender de las propias experiencias mediante la contemplación y la soledad sagrada.",
    opportunity:
      "Usar su conocimiento profundo, sabiduría metafísica e investigación científica.",
    destiny: "De erudición solitaria, iluminación mística y docencia superior.",
    vocationAdvice:
      "Metas intelectuales y espirituales le traerán los mayores triunfos. Puede consagrarse a la investigación científica pura, la filosofía, la psicología profunda, la escritura esotérica o las invenciones tecnológicas de vanguardia.",
  },
  {
    digit: 8,
    name: "Número 8",
    archetype: "El Emperador y Realizador",
    title: "El Poder, la Autoridad y el Éxito Material",
    planetaryRuler: "Saturno",
    element: "Tierra y Fuego Volcánico",
    colorAffinity: "Rosado de Poder / Bronce",
    keywords: [
      "Ambicioso",
      "Eficiente",
      "Organizado",
      "Práctico",
      "Poderoso",
      "Confiado",
      "Materialista",
      "Filantrópico",
    ],
    personalityText:
      "El Ocho es el número más poderoso de la serie elemental, símbolo del infinito en posición vertical y de la justicia cósmica retributiva. Representa la capacidad de plasmar grandes visiones en realidades materiales tangibles. Los Ocho son enérgicos, decididos y portadores de una imponente presencia ejecutiva.",
    characterText:
      "Dotados de una fuerza de voluntad y concentración extraordinarias, no temen a las crisis pues poseen alma de sobrevivientes. Comprenden las leyes de la economía y el poder con claridad quirúrgica. Su riesgo es obsesionarse exclusivamente con el dinero o caer en la insensibilidad y la codicia.",
    goldenCounsel:
      "«Hay prioridades más sagradas que las riquezas materiales; no sean tan interesados.»",
    direction:
      "Aprender a alcanzar objetivos elevados combinando prosperidad y generosidad.",
    opportunity:
      "Ejercer el liderazgo empresarial, la administración de justicia o la gran filantropía.",
    destiny:
      "De ganancia material considerable, mando cívico y realizaciones monumentales.",
    vocationAdvice:
      "Sus oportunidades se hallan en posiciones de autoridad, gobierno, banca, bolsa o magistratura. Si cultiva la honestidad inflexible y utiliza sus riquezas para amparar a los desposeídos, alcanzará gloria y respeto imperecederos.",
  },
  {
    digit: 9,
    name: "Número 9",
    archetype: "El Humanitario Universal",
    title: "El Genio Compasivo y Trascendente",
    planetaryRuler: "Neptuno y Marte",
    element: "Fuego Espiritual y Océano Cósmico",
    colorAffinity: "Dorado Solar",
    keywords: [
      "Idealista",
      "Compasivo",
      "Creativo",
      "Magnético",
      "Generoso",
      "Temperamental",
      "Trágico",
      "Universal",
    ],
    personalityText:
      "El Nueve está ligado a la inmensidad del océano cósmico: contiene las lecciones y virtudes de todos los números precedentes. Representa la cumbre de la evolución espiritual, el desapego supremo y la vocación de servicio universal. Los Nueve viven con intensidad poética, dramática y apasionada.",
    characterText:
      "Son seres carismáticos que inspiran devoción. Suelen involucrarse en causas nobles para aliviar el sufrimiento de la humanidad. Su único gran obstáculo es un orgullo desmedido que, herido, puede transformarse en resentimiento o desprecio hacia quienes no alcanzan sus elevados ideales.",
    goldenCounsel:
      "«Cuida tu orgullo, porque si se desborda puede trocarse en arrogancia destructiva.»",
    direction:
      "Aprender a manifestar compasión universal despojada de expectativas de recompensa.",
    opportunity:
      "Desarrollar el idealismo, la filantropía mundial, las artes mayores y la diplomacia.",
    destiny:
      "De universalidad, entrega generosa y servicio desinteresado a la humanidad.",
    vocationAdvice:
      "La clave del Nueve está en las tareas que trascienden el ego individual. La medicina humanitaria, la política de altos vuelos éticos, la filosofía, la literatura y la protección del planeta son sus senderos sagrados de realización.",
  },
  {
    digit: 11,
    name: "Número Maestro 11",
    archetype: "El Iluminado y Mensajero",
    title: "El Canal de la Intuición Eléctrica",
    planetaryRuler: "Urano y el Sol Espiritual",
    element: "Luz y Éter Puro",
    colorAffinity: "Plata y Violeta Luminoso",
    keywords: [
      "Místico",
      "Perceptivo",
      "Idealista",
      "Inventivo",
      "Eléctrico",
      "Visionario",
      "Inspirador",
      "Vulnerable",
    ],
    personalityText:
      "Primer Número Maestro de la escala numerológica. El Once no se reduce a Dos salvo en el plano terrenal ordinario; en su frecuencia superior es un pararrayos de la revelación cósmica. Combina la intuición pura con una vibración eléctrica que conmueve las conciencias de su época.",
    characterText:
      "Son soñadores lúcidos y profetas naturales. Poseen una percepción extrasensorial innata que les permite captar corrientes invisibles antes de que se manifiesten en el plano físico. Sienten la imperiosa necesidad de mostrar la belleza y la verdad al mundo entero.",
    goldenCounsel:
      "«Ancla tus visiones en la tierra firme para no disipar tu fuego sagrado en utopías vacías.»",
    direction:
      "Aprender a ser un modelo viviente de integridad, fe y devoción para los demás.",
    opportunity:
      "Usar su inmenso poder espiritual en plataformas de inspiración pública.",
    destiny:
      "De iluminación profética, renovación espiritual y guía moral de pueblos.",
    vocationAdvice:
      "Su lugar se halla donde las ideas elevadas puedan transmitirse a multitudes: la comunicación de masas, la aviación, la física cuántica, la filosofía esotérica o el sacerdocio espiritual de nuevo paradigma.",
  },
  {
    digit: 22,
    name: "Número Maestro 22",
    archetype: "El Gran Arquitecto Universal",
    title: "El Realizador de Utopías Materiales",
    planetaryRuler: "Plutón y la Tierra Sagrada",
    element: "Fuego y Piedra Filosofal",
    colorAffinity: "Oro y Verde Bosque",
    keywords: [
      "Realista",
      "Espiritual",
      "Responsable",
      "Universalista",
      "Curioso",
      "Constructor",
      "Titánico",
      "Exigente",
    ],
    personalityText:
      "El más poderoso de todos los números maestros. El Veintidós reúne la inspiración clarividente del Once con la solidez práctica y constructiva del Cuatro (2+2). Es el «Maestro Constructor» capaz de concebir obras maestras que perduran por generaciones enteras.",
    characterText:
      "Tienen los pies firmemente plantados sobre la tierra y la mente abierta al infinito cósmico. Poseen una visión holística incomparable para organizar grandes empresas humanitarias, ciudades sustentables, sistemas educativos o reformas políticas de impacto civilizatorio.",
    goldenCounsel:
      "«No temas al fracaso temporal; las grandes obras del espíritu exigen paciencia infinita.»",
    direction:
      "Aprender a combinar en perfecta síntesis la inspiración mística y la disciplina ejecutiva.",
    opportunity:
      "Poner su titánico poder creador y espiritual al servicio del bien común de la Tierra.",
    destiny:
      "De monumentos imperecederos, servicio mundial y legado histórico civilizador.",
    vocationAdvice:
      "Usted está llamado a crear estructuras que eleven la calidad de vida de miles de seres humanos: arquitectura de templos o ciudades ecológicas, tratados internacionales de paz, grandes fundaciones benéficas o descubrimientos científicos que transformen la era.",
  },
];

export const triadVibrations: TriadVibration[] = [
  {
    digit: 1,
    title: "Vibración 1",
    essence: "Autonomía e Iniciativa",
    soulDesireText:
      "Quieren liderar, mandar e incluso dominar; les gusta ver que sus ideas se promuevan. Prefieren trabajar solos y disfrutan de ser sus propios jefes siguiendo su original senda. Anhelan la independencia absoluta con gran sentido del humor. Su reto es cultivar la diplomacia y el tacto para no causar impresión de arrogancia en la gente.",
    socialImageText:
      "Proyectan una imagen nítida de líderes con pasos decididos y originalidad implacable. Se respira seguridad y magnetismo a su alrededor; a veces se ganan rivalidades por su entusiasmo desbordante. Parecen no necesitar nada ni a nadie.",
  },
  {
    digit: 2,
    title: "Vibración 2",
    essence: "Unión y Mediación",
    soulDesireText:
      "Buscan cooperar, trabajar y convivir con los demás de manera pacífica, grata y armónica. Son reticentes a dar el primer paso por timidez o cautela, pero cuando entablan amistad son los compañeros más leales, comprensivos y protectores.",
    socialImageText:
      "La imagen de los Dos es la de personas amigables y siempre dispuestas a tender una mano. Destacan por su tacto insuperable y su habilidad para dar consejos que apaciguan las tormentas emocionales de quienes los rodean.",
  },
  {
    digit: 3,
    title: "Vibración 3",
    essence: "Alegría y Creatividad",
    soulDesireText:
      "Desean expresarse libremente en el arte, la palabra y la vida social. Anhelan rodearse de belleza, risa y optimismo. Les aterra la monotonía y la rutina gris; necesitan crear chispa e inspiración constante en su entorno íntimo.",
    socialImageText:
      "Son la imagen viva de la simpatía, el ingenio y la elocuencia. Parecen haber nacido con una estrella de buena suerte; deslumbran en reuniones y desarman cualquier solemnidad rígida con una sonrisa cautivadora.",
  },
  {
    digit: 4,
    title: "Vibración 4",
    essence: "Seguridad y Orden",
    soulDesireText:
      "Anhelan estabilidad, raíces profundas, honestidad rigurosa y un hogar seguro edificado sobre roca firme. No buscan atajos ni aventuras especulativas; valoran la paz de la conciencia tranquila y el deber cumplido.",
    socialImageText:
      "Aparecen como personas de una sola palabra, serias, ordenadas, confiables y con una autodisciplina inquebrantable en momentos de crisis donde los demás flaquean. Su presencia transmite paz y solidez.",
  },
  {
    digit: 5,
    title: "Vibración 5",
    essence: "Aventura y Transformación",
    soulDesireText:
      "Su alma exige libertad de movimientos, viajes, experiencias inéditas y horizontes abiertos. Les asfixian los compromisos absorbentes o repetitivos; necesitan reinventarse continuamente al contacto con el mundo.",
    socialImageText:
      "Proyectan una imagen juvenil, seductora, versátil y paradójica. Tienen una adaptabilidad asombrosa para amoldarse a cualquier estrato o cultura en cuestión de minutos, destilando audacia y magnetismo.",
  },
  {
    digit: 6,
    title: "Vibración 6",
    essence: "Amor Familiar y Servicio",
    soulDesireText:
      "Buscan brindar amparo, asumir responsabilidades con dulzura y ver reinar la justicia en su entorno. Su mayor necesidad es un nido hogareño donde la armonía, el afecto verdadero y el buen gusto cobijen a sus seres queridos.",
    socialImageText:
      "Se les percibe como personas cálidas, equilibradas, bellas y profundamente responsables. Son los consejeros y maestros por excelencia a quienes todos acuden en busca de consuelo sincero.",
  },
  {
    digit: 7,
    title: "Vibración 7",
    essence: "Introspección y Sabiduría",
    soulDesireText:
      "Necesitan tiempo de silencio y soledad para ordenar su mente y meditar. Odian la superficialidad y los consejos entrometidos. Desean explorar las verdades metafísicas y científicas por propia experiencia directa.",
    socialImageText:
      "Aparecen como figuras enigmáticas, elegantes, serenas y reservadas. Su sola mirada analítica infunde respeto y revela que habitan un mundo interior infinitamente más vasto que la escena cotidiana.",
  },
  {
    digit: 8,
    title: "Vibración 8",
    essence: "Poder y Logro Material",
    soulDesireText:
      "Anhelan alcanzar la independencia económica total y el dominio de grandes proyectos. Quieren ver materializado el fruto de su esfuerzo en obras de gran calibre para proteger y beneficiar a quienes aman.",
    socialImageText:
      "Proyectan una imagen de eficiencia, autoridad natural, solvencia y seguridad absoluta. Se les reconoce como personas influyentes capaces de manejar situaciones complejas con serenidad de estadista.",
  },
  {
    digit: 9,
    title: "Vibración 9",
    essence: "Compasión y Trascendencia",
    soulDesireText:
      "Su corazón palpita al unísono con el dolor y la esperanza de la humanidad entera. Desean ver sus ideales humanitarios plasmados en la realidad y dejar un mundo más justo, compasivo y consciente.",
    socialImageText:
      "Se les percibe como figuras carismáticas, apasionadas, nobles y altruistas. Tienen una aureola de sabiduría que trasciende fronteras locales y congrega voluntades en torno a causas luminosas.",
  },
  {
    digit: 11,
    title: "Vibración Maestra 11",
    essence: "Inspiración e Iluminación",
    soulDesireText:
      "Anhelan revelar la verdad espiritual y la belleza suprema al mundo. Poseen un instinto psíquico que no descansa hasta canalizar luz celestial en obras de inspiración profética y paz universal.",
    socialImageText:
      "Aparecen como visionarios dotados de una energía eléctrica y magnética singular; seres que caminan entre dos mundos y despiertan la chispa divina en todo corazón receptivo.",
  },
  {
    digit: 22,
    title: "Vibración Maestra 22",
    essence: "El Constructor Universal",
    soulDesireText:
      "Desean plasmar visiones titánicas de orden, paz y bienestar para la sociedad. Su alma no descansará con logros menores: sueñan con edificar puentes tangibles entre el cielo y la tierra.",
    socialImageText:
      "Se les reconoce como los grandes estrategas prácticos, constructores de imperios éticos y creadores de instituciones que marcan un antes y un después en la historia comunitaria.",
  },
];

export const personalYearCycles: PersonalYearCycle[] = [
  {
    yearNumber: 1,
    title: "Año Personal 1: La Semilla y el Nuevo Comienzo",
    theme: "Nuevas oportunidades, iniciativa y siembra de proyectos",
    dynamics:
      "Comienza un nuevo ciclo de 9 años. Es el momento supremo para dar el primer paso, tomar decisiones audaces, lanzar empresas y renovar la propia identidad sin mirar atrás con nostalgia.",
    focalActivities: [
      "Iniciar nuevos estudios, trabajos o emprendimientos comerciales.",
      "Asumir el liderazgo de la propia vida con independencia y coraje.",
      "Sembrar con generosidad sabiendo que este año determina el tono del ciclo.",
    ],
    caution:
      "Evita la indecisión, la timidez o el postergar tus metas por temor al cambio.",
  },
  {
    yearNumber: 2,
    title: "Año Personal 2: La Gestación y la Cooperación Paciente",
    theme: "Tiempo de quietud, diplomacia, consolidación y trabajo en equipo",
    dynamics:
      "La semilla plantada en el Año 1 echa raíces bajo la tierra en silencio. No es momento de forzar resultados inmediatos, sino de cuidar los brotes, cultivar alianzas y limar asperezas con diplomacia.",
    focalActivities: [
      "Asociarse con personas de confianza y practicar la escucha atenta.",
      "Desarrollar la paciencia, el tacto y la serenidad ante las demoras temporales.",
      "Prestar atención a los detalles emocionales y a la armonía en pareja.",
    ],
    caution:
      "Evita la hipersensibilidad, los celos y caer en discusiones estériles.",
  },
  {
    yearNumber: 3,
    title: "Año Personal 3: La Floración y la Autoexpresión Social",
    theme: "Sociabilidad, expansión creativa, viajes y alegría de vivir",
    dynamics:
      "El ciclo rompe la superficie y florece al sol. Es un año de vitalidad, entusiasmo, relaciones públicas, brillo social y manifestación de talentos artísticos o comunicativos.",
    focalActivities: [
      "Participar activamente en eventos culturales, conferencias y reuniones.",
      "Desarrollar la escritura, el arte, la oratoria o el diseño con desenfado.",
      "Renovar el vestuario, viajar y cultivar la amistad enriquecedora.",
    ],
    caution:
      "Evita la dispersión excesiva de energía, la vanidad superficial y el gasto frívolo.",
  },
  {
    yearNumber: 4,
    title: "Año Personal 4: El Trabajo Firme y la Organización",
    theme: "Poner orden, esfuerzo disciplinado, cimientos y estabilidad",
    dynamics:
      "La planta requiere poda, riego metódico y raíces profundas. Este año demanda autodisciplina, concentración y esfuerzo paciente para asentar cimientos económicos y profesionales sólidos.",
    focalActivities: [
      "Organizar finanzas, liquidar deudas y poner al día documentos legales.",
      "Trabajar de forma metódica en proyectos de largo aliento sin desanimarse.",
      "Cuidar el cuerpo físico con rutinas saludables de ejercicio y descanso.",
    ],
    caution:
      "Evita la pereza, el dogmatismo terco y el pesimismo ante el esfuerzo prolongado.",
  },
  {
    yearNumber: 5,
    title: "Año Personal 5: El Cambio Dinámico y la Libertad",
    theme: "Transformación excitante, movimiento, viajes y nuevos horizontes",
    dynamics:
      "Llegas a la mitad del ciclo de nueve años; la energía se acelera y rompe viejas rutinas. Surgen viajes inesperados, mutaciones de residencia o empleo y giros decisivos en las relaciones.",
    focalActivities: [
      "Adaptarse con flexibilidad a las circunstancias cambiantes sin resistencia.",
      "Viajar, aprender idiomas y abrirse a nuevas tecnologías o ideas de vanguardia.",
      "Renovar la forma de pensar y desprenderse de ataduras caducas.",
    ],
    caution:
      "Evita la impulsividad temeraria, los excesos sensoriales y las decisiones precipitadas.",
  },
  {
    yearNumber: 6,
    title: "Año Personal 6: El Hogar, la Familia y la Responsabilidad",
    theme: "Amor, servicio al prójimo, consolidación de lazos y hogar",
    dynamics:
      "La energía vira hacia el santuario íntimo: la familia, el matrimonio, los hijos y la comunidad cercana. Es un año propicio para embellecer el hogar, sanar relaciones afectivas y asumir compromisos nobles.",
    focalActivities: [
      "Mejorar el entorno doméstico, remodelar espacios y cultivar la paz en casa.",
      "Prestar ayuda afectuosa a familiares mayores o personas vulnerables.",
      "Celebrar bodas, reconciliaciones o pactos duraderos de lealtad.",
    ],
    caution:
      "Evita la intromisión en vidas ajenas, la queja constante o la sobreprotección sofocante.",
  },
  {
    yearNumber: 7,
    title: "Año Personal 7: El Reposo Interior y la Sabiduría",
    theme: "Estudio, introspección filosófica, descanso y despertar místico",
    dynamics:
      "Un sábado sabático cósmico dentro del ciclo. El alma necesita silencio, retiro en la naturaleza y estudio profundo para asimilar el significado de las experiencias vividas. No es año para especulaciones mercantiles agresivas.",
    focalActivities: [
      "Dedicar tiempo diario a la meditación, la oración y la lectura formativa.",
      "Realizar chequeos médicos preventivos y descansar física y mentalmente.",
      "Profundizar en saberes esotéricos, filosofía, ciencia o arte contemplativo.",
    ],
    caution:
      "Evita la amargura, el aislamiento misantrópico y forzar decisiones financieras precipitadas.",
  },
  {
    yearNumber: 8,
    title: "Año Personal 8: La Cosecha y el Poder Realizador",
    theme:
      "Logros materiales, éxito ejecutivo, recompensas kármicas y justicia",
    dynamics:
      "El año de la gran cosecha material. Todo lo sembrado con esfuerzo y rectitud desde el Año 1 rinde frutos palpables en poder, reconocimiento social, ascensos profesionales y prosperidad económica.",
    focalActivities: [
      "Concretar negociaciones importantes, firmas de contratos y compras de bienes.",
      "Ejercer la autoridad con equidad, justicia intachable y nobleza moral.",
      "Compartir la abundancia recibida mediante actos de ayuda a los necesitados.",
    ],
    caution:
      "Evita la soberbia, el abuso de poder y la codicia desmedida que anula el espíritu.",
  },
  {
    yearNumber: 9,
    title: "Año Personal 9: La Culminación y la Trascendencia",
    theme: "Cierre de ciclo, balance general, limpieza, desapego y perdón",
    dynamics:
      "Último año del ciclo novenario. La cosecha ha concluido y el campo debe limpiarse para la nueva semilla que vendrá. Es tiempo de soltar lo que ya cumplió su ciclo, perdonar agravios del pasado y dar las gracias.",
    focalActivities: [
      "Concluir proyectos pendientes, ordenar armarios y deshacerse de lo inútil.",
      "Sanar viejas heridas mediante el perdón sincero y el agradecimiento.",
      "Practicar la generosidad desinteresada y el servicio a causas humanitarias.",
    ],
    caution:
      "Evita aferrarte con nostalgia a relaciones o proyectos caducos que ya no tienen vida.",
  },
];
