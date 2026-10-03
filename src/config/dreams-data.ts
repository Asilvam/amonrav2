export interface DreamType {
  id: string;
  title: string;
  category: string;
  summary: string;
  historicalOrScientificContext: string;
  coreMechanisms: string[];
  guidanceOrMeaning: string;
  quoteOrExample?: {
    quote: string;
    source: string;
    details?: string;
  };
}

export interface DreamSymbol {
  id: string;
  term: string;
  category: string;
  summary: string;
  detailedInterpretation: string;
  keyAdvice: string;
}

export interface LucidPracticeStage {
  stageNumber: number;
  title: string;
  techniqueName: string;
  instructions: string;
  rationale: string;
  practicalTip: string;
}

export interface DreamTradition {
  culture: string;
  era: string;
  conception: string;
  practice: string;
}

export const dreamsIntro = {
  quote: {
    text: "La posibilidad de realizar un sueño es lo que hace que la vida sea interesante.",
    author: "Paulo Coelho",
  },
  centralThesis:
    "Estás entrando en el mundo de los sueños: un universo misterioso y fascinante donde las leyes ordinarias de la realidad se suspenden para dar paso a la verdad profunda del ser.",
  foundationalText:
    "Desde la más remota antigüedad los sueños han sido considerados una forma de contacto con la divinidad y la mejor manera de conocernos a nosotros mismos. Soñar es abrir una puerta de la mente. Todas las esperanzas, ambiciones, deseos, miedos, fantasmas y nostalgias se pasean allí libremente. Sabemos que tus sueños son únicos: ninguna otra persona comparte exactamente tus antecedentes, tus emociones o tus vivencias cotidianas.",
};

export const dreamTraditions: DreamTradition[] = [
  {
    culture: "Mesopotamia y Sociedades Primitivas",
    era: "3000 – 4000 a. C.",
    conception:
      "Incapaces de trazar una frontera rígida entre la vigilia y la experiencia nocturna, veían el reino onírico no solo como una extensión de la realidad, sino como un plano de manifestación aún más poderoso.",
    practice:
      "Documentaron sus primeras interpretaciones en tabletas de arcilla cuneiformes, considerando el sueño un espacio sagrado de revelación directa.",
  },
  {
    culture: "Antiguo Egipto",
    era: "Dinastías Faraónicas",
    conception:
      "Los sueños eran mensajes cifrados de los dioses. Quienes recibían visiones nítidas e intensas eran considerados seres bendecidos por la luz divina.",
    practice:
      "Los sacerdotes de los templos ejercían como intérpretes oficiales de sueños, registrando las visiones en jeroglíficos y orientando las decisiones de Estado.",
  },
  {
    culture: "Grecia y Roma Clásica",
    era: "Siglos V a. C. – II d. C.",
    conception:
      "El sueño poseía jerarquía de oráculo y augurio militar o político. Además, constituía la llave diagnóstica fundamental para la sanación de enfermedades.",
    practice:
      "Los líderes militares marchaban a la batalla acompañados por intérpretes de sueños, consultando cada noche los presagios antes de iniciar el combate.",
  },
  {
    culture: "Tradición Bíblica",
    era: "Periodo Patriarcal y Profético",
    conception:
      "En las Escrituras existen cerca de setecientas menciones oníricas. El sueño es uno de los canales predilectos escogidos por Dios para transmitir su palabra a los mortales.",
    practice:
      "En el Génesis, al caer un sueño profundo y una oscuridad densa sobre Abraham, Dios le comunica el destino de su estirpe hasta la cuarta generación.",
  },
  {
    culture: "Tradición Ancestral China",
    era: "Época Dinástica Clásica",
    conception:
      "El mundo de los sueños es un lugar real que el espíritu y el alma visitan cada noche al abandonar temporalmente la envoltura corporal.",
    practice:
      "Se evitaba despertar abruptamente al durmiente para permitir que el alma regresase en orden y sosiego a su cuerpo sin extraviarse en el viaje.",
  },
  {
    culture: "Folclore de Europa y Transilvania",
    era: "Tradición Popular Europea",
    conception:
      "El alma humana posee propiedades sutiles y aladas, semejantes a las de un pájaro, capaces de alzar el vuelo durante las horas del reposo nocturno.",
    practice:
      "Se cuidaba de mantener cerrada la boca de los niños dormidos para que el espíritu no escapase antes de tiempo, y se evitaba dormir junto al lecho de un difunto reciente.",
  },
  {
    culture: "Pueblos Nativos Americanos",
    era: "Tradición Indígena Continente Americano",
    conception:
      "Los antepasados viven en la dimensión onírica y adoptan formas diversas de la naturaleza, como árboles, animales o plantas sagradas.",
    practice:
      "El sueño es una instancia de comunión directa con los ancestros para recibir orientación moral y descubrir la verdadera misión y vocación vital.",
  },
  {
    culture: "Renacimiento Psicoanalítico",
    era: "Finales del siglo XIX – siglo XX",
    conception:
      "Tras el desinterés del siglo XVIII que redujo el sueño a indigestión o mera ansiedad física, Sigmund Freud y Carl G. Jung restablecieron su valor científico.",
    practice:
      "Reconocieron el sueño como la vía regia hacia el inconsciente y una herramienta terapéutica indispensable para el autoconocimiento y la integración psíquica.",
  },
];

export const dreamTypes: DreamType[] = [
  {
    id: "lucidos",
    title: "Sueños Lúcidos",
    category: "Conciencia Onírica",
    summary:
      "Experiencias conscientes donde el soñante despierta a la lucidez dentro del propio sueño sin interrumpir el reposo, pudiendo interactuar de manera deliberada con el escenario onírico.",
    historicalOrScientificContext:
      "Estudiados tanto en tradiciones orientales de meditación nocturna como en la neurociencia moderna (fase REM), demuestran que la conciencia puede coexistir con el reposo corporal.",
    coreMechanisms: [
      "Reconocimiento activo del estado de sueño mediante pruebas de realidad en vigilia.",
      "Conservación de la calma emocional para evitar el despertar súbito por sobreexcitación.",
      "Estabilización mediante la técnica de rotación corporal (spinning) al desvanecerse la escena.",
      "Aprovechamiento de siestas matutinas de 90 a 120 minutos para alcanzar sueño REM prolongado.",
    ],
    guidanceOrMeaning:
      "En el sueño lúcido las leyes físicas y convencionales quedan suspendidas: los límites solo dependen de la imaginación. Permite superar pesadillas al disolver el miedo imaginario y se convierte en un taller de entrenamiento creativo para artistas, atletas y profesionales.",
  },
  {
    id: "naturales",
    title: "Sueños Naturales",
    category: "Psicología Cotidiana",
    summary:
      "Sueños de satisfacción de deseos, fantasía o entretenimiento ordinario que procesan la información doméstica y cotidiana vivida durante el día.",
    historicalOrScientificContext:
      "Corresponden al procesamiento natural del sistema nervioso que descarga tensiones rutinarias y clasifica impresiones captadas por los sentidos.",
    coreMechanisms: [
      "Filtro de informaciones procedentes de libros, televisión, conversaciones y vivencias del día.",
      "Proyección de anhelos domésticos o aspiraciones sencillas sin carga profética.",
      "Descarga suave de tensiones psicofísicas acumuladas durante la vigilia.",
    ],
    guidanceOrMeaning:
      "No portan mensajes ocultos ni advertencias solemnes; resultan entretenidos e interesantes, reflejando el flujo continuo de nuestras esperanzas y distracciones humanas.",
  },
  {
    id: "telepaticos",
    title: "Sueños Telepáticos",
    category: "Fenómenos Psíquicos",
    summary:
      "Sueños en los que se reciben impresiones, pensamientos o estados emocionales de personas distantes que penetran la conciencia durante el reposo.",
    historicalOrScientificContext:
      "El filósofo griego Demócrito formuló la primera hipótesis al sugerir que los sueños podían suscitarse por «emanaciones» de otros seres y objetos recibidas en reposo. Investigaciones modernas señalan que entre el 60% y el 70% de las vivencias telepáticas se reportan durante el sueño.",
    coreMechanisms: [
      "Sensibilidad onírica aumentada donde la mente subconsciente capta señales ajenas.",
      "Comunión afectiva intensa con familiares, amigos en peligro o seres queridos.",
      "Ausencia de barreras sensoriales que permite la transferencia directa del pensamiento.",
    ],
    guidanceOrMeaning:
      "Constituyen una posible explicación para muchos sueños videnciales o presentimientos repentinos sobre personas queridas que atraviesan dificultades o tránsitos cruciales.",
  },
  {
    id: "pesadillas",
    title: "Pesadillas y Tensión Post-Traumática",
    category: "Alertas del Subconsciente",
    summary:
      "Sueños angustiosos y perturbadores que despiertan al soñante con taquicardia o temor, cuyo propósito real es llamar con urgencia la atención sobre conflictos no resueltos.",
    historicalOrScientificContext:
      "Clasificadas clínicamente como respuestas a traumas reales (PSN o desorden de estrés post-traumático) o emergencias de situaciones evitadas durante la vigilia.",
    coreMechanisms: [
      "Impacto vívido y duradero que fija imágenes en la memoria para forzar la reflexión.",
      "Máscara protectora del inconsciente que utiliza la emoción intensa para encubrir la herida raíz.",
      "Cinco detonantes clásicos: infancia/familia, crisis sociales, relaciones íntimas, tensión acumulada y presión laboral.",
    ],
    guidanceOrMeaning:
      "La pesadilla es una señal de socorro del subconsciente que exclama: «¡Presta atención!». Distanciarse de la emoción primaria (miedo, congoja o ira) y analizar los símbolos fríamente permite desarticular el conflicto y sanar la inquietud interna.",
  },
  {
    id: "recurrentes",
    title: "Sueños Recurrentes",
    category: "Procesos de Transformación",
    summary:
      "Experiencias que se repiten con escasa variación temática a lo largo de semanas, meses o años, indicando un nudo psicológico o una lección vital que demanda resolución.",
    historicalOrScientificContext:
      "En la psicología analítica, los sueños recurrentes actúan como insistencias pedagógicas del psiquismo para promover la individuación y la madurez personal.",
    coreMechanisms: [
      "Reiteración periódica ante la evasión o falta de comprensión consciente del mensaje.",
      "Existencia de variantes luminosas donde la persona crea un mundo propio de autoexploración.",
      "Cese espontáneo del patrón una vez que la raíz del conflicto es reconocida y transformada.",
    ],
    guidanceOrMeaning:
      "Exigen cuatro actitudes indispensables: disposición al cambio interior, valentía para mirar sin autoengaño, paciencia frente a la persistencia del ciclo y autoaceptación profunda de la propia sombra.",
  },
  {
    id: "profeticos",
    title: "Sueños Proféticos y Videnciales",
    category: "Precognición y Presagio",
    summary:
      "Vivencias anómalas que adelantan hechos futuros con asombrosa exactitud, estructurados mediante símbolos universales que trascienden el azar en más del 97% de los casos analizados.",
    historicalOrScientificContext:
      "Reconocidos por la tradición universal y la parapsicología. Ejemplificado históricamente por Abraham Lincoln, quien soñó detalladamente con su velatorio en la Casa Blanca días antes de ser asesinado en el teatro.",
    coreMechanisms: [
      "Capacidad subconsciente de articular datos y microseñales desapercibidas en la vigilia.",
      "Intervención de facultades precognitivas en estados de receptividad psíquica profunda.",
      "Traducción inmediata de la información videncial en alegorías escénicas directas o simbólicas.",
    ],
    guidanceOrMeaning:
      "No son sueños habituales sino anuncios de peso solemne. Trasladan al durmiente advertencias y certezas sobre personas distantes o acontecimientos trascendentales, obligando a actuar con máxima prudencia.",
    quoteOrExample: {
      source: "Registro histórico de Abraham Lincoln",
      quote:
        "Soñé que caminaba por salas silenciosas envueltas en llanto fúnebre hasta llegar a un catafalco donde reposaba un cadáver amortajado. Al preguntar quién había muerto, un soldado me respondió: 'El Presidente; ha sido asesinado'.",
      details:
        "Poco después de compartir este estremecedor sueño con su círculo íntimo, acudió al teatro Ford donde se consumó el magnicidio.",
    },
  },
  {
    id: "salud",
    title: "Sueños de Salud e Incubatio",
    category: "Medicina Sagrada y Somática",
    summary:
      "Mensajes del organismo captados por la mente profunda que advierten sobre desequilibrios físicos o indican prescripciones sanadoras antes de que los síntomas afloren a la conciencia.",
    historicalOrScientificContext:
      "En Grecia y Roma, los enfermos acudían a los templos de Asclepio (dios de la medicina desde el siglo V a. C.) para practicar la incubatio o «ensueño sanador», pasando la noche en el santuario para recibir la prescripción del dios.",
    coreMechanisms: [
      "Sensibilidad interoceptiva donde el subconsciente detecta fallas orgánicas incipientes.",
      "Instrucciones directas o alegóricas para buscar asistencia médica o dental.",
      "Fenómenos catárticos y curativos vivenciados simultáneamente en el plano onírico y físico.",
    ],
    guidanceOrMeaning:
      "El cuerpo posee un lenguaje instintivo que aprovecha el sosiego nocturno para comunicar sus necesidades terapéuticas. Escuchar estos sueños previene complicaciones mayores y reconecta la salud física con la armonía espiritual.",
    quoteOrExample: {
      source: "Inscripción votiva en el Templo de Asclepio (Epidauro)",
      quote:
        "Erasippe de Kaphy durmió en el templo y soñó que el dios le aplicaba un remedio en su estómago, la besaba y le ofrecía una copa con una sustancia que la hizo vomitar. Al despertar en la mañana comprobó que sus ropas estaban sucias de lo expulsado y recuperó íntegramente la salud.",
    },
  },
];

export const lucidPracticeStages: LucidPracticeStage[] = [
  {
    stageNumber: 1,
    title: "Memoria y Registro Inmediato",
    techniqueName: "Libreta Nocturna de Medianoche",
    instructions:
      "Conserva una libreta y un lápiz siempre al alcance junto a la almohada. En cuanto abras los ojos —aunque sea a mitad de la noche— anota de inmediato cualquier detalle, emoción, imagen o palabra recordada antes de mover el cuerpo.",
    rationale:
      "Todos soñamos varias veces por noche, pero la memoria onírica se disipa en los primeros sesenta segundos de vigilia. El registro cotidiano entrena al cerebro para reconocer y retener la actividad subconsciente.",
    practicalTip:
      "Si al principio solo recuerdas una sensación vaga o un fragmento difuso, anótalo igualmente. En pocas semanas pasarás de la amnesia a recordar múltiples sueños por noche.",
  },
  {
    stageNumber: 2,
    title: "Comprobación de la Realidad",
    techniqueName: "Reality Check Sistemático",
    instructions:
      "Hazte la pregunta deliberada varias veces al día: '¿Estoy soñando o estoy despierto?'. Pon a prueba la estabilidad de tu entorno leyendo un texto breve, apartando la mirada unos segundos y volviendo a leerlo exactamente.",
    rationale:
      "El mundo físico es estable; el mundo onírico es eminentemente mutable. En un sueño las letras cambian de lugar, los relojes muestran números absurdos y las luces rara vez obedecen al interruptor.",
    practicalTip:
      "Si el texto cambia o fluctúa al releerlo, no cabe duda: estás dentro de un sueño. Conserva la calma y toma el timón de tu experiencia.",
  },
  {
    stageNumber: 3,
    title: "Ventana de Siesta REM",
    techniqueName: "Ciclo Matutino de 90 a 120 Minutos",
    instructions:
      "Despiértate una hora o dos antes de tu hora habitual, permanece despierto unos veinte minutos y vuelve a acostarte para tomar una siesta intencionada de noventa minutos a dos horas fijando el propósito de cobrar lucidez.",
    rationale:
      "En las siestas matutinas el cerebro entra en fase REM casi de inmediato (entre 30 y 60 minutos después de dormirse), con una densidad de sueños vívidos notablemente superior a la del reposo nocturno profundo.",
    practicalTip:
      "Antes de cerrar los ojos repite mentalmente con firmeza: 'La próxima escena que vea será un sueño, y sabré reconocer que estoy soñando'.",
  },
  {
    stageNumber: 4,
    title: "Estabilización y Rescate Onírico",
    techniqueName: "Técnica del Giro Corporal (Spinning)",
    instructions:
      "Si el sueño lúcido comienza a desvanecerse, a perder nitidez visual o sientes que estás a punto de despertar, gira tu cuerpo onírico sobre su propio eje —como un niño dando vueltas para marearse— antes de conectar con el cuerpo físico.",
    rationale:
      "La sobreexcitación emocional suele despertar al soñante novato. Girar estimula el sistema vestibular en el plano imaginario, reenfocando la atención en el entorno onírico y recreando de inmediato un nuevo escenario sin regresar a la vigilia.",
    practicalTip:
      "Recuerda la consigna: 'La próxima escena continuará siendo un sueño'. Al cesar el giro, haz una comprobación de realidad para verificar la continuidad del estado lúcido.",
  },
  {
    stageNumber: 5,
    title: "Transformación de la Pesadilla",
    techniqueName: "Reencuadre Despierto de la Sombra",
    instructions:
      "Ante figuras amenazantes o pesadillas recurrentes, recurre a la certeza lúcida de que ninguna imagen onírica tiene poder material para herirte. En lugar de huir, gira, enfrenta al perseguidor e interrógalo: '¿Quién eres y qué mensaje traes para mí?'.",
    rationale:
      "Los monstruos y villanos de las pesadillas son personificaciones de tensiones internas, culpas o temores no reconocidos. Al confrontarlos con serenidad, suelen transformarse en aliados o desvanecerse pacíficamente.",
    practicalTip:
      "Al despertar, anota la solución encontrada y reflexiona con qué situación de tu vida cotidiana guardaba correspondencia ese antagonista simbólico.",
  },
];

export const dreamSymbols: DreamSymbol[] = [
  {
    id: "autoridad",
    term: "Autoridad",
    category: "Arquetipos y Figuras Humanas",
    summary:
      "Soñar con la autoridad, dígase policías, abogados, etc. significa que probablemente estemos realizando actos ilícitos y tememos a ser reprendidos por las autoridades.",
    detailedInterpretation:
      "Soñar con la autoridad, dígase policías, abogados, etc. significa que probablemente estemos realizando actos ilícitos y tememos a ser reprendidos por las autoridades. Sería conveniente identificar qué tipo de autoridad hemos soñado, para descifrar el significado del sueño que hemos tenido y de qué manera podría repercutir en nuestra vida. Cuando soñamos que somos reprendidos por la autoridad, significa que probablemente en la vida real estemos actuando de manera irresponsable ante la vida. Para un adolescente este sueño indica temor al castigo proporcionado por sus padres. Si soñamos que somos la autoridad, indica que somos personas que no nos gusta el desorden, si cuando llegamos a nuestra casa nos malhumoramos porque todo está desordenado, generalmente alguien piensa que ha llegado la autoridad. También se puede interpretar en este sueño nuestra capacidad para ser responsables y serios con las funciones que tengamos que cumplir.",
    keyAdvice:
      "Para un adolescente este sueño indica temor al castigo proporcionado por sus padres.",
  },
  {
    id: "ladron",
    term: "Ladrón",
    category: "Arquetipos y Figuras Humanas",
    summary:
      "Soñando con un ladrón que roba en un espacio conocido (hogar) demuestra temor a perder algo valioso o extraviar algo que debió ser cuidado y protegido. Si el sueño es en un lugar desconocido u observa la huida de un ladrón el mensaje se relaciona con la pérdida próxima de un mensaje importante o de un objeto comprado.",
    detailedInterpretation:
      "Soñando con un ladrón que roba en un espacio conocido (hogar) demuestra temor a perder algo valioso o extraviar algo que debió ser cuidado y protegido. Si el sueño es en un lugar desconocido u observa la huida de un ladrón el mensaje se relaciona con la pérdida próxima de un mensaje importante o de un objeto comprado. Realmente, una huella quedó en su conciencia al pasar el día y después, en el estado de sueño, usted ha vuelto a reflejar la situación o cosa que debió proteger o guardar en su empleo o casa. Pudo haber sido un diseño elaborado por usted o un instrumento valioso que dejo fuera de su garaje. Estos sueños pueden ser presentimientos o visionarios. En el primer caso, alerta de posible perdida por despreocupación; en el segundo, brinda un recordatorio de la importante de lo perdido ahora. Algo más, soñar que usted es un ladrón podría indicar temor a dañar los deseos o derechos de otras personas con hechos desarrollados por usted recientemente.",
    keyAdvice:
      "Si el sueño es en un lugar desconocido u observa la huida de un ladrón el mensaje se relaciona con la pérdida próxima de un mensaje importante o de un objeto comprado.",
  },
  {
    id: "tren",
    term: "Tren",
    category: "Espacios, Vías y Movimiento",
    summary:
      "Los sueños en los que viajamos en un tren de pasajeros significan que necesitamos dar un giro a nuestra vida para satisfacer viejos anhelos que creíamos frustrados. Si el tren es de carga, indica que nuestras metas son difíciles de cumplir y que tal vez tengamos que reestructurarlas o renunciar a ellas.",
    detailedInterpretation:
      "Los sueños en los que viajamos en un tren de pasajeros significan que necesitamos dar un giro a nuestra vida para satisfacer viejos anhelos que creíamos frustrados. Si el tren es de carga, indica que nuestras metas son difíciles de cumplir y que tal vez tengamos que reestructurarlas o renunciar a ellas. Soñar que miramos el paisaje a través de la ventanilla de un tren, significa que están dadas las condiciones para cumplir nuestros objetivos, aunque todo depende de los riesgos que seamos capaces de tomar. Cuando durante el sueño, nos molesta el bullicio de los pasajeros del tren, muestra indisposición a socializar. Soñar que el tren viaja rápidamente a través de las líneas del carril, nos dice que el cambio se efectuará en breve y de manera segura. Sin embargo, si el tren vuela, significa que los cambios que experimenten son efímeros e insustanciales.",
    keyAdvice:
      "Si el tren es de carga, indica que nuestras metas son difíciles de cumplir y que tal vez tengamos que reestructurarlas o renunciar a ellas.",
  },
  {
    id: "cueva",
    term: "Cueva",
    category: "Espacios, Vías y Movimiento",
    summary:
      "Cueva significa cosas que escondemos. Soñar con cueva simboliza que queremos protegernos de algo.",
    detailedInterpretation:
      "Cueva significa cosas que escondemos. Soñar con cueva simboliza que queremos protegernos de algo. Si en el sueño la persona se ve viviendo en una cueva indica el deseo de volver a su hogar de la infancia. Si en el sueño la persona se ve en la cueva de Ali Babá representa el deseo de tener cosas que le pertenecen a otros. Si en el sueño la persona ve una cueva que se derrumba sugiere posible derrumbe de su casa. Si en el sueño la persona se ve en un baile en una cueva expresa el deseo de vivir aventuras secretas de amor. Soñar con una cueva significa necesidad de protección por algún asunto delicado y no publico en este momento. Una cueva en un sueño refleja la separación de su familia por una beca de estudios en un país lejano. Soñando con una cueva se presiente la llegada feliz de un nuevo bebé a la familia. Si sueña con una cueva grande e iluminada representa fantasía y enmascaramiento de proyectos bien pensados y no realizados aun.",
    keyAdvice:
      "Si en el sueño la persona se ve viviendo en una cueva indica el deseo de volver a su hogar de la infancia.",
  },
  {
    id: "persecucion",
    term: "Persecución",
    category: "Crisis, Juicio y Trascendencia",
    summary:
      "Ser perseguido es un sentimiento que aterra al ser humano, tanto en el plano material como en el espiritual. Soñar que estamos siendo perseguidos es certificar que escondemos algo de los demás o simplemente que poseemos lo que necesitan.",
    detailedInterpretation:
      "Ser perseguido es un sentimiento que aterra al ser humano, tanto en el plano material como en el espiritual. Soñar que estamos siendo perseguidos es certificar que escondemos algo de los demás o simplemente que poseemos lo que necesitan. Cuando soñamos que somos perseguidos sentimos la sensación de desesperación, miedo y en algunas ocasiones temor a la muerte o a lo desconocido. Si estamos siendo perseguidos en el sueño, esa situación de desespero, nos hace caer una y otra vez, resbalar e incluso arrastrarnos, tratando de no ser atrapados, escondiéndonos de todo y de todos. Cuando estamos soñando que somos perseguidos demostramos habilidades que en la mayoría de los casos no tenemos, pero si ansiamos. Haber soñado con ser perseguido denota todo lo que somos capaces de hacer por no permitir la violación de nuestra intimidad.",
    keyAdvice:
      "Haber soñado con ser perseguido denota todo lo que somos capaces de hacer por no permitir la violación de nuestra intimidad.",
  },
  {
    id: "taza",
    term: "Taza",
    category: "Símbolos Naturales y Cotidianos",
    summary:
      "Soñar con una taza va a significar el estado de nuestras relaciones afectivas. La ruptura de una taza en el Egipto antiguo cerraba los compromisos nupciales.",
    detailedInterpretation:
      "Soñar con una taza va a significar el estado de nuestras relaciones afectivas. La ruptura de una taza en el Egipto antiguo cerraba los compromisos nupciales. Si una mujer sueña con romper una taza simboliza su deseo de ver realizada una unión que aún no se consuma. Si un hombre sueña con una taza significa que el placer sexual no le está siendo dado por aquella persona de la que realmente lo espera. Las tazas nos refieren el afecto del hogar y en especial de la pareja que esperamos recibir. Si has soñado con una taza debes replantearte las maneras en que ves las relaciones de pareja, de forma que en lugar de proveerte tristezas te auguren felicidad. Soñar con una taza significa el rejuvenecimiento y restauración de su vida en lo adelante. Soñando con una taza de té bien caliente usted puede imaginar la importancia de la sabiduría y el conocimiento más grande. Una taza de café medio vacía le hará recordar asuntos del pasado que le han causado tristeza a su corazón. Si usted sueña con una taza blanca y muy limpia simboliza que usted piensa en su útero y la concepción un nuevo bebe que dará mucha alegría a su pareja.",
    keyAdvice:
      "Si usted sueña con una taza blanca y muy limpia simboliza que usted piensa en su útero y la concepción un nuevo bebe que dará mucha alegría a su pareja.",
  },
  {
    id: "muerte",
    term: "Muerte",
    category: "Crisis, Juicio y Trascendencia",
    summary:
      "Soñar con la muerte significa esperanza y vida así como una salud magnífica acompañado de una manera de vivir saludable y placentera. La muerte simboliza una comunicación con otro mundo, un nuevo lugar para vivir o la continuación de la experiencia en la tierra.",
    detailedInterpretation:
      "Soñar con la muerte significa esperanza y vida así como una salud magnífica acompañado de una manera de vivir saludable y placentera. La muerte simboliza una comunicación con otro mundo, un nuevo lugar para vivir o la continuación de la experiencia en la tierra. Soñando con la muerte y hablando con ella en un parque se aconseja ser muy observador de todo asunto en su trabajo para prosperar más. Si sueña con la muerte y habla con ella en un hospital conducirá su vida por el camino de la salud y la prosperidad. Por lo tanto, este sueño le dará mucha satisfacción y deseos de vivir junto a ideas y proyectos interesantes que ocuparán su tiempo. A diferencia del criterio de muchas personas, esta premonición ni limita ni termina con la vida, todo lo contrario. Muerte significa situaciones de pérdidas. Soñar con muerte simboliza cosas que terminan y otras que empiezan. Si en el sueño la persona se ve muriendo indica que debe terminar algún tipo de relación. Si en el sueño la persona ve la muerte de alguien querido representa enfermedades en la familia. Si en el sueño la persona ve la muerte de un animal sugiere que no es momento de viajes de placer. Si en el sueño la persona ve que está en un funeral expresa problemas para conservar su dinero.",
    keyAdvice:
      "Soñando con la muerte y hablando con ella en un parque se aconseja ser muy observador de todo asunto en su trabajo para prosperar más.",
  },
  {
    id: "gigante",
    term: "Gigante",
    category: "Arquetipos y Figuras Humanas",
    summary:
      "El gigante es el mito simbólico del hombre omnipotente que está por encima de cualquier adversidad u obstáculo. Soñar que nos vemos como un gigante tiene el significado de intentar superar nuestro sentimiento de inferioridad.",
    detailedInterpretation:
      "El gigante es el mito simbólico del hombre omnipotente que está por encima de cualquier adversidad u obstáculo. Soñar que nos vemos como un gigante tiene el significado de intentar superar nuestro sentimiento de inferioridad. Soñar con gigantes que nos atacan tiene el significado de sentirnos superados por tareas que vivimos como insuperables para nuestras capacidades. Si en el sueño vemos que logramos vencer a un gigante es que nuestras adversidades están al desaparecer y contamos con las fuerzas suficientes. Si quien sueña con un gigante es una mujer ello significa su deseo inconsciente de encontrar un hombre que le permita una experiencia sexual intensa, que sea además varonil y dominante. Si en el sueño vamos acompañados por varios gigantes es que estamos recibiendo una fuerza sobrenatural que hará seguros todas nuestras metas y proyectos.",
    keyAdvice:
      "Si en el sueño vamos acompañados por varios gigantes es que estamos recibiendo una fuerza sobrenatural que hará seguros todas nuestras metas y proyectos.",
  },
  {
    id: "enano",
    term: "Enano",
    category: "Arquetipos y Figuras Humanas",
    summary:
      "Ver un enano en su sueño indica que usted se amarrará o se atará a algo que desea obtener mucho pero que puede ocasionar daño a su espiritualidad o naturaleza. Soñar con un enano también podría sugerir que una parte de usted no madurará o evolucionará adecuadamente por su forma de comportarse.",
    detailedInterpretation:
      "Ver un enano en su sueño indica que usted se amarrará o se atará a algo que desea obtener mucho pero que puede ocasionar daño a su espiritualidad o naturaleza. Soñar con un enano también podría sugerir que una parte de usted no madurará o evolucionará adecuadamente por su forma de comportarse. Si usted sueña con un enano que duerme en su cama usted podrá experimentar un sentimiento de inferioridad en su trabajo por la baja calidad de su trabajo. Soñando con un enano que le saluda desde fuera de su casa constantemente se augura un encuentro extraño pero mágico con alguien muy sabio. Alguna vez, este tipo de sueño incluye un entorno festivo o un espectáculo de circo lo que señala la ocurrencia de algo muy afortunado y feliz para usted próximamente. Usted debe olvidar las apariencias y comprobar la calidad de las cosas en su interior.",
    keyAdvice:
      "Ver un enano en su sueño indica que usted se amarrará o se atará a algo que desea obtener mucho pero que puede ocasionar daño a su espiritualidad o naturaleza.",
  },
  {
    id: "examenes",
    term: "Exámenes",
    category: "Crisis, Juicio y Trascendencia",
    summary:
      "Soñando con exámenes se augura que no se siente capaz para asumir la dirección de su empresa hoy. Soñar con exámenes de matemáticas sugiere que reconoce sus deficiencias en el trabajo que desempeña.",
    detailedInterpretation:
      "Soñando con exámenes se augura que no se siente capaz para asumir la dirección de su empresa hoy. Soñar con exámenes de matemáticas sugiere que reconoce sus deficiencias en el trabajo que desempeña. Si sueña con exámenes de salud simboliza que se encuentra en plena forma física por largo tiempo. Exámenes de sangre en un sueño expresan la necesidad de investigar a sus hijos por posible adicción a las drogas. Comúnmente, el sueño con exámenes de conciencia significa igualmente, reflexionar sobre todos los pasos dados en su vida y sus resultados. Tal vez, su influencia en los demás sea muy positiva aunque no le parezca. Soñar que vamos a hacer un examen significa que tendremos que hacer frente a un problema o a una situación muy difícil, y que anhelamos profundamente salir airosos. Si soñamos repetidamente que estamos haciendo un examen indica que desconfiamos de nuestras propias capacidades y tememos no poder estar a la altura de los que nos rodean. Si en el sueño nos vemos preparando un examen expresa que iniciaremos nuevos proyectos en una temática diferente a la habitual. Si en los sueños vemos que aprobamos un examen sugiere que alcanzaremos las metas que nos hemos propuesto y finalmente llegará el bienestar a nuestra vida. Si soñamos que estamos copiando de otra persona al hacer un examen insinúa que, si no respetamos lo que está establecido o legislado, nos veremos involucrados en una situación vergonzosa o ilícita. Si en el sueño vemos que fracasamos en un examen significa que debemos reevaluar nuestros proyectos y negocios porque ya no contamos con las condiciones necesarias para llevarlos a buen término.",
    keyAdvice:
      "Soñar con exámenes de matemáticas sugiere que reconoce sus deficiencias en el trabajo que desempeña.",
  },
  {
    id: "caida",
    term: "Caída",
    category: "Estados Corporales y Sensaciones",
    summary:
      "Soñar que usted está saltando en caída libre (deportiva) augura solución positiva a una situación incómoda o litigio prolongado. Una caída libre simboliza incremento de responsabilidades, recibo de una ayuda valiosa para un deseo particular o anuncio de una situación difícil muy pronto.",
    detailedInterpretation:
      "Soñar que usted está saltando en caída libre (deportiva) augura solución positiva a una situación incómoda o litigio prolongado. Una caída libre simboliza incremento de responsabilidades, recibo de una ayuda valiosa para un deseo particular o anuncio de una situación difícil muy pronto. Generalmente, el sueño con una caída libre es desagradable y se relaciona con problemas digestivos o con una molesta discusión. Sin embargo, si usted sueña practicando este deporte, usted podrá disfrutar de una ayuda financiero inesperada para el arreglo de su patio trasero. Soñando con la caída libre usted podría recibir un ascenso en los próximos días. Por otra parte, la caída libre le alerta proteger su salud y humor ante conflictos largos en el tiempo; por ello, evite el mal carácter y comportamientos de elevada moralidad. Quizás usted debe disminuir sus patrones de juicio moral ligeramente y fijar ambiciones más prácticas y sensatas en este momento.",
    keyAdvice:
      "Por otra parte, la caída libre le alerta proteger su salud y humor ante conflictos largos en el tiempo; por ello, evite el mal carácter y comportamientos de elevada moralidad.",
  },
  {
    id: "volar",
    term: "Volar",
    category: "Estados Corporales y Sensaciones",
    summary:
      "Volar en un sueño es un evento bastante común, pero muy fuerte e impresionante por los espacios o vacíos que hace sentir. Soñar con volar simboliza rapidez, aventura y cambio total y absoluto de forma espontánea.",
    detailedInterpretation:
      "Volar en un sueño es un evento bastante común, pero muy fuerte e impresionante por los espacios o vacíos que hace sentir. Soñar con volar simboliza rapidez, aventura y cambio total y absoluto de forma espontánea. Si usted sueña con volar sobre los edificios de una gran ciudad usted deberá tomar con calma y sabiduría unos cambios en su casa esta semana. Soñando con volar sobre los árboles de un gran bosque se aconseja lucidez al decidir un acontecimiento complejo en su trabajo. Sin embargo, este sueño representa una decisión, una medida o una elección sentimental muy fuerte que le hará sentir libre y sin responsabilidades. Ello no eliminará la nostalgia o la tristeza por algo o alguien que fue una compañía permanente de usted.",
    keyAdvice:
      "Si usted sueña con volar sobre los edificios de una gran ciudad usted deberá tomar con calma y sabiduría unos cambios en su casa esta semana.",
  },
  {
    id: "fantasmas",
    term: "Fantasmas",
    category: "Arquetipos y Figuras Humanas",
    summary:
      "Soñar con fantasmas augura que los seres que no están ya en nuestro mundo, no están en paz con nosotros. Si soñamos con el fantasma de un niño corriendo, significa que somos personas vacías de sentimientos.",
    detailedInterpretation:
      "Soñar con fantasmas augura que los seres que no están ya en nuestro mundo, no están en paz con nosotros. Si soñamos con el fantasma de un niño corriendo, significa que somos personas vacías de sentimientos. También puede significar que en ese lugar donde lo vimos puede haber fallecido un niño. Cuando sueñas con el fantasma de un familiar probablemente esté tratando de darnos un mensaje que tiene relación con nuestra vida real, por lo que intenta hacérnoslo saber a través de los sueños. De igual modo puede significar que extrañamos mucho a esa persona y que no aceptamos que falleció. Pero si sueñas con el fantasma de un amigo muy querido y esa persona vive, significa que esa persona se verá envuelta en una situación donde probablemente pierda su vida.",
    keyAdvice:
      "Pero si sueñas con el fantasma de un amigo muy querido y esa persona vive, significa que esa persona se verá envuelta en una situación donde probablemente pierda su vida.",
  },
  {
    id: "paisaje-tenebroso",
    term: "Paisaje Tenebroso",
    category: "Espacios, Vías y Movimiento",
    summary:
      "Soñar con que estamos caminando por un callejón tenebroso significa que en la vida real nos estamos desviando del buen camino y aconseja ser muy cuidadosos en nuestro actuar o sufriremos malas consecuencias. Si soñamos que estamos en un rincón tenebroso de una casa abandonada indica que se nos avecinan momentos muy difíciles en todos los campos, ya que tendremos que enfrentar problemas familiares, económicos y profesionales.",
    detailedInterpretation:
      "Soñar con que estamos caminando por un callejón tenebroso significa que en la vida real nos estamos desviando del buen camino y aconseja ser muy cuidadosos en nuestro actuar o sufriremos malas consecuencias. Si soñamos que estamos en un rincón tenebroso de una casa abandonada indica que se nos avecinan momentos muy difíciles en todos los campos, ya que tendremos que enfrentar problemas familiares, económicos y profesionales. Si en el sueño vemos un castillo tenebroso sugiere que no podemos evolucionar como personas porque estamos muy confundidos y no encontramos el camino correcto. Si en los sueños nos vemos en un lugar tenebroso y escuchamos crujidos o lamentos augura que en poco tiempo vamos a tener una pelea muy desagradable con un ser querido que nos traicionará. Si soñamos que nos han encerrado en una habitación tenebrosa insinúa que estamos esperando que suceda algo o que queremos observar desde lejos el desarrollo de una situación en la que no queremos involucrarnos. Si en el sueño nos vemos perdidos en un bosque tenebroso significa que los repetidos fracasos nos han derrumbado y pensamos que ya no tenemos las fuerzas necesarias para seguir adelante; pero al mismo tiempo aconseja que no desistamos.",
    keyAdvice:
      "Soñar con que estamos caminando por un callejón tenebroso significa que en la vida real nos estamos desviando del buen camino y aconseja ser muy cuidadosos en nuestro actuar o sufriremos malas consecuencias.",
  },
  {
    id: "caballo",
    term: "Caballo",
    category: "Símbolos Naturales y Cotidianos",
    summary:
      "Un caballo en sueños, puede llegar a tener múltiples significados en dependencia de las características del soñante y del contenido de las situaciones evocadas. Soñar que cabalgamos a toda prisa, significa que nos solemos sentir presos de las situaciones que nos impone nuestro estilo de vida, además de que estamos insatisfechos con los logros alcanzados.",
    detailedInterpretation:
      "Un caballo en sueños, puede llegar a tener múltiples significados en dependencia de las características del soñante y del contenido de las situaciones evocadas. Soñar que cabalgamos a toda prisa, significa que nos solemos sentir presos de las situaciones que nos impone nuestro estilo de vida, además de que estamos insatisfechos con los logros alcanzados. Por su parte, trotar seguros suele significar que tenemos el control de nuestra situación actual, incluyendo los conflictos. Soñar con un caballo cerrero indica que hay obstáculos que se interponen en nuestro camino que no sabemos enfrentar, estos pueden ser tan complejo como la decisión de abandonar a la familia o tan simple como elegir el vestuario de una fiesta. El hombre que sueña un caballo significa que atraviesa dificultades en el ámbito sexual, que pueden estar vinculadas al complejo de tener un órgano sexual pequeño o a algún problema relacionado con la difusión sexual. Si una mujer sueña con un caballo, manifiesta insatisfacciones en su vida de pareja sexual y una fuerte necesidad de expresar su sexualidad.",
    keyAdvice:
      "Soñar con un caballo cerrero indica que hay obstáculos que se interponen en nuestro camino que no sabemos enfrentar, estos pueden ser tan complejo como la decisión de abandonar a la familia o tan simple como elegir el vestuario de una fiesta.",
  },
  {
    id: "casa",
    term: "Casa",
    category: "Espacios, Vías y Movimiento",
    summary:
      "Una casa es proveedora de estabilidad, seguridad y protección, razón por la cual el subconsciente le otorga iguales propiedades durante el sueño. Soñar con una casa antigua y desmejorada significa que no nos sentimos bien con nuestro estado de salud o con los logros obtenidos en nuestra vida.",
    detailedInterpretation:
      "Una casa es proveedora de estabilidad, seguridad y protección, razón por la cual el subconsciente le otorga iguales propiedades durante el sueño. Soñar con una casa antigua y desmejorada significa que no nos sentimos bien con nuestro estado de salud o con los logros obtenidos en nuestra vida. Si soñamos que cambiamos de casa o permutamos, refleja la necesidad de dar un curso diferente a nuestro futuro, realizar nuevos proyectos o cumplir con planes que hemos postergado por mucho tiempo. Cuando soñamos con una casa llena de niños y de juguetes, indica que hemos alcanzado cierta madurez y que estamos listos para ampliar la familia con una criatura. Si la casa soñada es grande y lujosa, manifiesta el éxito económico alcanzado. Si en la casa durante el sueño vive nadie, significa que somos personas dependientes, necesitadas de apoyo y afecto.",
    keyAdvice:
      "Cuando soñamos con una casa llena de niños y de juguetes, indica que hemos alcanzado cierta madurez y que estamos listos para ampliar la familia con una criatura.",
  },
  {
    id: "lago",
    term: "Lago",
    category: "Espacios, Vías y Movimiento",
    summary:
      "Soñar con un lago simboliza su condición emotiva actual, el sentido del humor de alguien muy estresado que necesita de la tranquilidad y la paz. Un lago simboliza la transparencia, la tranquilidad y la armonía interior en una total serenidad.",
    detailedInterpretation:
      "Soñar con un lago simboliza su condición emotiva actual, el sentido del humor de alguien muy estresado que necesita de la tranquilidad y la paz. Un lago simboliza la transparencia, la tranquilidad y la armonía interior en una total serenidad. Si usted sueña con un lago de aguas tranquilas y transparentes usted obtendrá un momento de gran serenidad en un bosque o en una montaña lejana. Soñando con un lago de aguas intranquilas y turbias se augura momentos de fuerte tensión personal por asuntos de poca importancia. A propósito, el sueño con un lago avisa o aconseja tomar o disfrutar de su tiempo libre como algo vital para su salud o para su vida. Todas las tensiones tienen su límite y el cuerpo físico necesita de recuperación y paz para iniciar nuevas jornadas.",
    keyAdvice:
      "A propósito, el sueño con un lago avisa o aconseja tomar o disfrutar de su tiempo libre como algo vital para su salud o para su vida.",
  },
  {
    id: "levitacion",
    term: "Levitación",
    category: "Estados Corporales y Sensaciones",
    summary:
      "Soñar que usted está en levitación significa que usted está teniendo problemas y que necesita liberarse de sus ideas, estrés y tensiones cotidianas poco convencionales. La levitacion simboliza una calma o una relajación necesaria e impostergable.",
    detailedInterpretation:
      "Soñar que usted está en levitación significa que usted está teniendo problemas y que necesita liberarse de sus ideas, estrés y tensiones cotidianas poco convencionales. La levitacion simboliza una calma o una relajación necesaria e impostergable. Si usted sueña con la levitación realizada en un templo budista usted sentirá el recordatorio de un amigo para que chequee el suministro de electricidad de su casa. Soñando con la levitación realizada en un templo hinduista se aconseja alejarse usted de opciones e ideas no muy correctas de algunos de amigos que desean realizar algunos negocios poco legales. Exactamente, usted debe mantenerse reflexivo y correcto por el bien suyo y de su familia ante ideas o criterios que no tienen ninguna protección y racionalidad. Sea calmado y claro en sus decisiones evitando ser descuidado junto a otros alrededor de usted.",
    keyAdvice:
      "Soñando con la levitación realizada en un templo hinduista se aconseja alejarse usted de opciones e ideas no muy correctas de algunos de amigos que desean realizar algunos negocios poco legales.",
  },
  {
    id: "monstruo",
    term: "Monstruo",
    category: "Arquetipos y Figuras Humanas",
    summary:
      "Monstruo significa problemas en nuestra personalidad. Soñar con monstruo indica el deseo de sacar nuestros impulsos.",
    detailedInterpretation:
      "Monstruo significa problemas en nuestra personalidad. Soñar con monstruo indica el deseo de sacar nuestros impulsos. Si en el sueño la persona se ve como un monstruo en plena calle indica el deseo de librarse de sus familias. Si en el sueño la persona se ve cazando un monstruo representa éxito en litigios. Si en el sueño la persona se ve luchar con un monstruo de varias cabezas sugiere la llegada de un jefe autoritario. Si en el sueño la persona se ve como un hombre lobo expresa problemas para controlar sus impulsos. Soñando con monstruos se representa un aspecto de su personalidad que juzga sus actos desagradables, incorrectos o injustos hacia otras personas. También, puede significar cómo su persona, un amigo o un familiar se preocupa por todo individuo que se siente mal, que está enferma o esté muy necesitado. Soñar con monstruos dentro de su casa expresa el abuso de autoridad en sus decisiones con la familia y que provocan la ruina de la felicidad de sus integrantes. Si sueña con monstruos dentro de su oficina o taller de trabajo se augura su deseo de colaborar con la proyección de una persona o una situación que será muy útil para muchos.",
    keyAdvice: "Soñar con monstruo indica el deseo de sacar nuestros impulsos.",
  },
  {
    id: "asesinato",
    term: "Asesinato",
    category: "Crisis, Juicio y Trascendencia",
    summary:
      "Soñar con un asesinato significa infortunio. Si el asesinato es cometido por el soñante indicara represión de impulsos agresivos.",
    detailedInterpretation:
      "Soñar con un asesinato significa infortunio. Si el asesinato es cometido por el soñante indicara represión de impulsos agresivos. Cuando ves cometer un asesinato presagia mala suerte en los juegos de azar. Si el asesinato es cometido en tu casa indicará cambios, renovarás la estructura de la casa, y se respirarán aires nuevos. Cuando en el sueño anuncian el asesinato de alguien importante va a significar que un secreto está por ser develado. Si has soñado con un asesinato, debes ser precavido en el comportamiento con tus enemigos. Soñar con un asesinato significa oscuridad de un asunto, agresión cercana o manifestación imprevista de un conflicto. Un asesinato en un sueño deberá tomar las medidas para evitar un ataque o un accidente de parte de otra persona, donde no será el culpable. Si sueña con el asesinato de un niño en una escuela representa delito inminente en su negocio que está por descubrir. Soñando con un asesinato en la calle de su casa se alerta no dejarse confundir por una falsa alarma. Una y otra vez, el sueño con un asesinato podría significar un riesgo que no haya tenido en cuenta y provoque una situación imprevista. Si es así, mantenga el equilibrio y convierta la situación negativa en una estabilizadora oportunidad de su vida.",
    keyAdvice:
      "Si el asesinato es cometido por el soñante indicara represión de impulsos agresivos.",
  },
  {
    id: "enterrado-vivo",
    term: "Enterrado Vivo",
    category: "Crisis, Juicio y Trascendencia",
    summary:
      "Soñar que usted es enterrado vivo significa que los errores o equivocaciones que cometa van a ser utilizadas por sus rivales para hacerle daño. Si usted sueña que lo han enterrado vivo y alguien acude a rescatarlo augura que logrará eludir los obstáculos que le pondrán sus enemigos.",
    detailedInterpretation:
      "Soñar que usted es enterrado vivo significa que los errores o equivocaciones que cometa van a ser utilizadas por sus rivales para hacerle daño. Si usted sueña que lo han enterrado vivo y alguien acude a rescatarlo augura que logrará eludir los obstáculos que le pondrán sus enemigos. Si en el sueño usted ve que es enterrado vivo, aunque esté gritando que no está muerto expresa que usted teme que no pueda alcanzar los objetivos que se había trazado. Si en los sueños usted presencia su propio entierro sugiere que está sufriendo en silencio y soledad; y que lo ve todo desde una perspectiva negativa. Si usted sueña que lo están enterrando vivo y que se escapa del ataud insinúa que usted es una persona enérgica y decidida, que disfruta de la vida a plenitud. Si en el sueño usted ve que alguien ha sido enterrado vivo significa que está viviendo una situación agobiante y complicada, de la que no sabe cómo salir; y aconseja que pida ayuda urgente a otras personas para solucionar este problema, para que sus asuntos no se estanquen.",
    keyAdvice:
      "Si en los sueños usted presencia su propio entierro sugiere que está sufriendo en silencio y soledad; y que lo ve todo desde una perspectiva negativa.",
  },
  {
    id: "obstaculos",
    term: "Obstáculos",
    category: "Espacios, Vías y Movimiento",
    summary:
      "Soñar con obstáculos significa fortaleza. Si el soñante se ve en una carrera de obstáculos indicará que es admirado por muchos por sus valores.",
    detailedInterpretation:
      "Soñar con obstáculos significa fortaleza. Si el soñante se ve en una carrera de obstáculos indicará que es admirado por muchos por sus valores. Si ves un obstáculo caer indicará que los problemas en el trabajo desaparecerán con la llegada de alguien nuevo. Cuando alguien te ayuda en el sueño a saltar un obstáculo, avizora apoyo incondicional de un amigo, lealtad. Si en el sueño estás poniendo obstáculos en un camino indica envidias, celos e intrigas de alguien cercano. Cuando sueñas con obstáculos te alerta de alimentarte espiritualmente, concentrar energías positivas y no preocuparte por nimiedades. Soñar con un obstáculo podría significar un mensaje para evitar una dificultad o recibir un consejo muy bueno para su salud. Un obstaculo simboliza reflexión, parada obligada o comprender algo muy complejo. Soñando con un obstáculo ubicado en la calle de su casa se alerta estar consciente de su situación económica actual. Si sueña con un obstáculo colocado en una autopista interestatal deberá chequear todos sus pasos y pagos para evitar un olvido irreversible sobre su patrimonio.",
    keyAdvice:
      "Si el soñante se ve en una carrera de obstáculos indicará que es admirado por muchos por sus valores.",
  },
  {
    id: "paralisis",
    term: "Parálisis",
    category: "Estados Corporales y Sensaciones",
    summary:
      "Soñar con cualquier forma de parálisis significa que se avecinan problemas de salud, fracasos en los asuntos que manejamos, o preocupaciones y disgustos por motivos diversos. Si soñamos que tenemos una paralisis indica que nuestro comportamiento es incorrecto por la influencia negativa que nos generan algunas relaciones deshonestas que hemos establecido.",
    detailedInterpretation:
      "Soñar con cualquier forma de parálisis significa que se avecinan problemas de salud, fracasos en los asuntos que manejamos, o preocupaciones y disgustos por motivos diversos. Si soñamos que tenemos una paralisis indica que nuestro comportamiento es incorrecto por la influencia negativa que nos generan algunas relaciones deshonestas que hemos establecido. Si en el sueño vemos a un amigo que tiene una parálisis expresa que en poco tiempo se nos vendrá encima un período de pérdidas y carencias que afectará a toda nuestra familia. Si en los sueños nos vemos paralizados sugiere que nos sentimos incapaces de llevar adelante los proyectos que siempre hemos querido emprender y eso nos provocará un fuerte sentimiento de frustración. Si soñamos que tenemos alguna parte del cuerpo paralizada insinúa que en poco tiempo nuestras capacidades profesionales se verán afectadas gravemente, o que los problemas sentimentales nos estén afectando de tal manera que estamos descuidando las actividades laborales que desarrollamos, haciéndonos cometer errores involuntarios. Si en el sueño vemos a otras personas con parálisis en alguno de sus miembros significa que no estamos confiando plenamente en la capacidad de algunas de las personas que nos rodean y, por eso, estamos realizando tareas que no nos corresponden.",
    keyAdvice:
      "Si soñamos que tenemos una paralisis indica que nuestro comportamiento es incorrecto por la influencia negativa que nos generan algunas relaciones deshonestas que hemos establecido.",
  },
  {
    id: "policia",
    term: "Policía",
    category: "Arquetipos y Figuras Humanas",
    summary:
      "El policía representa la ley y lo establecido, pero además es el que vela porque la ley no sea violada. Soñar con policía significa que podemos tener problemas con la ley de no hacer las cosas de la manera indicada, es muy importante no querer tomar ventajas ilegales en nuestros negocios a la larga podemos ser descubiertos.",
    detailedInterpretation:
      "El policía representa la ley y lo establecido, pero además es el que vela porque la ley no sea violada. Soñar con policía significa que podemos tener problemas con la ley de no hacer las cosas de la manera indicada, es muy importante no querer tomar ventajas ilegales en nuestros negocios a la larga podemos ser descubiertos. Si en el sueño la persona ve que es perseguida por un policía esto significa que se siente culpable por algo hecho recientemente, sobre todo algo en lo que fue más allá de lo permitido por las personas que tiene a su alrededor. Si en el sueño la persona ve que es un policía esto significa que es alguien muy duro de carácter, y esto puede tener consecuencias muy nocivas en sus relaciones interpersonales. Si en el sueño la persona observa ropas de policía en algún lugar esto significa que alguien muy posesivo intenta controlar su vida, probablemente en la pareja. Este tipo de sueños aconseja asumir un camino guiado por la ética, y por la no utilización mezquina de otras personas para lograr nuestros objetivos.",
    keyAdvice:
      "Soñar con policía significa que podemos tener problemas con la ley de no hacer las cosas de la manera indicada, es muy importante no querer tomar ventajas ilegales en nuestros negocios a la larga podemos ser descubiertos.",
  },
  {
    id: "desnudo",
    term: "Desnudo",
    category: "Arquetipos y Figuras Humanas",
    summary:
      "Soñar que estamos desnudos delante de una persona que nos gusta significa que en la vida real la deseamos sexualmente. Si soñamos que alguien nos desnuda, indica que esa persona nos desea sexualmente.",
    detailedInterpretation:
      "Soñar que estamos desnudos delante de una persona que nos gusta significa que en la vida real la deseamos sexualmente. Si soñamos que alguien nos desnuda, indica que esa persona nos desea sexualmente. Si el sueño el desnudo no resulta agradable o las sensaciones resultan incomodas puede tratarse de un trauma que ha quedado después de una violación o que estaremos en riesgo de ser víctimas de violación. Cuando tenemos un sueño que no hemos podido recordar, pero al despertar estamos desnudos, puede significar que nuestros deseos sexuales hacia alguien en específico se estén convirtiendo en nuestros sueños húmedos. Si soñamos que un hombre desnudo nos llama, indica que somos personas reservadas e inmaduras. Si en este sueño el hombre desnudo tiene la cara tapada es presagio de mal augurio, malas noticias, decepciones o sufrimiento.",
    keyAdvice:
      "Si soñamos que alguien nos desnuda, indica que esa persona nos desea sexualmente.",
  },
];
