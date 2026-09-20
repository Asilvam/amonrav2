export interface ZodiacGem {
  sign: string;
  symbol: string;
  element: string;
  primaryGem: string;
  secondaryGems?: string;
  etymologyAndNature: string;
  analogousVirtues: string;
  therapeuticProperties: string;
}

export interface HealingWaterStep {
  stepNumber: number;
  title: string;
  instruction: string;
}

export interface GemStone {
  name: string;
  mineralGroup: string;
  color: string;
  energyType: "Emisora" | "Receptiva" | "Equilibrante";
  traditionalHealing: string;
  spiritualUse: string;
}

export const zodiacGems: ZodiacGem[] = [
  {
    sign: "Aries",
    symbol: "♈",
    element: "Fuego",
    primaryGem: "Amatista",
    secondaryGems: "Diamante y Jaspe rojo",
    etymologyAndNature:
      "Su nombre proviene del griego y significa «no se embriaga». Es un cuarzo coloreado de violeta por óxido de hierro.",
    analogousVirtues:
      "Atenúa la impulsividad del fuego primordial, infundiendo equilibrio moral, serenidad en el actuar y templanza espiritual.",
    therapeuticProperties:
      "Alivia dolores de cabeza y cefaleas tensionales; los antiguos la utilizaban para mitigar la fatiga visual y armonizar la energía nerviosa.",
  },
  {
    sign: "Tauro",
    symbol: "♉",
    element: "Tierra",
    primaryGem: "Ágata",
    secondaryGems: "Esmeralda y Ópalo",
    etymologyAndNature:
      "Variedad de calcedonia formada por bandas concéntricas de cuarzo y ópalo. Pulida, suave y de gran consistencia terrenal.",
    analogousVirtues:
      "En analogía con el signo de Tauro, favorece la estabilidad, la fertilidad, la prosperidad en las cosechas y la paciencia.",
    therapeuticProperties:
      "Tradicionalmente afamada por fortalecer la garganta, tonificar las cuerdas vocales y favorecer la resistencia física.",
  },
  {
    sign: "Géminis",
    symbol: "♊",
    element: "Aire",
    primaryGem: "Berilo",
    secondaryGems: "Aguamarina y Ágata",
    etymologyAndNature:
      "Del griego «brillante». Gema transparente de tonalidades variables que recuerdan la floración primaveral.",
    analogousVirtues:
      "Se asocia con la agilidad mental, la elocuencia y la destreza manual. Tradicionalmente empleada para favorecer la concentración y la lucidez.",
    therapeuticProperties:
      "Favorece la respiración serena, alivia el cansancio intelectual y aclara la visión durante períodos de intenso estudio.",
  },
  {
    sign: "Cáncer",
    symbol: "♋",
    element: "Agua",
    primaryGem: "Esmeralda",
    secondaryGems: "Ópalo y Perla",
    etymologyAndNature:
      "Raíz sánscrita (Samaraka), de tono verdemar o amarillo-verdoso. Símbolo de la eterna renovación de las aguas.",
    analogousVirtues:
      "Encarna la esperanza, la ternura materna, la fertilidad y la protección de los lazos afectivos del hogar.",
    therapeuticProperties:
      "Reconocida para calmar la emotividad excesiva, armonizar el sistema digestivo y mitigar el desgaste ocular.",
  },
  {
    sign: "Leo",
    symbol: "♌",
    element: "Fuego",
    primaryGem: "Rubí",
    secondaryGems: "Diamante y Cuarzo blanco",
    etymologyAndNature:
      "Del latín «rubeus» (rojo). Corindón noble considerado por los caldeos la gema por excelencia del Sol y el valor.",
    analogousVirtues:
      "Simboliza la fuerza vital, la generosidad de ánimo, el liderazgo magnánimo y la fidelidad de corazón.",
    therapeuticProperties:
      "Estimula la vitalidad cardiovascular, vigoriza la sangre y revitaliza a la persona tras épocas de abatimiento.",
  },
  {
    sign: "Virgo",
    symbol: "♍",
    element: "Tierra",
    primaryGem: "Jaspe",
    secondaryGems: "Jade y Cornalina",
    etymologyAndNature:
      "De origen semítico. Calcedonia compacta y opaca con vetas terrosas de gran resistencia y estabilidad.",
    analogousVirtues:
      "Favorece el discernimiento ordenado, el sentido práctico, la meticulosidad bien canalizada y el autodominio.",
    therapeuticProperties:
      "Calma la tensión nerviosa somatizada en el aparato digestivo, ayuda a depurar toxinas y favorece el reposo nocturno.",
  },
  {
    sign: "Libra",
    symbol: "♎",
    element: "Aire",
    primaryGem: "Diamante",
    secondaryGems: "Ópalo y Jade",
    etymologyAndNature:
      "Del griego «adamas» (invencible). Cristal de carbono puro de máxima dureza, transparencia e inalterabilidad.",
    analogousVirtues:
      "Símbolo del equilibrio inamovible, la justicia equitativa, la pureza de intención y la armonía conyugal.",
    therapeuticProperties:
      "Inculca firmeza y claridad mental, disipa la duda paralizante y ayuda a armonizar las funciones renales.",
  },
  {
    sign: "Escorpio",
    symbol: "♏",
    element: "Agua",
    primaryGem: "Topacio",
    secondaryGems: "Malaquita y Jaspe",
    etymologyAndNature:
      "Nombrado por la legendaria isla de Topazos en el Mar Rojo. Silicato de alúmina de luminosidad penetrante dorada o rojiza.",
    analogousVirtues:
      "Despierta el poder de regeneración, la lealtad inquebrantable, la agudeza perceptiva y la revelación de la verdad.",
    therapeuticProperties:
      "Ayuda a canalizar emociones intensas, alivia la tensión circulatoria y estimula la capacidad de recuperación celular.",
  },
  {
    sign: "Sagitario",
    symbol: "♐",
    element: "Fuego",
    primaryGem: "Granate",
    secondaryGems: "Zafiro y Turquesa",
    etymologyAndNature:
      "Del latín «granatus» (como semilla). Cristal de silicato de color rojo encendido y profunda vitalidad.",
    analogousVirtues:
      "Suscita optimismo noble, rectitud moral, búsqueda de altos ideales y fidelidad en los proyectos compartidos.",
    therapeuticProperties:
      "Refuerza las defensas naturales, tonifica la masa muscular y aporta energía perseverante para largas empresas.",
  },
  {
    sign: "Capricornio",
    symbol: "♑",
    element: "Tierra",
    primaryGem: "Ónice",
    secondaryGems: "Cuarzo ahumado y Obsidiana",
    etymologyAndNature:
      "Del griego «ónyx» (uña). Variedad de ágata con bandas paralelas blancas y negras que denotan templanza y contención.",
    analogousVirtues:
      "Fomenta la paciencia madura, la prudencia en las decisiones, la perseverancia y la resolución sensata de conflictos.",
    therapeuticProperties:
      "Fortalece la estructura ósea, afianza la seguridad interior frente a la incertidumbre y ayuda a calmar el estrés.",
  },
  {
    sign: "Acuario",
    symbol: "♒",
    element: "Aire",
    primaryGem: "Zafiro",
    secondaryGems: "Amatista y Sodalita",
    etymologyAndNature:
      "Del hebreo «sappir» (piedra azul). Corindón celeste que evoca la inmensidad del firmamento y la verdad inmanente.",
    analogousVirtues:
      "Inspira fraternidad altruista, amplitud de miras, curiosidad científica y devoción sincera hacia el bien común.",
    therapeuticProperties:
      "Aclara los conductos respiratorios, sosiega la agitación psíquica y facilita la concentración contemplativa.",
  },
  {
    sign: "Piscis",
    symbol: "♓",
    element: "Agua",
    primaryGem: "Crisolita / Peridoto",
    secondaryGems: "Aguamarina y Amatista",
    etymologyAndNature:
      "Silicato de hierro y magnesio de color verde claro y luminoso. Gema asociada históricamente al sosiego de las aguas.",
    analogousVirtues:
      "Calma la hipersensibilidad emotiva, despierta la compasión desinteresada y afina la intuición espiritual.",
    therapeuticProperties:
      "Sedante de los estados de agitación nerviosa, favorece la digestión serena y promueve un sueño reparador.",
  },
];

export const healingWaterSteps: HealingWaterStep[] = [
  {
    stepNumber: 1,
    title: "Selección y limpieza previa del cristal",
    instruction:
      "Para un propósito preventivo general y armonización del aura, utilice un cristal de cuarzo blanco transparente de tamaño mediano. Si se requiere apoyar un proceso curativo ya manifiesto, se aconseja una amatista sin pulir. El cristal debe lavarse con agua pura y sal marina, dejándolo secar al aire.",
  },
  {
    stepNumber: 2,
    title: "Programación consciente de la gema",
    instruction:
      "Sostenga el cristal limpio entre sus manos o llévelo al entrecejo (tercer ojo). Proyéctele con claridad la intención de sanación, pureza y vitalidad con la que va a impregnar el agua, fijando el pensamiento en su perfección geométrica y luminosa.",
  },
  {
    stepNumber: 3,
    title: "Preparación del recipiente cristalino",
    instruction:
      "Deposite el cristal programado en el fondo de un recipiente de vidrio o cristal transparente lleno de agua pura de manantial o filtrada. El vidrio transparente permite que la luz solar interactúe libremente con el campo mineral.",
  },
  {
    stepNumber: 4,
    title: "Sensibilización magnética de las manos",
    instruction:
      "Frote enérgicamente las palmas de las manos hasta que adquieran calor palpable. Colóquelas sobre la boca del recipiente sin tocar el agua, con las palmas orientadas hacia abajo, concentrándose en el flujo de su magnetismo personal.",
  },
  {
    stepNumber: 5,
    title: "Imposición circular en sentido horario",
    instruction:
      "Comience a mover suavemente las manos en círculos sobre el recipiente siguiendo el movimiento de las agujas del reloj (hacia la derecha). Repita el giro tres o cuatro veces hasta percibir un cambio de densidad o sutil cosquilleo magnético entre el agua y sus manos.",
  },
  {
    stepNumber: 6,
    title: "Exposición solar y potenciación",
    instruction:
      "Deje reposar el recipiente en un lugar donde reciba la luz solar directa por un período mínimo de veinticuatro horas. Opcionalmente, puede cubrirse con una pequeña estructura piramidal para concentrar las frecuencias etéricas.",
  },
  {
    stepNumber: 7,
    title: "Administración y posología tradicional",
    instruction:
      "Para revitalización diaria, tome un vaso pequeño en ayunas. En casos de convalecencia o debilidad acusada, la tradición recomienda administrar un pequeño vasito cada quince minutos durante la primera hora y luego espaciarlo en tomas suaves a lo largo de la jornada.",
  },
];

export const gemCatalog: GemStone[] = [
  {
    name: "Cuarzo Blanco (Cristal de Roca)",
    mineralGroup: "Silicatos / Cuarzos",
    color: "Incoloro y transparente",
    energyType: "Emisora",
    traditionalHealing:
      "Disuelve inflamaciones, estimula la regeneración celular y dinamiza el sistema inmunológico.",
    spiritualUse:
      "Amplificador universal de energía e intención; facilita la meditación profunda y la conexión con planos elevados.",
  },
  {
    name: "Amatista",
    mineralGroup: "Silicatos / Cuarzos",
    color: "Violeta púrpura a lila",
    energyType: "Receptiva",
    traditionalHealing:
      "Alivia jaquecas al frotarse sobre las sienes, sosiega el insomnio y favorece la desintoxicación del organismo.",
    spiritualUse:
      "Gema de la sabiduría y la dignidad espiritual; transmuta pensamientos densos y abre la visión intuitiva del tercer ojo.",
  },
  {
    name: "Cuarzo Rosa",
    mineralGroup: "Silicatos / Cuarzos",
    color: "Rosa suave translúcido",
    energyType: "Receptiva",
    traditionalHealing:
      "Tonifica el corazón físico y el sistema circulatorio; alivia tensiones psicosomáticas en el pecho.",
    spiritualUse:
      "Conocido como la piedra del afecto puro; disuelve heridas emotivas, fomenta la autoestima y atrae la armonía conyugal.",
  },
  {
    name: "Citrino (Cuarzo Amarillo)",
    mineralGroup: "Silicatos / Cuarzos",
    color: "Amarillo dorado a miel",
    energyType: "Emisora",
    traditionalHealing:
      "Estimula el páncreas, el bazo y el sistema digestivo; combate la pesadez y revitaliza el cuerpo.",
    spiritualUse:
      "Favorece la claridad intelectual, el optimismo consciente y la manifestación de prosperidad material.",
  },
  {
    name: "Cuarzo Verde (Aventurina)",
    mineralGroup: "Silicatos / Cuarzos",
    color: "Verde esmeralda a musgo",
    energyType: "Equilibrante",
    traditionalHealing:
      "Transmisor de salud general; regenera tejidos y calma irritaciones de la piel y fatiga ocular.",
    spiritualUse:
      "Sintoniza con las fuerzas curativas de la naturaleza; aporta tranquilidad mental y alienta la creatividad.",
  },
  {
    name: "Cuarzo Rutilado",
    mineralGroup: "Silicatos / Cuarzos",
    color: "Cristalino con filamentos dorados de titanio",
    energyType: "Emisora",
    traditionalHealing:
      "Estimula los impulsos bioeléctricos del organismo, retarda el decaimiento y asiste en la regeneración de tejidos.",
    spiritualUse:
      "Llamado «pelo de ángel»; eleva la frecuencia vibratoria, disipa la melancolía y fortalece la proyección mental.",
  },
  {
    name: "Cuarzo Ahumado",
    mineralGroup: "Silicatos / Cuarzos",
    color: "Pardo grisáceo a castaño translúcido",
    energyType: "Equilibrante",
    traditionalHealing:
      "Alivia dolores musculares y articulares; favorece el drenaje de tensiones acumuladas en la columna.",
    spiritualUse:
      "Ancla las energías superiores en el plano terrenal; fortalece el coraje sereno para habitar el presente.",
  },
  {
    name: "Turquesa",
    mineralGroup: "Fosfatos",
    color: "Azul cielo a verde marino",
    energyType: "Receptiva",
    traditionalHealing:
      "Protege contra excesos físicos, sosiega los nervios y avisa sobre fatiga o desbalances cambiando de tono.",
    spiritualUse:
      "Venerada por egipcios y pueblos americanos como gema universal de protección sagrada y unión con el infinito.",
  },
  {
    name: "Lapislázuli",
    mineralGroup: "Silicatos complejos",
    color: "Azul ultramar con motas de pirita",
    energyType: "Emisora",
    traditionalHealing:
      "Favorece la garganta, regula la presión arterial y aclara la voz en oradores y maestros.",
    spiritualUse:
      "Piedra sacerdotal del Egipto antiguo; abre el discernimiento, conecta con la verdad interior y desvanece la confusión.",
  },
  {
    name: "Jade",
    mineralGroup: "Silicatos (Nefrita / Jadeíta)",
    color: "Verde translúcido a manzana",
    energyType: "Equilibrante",
    traditionalHealing:
      "Soberano para el equilibrio renal y las vías urinarias; devuelve la homeostasis al organismo.",
    spiritualUse:
      "En Oriente encarna las cinco virtudes cardinales: caridad, modestia, coraje, justicia y sabiduría.",
  },
  {
    name: "Obsidiana Copo de Nieve",
    mineralGroup: "Vidrio volcánico natural",
    color: "Negro brillante con motas blancas",
    energyType: "Equilibrante",
    traditionalHealing:
      "Alivia bloqueos tensionales y mejora la circulación en extremidades frías.",
    spiritualUse:
      "Gema de confrontación y verdad interior; disuelve las ilusiones del ego y muestra con lucidez el camino de crecimiento.",
  },
  {
    name: "Piedra de Luna",
    mineralGroup: "Feldespatos",
    color: "Blanquecino con adularescencia azulada",
    energyType: "Receptiva",
    traditionalHealing:
      "Equilibra los ciclos hormonales y emocionales en la mujer; atenúa la retención de líquidos.",
    spiritualUse:
      "Fomenta la receptividad lúcida, la serenidad psíquica y el contacto sereno con las profundidades del alma.",
  },
  {
    name: "Ámbar",
    mineralGroup: "Resina vegetal fósil",
    color: "Amarillo miel a naranja rojizo",
    energyType: "Emisora",
    traditionalHealing:
      "Al frotarse genera electricidad estática; tradicionalmente usado para dolores reumáticos, muelas y vías respiratorias.",
    spiritualUse:
      "Potente imán magnético para atraer salud, vitalidad solar y disipar densidades ambientales.",
  },
  {
    name: "Rodocrosita (Rosa del Inca)",
    mineralGroup: "Carbonatos",
    color: "Rosa bandeado con blanco",
    energyType: "Receptiva",
    traditionalHealing:
      "Regula la tensión emocional en el pecho y armoniza la respiración durante momentos de aflicción.",
    spiritualUse:
      "Descubierta por los antiguos incas; sana los lazos afectivos, fomenta el perdón y despierta el amor desinteresado.",
  },
];
