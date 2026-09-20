export interface CandleColor {
  id: string;
  name: string;
  colorCss: string;
  textColor: string;
  description: string;
}

export interface ZodiacCandle {
  sign: string;
  element: string;
  colors: string;
  description: string;
}

export interface SaintCandle {
  name: string;
  role: string;
  colors: string;
}

export interface MagicCandleType {
  name: string;
  description: string;
}

export const candleColors: CandleColor[] = [
  {
    id: "blancas",
    name: "Velas Blancas",
    colorCss: "#ffffff",
    textColor: "#1a1816",
    description:
      "Las velas blancas se asocian con la verdad, la pureza, la paz y la protección espiritual. Se utilizan para armonizar el campo energético, fortalecer la fe y acompañar prácticas de limpieza interior. Tradicionalmente se relacionan con la plata, el número dos y los rituales de clarificación.",
  },
  {
    id: "amarillas",
    name: "Velas Amarillas",
    colorCss: "#f59e0b",
    textColor: "#1a1816",
    description:
      "Las velas amarillas se vinculan con la mente, la comunicación y el impulso para emprender nuevos caminos. Se encienden para favorecer estudios, intercambios, decisiones laborales y claridad de pensamiento. En la tradición también se asocian con el mediodía, el sándalo y la energía de Mercurio.",
  },
  {
    id: "azules",
    name: "Velas Azules",
    colorCss: "#2563eb",
    textColor: "#ffffff",
    description:
      "Las velas azules representan serenidad, nobleza, fidelidad e inspiración. Se utilizan para fortalecer la voluntad, equilibrar relaciones y buscar estabilidad emocional. Se consideran propicias para momentos de reflexión, perseverancia y protección frente a conflictos.",
  },
  {
    id: "rojas",
    name: "Velas Rojas",
    colorCss: "#dc2626",
    textColor: "#ffffff",
    description:
      "Las velas rojas se asocian con la fuerza vital, la pasión, el valor y la acción. Se emplean en rituales vinculados al amor, la determinación y el impulso para superar obstáculos. En la tradición se relacionan con Marte, el hierro y el clavel rojo.",
  },
  {
    id: "doradas",
    name: "Velas Doradas",
    colorCss: "#d97706",
    textColor: "#ffffff",
    description:
      "Las velas doradas simbolizan prosperidad, confianza y expansión personal. Se encienden para pedir abundancia, fortalecer proyectos y atraer oportunidades favorables. También se vinculan con la energía solar, el oro y el mediodía como momento de activación.",
  },
  {
    id: "naranjas",
    name: "Velas Naranjas",
    colorCss: "#ea580c",
    textColor: "#ffffff",
    description:
      "Las velas naranjas se relacionan con entusiasmo, creatividad, magnetismo y claridad mental. Se utilizan para dinamizar procesos, recuperar ánimo y sostener tareas exigentes. Tradicionalmente se asocian con el amanecer, el romero y el impulso de crecimiento.",
  },
  {
    id: "celestes",
    name: "Velas Celestes",
    colorCss: "#38bdf8",
    textColor: "#0f172a",
    description:
      "Las velas celestes se vinculan con armonía afectiva, comprensión, sensibilidad y calma interior. Se emplean en reconciliaciones, equilibrio emocional y búsqueda de paz espiritual. En la tradición se asocian con la tarde, el cobre y el lapislázuli.",
  },
  {
    id: "grises",
    name: "Velas Grises",
    colorCss: "#6b7280",
    textColor: "#ffffff",
    description:
      "Las velas grises representan neutralidad, madurez y discernimiento ante situaciones complejas. Se usan para equilibrar polaridades, desactivar tensiones y tomar distancia de influencias negativas. También se vinculan con estudio, introspección y orden mental.",
  },
  {
    id: "granates",
    name: "Velas Granates",
    colorCss: "#881337",
    textColor: "#ffffff",
    description:
      "Las velas granates se asocian con vigor, determinación y proyección en metas de mayor alcance. Se encienden para fortalecer optimismo, liderazgo y constancia en procesos exigentes. En varias corrientes se consideran favorables para iniciativas de expansión.",
  },
  {
    id: "marrones",
    name: "Velas Marrones",
    colorCss: "#78350f",
    textColor: "#ffffff",
    description:
      "Las velas marrones se relacionan con estabilidad, realismo, disciplina y arraigo. Se utilizan para reforzar concentración, protección del hogar y toma de decisiones prácticas. Tradicionalmente se vinculan con procesos de orden, responsabilidad y perseverancia.",
  },
  {
    id: "verdes",
    name: "Velas Verdes",
    colorCss: "#16a34a",
    textColor: "#ffffff",
    description:
      "Las velas verdes simbolizan salud, esperanza, crecimiento y equilibrio con la naturaleza. Se encienden para apoyar prosperidad, trabajo, recuperación y armonía financiera. En la tradición se asocian con constancia, fertilidad y construcción de futuro.",
  },
  {
    id: "purpuras",
    name: "Velas Púrpuras",
    colorCss: "#7c3aed",
    textColor: "#ffffff",
    description:
      "Las velas púrpuras se vinculan con espiritualidad, meditación, autoridad interior y transformación. Se utilizan para fortalecer intuición, enfoque y profundidad en prácticas de introspección. También se asocian con procesos de elevación simbólica y toma de decisiones.",
  },
  {
    id: "negras",
    name: "Velas Negras",
    colorCss: "#18181b",
    textColor: "#ffffff",
    description:
      "Las velas negras se relacionan con protección de frontera, corte de cargas densas y trabajo de resguardo. En distintas tradiciones su uso requiere criterio, guía y una intención claramente definida. También se emplean para neutralizar influencias negativas en momentos críticos.",
  },
  {
    id: "rosadas",
    name: "Velas Rosadas",
    colorCss: "#ec4899",
    textColor: "#ffffff",
    description:
      "Las velas rosadas simbolizan ternura, afecto, reconciliación y armonía en los vínculos. Se encienden para cultivar empatía, cuidado mutuo y equilibrio emocional. Tradicionalmente se asocian con Venus, la belleza y la expansión del amor sereno.",
  },
  {
    id: "tres-colores",
    name: "Velas de Tres Colores",
    colorCss: "linear-gradient(135deg, #dc2626 0%, #16a34a 50%, #ec4899 100%)",
    textColor: "#ffffff",
    description:
      "Las velas de tres colores combinan intenciones complementarias en una sola pieza ritual. Las variantes rojo-verde-rosado y púrpura-verde-rosado se emplean para integrar prosperidad, amor, estabilidad y buena fortuna. Se consideran útiles cuando se busca armonizar varios propósitos a la vez.",
  },
];

export const zodiacCandles: ZodiacCandle[] = [
  {
    sign: "Aries",
    element: "Fuego",
    colors: "Carmesí o rojo vivaz",
    description:
      "Aries: El color apropiado es el carmesí o rojo vivaz. Utilizado normalmente para fortalecer los emprendimientos, sean de empresas, negocios o trámites de diversa índole. Este color da ímpetu, fuerza y coraje ante dificultades.",
  },
  {
    sign: "Tauro",
    element: "Tierra",
    colors: "Verde (todas las tonalidades)",
    description:
      "Tauro: Su color es el verde en todas sus tonalidades. Favorece la estabilidad económica, tanto en el hogar como en el trabajo. Ayuda a superar problemas que impiden el normal desenvolvimiento de las actividades cotidianas.",
  },
  {
    sign: "Géminis",
    element: "Aire",
    colors: "Lavanda, gris, celeste",
    description:
      "Géminis: Color regente lavanda, gris, celeste. Actúa en los negocios, estudios, comercio, y en actividades que requieran fortalecer la mente y el entendimiento ante situaciones complejas.",
  },
  {
    sign: "Cáncer",
    element: "Agua",
    colors: "Blanco, amarillo claro",
    description:
      "Cáncer: Color usado en las velas blanco y amarillo claro. Propicia la receptividad, la intuición, la protección de la familia, viajes y sentimientos puros.",
  },
  {
    sign: "Leo",
    element: "Fuego",
    colors: "Naranja, amarillo oro, rojo",
    description:
      "Leo: Su color es el naranja, amarillo oro y rojo. Su empleo favorece los buenos negocios, el éxito en emprendimientos comerciales y la protección de bienes materiales y familiares.",
  },
  {
    sign: "Virgo",
    element: "Tierra",
    colors: "Marrón, azul",
    description:
      "Virgo: Generalmente se usa el color marrón y azul. Se emplea para tranquilizar a las personas, llevar serenidad y calma ante situaciones de descontrol o angustia.",
  },
  {
    sign: "Libra",
    element: "Aire",
    colors: "Celeste, verde claro, rojo cobre",
    description:
      "Libra: Color usado en las velas celeste, verde claro y rojo cobre. Ayuda a liberar la mente de oscuridades, colabora en la unión de parejas y fomenta el equilibrio y la armonía.",
  },
  {
    sign: "Escorpio",
    element: "Agua",
    colors: "Rojo fuerte, azul oscuro, violeta profundo",
    description:
      "Escorpio: Color rojo fuerte, azul oscuro y violeta profundo. Actúa favorablemente en los aspectos místicos y en personas que sientan inclinación por la meditación profunda y la transformación espiritual.",
  },
  {
    sign: "Sagitario",
    element: "Fuego",
    colors: "Azul, turquesa",
    description:
      "Sagitario: Lleva color azul y turquesa. Atrae la ayuda de maestros espirituales; utilizadas normalmente para lograr mayor comprensión de la vida, expansión y viajes.",
  },
  {
    sign: "Capricornio",
    element: "Tierra",
    colors: "Marrón, gris, rojo oscuro",
    description:
      "Capricornio: El color en las velas puede ser marrón, gris o rojo oscuro. Protege contra malas influencias y dificultades derivadas de la envidia, otorgando firmeza y perseverancia.",
  },
  {
    sign: "Acuario",
    element: "Aire",
    colors: "Violeta, verde claro, rojo",
    description:
      "Acuario: Utiliza el color violeta, verde claro y rojo. Es propicia para la paz, situaciones tormentosas o imprevistas, y la búsqueda de libertad interior.",
  },
  {
    sign: "Piscis",
    element: "Agua",
    colors: "Verde claro, celeste, amarillo oscuro",
    description:
      "Piscis: El color apropiado es verde claro, celeste y amarillo oscuro. Ayuda a proyectar los sentimientos, la paz y la claridad en momentos de duda y aflicción.",
  },
];

export const saintsCandles: SaintCandle[] = [
  {
    name: "Stella Maris",
    role: "Virgen de los marinos y del mar",
    colors: "Celeste y blanca",
  },
  {
    name: "San Cayetano",
    role: "Santo del trabajo y la abundancia en el hogar",
    colors: "Amarillo y blanco",
  },
  {
    name: "San Marcos de León",
    role: "Auspicia en casos legales, estudios o amores",
    colors: "Blanca y roja",
  },
  {
    name: "San Onofre",
    role: "Protector de los viudos, ayuda en el trabajo y gracias urgentes",
    colors: "Amarillo y marrón",
  },
  {
    name: "San Cipriano",
    role: "Protector contra las negatividades y trabajos de brujería",
    colors: "Parte inferior negro y superior blanco",
  },
  {
    name: "Santa Liberata",
    role: "Protectora en casos de peligros, obsesiones y negatividades",
    colors: "Rosa",
  },
  {
    name: "San Miguel Arcángel",
    role: "Protección espiritual, contra soberbia, envidias y egoísmos",
    colors: "Violeta, fucsia o roja",
  },
  {
    name: "Santa Catalina",
    role: "Para casos imposibles, luchadora y defensora de la verdad",
    colors: "Roja, blanca y azul",
  },
  {
    name: "San Rafael Arcángel",
    role: "Arcángel de la salud y medicina divina",
    colors: "Tonos de verde",
  },
  {
    name: "San Pantaleón",
    role: "Santo de la medicina y sanación de enfermos",
    colors: "Verde y blanco",
  },
  {
    name: "San Gabriel Arcángel",
    role: "Ángel de la anunciación, protector de embarazos y matrimonios",
    colors: "Rosa, blanco y celeste",
  },
  {
    name: "San Valentín",
    role: "Protector de los novios y enamorados",
    colors: "Roja, rosa y blanco",
  },
  {
    name: "Santa Rosa de Lima",
    role: "Protectora en casos urgentes",
    colors: "Rojo y blanco",
  },
  {
    name: "San Jorge",
    role: "Protector ante la magia negra y contra las injusticias o envidias",
    colors: "Roja, blanca y verde",
  },
  {
    name: "Rosa Mística",
    role: "Auxilia en problemas físicos y psíquicos",
    colors: "Blanca, amarilla y roja",
  },
];

export const magicCandles: MagicCandleType[] = [
  {
    name: "Adán y Eva: Rojas",
    description: "Para acercar aún más a dos personas o a una pareja casada.",
  },
  {
    name: "Adán y Eva: Rosadas",
    description:
      "Se utiliza para ayudar a iniciar un romance o una amistad. También ayuda a ser agradable ante todas las personas.",
  },
  {
    name: "Allan Kardec",
    description:
      "Esta vela tiene dos colores: dorado y verde. Se enciende para guía espiritual, para proteger su suerte, para mantener alejados la maldad y el peligro.",
  },
  {
    name: "Animas o Animitas",
    description:
      "Esta es una vela de color rojo. Se enciende para recuperar cosas perdidas, para el amor perdido o no correspondido. Se ha sugerido prenderla cuando se tiene un espíritu en la casa. Se dice que trae paz a las personas que están trastornadas mentalmente.",
  },
  {
    name: "Ángel",
    description:
      "Contra envidia, especial para prender después de reuniones en el hogar o negocio.",
  },
  {
    name: "Atracción",
    description:
      "El color de esta vela es rojo. Es una vela para todos los propósitos utilizada para atraer el amor, el dinero y la salud o para mantener una persona atraída hacia usted.",
  },
  {
    name: "Alejamiento",
    description:
      "Una vela de dos colores en negro y rojo. Se enciende para apartar a alguien que esté incomodando, para hacer que alguien se vaya de la casa, salga de su vida, para hacer que un vecino problemático se mude o para detener el acoso de un ex amante.",
  },
  {
    name: "Aromáticas de Luz Mágica",
    description:
      "Cuatro velas con todos los colores e influencias de las velas de luz mágica. Este tipo de vela combina dos colores: rojo oscuro y negro, dorado y rosado o rosado y verde. El bloqueador es mejor cuando se utiliza con una vela reversible. Los colores que se usan dependen de la situación. Todas las velas bloqueadoras se utilizan para deshacer cualquier trabajo que alguien haya puesto para traer la mala suerte a su vida.",
  },
  {
    name: "Brujita de la Buena Suerte",
    description:
      "Vela magnética para vencer en todo, suerte total en los juegos de azar, fortuna, positivismo en la vida cotidiana, éxito en todas las empresas. No deje pasar esta oportunidad de realizar todos sus sueños.",
  },
  {
    name: "Buda",
    description:
      "La vela de Buda se encuentra en rosado, dorado, verde y otros colores. La rosada se utiliza para matrimonio. La verde es para la familia: armonía, salud, paz y posteridad. La dorada se prende para abundancia y fortaleza. También sirve para llamar dinero por cualquier vía: negocios, trabajo, juegos de azar, etc. Ponga una moneda debajo de la vela al quemarla y rásquele la panza. Los resultados no se harán esperar.",
  },
  {
    name: "Cráneos",
    description:
      "Se pueden encontrar en blanco, negro, rojo y otros colores. El Cráneo Blanco se utiliza para paz y tranquilidad. El Cráneo Rojo para el amor o para traer de regreso a un amor perdido. El Cráneo negro para hacer el mal o para cambiar la suerte. También purifican el ambiente de vibraciones negativas impulsando el desarrollo económico, sentimental y espiritual de las personas.",
  },
  {
    name: "Corazón Magnético",
    description:
      "Vela atractiva para quemar por siete veces, siete corazones, para atraer al sexo opuesto a nuestros brazos. Con toda la fuerza atractiva del amor, esta vela cumplirá su sueño de estar siempre con la persona que ama.",
  },
  {
    name: "Cirios",
    description:
      "Velones esotéricos, con todos los poderes de la luz mágica; con influencias de Pomba Gira, Imaja, San Jorge, San Marcos, Siete Poderes, etc. Ideal para hacer trabajos especiales.",
  },
  {
    name: "Carubé de la Suerte",
    description:
      "El carubé es una avecilla de presa, nocturna, que vive en la zona misteriosa, parte de las provincias del litoral argentino y Paraguay. Su aspecto es igual al de una lechuza, pero en pequeñas proporciones. Suele imitar el canto de otras aves sobre las que ejerce un especial magnetismo, convirtiéndolas en sus presas. Según la tradición, las plumas de carubé son propicias para atraer el dinero y el amor, otorgándonos parte del magnetismo de este animal. Las velas con esta forma tienen el mismo significado.",
  },
  {
    name: "Controladora",
    description:
      "Viene solamente en anaranjado. Se utiliza para dar a mantener los niños bajo control. Cuando se quiere que alguien haga lo que desea, se usa con una amarilla y verde de dinero y una verde y negra reversible para obtener un aumento en el pago.",
  },
  {
    name: "Cruz de Caravaca",
    description:
      "Viene en azul y café. Esta vela se utiliza para ganar un caso en los tribunales. La vela café para un caso de tribunal se puede utilizar para confundir cualquier testimonio en contra.",
  },
  {
    name: "Caso de Tribunal",
    description:
      "Viene en azul y café. Esta vela se utiliza para ganar un caso en los tribunales. La vela café para un caso de tribunal se puede utilizar para confundir cualquier testimonio en contra.",
  },
  {
    name: "Cupido o Dios del Amor",
    description:
      "Une parejas, reconcilia enojos, alegra la vida sentimental uniendo parejas con problemas conyugales. Cupido siempre puede con el amor, él nunca es contrario.",
  },
  {
    name: "Cabeza de Exu",
    description:
      "Esta vela está hecha especialmente para hacer el bien, destruye maleficios, descarga las casas para hacer destrabes (romper cargas malignas).",
  },
  {
    name: "Choclo",
    description:
      "Se usa para que en el hogar no falte nada, para la abundancia.",
  },
  {
    name: "Conquista Total",
    description:
      "Esta vela se encuentra en dos tipos: un púrpura firme o de tres colores: púrpura, anaranjado y púrpura. Se utiliza para conquistar a otro, para traer buena fortuna o atraer dinero. Esta es una vela rosada utilizada para que una petición especial sea respondida. Destranca Rua En esta vela observamos la influencia afrobralilera, ya que se refiere a un Exú, cuyo poder impera en la calle. Ellos pueden abrir o cerrar nuestros caminos, protegernos o provocar accidentes, hechos de violencia, engaño y en general todos aquellos peligros a los que estamos sometidos fuera de refugio de nuestros hogares.",
  },
  {
    name: "Destrabe",
    description:
      "El color en él que viene es blanco. Se utiliza para retrasar un caso en el tribunal o un proceso y para proteger de un proceso en contra.",
  },
  {
    name: "De la Justicia",
    description:
      "Viene en blanco o Rojo. La vela blanca se usa para influenciar la decisión de un juez a favor y para proteger de los enemigos. La vela roja es para obtener un divorcio.",
  },
  {
    name: "De los Siete Poderes",
    description:
      "Con todas las potencias e influencias de los colores. Se quema un color por día. Especial para trabajo, amor, dinero, descarga, abre camino, contra y hogar.",
  },
  {
    name: "De la Fortuna",
    description:
      "Una vela de color dorado utilizada para transformar la mala suerte en buena fortuna. Al igual que el jabón, la vela hecha de esta sustancia encierra las mismas características de armonía, dulzura, mansamiento, etc. Permítasenos insistir en la necesidad de tener en cuenta todos los elementos que son tan importantes como el ambiente y fundamentalmente nuestro yo interior. La contemplación de una forma, la percepción de un color junto a la repetición constante por un determinado tiempo, hacen que nuestro pedido sea escuchado, pero poco podremos lograr sin equilibrarnos emocionalmente. Exu (Simbólica) Protectora de la salud, prolonga la vida, para dominar en el amor y ver cumplidos los deseos de un magnetismo para dominar a los demás, especialmente del sexo opuesto. Vence a los enemigos envidiosos.",
  },
  {
    name: "Espíritu",
    description:
      "El color de esta vela es rojo. Se utiliza como una ofrenda a los espíritus para valor, protección y para alejar la magia maligna.",
  },
  {
    name: "Estrella Guía",
    description:
      "Con todos los poderes de los colores. Diez influencias diferentes.",
  },
  {
    name: "Empleo o Trabajo",
    description:
      "Una vela de dos colores: Rojo y verde. Se enciende cuando se busca trabajo o para triunfar y prosperar en el trabajo actual.",
  },
  {
    name: "Figa",
    description:
      "(Manito de la Suerte) Vela en forma de puño, con los poderes desencadenados de los orixas (santos brasileños). Para lograr todo lo que se desea en el año que se usa de acuerdo al color de la vela. Esta vela trae catálogo incluido.",
  },
  {
    name: "Figa de Aruanda",
    description:
      "Vela de la Cabloca Jurema, niña africana que es un espíritu de luz, consagrada por la religión umbradista como milagrosa. Usted usando esta vela, recitando los nombres divinos, orando por Jurema, mentalmente se está dirigiendo a Dios, y sus súplicas serán oídas. Especial para combinar con medalla de Jurema de Aruanda. Vela flotante para realizar trabajos de descarga. Se usa un recipiente de agua, o bien se pone la vela en el mar, río, etc. Esta es una vela rutalista de la religión umbanda del Brasil.",
  },
  {
    name: "Gato",
    description:
      "Este animalito acompaña al hombre desde los comienzos de su historia, al igual que el perro, está a su lado pero contrariamente a él, no pierde del todo a su independencia. La noche lo llama y se pierde en sus profundidades. El gato ha sido amado, odiado y temido, guardián de los templos de la antigüedad y perseguido por diabólico durante la inquisición. La actualidad lo encuentra conviviendo con el hombre en las grandes ciudades, aceptando su comida, caricias, pero rebelde y libre por naturaleza, sigue siendo por algunos la imagen del misterio. La leyenda le atribuye siete vidas y también la posibilidad de acarrear desgracias cuando es negro y se cruza ante nuestros pasos. Una antigua historia árabe nos dice que Mahoma acarició en el lomo a uno de estos animalitos y a partir de ese día solo puede caer parado. La vela con esta imagen se utiliza para cortar hechizos, cambiar la mala suerte propia en buena e invocar a los pobres místicos tan bien representados por el gato. (Blanca y Celeste) Reina del mar, protectora del hogar y la mujer. Favorece los viajes y en el hogar se asentará el buen espíritu que guiará con justicia la vida futura; hijos lindos y fuertes, el dinero suficiente, la felicidad, la salud y hasta la buena suerte en las cosas del azar.",
  },
  {
    name: "Juegos de Azar y Negocios",
    description:
      "Vela de dos colores: dorada y verde. Se utiliza para ayudar a mantener la fluidez de la actividad de los negocios y los juegos de azar. Para vencer demandas, guiar desorientados, abre soluciones en el campo de la salud, dinero y amor.",
  },
  {
    name: "Longevo",
    description:
      "Anciano chino, con todos los poderes de sanación de las personas enfermas, mejor vida a aquellos que sufren, potencia mental, potencia sexual.",
  },
  {
    name: "Las Siete Cruces",
    description:
      'La cruz es uno de los símbolos más antiguos, representa los cuatro elementos esenciales de la naturaleza (agua, tierra, aire y fuego), los cuatro puntos cardinales, las cuatro dimensiones de nuestra naturaleza material. Además sus implicancias religiosas ofrendarán su sacrificio en este símbolo de lo material para rescatar al espíritu inmoral del hombre. El siete es esencialmente mágico, por su fuerza creadora (siete notas musicales, siete colores básicos, siete días de la semana, etc.) Es la consolidación de la materia en el cuatro, más la fuerza dinámica del tres, que moviliza todo el potencial. Así la vela se utiliza para infinidad de pedidos, encendiendo una cruz por vez durante siete días y también nos recuerda la fuerza del espíritu sobre la materia. Las palabras de aquel que enseñó cómo "nuestra fe mueve montañas".',
  },
  {
    name: "Manzana",
    description:
      "Para hacerse amar de los hombres y triunfar de todas las rivales. Para hacerse amar extraordinariamente por el marido. Para seducir a las mujeres. Para impedir que un hombre sea infiel. Para reconciliar a dos amantes.",
  },
  {
    name: "Mano",
    description:
      "Especial para limpieza de casas; Durante siete días, comenzando un Martes o Jueves, se enciende incienso y mirra en un recipiente, mientras se reza un Padre Nuestro y un Ave María para elevar nuestros pensamientos. Luego acercamos el recipiente a las paredes de cada habitación, haciendo con el mismo la señal de la cruz e invocamos a las fuerzas de la luz para que alejen toda mala influencia de ese hogar. Luego repetimos el proceso encendiendo una Vela Mano y haciendo la señal de la cruz frente a cada pared. Finalmente rezamos un Padre Nuestro y un Ave María solicitando que nuestros pedidos sean escuchados. Los restos del sahumerio preparado y la vela deben ser arrojados donde corre agua.",
  },
  {
    name: "Noche",
    description: "Velitas especiales para lamparitas usadas en aromaterapia.",
  },
  {
    name: "Novena Santoral",
    description:
      "Nueve velitas para ofrecer a su santo de devoción. Se prende una vela por día, diciendo la oración correspondiente. Los resultados no se harán esperar.",
  },
  {
    name: "Nudo",
    description:
      "Esta es una vela sentimental, cuenta con el apoyo incondicional de Venus. Asegura amor fiel. Para unir parejas con problemas graves.",
  },
  {
    name: "Pretos",
    description:
      "(Blanco y Negro) Convoca las fuerzas del espíritu para curar las enfermedades. Proporciona potencia sexual a la persona en quien se piensa. A quien la usa, la cura todas las manifestaciones de la debilidad genital. También eficaz para hacerse amar.",
  },
  {
    name: "Pomba Gira",
    description:
      "(Roja y Negra) Protege a las personas queridas y proporciona el amor de la persona deseada. Realiza milagros en el campo del amor, la salud y la fortuna. Aleja el demonio de los celos. Atrae a amantes ardientes.",
  },
  {
    name: "Parejas: Blancas",
    description:
      "Para unir parejas, apurar matrimonios, atraer, dominar, especialmente para combinar con sahumerios y puros.",
  },
  {
    name: "Parejas: Negras",
    description:
      "Para alejar, reconquistar el amor perdido, alejar al amante de su pareja. Ideal para combinar con talismán de poder mágico.",
  },
  {
    name: "Parejas: Rojas",
    description:
      "Para apurar, cuando son casos difíciles, cuando la persona no está decidida a contraer matrimonio. Asegura amor fiel.",
  },
  {
    name: "Parejas: Otros Colores",
    description: "Fucsias, rosadas, miel, etc.",
  },
  {
    name: "Paloma",
    description:
      "Tranquilidad en el hogar. Aleja los males que otras personas nos hayan realizado.",
  },
  {
    name: "Pirámide",
    description:
      "Debido a inmutables y fuertes Leyes de la Naturaleza, la Vela Pirámide contiene el poder sugestivo magnético tan poderoso y benéfico ante el cual nada se resiste. La naturaleza ha concentrado esta fuerza invisible en la pirámide en beneficio de la vida. Protege al ser humano, entregándole su magnetismo; esta fuerza poderosa e invisible que trae al poseedor toda clase de felicidad y dicha. Quemándola se puede tener la seguridad de ser siempre afortunado y dichoso en todo.",
  },
  {
    name: "Pega Hombre",
    description:
      "Usada para hacer trabajos de atracción de hombres esquivos, que no se quieren comprometer sentimentalmente. Queme esta vela poniendo el nombre de la persona en ella y ya verá los resultados.",
  },
  {
    name: "Rey Salomón o Dominación",
    description:
      "Esta vela se puede obtener en color púrpura. Se prende para dominar y controlar, dando poder sobre otros.",
  },
  {
    name: "Recupera Dinero",
    description:
      "Vela de color verde utilizada en combinación con otras velas cuando alguien le debe dinero y no le quiere pagar. También sirve para obtener un aumento de sueldo.",
  },
  {
    name: "San Marcos",
    description:
      "(Blanco y Rojo) Luz de vida para los enfermos. Proporciona vigor, músculos y permite cumplir tareas rudas sin cansancio. Une a las parejas desavenidas y asegura un futuro de amor con una nueva vida sin infidelidades, hasta la muerte. Libra de accidentes, especialmente en las tareas que ofrecen peligro.",
  },
  {
    name: "San Jorge",
    description:
      "(Blanca, Roja, Verde) Para la paz, la felicidad y el progreso del hogar. Protectora de los hijos, que se criarán vivaces, valerosos, con gran iniciativa propia, notable vitalidad y fuerte organismo. Vida sexual equilibrada. Todo marchará a la perfección dentro del plano hogareño y doméstico.",
  },
  {
    name: "San Onofre",
    description:
      "(Amarillo y Marrón) Las emanaciones de su luz envuelven el cuerpo a manera de coraza invisible, que protege contra la mala suerte, atrayendo la suerte en los juegos. Proporciona fortuna y concede el don de hacerse amar, logrando que el amante la colme de regalos, especialmente alhajas de plata y oro.",
  },
  {
    name: "San Pancracio",
    description:
      "(Roja y Verde) Proporciona trabajo bien remunerado y salud invencible. Para obtener aumentos de sueldos. De seguridad personal. Detiene el curso de enfermedades incurables. Para lograr mayor capacidad y magnetismo sexual. Fuerza mental para imponer pensamientos a los demás.",
  },
  {
    name: "San Cipriano",
    description:
      "Ahuyenta maleficios. Rinde de amor a la persona deseada. Repele las desgracias. Atrae a las personas influyentes en nuestro beneficio. Nos revela la identidad de las personas que nos traicionan. Atiende malestares crónicos y persevera de accidentes.",
  },
  {
    name: "Sapo",
    description:
      "El color de esta vela comúnmente es verde, pero también existen otros colores en ella. Se utiliza para recuperar la buena salud, traer buena fortuna, alejar la maldad y apurar matrimonios, cuando el o ella están indecisos en el aspecto emocional o sentimental.",
  },
  {
    name: "Signo Peso( $)",
    description:
      "Llama dinero por cualquier vía, sea negocio, trabajo, etc. Abre soluciones monetarias.",
  },
  {
    name: "San Jorge: Espada",
    description:
      "Para cortar la envidia de aquellas personas con influencias negativas.",
  },
  {
    name: "Simbólico",
    description:
      "Para conseguir trabajo. Protección de los hijos. Todo marchará a la perfección dentro del plano hogareño.",
  },
  {
    name: "Serpiente",
    description:
      "Contra el daño; de origen brasileño hecha especialmente para hacer trabajos de descarga.",
  },
  {
    name: "Separación",
    description:
      "Esta vela viene de varios colores principalmente en blanco, negro o rojo. La negra es la más popular en nuestro local. Se utiliza para disolver cualquier amistad o aventura de amor. La vela blanca para separar, cuando se prepara para emitir una vibración negativa se utiliza para crear disensión, discusiones y guerra entre dos personas.",
  },
  {
    name: "Sansón",
    description:
      'Este personaje fue uno de los jueces de Israel, es la imagen hebrea de Hércules grecorromano y representa principalmente "la fuerza". A diferencia de Hércules, en Sansón es más clara la actitud de entrega a la voluntad divina ya que es gracias a este amor que él recupera todo su poder, a pesar de haber sido profundamente debilitado por la pasión hacia lo material representada por Dalila, quién como suele suceder con las pasiones, termina traicionándolo. Sansón finalmente alcanza la victoria ofrendando su propia existencia material en honor a Jehová. Esta vela es encendida, por lo tanto, en busca de la fuerza que a veces pareciera abandonarnos y que necesitamos para comenzar nuevos ciclos de experiencias o resolver variadas situaciones.',
  },
  {
    name: "San Miguel",
    description:
      "Esta vela se utiliza con el objetivo de crear una barrera protectora que impide la acción destructiva de fuerzas negativas originadas en la envidia, los celos o la realización de malas artes (hechizos).",
  },
  {
    name: "San Cayetano",
    description:
      "La vela con esta imagen representa a uno de los santos más venerados. A él concurren miles de fieles todos los días siete procurando protección, especialmente en lo que se refiere al hogar, al trabajo y al pan necesario para sostener una vida armónica y feliz. Aleja vicios, alcohol y drogas.",
  },
  {
    name: "San Pedro",
    description: "Esta vela viene en blanco y se usa en tiempos de enfermedad.",
  },
  {
    name: "San Onofre",
    description:
      "Esta vela representa la imagen de un ser de alta espiritualidad que resume todas las virtudes, despojando completamente de deseos materiales. Sin embargo, suele otorgar fortuna a quienes humildemente solicitan su protección, pero nos recuerda con su actitud de completa entrega al amor del señor, que es el objetivo de bondad que debemos alcanzar con las riquezas obtenidas.",
  },
  {
    name: "Santísima Trinidad",
    description:
      "Se enciende para peticiones especiales, para evitar la cárcel, para protegerse de la maldad.",
  },
  {
    name: "San Sebastián",
    description:
      "Atrae dinero en abundancia, otorga bien al necesitado, resuelve problemas.",
  },
  {
    name: "San Judas Mateo",
    description:
      "Bendice los hogares llenándolos de paz y alegría, protege el trabajo; aboga por lo imposible.",
  },
  {
    name: "San José",
    description:
      "Evita los malos deseos, protege de los enemigos, saca adelante la familia.",
  },
  {
    name: "San Antonio",
    description:
      "Protector del amor y las cosas perdidas por su poderosa intercesión. Ayuda a las parejas.",
  },
  {
    name: "Santa Rita",
    description:
      "Ayuda a solucionar los problemas por imposibles que sean, intercede ante Dios suplicante y aboga por lo imposible.",
  },
  {
    name: "San Martín",
    description:
      "Socorre necesidades, atiende todos los que lo invocan; ayuda contra las enfermedades por graves que sean.",
  },
  {
    name: "Santa Teresa",
    description:
      "Ayuda a los débiles, fortalece las esperanzas, intercede por todos ante Dios y pide para Chile paz, trabajo y amor.",
  },
  {
    name: "San Cono",
    description:
      "Es una vela verde encendida para tener suerte en los casinos.",
  },
  {
    name: "Sagrado Corazón de Jesús",
    description:
      "Se encuentra en roja o blanca. Se utiliza para las bendiciones diarias.",
  },
  {
    name: "San Juan",
    description:
      "Viene en color rojo. Sirve para propósitos de salud y para peticiones especiales.",
  },
  {
    name: "Señora del Rosario, Pompeya de Buenos Aires",
    description:
      "Ayuda a recobrar la salud perdida y a combatir enfermedades incurables.",
  },
  {
    name: "Tranca Rua",
    description:
      "(Simbólica) Para llevar a cabo viajes felices. Para fascinar, atraer, dominar e influenciar. Contra todo lo imposible. Para dominar la mente de otra persona y causar mal al enemigo. Asegura prosperidad en los negocios.",
  },
  {
    name: "Tabaco",
    description:
      "Es una vela de vudú en la que se agrega una mezcla de hierbas al tabaco. Se utiliza para ganar casos inquebrantables en la corte y para mantenerse en la mente de otro.",
  },
  {
    name: "Tijera",
    description:
      "Vela en forma de tijera para cortar la envidia, las malas influencias, para apartar a aquellas personas que siempre nos quieren ver derrotados, amargados destruidos, sin éxito en la vida. La Vela Tijera nos protegerá de todas estas malas vibraciones, dándonos seguridad de que todo va a resultar a la perfección.",
  },
  {
    name: "Ubanda",
    description:
      "(Blanca y Negra) Los santos negros vigilarán su dicha. Para conquistar a un hombre desdeñoso y triunfar sobre los rivales. Para no ser violada. Para saber si su marido es fiel. Su llama es un infalible talismán para hacerse amar.",
  },
  {
    name: "Vela de la Salud",
    description:
      "El color de esta vela es blanco. Se enciende junto con una Vela Sapo para ayudar a recuperar o conservar la salud.",
  },
  {
    name: "Virgen María",
    description:
      "Protectora personal y salvadora de los pecados que le atormentan.",
  },
  {
    name: "Virgen de Lourdes",
    description:
      "Protege su hogar, Su familia y en los estudios ilumina para prosperar.",
  },
  {
    name: "Virgen del Carmen",
    description:
      "Libra de adversidades y los peligros, protege la familia, une en felicidad a todos los hijos y familiares.",
  },
  {
    name: "Velón de los Siete Días",
    description:
      "Este velón tiene la propiedad de permanecer encendido durante siete días con todas las implicancias que tiene este número y en los más variados colores, se adaptan a cualquier pedido que deseamos realizar.",
  },
  {
    name: "Ven a mí",
    description:
      "Esta vela viene en rojo. Se utiliza para traer una persona hacia uno. Algunas personas encienden esta vela con otra para atraer el dinero o la suerte rápida, si es eso lo que la persona quiere que le llegue.",
  },
];
