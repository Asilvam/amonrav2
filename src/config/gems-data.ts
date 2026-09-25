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
      "La tradición menciona cuarzo blanco y amatista como símbolos de claridad y serenidad. Esta referencia es cultural: no se presentan como métodos preventivos ni curativos.",
  },
  {
    stepNumber: 2,
    title: "Programación consciente de la gema",
    instruction:
      "Como ejercicio contemplativo, sostenga la gema entre las manos y formule una intención de calma, claridad o cuidado. La programación pertenece al lenguaje ritual y no cambia las propiedades físicas del mineral.",
  },
  {
    stepNumber: 3,
    title: "Preparación del recipiente cristalino",
    instruction:
      "El relato original describe un recipiente transparente y luz natural. No coloque minerales directamente en agua destinada al consumo: algunos pueden liberar sustancias, polvo o tratamientos no seguros.",
  },
  {
    stepNumber: 4,
    title: "Sensibilización magnética de las manos",
    instruction:
      "La práctica simbólica propone calentar las manos y mantenerlas sobre el recipiente, sin tocar el agua, mientras se centra la atención en la respiración y en la intención personal.",
  },
  {
    stepNumber: 5,
    title: "Imposición circular en sentido horario",
    instruction:
      "El movimiento circular forma parte del simbolismo ritual descrito en el material original. No implica una modificación medible de la composición o de las propiedades del agua.",
  },
  {
    stepNumber: 6,
    title: "Exposición solar y potenciación",
    instruction:
      "La exposición a la luz solar y la referencia a una pirámide aparecen como elementos simbólicos de contemplación. No convierten el agua en un producto terapéutico y deben evitarse recipientes cerrados que puedan calentarse o contaminarse.",
  },
  {
    stepNumber: 7,
    title: "Administración y posología tradicional",
    instruction:
      "No se incluye una pauta de ingestión. Amonra no recomienda beber agua que haya estado en contacto con cristales ni utilizarla para tratar dolencias; esta etapa queda registrada solo para explicar el contenido del material antiguo.",
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

/**
 * Fichas recuperadas de las páginas históricas gemas_magnetismo1–5.
 * Las asociaciones se expresan como tradición simbólica, no como indicación médica.
 */
export const additionalGemCatalog: GemStone[] = [
  {
    name: "Diamante",
    mineralGroup: "Carbonatos",
    color: "Incoloro, amarillo o con tonalidades diversas",
    energyType: "Emisora",
    traditionalHealing:
      "En la tradición mineral se asocia con claridad, firmeza y resistencia.",
    spiritualUse:
      "Símbolo de pureza, voluntad y luz interior; invita a sostener una intención con perseverancia.",
  },
  {
    name: "Esmeralda",
    mineralGroup: "Silicatos / Berilos",
    color: "Verde intenso a verde azulado",
    energyType: "Receptiva",
    traditionalHealing:
      "Tradicionalmente vinculada con la renovación, la frescura y el equilibrio emocional.",
    spiritualUse:
      "Gema de la esperanza y la comprensión; se relaciona con el corazón y la generosidad.",
  },
  {
    name: "Zafiro",
    mineralGroup: "Óxidos / Corindones",
    color: "Azul profundo, aunque también existe en otros tonos",
    energyType: "Receptiva",
    traditionalHealing:
      "En el imaginario mineral representa serenidad, sobriedad y concentración.",
    spiritualUse:
      "Piedra de la verdad y la disciplina interior; favorece la contemplación lúcida.",
  },
  {
    name: "Rubí",
    mineralGroup: "Óxidos / Corindones",
    color: "Rojo carmesí a rojo púrpura",
    energyType: "Emisora",
    traditionalHealing:
      "Tradicionalmente asociado con vitalidad, calor y fuerza de ánimo.",
    spiritualUse:
      "Representa pasión, coraje y voluntad creadora; invita a actuar con nobleza.",
  },
  {
    name: "Ópalo",
    mineralGroup: "Sílice hidratada",
    color: "Blanco, negro o iridiscente",
    energyType: "Receptiva",
    traditionalHealing:
      "En la tradición simbólica se relaciona con sensibilidad, imaginación y cambio.",
    spiritualUse:
      "Su juego de colores evoca la intuición, los sueños y la capacidad de revelar matices ocultos.",
  },
  {
    name: "Topacio",
    mineralGroup: "Silicatos",
    color: "Dorado, amarillo, azul o incoloro",
    energyType: "Emisora",
    traditionalHealing:
      "Tradicionalmente representa calidez, claridad y confianza renovada.",
    spiritualUse:
      "Se asocia con optimismo, generosidad y una voluntad capaz de orientar la energía.",
  },
  {
    name: "Jaspe",
    mineralGroup: "Cuarzos / Calcedonias",
    color: "Rojo, amarillo, verde o multicolor",
    energyType: "Equilibrante",
    traditionalHealing:
      "En las tradiciones minerales simboliza estabilidad, resistencia y arraigo.",
    spiritualUse:
      "Piedra de la presencia y la constancia; ayuda a recordar el vínculo con la tierra.",
  },
  {
    name: "Aguamarina",
    mineralGroup: "Silicatos / Berilos",
    color: "Azul pálido a azul verdoso",
    energyType: "Receptiva",
    traditionalHealing:
      "Tradicionalmente vinculada con frescura, calma y fluidez emocional.",
    spiritualUse:
      "Gema del mar y de la comunicación serena; invita a expresar la verdad sin violencia.",
  },
  {
    name: "Ágata",
    mineralGroup: "Cuarzos / Calcedonias",
    color: "Bandas de colores variados",
    energyType: "Equilibrante",
    traditionalHealing:
      "Su estructura estratificada se asocia simbólicamente con estabilidad y protección.",
    spiritualUse:
      "Representa paciencia, arraigo y la integración armoniosa de experiencias distintas.",
  },
  {
    name: "Perla",
    mineralGroup: "Carbonato cálcico orgánico",
    color: "Blanco, crema, rosado o gris",
    energyType: "Receptiva",
    traditionalHealing:
      "En la tradición se relaciona con suavidad, pureza y equilibrio de las emociones.",
    spiritualUse:
      "Símbolo lunar de receptividad, dignidad y sabiduría nacida de la experiencia.",
  },
  {
    name: "Coral",
    mineralGroup: "Material orgánico calcáreo",
    color: "Rojo, naranja, blanco o rosado",
    energyType: "Emisora",
    traditionalHealing:
      "Tradicionalmente representa vitalidad, protección y conexión con el mar.",
    spiritualUse:
      "Amuleto de fuerza vital y vínculo ancestral con las aguas profundas.",
  },
  {
    name: "Amazonita",
    mineralGroup: "Silicatos / Feldespatos",
    color: "Verde azulado con vetas claras",
    energyType: "Receptiva",
    traditionalHealing:
      "En el imaginario mineral se asocia con calma, equilibrio y alivio de tensiones.",
    spiritualUse:
      "Favorece la comunicación honesta y la unión entre la sensibilidad y la voluntad.",
  },
  {
    name: "Sodalita",
    mineralGroup: "Silicatos",
    color: "Azul oscuro con vetas blancas",
    energyType: "Receptiva",
    traditionalHealing:
      "Tradicionalmente vinculada con serenidad, orden mental y expresión equilibrada.",
    spiritualUse:
      "Piedra de la razón intuitiva; acompaña la búsqueda de verdad y coherencia interior.",
  },
  {
    name: "Ojo de gato",
    mineralGroup: "Crisoberilo / Variedades chatoyantes",
    color: "Dorado, verde amarillento o pardo",
    energyType: "Equilibrante",
    traditionalHealing:
      "Su brillo móvil se asocia tradicionalmente con vigilancia, protección y equilibrio.",
    spiritualUse:
      "Símbolo de percepción y prudencia; invita a observar antes de actuar.",
  },
  {
    name: "Obsidiana",
    mineralGroup: "Vidrio volcánico natural",
    color: "Negro, pardo o con reflejos dorados",
    energyType: "Equilibrante",
    traditionalHealing:
      "En la tradición representa arraigo, protección y confrontación con lo oculto.",
    spiritualUse:
      "Espejo simbólico de la sombra; ayuda a mirar con honestidad aquello que requiere transformación.",
  },
  {
    name: "Cornalina",
    mineralGroup: "Cuarzos / Calcedonias",
    color: "Naranja, rojo o pardo rojizo",
    energyType: "Emisora",
    traditionalHealing:
      "Tradicionalmente asociada con calor, movimiento y recuperación del ánimo.",
    spiritualUse:
      "Piedra de impulso creativo, valentía y presencia en el mundo material.",
  },
  {
    name: "Azabache",
    mineralGroup: "Mineraloide orgánico",
    color: "Negro brillante",
    energyType: "Equilibrante",
    traditionalHealing:
      "En distintas culturas se ha usado como símbolo de protección y absorción de densidades.",
    spiritualUse:
      "Amuleto de recogimiento y defensa simbólica frente a influencias perturbadoras.",
  },
  {
    name: "Azurita",
    mineralGroup: "Carbonatos de cobre",
    color: "Azul intenso a azul violáceo",
    energyType: "Receptiva",
    traditionalHealing:
      "Tradicionalmente vinculada con pausa, introspección y claridad de la mirada interior.",
    spiritualUse:
      "Acompaña la meditación y la exploración de ideas profundas con discernimiento.",
  },
  {
    name: "Heliotropo",
    mineralGroup: "Cuarzos / Calcedonias",
    color: "Verde oscuro con inclusiones rojas",
    energyType: "Equilibrante",
    traditionalHealing:
      "Su combinación de tonos se asocia simbólicamente con fuerza, resistencia y renovación.",
    spiritualUse:
      "Representa el vínculo entre la sangre, la tierra y el coraje para atravesar las pruebas.",
  },
  {
    name: "Ónix",
    mineralGroup: "Cuarzos / Calcedonias",
    color: "Negro, blanco o bandeado",
    energyType: "Equilibrante",
    traditionalHealing:
      "Tradicionalmente relacionado con firmeza, autocontrol y estabilidad.",
    spiritualUse:
      "Ayuda a simbolizar límites sanos, concentración y perseverancia ante la dificultad.",
  },
  {
    name: "Crisocola",
    mineralGroup: "Silicatos y carbonatos de cobre",
    color: "Azul verdoso a verde turquesa",
    energyType: "Receptiva",
    traditionalHealing:
      "En la tradición mineral se vincula con calma, suavidad y expresión emocional.",
    spiritualUse:
      "Gema de la comunicación compasiva y de la sabiduría serena de la naturaleza.",
  },
  {
    name: "Granate",
    mineralGroup: "Silicatos",
    color: "Rojo oscuro, naranja, verde o pardo",
    energyType: "Emisora",
    traditionalHealing:
      "Tradicionalmente asociado con energía, constancia y voluntad de recuperación.",
    spiritualUse:
      "Simboliza pasión, compromiso y capacidad de sostener una empresa hasta su maduración.",
  },
  {
    name: "Malaquita",
    mineralGroup: "Carbonatos de cobre",
    color: "Verde bandeado claro y oscuro",
    energyType: "Equilibrante",
    traditionalHealing:
      "En el simbolismo mineral representa cambio, limpieza y movimiento de lo estancado.",
    spiritualUse:
      "Piedra de transformación y conciencia; invita a reconocer patrones antes de modificarlos.",
  },
  {
    name: "Peridoto",
    mineralGroup: "Silicatos / Olivinos",
    color: "Verde amarillento a verde oliva",
    energyType: "Receptiva",
    traditionalHealing:
      "Tradicionalmente vinculado con frescura, ligereza y renovación de la mirada.",
    spiritualUse:
      "Representa alegría, claridad y la liberación de cargas antiguas.",
  },
  {
    name: "Turmalina",
    mineralGroup: "Silicatos complejos",
    color: "Negro, verde, rosa o multicolor",
    energyType: "Equilibrante",
    traditionalHealing:
      "En distintas tradiciones se asocia con protección, equilibrio y estabilidad energética.",
    spiritualUse:
      "Su variedad cromática simboliza integración, discernimiento y protección consciente.",
  },
  {
    name: "Celestita",
    mineralGroup: "Sulfatos",
    color: "Azul cielo, blanco o gris azulado",
    energyType: "Receptiva",
    traditionalHealing:
      "Tradicionalmente representa quietud, liviandad y un descanso contemplativo.",
    spiritualUse:
      "Gema de serenidad y elevación simbólica; invita a escuchar el silencio interior.",
  },
];
