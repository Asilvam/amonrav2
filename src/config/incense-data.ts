export interface IncenseElement {
  id: string;
  name: string;
  element: string;
  colorBorder: string;
  colorBg: string;
  ingredients: string[];
  substitute?: string;
  purpose: string;
  ritualTips: string;
}

export interface ZodiacIncense {
  sign: string;
  symbol: string;
  element: string;
  elementCategory: "fuego" | "tierra" | "aire" | "agua";
  primaryIngredients: string[];
  alternativeBlend?: string;
  oils?: string;
  ritualPurpose: string;
}

export interface TraditionalPurpose {
  id: string;
  title: string;
  summary: string;
  description: string;
}

export interface IncenseFormat {
  name: string;
  description: string;
  burnMethod: string;
}

export const incenseElements: IncenseElement[] = [
  {
    id: "fuego",
    name: "Incienso del Fuego Elemental",
    element: "Fuego",
    colorBorder: "border-clay-red",
    colorBg: "bg-clay-red/10",
    ingredients: [
      "Olíbano (incienso puro)",
      "Sangre de Dragón",
      "Sándalo Rojo",
      "Azafrán auténtico",
      "Gotas de aceite esencial de Almizcle",
    ],
    substitute:
      "Una pizca de azafrán auténtico es suficiente; si no se dispone de él, puede utilizarse cáscara de naranja desecada.",
    purpose:
      "Conectar y canalizar los poderes del Fuego: el éxito, la fuerza de voluntad, la protección activa, la vitalidad corporal y el entusiasmo.",
    ritualTips:
      "Quémelo lentamente sin llama viva sobre carbón vegetal para que libere sus esencias puras y potencie la energía del altar.",
  },
  {
    id: "tierra",
    name: "Incienso de la Tierra Elemental",
    element: "Tierra",
    colorBorder: "border-antique-gold",
    colorBg: "bg-antique-gold/10",
    ingredients: [
      "Resina de Pino o agujas finas de pino secas",
      "Pachulí",
      "Sal marina muy fina",
      "Gotas de aceite esencial de Ciprés",
    ],
    purpose:
      "Invocar los poderes del elemento Tierra: estabilidad, concreción material, prosperidad, solidez del hogar y paciencia perseverante.",
    ritualTips:
      "Excelente para momentos en que se necesita enraizamiento, claridad en asuntos económicos o afirmación de propósitos duraderos.",
  },
  {
    id: "aire",
    name: "Incienso del Aire Elemental",
    element: "Aire",
    colorBorder: "border-sky-500",
    colorBg: "bg-sky-500/10",
    ingredients: [
      "Benjuí",
      "Almáciga",
      "Flores de Lavanda",
      "Ajenjo",
      "Muérdago",
    ],
    purpose:
      "Invocar los poderes del elemento Aire para potenciar las facultades intelectuales, agilizar los estudios, favorecer los viajes y clarificar la comunicación.",
    ritualTips:
      "Deje que arda sin llama durante ritos adivinatorios, lectura de textos sagrados o momentos de discernimiento para desvanecer hábitos perjudiciales.",
  },
  {
    id: "agua",
    name: "Incienso del Agua Elemental",
    element: "Agua",
    colorBorder: "border-blue-500",
    colorBg: "bg-blue-500/10",
    ingredients: [
      "Benjuí",
      "Mirra de primera selección",
      "Sándalo",
      "Gotas de bouquet de Loto",
      "Aceite esencial de Ámbar Gris",
    ],
    purpose:
      "Captar el influjo de las aguas sagradas: despertar el psiquismo sutil, avivar el amor fraternal y compasivo, incentivar la fertilidad y enriquecer la belleza interior.",
    ritualTips:
      "Sahúmelo en un ambiente sereno con agua cristalina para facilitar la relajación, la armonización de emociones y la introspección meditativa.",
  },
];

export const zodiacIncenses: ZodiacIncense[] = [
  {
    sign: "Aries",
    symbol: "♈",
    element: "Fuego",
    elementCategory: "fuego",
    primaryIngredients: [
      "Olíbano",
      "Mirra",
      "Enebro",
      "Sándalo",
      "Clavel",
      "Ámbar",
    ],
    alternativeBlend: "Combinación de mirra, ciprés y eléboro.",
    oils: "Aceite esencial de madera de Cedro.",
    ritualPurpose:
      "Quémelo para incrementar sus propias facultades activas, el dinamismo y la determinación.",
  },
  {
    sign: "Tauro",
    symbol: "♉",
    element: "Tierra",
    elementCategory: "tierra",
    primaryIngredients: [
      "Benjuí",
      "Lilas",
      "Loto",
      "Violetas",
      "Salvia",
      "Azafrán",
    ],
    alternativeBlend: "Mezcla de sándalo, pimienta y bergamota.",
    oils: "Aceite esencial de Rosas.",
    ritualPurpose:
      "Utilícelo como sahumerio o esencia personal con el fin de afianzar la serenidad e incrementar sus facultades.",
  },
  {
    sign: "Géminis",
    symbol: "♊",
    element: "Aire",
    elementCategory: "aire",
    primaryIngredients: [
      "Cáscara de Limón o Naranja",
      "Azahar",
      "Reina de los Prados",
      "Almáciga o Canela",
    ],
    alternativeBlend:
      "Combinación de gálbano, flores de nuez moscada, almáciga, laurel y nuez moscada.",
    ritualPurpose:
      "Úselo como incienso personal para agilizar la mente, favorecer la comunicación y acrecentar las facultades.",
  },
  {
    sign: "Cáncer",
    symbol: "♋",
    element: "Agua",
    elementCategory: "agua",
    primaryIngredients: [
      "Mirra",
      "Hisopo",
      "Alcanfor",
      "Sándalo",
      "Eucalipto",
      "Hierbabuena",
      "Artemisa",
      "Heliotropo",
      "Cáscara de Limón",
    ],
    alternativeBlend: "Combinación de estoraque rojo y alcanfor.",
    oils: "Unas gotas de aceite esencial de Limón.",
    ritualPurpose:
      "Incienso personal para serenar la memoria emotiva, armonizar el hogar y expandir las facultades intuitivas.",
  },
  {
    sign: "Leo",
    symbol: "♌",
    element: "Fuego",
    elementCategory: "fuego",
    primaryIngredients: [
      "Almáciga",
      "Eufrasia",
      "Goma de Incienso (Olíbano)",
      "Sándalo",
      "Enebro",
      "Geranio",
      "Limón",
    ],
    alternativeBlend:
      "Combinación de mirra, almáciga, bayas de enebro y goma pura de incienso.",
    ritualPurpose:
      "Incienso personal para irradiar nobleza, magnetismo vital y potenciar las facultades de liderazgo espiritual.",
  },
  {
    sign: "Virgo",
    symbol: "♍",
    element: "Tierra",
    elementCategory: "tierra",
    primaryIngredients: [
      "Romero",
      "Nardo",
      "Vainilla",
      "Ciprés",
      "Valeriana",
      "Goma de Incienso o Almáciga",
    ],
    alternativeBlend: "Combinación de mirra, clavos de especias y benjuí.",
    oils: "Gotas de aceite esencial de Pachulí.",
    ritualPurpose:
      "Utilícelo como incienso con el fin de ordenar el discernimiento, limpiar el entorno y afinar las facultades.",
  },
  {
    sign: "Libra",
    symbol: "♎",
    element: "Aire",
    elementCategory: "aire",
    primaryIngredients: [
      "Gardenia",
      "Fresa silvestre",
      "Cedro",
      "Tomillo silvestre o Azafrán",
    ],
    alternativeBlend:
      "Combinación de almáciga, aloe, gálbano, sándalo y tomillo.",
    oils: "Unas gotas de aceite esencial de Rosas.",
    ritualPurpose:
      "Utilícelo como sahumerio para restaurar la armonía en vínculos, cultivar el equilibrio y elevar las facultades.",
  },
  {
    sign: "Escorpio",
    symbol: "♏",
    element: "Agua",
    elementCategory: "agua",
    primaryIngredients: ["Clavo de olor", "Pachulí", "Canela", "Ajenjo o Aloe"],
    alternativeBlend:
      "Combinación de alcanfor, aloe, ajenjo, olíbano, galanga y resina de pino.",
    ritualPurpose:
      "Úselo como sahumerio personal para la regeneración interior y el fortalecimiento de las facultades perceptivas.",
  },
  {
    sign: "Sagitario",
    symbol: "♐",
    element: "Fuego",
    elementCategory: "fuego",
    primaryIngredients: [
      "Mirra",
      "Magnolia",
      "Jazmín",
      "Siempreviva mayor",
      "Aloe o Nuez Moscada",
    ],
    alternativeBlend:
      "Combinación de mirra, clavos de especia, aloe, olíbano y clavo.",
    ritualPurpose:
      "Utilícelo como incienso con el fin de ampliar la comprensión filosófica e incrementar sus propias facultades.",
  },
  {
    sign: "Capricornio",
    symbol: "♑",
    element: "Tierra",
    elementCategory: "tierra",
    primaryIngredients: ["Benjuí", "Consuelda", "Pimienta"],
    alternativeBlend:
      "Combinación de sándalo, raíz de violeta, benjuí y albahaca.",
    oils: "Aceite esencial de Pachulí.",
    ritualPurpose:
      "Úselo como incienso y sahumerio para consolidar propósitos duraderos y alcanzar los objetivos con constancia.",
  },
  {
    sign: "Acuario",
    symbol: "♒",
    element: "Aire",
    elementCategory: "aire",
    primaryIngredients: [
      "Eucalipto",
      "Madreselva",
      "Mandrágora",
      "Sándalo",
      "Ciprés",
      "Nardos o Pimienta",
    ],
    alternativeBlend:
      "Combinación de almáciga, mandrágora, nardo y resina de pino.",
    ritualPurpose:
      "Quémelo con carbón vegetal para abrir caminos, favorecer ideales fraternos y materializar nobles metas.",
  },
  {
    sign: "Piscis",
    symbol: "♓",
    element: "Agua",
    elementCategory: "agua",
    primaryIngredients: [
      "Tomillo",
      "Estoraque",
      "Betónica",
      "Sándalo",
      "Ciprés",
      "Resina de Pino",
    ],
    alternativeBlend:
      "Estoraque rojo, nuez moscada o combinación de ajenjo, alcanfor y estoraque rojo.",
    ritualPurpose:
      "Quémelo con el fin de serenar las aguas anímicas, despertar la compasión e incrementar sus facultades místicas.",
  },
];

export const traditionalPurposes: TraditionalPurpose[] = [
  {
    id: "congraciarse",
    title: "Para congraciarse con las fuerzas sagradas",
    summary:
      "Ofrenda armoniosa que eleva un aroma puro y grato a la Divinidad.",
    description:
      "En épocas antiguas y en la tradición perenne, se consideraba que un aroma fragante y noble predisponía favorablemente a las inteligencias de la naturaleza y a la divinidad, estableciendo un pacto de pureza y agradecimiento mutuo.",
  },
  {
    id: "oracion",
    title: "Como medio y vehículo de oración",
    summary:
      "El humo ascendente como conductor físico y sutil de las plegarias.",
    description:
      "El incienso fue venerado como un medio vivo para las súplicas. Se comprende que el humo que se eleva hacia lo alto transmite las aspiraciones del corazón, sirviendo de puente entre el plano físico de quien sahúma y las esferas celestes.",
  },
  {
    id: "neutralizacion",
    title: "Como medio de neutralización y purificación",
    summary:
      "Disolución de influencias adversas, cargas densas y malos olores.",
    description:
      "Quemado desde antiguo para limpiar recintos cerrados, santuarios y hogares. La fumigación con resinas penetrantes disipa miasmas y desarmonías, purificando a las personas y alejando influencias que obstaculizan la paz.",
  },
  {
    id: "animo",
    title: "Medio para transformar el estado de ánimo",
    summary:
      "Predisposición del cuerpo, alma y mente hacia el recogimiento interior.",
    description:
      "Los aromas y vibraciones del incienso despiertan sensaciones y memorias sutiles en la conciencia. Predisponen a quien lo inhala a la consecución de objetivos espirituales, dotando al ambiente de quietud, concentración y serenidad.",
  },
];

export const incenseFormats: IncenseFormat[] = [
  {
    name: "Resinas y granos puros",
    description:
      "Lágrimas secas de corteza natural (olíbano, mirra, benjuí, almáciga o copal). Representan la expresión más pura y concentrada de las fuerzas vegetales.",
    burnMethod:
      "Requieren carbón vegetal encendido dentro de un incensario refractario, depositando pequeñas pizcas sobre la brasa viva.",
  },
  {
    name: "Hierbas, flores y maderas molidas",
    description:
      "Polvos aromáticos obtenidos de sándalo, cedro, romero, lavanda y cortezas fragantes finamente tamizadas.",
    burnMethod:
      "Se sahúman directamente sobre el carbón vegetal, combinadas a menudo con aserrín de maderas nobles para una combustión gradual.",
  },
  {
    name: "Conos y varillas (Sticks)",
    description:
      "Formatos contemporáneos aglutinados con sustancias naturales que permiten una combustión autónoma y uniforme.",
    burnMethod:
      "Se enciende la punta con una cerilla, se sopla la llama tras unos segundos y se deja arder la brasa en un soporte adecuado.",
  },
  {
    name: "Polvos de Ritos Místicos y Kyphi",
    description:
      "Fórmulas sagradas tradicionales compuestas de mezclas múltiples (como el 4x4 egipcio o polvos pardos dorados orientales) preparadas en secreto ceremonial.",
    burnMethod:
      "Se utilizan en ceremonias especiales de meditación o en sahumerios continuos para alcanzar estados elevados de conciencia.",
  },
];
