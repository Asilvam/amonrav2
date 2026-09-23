// Configuración y catálogo integral de Terapias Holísticas y Aromaterapia Sagrada
// Migración 100% de la tradición médica complementaria de Amonra Chile
// Incluye 4 áreas canónicas: Doctrina de Salud Integral, Aromaterapia, Terapias Energéticas y Cuerpo-Mente.

export interface HolisticTherapy {
  id: string;
  name: string;
  origin: string;
  principle: string;
  description: string;
  image: string;
}

export interface PlanetaryCorrespondence {
  planet: string;
  day: string;
  need: string;
  aromas: string[];
}

export interface ElementalCorrespondence {
  element: string;
  direction: string;
  purpose: string;
  aromas: string[];
}

export interface LunarCorrespondence {
  phase: string;
  purpose: string;
  keyAroma: string;
  description: string;
}

export interface CrystalSynergy {
  crystal: string;
  purpose: string;
  aroma: string;
}

export interface EssentialOil {
  name: string;
  note: string;
  element: string;
  properties: string;
  applications: string;
}

export interface RitualOilFormula {
  title: string;
  objective: string;
  ingredients: string[];
  instructions: string;
}

// ---------------------------------------------------------------------------
// 1. DOCTRINA Y SALUD INTEGRAL
// ---------------------------------------------------------------------------

export const therapiesIntro = {
  title: "Doctrina de Salud Holística y Medicina Natural",
  quote: {
    text: "La salud no es meramente la ausencia de enfermedad física, sino el estado armónico y dinámico de bienestar integral que abarca el cuerpo biológico, la mente, las emociones y el espíritu.",
    author: "Doctrina Tradicional de Salud Holística",
    source: "Portal Amonra Chile — Colección Esotérica",
  },
  foundationalText:
    "Las terapias alternativas y complementarias designan los diversos procedimientos tradicionales empleados para favorecer la sanación de las personas mediante el estímulo de su propia fuerza vital autoreguladora. Lejos de oponerse a los cuidados médicos regulares, la medicina holística complementa el tratamiento atendiendo a la persona en su totalidad: restableciendo el equilibrio psicosomático y despertando la conciencia sobre las causas profundas del malestar.",
  fourBodies: [
    {
      name: "Cuerpo Físico",
      description:
        "El templo biológico y vehículo somático. Requiere nutrición pura, descanso reparador, ejercicio armonioso y respeto a los ritmos naturales circadianos.",
    },
    {
      name: "Cuerpo Emocional",
      description:
        "La sede de los sentimientos, anhelos y memorias. Su equilibrio se logra mediante la aceptación consciente, el desahogo legítimo y la liberación del rencor.",
    },
    {
      name: "Cuerpo Mental",
      description:
        "El rector del pensamiento, las creencias y el diálogo interno. Requiere discernimiento, silencio interior y cultivo de patrones mentales constructivos.",
    },
    {
      name: "Cuerpo Espiritual",
      description:
        "La chispa divina trascendente y vínculo con el Todo. Se nutre a través de la meditación, el servicio desinteresado y la comunión con el propósito cósmico.",
    },
  ],
};

// ---------------------------------------------------------------------------
// 2. MÓDULO DE AROMATERAPIA SAGRADA
// ---------------------------------------------------------------------------

export const aromatherapyModule = {
  title: "Aromaterapia Sagrada: La Magia de los Aromas y Aceites Esenciales",
  intro:
    "La magia de los aromas se encuentra implicada en el misterio de los sentidos, ese aspecto de la naturaleza humana que se extiende más allá de lo conocido. Los aromas tienen el poder de conformar el pensamiento y modificar nuestra conducta; por ello son una de las formas más sutiles de armonización. El olfato es el sentido más conectado al sistema límbico y a la memoria arquetípica, actuando como un puente inmediato entre el plano físico y los planos sutiles del ser.",
  alchemyPrinciples:
    "En la práctica aromaterapéutica de Amonra, el ser humano es el impulso creador primordial: los aromas son los activadores energéticos que sintonizan la mente con las fuerzas cósmicas. Se emplean exclusivamente esencias puras no sintéticas vehiculizadas en bases nobles de jojoba, almendras dulces o sésamo.",
  planetaryCorrespondences: [
    {
      planet: "Sol",
      day: "Domingo",
      need: "Vitalidad, asuntos legales, honor, fuerza interior, curación y protección luminosa.",
      aromas: [
        "Cedro",
        "Olíbano",
        "Azahar",
        "Romero",
        "Enebro",
        "Laurel",
        "Canela",
        "Copal",
        "Lima",
        "Naranja",
        "Azafrán",
      ],
    },
    {
      planet: "Luna",
      day: "Lunes",
      need: "Intuición, paz espiritual, sueños lúcidos, fertilidad y sanación de las aguas emocionales.",
      aromas: [
        "Jazmín",
        "Sándalo",
        "Lirio",
        "Manzanilla",
        "Loto",
        "Mirto",
        "Gardenia",
        "Limoncillo",
        "Eucalipto",
      ],
    },
    {
      planet: "Marte",
      day: "Martes",
      need: "Valentía, coraje para superar adversidades, vigor físico y ruptura de bloqueos.",
      aromas: [
        "Albahaca",
        "Pino",
        "Pimienta negra",
        "Jengibre",
        "Cilantro",
        "Comino",
        "Tabaco",
        "Benjuí",
      ],
    },
    {
      planet: "Mercurio",
      day: "Miércoles",
      need: "Comunicación clara, agilidad mental, discernimiento en negocios y sabiduría intelectual.",
      aromas: [
        "Lavanda",
        "Menta",
        "Salvia",
        "Bergamota",
        "Tomillo",
        "Hierbabuena",
        "Lemongrass",
      ],
    },
    {
      planet: "Júpiter",
      day: "Jueves",
      need: "Expansión, prosperidad económica, justicia, abundancia espiritual y buena fortuna.",
      aromas: [
        "Cedro",
        "Canela",
        "Clavo de olor",
        "Nuez moscada",
        "Anís estrellado",
        "Salvia esclarea",
      ],
    },
    {
      planet: "Venus",
      day: "Viernes",
      need: "Amor incondicional, reconciliación, armonía conyugal, belleza estética y fraternidad.",
      aromas: [
        "Rosa",
        "Ylang-Ylang",
        "Vainilla",
        "Cardamomo",
        "Geranio",
        "Pachulí",
        "Verbena",
      ],
    },
    {
      planet: "Saturno",
      day: "Sábado",
      need: "Enraizamiento, purificación profunda, disciplina, protección contra influencias densas.",
      aromas: ["Mirra", "Ciprés", "Pachulí", "Vetiver", "Pino negro", "Ruda"],
    },
  ],
  elementalCorrespondences: [
    {
      element: "Fuego",
      direction: "Norte (Hemisferio Sur) / Sur (Norte)",
      purpose:
        "Energía, valor, entusiasmo, transformación y protección activa.",
      aromas: ["Canela", "Clavo", "Olíbano", "Romero", "Laurel", "Jengibre"],
    },
    {
      element: "Tierra",
      direction: "Norte / Centro",
      purpose:
        "Estabilidad, prosperidad material, salud física, enraizamiento y empleo.",
      aromas: [
        "Pachulí",
        "Ciprés",
        "Vetiver",
        "Madreselva",
        "Magnolia",
        "Verbena",
      ],
    },
    {
      element: "Aire",
      direction: "Este",
      purpose:
        "Claridad mental, comunicación, inspiración creativa, estudio y discernimiento.",
      aromas: ["Lavanda", "Menta", "Salvia", "Anís", "Bergamota", "Lemongrass"],
    },
    {
      element: "Agua",
      direction: "Oeste",
      purpose:
        "Paz interior, empatía, amor, sanación psíquica, devoción y descanso.",
      aromas: ["Rosa", "Jazmín", "Sándalo", "Manzanilla", "Loto", "Mirto"],
    },
  ],
  lunarCorrespondences: [
    {
      phase: "Cuarto Creciente",
      purpose:
        "Atracción, desarrollo, expansión de proyectos y aumento de la fuerza espiritual.",
      keyAroma: "Sándalo",
      description:
        "Eleva la vibración sutil y favorece el crecimiento de nuevas intenciones.",
    },
    {
      phase: "Luna Llena",
      purpose:
        "Plenitud energética, consagración ritual, intuición máxima y realización.",
      keyAroma: "Jazmín",
      description:
        "Potencia la lucidez psíquica y la irradiación de bendiciones.",
    },
    {
      phase: "Cuarto Menguante",
      purpose:
        "Liberación, purificación, desprendimiento de cargas y corte de ataduras.",
      keyAroma: "Limón",
      description:
        "Limpia y disuelve energías residuales o pensamientos obsesivos.",
    },
    {
      phase: "Luna Nueva",
      purpose:
        "Introspección, siembra interior, calma profunda y descanso reparador.",
      keyAroma: "Alcanfor",
      description:
        "Simboliza la quietud fecunda antes de que vuelva a nacer la luz.",
    },
  ],
  crystalSynergies: [
    {
      crystal: "Amatista",
      purpose: "Amor superior y conciencia psíquica.",
      aroma: "Aquilea y Lavanda",
    },
    {
      crystal: "Lepidolita",
      purpose: "Paz espiritual, serenidad y sueños lúcidos.",
      aroma: "Cedro y Sándalo",
    },
    {
      crystal: "Crisoprasa",
      purpose: "Felicidad, optimismo y alegría del corazón.",
      aroma: "Azahar y Bergamota",
    },
    {
      crystal: "Jaspe Rojo",
      purpose: "Fuerza física, arraigo y vitalidad creadora.",
      aroma: "Romero y Clavo",
    },
    {
      crystal: "Cuarzo Rosa",
      purpose: "Autoestima, perdón y armonía en relaciones.",
      aroma: "Rosa y Ylang-Ylang",
    },
    {
      crystal: "Citrino",
      purpose: "Abundancia, prosperidad y luminosidad mental.",
      aroma: "Canela y Naranja",
    },
  ],
  essentialOilsCatalog: [
    {
      name: "Lavanda (Lavandula angustifolia)",
      note: "Media",
      element: "Aire / Mercurio",
      properties:
        "Calmante del sistema nervioso, regulador emocional, promueve el sueño reparador y cicatriza heridas físicas y sutiles.",
      applications:
        "Difusión ambiental para reducir ansiedad, gotas en la almohada o dilución en aceite de almendras para masajes relajantes.",
    },
    {
      name: "Sándalo (Santalum album)",
      note: "Base",
      element: "Agua / Luna - Júpiter",
      properties:
        "Aroma sagrado de elevación espiritual, apacigua la agitación mental, despierta la devoción y conecta con la paz interior.",
      applications:
        "Acompañamiento en meditación, unción en el entrecejo (tercer ojo) y purificación de altares ceremoniales.",
    },
    {
      name: "Olíbano / Incienso (Boswellia carterii)",
      note: "Base",
      element: "Fuego / Sol",
      properties:
        "Resina solar milenaria de reyes y sacerdotes egipcios. Despeja el campo áurico de negatividad y eleva la plegaria.",
      applications:
        "Inhalación consciente antes de rituales, sahumados ceremoniales y armonización de espacios cargados.",
    },
    {
      name: "Mirra (Commiphora myrrha)",
      note: "Base",
      element: "Tierra / Saturno",
      properties:
        "Protectora sagrada del templo interior, selladora de fugas energéticas y balsámica para heridas del alma.",
      applications:
        "Unción protectora en la coronilla y sienes, y sahumados solemnes de recogimiento interior.",
    },
    {
      name: "Romero (Rosmarinus officinalis)",
      note: "Alta",
      element: "Fuego / Sol",
      properties:
        "Estimula la memoria, la concentración y el riego cerebral. Disipa el letargo mental y reactiva la voluntad motriz.",
      applications:
        "Inhalación durante épocas de estudio intenso o trabajo intelectual demandante, y baños revitalizantes matutinos.",
    },
    {
      name: "Rosa Damascena (Rosa damascena)",
      note: "Media - Base",
      element: "Agua / Venus",
      properties:
        "Reina de los aceites florales. Sana el dolor emocional del corazón, abre a la compasión, ternura y armonía conyugal.",
      applications:
        "Masajes en el centro del pecho (chacra cardíaco), baños aromáticos de dulzura y perfumes sutiles de devoción.",
    },
    {
      name: "Bergamota (Citrus bergamia)",
      note: "Alta",
      element: "Aire / Sol - Mercurio",
      properties:
        "El bálsamo de la alegría dorada. Transmuta la melancolía, el desaliento y el pesimismo en entusiasmo vital.",
      applications:
        "Difusión en salas comunes y espacios de trabajo para fomentar una atmósfera optimista y cordial.",
    },
    {
      name: "Pachulí (Pogostemon cablin)",
      note: "Base",
      element: "Tierra / Saturno - Venus",
      properties:
        "Aroma terroso y envolvente que combate la dispersión mental, ancla en la realidad presente y estimula la sensualidad.",
      applications:
        "Fórmulas de prosperidad material y baños de enraizamiento tras sobrecargas intelectuales.",
    },
  ],
  ritualFormulas: [
    {
      title: "Aceite Sagrado del Amor y la Ternura",
      objective:
        "Atraer la dulzura, el afecto sincero y la comprensión en las relaciones.",
      ingredients: [
        "1/8 taza de aceite base (jojoba o almendras dulces)",
        "5 gotas de aceite esencial de Rosa",
        "3 gotas de Sándalo",
        "2 gotas de Vainilla",
        "1 gota de Jazmín",
      ],
      instructions:
        "Mezcle con intención consciente en un frasco ámbar, visualizando una luz rosada cálida que envuelve su corazón.",
    },
    {
      title: "Bálsamo de Paz Interior y Descanso Lúcido",
      objective:
        "Disipar el estrés cotidiano, aquietar la mente y asegurar un sueño reparador.",
      ingredients: [
        "1/8 taza de aceite base",
        "6 gotas de Lavanda",
        "3 gotas de Manzanilla",
        "2 gotas de Cedro",
        "1 gota de Mejorana",
      ],
      instructions:
        "Aplique suavemente en las muñecas, detrás de las orejas y en el plexo solar antes de retirarse a dormir.",
    },
    {
      title: "Óleo Solar de Prosperidad y Victoria",
      objective:
        "Activar la energía de logro, la buena fortuna y el éxito en emprendimientos legítimos.",
      ingredients: [
        "1/8 taza de aceite base",
        "4 gotas de Canela",
        "4 gotas de Naranja dulce",
        "3 gotas de Cedro",
        "2 gotas de Olíbano",
      ],
      instructions:
        "Unja sus herramientas de trabajo, velas doradas o las palmas de sus manos al proyectar sus metas constructivas.",
    },
  ],
};

// ---------------------------------------------------------------------------
// 3. TERAPIAS ENERGÉTICAS Y VIBRACIONALES
// ---------------------------------------------------------------------------

export const energyTherapies: HolisticTherapy[] = [
  {
    id: "reiki",
    name: "Reiki Usui Tradicional",
    origin: "Tradición Japonesa de Mikao Usui",
    principle: "Canalización de Energía Vital Universal",
    description:
      "E s una técnica de canalización y transmisión de energía vital a través de la imposición de manos, que se utiliza para obtener paz y equilibrio en todos los niveles: Físico: mejoría en dolencias, lesiones, metabolismo, etc. Emocional: problemas sentimentales, agresividad, infelicidad, etc. Mental: hábitos dañinos, estrés, insomnio, etc. Espiritual: armonía, paz, equilibrio, etc. Reiki actúa en profundidad yendo a la raíz del problema físico o emocional, permitiendo que la emoción o el patrón de conducta que ha creado el desequilibrio, se manifieste y sea sanado. También nos ayuda al crecimiento personal y a la expansión de nuestra conciencia. La terapia Reiki pueden recibirla todos los seres humanos (adultos sanos, enfermos, embarazadas, niños y bebés), incluso también los animales y las plantas. Es una terapia complementaria a la medicina convencional y terapias psicológicas reconocida por la Organización mundial de la salud (OMS). El método Reiki se basa en la creencia hinduista sobre los Chakras, que explicarían los estados de salud de los seres humanos. Según esta creencia, el mal funcionamiento o bloqueo de uno o varios Chakras sería el que provoca o agrava el mal estado de salud dando lugar a enfermedades y trastornos. El reikista actúa como canalizador de la energía universal y su objetivo es re armonizar los planos físico, emocional, mental y espiritual que han enfermado. Ha sido oficialmente reconocido y recomendado* por la Organización Mundial de la Salud (OMS - WHO) por sus resultados positivos, por ejemplo es altamente recomendable una sesión de Reiki antes y/o después de una operación. A lo largo de nuestra vida se producen bloqueos internos que dificultan la circulación de la energía, por ello a veces nos sentimos desarmonizados. Cuando nuestra energía vital (Ki) es fuerte, nosotros estamos física, emocional, mental y espiritualmente sanos. Cuando nuestra energía vital está en un nivel muy bajo, podemos desequilibrarnos o enfermarnos en varias formas. Una de las maneras en que podemos reabastecernos de Fuerza Vital es usando Reiki. Reiki es un técnica Holística ya que armoniza y desbloquea todos los planos del ser humano, físico, mental, emocional y espiritual. No agrede al cuerpo de ninguna manera y tampoco crea adicción ni efectos secundarios o colaterales ya que no se utilizan sustancias químicas ni elementos extraños al cuerpo sino solo la energía de vida que está presente en todo ser vivo. Acupuntura Macrobiótica Aromaterapia Magnetotera",
    image: "reiki.jpg",
  },
  {
    id: "acupuntura",
    name: "Acupuntura Tradicional",
    origin: "Medicina Tradicional China y Japonesa",
    principle: "Equilibrio del flujo de Chi en los Meridianos",
    description:
      "P ráctica de la medicina tradicional china y japonesa que consiste en la introducción de agujas muy finas en determinados puntos del cuerpo humano para aliviar dolores, anestesiar determinadas zonas y curar ciertas enfermedades. La acupuntura es una alternativa terapéutica que forma parte de la medicina tradicional China desde hace más de 2000 años, de hecho posiblemente sea la parte de esta medicina tradicional más conocida fuera de la propia China. La palabra acupuntura es un término latino que deriva de las palabras aguja y punción. Hoy en día se enseña y se practica en centros de acupuntura repartidos por todo el mundo. La técnica de la acupuntura, en un breve resumen, consiste en insertar finas agujas en determinados puntos muy concretos del cuerpo del paciente para ayudarle a recuperar su salud. La esencia que hay detrás de esta práctica la encontramos en la tradicional creencia china de que la energía vital de una persona, el Chi, circula por el cuerpo a lo largo de canales o meridianos. La medicina tradicional describe 12 de estos meridianos cada uno asociado a 5 órganos (corazón, pulmones, bazo, hígado, y riñones), y a siete entrañas o vísceras (vesícula biliar, estómago, intestino delgado, intestino grueso, vejiga, y tres focos zonas- de calor). La distinción entre órganos y vísceras establecida por la medicina tradicional china se basa en el hecho de que grandes daños en cualquiera de los órganos conllevan la muerte casi inmediata, cosa que no ocurre con las vísceras. Los diferentes meridianos, o canales de energía vital, cuentan con puntos concretos a lo largo de su recorrido, también conocidos como resonadores, y que se encuentran asociados a determinados órganos o vísceras. En dichos puntos se produce un intercambio de esta energía vital, y mediante la inserción de una aguja se pretende restaurar el equilibrio energético del órgano afectado. Además de su uso en el tratamiento de diferentes patologías, la acupuntura es utilizada ampliamente a modo de analgésico, incluso para reducir el dolor de tratamientos de tipo quirúrgico. La medicina convencional no acaba de encontrar una unanimidad respecto a la acupuntura. Mientras algunos estudios sugieren evidencias de su utilidad en algunas dolencias, por ejemplo en problemas de espalda, otros concluyen que no se dan las evidencias suficientes como para ir más allá del simple efecto placebo. Acupuntura Macrobiótica Aromaterapia Magnetoterapia Ayurveda Meditación Biomagnetismo Musicoterapia Cromotera",
    image: "acupuntura.jpg",
  },
  {
    id: "biomagnetismo",
    name: "Biomagnetismo Celular",
    origin: "Terapia Médica del Par Biomagnético",
    principle: "Equilibrio del pH y Neutralización de Patógenos",
    description:
      'C onsiste en el reconocimiento de puntos de energía alterados en nuestro organismo y que en su conjunto están dando origen a una enfermedad o malestar de curso agudo o crónico. Este reconocimiento se efectúa mediante la utilización de imanes pasivos ( no electrificados ni conectados a máquinas electrónicas), que se aplican en diversas zonas del cuerpo como efectuando un rastreo o escáner biomagnético. Una vez reconocidos y confirmadas las zonas que están alteradas en su potencial energético ( y que corresponden con órganos y tejidos que están sufriendo la distorsión), el terapeuta aplica un conjunto de imanes en esos puntos por un tiempo que fluctúa entre 10 y 15 minutos por cada uno y generalmente se aplican en forma simultánea. Como funciona: Para responder a esta pregunta debemos recordar que todos los seres vivos nos mantenemos en estado de salud cuando existe un equilibrio energético en nuestros sistemas, órganos y tejidos; compuestos finalmente por una delicada y compleja estructura de células que están en constante intercambio de información entre ellas. A su vez las células requieren de un medio ambiente apto para mantenerse en buen funcionamiento y en esto tiene vital importancia el equilibrio iónico en ellas y su entorno. Esto es: de cargas positivas y negativas, dando finalmente un equilibrio entre las cargas ácidas y básicas o equilibrio de pH. El cuerpo humano se mantiene en salud siempre que su pH o acidez interna se mantenga en un rango de neutralidad cercano al valor 7. Ahora bien, cuando hay una noxa actuando, llámese virus, bacteria, tóxico, hongo, trauma, etc., debido a la "mortificación" del tejido afectado, se produce una alteración de su acidez o pH y las células involucradas se ven alteradas en su función, perjudicándose su buen funcionamiento, al tiempo que se va favoreciendo la mantención o la alimentación del " problema" ( bacteria, virus, hongo, parásito, etc). Es decir, la enfermedad o alteración de una parte del cuerpo necesita que se mantenga la distorsión o desequilibrio entre cargas positivas o negativas para poder sobrevivir como problema. Si se corrige la alteración iónica, desaparece el problema. ya que se vuelve al punto de equilibrio. De esto último se encarga el biomagnetismo que gracias al efecto de su fuerza o energía de polaridad, la carga o polaridad magnética negativa es capaz de impactar a una carga similar patológica y al hacerla encontrarse con su similar inversa ( la positiva), anularlas hasta hacerlas de valo',
    image: "biomagnetismo.jpg",
  },
  {
    id: "cromoterapia",
    name: "Cromoterapia y Curación por el Color",
    origin: "Medicina Vibracional del Espectro Lumínico",
    principle: "Armonización de Centros Energéticos mediante la Luz",
    description:
      "L a cromoterapia es un método de armonización y de ayuda a la curación natural de ciertas enfermedades por medio de los colores. Los colores corresponden a vibraciones que tienen velocidades, longitudes y ritmos de ondas diferentes. Estos ejercen una influencia física, psíquica y emocional que nosotros no somos conscientes en general y que permite a nuestra energía vital de tener un estado que facilita la autosanación. La medición por el color es peculiar y original. Cada vez más pacientes en el mundo recuren a ella con resultados muy positivos, pues consigue curaciones que otras técnicas no consiguen. Esta medicina tiene su propio campo de acción que hay que saber determinar. No se trata de una medicina lenta ni de una medicina blanda ya que su acción puede ser muy rápida e intensa especialmente en los casos de quemaduras y traumatismos. No es en absoluto una medicina tóxica puesto que no hace intervención más que por mecanismos fisiológicos de defensa. Por tanto puede ser aplicada en pacientes de cualquier edad. La cromoterapia y la helioterapia (terapia por medio de los rayos del sol) fueron muy importantes en la práctica de la medicina tradicional de las grandes culturas como la China, la India y la Grecia. En 1988 el Premio Nobel de química otorgado a los investigadores alemanes, así como los premios Novel de Física concedidos a físicos americanos confirman totalmente esta postura en lo que concierne a la acción terapéutica de los colores. Está demostrado actualmente que, por una parte, toda célula viviente puede transformar la energía luminosa en otra forma de energía y por otra, que la energía luminosa que impacta esa célula viva atraviesa la pared de las diversas membranas celulares. En el año 1939 los esposos Kirlian, en Rusia, demostraron científicamente, mediante la elaboración de una cámara de luz los efectos de la misma en la corrección de diferentes desequilibrios energéticos. Beneficios colores existentes: Rojo: Estimulante del hígado y a la circulación de la sangre. Ayuda en la bronquitis, de la impotencia y el reumatismo. Naranja: Color antifatiga, estimula el sistema respiratorio y ayuda a la fijación del calcio. Amarillo: Da energía al sistema digestivo y tono a los músculos. Verde: Color sedativo, Reposa y fortifica la vista. Tempera la excitación sexual . Disminuye la tensión sanguínea. Mejora las ulceras. Azul: Antiséptico y astringente. Refrescante. Ayuda en el asma, el exceso de peso. Violeta: Tratamiento de la frigidez, vasodilatad",
    image: "cromoterapia.jpg",
  },
  {
    id: "floresdebach",
    name: "Terapia Floral del Dr. Bach",
    origin: "Sistema Curativo Emocional de Edward Bach",
    principle: "Transmutación de Emociones Limitantes en Virtudes",
    description:
      "~ Flores de Bach ~ L a terapia de las Flores de Bach desarrollada hace más de cincuenta años por el médico e investigador inglés Edward Bach, es uno de los fenómenos más interesantes de la medicina alternativa contemporánea. Está basado en un concepto ausente en la medicina clásica: la relación entre el alma humana y la manifestación de la enfermedad, que tiene en cuenta el elemento psíquico de esta. La medicina dominada por la química y la tecnología puede ser capaz de eliminar los síntomas de la enfermedad, pero no sus causas: aumenta el conflicto entre el alma y el cuerpo y la curación se hace imposible. El método curativo del Dr. Bach se basa en el hecho de que la enfermedad no sólo es el resultado de trastornos corporales sino que tiene su origen en sentimientos y actitudes negativas que bloquean nuestra energía vital. Para que sirven: El punto fuerte de la terapia de las flores radica en la normalización de los trastornos psíquicos y en la resolución de los conflictos internos, así como en la mejoría del dolor físico con causas psíquicas reconciliables o síntomas concomitantes. Las flores de Bach no solo son adecuadas para el tratamiento armonizador psicofísico en enfermedades de todo tipo - en ocasiones de modo adicional al tratamiento médico - sino también para cuidar la salud y llevar una vida sana, puesto que estabilizan y eliminan lo puntos flojos de tipo psíquico. Acupuntura Macrobiótica Aromaterapia Magnetoterapia Ayurveda Meditación Biomagnetismo Musicoterapia Cromoterapia Osteopatía Eutonía Quiropraxia Feng Shui Reflexología Flores de Bach Reiki Fitoterapia Relajación Hipnosis Yoga Homeopatía ",
    image: "floresdebach.jpg",
  },
  {
    id: "magnetoterapia",
    name: "Magnetoterapia",
    origin: "Medicina Física y Bioelectromagnetismo",
    principle: "Estimulación Tisular mediante Campos Magnéticos",
    description:
      "L a magnetoterapia se trata de una terapia que es considerada como terapia natural o terapia alternativa. Ésta ha revolucionado mucho la medicina tradicional ya que el curación con magnetoterapia es 100% sin medicamentos. Es una terapia muy eficaz para curar patologías principalmente traumatológicas como fracturas óseas, tendinitis, osteoporosis, bursitis etc. Para que sirve Vamos a hacer una pequeña lista de las patologías y trastornos que puede mejorar significativamente la magnetoterapia. Problemas de la piel: acné, quemaduras, eccemas Problemas ginecológicos: síndrome premenstrual. Trastornos psicosomáticos: estrés, depresión, insomnio, ansiedad Trastornos neurológicos: cefaleas, migrañas Otras patologías: úlceras intestinales y estomacales, glaucomas, conjuntivitis, cistitis, lesiones óseas y musculares Contraindicaciones y efectos secundarios de la magnetoterapia: Así a priori, no existen contraindicaciones ni efectos adversos con la magnetoterapia. No obstante, no es recomendable en personas que puedan contener marcapasos o implantes metálicos, así como en mujeres embarazadas o que estén pendientes de quedarse embarazadas. Acupuntura Macrobiótica Aromaterapia Magnetoterapia Ayurveda Meditación Biomagnetismo Musicoterapia Cromoterapia Osteopatía Eutonía Quiropraxia Feng Shui Reflexología Flores de Bach Reiki Fitoterapia Relajación Hipnosis Yoga Homeopatía ",
    image: "magnetoterapia.jpg",
  },
  {
    id: "musicoterapia",
    name: "Musicoterapia y Acústica Armónica",
    origin: "Terapia Vibracional del Sonido Sagrado",
    principle: "Resonancia Psicoacústica y Restauración Anímica",
    description:
      "M ientras que la música se ha usado en rituales curativos a lo lago de la historia humana, la profesión moderna y formal de musicoterapia fue reconocida por primera vez en la década de 1950. Fue durante ese tiempo que se llamó a los músicos para tratar a personal militar lesionado en Estados Unidos. También durante ese tiempo, se usaron varias artes creativas para tratar trastornos psiquiátricos. La música puede influenciar tanto la salud física como la mental. Un aspecto de la musicoterapia incluye escuchar u después discutir una pieza de música con el objeto de ayudar a las personas a expresarse. La musicoterapia puede usarse de manera individual para lograr un estado de relajación. Los terapeutas de música están profesionalmente entrenados y certificados. Ellos trabajan en muchas áreas, incluyendo hospitales, prisiones, programas de tratamiento para adición a drogas y alcohol, instalaciones de atención a largo plazo y hospicios Enfermedad de Alzheimer. Los adultos mayores con enfermedad de Alzheimer y otros trastornos de la memoria se han tratado con éxito con musicoterapia para reducir su agresividad y para mejorar su estado de ánimo y disposición para cooperar en las actividades diarias. Autismo. Las personas con autismo a menudo muestran un mayor interés en la música, lo cual puede ayudar en las habilidades para aprender a comunicarse. Depresión Existe evidencia de que la musicoterapia puede afectar la efectividad de algunos medicamentos antidepresivos. Mejoría del estado de ánimo. Los programas estructurados de musicoterapia han mostrado mejorar el estado de ánimo en personas que enfrentan el síndrome de burnout y en personas que se someten a los rigores del tratamiento para el cáncer. Relajación y reducción de estrés La musicoterapia ha mostrado reducir la frecuencia cardiaca, presión arterial y tensión e una variedad de participantes en estudios, incluyendo pacientes con derivación cardiaca, individuos que se recuperan de un ataque cardiaco y bebés que se están tratando por problemas pulmonares y de respiración. Acupuntura Macrobiótica Aromaterapia Magnetoterapia Ayurveda Meditación Biomagnetismo Musicoterapia Cromoterapia Osteopatía Eutonía Quiropraxia Feng Shui Reflexología Flores de Bach Reiki Fitoterapia Relajación Hipnosis Yoga Homeopatía ",
    image: "musicoterapia.jpg",
  },
  {
    id: "homeopatia",
    name: "Homeopatía Clásica",
    origin: "Medicina Hahnemanniana de Similitud",
    principle: "Estímulo de la Fuerza Vital mediante Dosis Infinitesimales",
    description:
      "L a homeopatía (del griego &#8005;&#956;&#959;&#953;&#959;&#962; [hómoios], igual, y &#960;&#940;&#952;&#959;&#962; [páthos], sufrimiento) es un sistema de medicina alternativa creado en 1796 por Samuel Hahnemann basado en su doctrina de «lo similar cura lo similar»: una sustancia que cause los síntomas de una enfermedad en personas sanas curará lo similar en personas enfermas. Es un método terapéutico para la prevención, alivio o curación de enfermedades utilizando medicamentos homeopáticos. La homeopatía clásica se define habitualmente como el sistema médico basado en el uso de cantidades diminutas (inifinitesimales) de sustancias que en grandes dosis producirían síntomas parecidos a los de la enfermedad que está siendo tratada. El propio Hahnemann reconocía que la idea de emplear sustancias que producen síntomas similares se le ocurrió cuando, al tomar una infusión de corteza de cinchona, experimentó síntomas parecidos a los de la malaria, enfermedad que se trataba en aquella época precisamente mediante la corteza de cinchona, rica en quinina. Irónicamente, todo parece indicar que lo que pasó es que Hahnemann sufría de alergia a la quinina. La homeopatía es eficaz para prevenir y tratar tanto enfermedades agudas (gripe, tos, diarrea, crisis de migraña, contusiones etc.) como crónicas (alergia, dermatitis, asma, afecciones reumáticas, ansiedad etc.), en infecciones de repetición (garganta, oídos, ginecológicas, urinarias .), e incluso en cuidados paliativos (control de síntomas como dolor o estreñimiento y alivio de efectos secundarios como las nauseas de la quimioterapia...). En homeopatía, y especialmente en enfermedades crónicas, el objetivo es ir más allá del alivio de los síntomas que van apareciendo, se busca ayudar al paciente a restablecer globalmente su equilibrio natural. Para ello, el médico homeópata en la consulta tendrá en cuenta, además de los síntomas o problemas de salud que presenta el paciente, su constitución física y su forma de reaccionar y sensaciones frente a la enfermedad, además de factores de mejoría o de empeoramiento. Por eso se dice que el tratamiento, en homeopatía, es más individualizado. Además, estos medicamentos tienen la ventaja de que en general, no presentan contraindicaciones, interacciones medicamentosas ni efectos adversos relevantes relacionados con la toma del medicamento, por lo que se recomiendan habitualmente para todo tipo de pacientes, incluso niños, embarazadas y enfermos polimedicados. Según el caso, ",
    image: "homeopatia.jpg",
  },
];

// ---------------------------------------------------------------------------
// 4. TERAPIAS DE CUERPO, MOVIMIENTO Y CONCIENCIA
// ---------------------------------------------------------------------------

export const bodyMindTherapies: HolisticTherapy[] = [
  {
    id: "yoga",
    name: "Yoga Tradicional y Pranayama",
    origin: "Filosofía Sagrada Védica de la India",
    principle: "Unión y armonía entre cuerpo, respiración y mente",
    description:
      "Y oga significa unión, en sánscrito: mente, cuerpo y espíritu recuperan su unidad esencial con lo divino. Pero si hay otro concepto que defina la esencia del yoga es el equilibrio. El yoga trae equilibrio a nuestras vidas, que es el estado necesario para que el cuerpo físico y los cuerpos sutiles que identifica la anatomía yóguica estén libres de bloqueos, enfermedades y funcionen a sus máximas capacidades. Ese equilibrio es también lo que buscamos para sentirnos con energía vital pero con serenidad mental, conectados con nuestro ser físico y trascendente. Llamamos yoga a las prácticas, entre las que se encuentran posturas (asanas), meditación, respiración (pranayama), kriyas (limpiezas), mudras (sellos energéticos), kirtan (cantos), mantras, rituales. Pero el yoga, como medicina holística que induce los procesos naturales de sanación y salud de la anatomía física y espiritual, como sistema psicológico y filosófico, que busca el bienestar, la paz interior, la expansión de los límites, implica todo un estilo de vida que involucra la observancia de pautas éticas, principios de vida y regímenes de alimentación. Por eso se dice que el yoga es una disciplina. Pero el yoga es tanto un camino como un fin. Pues esta disciplina busca precisamente el yoga: la reunificación con nuestro ser trascendente. Es lo que en algunas tradiciones se define como iluminación o moksha, es la superación de nuestra limitada identidad individual y la unión con la sabiduría, la inmortalidad y la dicha de la conciencia universal. Volver a ser lo que ya somos, aunque lo hayamos olvidado, que es existencia pura. Para la tradición espiritual del yoga la evolución espiritual significa superar la ignorancia sobre nuestra esencia divina. Esta conciencia universal (que puede ser definida también como dios, o la totalidad) es la única verdad y lo único que existe. Una de las prácticas centrales del yoga, tal como es practicado en la actualidad, son las postura. Más aún: como en la actualidad dicho tipo de yoga es el más difundido en el mundo, al punto en el que la palabra yoga se utiliza como sinónimo del hatha yoga, las posturas son (más que nunca antes en la larga historia de la disciplina) el elemento al que más preponderancia se le da en la actualidad. Por lo tanto, la palabra yoga se utiliza hoy de una forma imprecisa para denominar diferentes estilos de yoga de posturas. No podríamos tampoco clasificarlos todos como hatha yoga, pero por lo general combinan técnicas y principios de ",
    image: "yoga.jpg",
  },
  {
    id: "ayurveda",
    name: "Ayurveda y Medicina Védica",
    origin: "Ciencia Milenaria de la Longevidad Hindú",
    principle: "Equilibrio Tridóshico (Vata, Pitta, Kapha) y Prana",
    description:
      "A yurveda es una antigua práctica medicinal hindú que comprende una gama de tratamientos que incluyen hierbas medicinales, cambios en la dieta, meditación, masajes y yoga, para mantener o recuperar la salud. Ayurveda ha tenido una fuerte influencia a través de la historia en muchos sistemas de medicina, desde la antigua Grecia en el occidente hasta la Medicina China Tradicional en el oriente. Las Hierbas y fórmulas Ayurvédicas aparecen en la Medicina China Tradicional, y también existe una forma Ayurvédica de acupuntura. Ayurveda es el fundamento de la medicina Tibetana, que introduce Ayurveda junto con el Budismo Indio. La medicina Tibetana consiste predominantemente en Ayurveda con una influencia secundaria de la Medicina China. Existen formas de Ayurveda en el Nepal, Sri Lanka y Birmania, así como en algunas zonas de Thailandia. Ayurveda es también uno de los sistemas de medicina alternativa mas actual y comprensible para ser introducida en Occidente, donde su popularidad y prestigio están creciendo rápidamente. En el contexto occidental, Ayurveda es un sistema de medicina Naturista y abarca todos los campos que se enseñan en escuelas médicas de Naturismo. Como Funciona: Según la Ayurveda, dentro de cada persona existen los cinco elementos básicos del universo: tierra, aire, fuego, agua y éter (o espacio). La combinación de estos elementos crea tres tipos corporales metabólicos o doshas. Los doshas se denominan vata, pitta y kapha. Vata consta de éter y aire y está asociado con la liviandad y el movimiento. Pitta está compuesto por fuego y está asociado con los procesos metabólicos de transformación, como por ejemplo, la digestión de alimentos para producir energía. Kapha consta de tierra y agua y está asociado con la estructura y la estabilidad. Si bien en cada persona residen todos los tipos de energía, por lo general uno es dominante. Objetivo: El objetivo de determinar el tipo físico de la persona. Esta es la base de convención del Ayurveda, la clasificación en 3 tipos físicos o energéticos puros y sus posibles combinaciones. Estos sistemas de energía o metabólicos que el Ayurveda llama doyas, son formas en que la energía actúa en una persona, dando una contextura física, una forma de digestión, de circulación, etc. Acupuntura Macrobiótica Aromaterapia Magnetoterapia Ayurveda Meditación Biomagnetismo Musicoterapia Cromoterapia Osteopatía Eutonía Quiropraxia Feng Shui Reflexología Flores de Bach Reiki Fitoterapia Relajación Hipnosis Yoga Homeopatía ",
    image: "ayurveda.jpg",
  },
  {
    id: "meditacion",
    name: "Meditación y Silencio Interior",
    origin: "Sendero Universal de Expansión de Conciencia",
    principle: "Quietud mental, respiración consciente y comunión con el Ser",
    description:
      'M editar es el camino directo al Espíritu. Lo que no significa soltar la materia sino unir Cielo y Tierra. Es la mejor forma para lograr ampliar la conciencia y evolucionar rápidamente con el uso conciente de la voluntad y el amor-devoción. La meditación es "SER", es dejar el "yo" y tomar el "soy", no para abandonar el yo sino para dejarlo en manos del soy; entonces el "Yo soy" toma un sentido total, se traslada la conciencia del "yo inferior" al "Yo Superior" y así, se espiritualiza la materia y se materializa el espíritu. Meditando logramos centrarnos, sentirnos completos, felices, vibrantes de energía, plenos. Sumamos conciencia y nos expandimos, resignificamos nuestra vida y le damos sentido a cada experiencia que jugamos. Experimentamos nuestro espíritu y la certeza de nuestra naturaleza eterna. Así, nos amamos y nos sanamos y ese amor se expande a todo cuanto miramos y tocamos, vivimos lo mágico. Nos unimos a Dios y gozamos en él. Pero hay una diferencia muy grande entre "haberlo leído y haberlo vivido", y en ese sentido la meditación es para los valientes que no temen entregarse a la aventura de vivir el Espíritu. Y vivir el Espíritu significa experimentar y tomar las riendas de la propia evolución sumando todas las herramientas posibles que me conduzcan a la mejor manifestación de mi espíritu en esta encarnación. Existen variadas técnicas de meditación. Tan variadas como somos nosotros. Y en ese sentido hay técnicas de meditación para cada estado mental, emocional o físico, y para cada tipo de personalidad. Podemos encontrar fácilmente nuestra mejor técnica hasta que "el Todo Uno" se muestra y ya conocemos el principio del camino. A partir de allí y progresivamente, todo en nuestra vida se transforma en meditación y un estado de paz interior se encuentra siempre dentro nuestro, revelándonos nuevos estados de conciencia constantemente, abriendo nuestras fronteras y despertando nuevos dones. Así, en comunión con nuestro espíritu, en una espiral de evolución de la conciencia personal y atento a las necesidades del alma, vamos cumpliendo la misión que tenemos para esta encarnación y avanzamos en el camino de retorno. Acupuntura Macrobiótica Aromaterapia Magnetoterapia Ayurveda Meditación Biomagnetismo Musicoterapia Cromoterapia Osteopatía Eutonía Quiropraxia Feng Shui Reflexología Flores de Bach Reiki Fitoterapia Relajación Hipnosis Yoga Homeopatía Lo siento tienes que instalar Quitcktime para escuchar la musica desde http://www.apple.com/es/quicktime/',
    image: "meditacion.jpg",
  },
  {
    id: "reflexologia",
    name: "Reflexología Podal",
    origin: "Medicina Tradicional de Zonas Reflejas",
    principle: "Estimulación de terminaciones nerviosas y respuesta orgánica",
    description:
      "L a reflexología es la disciplina que promueve el tratamiento de diversas afecciones a través de masajes en las manos o en los pies. De acuerdo a esta doctrina, los masajes que se aplican en ciertos puntos del cuerpo provocan un reflejo en otras regiones corporales, permitiendo el alivio de un malestar. Reflexología Esto quiere decir que, de acuerdo a la reflexología, se puede tratar la cefalea y la gastritis, por citar dos malestares, sin entrar en contacto con la cabeza o con el estómago. Con solo realizar masajes en los puntos adecuados de los pies o de las manos, la acción terapéutica llegará hasta la zona afectada. El origen de la reflexología se considera que está en el año 2.300 a.C, ya que en aquel entonces se tiene conocimiento de que se utilizaban los masajes en los pies para poder hacerle frente a determinadas dolencias. No obstante, la disciplina moderna se basa en los estudios, trabajos e investigaciones acometidas hace unos 125 años aproximadamente. La reflexología se basa en postulados similares a los de la acupuntura. Sus impulsores creen que el cuerpo se encuentra atravesado por meridianos que lo dividen en diferentes regiones. Cada una de estas regiones tiene su reflejo en los pies o en las manos. En algunos casos, se cree que los reflejos también se hallan en la nariz y en las orejas. Por los mencionados meridianos, de acuerdo a los reflexólogos, circula una energía que se conoce como chi o qui. Dicha energía debe fluir con naturalidad: cuando eso no ocurre, se genera una enfermedad u otro problema de salud. A través de la reflexología, se masajean puntos clave que permiten la reactivación del flujo del chi en aquellas regiones del cuerpo en las que había algún tipo de bloqueo o inconveniente. Quienes llevan a cabo esta técnica y quienes periódicamente acuden a la misma para someterse a masajes, consideran que ella trae consigo un importante número de beneficios, tales como los que mostramos a continuación: -Consigue reducir de manera considerable los dolores que se sufren en el cuerpo. -Logra que la persona pueda disminuir e incluso acabar con sus problemas de estrés y ansiedad. -También se determina que contribuye a mejorar lo que es la circulación sanguínea. -De igual modo, se cree que es una estupenda alternativa para acabar con cuadros de depresión. -Hay personas que manifiestan que confían en la reflexoterapia porque es la herramienta que les ha ayudado a mejorar de forma general los distintos problemas de salud que tenían. -Los ex",
    image: "reflexologia.jpg",
  },
  {
    id: "fitoterapia",
    name: "Fitoterapia Tradicional",
    origin: "Farmacopea Botánica Milenaria",
    principle: "Uso terapéutico de las propiedades curativas de las plantas",
    description:
      "L a fitoterapia es la primera medicina que conoció el hombre, y de hecho la más experimentada, puesto que antes de los compuestos químicos aparecidos en el último siglo, los fitofármacos y sus principios activos eran el único medicamento que conocía el hombre para recuperar la salud y para prevenir posibles enfermedades. A pesar de que la era química ha ido relegando a un segundo plano la medicina natural y la fitoterapia, habiendo llegado la industria farmacéutica a monopolizar la medicina oficial, lo cierto es que las plantas medicinales están infinitamente más testadas y probadas en los seres humanos a lo largo de la historia que los medicamentos farmacéuticos con los que tan seguros nos sentimos. No obstante, el hecho de que lleve a sus espaldas una gran trayectoria empírica, no la convierte en una práctica exenta de riesgos, puesto que, al igual que cualquier medicamento, los principios activos de las plantas son compuestos químicos que interactúan con nuestra propia química interna y su uso requiere un gran conocimiento para no provocar un desequilibrio en nuestro organismo. Fitoterapia y medicamentos convencionales En realidad, un fitofármaco no es tan diferente de un fármaco convencional. De hecho, casi todos los medicamentos que nos receta nuestro médico tradicional contienen los mismos principios activos que encontramos en las plantas medicinales. La diferencia radica en que los medicamentos sintéticos contienen principios activos que han sido aislados y creados en un laboratorio, mientras que las plantas contienen esos mismos principios activos de manera natural, co-actuando con otras sustancias también presentes en la planta que, de hecho, muchas veces funcionan en sinergia potenciando sus efectos. Una de las características más extraordinarias de las plantas medicinales es que muchos de sus elementos químicos naturales no se conocen, es decir, el ser humano sabe que contienen ciertos principios activos que actúan con otros elementos, muchos de ellos desconocidos, y que es precisamente esa sinergia entre numerosas sustancias lo que les proporciona su capacidad terapéutica. Cuando el hombre lo aísla y lo crea en un laboratorio, tiene la capacidad de aumentar la dosis y conseguir así más fuerza en la función del principio activo, pero al mismo tiempo altera las reglas naturales, ya que muchas veces, esos elementos desconocidos juegan un papel importante a la hora de contrarrestar efectos, protegernos, y funcionar en perfecta sinergia con la energ",
    image: "fitoterapia.jpg",
  },
  {
    id: "osteopatia",
    name: "Osteopatía Estructural y Fascial",
    origin: "Medicina Manual Holística",
    principle:
      "Restablecimiento de la movilidad articular y los tejidos corporales",
    description:
      "L a osteopatía es un tipo de medicina alternativa y pseudomedicina que enfatiza el masaje y otras manipulaciones físicas del tejido muscular y los huesos.1&#8203;2&#8203; Su nombre deriva del griego antiguo «hueso» (&#8000;&#963;&#964;&#941;&#959;&#957;) y «sensible a» o «que responde a» (-&#960;&#940;&#952;&#949;&#953;&#945;). Andrew Taylor Still, un médico estadounidense, fundó la osteopatía en 1874. El National Health Service británico señala que, aunque existe «buena» evidencia de la osteopatía como tratamiento para el lumbago y «limitada evidencia para sugerir que pueda ser efectiva para algunos tipos de dolor de cuello, hombros o extremidades inferiores o recuperación después de operaciones de cadera o rodilla», no existe evidencia, o es insuficiente, que la osteopatía sea efectiva como tratamiento para enfermedades «no relacionadas» con los huesos y músculos, «como dolores de cabeza, migrañas, menstruaciones dolorosas, desórdenes digestivos, depresión y llanto excesivo de bebés (cólico)»; una referencia explícita a las afirmaciones de la osteopatía manipulativa. Una revisión sistemática de 2011 sobre la manipulación osteopática «falló en producir evidencia convincente» para la eficacia en el tratamiento del dolor musculoesquelético. Tratamiento y principios El tratamiento osteopático consiste en tratar las disfunciones, la hipermovilidad o hipomovilidad que se puedan encontrar en la columna vertebral, las articulaciones, el sistema nervioso, el sistema muscular, las vísceras, el cráneo. Busca recuperar el equilibrio corporal perdido, reactivando sus mecanismos de autocuración con diversas técnicas terapéuticas: manipulaciones articulares, técnicas de energía muscular, de movilización, de estiramiento, HVLT, funcionales, entre muchas otras. El tratamiento depende de una evaluación corporal completa, del tipo de lesión y del paciente. Ningún tratamiento es igual a otro y se debe seguir siempre un enfoque personal único. La osteopatía se basa en la creencia de que todos los sistemas del cuerpo trabajan conjuntamente, están relacionados, y por tanto los trastornos en un sistema pueden afectar el funcionamiento de los otros.&#8203; Es por tanto una práctica de tipo holístico. El tratamiento, que se denomina manipulación osteopática, consiste en un sistema de técnicas prácticas orientadas a aliviar el dolor, restaurar funciones y promover la salud y el bienestar. Existen ocho principios básicos en la osteopatía, los cuales son ampliamente enseñados en la ",
    image: "osteopatia.jpg",
  },
  {
    id: "quiropraxia",
    name: "Quiropraxia y Flujo Nervioso",
    origin: "Terapia de Alineación Vertebral",
    principle:
      "Optimización del sistema nervioso mediante ajustes de la columna",
    description:
      'L a Quiropraxia es una terapia manual que trata y previene los trastornos mecánicos en la asociación de nervios, músculos y esqueleto. Comprende diversas técnicas manuales, como la manipulación o el ajuste de las articulaciones, con especial énfasis en las dolencias denominadas "subluxaciones". Una subluxación es un desplazamiento de una articulación por estiramiento de tejidos blandos. Este tipo de anomalías comprimen ciertos nervios, ocasionando variados problemas físicos, disminuyendo la movilidad articular, ya que afectan directamente la biomecánica corporal. Cuando se aprisiona un nervio se altera la funcionalidad articular asociada a éste. Por esta razón las subluxaciones frecuentemente detonan una secuencia de efectos secundarios concatenados, que producen un deterioro de la salud y el bienestar general del paciente. Las subluxaciones se pueden producir por diferentes motivos como por ejemplo: bruscos e inapropiados movimientos, malas posturas, golpes, sobre esfuerzos musculares, etc. El área del cuerpo que más frecuentemente se ve dañada por esta patología es la columna vertebral. Al afectarse el eje principal de sustentación se llega a comprometer toda la estabilidad estructural del cuerpo. Otras situaciones de salud que predisponen para que se produzcan subluxaciones son la mala alimentación, los trastornos del sueño, las malas prácticas deportivas, el sedentarismo y otras diversas patologías físicas... La Quiropraxia es entonces la disciplina terapéutica que trata estas subluxaciones y enfatiza la capacidad regeneradora inherente del cuerpo humano de curarse a sí mismo sin el uso de fármacos ni cirugía. La Quiropraxia se fundamenta en la relación que se establece entre la estructura (centrada en la columna vertebral) y la función (coordinada por el sistema nervioso), y en cómo esta relación afecta a la mantención y la recuperación de la salud. También un buen quiropráctico éticamente sabe derivar al paciente a otros profesionales de la salud cuando la ocasión lo amerita para beneficio del paciente. La mayoría de los dolores de espalda son producidos por problemas posturales o tensionales: dichos problemas, que representan la causa verdadera del dolor, son ignorados o postergados la mayoría de las veces, hasta que se manifiesta claramente el dolor u otros síntomas. Todos sabemos que las grandes ciudades afligidas por la polución atmosférica, atochamientos vehiculares, un ritmo de vida acelerado, hábitos de vida sedentarios, etc. producen en sus h',
    image: "quiropraxia.jpg",
  },
  {
    id: "eutonia",
    name: "Eutonía Somática",
    origin: "Método Psicosomático de Gerda Alexander",
    principle: "Conciencia y autorregulación del tono neuromuscular óptimo",
    description:
      'L a eutonía fue creada por Gerda Alexander y busca conocer qué mecanismos causan el tono muscular, y cómo influir sobre ellos a través de estímulos que lo hagan adecuado a la vida cotidiana y la expresión artística. "Es preciso aprender cada día un poco más que somos ese cuerpo en el cual podemos apoyarnos". Gerda Alexander nació en Wuppertal, Alemania, en 1908. Se formó como profesora de rítmica a través del método Jaques Dalcroze. Sus intereses se ubicaron en la música, el teatro y la expresividad en la danza. Como docente entró en contacto con la reforma pedagógica de su tiempo y con los nuevos conceptos educativos de María Montessori, los cuales postulan que el aprendizaje debe provocar felicidad, alentar la propia creatividad y capacidad natural de los niños, ya que es uno mismo quien construye su aprendizaje. Debido a repetidas fiebres reumáticas y a una afección cardiaca, empezó a indagar en sí misma cómo moverse de la manera más efectiva posible sin llegar a fatigarse. Observó a sus alumnos, sus dolencias y dificultades en la movilidad, con el cuerpo tanto en reposo como en movimiento e investigó sobre los fundamentos neuropsicológicos de los movimientos naturales del ser humano, creando su propio método al cual llama eutonía. Los inicios de su escuela Gerda Alexander comprendió que al trabajar con la capacidad del ser humano de moverse y desplazarse en el espacio y la acentuación de esa conciencia, no sólo se mejora la calidad de movimiento de la persona, sino que esto influye también en su comportamiento general. Ello lo experimentó con personas tanto sanas como enfermas, de las más variadas edades. Durante la Segunda Guerra Mundial emigró a Dinamarca, y es en 1940 cuando fundó oficialmente su primera escuela de eutonía en Copenhague. A partir de entonces la eutonía se difunde por Europa y en toda América. Gerda murió en su patria adoptiva en 1994, procurando haber creado una pedagogía que incidiera en la gente, produciendo un cambio positivo en su conducta y educación. Fue su manera de colaborar para que la discriminación y la violencia social y religiosa que había tenido lugar en su Alemania natal no volvieran a repetirse. La búsqueda del buen tono El término eutonía se compone de dos términos griegos: eu que significa bueno o armonioso y tonus que expresa tensión y se refiere al tono muscular, el grado de tensión o elasticidad de nuestras fibras musculares. Schwangere Frau hält ihren Bauch La eutonía también ayuda a un buen parto. Se b',
    image: "eutonia.jpg",
  },
  {
    id: "macrobiotica",
    name: "Nutrición Macrobiótica",
    origin: "Filosofía Alimentaria Taoísta",
    principle:
      "Equilibrio del Yin y el Yang a través del alimento puro y natural",
    description:
      'Macrobiotica L a macrobiótica (del griego &#956;&#945;&#954;&#961;&#972;&#962;, largo y &#946;&#943;&#959;&#962;, vida) es una enseñanza creada por el pensador japonés George Ohsawa (1893-1966) y difundida a continuación por diversos de sus estudiantes. Se trata de un sistema tanto filosófico como práctico: su objetivo es actualizar el antiguo principio único oriental (o principio del Yin y el Yang), que según Ohsawa constituye la base de la ciencia y de todas las filosofías y religiones de Extremo Oriente, con el fin de presentarlo de una manera comprensible para la mentalidad moderna. Su especificidad es su aspecto pragmático: la macrobiótica pretende demostrar que la aplicación de este principio permite comprender y resolver los problemas concretos de la existencia. El vínculo entre la filosofía y la práctica se hace, en particular, a través de la alimentación: Ohsawa defiende la idea de que comiendo según este principio (lo que equivaldría a decir "según las leyes de la naturaleza") el organismo se armoniza (o reencuentra la salud) y así el juicio se vuelve más claro, capaz de percibir la realidad (es decir, estas "leyes de la naturaleza") de una manera más precisa. La alimentación macrobiótica en tanto que técnica, es una aplicación práctica y lógica de las nociones del principio único.11&#8203; Según éste, el desarrollo global del hombre (tanto físico, como mental y espiritual) tendría que hacerse a solas de una manera natural. Si no es el caso, es porque se ponen trabas. Toda cosa que vive es porque está alimentada; cada ser necesita una alimentación adaptada y, según esta visión del mundo, hay ciertos alimentos específicos para el hombre, en tanto que ser capaz de alcanzar la conciencia. Así que la alimentación macrobiótica es una técnica que pretende alimentar el organismo de la manera más justa posible, sin carencias ni excesos (según las nociones de Yin y Yang), a fin de que éste pueda desarrollarse libremente, permitiendo que se adapte a las vicisitudes que tendrá que atravesar. Como las situaciones cambian en permanencia, aplicar el estudio de Yin y Yang a la alimentación permite adaptarla constantemente, según la actividad, la edad o los objetivos de cada uno, por ejemplo. No hay, pues, ninguna prohibición alimenticia, sino una adaptación a cada caso particular. Ohsawa insiste mucho en el hecho de que "la práctica sin la teoría es peligrosa, pero la teoría sin la práctica es inútil", y propone 10 regímenes equilibrados, yendo del más abierto ',
    image: "macrobiotica.jpg",
  },
  {
    id: "hipnosis",
    name: "Hipnosis Clínica y Relajación Guiada",
    origin: "Terapia Subconsciente Integrativa",
    principle:
      "Focalización de la atención y desbloqueo de patrones emocionales",
    description:
      "E s difícil definir de forma resumida lo que significa este término; sin embargo nos aventuraremos a hacerlo. La hipnosis es una técnica con la que conseguimos un estado psico-fisiológico diferente del estado de vigilia normal. El electro-encefalograma de una persona hipnotizada es diferente del de una persona despierta o dormida en sueño natural. Dicho estado se caracteriza por una gran sugestionabilidad, ¿qué quiere decir esto? que la persona bajo hipnosis acepta como reales las sugestiones que le sugiere el hipnotizador. Para que sirven: A parte de para realizar los espectáculos a veces ridículos y bochornosos que vemos en TV, la hipnosis tiene una aplicación realmente más brillante y práctica que es la de su vertiente clínica, es decir, para curar o mejorar enfermedades o las condiciones físicas o mentales de las personas. Así por ejemplo, es muy conocida la aplicación de la hipnosis o la sofrología (técnica muy parecida pero donde no hay pérdida de conciencia) para la extracción de piezas dentales sin dolor. También para tratar todo tipo de trastornos mentales y psicológicos: fobias, miedos, traumas, depresión, angustia, nerviosismo, estrés, enuresis nocturna, timidez, etc. Por ejemplo, se ha visto su gran utilidad en dermatología para curar prácticamente al instante verrugas, eczemas, y todo tipo de erupciones cutáneas. En definitiva, con hipnosis son tratables cualesquiera de las enfermedades llamadas psicógenas o psicosomáticas, es decir, las que tienen un origen en un conflicto emocional o psíquico. En el campo de las adicciones, es de un éxito notorio para dejar el tabaco, así como para tratar ludopatías, alcoholismo, etc. En este caso, el simple hipnotizador, pasa a ser hipnólogo o persona que usa la hipnosis con un fin terapéutico. Es peligrosa? La hipnosis no es peligrosa, siempre y cuando sea realizada por una persona cualificada y por supuesto tenga la ética suficiente para no someter a su cliente a ninguna práctica que en estado vigila no permitiría. Por lo demás, nadie puede quedarse eternamente dormido si el hipnotizador nos abandonase, ya que en ese caso, pasaríamos del sueño hipnótico a un sueño natural y despertaríamos normalmente. Las únicas contraindicaciones absolutas de la hipnosis son en los casos de padecerse epilepsia o esquizofrenia. La epilepsia porque podría suceder que en pleno trance hipnótico sobreviniera una crisis epiléptica a quien padece esta enfermedad, y la esquizofrenia porque, a parte de que sea muy difícil hipnoti",
    image: "hipnosis.jpg",
  },
  {
    id: "relajacion",
    name: "Técnicas de Relajación Consciente",
    origin: "Higiene Nerviosa y Restauración Somática",
    principle: "Recuperación del estado natural de sosiego frente al estrés",
    description:
      "Amonra Chile - Relajación L a Relajación es nuestro estado natural, proporciona, principalmente, un estado de descanso profundo a la vez que se regula el metabolismo, ritmo cardíaco y respiración, nos libera de nuestras tensiones, tanto musculares como psíquicas que se han acumulado con el paso del tiempo. La Relajación mejora el riego sanguíneo, armoniza la respiración, los latidos del corazón, distiende los músculos, etc, proporcionando una intensa sensación de bienestar, calma y tranquilidad, cercana a la del sueño profundo, pero en estado de vigilia. La persona se encuentra en un estado de sensibilidad y receptividad natural aumentada, atenta al más alto nivel, a través de cada una de las células de su cuerpo. En esos momentos se gasta el mínimo de energía, consiguiendo, como consecuencia, una respuesta muy positiva, esencialmente a un nivel psicológico. Relajarse es indispensable para hacer frente a la vida diaria donde las prisas, los miedos y el estrés nos acechan en todo momento. Quien practica la Relajación debe desconectar del exterior en ese momento por completo y centrarse en su interior, en su propio y auténtico ser, siendo esta forma la mejor manera de escucharse a sí mismo-a, observar sin crítica y tomar conciencia para que el cuerpo y la mente trabajen en perfecta sintonía. Luego en nuestra vida cotidiana, nuestro cuerpo y nuestra mente se sentirán notablemente rejuvenecidos, llenos de energía y vitalidad. Relajación es la innata capacidad del cuerpo para alcanzar un estado especial caracterizado por una disminución de las pulsaciones cardíacas, de la presión arterial y de las ondas cerebrales, y una reducción general de la velocidad del metabolismo. Los cambios producidos por la Relajación contrarrestan los perjudiciales efectos y las molestas sensaciones generadas por el estrés. La Relajación puede: Aliviar el dolor de cabeza. Vencer el insomnio. Reducir la presión arterial y controlar los problemas producidos por la hipertensión. Aliviar dolores musculares, en especial de espalda y cuello. Aumentar la creatividad, sobre todo cuando se experimente alguna especie de bloqueo mental. Controlar las crisis de angustia. Reducir los niveles de colesterol. Reducir el estrés general y alcanzar la paz interior y el equilibrio emocional. Aliviar los síntomas de la ansiedad (mareos, palpitaciones, angustia, trastornos gástricos, náuseas, vómitos, dificultades respiratorias, inquietud, aturdimiento, dolores torácicos, entumecimiento de las extremida",
    image: "relajacion.jpg",
  },
  {
    id: "fengshui",
    name: "Feng Shui Tradicional",
    origin: "Arte Taoísta del Entorno Armónico",
    principle: "Canalización armónica del Chi en el hábitat y espacios de vida",
    description:
      "Shui ~ F eng Shui es el arte chino de la decoración, que balancea las energías de vida o chi, en el espacio en el cual nos desenvolvemos, como nuestro hogar, nuestro ambiente de trabajo o cualquier otro lugar. Feng Shui (que se pronuncia fung shway) significa vientos suaves que absorbe aguas calmas, en cierto sentido viento se refiere a la influencia invisible que el entorno ejerce sobre cada uno de nosotros, mientras que agua alude a su capacidad para sostener la vida. El Feng Shui es una filosofía que analiza el diálogo que establecemos día a día con el ambiente en el vivimos, ya que éste es el reflejo de nuestra alma según lo explican los filósofos orientales. La premisa básica de este arte es que, si establecemos una relación armónica y cooperativa con nuestro entorno, aumentamos nuestras posibilidades de tener éxito en la mayoría de las áreas de nuestra vida: salud, relaciones, prosperidad. Es decir, que si armonizamos nuestro chi con el chi del entrono logramos una armonía con las fuerzas naturales que nos rodean; de esta forma si la energía positiva que circula en el ambiente lo hace en forma libre, las personas que residen en ese ambiente se benefician de esto, y experimentan un sentimiento de bienestar, que se refleja en su salud y prosperidad. Es cierto que la persona al decorar su casa le atribuye relaciones y objetos que tienen un significado en su mundo interior, de su yo. En la antigüedad se reservaba este arte a los templos y palacios chinos, para mantener la energía centrada en estos lugares, hasta que hace poco tiempo, este arte fue divulgado abiertamente al público general para que todos puedan beneficiarse con esta armonización energética, teniendo gran influencia en la decoración occidental. La práctica del Feng Shui toma en cuenta las siguientes especialidades: el Feng Shui tradicional, la interpretación moderna del Feng Shui, la Geomancia y la Astrología. Con respecto a algunos detalles a tener en cuenta, podemos decir que el lugar considerado de mayor poder dentro de la casa es el que está más lejos de la puerta, es decir, que según la distancia a la salida de esa habitación se jerarquizan los puntos de poder, a mayor distancia mayor poder; cerca de la puerta se ven las cosas que reflejan la forma de recibir a nuestros invitados o huéspedes, es lo primero que se ve al entrar a una casa; finalmente las áreas del centro tienen mas que ver con lo que uno hace. El arte del Feng Shui es una herramienta a tener en cuenta para todos ",
    image: "fengshui.jpg",
  },
];
