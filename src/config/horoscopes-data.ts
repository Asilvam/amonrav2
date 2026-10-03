// Configuración y catálogo integral de Horóscopos y Zodíacos Comparados
// Migración 100% de la tradición astrológica histórica de Amonra Chile y Oráculos.cl
// Incluye 4 tradiciones canónicas: Occidental, Árabe, Chino y Maya.

export interface WesternSign {
  id: string;
  name: string;
  number: string;
  dates: string;
  element: "Fuego" | "Tierra" | "Aire" | "Agua";
  modality: "Cardinal" | "Fijo" | "Mutable";
  polarity: string;
  rulingPlanet: string;
  image: string;
  representation: string;
  symbolism: string;
  mythology: string;
  dignities: string;
  nature: string;
  fundamentalTraits: string;
  positiveQualities: string[];
  shadowQualities: string[];
  anatomyRuled: string;
  vocations: string;
  places: string;
  psychology: string;
}

export interface WesternElement {
  id: "fuego" | "tierra" | "aire" | "agua";
  name: string;
  signs: string[];
  description: string;
}

export interface ArabWeapon {
  id: string;
  name: string;
  weaponType: "Arma Corta" | "Arma Mediana" | "Arma Larga";
  dates: string;
  color: string;
  rulingPlanet: string;
  westernSignAffinity: string;
  chineseSignAffinity: string;
  rulingMetal: string;
  personality: string;
  workLife: string;
  loveAndRelationships: string;
  image: string;
}

export interface ChineseAnimal {
  id: string;
  animal: string;
  earthBranch: string;
  fixedSeason: string;
  direction: string;
  hours: string;
  fixedElement: string;
  polarity: "Yin" | "Yang";
  quote: string;
  archetypalTitle: string;
  description: string;
  socialAndWorkLife: string;
  relationships: string;
  fullText: string;
  image: string;
}

export interface WuXingElement {
  id: "madera" | "fuego" | "tierra" | "metal" | "agua";
  name: string;
  associatedPlanet: string;
  season: string;
  direction: string;
  characteristics: string;
  description: string;
}

export interface MayanSign {
  id: string;
  moonNumber: number;
  indigenousName: string;
  animalName: string;
  dates: string;
  personality: string;
  genesisMayaStage: string;
  cosmicSpiralTurn: string;
  image: string;
}

export interface MayanSolarSeal {
  id: string;
  number: number;
  name: string;
  indigenousName: string;
  description: string;
  shadow: string;
}

// ---------------------------------------------------------------------------
// 1. ZODÍACO SOLAR OCCIDENTAL
// ---------------------------------------------------------------------------

export const westernIntro = {
  title: "Zodíaco Solar Occidental y Triplicidades Elementales",
  quote: {
    text: "En astronomía y astrología tradicional, el Zodíaco (del griego zoodiakos kyklos, 'rueda de los animales') es la banda de la esfera celeste de 18 grados de ancho centrada en la eclíptica.",
    source: "Portal Amonra Chile — Astronomía y Sabiduría Esotérica",
  },
  eclipticDescription:
    "Esta banda celeste se divide exactamente en 12 áreas iguales de 30 grados de longitud eclíptica llamadas 'signos zodiacales', tomando como referencia cardinal el punto vernal o punto Aries (la intersección entre la eclíptica y el ecuador celeste). Cada signo canaliza arquetípicamente una combinación única de polaridad (positiva/negativa), modalidad de manifestación (cardinal, fija o mutable) y triplicidad elemental (fuego, tierra, aire o agua).",
};

export const westernElements: WesternElement[] = [
  {
    id: "fuego",
    name: "Fuego",
    signs: ["Aries", "Leo", "Sagitario"],
    description:
      "Los signos de fuego tienden a ser apasionados, dinámicos y temperamentales. Se enojan fácilmente, pero también perdonan con la misma facilidad. Son aventureros que poseen una inmensa energía. Son muy fuertes físicamente y son una fuente de inspiración para otros. Las personas bajo los signos de fuego son inteligentes, conscientes de sí mismos, creativos e idealistas, siempre listos para la acción.",
  },
  {
    id: "tierra",
    name: "Tierra",
    signs: ["Tauro", "Virgo", "Capricornio"],
    description:
      "Los signos de tierra son los que tienen los pies bien puestos en la tierra y los que nos ayudan a hacer lo mismo. Suelen ser conservadores y realistas, pero también pueden llegar a ser muy emocionales. Aman el lujo y los bienes materiales. Son prácticos, leales, estables y siempre están ahí para sus seres queridos durante los momentos difíciles.",
  },
  {
    id: "aire",
    name: "Aire",
    signs: ["Géminis", "Libra", "Acuario"],
    description:
      "Los signos de aire son personas que aman comunicarse y entablar relaciones con otras personas. Son pensadores, amigables, intelectuales, comunicativos y analíticos. Aman las discusiones filosóficas, las reuniones sociales y los buenos libros. Disfrutan de dar consejos, pero pueden llegar a ser muy superficiales.",
  },
  {
    id: "agua",
    name: "Agua",
    signs: ["Cáncer", "Escorpio", "Piscis"],
    description:
      "Los signos del agua son personas excepcionalmente emocionales y ultra sensibles. Son sumamente intuitivos y pueden ser tan misteriosos como el mismo océano. Los signos del agua tienen una excelente memoria y aman las conversaciones profundas y la intimidad. Se critican a sí mismos de manera abierta y siempre están ahí para brindar apoyo a sus seres queridos.",
  },
];

export const westernSigns: WesternSign[] = [
  {
    id: "aries",
    name: "Aries",
    number: "Primer Signo Zodiacal",
    dates: "21 de Marzo al 20 de Abril",
    element: "Fuego",
    modality: "Cardinal",
    polarity: "Positiva (Yang / Masculina)",
    rulingPlanet: "Marte",
    image: "signo-aries.jpg",
    representation: "Un Carnero; signo animal.",
    symbolism:
      "El símbolo nos recuerda los cuerpos o testuz de un carnero, con los que arremete evidenciando así agresividad, virilidad y valor. Aries se identifica con la fuerza de la simiente que aflora a la tierra surgiendo enhiesta en la primavera del hemisferio norte.",
    mythology:
      "El conocimiento de este signo data del siglo XXX a. C. y forma parte del grupo más antiguo juntamente con Tauro, Leo, Escorpio, Sagitario y Capricornio. Ya en la época de los Caldeos se le conoció como el primer signo del zodiaco, considerándose que el año comenzaba entre los meses de Marzo y Abril, con la primera luna nueva de Aries. Cuando Frixo fue acusado erróneamente de haber raptado a Biandice, y por lo tanto condenado a muerte, pudo escapar a lomos de un carnero así pudo salvar su vida y luego ofrendo n sacrificio el carnero a Zeus, el cual puso a este en la faja celeste del firmamento inmortalizándolo. Luego de transcurrido algunos años, Jasón, héroe de la mitología griega, hijo de Esón rey de Iolocos, organizo una expedición a la Cólquida, comarca de Asia Menor, en busca del vellocino de oro, al que finalmente capturó. Según ciertos investigadores ARIES en griego significa la fuerza de la cabeza.",
    dignities:
      "Regente: Marte; Exaltación: del Sol; Destierro: de Venus; Caída: de Saturno Afín con la 1° Casa.",
    nature:
      "De Fuego; Cardinal; masculino; Positivo; Diurno; Caliente; seco; Ardoroso y Combativo. Características Fundamentales: El potencial que lleva a la necesidad de actuar; de darse a conocer: la autoridad; la dirección; la energía; el entusiasmo; el espíritu constructivo; el comienzo; la autoafirmación; la responsabilidad; el impuso; la voluntad de realizar; la aspiración; la conciencia y la actividad.",
    fundamentalTraits:
      "El potencial que lleva a la necesidad de actuar; de darse a conocer: la autoridad; la dirección; la energía; el entusiasmo; el espíritu constructivo; el comienzo; la autoafirmación; la responsabilidad; el impuso; la voluntad de realizar; la aspiración; la conciencia y la actividad.",
    positiveQualities: [
      "Energía",
      "Valor",
      "Entusiasmo",
      "Audacia",
      "Apasionamiento",
      "Exuberancia",
      "Responsabilidad",
      "Decisión",
      "Ejecución",
      "Ingenio",
      "Emprendedores",
      "Pioneros",
      "Confiables",
      "Precisos",
      "Independientes",
      "Imaginativos",
      "de ayuda al prójimo",
    ],
    shadowQualities: [
      "Apresurados",
      "exagerados",
      "precipitados",
      "violentos",
      "Impulsivos",
      "temerarios",
      "excitables",
      "bruscos",
      "irascibles",
      "coléricos",
      "impacientes",
      "inquietos",
      "agresivos",
      "competitivos",
      "hirientes",
      "intolerantes",
      "dictatoriales",
      "irritables",
      "desobedientes",
      "ingobernables",
      "susceptibles",
      "inconstantes",
      "poca perseverancia",
      "intromisión en asuntos ajenos",
      "pendencieros",
      "vengativos",
      "cínicos",
      "envidiosos",
      "burlones",
      "caóticos",
      "desorganizados",
      "explosivos",
      "disruptivos",
      "caprichosos",
      "demagogos",
      "presuntuosos",
      "superficiales",
      "impresionista",
      "exhibicionistas",
      "fanfarrones",
      "materialistas",
    ],
    anatomyRuled:
      "La distribución general de la energía mental o física, el control cerebral para la función del cuerpo, carneo y cara, con sus huesos y músculos, ojos (especialmente el derecho),cerebro y su mandíbula superior, dientes y sentidos, con excepción de la nariz y el oído. Gran actividad sexual, la vista y la ceguera, heridas y quemaduras, dolores de cabeza, posibilidad de operaciones, neuralgias, congestión cerebral, vértigo, epilepsia, fiebres altas, afecciones a los ojos, erupciones especialmente en la cabeza y en la cara, inflaciones, insomnio, apoplejía, heridas accidentes y enfermedades violentas en general, hemorragias, anemia, y por ser signo opuesto a Libra también con tendencia a problemas renales y de la piel, escarlatina, sarampión, viruela.",
    vocations:
      "Ingenieros, militares, exploradores, peluqueros, atletas, cirujanos, talladores de piedras preciosas, guardias, bomberos, policías, gendarmes, dentistas, veterinarios, mecánicos, comerciantes, instrumentistas, empleados públicos, abogados, críticos y polemistas, metalúrgicos, ferroviarios, ferreteros, masajistas, y todas las ocupaciones que involucren elementos cortantes armas de fuego, explosivos venenos y ácidos. Jefes y directivos. No les agradan las tareas rutinarias.",
    places:
      "Talleres metalúrgicos, arsenales y salas de armas, fundiciones, herrerías estadios, campos arados, lugares arenosos y montañosos, hornos, estufas, techos, entradas y porches.",
    psychology:
      "Los nativos de Aries, en modo alguno pasan desapercibidos, tanta es la energía y la capacidad motriz de que hacen gala, siendo su nota distintiva el no arredrarse jamás ante ningún contratiempo. Son frontales, francos, sinceros, muy independientes; ellos son sus propios jefes y proceden según los dictados de su emancipado espíritu, pero aunque autonomistas acérrimos, no dejan de ser generosos. Por su carácter levantisco y agresivo, no son pocos los enemigos que suelen cosechar, ya que sus incontrolables arrebatos de cólera, aunque no son duraderos, molestan y mortifican a los de su entorno; así también es justo destacar, su gran corazón y su buena disposición para sacar la cara por el mas débil, lo que evidencia un enorme caudal de sentimientos positivos. Los nacidos bajo este signo saben hacer excelentes hombres de negocios, ingenieros, empresarios, son los llamados a fundar ciudades; todo tipo de empresa nueva, seguramente lo contará en su lista de pioneros, pues por su manera de ser, son siempre los que mandan y ordenan, pues no han nacido para obedecer, atendiendo solamente a su propio impulso. Tal como el hombre, la mujer ariana ama más con los sentidos que con el corazón, atiende mas las razones de su intelecto que las de su sentimentalismo, le agrada el estudio y tiende a pertenecer a movimientos feministas; pero si es casada se convertirá con toda seguridad en una laboriosa y solícita madre. La mujer de Aries no dará nunca cabida a la indigencia en su hogar. Estas personas además poseen una muy pronunciada tendencia egoísta y asocial, es por esto que su individualidad es prioridad uno y los lleva a esgrimir la defensa de su libertad e independencia por sobre cualquier otra cosa; son indomables, despóticos y dictatoriales, no se amilanan siquiera ante la violencia y la destrucción. Son orgullosos y temerariamente valerosos, cualidades que en los seres menos evolucionados en este signo, se manifiestan con una total falta de mesura, así como con riñas y pendencias. Aunque su espíritu tienda a elevarse y a demostrar su apasionamiento y su iniciativa, lo hará siempre de manera un tanto prepotente; esto en individuos superiores, pues los inferiores se mostrarán tiránicos y destructivos. Por lo antes expuesto, podemos prevenir a estas personas para que canalicen sus ímpetus aventureros tratando de afirmarse y fijar sus miras en un derrotero definido, para no avanzar a los tumbos en una fatigosa lucha, la que no siempre los conduce a la claridad y al bienestar, por tanto deberán sacrificar sus impulsos para poder hallar la verdadera felicidad. Decanatos: Primer Decanato: Del 21 al 31 de Marzo. Estos nativo son los que evidencian mayor violencia, los que reciben mas frontalmente la incidencia del planeta Marte, que es el regente del signo. Son agresivos, varoniles y pioneros. Segundo Decanato: Del 1 al 10 de Abril. Son los más generosos por estar influenciados con el sol, sin que ellos les mengûe su energía y resolución. Son orgullosos, extravagantes y ejecutivos. Tercer Decanato: Del 11 al20 de Abril. Como están bajo la influencia de Júpiter, son los más suaves y sentimentales. Se muestran además apasionados y chispeantes. Asociaciones Significativas: Número 13; Arcano Mayor XIII El Segador; Letra M. Plantas y Flores: Las espinosas y de sabor picante; pimienta, mostaza, tabaco, jengibre, áloe, ruibarbo, cáñamo, bardana, cardo, ajo, cebolla, ortiga, ajíes; las flores rojas; dalia, peonia, amapola, clavel, anémonas, retama, madreselvas y malvaloca. Colores Afines: Rojo vivo y toda su gama en matices llameantes y discordantes. Minerales y Metales: Hierro, acero, la pirita, el minio, sardónica. Gemas: Amatista, diamante, rubí, jaspe. Animales: Los animales carniceros, lobo, jabalíes, aves de rapiña en general. El carnero y el cordero.",
  },
  {
    id: "tauro",
    name: "Tauro",
    number: "Segundo Signo Zodiacal",
    dates: "21 de Abril al 20 de Mayo",
    element: "Tierra",
    modality: "Fijo",
    polarity: "Negativa (Yin / Femenina)",
    rulingPlanet: "Venus",
    image: "signo-tauro.jpg",
    representation: "Un Toro o Buey, su cabeza y su cornamenta; signo animal.",
    symbolism:
      "Nos recuerda la cornamenta de un toro, su avasalladora fuerza para el logro de cualquier empresa que se proponga, pero también Tauro, como ningún otro, tiende plena conciencia de sus limitaciones. En el calendario acadio, le asignan el segundo lugar, luego de Aries. Tauro fue siempre el símbolo de la fuerza y la potencia.",
    mythology:
      "Este es uno de los signos de más antigua data, así es como existen referencias de él desde varios milenios antes de Cristo. Este fue el famoso Toro Blanco que cortejó a Europa, paseándola a grupas, por supuesto que dicho animal no era otro que Zeus, Dios griego del Olimpo, adorado como Dios de la lluvia, del rayo y del trueno, que estaba disfrazado, y el cual al tomar nuevamente su figura habitual, situó al toro en el cielo. Tauro fue bautizado como el Toro Guía y muchos investigadores aseguraban que veían la cruz en sus cuernos, rechazando al dragón.",
    dignities:
      "Regente: Venus; Exaltación: de la Luna; Destierro: de Marte; Caída: de Urano; Afín con la 2° casa.",
    nature:
      "De Tierra; Fijo; Femenino; Negativo; Nocturno; Frío; Seco; Melancólico y Obstinado. Características Fundamentales: Fuerza de voluntad, que aunque pasiva puede ser firme e inflexible; paciencia, interiorización y materialismo. Las cosas fijas e imperecederas. Consolidación de la simiente.",
    fundamentalTraits:
      "Fuerza de voluntad, que aunque pasiva puede ser firme e inflexible; paciencia, interiorización y materialismo. Las cosas fijas e imperecederas. Consolidación de la simiente.",
    positiveQualities: [
      "Tenacidad",
      "concentración",
      "perseverantes",
      "conservadores",
      "firmes",
      "prácticos",
      "directos",
      "metódicos",
      "planificadores",
      "ahorrativos",
      "fieles",
      "sensuales",
      "constitución física fuerte",
      "filántropos",
      "tiernos",
      "apacibles",
      "laboriosos",
      "profundos",
      "económicos",
      "retentivos",
      "discriminatorios",
      "pacientes",
      "persistentes",
      "reservados",
      "calmos",
      "mesurados",
      "honestos",
      "circunspectos",
    ],
    shadowQualities: [
      "Tercos",
      "fanáticos",
      "autoritarios",
      "irónicos",
      "celosos",
      "violentos",
      "brutales",
      "materialistas",
      "orgullosos",
      "maliciosos",
      "autoindulgentes",
      "avarientos",
      "torpes",
      "eróticos",
      "bruscos",
      "apresurados en el juicio",
      "testarudos y de enojos tumultuosos",
    ],
    anatomyRuled:
      "El poder recuperativo, el cuello, la nuca, el cerebelo, las vértebras cervicales superiores, oídos, garganta, laringe, paladar, glándula tiroides, cuerdas vocales, mandíbula inferior y sus dientes, difteria, bocio, inflamaciones glandulares en el cuello, apoplejía, laringitis, pólipos, estrangulaciones, anginas, amigdalitis, gangrena, sangre impura, obesidad, circulación venosa, infecciones catarrales, sordera.",
    vocations:
      "Los negocios y ocupaciones relacionadas con el arte y la belleza. Artistas en general, actores, escultores, bailarines, músicos y en particular cantantes, diseñadores, joyeros, geólogos, agricultores, financistas, publicistas, cajeros, ganaderos, floricultores, jardineros, ingenieros agrícolas, granjeros, reposteros, y banqueros. Tareas rutinarias.",
    places:
      "Arboledas, bosques, jardines, campos de pasturas, establos, silos, galpones donde se guardan útiles y herramientas para el trabajo de la tierra, museos, despensas y cocinas, salas de conciertos.",
    psychology:
      "Estos nativos son exactos, pacientes, perseverantes, y aunque también son un tanto lentos para actuar, llegan al lugar deseado toda vez que se lo proponen, gracias a su gran perseverancia y firmeza. No poseen gran brillantez ni agilidad mental, pero se desenvuelven en círculos seguros y saben muy bien lo que persiguen y cómo han de lograrlo. Su bondad de ánimo no es óbice para cuando se enojan, su furia puede volverse devastadora y temible si reciben alguna seria afrenta, jamás perdonaran la ofensa y mucho menos aún si se trata de una traición, por lo cual aquel que lo defraude no volverá a hacerlo por segunda vez, pues su voluntad es inquebrantable y el ser algo rencorosos es quizá su mayor defecto. Son estables y prácticos y podrán tener éxito en relación con tareas comerciales y económicas, pero preferentemente con las actividades que tengan que ver con la propiedad y la tierra. Por su perseverancia y concentración con el gran poder de miras en una sola dirección que poseen, sean cuales fueren las tareas que desempeñen, es seguro que con ello sabrán labrarse una sólida posición a través del tiempo. La mujer taurina es excelente madre, abnegada y bondadosa; sabrá cuidar y hasta acrecentar con celo los bienes del compañero, pero será también sumamente celosa. Estas nativas son al mismo tiempo tan conservadoras que desecharán cualquier idea de avanzada, pues no les agradan los cambios. Encontramos entre ellas una gran cantidad de artistas, dedicadas especialmente a la música, el canto y la danza. En relación con la salud, deben cuidar la garganta y protegerse de las infecciones catarrales de las vías respiratorias superiores. Se trata de seres en los que predomina el temperamento bilioso y en los que se puede confiar por entero, pues saben muy bien guardar un secreto y son fieles hasta el final, además de firmes y consecuentes. Debemos advertir sólo para su beneficio, que procuren ser menos obstinados y tercos, pues la firmeza de que hacen gala, es una virtud, siempre que no desborde los límites de la prudencia. Si tratan de corregirse al respecto, es seguro que lograrán su cometido, gracias a su gran voluntad y presencia de ánimo y podrán alcanzar así, la tan ansiada felicidad para ellos como para los que los rodean. Decanatos: Primer Decanato: Nacidos entre el 21 y 30 de Abril. Son regidos por Venus y tienen una innata tendencia artística; aman la vida en forma refinada y voluptuosa. Segundo Decanato: Nacidos entre el 1 y 10 de Mayo. Reciben la influencia de Mercurio; son menos tercos y más dúctiles; tienen un espíritu ingenioso y cierto talento inventivo, sin dejar de ser sumamente prácticos y realistas. Tercer Decanato: Nacidos entre el 11 y 20 de Mayo. Estos son los más obstinados, conservadores y pacientes; también son fatalistas por la influencia que reciben de Saturno. Asociaciones Significativas: Número14; Arcano Mayor XIV La Alquimia; Letra N. Plantas y Flores: Margarita, muguet, diente de león, mirto, lilas, lino, musgo, calabazas, espinacas. Pino, olivar, datilero, arrayán, llantén. Colores Afines: Amarillo oscuro, verde oscuro derivados. Minerales y Metales: Cobre y aleaciones, como ser el bronce. Gemas: Esmeralda, turquesa, ágata musgosa, alabastro, cornalina, jade, coral blanco. Animales: Vaca, toro, buey, búfalo, tórtola, paloma, tortuga.",
  },
  {
    id: "geminis",
    name: "Géminis",
    number: "Tercer Signo Zodiacal",
    dates: "21 de Mayo al 21 de Junio",
    element: "Aire",
    modality: "Mutable",
    polarity: "Positiva (Yang / Masculina)",
    rulingPlanet: "Mercurio",
    image: "signo-geminis.jpg",
    representation: "Los gemelos o mellizos.",
    symbolism:
      "Nos recuerda a los gemelos de Leda (esposa de Tíndaro) y su amor fraterno, también a Rómulo y Remo; la intelectualidad por excelencia, el sentido asociativo, los procesos mentales, el razonamiento, la polaridad.",
    mythology:
      "En el antiguo Egipto sele conoció como las dos estrellas, refiriéndose a Cástor y Pólux, que son las más brillantes del firmamento. También fue representado por dos cabritos y al respecto, leyendas dignas de crédito, dicen que a Géminis le corresponde el tercer lugar zodiacal, puesto que las cabras tienen crías después de las vacas (Tauro) dando a luz por lo general de a dos cabritos a la vez. Otros afirman que los gemelos deben su nombre a la circunstancia que hace que el Sol se demore muchas veces dos días más en este signo con relación a los otros.",
    dignities: "Regente: Mercurio; Destierro: de Júpiter; Afín con la 3° Casa.",
    nature:
      "de Aire; Común; Masculino; Positivo; Diurno; Caliente; Seco/Húmedo; Bicorpóreo; Convertible. Características Fundamentales: Voluble, inconstante, tornadizo, la facultad de asociación, el intelecto vivo, la mente consciente, los escritos, las relaciones, los viajes cortos, todo lo nuevo y cambiante. Se asocia con todo aquello que tenga que ver con los rápidos reflejos, la capacidad idiomática y mental.",
    fundamentalTraits:
      "Voluble, inconstante, tornadizo, la facultad de asociación, el intelecto vivo, la mente consciente, los escritos, las relaciones, los viajes cortos, todo lo nuevo y cambiante. Se asocia con todo aquello que tenga que ver con los rápidos reflejos, la capacidad idiomática y mental.",
    positiveQualities: [
      "Extravertidos",
      "generosos",
      "asociables",
      "adaptables",
      "afables",
      "filántropos",
      "simpáticos",
      "versátiles",
      "dúctiles",
      "críticos y especulativos",
      "sensitivos",
      "serviciales",
      "amigables",
      "elocuentes",
      "gustan de los cambios y los viajes",
      "no les agrada demasiado la vida doméstica",
      "intelectuales",
      "analíticos",
      "ingeniosos",
      "estudiosos",
      "literarios",
      "comunicativos",
      "adaptables",
      "con capacidad para toda carrera que requiera trabajo manual",
    ],
    shadowQualities: [
      "Inestables",
      "nerviosos",
      "inconstantes",
      "precipitados",
      "excéntricos",
      "contradictorios",
      "indiferentes",
      "cambiantes",
      "crédulos",
      "ingratos",
      "falsos",
      "mentirosos",
      "verborrágicos",
      "intrigantes",
      "frívolos",
      "superficiales",
      "indecisos",
      "infieles",
      "imprevisibles",
      "charlatanes",
    ],
    anatomyRuled:
      "El aire y su circulación en el cuerpo; la distribución de los elementos reconstructivos; oxigenación de la sangre; perturbaciones del sistema respiratorio y nervioso; brazos, manos, hombros, espalda, pulmones, glándula timus, bronquios. Bronquitis, pulmonías, neumonías, pleuresías, constipación, asma, enfermedades nerviosas, anemias, sangre impura.",
    vocations:
      "Escritores, periodistas, reporteros, escribanos, traductores, conferencistas, comisionistas, vendedores, agentes, viajantes, carteros, editores, profesores, lingüistas, mensajeros, dactilógrafos, secretarios, impresores, bibliotecarios.",
    places:
      "Escribanías, secretarías, aeropuertos, ascensores, correos, estaciones ferroviarias, librerías, bibliotecas, escuelas, imprentas.",
    psychology:
      "Son seres maravillosamente extravertidos, simpáticos, adaptables a cualquier circunstancia que la vida les ponga por delante y están dotados con una inteligencia con la que pueden intentar todo camino intelectual, en la seguridad de salir airosos. Anivel de conocimientos, les interesa todo lo que pueda aportar experiencias y abrir nuevos senderos. Se sienten muy atraídos por la ciencia, el arte, la literatura y sin lugar a dudas que en cualquier disciplina de la cultura que abracen, resultarán vencedores, pues no hay ningún otro signo tan intelectual como éste de Géminis; pero por ser tan inconstantes, no siempre saben perseverar en una misma dirección, lo que a veces los suela alejar del éxito. Saben hacer excelentes periodistas, ya que estos profesionales deben hacer gala de rapidez mental e imaginación, cualidades que a ellos les sobran. Poseen una innata facultad para retener y comprender con extraordinaria claridad todo lo que leen y aprenden, supliendo ampliamente su falta de perseverancia con su despierta y rápida inteligencia. Sus ideas surgen a raudales y sus acciones saben dispersarse en mil distintas direcciones; por esto su nota distintiva es la dualidad y la convertibilidad. La mujer geminiana, no es precisamente lo que podríamos clasificar como la imagen de la mujer hogareña; por su mente brillante y su ductilidad, está más inclinada a las artes, de manera particular a la literatura y a no ocuparse de los pequeños y domésticos problemas cotidianos. Resulta en cambio una amena y agradable compañía para un artista, un hombre de negocios y un viajero, y en particular para un periodista, al cual estará siempre dispuesta a seguir y secundar en todas sus experiencias. Los nacidos en este signo, responden a un temperamento nervioso, por lo tanto deberán cuidarse de todo tipo de enfermedades nerviosas y también de las que pueden afectar su aparato respiratorio. Por todo lo expuesto, debemos entender que su defecto mayor está dado en su inestabilidad e inconsecuencia; esta aguda falla es inherente a su manera de ser y por lo tanto difícil de dominar, pero no imposible; deberán así, propender a corregir este defecto. Si estos nativos fuesen más persistentes en sus propósitos y en su accionar y teniendo en cuenta la capacidad intelectual de que disponen, seguramente podrían llegar mucho más alto que los de otros signos, por lo que sugerimos traten de ser más firmes, profundos y perseverantes, para lograr una plena realización. Decanatos: Primer Decanato: Nacidos entre el 21 y el 31 de Mayo. Son los que están más inclinados a la literatura y la crítica; tienen la directa influencia de Mercurio. Segundo Decanato: Nacidos entre el 1 y el 10 de Junio. Influenciados por Venus, son de naturaleza artística y los más volubles e irresolutos. Tercer Decanato: Nacidos entre el 11 y el 21 de Junio. Son los más circunspectos e intelectuales, los de carácter más firme. Están regidos por Saturno. Asociaciones Significativas: Número 17; Arcano Mayor XVII la Estrella; Letras F, PH, P. Plantas y Flores: Jazmín del aire, verbena, madreselvas, granza, gramilla, ligustro, laurel, avellano. Colores Afines: Amarillo limón, gris, violeta, azul. Minerales y Metales: Mercurio, mármol. Gemas: Berilo, granate, topacio, aguamarina, ágata, crisólito. Animales : Pájaros, ardillas, zorro, ratón, conejo.",
  },
  {
    id: "cancer",
    name: "Cáncer",
    number: "Cuarto Signo Zodiacal",
    dates: "22 de Junio al 22 de Julio",
    element: "Agua",
    modality: "Cardinal",
    polarity: "Negativa (Yin / Femenina)",
    rulingPlanet: "Luna",
    image: "signo-cancer.jpg",
    representation:
      "El Cangrejo o el Adorado Escarabajo de los egipcios; signo animal.",
    symbolism:
      "Nos recuerda a las célula tenazas del cangrejo, la generadora, señalando así el signo pinzas o maternal por excelencia. El cangrejo nos indica la capacidad de transformación. Los acadios designaban a Cáncer como el recolector de la semilla, pues creían que el cangrejo representaba un cesto henchido de frutos.",
    mythology:
      "La existencia de Cáncer, como signo zodiacal, es bastante posterior a Aries, Tauro, Escorpio, Sagitario y Capricornio. En tiempos remotos se lo dibujaba como un escarabajo y esto era el símbolo del alma, pues entonces la humanidad era mucho más alma que cuerpo. También fue conocido como las estrellas del agua; así como vemos, su predominio sobre el líquido elemento, viene de muy antigua data. Una leyenda griega cuenta que el cangrejo fue colocado en el firmamento como recompensa por haber detenido con sus pinzas a una ninfa perseguida por Zeus.",
    dignities:
      "Regente: La Luna; Exaltación: de Júpiter; Destierro: de Saturno; Caída: de Marte; Afín con la 4° Casa.",
    nature:
      "de Agua; Cardinal; Femenino; Negativo; Nocturno; Frío; Húmedo; Sensible. Características Fundamentales: El hogar, la madre, la gran capacidad de imaginación y receptividad, la fecundación, la energía que alimenta y da poder a la semilla, la pasividad, la impresionabilidad.",
    fundamentalTraits:
      "El hogar, la madre, la gran capacidad de imaginación y receptividad, la fecundación, la energía que alimenta y da poder a la semilla, la pasividad, la impresionabilidad.",
    positiveQualities: [
      "Gran sensibilidad",
      "emotividad",
      "tenacidad",
      "imaginación",
      "romanticismo",
      "hogareños",
      "reservados",
      "honestos",
      "humanitarios",
      "planificadores",
      "memoriosos",
      "tiernos",
      "bondadosos",
      "artísticos",
      "místicos",
      "maternales",
      "melancólicos",
      "religiosos",
      "intuitivos",
      "receptivos",
      "psíquicos",
      "soñadores",
      "expresivos",
      "cautos",
      "emotivos",
      "sentimentales",
    ],
    shadowQualities: [
      "Melodramáticos",
      "muy introvertidos",
      "caprichosos",
      "rencorosos",
      "imprevisibles",
      "impresionables",
      "susceptibles",
      "cambiantes",
      "impacientes",
      "tímidos",
      "lunáticos",
      "depresivos",
      "inquietos",
      "haraganes",
      "autoindulgentes",
      "supersticiosos",
      "afectados",
      "sensuales",
      "contradictorios",
    ],
    anatomyRuled:
      "La nutrición, acumulación, quimificación, propensión a la astucia y maldad, lo que lo expone a perturbaciones que pueden agotar su vitalidad. Dolencias estomacales, flatulencias, hidropesías, resfríos, bronquitis, tumores, molestias ováricas, riñones, escrofulosis, esclerosis, tensión nerviosa, estómago, pecho, senos, axilas, tórax, páncreas, diafragma, matriz, parte superior del hígado.",
    vocations:
      "Novelistas, navegantes, poetas, historiadores, dibujantes, músicos, anticuarios, médiums, niñeras, médicos, obstetras, parteras, gastronómicos, encuadernadores, cantantes, panaderos, cocineros, jardineros, meteorólogos, guardabosques, almaceneros, todo lo que tenga algo que ver con fluidos y líquidos.",
    places:
      "Canales, lagos, arroyos, ríos, mares, puertos, depósitos de petróleos, casas de cambio, maternidades, casas cuna, restaurantes, cocinas, dormitorios, casas.",
    psychology:
      "Los nativos de este signo son introvertidos, tímidos y cambiantes, lo que no les resta en modo alguno, fuerza de carácter, la cual está dada por la gran tenacidad y persistencia que ponen de manifiesto para el logro de sus fines. Como quiera que la Luna, su regente, les da sus características, ellos poseen una sensibilidad muy desarrollada y saben ser presa de fuertes desniveles de carácter, pasando sin causa aparente de la más completa depresión a la más fuerte exaltación. Estos estados de ánimo llegan a desorientarlos a ellos mismos, pero es que la gran sensibilidad con la que están dotados, ejerce su influencia absoluta sobre todo razonamiento lógico. Por otra parte, son conservadores y dados a rendir culto a su pasado y se adornan con una natural y exuberante imaginación; así también su memoria es inigualable, todo lo asimilan con increíble rapidez y ello los faculta para sobresalir en las disciplinas del arte, como novelistas y poetas. Quizá por su gran sensibilidad, responden mucho al medio ambiente que los rodea, lo que se puede constituir en lo más importante de su existencia. La mejor manera de llegar a estas personas, es por medio de la amabilidad y la delicadeza, la gente torpe y ruidosa les disgusta y se deprimen fácilmente ante cualquier situación desagradable. La mujer canceriana cuenta con las mejores cualidades maternales, debido a su espíritu protector y son excelentes esposas, hogareñas pero algo quisquillosas y tal como el hombre, ella también está expuesta a los fáciles cambios de humor y a los caprichos sin razón. Como profesionales, suelen ser insustituibles institutrices y enfermeras. A estas personas regidas por Cáncer, debemos sugerirles que traten de fijar algo su carácter y de controlar su excesiva sensibilidad para evitarse y evitar penurias a los demás. Sería conveniente también, no dejar volar tanto su imaginación y poner en cierta medida freno a sus sueños y fantasías, para poder aprovechar a favor propio y de los suyos todo el caudal de buenas cualidades que sin duda alienta su espíritu. Decanatos: Primer Decanato: Del 22 al 30 de Junio. Estos nativos están influenciados por la Luna, son muy soñadores, aventureros y ambiciosos. Segundo Decanato: del 1 al 10 de Julio. Reciben influencia del agresivo Marte, son impulsivos y de una franqueza tal que puede llegar a ser ofensiva. Tercer Decanato: del 11 al 21 de Julio. El benefactor Júpiter les da su influencia. Son benevolentes, religiosos y humanitarios. Asociaciones Significativas: Número 18; Arcano Mayor XVIII La Luna; Letras Sh Ts Tz. Plantas y Flores: Lirios acuáticos, juncos, camalote, lechuga, pepino, melones, calabaza, toronjil. Colores Afines: Verde claro, azul y violeta pálido. Minerales y Metales: Plata, cal, calcedonia, en general piedras blancas y lisas. Gemas: Perla, aguamarina, marcasita, esmeralda, ópalo, ónix negro, cristal. Animales: Cisne, ibis, cangrejo, escarabajo, rana, caracol, foca.",
  },
  {
    id: "leo",
    name: "Leo",
    number: "Quinto Signo Zodiacal",
    dates: "23 de Julio al 22 de Agosto",
    element: "Fuego",
    modality: "Fijo",
    polarity: "Positiva (Yang / Masculina)",
    rulingPlanet: "Sol",
    image: "signo-leo.jpg",
    representation: "El León y su majestuosidad; signo animal.",
    symbolism:
      "La cabeza del León y su imponente melena; símbolo del fuego y de la energía solar. Su fuerza, su orgullo, su destreza; el hombre primitivo lucía aditamentos hechos con pieles; huesos; etc. De este animal, tratando de adquirir su valor y bravura.",
    mythology:
      "El nacimiento de Leo se remonta a la más lejana antigüedad, aunque es posterior a Aries, Tauro y Sagitario. Reza la mitología, que el León de Numea, que tenía su piel a prueba de hierro, bronce y piedra, estaba consagrado a Osiris y fue muerto por Hércules, el que perdió un dedo en la contienda. Quizá lo que hizo que los griegos vieran en Leo, un signo de linaje, fue que dos hermosos leones eran los encargados de llevar el Carro de Cibeles, Diosa de la Tierra, adorada en Anatolia. La ferocidad y fuerza de los leones es lo que nos recuerda asta constelación.",
    dignities:
      "Regente: El Sol; Exaltación: de Neptuno; Destierro: de Saturno; Afín con la 5° Casa.",
    nature:
      "de Fuego; Masculino, Positivo; Diurno; Caliente, Seco; Imperativo. Características Fundamentales: El despertar de la vida, la energía creadora, el poder de la voluntad, la capacidad de iluminar, los nobles sentimientos, la generosidad, la dignidad.",
    fundamentalTraits:
      "El despertar de la vida, la energía creadora, el poder de la voluntad, la capacidad de iluminar, los nobles sentimientos, la generosidad, la dignidad.",
    positiveQualities: [
      "Vitalidad",
      "optimismo",
      "responsabilidad",
      "honestidad",
      "honorabilidad",
      "nobleza",
      "generosidad",
      "fidelidad",
      "idealismo",
      "compasión",
      "simpatía",
      "previsión",
      "franqueza",
      "imperativos",
      "sintéticos",
      "prácticos",
      "dirigentes",
      "constantes",
      "audaces",
      "resueltos",
      "decididos",
      "solemnes",
      "dinámicos",
      "fuerte voluntad",
    ],
    shadowQualities: [
      "Orgullosos",
      "soberbios",
      "vanidosos",
      "ostentosos",
      "rencorosos",
      "fanáticos",
      "violentos",
      "susceptibles",
      "agresivos",
      "fanfarrones",
      "materialistas",
      "tiranos",
      "prepotentes",
      "vanos",
      "despóticos",
      "crueles",
      "infieles",
      "superestimación",
      "engreimiento",
      "ambiciosos",
      "desafiantes",
      "altaneros",
      "arrogantes",
      "ampulosos",
    ],
    anatomyRuled:
      "El corazón y la sangre, el sistema circulatorio, la espina dorsal y la medula espinal, la espalda; Palpitaciones, anginas de pecho, fiebres, meningitis, pleura, desvanecimientos.",
    vocations:
      "Ejecutivos, funcionarios públicos, prestamistas, industriales, jueces, capataces, militares, escritores, artistas, joyeros, orfebres, electricistas, atletas, gimnastas, exploradores, aventureros, magnates, músicos, caricaturistas, corredores de bolsa.",
    places:
      "Edificios públicos, iglesias, plazas, parques, bosques, asambleas, cortes, fundiciones, laboratorios químicos, destilerías de vidrios y cristales, Fábricas de explosivos, salas de juegos, panaderías.",
    psychology:
      "Leo es el signo del Sol, y como éste, sus nativos son orgullosos, soberbios e irradian una gran energía y vitalidad. Son generosos y paternales, aunque suelen volverse algo dictadores, tratando de imponerse más por la fuerza que por la razón. Su gran expansividad los sabe llevar a acometer empresas mucho más allá de sus posibilidades. Su impulso es irrefrenable, pero están dotados de una simpatía y un carisma tal, que hace que siempre salgan vencedores en cualquier circunstancia. Ellos se imponen por su gran personalidad y son tan activos e incansables trabajadores, que logran contagiar su entusiasmo a su alrededor, generando así una ilimitada confianza en quienes los secundan. En la amistad son fieles, afectuosos y protectores. Todas estas cualidades hacen del leonino una persona apta para dirigir, mandar, organizar, y no para ser mandada. Sin duda, deben ellos dedicar sus afanes a profesiones liberales o bien a ejercer altas jefaturas o grandes administraciones. La mujer de Leo, sabrá acompañar de igual a igual a su marido en toda empresa, y solamente requerirá que se la trate con altura y respeto, pues posee un alto grado de autoestimación, que muchas veces puede llegar a la soberbia, características que son comunes a ambos sexos de este signo. Así como vemos, los nacidos en este período, son serse nobles, extravertidos y ambiciosos, pero justo es señalar que poseen también algunos defectos que deberán tratar de corregir. El orgullo es el primero y de capital importancia, pues antes de tener que dar su brazo a torcer, están dispuestos a mantener una situación desfavorable; muchas veces acometen empresas demasiado complicadas para las que no están preparados y por no dar un paso atrás las llevan hasta sus últimas consecuencias. Su gran impulsividad es otro de sus peores defectos, ya que en más de una ocasión los llevan a situaciones embarazosas, de las que les cuesta mucho retroceder, justamente por su soberbia y su orgullo desmedido. Así podemos aseverar, que las palabras medida y límite, tendrían que ocupar un lugar muy destacado en estos nativos, pues aplicándolas se ahorrarán muchos sinsabores y dolores de cabeza. Decanatos: Primer Decanato: Nacidos entre el 22 y el 31 de Julio. Están regidos por el Sol y son amables y fieles, pero de cóleras muy violentas. En el amor son apasionados y ardientes. Segundo Decanato: Nacidos entre el 1 y el 10 de Agosto. Reciben la influencia directa de Júpiter, por lo que son expansivos, organizadores y con mucha confianza en sí mismos. Tercer Decanato: Nacidos entre el 11 y el 22 de Agosto. Responden a la influencia de Marte y son francos, sinceros, generosos, impulsivos, ardientes inflexibles. Asociaciones Significativas: Número 19; Arcano Mayor XIX El Sol; Letra Q. Plantas y Flores: Narciso, amapola, lirio, caléndula, lavanda, manzanilla, crisantemo, heliotropo, anís, eufasia, muérdago, pimpinela, perejil, menta, hinojo, girasol, roble, palmera, trigo. Colores Afines: Anaranjado claro, amarillo fuerte, rojo. Minerales y Metales: Oro y sus aleaciones. Gemas: Rubí, crisólito, diamante, jaspe, ámbar.males: León, águila, halcón, gallo, cuervo, tigre, gato, todos los animales felinos, pavo real.",
  },
  {
    id: "virgo",
    name: "Virgo",
    number: "Sexto Signo Zodiacal",
    dates: "23 de Agosto al 22 de Septiembre",
    element: "Tierra",
    modality: "Mutable",
    polarity: "Negativa (Yin / Femenina)",
    rulingPlanet: "Mercurio",
    image: "signo-virgo.jpg",
    representation:
      "La Santísima Virgen María. La Inmaculada Concepción. Signo Humano.",
    symbolism:
      "Simboliza la pureza, lo sin mácula, sin pecado. Los antiguos fenicios la denominaron Astarté (Istar) Diosa de los cielos, pero sucesivamente este signo estuvo representado por distintas figuras humanas, siempre femeninas; en el presente lo conocemos con la imagen de la Virgen María, aclarando que esto es solamente simbólico, ya que el nacimiento de este signo se produjo en épocas anteriores a la Virgen.",
    mythology:
      "Para algunos autores, la esterilidad de este signo está dada en que en ese período la tierra no brinda sus frutos (esto para el hemisferio norte), sino que marca la terminación de este proceso. Sostienen los griegos, que Erigone, hija de Icaro, fue puesta en la constelación de Virgo, perpetuando así su nombre. Según Hesíodo también fue llamada Astrea, Diosa de la Justicia y cuando terminó la época de oro, viéndose desafiada por los hombres, retornó disgustada al espacio celeste.",
    dignities:
      "Regente: Mercurio; Destierro: de Júpiter y Neptuno; Caída: de Venus; Afín con la 6° Casa.",
    nature:
      "de Tierra; Común; Femenino; Negativo; Nocturno; Frío; Seco; Realizador. Características Fundamentales: Discernimiento; gran poder de análisis; detallista, discriminativo, piadoso y dispuesto para ayudar; amplia capacidad de crítica; servicio y subordinación; practico.",
    fundamentalTraits:
      "Discernimiento; gran poder de análisis; detallista, discriminativo, piadoso y dispuesto para ayudar; amplia capacidad de crítica; servicio y subordinación; practico.",
    positiveQualities: [
      "Analistas",
      "metódicos",
      "detallistas",
      "planificadores",
      "raciocinio",
      "objetividad",
      "fidelidad",
      "lealtad",
      "prudencia",
      "previsión solidaridad",
      "bondadosos",
      "humanos",
      "servidores",
      "afectuosos",
      "tímidos",
      "castos",
      "domésticos",
      "modestos",
      "minuciosos",
      "realistas",
      "ingeniosos",
      "reservados",
      "intelectuales",
    ],
    shadowQualities: [
      "Intolerantes",
      "especulativos",
      "criticones",
      "utilitarios",
      "mezquinos",
      "egoístas",
      "hipocondríacos",
      "nerviosos",
      "agresivos",
      "sugestionables",
      "escépticos",
      "exigentes",
      "parsimoniosos",
      "demasiado detallistas",
      "de difícil persuasión",
      "superficiales en asuntos amorosos",
      "carentes de iniciativas",
      "solitarios",
      "sarcásticos",
      "intrigantes",
      "antisociales",
    ],
    anatomyRuled:
      "Tracto gastrointestinal; el egoísmo y la autoconmiseración producen un ácido que afecta el sistema corporal y también el mental, abdomen, bazo, parte inferior del hígado, duodeno, procesos de absorción, asimilativos, selectividad química, peristalsis intestinal, afecciones del aparato digestivo, intestinos, intoxicaciones, apendicitis, peritonitis, tifus, cólera, parálisis de la vejez.",
    vocations:
      "Investigadores, contadores, científicos, químicos, estadísticos, analistas, psiquiatras, entrenadores de animales, abogados, tasadores, enfermeros, banqueros, higienistas, literatos, periodistas, mecánicos dentales, dietistas, dibujantes, bibliotecarios, libreros, secretarios, archivistas, fotógrafos, maestros, inspectores, matemáticos, sirvientes, mozos, veterinarios, médicos clínicos, naturistas, institutrices, niñeras, relojeros, y toda tarea que exija minuciosidad y detalle.",
    places:
      "Colegios, universidades, bancos, casas de cambios, academias, jardines infantiles, almacenes, ferias, bibliotecas, escritorios, hospitales, estudios, guarderías, relojerías, veterinarias.",
    psychology:
      "Estos nativos están regidos por Mercurio, como Géminis, pero aunque menos intelectualizados que los gemelos, son muchos más prácticos y analíticos. Su nota distintiva es el análisis, pero como siempre ocurre con los que desmenuzan demasiado, poseen una acentuada inclinación a la duda y al escepticismo, no permiten ser influenciados fácilmente y por tanto su existencia transcurre sin sobresaltos, dentro de la sencillez y la prudencia. Como analizan las cosas hasta en sus menores detalles, llegan a tener una objetiva visión de lo que es justo y honesto, y saben a ciencia cierta que el hacer bien al prójimo redundará en beneficio propio. Por esto los nativos de este signo son leales, honestos y buenos servidores, pero a pesar de estas envidiables cualidades, les cuesta mucho llegar al éxito y eso se produce debido a su gran defecto, el cual hace que no realicen nada sin haberlo sopesado y calculado hasta en sus últimos detalles; sus acciones son siempre el producto de un acabado razonamiento lógico y esta manera de enfocar la vida les resta posibilidades a pesar de que poseen gran capacidad; son por lo tanto excelentes llevando a cabo proyectos ajenos, que cumplirán con toda honestidad y responsabilidad, pero rara vez son ejecutores de sus propios proyectos, pues su desmedida pasión analítica los limita irremisiblemente. La mujer de Virgo, es amable, laboriosa y ordenada, es buena esposa pero necesita un compañero también muy cuidadoso, metódico y aseado para ser feliz. Si hay algo que una mujer de este signo es incapaz de soportar, esto es el desorden. Se dice que las mejores personas de servicio, son las nacidas en este período. Como ya adelantamos, su peor defecto es analizar demasiado. Creemos que por más que razone y estudie, jamás se logrará desentrañar más que una parte de la verdad de la vida. Desgraciadamente, es esto y no otra cosa lo que sucede a los nativos de Virgo; muchas veces suelen frustrar sus mejores planes por detenerse en detalles sin importancia, por la absoluta falta de síntesis y así se alejan de sus posibles logros. Es seguro que si se abocaran a dejar de lado el exceso de análisis y se acercaran a su entorno sin ánimo de examen, sus innatas cualidades les podrían abrir un más amplio y prometedor horizonte. Decanatos: Primer Decanato: Nacidos entre el 23 y el 31 de Agosto. Están influenciados por el cambiante Mercurio y son los más calmos, algo tímidos, un tanto melancólicos y necesitan sentirse apoyados. Segundo Decanato: Nacidos entre el 1 y el 10 de Septiembre. Reciben el influjo del responsable Saturno y son los de sentidos más desarrollados, tienen cierta agudeza de crítica y son precavidos. Tercer Decanato: Nacidos entre el 11 y el 22 de Septiembre. Están regidos por Venus, son los más diligentes, un tanto superficiales y menos circunspectos. Asociaciones Significativas: Número 2; Arcano Mayor II Isis con Velo; Letra B. Plantas y Flores: Cebada, avena, centeno, trigo, mijo, ligustro, achicoria, escarola, madreselva, valeriana, manzano, avellano. Colores Afines: Violeta oscuro, azul, gris, amarillo verdoso. Minerales y Metales: Mercurio, mármol, pedernal. Gemas: Jaspe, esmeralda, jacinto, topacio, aguamarina. Animales: Abeja, colibrí, hormiga, gorrión, aves de corral, insectos.",
  },
  {
    id: "libra",
    name: "Libra",
    number: "Séptimo Signo Zodiacal",
    dates: "23 de Septiembre al 22 de Octubre",
    element: "Aire",
    modality: "Cardinal",
    polarity: "Positiva (Yang / Masculina)",
    rulingPlanet: "Venus",
    image: "signo-libra.jpg",
    representation: "La Balanza; signo humano.",
    symbolism:
      "Nos recuerda los platillos de la balanza, la justicia, la equidad, la armonía, el equilibrio. Este signo de Libra es bastante moderno, ya que no se hallaba representado en el primitivo zodíaco. En la Grecia de Hiparco, es donde nació con el nombre de Libra, pues el símbolo de la balanza responde a la circunstancia que durante ese lapso, los días y las noches son iguales en duración debido a que el Sol entra en el equinoccio de Otoño en el hemisferio norte y de Primavera en el Sur.",
    mythology:
      "Antiguamente el sector correspondiente a Libra, estaba ocupado por Escorpio, el que abarcaba entonces el espacio de dos signos; esto se mantuvo hasta principios de la Edad Media. La mitología griega hizo de este signo el símbolo de Temis, Diosa de la Justicia. Se dice que Zeus, pesaba en su Balanza de Oro el destino de los hombres y así fue cómo decidió la suerte de la guerra de Troya. Libra es definida por la astrología tradicional como el signo de la reciprocidad y la cooperación cósmica.",
    dignities:
      "Regente: Venus; Exaltación: de Saturno; Destierro: de Marte; Caída: del Sol; Afín con la 7° Casa.",
    nature:
      "de Aire; Cardinal; Masculino; Positivo; Diurno; Caliente; Húmedo; Mental. Características Fundamentales: Son seres muy sociables y armoniosos, equilibrados, amantes de la justicia, poseen gran responsabilidad para juzgar, alegres y optimistas, la finura y el don de gentes.",
    fundamentalTraits:
      "Son seres muy sociables y armoniosos, equilibrados, amantes de la justicia, poseen gran responsabilidad para juzgar, alegres y optimistas, la finura y el don de gentes.",
    positiveQualities: [
      "Equilibrados",
      "dialécticos",
      "diplomáticos",
      "con sentido del orden y la justicia",
      "sensibles",
      "fraternales",
      "simpáticos",
      "bondadosos",
      "inclinados a dar consejos",
      "gentiles",
      "estéticos",
      "artísticos",
      "románticos",
      "entusiastas",
      "sentimentales",
      "amorosos",
      "espirituales",
      "refinados",
      "persuasivos",
      "imitativos",
      "previsores",
      "perceptivos",
      "conciliadores",
    ],
    shadowQualities: [
      "Superficiales",
      "pendencieros",
      "holgazanes",
      "utópicos",
      "materialistas",
      "acomodaticios",
      "demagogos",
      "especulativos",
      "escépticos",
      "cambiantes",
      "charlatanes",
      "volubles",
      "inestables",
      "indecisos",
      "exhibicionistas",
      "intrigantes",
    ],
    anatomyRuled:
      "Destilación y filtración de los líquidos en el cuerpo, la secreción glandular, los celos, el egoísmo y la melancolía, tienden a agotar el sistema nervioso envejeciéndolo, predisposición a enfermedades relacionadas con la inflamación de los riñones, males genitourinarios, lumbago, diabetes, cólico renal, cálculos a la vejiga o riñones, ovarios, adrenales, caderas, vértebras lumbares, la piel en general.",
    vocations:
      "Diplomáticos, políticos, jueces, abogados, procuradores, arquitectos, escultores, proyectistas, dibujantes, decoradores, escritores, financistas, modistos, manicuras, pedicuros, masajistas, cosmetólogos, floristas, diseñadores, músicos, sastres, cantantes, artistas en general.",
    places:
      "Salas de recepción, teatros, cines, juzgados, casas de moda, florerías, sastrerías, perfumerías.",
    psychology:
      "Venus, el planeta del amor, rige a este diplomático signo de Libra, otorgándole armonía, belleza, refinamiento y equilibrio, los cuales son sus notas destacadas. Estos nativos hacen un culto de la justicia; los seres violentos, agresivos y desequilibrados los lastiman profundamente, sintiéndose en cambio muy felices en compañía de personas cultas y refinadas; las personas que no están a su altura espiritual lo deprimen. Su trato es cordial y afable, y ansía más que nada ser comprendido, hallando en las relaciones sociales una gran motivación de su existir, por lo tanto, debe procurar no vivir aisladamente. Por su innata simpatía es bien acogido en cualquier medio, pero su desmedido amor a la adulación puede hacerlo caer en ciertas dificultades. Como son tan cambiantes, pueden comenzar hoy con gran fervor cualquier empresa y pasado un tiempo acometer otra sin haber terminado la primera; es que carecen de la persistencia y la paciencia necesarias para empezar y terminar algo, siendo así que la mayoría de las veces malgasten sus energías al servicio de cosas que jamás acaban. Las mujeres librianas son muy femeninas, refinadas, gustan de lo bello y cara, son amables, cariñosas y afectuosas como madres, novias y esposas. Una dama de compañía de este signo puede llegar a ser insustituible. Pero a pesar de su gran sensibilidad y sociabilidad, estos nativos de Libra tienen sus defectos, que precisamente están dados por querer mantener la armonía y la belleza a cualquier precio. Alienta en ellos un casi desprecio por lo que todos luchan y esto los suelen llevar a una inferioridad de condiciones en la despiadada lucha cotidiana. Esta falta de clara visión de la realidad, hace que sean poco firmes y prácticos en la acción, lo que a veces pesa para una normal realización económica y, si agregamos a esto que sus gustos suelen ser muy refinados y caros, podemos vislumbrar que no es nada extraño que en el hogar de estas personas, lleguen a formarse graves tormentas con peligro de derrumbarlo que se ha construido sólidamente y con amor. Así pues, deberán tratar de lograr un sentido práctico que los ponga a salvo de las embestidas del medio ambiente, dirigiéndolo a saber frenar sus gastos a tiempo, procurando así que en su vida reine la paz y la tranquilidad, teniendo bien en cuenta que esto se puede conseguir con sacrificio y mucha fuerza de voluntad. Decanatos: Primer Decanato: Nacidos entre el 23 y el 30 de Septiembre. Influenciados por Venus, son los más exquisitos, artísticos y volubles, armoniosos y sugestionables. Segundo Decanato: Nacidos entre el 1 y el 10 de Octubre. Saturno los influencia y son por ello de una fidelidad sin parangón en la amistad, amantes de la justicia y de proteger a los más débiles. Tercer Decanato: Nacidos entre el 11 y el 22 de octubre. Regidos por Mercurio, son los más intelectuales, capaces, firmes y prácticos. Asociaciones Significativas: Número 3; Arcano Mayor III Isis sin Velo; Letra G. Plantas y Flores: Rosa blanca, lirio, violeta, prímula, pensamiento, berro, tomillo, frutilla, limonero, datilero, olivo. Colores Afines: Verde claro, amarillo, carmesí. Minerales y Metales: Cuarzo, espato, mármol, cobre y sus aleaciones. Gemas: Diamante, ópalo, coral, jade, alabastro. Animales: Paloma, tórtola, faisán, ganso, perdiz, ciervo, mariposa, galgo, zorro plateado. Publicidad",
  },
  {
    id: "escorpion",
    name: "Escorpio",
    number: "Octavo Signo Zodiacal",
    dates: "23 de Octubre al 22 de Noviembre",
    element: "Agua",
    modality: "Fijo",
    polarity: "Negativa (Yin / Femenina)",
    rulingPlanet: "Marte y Plutón",
    image: "signo-escorpio.jpg",
    representation: "Un escorpión, el Águila, la Serpiente; signo animal.",
    symbolism:
      "Nos recuerda la cola del escorpión con su temible aguijón, lo que significa su gran agresividad y defensa, el águila por su capacidad de elevarse y la serpiente por su astucia y sabiduría. La importancia de este signo es tal que hizo opinar al astrónomo Menzel: la religión del cielo habitada por la constelación de Escorpio, es una de las más curiosas y fascinantes del espacio celeste.",
    mythology:
      "En la antigüedad, Escorpio ocupaba dos signos, la parte delantera del escorpión era denominada Las Garras y es lo que hoy se conoce como Libra. En Egipto, había la creencia de que un inmenso escorpión con su envenenada lanceta amenazaba desde los cielos. La mitología griega, habla de que Orión fue muerto por la picadura de un escorpión. A este signo se lo ha identificado con la Serpiente del Paraíso y también con la Serpiente Emplumada del zodíaco azteca. Además el escorpión ha sido relacionado con el Ave Fénix por su gran poder de recuperación y supervivencia.",
    dignities:
      "Regente: Plutón; Co-Regente: Marte; Exaltación: de Urano; Destierro: de Venus; Caída: de la Luna; Afín con la 8° Casa.",
    nature:
      "de Agua; Fijo; Femenino; Negativo; Nocturno; Frío; Húmedo; Energético-explosivo. Características Fundamentales: Gran vitalidad, resistencia física, potencia sexual, desarrollo del sistema piloso, importancia de los órganos reproductores. La fuerza que bulle bajo la superficie, la renovación, el cambio, lo misterioso y oculto, la transformación, la destrucción para volver a construir, la muerte, la regeneración o degradación.",
    fundamentalTraits:
      "Gran vitalidad, resistencia física, potencia sexual, desarrollo del sistema piloso, importancia de los órganos reproductores. La fuerza que bulle bajo la superficie, la renovación, el cambio, lo misterioso y oculto, la transformación, la destrucción para volver a construir, la muerte, la regeneración o degradación.",
    positiveQualities: [
      "Concentrados",
      "apasionados",
      "responsables",
      "laboriosos",
      "autoritarios",
      "enérgicos",
      "perseverantes",
      "leales",
      "fieles",
      "francos",
      "disciplinados",
      "prudentes",
      "nobles",
      "reservados",
      "apasionados",
      "afectuosos",
      "místicos",
      "altruistas",
      "intelectuales",
      "analíticos",
      "escrutadores",
      "imaginativos",
      "sensitivos",
      "intuitivos",
      "sagaces",
      "tenaces",
      "independientes",
      "habilidosos",
      "justicieros",
      "comprensivos",
    ],
    shadowQualities: [
      "Tormentosos",
      "vengativos",
      "crueles",
      "celosos",
      "audaces",
      "astutos",
      "fanáticos",
      "intransigentes",
      "rencorosos",
      "perversos irónicos",
      "criticones",
      "melodramáticos",
      "desconsiderados",
      "brutales",
      "sensualidad límite",
      "infieles",
      "materialistas",
      "atrevidos",
      "egoístas",
      "violentos",
      "orgullosos",
      "rudos",
      "desafiantes",
      "desconfiados",
      "belicosos",
      "libertinos",
      "vanidosos",
      "odiosos",
      "anárquicos",
      "sarcásticos",
      "burlones",
      "falaces",
      "irritables",
      "envidiosos",
    ],
    anatomyRuled:
      "Procreación, reproducción, destrucción y eliminación, control de la pigmentación, enfermedades del sistema generativo, venéreas y exudativas, hemorroides, fístulas, úlceras, envenenamientos, catarros nasales, hernias, estrechez prostática o uretral, nariz, vejiga, vesícula, región púbica, vértebras lumbares, intestino grueso.",
    vocations:
      "Médicos cirujanos, dentistas, biólogos, veterinarios, químicos, físicos, investigadores, filósofos, arquitectos, abogados, militares, marinos, mecánicos, detectives, empresarios de pompas fúnebres, hipnotizadores, médiums, matarifes, carniceros, embalsamadores, autopsistas, técnicos en rayos X, paleontólogos, psiquiatras, laboratoristas.",
    places:
      "Talleres, depósitos de armas, fundiciones, arsenales, metalurgia, piscinas, salas de cirugía, morgue, consultorios dentales, carnicerías.",
    psychology:
      "Los nativos de este signo son laboriosos, enérgicos y muy reservados. Un astrólogo los ha señalado como ardientes en frío. Ellos saben como llegar allí donde se lo propongan, tienen perseverancia y tenacidad. Como enemigos son peligrosos, pues nunca perdonan y su rencor irá en aumento con el tiempo. Como responden perfectamente a las características de reservados e introvertidos, jamás descubren sus intenciones por completo. En el plano amoroso son muy apasionados, pues como sabemos éste es el signo de la sexualidad. Por su manera de ser no son muy dados a revelar franca y abiertamente sus sentimientos, su actitud es siempre medida, pero sus ojos suelen delatarlos. Aquellos que poseen las buenas cualidades escorpianas están ampliamente facultados para desempeñar con brillantez tareas ejecutivas y directivas. Los nacidos en este período son sufridos, pacientes, prudentes y fatalistas y unido a todo ello poseen sagacidad y espíritu analítico, lo que los pone en inmejorables condiciones para emprender los trabajos o estudios mas complicados y triunfar en ellos. Las mujeres escorpianas son muy laboriosas, ingeniosas, reservadas y excelentes madres, pero muy apasionadas y celosas, con una inquebrantable voluntad a la que es casi imposible vencer; en lo profesional pueden ser buenas odontólogas, obstétricas y cirujanas. Debemos por todo lo expuesto, reconocer que estos seres son unos de los mejores dotados para triunfar en la vida, por su practicidad, perseverancia y fuerte voluntad, pero también es cierto que muchas satisfacciones les son negadas por su carácter cerrado que crea a su alrededor una pared de incomunicación con sus semejantes. En verdad pensamos que si se lo proponen, pueden lograr con su gran constancia y tesón, abrirse más sinceramente en su entorno y así podrían ver lo que el mundo les ofrece para que vivan más plenamente y con felicidad. Decanatos: Primer Decanato: Nacidos entre el 23 y el 31 de Octubre. Están influenciados por Plutón-Marte. En su juventud demuestran bastante timidez, pero se vuelven completamente enérgicos en su edad madura. Segundo Decanato: Nacidos entre el 1 y el 10 de Noviembre. Reciben la influencia de Júpiter y son muy sensitivos y aunque su apariencia puede ser agresiva, ellos son muy bondadosos. Tercer Decanato: Nacidos entre el 11 y el 22 de Noviembre. Están regidos por la Luna y son muy imaginativos, pero poseyendo gran resolución y tenacidad. Asociaciones Significativas: Número 4; Arcano mayor IV El Soberano; Letra D. Plantas y Flores: Dalia, peonia, tabaco, ajenjo, jengibre, ruibarbo, áloe, paraíso, plantas amargas. Colores Afines: Rojo fuerte y su matiz oscuro, azul verdoso. Minerales y Metales: Hierro, acero, hematites, piedra imán, pedernal. Gemas: Topacio, rubí, cornalina, granate, jaspe, malaquita. Animales: Halcón, gavilán, escorpión, arácnidos, serpientes, buitres, cocodrilos, jabalíes, murciélagos.",
  },
  {
    id: "sagitario",
    name: "Sagitario",
    number: "Noveno Signo Zodiacal",
    dates: "23 de Noviembre al 22 de Diciembre",
    element: "Fuego",
    modality: "Mutable",
    polarity: "Positiva (Yang / Masculina)",
    rulingPlanet: "Júpiter",
    image: "signo-sagitario.jpg",
    representation:
      "El Centauro; signo humano en su parte superior y animal en su inferior.",
    symbolism:
      "Nos recuerda a un cazador con su arco y flecha, pero en este caso representa a un cazador de ideales, pues su flecha apuntando a las estrellas del cielo nos demuestra que el alma se puede elevar imponiéndose sobre la materialidad. También nos habla del conflicto entre la bestia y el hombre, el espíritu y la carne, pero su dardo hacia el firmamento indica que se puede triunfar sublimando nuestras aspiraciones.",
    mythology:
      "Según estudiosos contemporáneos, Sagitario representa la constelación del Centauro, que con el grupo de estrellas que la integran, forman el Carro del Lechero, en la parte sur de la Vía Láctea. Este signo es de muy antigua data y en el bello poema El Gilgamesh se describían a seres que eran mitad caballos con la parte delantera de hombres. Cuenta la leyenda que Quirón, herido por la flecha de Hércules y lleno de intenso dolor, renunció a la inmortalidad a favor de Prometeo; Zeus para recompensarlo lo situó en el firmamento en la constelación de Sagitario.",
    dignities: "Regente: Júpiter; Destierro: de Mercurio; Afín con la 9° Casa.",
    nature:
      "de Fuego; Común; Masculino; Positivo; Diurno; Caliente; Seco; Expansivo. Características Fundamentales: Los viajes al exterior, los deportes; la razón, la legalidad, lo que tiene conexión directa con la intelectualidad, la filosofía y la religión, cultura, libertad e independencia.",
    fundamentalTraits:
      "Los viajes al exterior, los deportes; la razón, la legalidad, lo que tiene conexión directa con la intelectualidad, la filosofía y la religión, cultura, libertad e independencia.",
    positiveQualities: [
      "Religiosidad",
      "humanitarismo",
      "amor al prójimo",
      "filántropos",
      "respetuosos",
      "ordenados",
      "justos",
      "místicos",
      "competitivos",
      "deportistas",
      "honestos",
      "francos",
      "de gran vitalidad",
      "sinceros",
      "impersonales",
      "enérgicos",
      "sociables",
      "alegres",
      "juveniles",
      "abiertos",
      "francos",
      "morales",
      "entusiastas",
      "intelectuales",
      "idealistas",
      "organizadores",
      "optimistas",
      "progresistas",
      "conservadores",
      "liberales",
      "ceremoniosos",
      "distinguidos",
      "galantes",
    ],
    shadowQualities: [
      "Payasos",
      "desconsiderados",
      "distraídos",
      "fanfarrones",
      "libertinos",
      "jugadores",
      "carencia de tacto",
      "superficialidad",
      "agresivos",
      "inconstantes",
      "prepotentes",
      "mentirosos",
      "orgullosos",
      "celosos",
      "atrevidos",
      "impacientes",
      "autoindulgentes",
      "sensuales",
      "coléricos",
      "glotones",
      "fanáticos",
      "especulativos ambiciosos",
      "utilitarios",
      "mezquinos",
      "excéntricos",
      "explotadores",
      "frívolos",
      "aventureros",
    ],
    anatomyRuled:
      "Nervios motores, muslos y caderas, nervio ciático, vértebra coxígena, rodillas y coyunturas, accidentes, caídas, golpes en las caderas, reumatismo, gota, deficiente función del hígado, parálisis, ataxia locomotriz.",
    vocations:
      "Pilotos de avión, editores, azafatas, clérigos, ingenieros aeronáuticos, intérpretes, abogados, conferencistas, filósofos, instructores de educación física, directores técnicos, maestros, telegrafistas, jueces, banqueros, filántropos, músicos, militares, dibujantes, exploradores, magos y profetas.",
    places:
      "Juzgados, universidades, escuelas, bancos, iglesias, templos, mansiones, estadios deportivos, azoteas, terrazas, balcones, aviones, aeropuertos, salas de conferencias.",
    psychology:
      "Estos son seres expansivos, alegres y comprensivos, respondiendo ampliamente a las características del benéfico Júpiter, que es su regente. Son personas que se sienten muy inclinadas hacia la investigación, a la filosofía y poseen una innata cordialidad; les atraen los viajes en grado sumo, así como los deportes y siempre disponen de un espíritu optimista y animoso que contagia a los demás. Por su mente filosófica y su amplitud de miras, se puede discutir con ellos toda clase de temas, de los que están en todo momento bien informados; en algunos casos su desbordante impulso y fogosidad, los lleva a perder la exacta medida de la realidad; es entonces cuando se nos presentan como seres superficiales y vacuos, pero en ningún caso están malintencionados. Sagitario es más espiritual de los tres signos de Fuego. Entre ellos podemos descubrir a los tres signos de Fuego. Entre ellos podemos descubrir a los que son grandes viajeros, siempre en busca de nuevos conocimientos y aventuras y también abundan los inveterados deportistas, en especial los aficionados al golf, equitación, pedestrismo y fútbol, pero también los hay aquellos que cultivan el juego por dinero y son capaces de arriesgar todo cuanto poseen sobre una mesa de juego o en las patas de un caballo. Por otra parte entre estos nativos encontramos los que revelan una pronunciada tendencia religiosa. Los sagitarios están dotados de un amplio espíritu, pero suelen esconder también prejuicios y mezquindades, mostrándonos así su parte menos evolucionada. La mujer de este signo, muestra sus rasgos filantrópicos y es alegre, amante de los viajes y el deporte. En cuanto a su papel como esposa y madre lo cumple abnegadamente y con mucho afecto. Sabe conformarse y adaptarse bien a las circunstancias que la vida le pone por delante. En lo profesional, hacen excelentes maestras y profesoras. Debemos decir a estas alturas, que es bueno ser optimistas, idealistas, pero todo en su justa medida, ya que el exceso de estas cualidades los puede acercar a una irrealidad en la que podrían ser víctimas de los intereses mezquinos de quienes no poseen escrúpulos. Tendrán también que atender a su sed de independencia, tratando de preservar la estabilidad necesaria, pues muy valiosas oportunidades se pueden perder por la dispersión de sus energías y la mala aplicación de su inteligencia. Decanatos: Primer Decanato: Del 23 al 30 de Noviembre. Están influenciados por Júpiter y son ardientes defensores de su independencia, muy detallistas y poseen gran lealtad e hidalguía de sentimientos. Segundo Decanato: Del 1 al 10 de Diciembre. Están regidos por Marte y son algo agresivos, discutidores, de gran imaginación y muy amantes de los viajes. Tercer Decanato: Del 11 al 22 de Diciembre. Reciben la influencia Solar y son muy orgullosos, decididos y con gran capacidad para los estudios. Asociaciones Significativas: Número 7; Arcano Mayor VII La Conquista; Letra Z. Plantas y Flores: Malva, begonia, caña de azúcar, canelo, laurel, sándalo, incienso. Colores Afines: Azul claro, violeta. Minerales y Metales: Estaño. Gemas: Turquesa, amatista, topacio, coralina y zafiro. Animales: Caballo, mula, cebra, hipopótamo, hipocampo.",
  },
  {
    id: "capricornio",
    name: "Capricornio",
    number: "Décimo Signo Zodiacal",
    dates: "23 de Diciembre al 20 de Enero",
    element: "Tierra",
    modality: "Cardinal",
    polarity: "Negativa (Yin / Femenina)",
    rulingPlanet: "Saturno",
    image: "signo-capricornio.jpg",
    representation:
      "Un chivo o una Cabra con cola de Pez; signo animal y bicorpóreo.",
    symbolism:
      "La cabra nos recuerda lo tan elevado que se pude llegar con perseverancia y la cola del pez significaría la profundidad de este signo. Algunos autores han interpretado que la cola del pez se debe a que en esa etapa del año se esperan las lluvias en el hemisferio norte.",
    mythology:
      "Este signo nace en la prehistoria. La imagen de cabra con cola de pez fue descubierta en grabados de muy antigua data; el poeta Arato escribió: el cuerpo de la cabra y la cola del pez, pertenecen a la tierra y al mar e ilustran la suerte de los mortales que se sustentan con el aire húmedo y el alimento seco. Ea, fue un antiguo rey babilónico, conocido como el antílope del océano subterráneo; el cabrito con cola de pez, también llamado Jusarikú, el carnero-pez. La mitología griega refiere que la cabra Amaltea, amamantó a Zeus y éste en agradecimiento la colocó en la constelación de Capricornio.",
    dignities:
      "Regente: Saturno; Exaltación: de Marte; Destierro: de la Luna; Caída: de Júpiter; Afín con la 10° Casa.",
    nature:
      "de Tierra; Cardinal; Femenino; Negativo; Nocturno; Frío; Seco/Húmedo; Retraído. Características Fundamentales: Lucha para subsistir, la búsqueda de la posición y los honores, el sentido de la individualidad, el poder de la ambición, la templanza, el orden y la justicia.",
    fundamentalTraits:
      "Lucha para subsistir, la búsqueda de la posición y los honores, el sentido de la individualidad, el poder de la ambición, la templanza, el orden y la justicia.",
    positiveQualities: [
      "Concentrados",
      "perfeccionistas",
      "responsables",
      "metódicos",
      "laboriosos",
      "perseverantes",
      "ordenados",
      "planificadores",
      "caritativos",
      "humanitarios",
      "capacidad de sacrificio",
      "ternura",
      "seriedad",
      "sensibilidad",
      "constancia",
      "templanza",
      "franqueza",
      "probidad",
      "prudencia",
      "paciencia",
      "deductivo",
      "perceptivo",
      "reflexivo",
      "conservador",
      "cauto",
      "ingenioso",
      "profundo",
      "sutil",
      "sabio razonador",
    ],
    shadowQualities: [
      "Agresivos",
      "intolerantes",
      "coercitivos",
      "dominadores",
      "fanáticos",
      "tormentosos",
      "abúlicos",
      "celosos",
      "demagogos",
      "tiranos",
      "ansiosos",
      "inhibidos",
      "taciturnos",
      "incomunicativos",
      "irritables",
      "inexorables",
      "desconfiados",
      "resentidos",
      "tímidos",
      "rigoristas",
      "calculadores",
      "astutos",
      "criticones",
      "implacables",
      "suspicaces",
      "artificiosos",
      "empecinados",
      "mezquinos",
      "mortificantes",
      "envidiosos",
      "avaros",
      "utilitarios",
      "hipócritas",
      "codiciosos",
      "pesimistas",
      "ateos",
      "fanáticos",
      "crueles",
      "autoconmiserados",
    ],
    anatomyRuled:
      "Endurecimiento, anquilosis, cristalización, reumatismo articular, deficiencias del líquido sinovial, deformidades óseas, astillado, dislocación y rotura de huesos, artritis, esclerosis, tuberculosis ósea, dolores de muelas, calambres, gota, histeria, lepra, parálisis, afecciones a la piel; los huesos, las rodillas, los cabellos, la piel.",
    vocations:
      "Profesores, maestros, jueces, arquitectos, albañiles, carpinteros, ingenieros, mineros, matemáticos, agricultores, ganaderos, industriales, cargos públicos, asistentes sociales, economistas, porteros, yeseros, alpinistas, serenos, talabarteros.",
    places:
      "Hospitales, lugares desérticos, bóvedas, sótanos, subterráneos, minas, museos, juzgados, escuelas, estancias, campos, montañas, casas, fábricas.",
    psychology:
      "Podríamos decir que estos nativos tienen una idea fija: el método y el orden. El signo de la cabra está regido por Saturno, el más mesurado y sobrio de los planetas y que ejerce su influencia en forma u tanto obstructiva sobre sus nativos; éstos son esencialmente discretos, prácticos, incorruptibles. Sus notas distintivas son: ambición, método, ejecución. Su reserva es difícil de penetrar, son muy perseverantes y todas estas cualidades se podrán ir descubriendo a medida que se los trate, pues suelen ser bastante cerrados al principio, pero cuando ponen su estima en alguien, seguramente se abrirán de en par. Al acometer una tarea, la habrán pensado y pensado largamente, revisando hasta sus más ínfimos detalles y luego la ejecutarán con gran responsabilidad, con tenacidad y perseverancia, todo dentro del orden más acabado; su capacidad estará siempre enfilada hacia el logro de cosas materiales y su existencia se desenvuelve dentro de un ritmo moderado y frugal. Son seres muy respetuosos de las leyes y las normas establecidas, por lo que sobresalen en tareas comerciales, en finanzas y sociedades de toda índole, esto en los nativos de mayor capacidad cultural, pero en los demás encontramos los que hacen excelentes empleados y funcionarios públicos, ya que su gran respeto por las leyes, las reglas y el orden, los hacen aptos para estos quehaceres y suelen constituirse en empleados irreemplazables; sobresaldrán siempre en todas estas disciplinas, pero luego de ardua lucha, ya que sus temperamentos están influenciados por la parte algo obstructiva de la naturaleza de Saturno. La mujer capricorniana, es buena administradora y excelente ama de casa, hábil y metódica, estando más inclinada al lado material que al espiritual de la vida. Podemos aseverar que estas nativas siempre consiguen lo que se proponen. A los nacidos en este período, en general debemos advertirles que su gran defecto es el pesimismo y la desconfianza. El exceso de reserva demuestra claramente que no confían en su entorno y el pesimismo les priva de un sano goce de la vida, alterando por añadidura su salud; además esta manera de ser, sólo acumula oposición a su alrededor y de persistir en esta tesitura, les acarreará la sensación cierta de verse rechazados por su medio ambiente, porque todos huyen de la desconfianza y del pesimismo. Decanatos: Primer Decanato: Nacidos entre el 23 y el 31 de Diciembre. Reciben la influencia de Saturno y son más irresolutos, fatalistas y tornadizos. Su existencia es algo convulsa e intranquila. Segundo Decanato: Nacidos entre el 1 y el 10 de Enero. Influenciados por Venus. Son los más decididos y obstinados, aunque un tanto lentos en sus determinaciones. Tercer Decanato: Nacidos entre el 11 y el 20 de Enero. Tienen la regencia de Mercurio y son bastante tímidos y reservados, algo fríos y sin mayores ambiciones. Asociaciones Significativas: Número 8; Arcano Mayor VIII La Balanza; Letras H y CH. Plantas y Flores: Beleño, amapola negra, cicuta, belladona, hiedra, acónito. Colores Afines: Azul oscuro, negro, gris oscuro, índigo. Minerales y Metales: Plomo, carbón. Gemas: Ónix, zafiro, azabache. Animales: Cabra, delfín, camello, oso, chivo, rata, lechuza, avestruz, alce.",
  },
  {
    id: "acuario",
    name: "Acuario",
    number: "Undécimo Signo Zodiacal",
    dates: "21 de Enero al 19 de Febrero",
    element: "Aire",
    modality: "Fijo",
    polarity: "Positiva (Yang / Masculina)",
    rulingPlanet: "Saturno y Urano",
    image: "signo-acuario.jpg",
    representation:
      "Una figura que puede ser masculina o femenina, vertiendo agua de un cántaro; signo humano.",
    symbolism:
      "Es el símbolo del que viene a calmar la sed espiritual con su agua fresca y cristalina. Según afirma Vincent, Acuario simboliza al desgarramiento de las nubes y las consiguientes inundaciones. Las ondulaciones con que graficamos este signo, significan la fuerza y energía espiritual del mismo.",
    mythology:
      "En la antigüedad, se lo relacionaba con los cambios meteorológicos, que tuvo mucho que ver con el Diluvio Universal, representando zodiacalmente por el Dios Rummon. La mitología griega atribuye el origen de este signo a la figura de Ganímedes, quién fue arrebatado de la tierra debido a su gran belleza; también se cree que es el genio del nacimiento del Nilo, por lo cual Zeus lo convirtió en la constelación de Acuarius.",
    dignities:
      "Regente: Urano; Co-Regente: Saturno; Destierro: del Sol; Caída: de Neptuno; Afín con la 11° Casa.",
    nature:
      "De Aire; Fijo; Masculino; Positivo; Diurno; Caliente; Húmedo; Intuitivo.",
    fundamentalTraits:
      "Ideales de humanitarismo; libertad e independencia. Espíritu amplio y progresista; originalidad, altruismo, ideas anticonvencionales; atracción por lo imprevisto e inédito.",
    positiveQualities: [
      "Idealistas",
      "solidarios",
      "independientes",
      "fraternalistas",
      "honestidad",
      "responsabilidad",
      "franqueza",
      "intelectualidad",
      "escrutadores",
      "revolucionarios",
      "gentiles",
      "altruistas",
      "cordiales",
      "leales",
      "humanitarios",
      "espirituales",
      "armónicos",
      "inconvencionales",
      "sociables",
      "tolerantes",
      "intuitivos",
      "científicos",
      "inventivos",
      "literarios",
      "diplomáticos",
      "discretos",
      "optimistas",
      "previsores",
      "vanguardistas",
    ],
    shadowQualities: [
      "Extravagantes",
      "utópicos",
      "fanáticos",
      "anarquistas",
      "delirantes",
      "agresivos",
      "imprevisibles",
      "depresivos",
      "fanfarrones",
      "exhibicionistas",
      "criticones",
      "especulativos",
      "excitables",
      "inquietos",
      "inexpresivos",
      "impetuosos",
      "huraños",
      "insociables",
      "inmorales",
      "intolerantes",
      "superficiales",
      "rebeldes",
      "inactivos",
      "suspicaces",
      "imprevisores",
      "irritables",
      "maniáticos",
      "excéntricos",
      "pesimistas",
      "subversivos",
      "díscolos",
      "desconfiados",
    ],
    anatomyRuled:
      "Las pantorrillas y tobillos; parálisis de origen medular, anemia, arteriosclerosis, defectos de la circulación de la sangre, eliminación a través de los pulmones, procesos por los que el cuerpo se protege de los envenenamientos y enfermedades, torceduras y roturas de tobillos, calambres, debilidades del corazón, espasmos, sangre envenenada, venas varicosas, piel sensible, enfermedades nerviosas, sistema circulatorio en general.",
    vocations:
      "Técnicos de aire acondicionado, astrobiólogos, astrónomos, tapiceros, electricistas, electrónicos, muebleros, inventores físicos nucleares, psicólogos, empleados del plástico, científicos, asistentes sociales, radiotécnicos, telegrafistas, aviadores, músicos, actores, literatos, astronautas, arqueólogos, profetas, revolucionarios, exploradores, técnicos en computación, en cibernética y en televisión.",
    places:
      "Edificios modernos, laboratorios, hangares, aviones, aeropuertos, cooperativas, sindicatos, cines, plataformas de lanzamientos espaciales, garages, talleres, observatorios astronómicos, mueblerías, fábricas, bibliotecas.",
    psychology:
      "Estos nativos, regidos por Urano, el planeta del altruismo y lo imprevisto, son fieles a estas características; ellos son también imprevisibles, fraternalistas y originales, muestran gran amor por la ciencia y el arte y aman su libertad con apasionamiento. Son originales y decididos en su manera de actuar y no les agrada en absoluto depender de los demás, razón por la cual encontramos en ellos a los hombres que se abren camino en la vida, siempre gozando de una situación independiente. Su modo de ser es frontal y de una rectitud envidiable, su carácter es fuerte y su humor parejo. Saben ganarse la simpatía y el aprecio de quienes los tratan y como cuentan con una poderosa intuición, siempre terminan imponiéndose en su medio. Aunque firmes en sus ideas, son bastante flexibles. Estos nativos son poco expansivos y algo extravagantes, pero siempre fraternales, muy honestos y confiables, les agrada brindar ayuda a quien la necesite y son seres más evolucionados que el común de la gente. La mujer acuariana no escapa a las incidencias de Urano y por lo tanto es también muy independiente, tanto en la manera de ver la vida, como en el matrimonio. Es persona indicada para formar pareja con un hombre sin prejuicios. Los nacidos en este período tendrán que tratar de no exagerar su independencia, pues por preservar ésta, pueden verse envueltos en una dependencia mayor. Encontramos también otro escollo en su desbordante idealismo, bien sabemos que él soñar y volar un poco ayuda a vivir, pero no debemos nunca dejar de apoyar los pies en la tierra para no escapar de la realidad, y por último, encontramos que su tercer defecto reside en su originalidad, pues, como tienen una fértil imaginación, suelen trasponer los límites de toda originalidad razonable y caer en la utopía. Como los sabemos sensibles y con una grandeza espiritual ilimitada, estamos seguros que, de intentarlo, podrán lograr el equilibrio y así podemos sacar el mejor provecho de sus realizaciones. Decanatos: Primer Decanato: Nacidos entre el 21 y el 31 de Enero. Regidos por Urano. Son los más independientes, artísticos, hábiles y muy cordiales. Segundo Decanato: Nacidos entre el 1 y el 10 de Febrero. Están influenciados por Mercurio y son los más impulsivos, un tanto desconfiados y muy inteligentes. Tercer Decanato: Nacidos entre el 11 y el 19 de Febrero. Reciben la influencia de Venus y son los más sentimentales, demostrativos y expansivos. Asociaciones Significativas: Número: 9; Arcano Mayor IX La Sabiduría; Letra TH. Plantas y Flores: Mirra, incienso, nardo y mimosa. Colores Afines: Gris, azulado, añil. Minerales y Metales: Uranio, radium, aluminio, plomo, pizarra. Gemas: Zafiro, brillante, ópalo, cristal, perla negra. Animales: Cordero, perro, faisán.",
  },
  {
    id: "piscis",
    name: "Piscis",
    number: "Duodécimo Signo Zodiacal",
    dates: "20 de Febrero al 20 de Marzo",
    element: "Agua",
    modality: "Mutable",
    polarity: "Negativa (Yin / Femenina)",
    rulingPlanet: "Júpiter y Neptuno",
    image: "signo-piscis.jpg",
    representation: "Dos Peces unidos por un cordel; Signo animal, bicorpóreo.",
    symbolism:
      "Nos recuerda la multiplicación de los peces que pueden salvar el hambre del mundo. Los griegos consideraban que Piscis se relacionaba con los vientos que soplan de cada lado, trastornando las profundidades donde moran los peces. Significa también este signo tan místico, la discreción y sutileza.",
    mythology:
      "En las catacumbas de los primitivos cristianos se han hallado testimonios de la vinculación del nombre de Cristo con los peces. Este signo que hoy conocemos como Piscis, antiguamente fue designado Las Colas. Durante el medioevo se sostenía que este período presidía un mes húmedo siendo una realidad para los egipcios, pues durante el tránsito del sol por este signo, las aguas del Nilo invadían las tierras con su caudalosa creciente. También se le conocía a Piscis como Traílla, a la que fueron amarrados los dioses peces Anunitum y Simmah.",
    dignities:
      "Regente: Neptuno; Co-Regente: Júpiter; Exaltación: de Venus; Destierro y Caída: de Mercurio; Afín con la 12° Casa.",
    nature:
      "De Agua; Común; Femenino; Negativo; Nocturno; Frío; Húmedo; Hipersensible. Características Fundamentales: Capacidad de sacrificio, gran sensibilidad, tendencia a la realización de tareas sublimes, misticismo y fe.",
    fundamentalTraits:
      "Capacidad de sacrificio, gran sensibilidad, tendencia a la realización de tareas sublimes, misticismo y fe.",
    positiveQualities: [
      "Sensibilidad",
      "bondad",
      "humanitarismo",
      "fraternales",
      "solidarios",
      "filántropos",
      "románticos",
      "caritativos",
      "nobles",
      "sacrificados",
      "religiosos",
      "intuitivos",
      "idealistas",
      "honestos",
      "tiernos",
      "emotivos",
      "compasivos",
      "psíquicos",
      "hospitalarios",
      "serviciales",
      "afectuosos",
      "espirituales",
      "simpáticos",
      "clarividentes",
      "proféticos",
      "soñadores",
    ],
    shadowQualities: [
      "Abúlicos",
      "especulativos",
      "melodramáticos",
      "llorones",
      "inestables",
      "mentirosos",
      "perezosos",
      "cobardes",
      "huidizos",
      "indolentes",
      "fatalistas",
      "indecisos",
      "apáticos",
      "desamorados",
      "melancólicos",
      "bohemios",
      "incomprendidos",
      "versátiles",
      "no confiables",
      "locuaces",
      "dilatorios",
      "sugestionables",
      "susceptibles",
    ],
    anatomyRuled:
      "Procesos linfáticos, sistema glandular, las mucosas, funciones del hígado, deformidades y enfermedades de los pies, juanetes, catarros, tuberculosis, reumatismo, gota, malestares de las secreciones, dedos, huesos y músculos de los pies.",
    vocations:
      "Taberneros, químicos, bailarines, buzos, pescadores, oculistas, oceanógrafos, fotógrafos, marinos, zapateros, médicos, ufólogos, enfermeros, nadadores, detectives, músicos, poetas, literatos, novelistas, profetas, médiums, comerciantes de bebidas, hoteleros, gendarmes, espías.",
    places:
      "Mares, ríos, canales, acuarios, almacenes de líquidos, hospitales, monasterios, asilos, cisternas, droguerías, buhardillas, cárceles, acequias.",
    psychology:
      "Este signo está regido por Neptuno, el que le da sus características de misticismo, de mediumnidad y también inclina al delirio y a la drogadicción. Estos seres son muy propensos a tener cierta inquietud por temores que sólo existen en su fantasía. En la mayoría de los casos son débiles de carácter, pero tienen una gran capacidad de sacrificarse por los demás y su caridad no tiene parangón con las personas de otros signos. Son indulgentes, comprensivos y misericordiosos, tanto para sí mismos como para su prójimo. Están dotados de una gran intuición y se destacan por su interés en servir a la comunidad, poseyendo además capacidad para la evidencia y un altruismo ilimitado. Son extremadamente religiosos, impresionables y emotivos, pero su voluntad es deficiente y no se interesan mucho en librar una práctica batalla por la vida, sino más bien, se inclinan por una actitud pacífica, tolerante y contemplativa. Tomando en cuenta estas características de su temperamento, podemos acotar que sus aptitudes se ven empobrecidas para defenderse en el medio ambiente en que se mueven; aunque disponen de una perspicaz inteligencia, les falta practicidad y exacto sentido de la realidad. La mujer de Piscis es muy sensible, introvertida, de poco carácter, suave y dulce, muy impresionable y necesita a su lado a un compañero fuerte en quien apoyarse, pero poseedor de nobles sentimientos. Los nativos de Piscis son extraordinariamente espirituales, pero transitan un camino algo distante a la realidad. Han construido su mundo hacia adentro y por ello otorgan poco valor a los hechos de la vida cotidiana. Ellos viven como ensimismados en la contemplación de su yo interior, perdiendo así el hilo que los sujeta a la existencia efectiva; esta actitud despierta rechazo en los demás, en la mayoría de los casos, pues creen ver en ello un signo de egoísmo y de irresponsabilidad. Sin embargo, son poseedores de los más caros sentimientos hacia la humanidad y podrían volcar todo ese caudal de sus espíritus armándose de mayor fuerza de voluntad. Como hacen gala de un alma bondadosa, sabrán comprender que nadie se pertenece a sí mismo por entero y que no hay ninguna razón valedera que los haga pensar que están solos, por lo que venciendo su natural timidez e introversión, hallarán la medida exacta de la vida, compartiendo sus vivencias y abriéndose más hacia sus semejantes. Decanatos: Primer Decanato: Del 20 al 29 de Febrero. Son influenciados por Neptuno-Júpiter y se muestran animosos, muy religiosos e intuitivos. Segundo Decanato: Del 1 al 10 de Marzo. Pesa sobre ellos la influencia de la Luna y son de naturaleza emocional, ansiosos, negligentes y versátiles. Tercer Decanato: Del 11 al 20 de Marzo. Reciben la influencia de Plutón-Marte y son los más difíciles de comprender, ya que pasan de la osadía a la timidez sin mediar motivo aparente. Asociaciones Significativas: Número:12; Arcano Mayor El Sacrificio; Letra L. Plantas y Flores: Olmo, laurel, canelo, helechos, musgo, algas. Colores Afines: Azul oscuro, verde mar, violeta, rojizo, blanco. Minerales y Metales: Estaño, platino, arena, grava, pómez. Gemas: Coral, amatista, topacio, turquesa, marfil. Animales: Delfín, ballena, cisne, peces en general. Lobo marino, patos, garzas, aves acuáticas.",
  },
];

// ---------------------------------------------------------------------------
// 2. HORÓSCOPO ÁRABE DE LAS ARMAS
// ---------------------------------------------------------------------------

export const arabIntro = {
  title: "Horóscopo Árabe de las Armas Sagradas",
  quote: {
    text: "«Lo que deba ser será», dijo el profeta. Transitar el horóscopo árabe se convertirá en un mágico y acertado camino para develar los misterios más profundos de su personalidad.",
    source: "Tradición Esotérica Árabe — Portal Amonra Chile",
  },
  historicalContext:
    "Todas las civilizaciones antiguas se valieron de un método para la adivinación del futuro y la comprensión del destino humano. El pueblo árabe se valió de las armas que usaba para subsistir y cruzar el desierto. Antes de llegar al refinamiento de sus brocados, laúdes, mieles y palacios, el habitante del desierto hubo de vencer a la silenciosa ferocidad de las dunas y sus engañosas arenas. Con sus armas venció a la adversidad y, con ellas, rigió el temple de su estirpe según el arma consagrada al día de su nacimiento.",
  weaponClasses: [
    {
      type: "Armas Cortas",
      description:
        "Puñal, Cuchillo, Machete y Gumia. Revelan personalidades pragmáticas, calculadoras, directas, profundamente arraigadas a su tierra y con una tenacidad incansable que les asegura logros perdurables.",
    },
    {
      type: "Armas Medianas",
      description:
        "Clava, Maza, Cadena y Hacha. Signan a quienes cultivan la sabiduría, la reflexión estratégica y la eficacia. Románticos y protectores, prefieren la seguridad consolidada antes que la imprudencia del azar.",
    },
    {
      type: "Armas Largas",
      description:
        "Alfanje, Arco, Lanza y Honda. Pertenecen a los líderes innatos, influyentes y visionarios. Poseen alcance estratégico y abren caminos donde otros ven horizontes cerrados.",
    },
  ],
};

export const arabWeapons: ArabWeapon[] = [
  {
    id: "punal",
    name: "El Puñal",
    weaponType: "Arma Corta",
    dates: "21 de Marzo al 20 de Abril",
    color: "Amarillo",
    rulingPlanet: "Marte",
    westernSignAffinity: "ARIES",
    chineseSignAffinity: "DRAGÓN",
    rulingMetal: "HIERRO",
    personality:
      "Representa una personalidad directa, valiente y emprendedora. Quienes nacen bajo este signo suelen actuar con decisión, defender su autonomía y afrontar los desafíos sin demasiadas vueltas; necesitan moderar la impulsividad y aprender a medir sus reacciones.",
    workLife:
      "Se desenvuelve mejor en actividades dinámicas, competitivas o de iniciativa propia, donde pueda tomar decisiones y abrir camino. La rutina prolongada puede impacientarle, pero su energía y capacidad de respuesta le ayudan a resolver problemas con rapidez.",
    loveAndRelationships:
      "En el amor es apasionado, franco y protector. Busca una relación intensa y leal, aunque debe cuidar la tendencia a querer imponer su voluntad; necesita una pareja que respete su independencia y se comunique con claridad.",
    image: "punal.jpg",
  },
  {
    id: "clava",
    name: "La Clava",
    weaponType: "Arma Mediana",
    dates: "21 de Abril hasta el 20 de Mayo",
    color: "Gris plateado o negro",
    rulingPlanet: "Venus",
    westernSignAffinity: "Tauro",
    chineseSignAffinity: "SERPIENTE",
    rulingMetal: "Cobre.",
    personality:
      "Es una personalidad realista, tranquila, sensual y perseverante. Valora la seguridad y lo concreto; puede mostrarse posesiva cuando siente amenazados sus afectos o sus bienes, pero también ofrece estabilidad y una convivencia cálida.",
    workLife:
      "Trabaja con ambición y constancia, especialmente cuando puede construir resultados sólidos. Prefiere un ritmo variable antes que una rutina rígida y procura alcanzar seguridad económica y comodidad mediante su propio esfuerzo.",
    loveAndRelationships:
      "Es afectuoso, sensual y fiel a sus sentimientos. Busca una relación estable y demostrativa; cuando se siente traicionado puede reaccionar con mucha intensidad. Necesita confianza, respeto y una base material segura.",
    image: "clava2.jpg",
  },
  {
    id: "maza",
    name: "La Maza",
    weaponType: "Arma Mediana",
    dates: "21 de Mayo al 21 de Junio",
    color: "Verde",
    rulingPlanet: "Urano",
    westernSignAffinity: "Géminis",
    chineseSignAffinity: "CABALLO",
    rulingMetal: "NÍQUEL",
    personality:
      "Es una personalidad curiosa, sociable, estratégica y muy organizada. Disfruta conversar, investigar y moverse entre ideas nuevas; su seguridad exterior puede ocultar una necesidad profunda de reconocimiento y compañía.",
    workLife:
      "Se siente más cómodo en ambientes intelectuales, creativos y cambiantes que en labores repetitivas. Tiene facilidad para improvisar, comunicar y convencer, por lo que puede destacar en investigación, docencia, gestión o trabajos con contacto humano.",
    loveAndRelationships:
      "Al principio puede mostrarse reservado, pero se vuelve muy expresivo cuando adquiere confianza. Es afectuoso y sensible, y necesita una pareja que le brinde protección emocional sin limitar su curiosidad ni su deseo de cambio.",
    image: "maza2.jpg",
  },
  {
    id: "cuchillo",
    name: "El Cuchillo",
    weaponType: "Arma Corta",
    dates: "22 de Junio al 23 de Julio",
    color: "Blanco",
    rulingPlanet: "Luna",
    westernSignAffinity: "Cáncer",
    chineseSignAffinity: "La Cabra",
    rulingMetal: "Plata",
    personality:
      "Es sensible, emocional, imaginativo y muy ligado a la familia. Tiende a protegerse cuando teme el rechazo y necesita sentirse seguro antes de tomar decisiones; su ternura y su intuición son sus principales fortalezas.",
    workLife:
      "Es laborioso, responsable y cuidadoso cuando trabaja en un entorno de confianza. Puede destacar en el arte, la literatura y otras actividades que requieran imaginación, delicadeza y atención a los matices.",
    loveAndRelationships:
      "Busca una relación protectora y estable. Puede mostrarse inseguro al comienzo y esforzarse mucho por agradar, pero necesita afecto constante y fidelidad; le cuesta perdonar una traición.",
    image: "cuchillo2.jpg",
  },
  {
    id: "alfanje",
    name: "El Alfanje",
    weaponType: "Arma Larga",
    dates: "24 de Julio al 23 de Agosto",
    color: "Amarillo",
    rulingPlanet: "Sol",
    westernSignAffinity: "LEO",
    chineseSignAffinity: "MONO",
    rulingMetal: "ORO",
    personality:
      "Es audaz, independiente, leal y sensual, con una marcada vocación de liderazgo. Suele proteger a quienes quiere y disfruta ser reconocido, aunque debe vigilar la necesidad de protagonismo y la susceptibilidad ante la adulación.",
    workLife:
      "Prefiere dirigir, organizar y tomar decisiones antes que ocupar un lugar subordinado. Tiene aptitudes para el emprendimiento, la estrategia y la conducción de equipos, y necesita sentir que su trabajo le permite ejercer autonomía.",
    loveAndRelationships:
      "Es cariñoso, generoso y muy sensual. Busca una pareja independiente que lo admire y lo apoye, pero también necesita aprender a compartir el protagonismo y a expresar sus necesidades sin imponerse.",
    image: "alfanje.jpg",
  },
  {
    id: "machete",
    name: "El Machete",
    weaponType: "Arma Corta",
    dates: "24 de Agosto hasta el 23 de Setiembre",
    color: "Verde.",
    rulingPlanet: "Urano",
    westernSignAffinity: "VIRGO",
    chineseSignAffinity: "GALLO",
    rulingMetal: "NÍQUEL",
    personality:
      "Es ingenuo, inteligente, solidario y creativo. Tiene un fuerte sentido del discernimiento y de la justicia, aunque puede subestimarse o confiar demasiado; aprende a protegerse cuando transforma la duda en criterio propio.",
    workLife:
      "Se desempeña bien en tareas que exigen precisión, disciplina y habilidad manual. También puede destacar en administración, investigación y profesiones médicas o paramédicas, siempre que encuentre un entorno responsable y colaborativo.",
    loveAndRelationships:
      "Es cálido y cariñoso, y desea una relación donde exista cuidado mutuo. Se entrega por completo cuando confía, pero necesita una pareja profesional, estable y protectora que valore su sensibilidad.",
    image: "machete.jpg",
  },
  {
    id: "cadena",
    name: "La Cadena",
    weaponType: "Arma Mediana",
    dates: "24 de setiembre al 23 de octubre",
    color: "Azul",
    rulingPlanet: "Venus",
    westernSignAffinity: "LIBRA",
    chineseSignAffinity: "PERRO",
    rulingMetal: "COBRE",
    personality:
      "Es sensible, justo, atractivo y leal. Busca armonía y protección, defiende a las personas vulnerables y se altera ante la injusticia o la ruptura del equilibrio; la belleza y la estética también tienen un lugar importante en su vida.",
    workLife:
      "Prefiere resolver los problemas mediante el diálogo, la justicia y la cooperación. Puede sentirse atraído por el derecho, la mediación, la diplomacia y las tareas donde pueda ordenar conflictos sin recurrir a la violencia.",
    loveAndRelationships:
      "Es seductor, afectuoso y orientado a los compromisos duraderos. Necesita atención, cariño y una pareja para toda la vida; una traición puede afectarle profundamente porque deposita mucho valor en la lealtad.",
    image: "cadena.jpg",
  },
  {
    id: "gumia",
    name: "La Gumia (Daga Árabe)",
    weaponType: "Arma Corta",
    dates: "24 de Octubre al 23 de Noviembre",
    color: "Rojo y cobre",
    rulingPlanet: "Marte",
    westernSignAffinity: "ESCORPIO",
    chineseSignAffinity: "JABALÍ o CERDO",
    rulingMetal: "HIERRO",
    personality:
      "Es vital, apasionado, misterioso y emocional. Busca desafíos y experiencias intensas, se interesa por lo oculto y rara vez se conforma con lo evidente; su gran energía necesita canalizarse para no volverse impulsiva o inestable.",
    workLife:
      "Pone mucha intensidad en sus objetivos y puede destacar en actividades exigentes, deportes de riesgo, investigación, ciencia o astronomía. Le motivan los problemas complejos y los proyectos que le permiten superar límites.",
    loveAndRelationships:
      "Ama con pasión y exclusividad, y se aburre cuando la relación pierde intensidad. Necesita una pareja libre, comprensiva y con sentido del humor; debe cuidar la inconstancia y el deseo de vivir siempre al límite.",
    image: "gumia.jpg",
  },
  {
    id: "arco",
    name: "El Arco",
    weaponType: "Arma Larga",
    dates: "24 de Noviembre al 23 de Diciembre",
    color: "Morado",
    rulingPlanet: "Júpiter",
    westernSignAffinity: "SAGITARIO",
    chineseSignAffinity: "RATA",
    rulingMetal: "ESTAÑO.",
    personality:
      "Es sincero, espontáneo, sociable y atrevido. Necesita sentirse parte de un grupo y suele demostrar con claridad lo que siente; su entusiasmo y su seguridad pueden transformarse en autoritarismo si no escucha a los demás.",
    workLife:
      "Tiene facilidad para organizar, motivar y encontrar soluciones. Puede destacar en docencia, dirección, coordinación y actividades que requieran contacto con personas, siempre que conserve margen para actuar con independencia.",
    loveAndRelationships:
      "Es directo y osado al expresar sus sentimientos. Busca una pareja sociable, sincera y cálida, y ofrece protección y entusiasmo; necesita respetar la libertad de la otra persona tanto como defiende la propia.",
    image: "arco.jpg",
  },
  {
    id: "lanza",
    name: "La Lanza",
    weaponType: "Arma Larga",
    dates: "24 de Diciembre al 23 de Enero",
    color: "Azul",
    rulingPlanet: "Saturno",
    westernSignAffinity: "CAPRICORNIO",
    chineseSignAffinity: "BUEY o BÚFALO",
    rulingMetal: "PLOMO",
    personality:
      "Es obstinado, sensible, exigente e introvertido. Prefiere los ambientes tranquilos y busca la verdad que se oculta bajo las apariencias; puede parecer frío, pero en realidad protege una sensibilidad muy profunda.",
    workLife:
      "Avanza lentamente pero con seguridad y perseverancia. Es exigente consigo mismo y con los demás, y puede destacar en el arte, la música clásica y otras actividades donde la calidad y la autenticidad sean esenciales.",
    loveAndRelationships:
      "Le cuesta iniciar una relación por timidez, pero es fiel y constante cuando se enamora. Necesita delicadeza, sensibilidad y pasión, y busca una pareja que le ofrezca seguridad sin invadir su mundo interior.",
    image: "lanza.jpg",
  },
  {
    id: "honda",
    name: "La Honda",
    weaponType: "Arma Larga",
    dates: "21 de Enero al 18 de Febrero",
    color: "Gris",
    rulingPlanet: "Saturno",
    westernSignAffinity: "ACUARIO",
    chineseSignAffinity: "TIGRE",
    rulingMetal: "EL ALUMINIO",
    personality:
      "Es entusiasta, audaz, generoso y pacífico. Sabe medir los riesgos y tiene facilidad para comunicar, colaborar y reunir personas; evita las presiones y necesita libertad para actuar de acuerdo con sus ideales.",
    workLife:
      "Aspira al crecimiento y puede destacar en actividades comerciales, empresariales o independientes. Es creativo, espontáneo y activo cuando un proyecto le entusiasma, aunque pierde energía frente a responsabilidades que no siente propias.",
    loveAndRelationships:
      "No desea dominar ni ser dominado. Es seductor, generoso e innovador, pero puede parecer distante cuando teme depender emocionalmente; necesita una relación libre, honesta y respetuosa de la autonomía mutua.",
    image: "honda.jpg",
  },
  {
    id: "hacha",
    name: "El Hacha",
    weaponType: "Arma Mediana",
    dates: "19 de febrero al 20 de marzo",
    color: "Púrpura.",
    rulingPlanet: "Tierra",
    westernSignAffinity: "Piscis",
    chineseSignAffinity: "CONEJO",
    rulingMetal: "PLATINO",
    personality:
      "Es vulnerable, sensible, sociable y adaptable. Valora la lealtad, busca integrarse con los demás y puede oscilar entre la diplomacia y la discusión cuando algo le afecta; su imaginación y su mundo espiritual son muy importantes.",
    workLife:
      "Se adapta con facilidad a actividades creativas, comunicación y relaciones públicas. Disfruta conocer personas y puede destacar en ambientes flexibles donde combine sensibilidad artística, intuición y capacidad de trato.",
    loveAndRelationships:
      "Es expresivo, afectuoso y muy atento a las emociones. Busca impresionar y ser correspondido, se comunica con facilidad y necesita demostraciones de amor, ternura y reconocimiento dentro de la pareja.",
    image: "hacha.jpg",
  },
];

// ---------------------------------------------------------------------------
// 3. ZODÍACO CHINO Y WU XING
// ---------------------------------------------------------------------------

export const chineseIntro = {
  title: "Zodíaco Chino y Cosmovisión de los Cinco Elementos (Wu Xing)",
  quote: {
    text: "El Yin y el Yang son los dos principios antagónicos y complementarios cuyo juego indisociable y constante metamorfosis representan el tejido mismo del universo en acción.",
    source: "Filosofía Taoísta Tradicional — Amonra Chile",
  },
  buddhaLegend:
    "Cuenta la milenaria tradición que, con motivo del Año Nuevo cósmico más de cinco siglos antes de nuestra era, Buda convocó a todas las criaturas de la creación ofreciéndoles una recompensa sagrada. Únicamente doce especies acudieron por fidelidad y devoción en el siguiente orden de llegada: la Rata, el Búfalo, el Tigre, el Conejo (Gato/Liebre), el Dragón, la Serpiente, el Caballo, la Cabra, el Mono, el Gallo, el Perro y el Jabalí (Cerdo). En agradecimiento perpetuo, a cada uno le fue encomendada la regencia de un año dentro de una rueda de doce ciclos celestiales.",
  yinYangPhilosophy:
    "El Yin (femenino, noche, receptivo, introspección, agua y tierra) y el Yang (masculino, luz, día, acción expansiva, fuego y viento) se alternan sin cesar. Ninguno es superior al otro; su oposición armónica es tan fecunda como las dos manos que se encuentran para generar el aplauso de la vida.",
  sexagesimalCycle:
    "Al combinarse los 12 animales de las Ramas Terrestres con los 5 Elementos Wu Xing (Madera, Fuego, Tierra, Metal, Agua) en sus polaridades Yin y Yang, se engendra la gran rueda cósmica sexagesimal de 60 años, iniciando desde la Rata de Madera hasta el Cerdo de Agua.",
};

export const wuXingElements: WuXingElement[] = [
  {
    id: "madera",
    name: "Madera (Mù)",
    associatedPlanet: "Júpiter",
    season: "Primavera",
    direction: "Este",
    characteristics:
      "Crecimiento, flexibilidad, expansión, generosidad e idealismo.",
    description:
      "Las maneras del signo bajo el elemento Madera son amistosas y persuasivas. Es capaz de ganarse fácilmente la confianza de los demás. Le encanta participar activamente en todo lo que ocurre a su alrededor, promoviendo el progreso colectivo y la creatividad renovadora.",
  },
  {
    id: "fuego",
    name: "Fuego (Huǒ)",
    associatedPlanet: "Marte",
    season: "Verano",
    direction: "Sur",
    characteristics: "Dinamismo, pasión, liderazgo, audacia y calor humano.",
    description:
      "El elemento Fuego es tan enérgico como resolutivo; se entrega a todo lo que hace con una actitud segura y apasionada. Sus convicciones son muy frontales y no teme correr riesgos con tal de alcanzar sus ideales más elevados, irradiando luz y entusiasmo motivador.",
  },
  {
    id: "tierra",
    name: "Tierra (Tǔ)",
    associatedPlanet: "Saturno",
    season: "Fin de Verano / Transiciones Estacionales",
    direction: "Centro",
    characteristics:
      "Estabilidad, sentido práctico, lealtad, prudencia y nutrimiento.",
    description:
      "El elemento Tierra es de naturaleza bondadosa, sensata y realista. Es un excepcional organizador y resulta particularmente astuto y equilibrado en los asuntos prácticos y familiares. Brinda contención, perseverancia y frutos duraderos.",
  },
  {
    id: "metal",
    name: "Metal (Jīn)",
    associatedPlanet: "Venus",
    season: "Otoño",
    direction: "Oeste",
    characteristics:
      "Firmeza, rectitud, precisión, claridad mental y discernimiento.",
    description:
      "El elemento Metal confiere una personalidad ambiciosa, resuelta y disciplinada. Posee una fortaleza interna inquebrantable, defendiendo la justicia y la dignidad con gran honestidad de miras y un elevado sentido de la integridad.",
  },
  {
    id: "agua",
    name: "Agua (Shuǐ)",
    associatedPlanet: "Mercurio",
    season: "Invierno",
    direction: "Norte",
    characteristics:
      "Fluidez, intuición, sabiduría profunda, empatía y sensibilidad.",
    description:
      "El elemento Agua posee un corazón comprensivo y empático. Es fiel, conciliador y busca armonizar su entorno mediante la serenidad y la diplomacia. Se adapta a los cauces de la existencia con flexibilidad y penetrante percepción psíquica.",
  },
];

export const chineseAnimals: ChineseAnimal[] = [
  {
    id: "rata",
    animal: "Rata",
    earthBranch: "子 (Zǐ)",
    fixedSeason: "Invierno",
    direction: "Norte",
    hours: "23:00 - 01:00",
    fixedElement: "Agua",
    polarity: "Yin",
    quote:
      "La vida no es una “vela fugaz”. Es una, espléndida antorcha que quiero hacer arder tan brillantemente como sea posible antes de entregarla a generaciones futuras.",
    archetypalTitle: "Nacido bajo el signo de encanto",
    description:
      "L a rata es un animal de tendencias Yin (frío, pasivo) que proviene del norte y pertenece al solsticio de invierno. Los caminos para llegar a ella son de difícil acceso puesto que la rata es dueña de lo subterráneo, de las llamadas fuerzas de abajo, lo que tal vez explica su doble vista o vista de lince. Hermana de la serpiente y del topo participa de este mundo de seres rastreros, enroscándose bajo la tierra, en el fondo de los sótanos y en la tibieza de graneros colmados de abundantes cosechas. La Rata nacido bajo el signo del encanto. Es inteligente popular y le gusta asistir a fiestas y grandes reuniones sociales. Puede entablar amistades con notable facilidad y la gente, generalmente, se siente cómoda en su compañía. Es una criatura muy social y esta genuinamente interesada en el bienestar de las actividades de los demás. Comprende bien la naturaleza humana y suelen solicitarse consejos y opiniones. La Rata es ardua y diligente trabajadora. Es también muy imaginativa y jamás le faltan ideas. Sin embargo, si le falta a veces la confianza para promover sus ideas tanto como debería, y esto puede impedirle a menudo asegurarse el reconocimiento y crédito que le suele merecer. La Rata es muy observadora, y muchas de ellas han sido excelentes escritores y periodistas. También sobresale en trabajos con personal de relaciones publicas, y en cualquier empleo que le ponga en contacto con la gente y en los medios de comunicación. Su capacidad es apreciada particularmente en épocas de crisis, pues la Rata tiene un sentido de autoconservación increíblemente fuerte. Cuando se trata de encontrar una Rata quien aparezca con la solución. A la Rata le encanta estar donde hay mucha acción, aunque si alguna vez se halla en un ambiente muy burocrático o restrictivo puede convertirse en una cargosa de la disciplina y la rutina. Tiene también algo de oportunista y esta al constante a la mira de maneras en que pueda aumentar sus riquezas y realzar su estilo de vida. Difícilmente deja pasar una oportunidad, por lo que a veces malgasta sus energías y alcanza muy poco como resultado. Es bastantes ingenua, además, y puede que la embauquen aquellos menos escrupulosos que ella. Otra característica de la Rata es su actitud hacia el dinero. Es muy ahorrativa y algunos podrá parecerles un poco mezquina. La razón de esto es sencillamente que le gusta mantener dinero en su familia. Puede ser sumamente generosa con su pareja, sus hijos y amigos íntimos o parientes. También puede ser ge",
    socialAndWorkLife:
      "trabajos con personal de relaciones publicas, y en cualquier empleo que le ponga en contacto con la gente y en los medios de comunicación. Su capacidad es apreciada particularmente en épocas de crisis, pues la Rata tiene un sentido de autoconservación increíblemente fuerte. Cuando se trata de encontrar una Rata quien aparezca con la solución. A la Rata le encanta estar donde hay mucha acción, aunque si alguna vez se halla en un ambiente muy burocrático o restrictivo puede convertirse en una cargosa de la disciplina y la rutina. Tiene también algo de oportunista y esta al constante a la mira de maneras en que pueda aumentar sus riquezas y realzar su estilo de vida. Difícilmente deja pasar una oportunidad, por lo que a veces malgasta sus energías y alcanza muy poco como resultado. Es bastant",
    relationships:
      "pareja, sus hijos y amigos íntimos o parientes. También puede ser generosa consigo misma, pues suele imposible privarse de algún lujo u objeto preciado con los que fantasea. La Rata es también muy adquisitiva y puede ser una notable atesoradora. Odia gastar y difícilmente este dispuesta a tirar algo. Puede ser bastante voraz, además, y rara vez rechazara una invitación a comer gratis o una entrada de obsequio a un espectáculo. La Rata es buena conversadora, aunque ocasionalmente puede ser un tanto indiscreta. También puede resultar sumamente critica con los demás, para una opinión honesta e imparcial, la Rata es una critica excelente, y usara la información confidencial para su propio provecho. No obstante, como tiene una naturaleza tan brillante e irresistible, la mayor parte de la gente ",
    fullText:
      "L a rata es un animal de tendencias Yin (frío, pasivo) que proviene del norte y pertenece al solsticio de invierno. Los caminos para llegar a ella son de difícil acceso puesto que la rata es dueña de lo subterráneo, de las llamadas “fuerzas de abajo”, lo que tal vez explica su doble vista o vista de lince. Hermana de la serpiente y del topo participa de este mundo de seres rastreros, enroscándose bajo la tierra, en el fondo de los sótanos y en la tibieza de graneros colmados de abundantes cosechas. La Rata nacido bajo el signo del encanto. Es inteligente popular y le gusta asistir a fiestas y grandes reuniones sociales. Puede entablar amistades con notable facilidad y la gente, generalmente, se siente cómoda en su compañía. Es una criatura muy social y esta genuinamente interesada en el bienestar de las actividades de los demás. Comprende bien la naturaleza humana y suelen solicitarse consejos y opiniones. La Rata es ardua y diligente trabajadora. Es también muy imaginativa y jamás le faltan ideas. Sin embargo, si le falta a veces la confianza para promover sus ideas tanto como debería, y esto puede impedirle a menudo asegurarse el reconocimiento y crédito que le suele merecer. La Rata es muy observadora, y muchas de ellas han sido excelentes escritores y periodistas. También sobresale en trabajos con personal de relaciones publicas, y en cualquier empleo que le ponga en contacto con la gente y en los medios de comunicación. Su capacidad es apreciada particularmente en épocas de crisis, pues la Rata tiene un sentido de autoconservación increíblemente fuerte. Cuando se trata de encontrar una Rata quien aparezca con la solución. A la Rata le encanta estar donde hay mucha acción, aunque si alguna vez se halla en un ambiente muy burocrático o restrictivo puede convertirse en una cargosa de la disciplina y la rutina. Tiene también algo de oportunista y esta al constante a la mira de maneras en que pueda aumentar sus riquezas y realzar su estilo de vida. Difícilmente deja pasar una oportunidad, por lo que a veces malgasta sus energías y alcanza muy poco como resultado. Es bastantes ingenua, además, y puede que la embauquen aquellos menos escrupulosos que ella. Otra característica de la Rata es su actitud hacia el dinero. Es muy ahorrativa y algunos podrá parecerles un poco mezquina. La razón de esto es sencillamente que le gusta mantener dinero en su familia. Puede ser sumamente generosa con su pareja, sus hijos y amigos íntimos o parientes. También puede ser generosa consigo misma, pues suele imposible privarse de algún lujo u objeto preciado con los que fantasea. La Rata es también muy adquisitiva y puede ser una notable atesoradora. Odia gastar y difícilmente este dispuesta a tirar algo. Puede ser bastante voraz, además, y rara vez rechazara una invitación a comer gratis o una entrada de obsequio a un espectáculo. La Rata es buena conversadora, aunque ocasionalmente puede ser un tanto indiscreta. También puede resultar sumamente critica con los demás, para una opinión honesta e imparcial, la Rata es una critica excelente, y usara la información confidencial para su propio provecho. No obstante, como tiene una naturaleza tan brillante e irresistible, la mayor parte de la gente no tiene inconveniente en perdonarle sus ligeras indiscreciones. A lo largo de su vida, prolongada y llena de acontecimientos la Rata hará muchos amigos y descubrirá que se lleva especialmente bien con las personas nacidas bajo su propio signo y con las nacidas bajo los signos del Búfalo, el Dragón y el Mono. La Rata también pude llevarse bien con los nacidos bajo los signos del Tigre, la Serpiente, el Gallo, el Perro y el Jabalí pero el gato y la cabra, bastantes sensibles, encontraran a la Rata demasiado critica y descortés para su gusto. El Caballo y la rata también hallaran difícil de congeniar; la Rata anhela la seguridad, los humores cambiantes y la naturaleza mas bien independiente del caballo le parecerán un poco inestables. La Rata se orienta mucho hacia la familia y hará todo lo necesario para agradar a sus seres queridos y mas cercanos. Es excepcionalmente leal con sus padres y puede ser, a su vez un padre o madre solicito y cariñoso. Se interesara en todas las actividades de sus hijos y vera que nada les falte, habitualmente la rata tiene una familia numerosa. La Mujer nacida bajo el signo de la rata tiene una naturaleza afable y extravertida, se involucran en muchas y distintas actividades. Es una excelente anfitriona y generalmente tendrá un amplio circulo de muy buenas amistades. Es escrupulosa en la mantención de su hogar, y tiene un magnifico gusto en el amoblamiento del mismo. Es un gran apoyo para los demás miembros de su familia y, debido a su naturaleza ingeniosa, amigable y perseverante puede desempeñarse bien en prácticamente cualquier profesión a la que se dedique. Aunque la Rata es esencialmente salidora y mas bien extravertida, es también un ser muy privado. Tiende a guardarse para a si sus sentimientos y, si bien no se opone a enterarse de lo que están haciendo los demás, se reciente con todo aquel de que fisgonee muy de cerca sus asuntos. A la Rata tampoco le gusta la soledad, y si esta sola un cierto tiempo puede deprimirse con facilidad. La Rata es, indudablemente, muy talentosa, auque con bastante frecuencia no logra capitalizar sus muchas habilidades. Tiene tendencia a comprometerse con demasiados proyectos y perseguir demasiadas oportunidades al mismo tiempo. Si lograra ir mas despacio y concentrarse en una sola cosa a la vez podría tener mucho éxito. Si no, el éxito y la riqueza tal vez la eludan, aunque la Rata, con su enorme capacidad para encantar, difícilmente, si acaso alguna vez le faltarán amigos.",
    image: "horoscopochino-rata.jpg",
  },
  {
    id: "bufalo",
    animal: "Búfalo / Buey",
    earthBranch: "丑 (Chǒu)",
    fixedSeason: "Invierno",
    direction: "Norte",
    hours: "01:00 - 03:00",
    fixedElement: "Tierra",
    polarity: "Yin",
    quote:
      "No conozco hecho más alentador que la incuestionable capacidad del hombre para elevar su vida mediante un esfuerzo consciente",
    archetypalTitle: "Signo del Zodíaco Chino: Búfalo / Buey",
    description:
      ". E l búfalo es un animal de tendencia Yin, procede del norte y pertenece al solsticio de invierno. Será difícil seguir a un Búfalo, lento y secreto, a lo largo de los surcos. El abre la tierra y cava surcos, pero contrario a la Rata, él lo hace para dar vida. Es un enamorado del trabajo bien hecho. Gracias a su fuerza, unida a un espíritu contemplativo, simboliza perfectamente el elemento Tierra sustancia pesada y densa. El búfalo excava la tierra y es una especie de alquimista mudo oficiante de la ceremonia de la siembra. El Búfalo nació bajo los signos del equilibrio y la tenacidad. Es un trabajador responsable y aplicado, que encara todo lo que hace de una manera resuelta, metódica y decidida. Tiene apreciable condiciones de mando y con frecuencia lo admiran por su naturaleza firme e intransigente. Sabe lo que quiere lograr en la vida y. hasta donde le sea posible no se desviara de ese objetivo fundamental. El Búfalo asume sus responsabilidades y deberes con seriedad. Es terminante y rápido para obtener ventaja de toda oportunidad. Además es sincero y deposita mucha confianza en sus amigos y colegas. No obstante, tiene algo de solitario. Es un individuo callado y reservado y suele guardar para sí pensamientos. Valora su independencia y prefiere hacer las cosas a su manera en vez de someterse a los dictados de otro o de ser influido por presiones externas. El Búfalo tiende a ser de naturaleza calma y sosegada. aunque si algo lo irrita o siente que alguien lo desilusiona, puede mostrar un temible temperamento. También puede ser terco y obstinado, lo cual lo lleva a entrar en conflicto con los demás. Generalmente, el Búfalo tiene éxito para manejar las cosas según sus planes, aunque si las cosas se vuelven en su contra es un mal perdedor y lomará muy mal cualquier derrota o revés inesperado. Con frecuencia, el Búfalo es un ser profundo y bastante estudioso. No es particularmente famoso por su sentido del humor y no le gustan demasiado las novedades ni nada muy innovador, Es demasiado firme y tradicional para eso y prefiere apegarse a las normas más convencionales. Para el Búfalo el hogar es muy importante, y lo considera en cierto sentido, un santuario privado. Su familia tiende a ser muy unida y el Búfalo vera que cada miembro se ocupe de la parte que le corresponde en la casa. el Búfalo tiende a acumular, pero es siempre cuidadoso y organizado. Le otorga también suma importancia a la puntualidad y no hay nada que lo enfurezca más que lo hagan esperar, s",
    socialAndWorkLife:
      "trabajo bien hecho. Gracias a su fuerza, unida a un espíritu contemplativo, simboliza perfectamente el elemento Tierra sustancia pesada y densa. El búfalo excava la tierra y es una especie de alquimista mudo oficiante de la ceremonia de la siembra. El Búfalo nació bajo los signos del equilibrio y la tenacidad. Es un trabajador responsable y aplicado, que encara todo lo que hace de una manera resuelta, metódica y decidida. Tiene apreciable condiciones de mando y con frecuencia lo admiran por su naturaleza firme e intransigente. Sabe lo que quiere lograr en la vida y. hasta donde le sea posible no se desviara de ese objetivo fundamental. El Búfalo asume sus responsabilidades y deberes con seriedad. Es terminante y rápido para obtener ventaja de toda oportunidad. Además es sincero y deposita ",
    relationships:
      "pareja. El Búfalo se lleva particularmente bien con las personas nacidas bajo los signos de la Rata, el Gato, la Serpiente y el Gallo. También puede enlabiar una buena relación con el Mono, el Perro, el Jabalí y con otro Búfalo, pero comprobará que tiene poco en común con la sensible y caprichosa Cabra. También le será difícil entenderse con el Caballo, el Dragón y el Tigre; el Búfalo prefiere una existencia pacífica y tranquila y las personas nacidas bajo los tres signos recién mencionados, tienden a ser demasiado briosas e impulsivas para su gusto. La mujer Búfalo es de naturaleza afable y afectuosa; su hogar y familia son, en gran medida, su orgullo y alegría. Siempre trata de hacer lo mejor por su compañero y puede ser una madre sumamente caprichosa y responsable. Es una excelente orga",
    fullText:
      "E l búfalo es un animal de tendencia Yin, procede del norte y pertenece al solsticio de invierno. Será difícil seguir a un Búfalo, lento y secreto, a lo largo de los surcos. El abre la tierra y cava surcos, pero contrario a la Rata, él lo hace para dar vida. Es un enamorado del trabajo bien hecho. Gracias a su fuerza, unida a un espíritu contemplativo, simboliza perfectamente el elemento Tierra sustancia pesada y densa. El búfalo excava la tierra y es una especie de alquimista mudo oficiante de la ceremonia de la siembra. El Búfalo nació bajo los signos del equilibrio y la tenacidad. Es un trabajador responsable y aplicado, que encara todo lo que hace de una manera resuelta, metódica y decidida. Tiene apreciable condiciones de mando y con frecuencia lo admiran por su naturaleza firme e intransigente. Sabe lo que quiere lograr en la vida y. hasta donde le sea posible no se desviara de ese objetivo fundamental. El Búfalo asume sus responsabilidades y deberes con seriedad. Es terminante y rápido para obtener ventaja de toda oportunidad. Además es sincero y deposita mucha confianza en sus amigos y colegas. No obstante, tiene algo de solitario. Es un individuo callado y reservado y suele guardar para sí pensamientos. Valora su independencia y prefiere hacer las cosas a su manera en vez de someterse a los dictados de otro o de ser influido por presiones externas. El Búfalo tiende a ser de naturaleza calma y sosegada. aunque si algo lo irrita o siente que alguien lo desilusiona, puede mostrar un temible temperamento. También puede ser terco y obstinado, lo cual lo lleva a entrar en conflicto con los demás. Generalmente, el Búfalo tiene éxito para manejar las cosas según sus planes, aunque si las cosas se vuelven en su contra es un mal perdedor y lomará muy mal cualquier derrota o revés inesperado. Con frecuencia, el Búfalo es un ser profundo y bastante estudioso. No es particularmente famoso por su sentido del humor y no le gustan demasiado las novedades ni nada muy innovador, Es demasiado firme y tradicional para eso y prefiere apegarse a las normas más convencionales. Para el Búfalo el hogar es muy importante, y lo considera en cierto sentido, un santuario privado. Su familia tiende a ser muy unida y el Búfalo vera que cada miembro se ocupe de la parte que le corresponde en la casa. el Búfalo tiende a acumular, pero es siempre cuidadoso y organizado. Le otorga también suma importancia a la puntualidad y no hay nada que lo enfurezca más que lo hagan esperar, sobre todo si ello se debe a la ineficiencia de alguien. El Búfalo puede ser un patrón muy rudo! Una vez establecido en un trabajo o un hogar, el Búfalo permanecerá allí a gusto muchos años. No le agrada el cambio ni es particularmente aficionado a los viajes. En vez de ello, disfruta la jardinería y otras ocupaciones al aire libre, donde frecuentemente pasara gran parle de su tiempo libre. Por lo general, el Búfalo es un excelente jardinero y en lo posible se asegurará siempre de disponer de un terreno grande que cuidar. Habitualmente, el Búfalo prefiere vivir en el campo y no en la ciudad. Por su naturaleza aplicada y segura, generalmente le irá bien en la profesión que haya elegido, mientras se le dé la suficiente libertad para actuar según su propia iniciativa. Casi invariablemente se desempeña bien en política, agricultura y en profesiones que necesiten entrenamiento especializado. El Búfalo también tiene muchas dotes para las artes, y muchos de ellos han disfrutado de un éxito considerable como músicos y compositores. El Búfalo no es tan extravertido como otros signos; a menudo le loma mucho tiempo establecer amistades y sentirse a gusto en compañía de los demás. Sus galanteos probablemente serán largos, pero una vez formalizados se mantendrá fiel y dedicado a su pareja. El Búfalo se lleva particularmente bien con las personas nacidas bajo los signos de la Rata, el Gato, la Serpiente y el Gallo. También puede enlabiar una buena relación con el Mono, el Perro, el Jabalí y con otro Búfalo, pero comprobará que tiene poco en común con la sensible y caprichosa Cabra. También le será difícil entenderse con el Caballo, el Dragón y el Tigre; el Búfalo prefiere una existencia pacífica y tranquila y las personas nacidas bajo los tres signos recién mencionados, tienden a ser demasiado briosas e impulsivas para su gusto. La mujer Búfalo es de naturaleza afable y afectuosa; su hogar y familia son, en gran medida, su orgullo y alegría. Siempre trata de hacer lo mejor por su compañero y puede ser una madre sumamente caprichosa y responsable. Es una excelente organizadora y también un ser muy resuelto, que a menudo tiene éxito en lograr lo que quiere de la vida. Habitualmente muestra un profundo interés en las artes y suele ser una artista o músico de talento. El Búfalo es un personaje muy poco afectado. Es sincero, leal y no es pretencioso. No obstante, puede ser bastante reservado y resultará distante y huraño para algunos. Es de naturaleza callada, aunque por debajo es ambicioso y de una firme voluntad. Tiene el coraje de sus convicciones y suele estar dispuesto a defender lo que cree justo, sin que le importen las consecuencias. Inspira confianza y difícilmente le falte en su vida gente dispuesta a apoyarlo o gente que admire sus maneras firmes y decididas.",
    image: "horoscopochino-buey.jpg",
  },
  {
    id: "tigre",
    animal: "Tigre",
    earthBranch: "寅 (Yín)",
    fixedSeason: "Primavera",
    direction: "Este",
    hours: "03:00 - 05:00",
    fixedElement: "Madera",
    polarity: "Yang",
    quote: "La reflexión es trabajo de muchos hombres. La acción, sólo de uno",
    archetypalTitle: "Nacido bajo el signo de coraje",
    description:
      ". E l Tigre ha nacido bajo el signo del coraje. Es una figura carismática y usualmente es muy firme para sostener sus opiniones y sus creencias. Es decidido y posee una fuerte voluntad y se dedica a casi todo lo que hace con gran energía y entusiasmo. Es inteligente y muy rápido y su mente está siempre en actividad. Sus ideas son sumamente originales y está siempre repleto de ellas o lleno de entusiasmo por algún nuevo plan o proyecto. El Tigre adora el desafío y ama verse envuelto en cualquier cosa que atrape su imaginación o que le represente un futuro excitante. Está dispuesto a correr riesgos y no le gusta sentirse limitado por convencionalismos o decretos ajenos. Al Tigre le gusta sentirse libre para poder actuar a su gusto y. por lo menos una ve¿ en su vida, echará al viento la precaución y se dedicará a hacer las cosas que desea hacer. Sin embargo, el Tigre tiene una naturaleza un tanto inquieta. Aun cuando con frecuencia está dispuesto a embarcarse de lleno v con vehemencia en algún proyecto, ese entusiasmo inicial puede decaer pronto si es que encuentra algo que le ofrece mayor atractivo. También puede ser bastante impulsivo y habrá habido muchas ocasiones en las que luego habrá lamentado su manera de actuar. Si el Tigre fuera más propenso a pensar dos veces las cosas o estuviera dispuesto a perseverar en sus diferentes actividades, casi seguramente disfrutaría de mayor éxito que el que obtiene al actuar de otra manera. Afortunadamente, el Tigre tiene buena suerte en la mayoría de sus empresas, aunque cuando las cosas no salen como él espera tiende a sufrir serios ataques de depresión que, con frecuencia, le llevan un largo tiempo de recuperación. A menudo la vida del Tigre consiste en una serie de alzas y bajas. No obstante, el Tigre se adapta fácilmente. Posee un espíritu aventurero y es raro que permanezca mucho tiempo en el mismo lugar. En las primeras etapas de su vida es probable que se ocupe en distintos empleos y cambie de domicilio con bastante frecuencia. El Tigre es muy honesto y abierto en su trato con los demás. Odia todo tipo de hipocresía y falsedad. Tiene fama de ser brusco y frontal y de no dudar en expresar lo que piensa. En ocasiones puede ser sumamente rebelde particularmente contra toda forma de autoridad mezquina, y aunque esto pueda llevar al Tigre a tener conflictos con los demás, nunca rehuye una discusión ni deja de defender lo que cree justo. El Tigre es un líder natural y frecuentemente puede llegar a la cima en la pr",
    socialAndWorkLife: "",
    relationships: "",
    fullText:
      "E l Tigre ha nacido bajo el signo del coraje. Es una figura carismática y usualmente es muy firme para sostener sus opiniones y sus creencias. Es decidido y posee una fuerte voluntad y se dedica a casi todo lo que hace con gran energía y entusiasmo. Es inteligente y muy rápido y su mente está siempre en actividad. Sus ideas son sumamente originales y está siempre repleto de ellas o lleno de entusiasmo por algún nuevo plan o proyecto. El Tigre adora el desafío y ama verse envuelto en cualquier cosa que atrape su imaginación o que le represente un futuro excitante. Está dispuesto a correr riesgos y no le gusta sentirse limitado por convencionalismos o decretos ajenos. Al Tigre le gusta sentirse libre para poder actuar a su gusto y. por lo menos una ve¿ en su vida, echará al viento la precaución y se dedicará a hacer las cosas que desea hacer. Sin embargo, el Tigre tiene una naturaleza un tanto inquieta. Aun cuando con frecuencia está dispuesto a embarcarse de lleno v con vehemencia en algún proyecto, ese entusiasmo inicial puede decaer pronto si es que encuentra algo que le ofrece mayor atractivo. También puede ser bastante impulsivo y habrá habido muchas ocasiones en las que luego habrá lamentado su manera de actuar. Si el Tigre fuera más propenso a pensar dos veces las cosas o estuviera dispuesto a perseverar en sus diferentes actividades, casi seguramente disfrutaría de mayor éxito que el que obtiene al actuar de otra manera. Afortunadamente, el Tigre tiene buena suerte en la mayoría de sus empresas, aunque cuando las cosas no salen como él espera tiende a sufrir serios ataques de depresión que, con frecuencia, le llevan un largo tiempo de recuperación. A menudo la vida del Tigre consiste en una serie de alzas y bajas. No obstante, el Tigre se adapta fácilmente. Posee un espíritu aventurero y es raro que permanezca mucho tiempo en el mismo lugar. En las primeras etapas de su vida es probable que se ocupe en distintos empleos y cambie de domicilio con bastante frecuencia. El Tigre es muy honesto y abierto en su trato con los demás. Odia todo tipo de hipocresía y falsedad. Tiene fama de ser brusco y frontal y de no dudar en expresar lo que piensa. En ocasiones puede ser sumamente rebelde —particularmente contra toda forma de autoridad mezquina—, y aunque esto pueda llevar al Tigre a tener conflictos con los demás, nunca rehuye una discusión ni deja de defender lo que cree justo. El Tigre es un líder natural y frecuentemente puede llegar a la cima en la profesión que ha elegido. No obstante, no se interesa por nada que sea demasiado burocrático o que exija demasiado detalle y tampoco le gusta obedecer órdenes. Puede ser obstinado y terco y le gusta conservar una cierta independencia en sus acciones a lo largo de su vida y no sentirse responsable de nadie, salvo de sí mismo. Le gusta considerar que sus logros se deben sólo a sus propios esfuerzos y rara vez pedirá la ayuda de los demás, a menos que sea inevitable. Irónicamente, a pesar de su auto-confianza y de su capacidad de líder, el Tigre puede ser indeciso y frecuentemente tardará hasta último momento para tomar decisiones importantes. También puede ser sensible a las críticas. Si bien el Tigre es capaz de ganar grandes sumas de dinero, es bastante derrochador y no siempre lo utiliza de la mejor manera. Puede ser sumamente generoso y a menudo hará lujosos regalos a sus parientes y amigos. Al Tigre le importa mucho su reputación y su imagen. Se conduce con aires de dignidad y de autoridad y le gusta ser el centro de atención. Es muy propenso a atraer publicidad, tanto para el como para las causas que apoya. El Tigre generalmente se casa joven. Comprobará que se lleva mejor con aquellos nacidos bajo los signos de Jabalí, Perro, Caballo y Cabra. También puede congeniar con la Rata, el Galo y el Gallo, pero el Búfalo y la Serpiente le resultarán demasiado tranquilos para su gusto y lo irritarán sobremanera los modales más bien inquisitivos y traviesos del Mono. Le resultará difícil entenderse con otro Tigre o con un Dragón; ambos querrán manejar la relación y podría resultar difícil llegar a un acuerdo, incluso en los temas más insignificantes. La Tigresa es vivaz, aguda y una maravillosa anfitriona en las fiestas. Generalmente es muy atractiva y cuida con gran esmero su aspecto. También puede ser una madre muy puntillosa y si bien cree que los hijos deben tener su libertad es una excelente maestra y se asegurará de que éstos se eduquen correctamente y de que nada les falte. Ella también tiene una naturaleza sumamente afectuosa y generosa. El Tigre tiene muchas cualidades dignas de elogio. Es honesto, valiente y, con frecuencia, es fuente de inspiración para los demás. Mientras sea capaz de refrenar los excesos impulsivos de su naturaleza inquieta, casi con seguridad tendrá una vida muy plena y satisfactoria.",
    image: "horoscopochino-tigre.jpg",
  },
  {
    id: "gato",
    animal: "Conejo / Liebre",
    earthBranch: "卯 (Mǎo)",
    fixedSeason: "Primavera",
    direction: "Este",
    hours: "05:00 - 07:00",
    fixedElement: "Madera",
    polarity: "Yin",
    quote:
      "Aquel desea asegurar el bien de los demás ya ha asegurado el propio",
    archetypalTitle: "Signo del Zodíaco Chino: Conejo / Liebre",
    description:
      '. E l Gato es de tendencia Yin, se orienta al oeste y pertenece al plenilunio de mitad del otoño. Los gatos son las figuras más contradictorias de entre los animales domésticos. En algunas casas se los adora, en oirás no se los puede ver. Algunos prefieren a los gatos porque no existen "gatos policiales". Hay gatos de tejados y otros que son de raza y que participan en concursos. De los gatos se han encontrado testimonios en las tumbas de los faraones egipcios, etc. Nadie en la actualidad desconoce la presencia de los gatos en el mundo. El Gato ha nacido bajo los signos de la virtud y la prudencia. Es inteligente, de buenos modales y prefiere una pacífica y tranquila existencia. Le disgusta todo tipo de desavenencias y tratará de mantenerse alejado de discusiones y disputas. Tiene mucho de pacifista y tiende a ejercer una influencia sosegadora a su alrededor. Tiene variados intereses y usualmente manifiesta una buena apreciación de las artes y las cosas bellas de la vida. Sabe también darse gustos y frecuentemente lo atraerán los mejores restaurantes y centros nocturnos de la ciudad. El Gato es un conversador agudo e inteligente y le encanta participar en una plática interesante. Sus consejos y opiniones son bastante solicitados y se hace merecedor de confianza por su discreción y diplomacia. Difícilmente alzará la voz enojado, e incluso ignorará cuestiones que le disgustan, con tal de mantener la paz. Al Gato le agrada estar en buenos términos con todo el mundo, aunque puede ser bastante sensible y tomarse muy a mal cualquier clase de critica. Será además el primero en apartarse al ver que amenaza cualquier clase de problema. El Gato es un trabajador silencioso y eficiente, dotado de una memoria en extremo buena. Es también muy astuto en los negocios y asuntos de dinero, aunque su éxito suele depender de las condiciones imperantes. Odia verse en situaciones cargadas de tensión o en las que deba tomar decisiones rápidas y repentinas. En la medida de lo posible, planeará sus diversas actividades con el máximo cuidado y una buena dosis de precaución. No le gusta correr riesgos y no acepta de buen grado los cambios. Básicamente, busca un medio seguro, tranquilo y estable, y cuando las condiciones son buenas es más que feliz dejando las cosas, corno están. El Gato es responsable en casi todo lo que hace, y por su naturaleza metódica y siempre atenta suele desempeñarse bien en la profesión que ha elegido. Es buen diplomático, abogado, vendedor, administrador o ',
    socialAndWorkLife:
      "trabajo en donde pueda utilizar su excelente capacidad como comunicador. Tiende a ser leal con sus empleadores y es respetado por su integridad y honestidad, aunque si alguna vez alcanza una posición de poder puede volverse bastante intransigente y autoritario. El Gato le da gran importancia a su hogar, y en muchas ocasiones dedicará bástame tiempo y dinero a mantenerlo, amoblarlo, y equiparlo con las ultimas comodidades, porque el Gato es una criatura muy afecta a la comodidad. Tiene, además, algo de coleccionista, y a muchos Gatos les gusta bastante coleccionar antigüedades, sellos postales, monedas, objetos de arte o cualquier otra cosa que les llame la atención o les interese particularmente. La mujer Gato es de naturaleza amistosa, afectuosa y atenta, y hará lo que este a su alcance p",
    relationships: "",
    fullText:
      'E l Gato es de tendencia Yin, se orienta al oeste y pertenece al plenilunio de mitad del otoño. Los gatos son las figuras más contradictorias de entre los animales domésticos. En algunas casas se los adora, en oirás no se los puede ver. Algunos prefieren a los gatos porque no existen "gatos policiales". Hay gatos de tejados y otros que son de raza y que participan en concursos. De los gatos se han encontrado testimonios en las tumbas de los faraones egipcios, etc. Nadie en la actualidad desconoce la presencia de los gatos en el mundo. El Gato ha nacido bajo los signos de la virtud y la prudencia. Es inteligente, de buenos modales y prefiere una pacífica y tranquila existencia. Le disgusta todo tipo de desavenencias y tratará de mantenerse alejado de discusiones y disputas. Tiene mucho de pacifista y tiende a ejercer una influencia sosegadora a su alrededor. Tiene variados intereses y usualmente manifiesta una buena apreciación de las artes y las cosas bellas de la vida. Sabe también darse gustos y frecuentemente lo atraerán los mejores restaurantes y centros nocturnos de la ciudad. El Gato es un conversador agudo e inteligente y le encanta participar en una plática interesante. Sus consejos y opiniones son bastante solicitados y se hace merecedor de confianza por su discreción y diplomacia. Difícilmente alzará la voz enojado, e incluso ignorará cuestiones que le disgustan, con tal de mantener la paz. Al Gato le agrada estar en buenos términos con todo el mundo, aunque puede ser bastante sensible y tomarse muy a mal cualquier clase de critica. Será además el primero en apartarse al ver que amenaza cualquier clase de problema. El Gato es un trabajador silencioso y eficiente, dotado de una memoria en extremo buena. Es también muy astuto en los negocios y asuntos de dinero, aunque su éxito suele depender de las condiciones imperantes. Odia verse en situaciones cargadas de tensión o en las que deba tomar decisiones rápidas y repentinas. En la medida de lo posible, planeará sus diversas actividades con el máximo cuidado y una buena dosis de precaución. No le gusta correr riesgos y no acepta de buen grado los cambios. Básicamente, busca un medio seguro, tranquilo y estable, y cuando las condiciones son buenas es más que feliz dejando las cosas, corno están. El Gato es responsable en casi todo lo que hace, y por su naturaleza metódica y siempre atenta suele desempeñarse bien en la profesión que ha elegido. Es buen diplomático, abogado, vendedor, administrador o sacerdote, y sobresale en todo trabajo en donde pueda utilizar su excelente capacidad como comunicador. Tiende a ser leal con sus empleadores y es respetado por su integridad y honestidad, aunque si alguna vez alcanza una posición de poder puede volverse bastante intransigente y autoritario. El Gato le da gran importancia a su hogar, y en muchas ocasiones dedicará bástame tiempo y dinero a mantenerlo, amoblarlo, y equiparlo con las ultimas comodidades, porque el Gato es una criatura muy afecta a la comodidad. Tiene, además, algo de coleccionista, y a muchos Gatos les gusta bastante coleccionar antigüedades, sellos postales, monedas, objetos de arte o cualquier otra cosa que les llame la atención o les interese particularmente. La mujer Gato es de naturaleza amistosa, afectuosa y atenta, y hará lo que este a su alcance para dar a su hogar una atmósfera feliz y llena de cariño. Es además muy sociable y le gusta celebrar fiestas y reuniones entretenidas. Tiene gran capacidad para aprovechar al máximo su tiempo, y aun cuando se dedique a muchas actividades, se las arreglará siempre para hacerse de tiempo y sentarse a disfrutar de una buena lectura o de una charla. Tiene un gran sentido del humor, es muy artística y, muchas veces, una talentosa jardinera. El Gato cuida sensiblemente su aspecto y, en general, es elegante y de muy buena presencia. También le da mucha importancia a su relación con los demás y, particularmente, a las cuestiones sentimentales. Difícilmente le falte quien lo admire y, por lo común, tendrá varios romances serios antes de establecerse definitivamente. El Gato no es el más fiel de los signos, pero comprobará que armoniza particularmente bien con las personas nacidas bajo los signos de Cabra, Serpiente, Jabalí y Búfalo. Por sus maneras sociables y tranquilas también puede llevarse bien con el Tigre, el Dragón, el Caballo, el Mono, el Perro y con otro Gato; pero se sentirá muy incómodo con la Rata y el Gallo, pues estos dos signos tienden a decir claramente lo que piensan y a ser críticos en sus comentarios, y al Gato justamente le repugna todo tipo de crítica o discrepancia. Habitualmente, el Gato es afortunado en la vida, y suele tener feliz habilidad de estar en el lugar correcto en el momento correcto. las talentoso y de mente rápida, aunque a veces antepone el placer al trabajo y, si es posible, tenderá a elegir la vida fácil. A veces puede resultar un poco reservado y desconfiado de los motivos ajenos, aunque generalmente llevará una vida larga y dichosa, una vida que —hasta donde pueda— se verá libre de pleitos y discordias.',
    image: "horoscopochino-conejo.jpg",
  },
  {
    id: "dragon",
    animal: "Dragón",
    earthBranch: "辰 (Chén)",
    fixedSeason: "Primavera",
    direction: "Este",
    hours: "07:00 - 09:00",
    fixedElement: "Tierra",
    polarity: "Yang",
    quote: "",
    archetypalTitle: "Nacido bajo el signo de la fortuna",
    description:
      "La vida no es una  vela fugaz. Es una, espléndida antorcha que quiero hacer arder tan brillantemente como sea posible antes de entregarla a generaciones futuras. D e todos los animales que existen en el Horóscopo Chino d Dragón es el único que pertenece al mundo de lo mítico. Es un animal de tipo yang, guardián de tesoros increíbles y de una gran potencia interior que lo hace implacable con sus adversarios. Está presente siempre en todas las festividades del año nuevo chino, en la festividad del Tet, un Dragón de papel es paseado por las calles para finalizar quemado por las llamas simbolizando el año que se va. Sin embargo, luego renace de sus cenizas. El Dragón ha nacido bajo el signo de la fortuna. Es un personaje vivaz y orgulloso que tiene una enorme cuota de confianza en si mismo. Es también muy inteligente y muy rápido para sacar provecho de toda oportunidad que se le presente. Es ambicioso y decidido, y le irá bien en prácticamente todo lo que intente. Tiene algo de perfeccionista y siempre tratará de mantener las pautas elevadas que se fija para si. El Dragón no tolera de buen grado a los necios, y estará pronto a criticar a cualquiera o a cualquier cosa que le disguste Puede resaltar brusco y frontal en sus opiniones, y, por cierto, no es famoso por su acto de diplomacia. No obstante, suele creer en la palabra de los demás y puede resultar bastante ingenuo. Cuando alguna vez siente que abusaron de su confianza o que hirieron su dignidad puede volverse muy rencoroso, y le llevará mucho tiempo perdonar u olvidar. El Dragón es, por lo general, muy extravertido y especialmente propenso a concitar sobre sí la atención. Disfruta al estar en la mira de los demás y a menudo está a sus anchas cuando debe enfrentar un problema delicado o una situación tensa. Sus opiniones son muy apreciadas, y siempre tiene algo interésame o controvertido que decir. Tiene una gran energía y con frecuencia no tiene inconveniente en trabajar largas y solitarias horas para lograr lo que quiere. Sin embargo, puede ser bastante impulsivo y no siempre tiene en cuenta las consecuencias de sus actos. Además, tiene tendencia a vivir el momento, y no hay nada que lo irrite tanto como tener que esperar. El Dragón odia las postergaciones y puede ponerse extremadamente impaciente e irritable ante la menor demora. El Dragón tiene una enorme fe en su capacidad, pero corre el riesgo de confiar demasiado en si mismo y, a menos que obre con cuidado, puede cometer a veces graves errores de",
    socialAndWorkLife:
      "trabajo que lo ponga en contacto con los medios de comunicación. El Dragón confía mucho en su propio juicio y puede ser desdeñoso frente al consejo de los demás. Le gusta sentirse autosuficiente. y hay muchos Dragones que aprecian hasta tal punto su independencia que prefieren quedarse solteros toda su vida. No obstante, el Dragón suele tener muchos admiradores y serán muchas las personas que se sentirán atraídas por su personalidad ostentosa y su llamativa apariencia. De casarse, generalmente lo hará siendo Joven. Armoniza particularmente bien con los nacidos bajo los, signos de Serpiente, Rata, Mono y Gallo. Comprobará también que el Gato, el Jabalí, el Caballo y la Cabra son compañeros ideales y pronto se les unirá en sus escapadas. Dos Dragones también se llevarán bien, ya que se entie",
    relationships: "",
    fullText:
      "D e todos los animales que existen en el Horóscopo Chino d Dragón es el único que pertenece al mundo de lo mítico. Es un animal de tipo yang, guardián de tesoros increíbles y de una gran potencia interior que lo hace implacable con sus adversarios. Está presente siempre en todas las festividades del año nuevo chino, en la festividad del Tet, un Dragón de papel es paseado por las calles para finalizar quemado por las llamas simbolizando el año que se va. Sin embargo, luego renace de sus cenizas. El Dragón ha nacido bajo el signo de la fortuna. Es un personaje vivaz y orgulloso que tiene una enorme cuota de confianza en si mismo. Es también muy inteligente y muy rápido para sacar provecho de toda oportunidad que se le presente. Es ambicioso y decidido, y le irá bien en prácticamente todo lo que intente. Tiene algo de perfeccionista y siempre tratará de mantener las pautas elevadas que se fija para si. El Dragón no tolera de buen grado a los necios, y estará pronto a criticar a cualquiera o a cualquier cosa que le disguste Puede resaltar brusco y frontal en sus opiniones, y, por cierto, no es famoso por su acto de diplomacia. No obstante, suele creer en la palabra de los demás y puede resultar bastante ingenuo. Cuando alguna vez siente que abusaron de su confianza o que hirieron su dignidad puede volverse muy rencoroso, y le llevará mucho tiempo perdonar u olvidar. El Dragón es, por lo general, muy extravertido y especialmente propenso a concitar sobre sí la atención. Disfruta al estar en la mira de los demás y a menudo está a sus anchas cuando debe enfrentar un problema delicado o una situación tensa. Sus opiniones son muy apreciadas, y siempre tiene algo interésame o controvertido que decir. Tiene una gran energía y con frecuencia no tiene inconveniente en trabajar largas y solitarias horas para lograr lo que quiere. Sin embargo, puede ser bastante impulsivo y no siempre tiene en cuenta las consecuencias de sus actos. Además, tiene tendencia a vivir el momento, y no hay nada que lo irrite tanto como tener que esperar. El Dragón odia las postergaciones y puede ponerse extremadamente impaciente e irritable ante la menor demora. El Dragón tiene una enorme fe en su capacidad, pero corre el riesgo de confiar demasiado en si mismo y, a menos que obre con cuidado, puede cometer a veces graves errores de juicio. Si bien esto puede resaltar desastroso en su momento, el Dragón tiene la capacidad de retractarse y rearmar las piezas. El Dragón posee una personalidad tan firme, tanta fuerza de voluntad y un deseo tan grande de triunfar que, generalmente, alcanzará la cima en la profesión que haya elegido. Tiene muchas cualidades de mando y se desempeñará bien en puestos en los que pueda poner en práctica sus propias ideas y políticas. Habitualmente le va muy bien en política, en el negocio del espectáculo, como administrador de su propio negocio y en cualquier trabajo que lo ponga en contacto con los medios de comunicación. El Dragón confía mucho en su propio juicio y puede ser desdeñoso frente al consejo de los demás. Le gusta sentirse autosuficiente. y hay muchos Dragones que aprecian hasta tal punto su independencia que prefieren quedarse solteros toda su vida. No obstante, el Dragón suele tener muchos admiradores y serán muchas las personas que se sentirán atraídas por su personalidad ostentosa y su llamativa apariencia. De casarse, generalmente lo hará siendo Joven. Armoniza particularmente bien con los nacidos bajo los, signos de Serpiente, Rata, Mono y Gallo. Comprobará también que el Gato, el Jabalí, el Caballo y la Cabra son compañeros ideales y pronto se les unirá en sus escapadas. Dos Dragones también se llevarán bien, ya que se entienden mutuamente. Pero el Dragón no encontrará las cosas tan fáciles con el Búfalo y el Perro, quienes criticarán sus maneras impulsivas y un tanto extravertidas. También le será difícil aliarse con el Tigre, porque el Tigre —como el Dragón— tiende a decir lo que piensa, es de una fuerte personalidad y le gusta llevar la delantera. La mujer Dragón sabe lo que quiere y se dedica a todo lo que hace en forma muy resuelta y positiva. Ningún trabajo es insignificante para ella, y a menudo labora duro hasta haber asegurado su objetivo. Es sumamente práctica y bastante liberada. Odia verse limitada por la rutina y restricciones mezquinas, y le gusta tener suficiente libertad para poder salir y hacerlo que desee. Mantendrá la casa en orden, pero no es de las que se pasarán horas haciendo las tareas domésticas; hay muchas otras cosas que considera más importantes y que prefiere hacer. Como su contraparte masculino, tiene tendencia a decir claramente lo que piensa. El Dragón suele tener muchos intereses y disfruta de los deportes y otras actividades al aire libre. También le gusta viajar y muchas veces prefiere sitios alejados del itinerario habitual en vez de visitar las atracciones turísticas conocidas. Hay en él una veta de aventurero y, mientras su situación económica se lo permita (y el Dragón generalmente es sensato con su dinero), realizará extensos viajes a lo largo de su vida. El Dragón es un personaje extravagante y, si bien puede ser exigente con los demás y bastante precoz en sus primeros años y el tendrá muchos amigos y será casi siempre el centro de atención. Tiene tanto carisma y confianza en si mismo que suele volverse una fuente de inspiración para los demás. En China, es el líder del Carnaval y se ve favorecido además por una infrecuente cuota de suerte.",
    image: "horoscopochino-dragon.jpg",
  },
  {
    id: "serpiente",
    animal: "Serpiente",
    earthBranch: "巳 (Sì)",
    fixedSeason: "Verano",
    direction: "Sur",
    hours: "09:00 - 11:00",
    fixedElement: "Fuego",
    polarity: "Yang",
    quote:
      "El talento se desarrolla en lugares tranquilos, el carácter en la copiosa corriente de la vida cotidiana",
    archetypalTitle: "Signo del Zodíaco Chino: Serpiente",
    description:
      ". L a Serpiente es uno de los animales de tipo Yang de lo activo, de la luz. Es, la Serpiente, la princesa de los meandros, silenciosa y sinuosa que está presente desde tiempos remotos en sueños y pesadillas. Puede despertar atracción o repulsión. Representa uno de los símbolos iniciáticos esotéricos más elevados: el del círculo, que es el infinito o del conocimiento esotérico por excelencia. La Serpiente nació bajo el signo de la sabiduría. Es muy inteligente y su mente está permanentemente activa. Siempre está haciendo planes y buscando maneras de poder utilizar su considerable capacidad. Es una pensadora profunda y le gusta meditar y reflexionar. Muchas veces, a lo largo de su vida, mudará uno de sus famosos cueros de Serpiente y emprenderá nuevos intereses o iniciará un trabajo totalmente distinto. A la Serpiente le encanta el desafió y difícilmente comete errores. Es una hábil organizadora, tiene notable capacidad para los negocios y suele ser afortunada en cuestiones de dinero. La mayoría de las Serpientes gozan de seguridad económica en su vejez, con tal que no jueguen. ¡La Serpiente se distingue por ser la peor jugadora de todo el zodiaco chino! Por lo general, la Serpiente es de naturaleza calma y plácida, y prefiere las cosas sosegadas. No le gusta hallarse en una atmósfera frenética y odia que la apuren a lomar decisiones. Tampoco le gusta que interfieran en sus asuntos y tiende a confiar más en su propio juicio que a escuchar consejos. La Serpiente puede a veces parecer solitaria. Es callada, reservada y a veces tiene dificultades para comunicarse con los demás. Tiene muy poco tiempo para perder en habladurías y por cierto no tolera de buen grado a los tontos. No obstante, tiene buen sentido del humor, lo que se nota especialmente en momentos de crisis. Por cierto, la Serpiente no le teme al trabajo exigente, y es esmerada en todo lo que hace. Es muy decidida y hasta puede ser despiadada con tal de concretar sus aspiraciones. Su seguridad, voluntad y rapidez mental habitualmente le aseguran el éxito, pero en caso de fracasar le tomará mucho tiempo recuperarse. No soporta el fracaso y es muy mala perdedora. La Serpiente también puede resultar esquiva y no muy dispuesta a permitir que la gente entre en confianza con ella. Esa privacidad y desconfianza pueden volverse en su contra a veces; es una característica que todas las Serpientes deberían tratar de superar. Otro rasgo de la Serpiente es su tendencia al descanso después de cualquier acceso re",
    socialAndWorkLife:
      "trabajo totalmente distinto. A la Serpiente le encanta el desafió y difícilmente comete errores. Es una hábil organizadora, tiene notable capacidad para los negocios y suele ser afortunada en cuestiones de dinero. La mayoría de las Serpientes gozan de seguridad económica en su vejez, con tal que no jueguen. ¡La Serpiente se distingue por ser la peor jugadora de todo el zodiaco chino! Por lo general, la Serpiente es de naturaleza calma y plácida, y prefiere las cosas sosegadas. No le gusta hallarse en una atmósfera frenética y odia que la apuren a lomar decisiones. Tampoco le gusta que interfieran en sus asuntos y tiende a confiar más en su propio juicio que a escuchar consejos. La Serpiente puede a veces parecer solitaria. Es callada, reservada y a veces tiene dificultades para comunicarse",
    relationships: "",
    fullText:
      "L a Serpiente es uno de los animales de tipo Yang de lo activo, de la luz. Es, la Serpiente, la princesa de los meandros, silenciosa y sinuosa que está presente desde tiempos remotos en sueños y pesadillas. Puede despertar atracción o repulsión. Representa uno de los símbolos iniciáticos esotéricos más elevados: el del círculo, que es el infinito o del conocimiento esotérico por excelencia. La Serpiente nació bajo el signo de la sabiduría. Es muy inteligente y su mente está permanentemente activa. Siempre está haciendo planes y buscando maneras de poder utilizar su considerable capacidad. Es una pensadora profunda y le gusta meditar y reflexionar. Muchas veces, a lo largo de su vida, mudará uno de sus famosos cueros de Serpiente y emprenderá nuevos intereses o iniciará un trabajo totalmente distinto. A la Serpiente le encanta el desafió y difícilmente comete errores. Es una hábil organizadora, tiene notable capacidad para los negocios y suele ser afortunada en cuestiones de dinero. La mayoría de las Serpientes gozan de seguridad económica en su vejez, con tal que no jueguen. ¡La Serpiente se distingue por ser la peor jugadora de todo el zodiaco chino! Por lo general, la Serpiente es de naturaleza calma y plácida, y prefiere las cosas sosegadas. No le gusta hallarse en una atmósfera frenética y odia que la apuren a lomar decisiones. Tampoco le gusta que interfieran en sus asuntos y tiende a confiar más en su propio juicio que a escuchar consejos. La Serpiente puede a veces parecer solitaria. Es callada, reservada y a veces tiene dificultades para comunicarse con los demás. Tiene muy poco tiempo para perder en habladurías y por cierto no tolera de buen grado a los tontos. No obstante, tiene buen sentido del humor, lo que se nota especialmente en momentos de crisis. Por cierto, la Serpiente no le teme al trabajo exigente, y es esmerada en todo lo que hace. Es muy decidida y hasta puede ser despiadada con tal de concretar sus aspiraciones. Su seguridad, voluntad y rapidez mental habitualmente le aseguran el éxito, pero en caso de fracasar le tomará mucho tiempo recuperarse. No soporta el fracaso y es muy mala perdedora. La Serpiente también puede resultar esquiva y no muy dispuesta a permitir que la gente entre en confianza con ella. Esa privacidad y desconfianza pueden volverse en su contra a veces; es una característica que todas las Serpientes deberían tratar de superar. Otro rasgo de la Serpiente es su tendencia al descanso después de cualquier acceso repentino o prolongado de actividad. Consume tanta energía nerviosa que —sin el debido cuidado— podría sufrir hipertensión y trastornos nerviosos. Se ha dicho a veces que la Serpiente es de iniciarse tarde en la vida, lo cual se debe principalmente a que suele tomarle bastante tiempo encontrar una ocupación con la que sea realmente feliz. Sin embargo, puede desempeñarse bien en cualquier puesto que implique investigar y escribir, y en donde goce de suficiente libertad para desarrollar sus propios planes e ideas. Se desenvuelve bien como maestro político, jefe de personal o consejero social. La Serpiente elige detenidamente a sus amistades y si bien controla estrictamente su dinero, puede ser particularmente generosa con quienes le agradan. No se detendrá a pensarlo si desea hacer un regalo costoso o si quiere comprar las mejores localidades para invitar a amigos o seres queridos al teatro. En retribución, exige lealtad. La Serpiente es muy posesiva y puede ponerse sumamente celosa y sentirse gravemente herida si descubre que traicionaron su confianza. La Serpiente es famosa también por su buena apariencia, y nunca le fallan los admiradores. En especial, la mujer Serpiente es sumamente seductora. Tiene estilo, gracia y un excelente —y habitualmente caro— gusto para la ropa. Amiga de lo social.. probablemente tenga un amplio círculo de amistades, así como tiene el don de impresionar a quienes le importan. Tiene numerosos intereses y sus consejos y opiniones suelen ser muy apreciados. Por lo general, es de naturaleza tranquila; si bien se compromete a muchas que hace. Las cuestiones sentimentales son muy importantes para la Serpiente, que a menudo tendrá varios romances antes de asentarse. La Serpiente notará que armoniza especialmente bien con las personas nacidas bajo los signos de Búfalo, Dragón, Gato y Gallo. Mientras le den suficiente libertad para moverse en pos de sus intereses, también puede entablar una relación satisfactoria con la Rata, el Caballo, la Cabra, el Mono y el Perro, aunque debería mantenerse alejada de otra Serpiente, ya que podrían sentir celos una de otra con suma facilidad. También le será difícil llevarse bien con el directo y frontal jabalí, y hallará que el Tigre es una influencia demasiado perturbadora para sus modales calmos y pacíficos. Ciertamente, la Serpiente aprecia las cosas bellas de la vida, disfruta de la buena comida y suele sentir un agudo interés por las artes. También le gusta la lectura y generalmente le atraen temas como la filosofía, el pensamiento político la religión o lo oculto. Le fascina lo desconocido y su mente inquisitiva siempre está buscando respuestas. Algunos de los pensadores más originales del mundo han sido Serpientes. Aunque no lo admita abiertamente, la Serpiente suele tener cualidades síquicas y confía mucho en la intuición. Ciertamente la Serpiente no es el miembro con más energía del zodíaco chino. Prefiere avanzar a su propio ritmo y hacer las cosas que quiere. Es en gran parte dueña de su vida y en el transcurso de la misma probará cosas distintas. Tiene algo de chapucera, pero en algún momento y generalmente cuando menos se lo espera su trabajo y sus esfuerzos son reconocidos y, casi indefectiblemente, se encuentra con el éxito y la seguridad económica que tanto anhela.",
    image: "horoscopochino-serpiente.jpg",
  },
  {
    id: "caballo",
    animal: "Caballo",
    earthBranch: "午 (Wǔ)",
    fixedSeason: "Verano",
    direction: "Sur",
    hours: "11:00 - 13:00",
    fixedElement: "Fuego",
    polarity: "Yang",
    quote: "Haz lo que puedas, con lo que eres, donde estés",
    archetypalTitle: "Signo del Zodíaco Chino: Caballo",
    description:
      '"Haz lo que puedas, con lo que eres, donde estés ". E l Caballo es un animal del tipo Yang, activo, salvaje, indómito. Es la más noble de las conquistas animales del hombre Para conseguir que esté cerca hay que lacearlo, subyugarlo. Una vez logrado el dominio hay que conseguir el entendimiento para. que jinete y cabalgadura actúen como uno solo y el hombre se convierta en un dios de cuatro patas, como lo pensaron los aborígenes americanos que vieron por primera vez esta extraña criatura llegada con los conquistadores españoles. Es fuente de numerosas leyendas. El Caballo también es símbolo del espíritu del trigo y del ganado. El Caballo nació bajo los signos de la elegancia y el ardor. Es de un aire sumamente atractivo y encantador, y, generalmente, es muy sociable. Le encanta conocer gente y asistir a fiestas y otras reuniones sociales importantes. Es un personaje vivaz. que disfruta ser el centro de atención. Tiene muchas cualidades de mando y es muy admirado por su proceder honesto y frontal. Es un conversador elocuente y persuasivo, y tiene un gran amor por la discusión y el debate. Posee, además, una mente particularmente ágil y es capaz de asimilar cosas con notable velocidad. Sin embargo, es de temperamento fuerte y, aunque sus arranques generalmente son breves, suele decir cosa de las que más tarde se lamenta. Tampoco se destaca particularmente en guardar secretos. El Caballo tiene muchos intereses y se dedica a una amplia gama de actividades. Puede llegar a participar en tantas cosas que a menudo desperdicia su energía en proyectos que nunca tiene tiempo de terminar. Posee también tendencias a cambiar de intereses con bastante frecuencia, y suele ser presa de la última manía o moda que haya, hasta que surja algo mejor o más emocionante. Al Caballo le gusta además tener una cierta cuota de libertad e independencia en lo que hace. Odia verse limitado por normas y reglas menores y le gusta sentir que, hasta donde sea posible, no es responsable de nadie, salvo de si mismo. A pesar de ese espíritu de libertad, le agrada contar con el apoyo y el aliento de los demás para las cosas que emprende. En general, gracias a sus muchos talentos y a su naturaleza agradable, el Caballo llega lejos en la vida. Le gustan los desafíos y es un trabajador metódico e incansable. No obstante, si las cosas se dan en su contra y fracasa en alguna de sus empresas, le llevará tiempo en recuperarse y rearmarse otra vez. Para el Caballo, el éxito lo es todo. Fracasar es una de',
    socialAndWorkLife:
      "trabajo en particular. Incluso, entonces, probablemente esté alerta viendo si surgen para él nuevas y mejores oportunidades. El Caballo es de naturaleza inquieta, y se aburre con facilidad. Sin embargo, sobresale en cualquier puesto que le permita suficiente libertad para actuar .según su propia iniciativa, o que lo ponga en contacto con mucha gente. Si bien no se molesta en atesorar mucha riqueza, maneja cuidadosamente su economía y difícilmente tenga un problema económico serio. Al Caballo le encanta viajar y visitar lugares nuevos y lejanos. En algún momento de su vida sentirá la tentación de vivir en el exterior durante un período breve, y debido a su naturaleza adaptable encontrará que encaja bien dondequiera que vaya. El Caballo le presta mucha atención a su aspecto, y habitualmente ",
    relationships:
      "pareja. Es fiel y protector con su pareja, pero a pesar de sus compromisos familiares le gusta mantener una cierta independencia y tener la libertad de continuar con sus hobbies e intereses. Notará que armoniza particularmente bien con las personas nacidas bajo los signos de Tigre, Cabra, Gallo y Perro. También puede llevarse bien con el Gato, el Dragón, la Serpiente, el Jabalí y con otro Caballo, pero encontrará que el Búfalo es demasiado serio e intolerante para su gusto. El Caballo tendrá dificultad, asimismo, para entenderse con el Mono y la Rata: el Mono es demasiado inquisitivo y la Rata busca seguridad, y ambos resistirán las maneras más bien independientes del Caballo. La mujer Caballo suele ser muy atractiva, y tiene una personalidad amablemente extravertida. Es muy inteligente, t",
    fullText:
      "E l Caballo es un animal del tipo Yang, activo, salvaje, indómito. Es la más noble de las conquistas animales del hombre Para conseguir que esté cerca hay que lacearlo, subyugarlo. Una vez logrado el dominio hay que conseguir el entendimiento para. que jinete y cabalgadura actúen como uno solo y el hombre se convierta en un dios de cuatro patas, como lo pensaron los aborígenes americanos que vieron por primera vez esta extraña criatura llegada con los conquistadores españoles. Es fuente de numerosas leyendas. El Caballo también es símbolo del espíritu del trigo y del ganado. El Caballo nació bajo los signos de la elegancia y el ardor. Es de un aire sumamente atractivo y encantador, y, generalmente, es muy sociable. Le encanta conocer gente y asistir a fiestas y otras reuniones sociales importantes. Es un personaje vivaz. que disfruta ser el centro de atención. Tiene muchas cualidades de mando y es muy admirado por su proceder honesto y frontal. Es un conversador elocuente y persuasivo, y tiene un gran amor por la discusión y el debate. Posee, además, una mente particularmente ágil y es capaz de asimilar cosas con notable velocidad. Sin embargo, es de temperamento fuerte y, aunque sus arranques generalmente son breves, suele decir cosa de las que más tarde se lamenta. Tampoco se destaca particularmente en guardar secretos. El Caballo tiene muchos intereses y se dedica a una amplia gama de actividades. Puede llegar a participar en tantas cosas que a menudo desperdicia su energía en proyectos que nunca tiene tiempo de terminar. Posee también tendencias a cambiar de intereses con bastante frecuencia, y suele ser presa de la última manía o moda que haya, hasta que surja algo mejor o más emocionante. Al Caballo le gusta además tener una cierta cuota de libertad e independencia en lo que hace. Odia verse limitado por normas y reglas menores y le gusta sentir que, hasta donde sea posible, no es responsable de nadie, salvo de si mismo. A pesar de ese espíritu de libertad, le agrada contar con el apoyo y el aliento de los demás para las cosas que emprende. En general, gracias a sus muchos talentos y a su naturaleza agradable, el Caballo llega lejos en la vida. Le gustan los desafíos y es un trabajador metódico e incansable. No obstante, si las cosas se dan en su contra y fracasa en alguna de sus empresas, le llevará tiempo en recuperarse y rearmarse otra vez. Para el Caballo, el éxito lo es todo. Fracasar es una desgracia y una humillación. Al Caballo le gusta tener variedad en su vida, y probará muchas cosas antes de dedicarse a un trabajo en particular. Incluso, entonces, probablemente esté alerta viendo si surgen para él nuevas y mejores oportunidades. El Caballo es de naturaleza inquieta, y se aburre con facilidad. Sin embargo, sobresale en cualquier puesto que le permita suficiente libertad para actuar .según su propia iniciativa, o que lo ponga en contacto con mucha gente. Si bien no se molesta en atesorar mucha riqueza, maneja cuidadosamente su economía y difícilmente tenga un problema económico serio. Al Caballo le encanta viajar y visitar lugares nuevos y lejanos. En algún momento de su vida sentirá la tentación de vivir en el exterior durante un período breve, y debido a su naturaleza adaptable encontrará que encaja bien dondequiera que vaya. El Caballo le presta mucha atención a su aspecto, y habitualmente le gusta usar ropa elegante, colorida y más bien distinguida. Resulta muy atractivo para el sexo opuesto y suele tener muchos amoríos antes de formalizar su pareja. Es fiel y protector con su pareja, pero a pesar de sus compromisos familiares le gusta mantener una cierta independencia y tener la libertad de continuar con sus hobbies e intereses. Notará que armoniza particularmente bien con las personas nacidas bajo los signos de Tigre, Cabra, Gallo y Perro. También puede llevarse bien con el Gato, el Dragón, la Serpiente, el Jabalí y con otro Caballo, pero encontrará que el Búfalo es demasiado serio e intolerante para su gusto. El Caballo tendrá dificultad, asimismo, para entenderse con el Mono y la Rata: el Mono es demasiado inquisitivo y la Rata busca seguridad, y ambos resistirán las maneras más bien independientes del Caballo. La mujer Caballo suele ser muy atractiva, y tiene una personalidad amablemente extravertida. Es muy inteligente, tiene muchos intereses y está atenta a lodo lo que pasa alrededor suyo. Disfruta particularmente las actividades al aire libre y con frecuencia practica gimnasia o algún deporte. Le gustan también los viajes, la literatura y las artes, y es muy buena conversadora. Si bien el Caballo puede ser terco y más bien egocéntrico posee una naturaleza considerada y suele ayudar de buen grado a los demás. Tiene buen sentido del humor y habitualmente causará una buena impresión dondequiera que vaya. Mientras pueda refrenar su naturaleza ligeramente inquieta y mantener controlado su temperamento, el Caballo pasará su vida haciendo amigos, tomando parte en muchas y diversas actividades generalmente, alcanzando muchas de sus metas. Difícilmente su vida sea opaca.",
    image: "horoscopochino-caballo.jpg",
  },
  {
    id: "cabra",
    animal: "Cabra",
    earthBranch: "未 (Wèi)",
    fixedSeason: "Verano",
    direction: "Sur",
    hours: "13:00 - 15:00",
    fixedElement: "Tierra",
    polarity: "Yang",
    quote:
      "El buen humor es un de las mejoren prendas de vestir que uno puede ponerse en sociedad",
    archetypalTitle: "Nacido bajo el signo de arte",
    description:
      ". L a Cabra es uno de los siete animales del Horóscopo Chino que presenta características yang Se dice que una persona de tipo Yang es de corpulencia mediana. a menudo delgado o esbelto. Gusta de los colores vivos y estar siempre sonriente. también es un individualista orientado hacia la búsqueda personal. La Cabra suele ser testaruda, pero intuitiva y desenvuelta. La Cabra ha nacido bajo el signo del arte. Es imaginativa, creativa y aprecia las cosas bellas de la vida. Es de naturaleza despreocupada y prefiere vivir en un ambiente relajado y libre de presiones. Odia todo tipo de discordia o desavenencia y no le gusta verse limitada por una rutina estricta u horarios rígidos. La cabra no es alguien a quien apurar contra su voluntad pero, a pesar de su actitud aparentemente ligera, tiene algo de perfeccionista y cuando se pone a trabajar en un proyecto seguramente da lo mejor de sí. Habitualmente, la Cabra prefiere trabajar en equipo en vez de trabajar sola. Le gusta contar con el apoyo y el aliento de los demás; si debe enfrentar las cosas por su propia cuenta, puede inquietarse mucho, tendiendo a juzgar las cosas de modo bastante pesimista. en lo posible, dejará que los demás tomen las decisiones importantes. mientras ella se concentra en sus propias ocupaciones. No obstante, si se siente particularmente segura en una determinada materia, o si tiene que defender su posición, actuará con gran fortaleza y precisión. La Cabra tiene una naturaleza muy persuasiva y con frecuencia utiliza su considerable encanto para salirse con la suya. Sin embargo, puede ser más bien vacilante en cuanto a dejar que se conozcan sus verdaderos sentimientos; si aceptara ser más franca obtendría mejores resultados. La Cabra tiende a ser de carácter tranquilo y en cierto modo reservado, aunque cuando está en compañía que sea de su agrado a menudo se convierte en el centro de atención. Puede ser sumamente divertida, una maravillosa anfitriona en fiestas y una magnífica animadora. Cuando las luces caen sobre la Cabra, su adrenalina empieza a fluir y puede estar segura que dará una brillante función, particularmente si ello le permite de algún modo utilizar su capacidad creativa. De todos los signos del zodiaco Chino, probablemente la Cabra sea el más dotado artísticamente. Ya sea en el teatro, la literatura, la música o la pintura, la Cabra seguramente dejará una impresión duradera. Nació creadora y difícilmente este más feliz que al estar ocupada en alguna actividad artística. Pero",
    socialAndWorkLife: "",
    relationships: "",
    fullText:
      "L a Cabra es uno de los siete animales del Horóscopo Chino que presenta características yang Se dice que una persona de tipo Yang es de corpulencia mediana. a menudo delgado o esbelto. Gusta de los colores vivos y estar siempre sonriente. también es un individualista orientado hacia la búsqueda personal. La Cabra suele ser testaruda, pero intuitiva y desenvuelta. La Cabra ha nacido bajo el signo del arte. Es imaginativa, creativa y aprecia las cosas bellas de la vida. Es de naturaleza despreocupada y prefiere vivir en un ambiente relajado y libre de presiones. Odia todo tipo de discordia o desavenencia y no le gusta verse limitada por una rutina estricta u horarios rígidos. La cabra no es alguien a quien apurar contra su voluntad pero, a pesar de su actitud aparentemente ligera, tiene algo de perfeccionista y cuando se pone a trabajar en un proyecto seguramente da lo mejor de sí. Habitualmente, la Cabra prefiere trabajar en equipo en vez de trabajar sola. Le gusta contar con el apoyo y el aliento de los demás; si debe enfrentar las cosas por su propia cuenta, puede inquietarse mucho, tendiendo a juzgar las cosas de modo bastante pesimista. en lo posible, dejará que los demás tomen las decisiones importantes. mientras ella se concentra en sus propias ocupaciones. No obstante, si se siente particularmente segura en una determinada materia, o si tiene que defender su posición, actuará con gran fortaleza y precisión. La Cabra tiene una naturaleza muy persuasiva y con frecuencia utiliza su considerable encanto para salirse con la suya. Sin embargo, puede ser más bien vacilante en cuanto a dejar que se conozcan sus verdaderos sentimientos; si aceptara ser más franca obtendría mejores resultados. La Cabra tiende a ser de carácter tranquilo y en cierto modo reservado, aunque cuando está en compañía que sea de su agrado a menudo se convierte en el centro de atención. Puede ser sumamente divertida, una maravillosa anfitriona en fiestas y una magnífica animadora. Cuando las luces caen sobre la Cabra, su adrenalina empieza a fluir y puede estar segura que dará una brillante función, particularmente si ello le permite de algún modo utilizar su capacidad creativa. De todos los signos del zodiaco Chino, probablemente la Cabra sea el más dotado artísticamente. Ya sea en el teatro, la literatura, la música o la pintura, la Cabra seguramente dejará una impresión duradera. Nació creadora y difícilmente este más feliz que al estar ocupada en alguna actividad artística. Pero aun entonces le hará bien trabajar con otros en vez de hacerlo sola. La Cabra necesita inspiración e influencia guiadora, y una vez que encuentra su verdadero metiér suele recibir un amplio reconocimiento y aclamación. Aparte de su gusto por las artes, la Cabra es habitualmente muy religiosa y con frecuencia muestra un profundo interés por la naturaleza, los animales y el campo. La Cabra es, además, muy atlética. y muchas se han destacado en alguna actividad deportiva. Si bien la Cabra no es particularmente materialista ni se, preocupa especialmente por el dinero, suele ser afortunada en las cuestiones financieras y difícilmente le fallen los fondos necesarios para mantenerse. Sin embargo, es bastante indulgente y acostumbra gastar su dinero tan pronto como lo gana, en vez de ahorrar para el futuro. Generalmente, la Cabra deja su hogar siendo joven, aunque siempre mantendrá lazos muy fuertes con sus padres y los demás miembros de su familia, es también bastante nostálgica, y famosa por guardar recuerdos de su infancia y souvenir de sitios que ha visitado. Su hogar no será particularmente ordenado —aunque ella sabe dónde está cada cosa— pero sí seria minuciosamente limpio. Las cuestiones sentimentales son muy importantes para la Cabra, y por lo general tendrá muchos romances antes de formalizar su vida. Si bien la Cabra es bastante adaptable, prefiere vivir en un ambiente seguro y estable, y encontrará que Si lleva particularmente bien con las personas nacidas bajo los signos de Tigre, Caballo, Mono, Jabalí y Gato. También puede entablar una buena relación con e! Dragón, la Serpiente, e! Gallo y con otra Cabra. Pero tal vez el Búfalo y el Perro le resulten demasiado serios para su gusto. Tampoco le interesarán particularmente las maneras más bien frugales de la Rata. La mujer Cabra dedica todo su tiempo y energía a las necesidades de su familia. Tiene un excelente gusto para amoblar su casa y suele emplear su notable capacidad creativa para hacer ropa para ella y para sus hijos. Cuida mucho su aspecto y puede ser sumamente atractiva para el sexo opuesto. Si bien no es la más organizada de las personas, sus modales atractivos y su delicioso sentido del humor provocan una impresión favorable allí donde vaya. Es, además, una buena cocinera y la Jardinería y otras actividades al aire libre le brindan un gran placer. La Cabra puede hacerse de amigos con facilidad y la gente, por lo general, se siente a gusto en su compañía. Posee una naturaleza afable y comprensiva y. aunque a veces resulta terca, con el apoyo y el aliento adecuados puede vivir una vida feliz y muy satisfactoria. Y cuanto más pueda usar su capacitad creativa, más feliz será.",
    image: "horoscopochino-cabra.jpg",
  },
  {
    id: "mono",
    animal: "Mono",
    earthBranch: "申 (Shēn)",
    fixedSeason: "Otoño",
    direction: "Oeste",
    hours: "15:00 - 17:00",
    fixedElement: "Metal",
    polarity: "Yang",
    quote:
      "El secreto de la felicidad es éste: que tus intereses sean tan amplios como sea posible, y que tu reacción a las cosas y a las personas que te interesan resulte, hasta donde sea posible, amistosa en vez de hostil",
    archetypalTitle: "Nacido bajo el signo de la fantasía",
    description:
      ". E l Mono ha nacido bajo el signo de la fantasía. Es imaginativo, inquisitivo y le encanta controlar todo lo que pasa a su alrededor. Jamás se niega a dar consejos o tratar de resolver los problemas de los demás. Le gusta ser útil y su consejo invariablemente resulta sensato y confiable. Es inteligente, buen lector y siempre está ansioso por aprender. Tiene una excelente memoria, y son muchos los Monos que se han destacado como políglotas. El Mono es, además, muy convincente y le gusta tomar parte en debates y discusiones. Sus maneras amistosas y su aire seguro pueden resultar muy persuasivos, y en general no tiene problema para hacer que la gente piense como él es por esto que el Mono suele sobresalir como político y como orador público. Es también especialmente apto para trabajos de relaciones públicas y para ' todo empleo que signifique vender. Sin embargo, puede ser mañoso, astuto y ocasionalmente deshonesto, y aprovechará cualquier oportunidad para obtener una ganancia rápida o para terminar con sus rivales. Tiene tanto encanto y astucia que la gente a menudo no se da cuenta de lo que está urdiendo, hasta que ya es demasiado tarde. Sin embargo, a pesar de su naturaleza ingeniosa, corre el nesgo de engañarse a sí mismo. Tiene tanta confianza en su capacidad que difícilmente escucha consejos o acepta ayuda de alguien. Al Mono le gusta ayudar a otros, pero prefiere confiar en su propio juicio cuando se trata de sus cosas. Otra característica suya es que es sumamente bueno para resolver problemas, y tiene la gran habilidad de liberarse (y de liberar a los demás) de las situaciones más desesperadas. Es el maestro de la autoconservación. Con tamos diversos talentos el Mono puede ganar grandes sumas de dinero, pero le gusta gozar de la vida, y no se detendrá a pensarlo si quiere gastar su dinero en algunas vacaciones exóticas O en algún lujo que tenía bajo la mira. No obstante, puede ponerse muy envidioso si otra persona tiene lo que él desea. El Mono es un pensador original y. aunque le gusta la compañía, aprecia su independencia. Tiene que tener la libertad para actuar como quiere: un Mono que se sienta cercado o limitado por demasiadas restricciones pronto se sentirá infeliz. Además, cuando algo se pone aburrido o monótono, el Mono pronto pierde interés y dirige su atención a otra cosa. El Mono carece de. perseverancia, y esto a menudo puede impedir su progreso. Se distrae con facilidad y una tendencia que todo Mono debería tratar de superar: debería con",
    socialAndWorkLife:
      "trabajos de relaciones públicas y para ' todo empleo que signifique vender. Sin embargo, puede ser mañoso, astuto y ocasionalmente deshonesto, y aprovechará cualquier oportunidad para obtener una ganancia rápida o para terminar con sus rivales. Tiene tanto encanto y astucia que la gente a menudo no se da cuenta de lo que está urdiendo, hasta que ya es demasiado tarde. Sin embargo, a pesar de su naturaleza ingeniosa, corre el nesgo de engañarse a sí mismo. Tiene tanta confianza en su capacidad que difícilmente escucha consejos o acepta ayuda de alguien. Al Mono le gusta ayudar a otros, pero prefiere confiar en su propio juicio cuando se trata de sus cosas. Otra característica suya es que es sumamente bueno para resolver problemas, y tiene la gran habilidad de liberarse (y de liberar a los d",
    relationships:
      "pareja debe dejarle tiempo para que se dedique a sus diversos intereses, y permitirle entregarse a su pasión por los viajes. El Mono necesita tener variedad en su vida; se lleva particularmente bien con las personas nacidas bajo signos sociables y extravertidos, como la Rata, e! Dragón, el Jabalí y la Cabra. El Búfalo, el Gato, la Serpiente y el Perro también serán hechizados por la naturaleza ingeniosa y extravertida del Mono, pero es probable que el Mono exaspere al Gallo y al Caballo, y el Tigre tendrá poca paciencia para las mañas del Mono. Una relación entre dos Monos también funcionará bien; ambos se comprenden y pueden asistirse en sus diversos emprendimientos. La mujer Mono es inteligente, sumamente observadora y aguda para juzgar el carácter. Sus opiniones y puntos de vista suelen",
    fullText:
      "E l Mono ha nacido bajo el signo de la fantasía. Es imaginativo, inquisitivo y le encanta controlar todo lo que pasa a su alrededor. Jamás se niega a dar consejos o tratar de resolver los problemas de los demás. Le gusta ser útil y su consejo invariablemente resulta sensato y confiable. Es inteligente, buen lector y siempre está ansioso por aprender. Tiene una excelente memoria, y son muchos los Monos que se han destacado como políglotas. El Mono es, además, muy convincente y le gusta tomar parte en debates y discusiones. Sus maneras amistosas y su aire seguro pueden resultar muy persuasivos, y en general no tiene problema para hacer que la gente piense como él es por esto que el Mono suele sobresalir como político y como orador público. Es también especialmente apto para trabajos de relaciones públicas y para ' todo empleo que signifique vender. Sin embargo, puede ser mañoso, astuto y ocasionalmente deshonesto, y aprovechará cualquier oportunidad para obtener una ganancia rápida o para terminar con sus rivales. Tiene tanto encanto y astucia que la gente a menudo no se da cuenta de lo que está urdiendo, hasta que ya es demasiado tarde. Sin embargo, a pesar de su naturaleza ingeniosa, corre el nesgo de engañarse a sí mismo. Tiene tanta confianza en su capacidad que difícilmente escucha consejos o acepta ayuda de alguien. Al Mono le gusta ayudar a otros, pero prefiere confiar en su propio juicio cuando se trata de sus cosas. Otra característica suya es que es sumamente bueno para resolver problemas, y tiene la gran habilidad de liberarse (y de liberar a los demás) de las situaciones más desesperadas. Es el maestro de la autoconservación. Con tamos diversos talentos el Mono puede ganar grandes sumas de dinero, pero le gusta gozar de la vida, y no se detendrá a pensarlo si quiere gastar su dinero en algunas vacaciones exóticas O en algún lujo que tenía bajo la mira. No obstante, puede ponerse muy envidioso si otra persona tiene lo que él desea. El Mono es un pensador original y. aunque le gusta la compañía, aprecia su independencia. Tiene que tener la libertad para actuar como quiere: un Mono que se sienta cercado o limitado por demasiadas restricciones pronto se sentirá infeliz. Además, cuando algo se pone aburrido o monótono, el Mono pronto pierde interés y dirige su atención a otra cosa. El Mono carece de. perseverancia, y esto a menudo puede impedir su progreso. Se distrae con facilidad y una tendencia que todo Mono debería tratar de superar: debería concentrarse en una sola cosa por vez, con lo cual, a la larga, seguramente logrará más. El Mono se organiza bien y, aunque a veces se comporte un poco erráticamente, invariablemente tendrá algún plan en mente. En las raras ocasiones en que sus planes no salen muy bien suele contentarse con encoger los hombros y anotar los hechos en su experiencia. El Mono difícilmente comete dos veces el mismo error, y en e! transcurso de su vida probará de hacer muchas cosas. Al Mono le gusta impresionar, y no suelen faltarle seguidores y admiradores. Muchos se sienten atraídos por su buena apariencia, por su sentido del humor, o simplemente porque inspira mucha confianza. En general, el Mono se casa joven, y para que su matrimonio sea exitoso su pareja debe dejarle tiempo para que se dedique a sus diversos intereses, y permitirle entregarse a su pasión por los viajes. El Mono necesita tener variedad en su vida; se lleva particularmente bien con las personas nacidas bajo signos sociables y extravertidos, como la Rata, e! Dragón, el Jabalí y la Cabra. El Búfalo, el Gato, la Serpiente y el Perro también serán hechizados por la naturaleza ingeniosa y extravertida del Mono, pero es probable que el Mono exaspere al Gallo y al Caballo, y el Tigre tendrá poca paciencia para las mañas del Mono. Una relación entre dos Monos también funcionará bien; ambos se comprenden y pueden asistirse en sus diversos emprendimientos. La mujer Mono es inteligente, sumamente observadora y aguda para juzgar el carácter. Sus opiniones y puntos de vista suelen ser muy valorados. Al tener una naturaleza tan persuasiva frecuentemente se sale con la suya. Tiene muchos intereses y se dedica a una amplia variedad de actividades. Le da mucha importancia a su aspecto, viste con elegancia y le gusta cuidar particularmente su cabello. Puede ser sumamente afectuosa y puntillosa corno madre y tendrá buenas y leales amistades. Cuando el Mono puede refrenar su deseo de tomar parte en lo que ocurre a su alrededor y se concentra en una sola cosa a la vez, suele alcanzar las metas que anhela. Y si sufre alguna desilusión, seguramente retrocederá. El Mono es un sobreviviente, y su vida habitualmente está plena de hechos y colorido.",
    image: "horoscopochino-mono.jpg",
  },
  {
    id: "gallo",
    animal: "Gallo",
    earthBranch: "酉 (Yǒu)",
    fixedSeason: "Otoño",
    direction: "Oeste",
    hours: "17:00 - 19:00",
    fixedElement: "Metal",
    polarity: "Yang",
    quote: "El gran fin de la vida no es el conocimiento sino la acción",
    archetypalTitle: "Signo del Zodíaco Chino: Gallo",
    description:
      ". E l Gallo nació bajo el signo de la sinceridad. Tiene una personalidad pintoresca y colorida, y es minucioso en todo lo que hace. Es un excelente organizador y. en lo posible, le gusta planear de antemano sus diversas actividades con mucha anticipación. El Gallo es sumamente inteligente y, generalmente, muy buen lector. Tiene buen sentido del humor y es un orador eficaz y persuasivo. Le encanta conversar y tomar parte en toda clase de debates, y no vacila en decir lo que piensa con toda franqueza. No obstante, le falta tacto y fácilmente puede dañar su propia reputación u ofender a alguien con alguna acción o reflexión impensadas. Es, además, de naturaleza muy volátil y debería tratar constantemente de evitar actuar sin haber reflexionado. El Gallo suele ser muy distinguido en sus modales, y se conduce con un aire de confianza y autoridad. Es capaz en el manejo del dinero, y como en la mayoría de las cosas, organiza sus asuntos financieros con mucha habilidad. Decide bien sus inversiones y es capaz de alcanzar una gran riqueza. La mayor parte de los Gallos ahorran o utilizan prudentemente su dinero, aunque algunos hacen lo contrario y son famosos derrochadores. Afortunadamente, el Gallo tiene gran capacidad para ganar dinero y difícilmente le falten los fondos suficientes para mantenerse. Otra característica del Gallo es que indefectiblemente lleva consigo una libreta de apuntes o papeles de borrador. Constantemente anota recordatorios o datos importantes por temor a olvidarlos; no puede tolerar la ineficiencia y se maneja ordenada, precisa y metódicamente en sus diversas actividades. Usualmente el Gallo es muy ambicioso, aunque puede resultar poco realista con algunas de las cosas que espera lograr. En ocasiones se deja llevar demasiado por su imaginación y, si bien no le gusta que se entrometan en lo que hace, le convendría escuchar más las opiniones de los demás. Tampoco le gustan las críticas y, si siente que alguien duda de sus juicios o espía de cerca sus asuntos, sin dudas que el Gallo hará saber lo que siente. Puede ser también bastante egocéntrico y terco en cuestiones relativamente triviales, aunque en compensación es honesto y digno de confianza, algo que aprecian quienes están en contacto con él. Los Gallos nacidos entre las 5 y las 7 de la mañana y las 7 de la tarde tienden a ser los más extravertidos de su signo, aunque a todos los Gallos les gusta llevar una vida socia activa y les encanta asistir a fiestas y reuniones importantes. El Gall",
    socialAndWorkLife:
      "trabajo se lo permite, usará uniforme oficial con mucho orgullo y dignidad. No rehúsa a la publicidad y le encanta ser centro de atención. Suele desempeñarse bien en tareas de relaciones públicas o en cualquier trabajo que lo vincule a los medios de comunicación. Es también muy bueno como maestro. La mujer Gallo lleva una vida variada e interesante. Participa en variadas actividades y muchas personas se admiran de lo que ella puede lograr. La mujer Gallo suele ser de opiniones muy firmes y, como su contraparte masculino, no duda en decir lo que piensa o expresar a los demás cómo cree ella que deben hacerse las cosas. Es absolutamente eficiente y bien organizada, y su hogar generalmente es muy limpio y prolijo. Tiene buen gusto para la ropa y suele usar prendas elegantes pero muy prácticas.",
    relationships:
      "El Gallo tiene, por lo común, una familia numerosa, y, como padre, se interesa activamente por la educación de sus hijos. Es muy fiel con su pareja; notará que se lleva particularmente bien con la Serpiente, el Caballo, el Búfalo y el Dragón. Mientras no se entrometan demasiado en sus cosas, el Gallo puede entablar también una buena relación con la Rata, el Tigre, la Cabra y el Jabalí. En cambio, dos Gallos probablemente se irriten y riñan entre sí. Al Gato, bastante sensible, el Gallo se parecerá un poco grosero para su gusto; a su vez, el Gallo se exasperará fácilmente con el Mono, mañoso y siempre inquisitivo. Tampoco le será sencillo llevarse bien con el Perro. Si logra dominar su naturaleza volátil y aprende a tener mas tacto en algunas de las cosas que dice, el Gallo puede llegar lejos en la vida. Es capaz y talentoso, y siempre causará una impresión duradera, habitualmente favorable, dondequiera que vaya.",
    fullText:
      "E l Gallo nació bajo el signo de la sinceridad. Tiene una personalidad pintoresca y colorida, y es minucioso en todo lo que hace. Es un excelente organizador y. en lo posible, le gusta planear de antemano sus diversas actividades con mucha anticipación. El Gallo es sumamente inteligente y, generalmente, muy buen lector. Tiene buen sentido del humor y es un orador eficaz y persuasivo. Le encanta conversar y tomar parte en toda clase de debates, y no vacila en decir lo que piensa con toda franqueza. No obstante, le falta tacto y fácilmente puede dañar su propia reputación u ofender a alguien con alguna acción o reflexión impensadas. Es, además, de naturaleza muy volátil y debería tratar constantemente de evitar actuar sin haber reflexionado. El Gallo suele ser muy distinguido en sus modales, y se conduce con un aire de confianza y autoridad. Es capaz en el manejo del dinero, y como en la mayoría de las cosas, organiza sus asuntos financieros con mucha habilidad. Decide bien sus inversiones y es capaz de alcanzar una gran riqueza. La mayor parte de los Gallos ahorran o utilizan prudentemente su dinero, aunque algunos hacen lo contrario y son famosos derrochadores. Afortunadamente, el Gallo tiene gran capacidad para ganar dinero y difícilmente le falten los fondos suficientes para mantenerse. Otra característica del Gallo es que indefectiblemente lleva consigo una libreta de apuntes o papeles de borrador. Constantemente anota recordatorios o datos importantes por temor a olvidarlos; no puede tolerar la ineficiencia y se maneja ordenada, precisa y metódicamente en sus diversas actividades. Usualmente el Gallo es muy ambicioso, aunque puede resultar poco realista con algunas de las cosas que espera lograr. En ocasiones se deja llevar demasiado por su imaginación y, si bien no le gusta que se entrometan en lo que hace, le convendría escuchar más las opiniones de los demás. Tampoco le gustan las críticas y, si siente que alguien duda de sus juicios o espía de cerca sus asuntos, sin dudas que el Gallo hará saber lo que siente. Puede ser también bastante egocéntrico y terco en cuestiones relativamente triviales, aunque en compensación es honesto y digno de confianza, algo que aprecian quienes están en contacto con él. Los Gallos nacidos entre las 5 y las 7 de la mañana y las 7 de la tarde tienden a ser los más extravertidos de su signo, aunque a todos los Gallos les gusta llevar una vida socia activa y les encanta asistir a fiestas y reuniones importantes. El Gallo suele tener un amplio círculo de amistades y puede establecer contactos influyentes con notable facilidad. Es común que pertenezca a clubes y sociedades y participe en diversas actividades. Le interesan particularmente el medio ambiente, las cuestiones humanitarias y todo lo que afecte al bienestar de lo demás. Es de naturaleza muy afectuosa y hará mucho en ayuda de los menos afortunados. También le atrae mucho la horticultura y, si bien no pasa en la huerta tanto tiempo como quisiera, la misma estará permanentemente bien cuidada y será sumamente productiva. Por lo general, el Gallo es de apariencia muy distinguida y, si su trabajo se lo permite, usará uniforme oficial con mucho orgullo y dignidad. No rehúsa a la publicidad y le encanta ser centro de atención. Suele desempeñarse bien en tareas de relaciones públicas o en cualquier trabajo que lo vincule a los medios de comunicación. Es también muy bueno como maestro. La mujer Gallo lleva una vida variada e interesante. Participa en variadas actividades y muchas personas se admiran de lo que ella puede lograr. La mujer Gallo suele ser de opiniones muy firmes y, como su contraparte masculino, no duda en decir lo que piensa o expresar a los demás cómo cree ella que deben hacerse las cosas. Es absolutamente eficiente y bien organizada, y su hogar generalmente es muy limpio y prolijo. Tiene buen gusto para la ropa y suele usar prendas elegantes pero muy prácticas. El Gallo tiene, por lo común, una familia numerosa y, como padre, se interesa activamente por la educación de sus hijos. Es muy fiel con su pareja; notará que se lleva particularmente bien con la Serpiente, el Caballo, el Búfalo y el Dragón. Mientras no se entrometan demasiado en sus cosas, el Gallo puede entablar también una buena relación con la Rata. el Tigre, la Cabra y el Jabalí. En cambio, dos Gallos probablemente se irriten y riñan entre sí. Al Gato, bastante sensible, el Gallo se parecerá un poco grosero para su gusto; a su vez, el Gallo se exasperará fácilmente con el Mono, mañoso y siempre inquisitivo. Tampoco le será sencillo llevarse bien con el Perro. Si logra dominar su naturaleza volátil y aprende a tener mas tacto en algunas de las cosas que dice, el Gallo puede llegar lejos en la vida. Es capaz y talentoso, y siempre causará una impresión duradera, habitualmente favorable, dondequiera que vaya.",
    image: "horoscopochino-gallo.jpg",
  },
  {
    id: "perro",
    animal: "Perro",
    earthBranch: "戌 (Xū)",
    fixedSeason: "Otoño",
    direction: "Oeste",
    hours: "19:00 - 21:00",
    fixedElement: "Tierra",
    polarity: "Yang",
    quote:
      "En lo que sea que hagas, suprime los abusos, y ama a quienes te aman",
    archetypalTitle: "Signo del Zodíaco Chino: Perro",
    description:
      ". E l Perro ha nacido bajo los signos de la lealtad y el afán. Generalmente sostiene opiniones y creencia muy firmes, y es defensor de las causas justas. odia toda clase de injusticia o de tratamiento injusto y hará todo lo que este en su poder para ayudar a aquellos menos afortunados que el. Tiene un gran sentido del juego limpio y será honesto y sincero en sus tratos. El Perro es muy directo y frontal. Nunca dará rodeos a los problemas y hablará con franqueza, yendo al punto. También puede ser terco, aunque aceptará de buen grado escuchar las opiniones de los demás y tratara de ser los más justo que pueda al tomar una decisión. Estará pronto a dar consejo donde sea necesario, y será el primero en ofrecer ayuda cuando las cosas marchan mal. El Perro inspira confianza allí donde vaya, y mucha gente lo admira por su integridad y sus maneras resueltas. Es muy buen Juez del carácter y con frecuencia puede formarse una imagen muy precisa de alguien, a poco de haberlo conocido. Es muy intuitivo y suele presentir con mucha anticipación el modo en que resultaran las cosas. A pesar de su aire amistoso y amable, el Perro no es muy afecto a la vida social. Le disgusta tener que asistir a reuniones o fiestas importantes, prefiere mucho mas una comida tranquila con los amigos o una charla junto al fuego. El Perro es un excelente conversador y suele ser un magnifico relator de historias y anécdotas entretenidas. También es de una mente veloz y siempre alerta. Puede mantener la calma en medio de una crisis y, si bien tiene su genio. sus ataques de ira tienden a ser de corta duración. El Perro es fiel y digno de confianza, pero en caso de sentirse defraudado o rechazado de mala manera difícilmente perdone u olvide. Habitualmente sus intereses son muy definidos. Prefiere especializarse y hacerse experto en La área determinada, en vez de chapucear en distintas actividades. Por lo común le va bien en trabajos donde sienta que es útil a los demás, y suele ser apto para la profesión medica, las leyes, los servicios y también la enseñanza. No obstante, el Perro necesita sentirse motivado. Tiene que tener una meta en lo que hace; de no ser así. puede ir a la deriva por la vida sin llegar a ninguna parte. Una vez que tiene la motivación, casi nada podrá impedirle lograr su objetivo. Otra característica del Perro es su tendencia a preocuparse y ver las cosas de modo mas bien pesimista. Muchas veces esas preocupaciones son absolutamente innecesarias y de su propia invención, un ha",
    socialAndWorkLife:
      "trabajos donde sienta que es útil a los demás, y suele ser apto para la profesión medica, las leyes, los servicios y también la enseñanza. No obstante, el Perro necesita sentirse motivado. Tiene que tener una meta en lo que hace; de no ser así. puede ir a la deriva por la vida sin llegar a ninguna parte. Una vez que tiene la motivación, casi nada podrá impedirle lograr su objetivo. Otra característica del Perro es su tendencia a preocuparse y ver las cosas de modo mas bien pesimista. Muchas veces esas preocupaciones son absolutamente innecesarias y de su propia invención, un habito que, aunque le resulte difícil, debería tratar de superar. El Perro no es materialista ni se molesta especialmente en acumular gran riqueza. Mientras tenga lo necesario para mantener a su familia y para darse al",
    relationships:
      "pareja y hará lo que este a su alcance para proporcionarle un hogar digno y confortable. Puede llevarse sumamente bien con las personas nacidas bajo los signos de Caballo, Jabalí, Tigre y Mono. También puede entablar una sólida y estable relación con la Rata. el Búfalo, el Gato. la Serpiente y con otro Perro, en cambio, el Dragón le resultará demasiado extravagante para su gusto. También hallara difícil congeniar con la creativa e imaginativa Cabra, y es probable que el Gallo, con su franqueza, lo irrite de sobremanera. La mujer Perro es famosa por su belleza. Es de naturaleza cálida y afectuosa, aunque será muy prudente y reservada hasta conocer bien a la otra persona, es muy inteligente y puede ser sumamente ambiciosa a pesar de su apariencia calma y tranquila. Le gusta el deporte y las ",
    fullText:
      "E l Perro ha nacido bajo los signos de la lealtad y el afán. Generalmente sostiene opiniones y creencia muy firmes, y es defensor de las causas justas. odia toda clase de injusticia o de tratamiento injusto y hará todo lo que este en su poder para ayudar a aquellos menos afortunados que el. Tiene un gran sentido del juego limpio y será honesto y sincero en sus tratos. El Perro es muy directo y frontal. Nunca dará rodeos a los problemas y hablará con franqueza, yendo al punto. También puede ser terco, aunque aceptará de buen grado escuchar las opiniones de los demás y tratara de ser los más justo que pueda al tomar una decisión. Estará pronto a dar consejo donde sea necesario, y será el primero en ofrecer ayuda cuando las cosas marchan mal. El Perro inspira confianza allí donde vaya, y mucha gente lo admira por su integridad y sus maneras resueltas. Es muy buen Juez del carácter y con frecuencia puede formarse una imagen muy precisa de alguien, a poco de haberlo conocido. Es muy intuitivo y suele presentir con mucha anticipación el modo en que resultaran las cosas. A pesar de su aire amistoso y amable, el Perro no es muy afecto a la vida social. Le disgusta tener que asistir a reuniones o fiestas importantes, prefiere mucho mas una comida tranquila con los amigos o una charla junto al fuego. El Perro es un excelente conversador y suele ser un magnifico relator de historias y anécdotas entretenidas. También es de una mente veloz y siempre alerta. Puede mantener la calma en medio de una crisis y, si bien tiene su genio. sus ataques de ira tienden a ser de corta duración. El Perro es fiel y digno de confianza, pero en caso de sentirse defraudado o rechazado de mala manera difícilmente perdone u olvide. Habitualmente sus intereses son muy definidos. Prefiere especializarse y hacerse experto en La área determinada, en vez de chapucear en distintas actividades. Por lo común le va bien en trabajos donde sienta que es útil a los demás, y suele ser apto para la profesión medica, las leyes, los servicios y también la enseñanza. No obstante, el Perro necesita sentirse motivado. Tiene que tener una meta en lo que hace; de no ser así. puede ir a la deriva por la vida sin llegar a ninguna parte. Una vez que tiene la motivación, casi nada podrá impedirle lograr su objetivo. Otra característica del Perro es su tendencia a preocuparse y ver las cosas de modo mas bien pesimista. Muchas veces esas preocupaciones son absolutamente innecesarias y de su propia invención, un habito que, aunque le resulte difícil, debería tratar de superar. El Perro no es materialista ni se molesta especialmente en acumular gran riqueza. Mientras tenga lo necesario para mantener a su familia y para darse algunos gustos ocasionales estará más que feliz No obstante, cuando tiene algún ahorro tiende a ser bastante derrochador y no siempre da a su dinero el mejor uso. Tampoco es muy buen especulador, por lo que le convendría solicitar consejo profesional antes de hacer cualquier inversión a largo plazo. Al Perro difícilmente le falten admiradores, si bien no es una persona con quien sea fácil convivir. Su humor es variable y sus normas son exigentes, pero será fiel y protector con su pareja y hará lo que este a su alcance para proporcionarle un hogar digno y confortable. Puede llevarse sumamente bien con las personas nacidas bajo los signos de Caballo, Jabalí, Tigre y Mono. También puede entablar una sólida y estable relación con la Rata. el Búfalo, el Gato. la Serpiente y con otro Perro, en cambio, el Dragón le resultará demasiado extravagante para su gusto. También hallara difícil congeniar con la creativa e imaginativa Cabra, y es probable que el Gallo, con su franqueza, lo irrite de sobremanera. La mujer Perro es famosa por su belleza. Es de naturaleza cálida y afectuosa, aunque será muy prudente y reservada hasta conocer bien a la otra persona, es muy inteligente y puede ser sumamente ambiciosa a pesar de su apariencia calma y tranquila. Le gusta el deporte y las actividades al aire libre, y tiene el don de descubrir gangas en los lugares mas inverosímiles. Puede ponerse bastante impaciente cuando las cosas no marchan como quisiera. Por lo general, los Perros tienen muy buenas maneras con los niños y pueden ser padres muy cariñosos. El Perro difícilmente sea más feliz que cuando ayuda a alguien o hace algo que beneficie a otros. Mientras pueda superar su tendencia a preocuparse, llevara una vida muy plena y activa, en la que hará muchos amigos y una enorme cuota de bien.",
    image: "horoscopochino-perro.jpg",
  },
  {
    id: "jabali",
    animal: "Jabalí / Cerdo",
    earthBranch: "亥 (Hài)",
    fixedSeason: "Invierno",
    direction: "Norte",
    hours: "21:00 - 23:00",
    fixedElement: "Agua",
    polarity: "Yang",
    quote:
      "Confía en los hombres y ellos serán sinceros contigo trátalos con grandeza y ellos se mostrarán a sí mismos como grandes",
    archetypalTitle: "Nacido bajo el signo de la honestidad",
    description:
      ". E l Jabalí ha nacido bajo el signo de la honestidad. Su naturaleza es amable y comprensiva y es famoso por su capacidad como pacificador. Odia todo tipo de discordia o desavenencia y hará todo lo que esté a su alcance para resolver diferencias de opinión o para reunir facciones opuestas. Es un gran conversador y es sincero y directo al hablar. Le desagrada la falsedad y la hipocresía y cree firmemente en la justicia y en el mantenimiento del orden y de la ley. Sin embargo, a pesar de esas creencias, el Jabalí es razonablemente tolerante y suele perdonar los errores de los demás, difícilmente alimenta rencores y nunca es vengativo. Por lo general, es un ser muy sociable. Disfruta de la compañía de otras personas y le gusta participar en actividades colectivas o grupales. Será un miembro leal de algún club o sociedad y se podrá contar con el cuando haga falta una mano para ayudar en alguna función. Es un excelente recaudador de fondos para caridad y aporta siempre a las causas humanitarias. El Jabalí es un trabajador responsable y dedicado y se lo respeta particularmente por su confiabilidad y por su integridad. De Joven incursionará en diferentes trabajos, pero usualmente será más feliz en trabajos donde sienta que sirve a los demás. Concederá su tiempo desinteresadamente por el bien común. Es sumamente apreciado por sus colegas y empleadores. El Jabalí tiene buen sentido del humor, e invariablemente tiene lista una sonrisa, una broma o alguna observación graciosa. Le encanta entretener y agradar a los demás, muchos de ellos se han dedicado al espectáculo o siguen con placer la carrera de estrellas y personalidades famosas. Lamentablemente, hay personas que se aprovechan de la naturaleza bondadosa del Jabalí y abusan de su generosidad. Al Jabalí le cuesta mucho decir no y aunque le disguste ponerse firme, en ocasiones convendría decir es suficiente. También puede ser bastante crédulo e ingenuo, si en algún momento de su vida siente que lo han desilusionado de mala manera se asegurará de que jamás vuelva a ocurrir y tratará de confiar sólo en sus propias fuerzas. Hay muchos Jabalíes que se han convertido en empresarios o se han forjado una exitosa carrera por cuenta propia, después de un temprano desengaño en la vida. Si bien el Jabalí tiende a gastar bastante libremente su dinero, en general es muy sagaz en cuestiones financieras; de hecho, muchos de ellos han acumulado fortuna. Otra de las características del Jabalí es la de recuperarse con bastante ra",
    socialAndWorkLife:
      "trabajos, pero usualmente será más feliz en trabajos donde sienta que sirve a los demás. Concederá su tiempo desinteresadamente por el bien común. Es sumamente apreciado por sus colegas y empleadores. El Jabalí tiene buen sentido del humor, e invariablemente tiene lista una sonrisa, una broma o alguna observación graciosa. Le encanta entretener y agradar a los demás, muchos de ellos se han dedicado al espectáculo o siguen con placer la carrera de estrellas y personalidades famosas. Lamentablemente, hay personas que se aprovechan de la naturaleza bondadosa del Jabalí y abusan de su generosidad. Al Jabalí le cuesta mucho decir no y aunque le disguste ponerse firme, en ocasiones convendría decir es suficiente. También puede ser bastante crédulo e ingenuo, si en algún momento de su vida sien",
    relationships:
      "pareja. Una vez que haya formalizado, será fiel y un gran protector de su compañera o compañero. Se entiende particularmente bien con las personas nacidas bajo los signos de Cabra, Gato, Perro, Tigre y con otro Jabalí, Por su naturaleza afable y tranquila también puede establecer una relación satisfactoria con los restantes signos zodiacales chinos, a excepción de la Serpiente. La Serpiente tiende a ser astuta, reservada y muy precavida esta actitud puede irritar intensamente al honesto y abierto Jabalí. La mujer nacida bajo el signo de Jabalí dedica toda su energía a las necesidades de sus hijos y de su pareja. Trata de asegurar que nada les falte y lo que más disfruta es poder ver el placer de ellos. Su hogar será, además, o bien muy limpio y ordenado o irremediablemente desordenado. Es ",
    fullText:
      "E l Jabalí ha nacido bajo el signo de la honestidad. Su naturaleza es amable y comprensiva y es famoso por su capacidad como pacificador. Odia todo tipo de discordia o desavenencia y hará todo lo que esté a su alcance para resolver diferencias de opinión o para reunir facciones opuestas. Es un gran conversador y es sincero y directo al hablar. Le desagrada la falsedad y la hipocresía y cree firmemente en la justicia y en el mantenimiento del orden y de la ley. Sin embargo, a pesar de esas creencias, el Jabalí es razonablemente tolerante y suele perdonar los errores de los demás, difícilmente alimenta rencores y nunca es vengativo. Por lo general, es un ser muy sociable. Disfruta de la compañía de otras personas y le gusta participar en actividades colectivas o grupales. Será un miembro leal de algún club o sociedad y se podrá contar con el cuando haga falta una mano para ayudar en alguna función. Es un excelente recaudador de fondos para caridad y aporta siempre a las causas humanitarias. El Jabalí es un trabajador responsable y dedicado y se lo respeta particularmente por su confiabilidad y por su integridad. De Joven incursionará en diferentes trabajos, pero usualmente será más feliz en trabajos donde sienta que sirve a los demás. Concederá su tiempo desinteresadamente por el bien común. Es sumamente apreciado por sus colegas y empleadores. El Jabalí tiene buen sentido del humor, e invariablemente tiene lista una sonrisa, una broma o alguna observación graciosa. Le encanta entretener y agradar a los demás, muchos de ellos se han dedicado al espectáculo o siguen con placer la carrera de estrellas y personalidades famosas. Lamentablemente, hay personas que se aprovechan de la naturaleza bondadosa del Jabalí y abusan de su generosidad. Al Jabalí le cuesta mucho decir “no” y aunque le disguste ponerse firme, en ocasiones convendría decir es suficiente. También puede ser bastante crédulo e ingenuo, si en algún momento de su vida siente que lo han desilusionado de mala manera se asegurará de que jamás vuelva a ocurrir y tratará de confiar sólo en sus propias fuerzas. Hay muchos Jabalíes que se han convertido en empresarios o se han forjado una exitosa carrera por cuenta propia, después de un temprano desengaño en la vida. Si bien el Jabalí tiende a gastar bastante libremente su dinero, en general es muy sagaz en cuestiones financieras; de hecho, muchos de ellos han acumulado fortuna. Otra de las características del Jabalí es la de recuperarse con bastante rapidez de los reveses inesperados. Su fe y su fuerza de carácter lo mantienen de pie. Si hay un trabajo que él pueda hacer o algo que desee conseguir, lo acometerá con obstinada resolución. Puede ser terco y una vez que se ha decidido difícilmente cambiará de opinión, no importa cuántos le supliquen. Si bien el Jabalí puede trabajar con mucho empeño, también sabe disfrutar. Es un gran buscador de placer y gastará el dinero ganado con esfuerzo muy alegremente en unas lujosas vacaciones, una costosa cena, pues el Jabalí es un conocedor del buen vino y la buena comida, o en diversas recreaciones. También le agradan las pequeñas reuniones sociales y, si la compañía es de su agrado, se convierte fácilmente en el alma de la fiesta. No obstante, cuando está entre extraños o en reuniones muy grandes tiende a mantenerse apartado. El Jabalí es una criatura a la que le gusta el confort y normalmente su hogar está equipado con lo último en utensilios de lujo. Si le es posible, preferirá vivir en el campo antes que en la ciudad y optará por cultivar un gran huerto, ya que suelen ser excelentes horticultores. Es muy sociable y popular con el sexo opuesto y suele tener gran cantidad de romances antes de formalizar una pareja. Una vez que haya formalizado, será fiel y un gran protector de su compañera o compañero. Se entiende particularmente bien con las personas nacidas bajo los signos de Cabra, Gato, Perro, Tigre y con otro Jabalí, Por su naturaleza afable y tranquila también puede establecer una relación satisfactoria con los restantes signos zodiacales chinos, a excepción de la Serpiente. La Serpiente tiende a ser astuta, reservada y muy precavida esta actitud puede irritar intensamente al honesto y abierto Jabalí. La mujer nacida bajo el signo de Jabalí dedica toda su energía a las necesidades de sus hijos y de su pareja. Trata de asegurar que nada les falte y lo que más disfruta es poder ver el placer de ellos. Su hogar será, además, o bien muy limpio y ordenado o irremediablemente desordenado. Es extraño, pero parece que no hay término medio con la mujer nacida bajo el signo del Jabalí. ¡O adora los quehaceres domésticos o los detesta! No obstante, tiene un apreciable talento como organizadora, lo cual, combinado con sus maneras abiertas y afables, le permite lograr muchos de sus objetivos. También es una madre cariñosa y responsable y, por otra parte, tiene muy buen gusto para elegir ropa. Generalmente, el Jabalí es afortunado en la vida y difícilmente le falte algo. Mientras no permita que los demás se aprovechen de su naturaleza bondadosa y no tema afirmarse, pasará la vida haciendo amigos, ayudando a los demás y ganándose la admiración de muchos.",
    image: "horoscopochino-jabali.jpg",
  },
];

// ---------------------------------------------------------------------------
// 4. HORÓSCOPO MAYA: 13 LUNAS Y LOS SELLOS SOLARES
// ---------------------------------------------------------------------------

export const mayanIntro = {
  title: "Horóscopo Maya: Las 13 Lunas Sagradas y los Sellos Solares",
  quote: {
    text: "El calendario sagrado Maya sincroniza el ciclo Tierra-Luna en un ritmo armónico de 13 lunas de 28 días (364 días) más un día consagrado a la fiesta y la sincronización cósmica: el 'Día del Tiempo fuera del Tiempo'.",
    source: "Cosmovisión del Tzolkin — Amonra Chile y Oráculos.cl",
  },
  lunarCycleExplanation:
    "A diferencia del zodíaco solar babilónico occidental, el horóscopo maya es estrictamente lunar y biológico. El año se compone de 13 lunas correspondientes al ciclo completo de la mujer y de las mareas. Cada luna dura 28 días exactos (13 x 28 = 364 días). El día 365 —que en nuestro calendario gregoriano corresponde al 25 de julio— es el 'Día Verde' o 'Día Fuera del Tiempo', una jornada sagrada de introspección, arte, perdón universal y preparación comunitaria para el nuevo ciclo galáctico que inicia el 26 de julio.",
  genesisMayaPhilosophy:
    "En la cosmovisión maya, cada una de las 13 lunas representa un peldaño de conciencia ascendente en el Génesis Cósmico: desde el primer chispazo instintivo del Murciélago en las cavernas iniciales, pasando por la ley de polaridad del Escorpión y el amor sensible del Venado, hasta culminar en la sabiduría paciente y trascendente de la Tortuga.",
};

export const mayanSigns: MayanSign[] = [
  {
    id: "murcielago",
    moonNumber: 1,
    indigenousName: "Tzootz",
    animalName: "Murciélago",
    dates: "26 de julio al 22 de agosto",
    personality:
      "Los de esta luna, por naturaleza siempre están al mando de todo y poseen mucho carisma. Por lo tanto los murciélagos tienen una energía especial, no tienen límites, todo puede cumplirse. Tienen un carácter muy fuerte que lo desarrollan a muy temprana edad. Tienen las cosas claras, por lo tanto su autoestima esta siempre alta. Al ser lideres pueden estar al mando de una empresa, o bien pueden ir escalando de poco hasta alcanzar el éxito máximo. Se dice que son muy luchadores, no se les escapa nada. Están dotados de una habilidad especial para resolver problemas. El Murciélago es el primer",
    genesisMayaStage:
      "El Murciélago es el primer peldaño de conciencia de la evolución, en el Génesis Maya. Representa a la humanidad en la era de las cavernas, cuando aún no había inventado la rueda, ni el uso del fuego, todo aún está por descubrir. Por eso el murciélago posee ese espíritu de investigación y curiosidad, innato en los nativos de este signo. Su naturaleza es primaria, vital, instintiva. Reacciona por los impulsos que le dicta su instinto.",
    cosmicSpiralTurn: "Es el primer giro de espiral en la elíptica cósmica",
    image: "horoscopomaya-murcielago.jpg",
  },
  {
    id: "escorpion",
    moonNumber: 2,
    indigenousName: "Dzec",
    animalName: "Escorpión / Alacrán",
    dates: "23 de agosto a 19 de septiembre",
    personality:
      "Los escorpiones son muy de seguir las costumbres y la tradicionalidad. Pueden parecer que tienen una amplitud mental sobre cualquier tema, pero en lo profundo ellos tienen sus ideas rígidas que no les gustan cambiar. Analizan y observan cada situación, le encanta escuchar al otro pero no relatar sus más profundos comentarios. Son muy activos y hablan lo justo y necesario. Cuando el escorpión enuncia algo es porque es de suma importancia. El Alacrán o Escorpión del desierto es el segundo peldaño de conciencia de la evolución, en el Génesis Maya. Representa la Ley de Polaridad: toda energía genera su opuesto exacto. Positivo y negativo no son sino los extremos de una misma fuerza, divididos se confrontan, juntos se convierten en la materia que gobierna al Mundo y mueve Universos. Así es el Alacrán, dual, contradictorio, experimentando todas las posibilidades que le brinda su ser. Extremista, a veces, para conocer sus propios límites. El UNO se convirtió en dos para conocerse y jugar el juego de la existencia. El dos representa la energía creativa, el trabajo, la materia. Es el segundo giro de espiral en la elíptica cósmica. El Juego de la Ilusión a comenzado.",
    genesisMayaStage:
      "El Alacrán o Escorpión del desierto es el segundo peldaño de conciencia de la evolución, en el Génesis Maya. Representa la Ley de Polaridad: toda energía genera su opuesto exacto. Positivo y negativo no son sino los extremos de una misma fuerza, divididos se confrontan, juntos se convierten en la materia que gobierna al Mundo y mueve Universos. Así es el Alacrán, dual, contradictorio, experimentando todas las posibilidades que le brinda su ser. Extremista, a veces, para conocer sus propios límites. El UNO se convirtió en dos para conocerse y jugar el juego de la existencia. El dos representa la energía creativa, el trabajo, la materia.",
    cosmicSpiralTurn: "Es el segundo giro de espiral en la elíptica cósmica",
    image: "horoscopomaya-escorpion.jpg",
  },
  {
    id: "venado",
    moonNumber: 3,
    indigenousName: "Keh",
    animalName: "Venado",
    dates: "20 de septiembre a 17 de octubre",
    personality:
      "Dentro del horóscopo maya, las personas que poseen la mayor sensibilidad son los venados. Han nacido para amar profundamente y recibir mucho amor. Les encanta la paz y la armonía. Les encantan los momentos de cariño, amor, ternura. Son personas con mucho sentimentalismo, por eso requieren de un medio donde se sientan a gusto. No son para nada agresivos ni violentos, en su vida no existen esas palabras. Para ellos la vida es maravillosa y esta llena de caminos nuevos, hasta que se demuestre lo opuesto. Poseen mucha sinceridad y por supuesto les gusta rodearse de gente que sea igual a ellos. Son extremadamente sensuales. A través de su mirada se puede ver toda la ternura que poseen. Con ella seducen muchísimo y es imposible no mirarlos, atrapan a primera vista. Afortunadamente todas las metas que se ponen, las cumplen. Lo realizan todo tan despacito y armónico que nadie se toma el atrevimiento a decir la palabra NO, para no lastimarlos. Suelen ser muy inocentes y compran con esa actitud. El Venado es el tercer",
    genesisMayaStage:
      "El Venado es el tercer peldaño de conciencia de la evolución, en el Génesis Maya. Representa la combinación de las tres fuerzas: el Creador, lo creado y la energía que lo sostiene.",
    cosmicSpiralTurn:
      "Es el tercer giro de espiral ascendente en la elíptica cósmica",
    image: "horoscopomaya-venado.jpg",
  },
  {
    id: "lechuza",
    moonNumber: 4,
    indigenousName: "Moan",
    animalName: "Lechuza",
    dates: "18 de octubre a 14 de noviembre",
    personality:
      "Los nativos de esta luna, son seres muy intuitivos, podrían ser muy buenos psicólogos por eso son personas a las cuales recurren otras por tener este don. Suelen ser muy sociables. Como toda lechuza, son extremadamente sabias, siempre saben aconsejar en el momento adecuado. El saber que poseen proviene de lo más profundo de su alma. Son seres muy espirituales, sanan cuerpo y alma. Sin conocerlos podemos pensar que las lechuzas son seres volátiles, pero verdaderamente están metidos en su mundo interno, meditando y viajando por nuevos rumbos, planificando nuevas propuestas para mas adelante. La Lechuza es el cuarta",
    genesisMayaStage:
      "La Lechuza es el cuarta peldaño de conciencia de la evolución, en el Génesis Maya. Representa el comienzo de la creación, como empieza a poblarse el mundo, salimos de la era de los hielos, y la flora y fauna comienza a aparecer en la superficie de la tierra. En el plano de la vida vemos como llevar a cabo nuestros proyectos, tratamos de darle forma, nos conectamos con el mundo de las imagines y los espacios. Lo inmaterial empieza a cobrar cuerpo. Vemos la forma de que nuestros sueños se hagan realidad.",
    cosmicSpiralTurn:
      "Es el cuarto giro de espiral ascendente en la elíptica cósmica",
    image: "horoscopomaya-lechuza.jpg",
  },
  {
    id: "pavoreal",
    moonNumber: 5,
    indigenousName: "Kutz",
    animalName: "Pavo Real",
    dates: "15 de noviembre a 12 de diciembre",
    personality:
      "Los pavos reales son únicos e irrepetibles. Son seres cuya tarea es crearse a si mismos una y otra vez con el solo fin de resaltar y mostrarse enteramente. Están en este mundo para ser lo mejor en todo, no les gusta la gente mediocre. No les gusta el punto medio, son muy extremistas, o lo absoluto o nada. Son muy egocéntricos, hacen muchas locuras pero son sumamente originales en lo que hacen. Por lo tanto suelen ver las cosas siempre muy positivas, desde el lado del optimismo. Se divierten muchísimo, disfrutan el aquí y el ahora. En lo más profundo de sus almas a ellos les gustaría tener una vida sin complicaciones, pero no les ocurre así. Porque querer siempre ganar y hacer las cosas bien, nunca se conforman con nada. Siempre piensan que hay algo mejor de lo que ellos hacen. Son personas con tendencia a subir de peso, por eso siempre están queriendo hacer dietas balanceadas para controlar esa subida. El Pavo Real es el quinto",
    genesisMayaStage:
      "El Pavo Real es el quinto peldaño de conciencia de la evolución, en el Génisis Maya. Representa los hijos que el hombre trae al mundo. En la historia de la humanidad es cuando la raza humana empieza a poblar la tierra con su descendencia, aparece la idea de propiedad en el mundo y los hijos heredan y se dividen los bienes de sus padres. En el plano personal son las cualidades y talentos, costumbres y tradiciones heredadas de nuestros padres y ancestros.",
    cosmicSpiralTurn:
      "Es el quinto giro de espiral ascendente en la elíptica cósmica",
    image: "horoscopomaya-pavoreal.jpg",
  },
  {
    id: "lagarto",
    moonNumber: 6,
    indigenousName: "Kibray",
    animalName: "Lagarto",
    dates: "13 de diciembre a 9 de enero",
    personality:
      "Estos seres, tienen la capacidad de adaptarse a cualquier ambiente y a cualquier entorno de personas. Son muy simples, y tienen mucha energía positiva que la contagian al ambiente, por lo tanto estar a lado de un lagarto es realmente un placer. Pero para que puedas entrar en su circulo debes aprender a ser ordenado como ellos, sobretodo en su pieza. Puede que entres a la habitación y te encuentres que todo esta desordenado, pero en ese desorden ellos encuentran todo lo que buscan. Y si te atreves a moverle algo de lugar, sienten atacada su intimidad. Por otro lado no les gusta que le estén diciendo a cada rato que es lo que tienen que hacer y que es lo que no. Odian que los estén presionando y molestando. Si se cansa un lagarto, se pondrá furioso y desaparecerá. En lo más profundo de sus almas a ellos les gustaría tener una vida sin complicaciones, pero no les ocurre así. Porque querer siempre ganar y hacer las cosas bien, nunca se conforman con nada. Siempre piensan que hay algo mejor de lo que ellos hacen. Son personas con tendencia a subir de peso, por eso siempre están queriendo hacer dietas balanceadas para controlar esa subida. Algunos de ellos no son tan fanáticos del orden, les gusta que los demás le dejen todo preparado y no tener que realizar ellos este tipo de trabajos. El Lagarto es el sexto",
    genesisMayaStage:
      "El Lagarto es el sexto peldaño de conciencia de la evolución, en el Génisis Maya. Representa la necesidad y aprendizaje del hombre para ganarse la vida. Hasta ahora la humanidad era recolectora, en esta sexta etapa confecciona herramientas para la casa y sale en grupo a conseguir la comida para traer a sus hogares. En el terreno personal es nuestra preocupación por desempeñarnos en la vida diaria y encontrar el lugar que ocupamos en el mundo, nuestra vocación, trabajo y las tareas que desempeñamos.",
    cosmicSpiralTurn:
      "Es el sexto giro de espiral ascendente en la elíptica cósmica",
    image: "horoscopomaya-lagarto.jpg",
  },
  {
    id: "mono",
    moonNumber: 7,
    indigenousName: "Batz Kimil",
    animalName: "Mono",
    dates: "10 de enero a 6 de febrero",
    personality:
      "Los monos son los más divertidos del horóscopo, y el mismo eso lo sabe. Le encanta estar siempre activo, haciendo pavadas, siempre tiene presente su niño interior. Siempre tiene ganas de estar bien y pasar cada momento como si fuera único. El optimismo los caracteriza, y son seres con abundante esperanza. Les gusta conocer mucha gente, y les encanta estar siempre acompañados. Es muy difícil que uno no se lleve bien con los monos, tienen siempre muy buen humor y lo contagian muchísimo. Como organizadores de eventos son los mejores, organizaran todo de tal manera que nada hará falta. Tienen una alta capacidad para unir grupos variadísimos. El Mono es el séptimo",
    genesisMayaStage:
      "El Mono es el séptimo peldaño de conciencia de la evolución, en el Génesis Maya. Representa la humanidad en la búsqueda de su otro yo, su alma gemela, su media naranja. El hombre se enfrenta con la propia levedad del ser, y va en busca de otra persona que lo complete, que llene sus vacíos y en la cual refugiarse. Aparece la idea de soledad como concepto. Hasta ahora nadie se sentía solo, con la idea del yo como individuo aparece la necesidad de otro para ser dos. Nacen las sociedades entre personas, grupos, y el matrimonio como institución social y jurídica.",
    cosmicSpiralTurn:
      "Es el séptimo giro de espiral ascendente en la elíptica cósmica",
    image: "horoscopomaya-mono.jpg",
  },
  {
    id: "halcon",
    moonNumber: 8,
    indigenousName: "Coz",
    animalName: "Halcón",
    dates: "7 de febrero a 6 de marzo",
    personality:
      "Los nativos de este signo son seres muy espirituales. Y tienen un poder de personalidad muy fuerte. Tienen mucha presencia por eso otros signos lo respetan mucho. Dentro del calendario maya representa al dios de los mayas (Quetzalcoalt). Saber ver las cosas desde mucha distancia y además es muy perceptivo. Puede ver mucho mas allá de los demás signos. Tienen una capacidad especial, ante momentos duros saben estar muy tranquilos y serenos manteniendo una paz interior increíble. En su vida pasa por muchísimas etapas: cuando es joven se dedica especialmente a hacer dinero, poseer bienes materiales como autos casas, ropa de marca y además de todo eso formar un núcleo familiar. Pero cuando se hace más viejo, tiende mas a las cosas espirituales, por lo tanto intentara estudiar mucha metafísica, filosofía y teología. El Halcón es el octavo",
    genesisMayaStage:
      "El Halcón es el octavo peldaño de conciencia de la evolución, en el Génesis Maya. Representa la psiquis inconsciente del hombre. Su cara oculta, el mundo de lo onírico que aflora en la vida como reflejos inconscientes. También su universo creativo, la capacidad de abstracción, su imaginación y la posibilidad de la mente de conectar información y reagruparla creando nuevos ordenes de pensamiento.",
    cosmicSpiralTurn:
      "Es el octavo giro de espiral ascendente en la elíptica cósmica",
    image: "horoscopomaya-halcon.jpg",
  },
  {
    id: "jaguar",
    moonNumber: 9,
    indigenousName: "Balam",
    animalName: "Jaguar",
    dates: "7 de marzo a 3 de abril",
    personality:
      "El jaguar tiene mucha pasión y fogosidad que la emana de manera fatal. Todo ese caudal lo saca como una fiera. Es considerado un animal muy respetado por los descendientes de los dioses. Cada cosa que se plantean la cumplen sin problema, para ellos nada es imposible. Les encantan las situaciones de riesgo donde todas las hormonas están en funcionamiento. Para conquistar a alguien, primero la observan, y comienzan a avanzar despacito, paso a paso y una vez que esta seguro comienza el ataque. Cuanto mas difícil es la tarea, mas le gusta la aventura, le genera una situación única. El Jaguar es el noveno",
    genesisMayaStage:
      "El Jaguar es el noveno peldaño de conciencia de la evolución, en el Génesis Maya. Representa la parte espiritual del hombre, su esencia, su ser infinito. La chispa divina que mora en el centro de su corazón, su alma eterna e inmutable. El nueve",
    cosmicSpiralTurn:
      "Es el noveno giro de espiral ascendente en la elíptica cósmica",
    image: "horoscopomaya-jaguar.jpg",
  },
  {
    id: "zorro",
    moonNumber: 10,
    indigenousName: "Fex",
    animalName: "Zorro",
    dates: "4 de abril a 1 de mayo",
    personality:
      "El zorro es una persona que esta para dar sevicia a los demás. Es sumamente solidario y es capaz de dar todo por un amigo. Desde que nacen poseen ese don de ayudar y brindar todo lo que pueden al prójimo desde lo material hasta lo sentimental. Son muy correctos, luchan por los derechos humanos y defienden a la gente que no tiene la capacidad para hacerlo. El Zorro es el décimo",
    genesisMayaStage:
      "El Zorro es el décimo peldaño de conciencia de la evolución, en el Génesis Maya. Representa la unión, el matrimonio cósmico del Uno con el cero. El 'Todo y la nada' juntos, lleno y vacío, principio y fin que se unen en un mismo punto, nada comienza, nada termina, todo es eterno. La materia imbuida por el espíritu. Simboliza nuestra relación con el Poder (el uno) sobre la materia (el cero). Aquí cada uno de nosotros tomamos nuestro liderazgo, nuestro Poder Personal y nos decidimos a actuar en la vida. Por eso el diez significa ACCIÓN. De nada sirve quedarnos en el mundo de las ideas, es necesario tomar el Cetro de Mando y actuar.",
    cosmicSpiralTurn:
      "Es el décimo giro de espiral ascendente en la elíptica cósmica",
    image: "horoscopomaya-zorro.jpg",
  },
  {
    id: "serpiente",
    moonNumber: 11,
    indigenousName: "Kan",
    animalName: "Serpiente",
    dates: "2 de mayo a 29 de mayo",
    personality:
      "Como ya sabemos todos, la serpiente es muy sensual, tiene mucha presencia, es muy coqueta y siempre va por la vida con mucha elegancia. Es muy glamorosa y no pasa desapercibida. Le gusta la vida lujuriosa y llena de cosas. Por ello, estará siempre activa tratando de lograr esa vida que tanto le gusta, buscara todas las herramientas necesarias para poder realizarlo. Le encanta que la respeten y le tengan muchísima admiración. Inteligencia no le falta, es muy culta, le gusta leer muchísimo sobre temas variados, por eso en su casa tendrá un lugar especializado para guardar todo tipo de libros y un escritorio para poder leerlos placidamente. Le gusta tener su espacio, y que nadie se atreva a ocupárselo porque se enojaría muchísimo. Ella siempre busca tareas para realizar y disfruta muchísimo de la soledad y la paz interior sin que nadie la moleste. Esto no impide que sea muy simpática y le guste conocer gente. Pero su momento personal es muy importante. La Serpiente es el décimo primer",
    genesisMayaStage:
      "La Serpiente es el décimo primer peldaño de conciencia de la evolución, en el Génesis Maya. Representa la imagen terrena de Quetzalcoalt, el dios maya mitad águila (quetzal) mitad serpiente. Símbolo de la unión de nuestro pequeño yo inferior y nuestro Yo divino. La materia se reúne por fin con lo mágico creando una nueva forma. Lo posible e imposible habitan juntos. El nativo de este signo conoce sus poderes latentes, su vida es un viaje para despertar a ellos. Es un chamán, un profeta. Pero su ciclo aún no ha terminado y corre el riesgo de quedar atrapado en la tela araña de 'maya' la ilusión, y confundir lo Real con lo efímero.",
    cosmicSpiralTurn:
      "Es el décimo primer giro de espiral ascendente en la elíptica",
    image: "horoscopomaya-serpiente.jpg",
  },
  {
    id: "ardilla",
    moonNumber: 12,
    indigenousName: "Tzub",
    animalName: "Ardilla",
    dates: "30 de mayo a 26 de junio",
    personality:
      "Estas criaturas inquietas, les gusta trabajar mucho y son muy dedicadas. Consiguen amigos por donde quieran que vayan por su gran simpatía y buen humor. Cuando aparecen en tu vida la llenan de alegría y amor. Te brindan su apoyo incondicional. Les gusta hablar mucho, y expresar sus sentimientos. Puede que muchas veces se metan en ciertos líos, pero son capaces de salir enseguida porque son muy sinceras además. La Ardilla es el doceavo",
    genesisMayaStage:
      "La Ardilla es el doceavo peldaño de conciencia de la evolución, en el Génisis Maya. Representa el desarrollo industrial y la expansión tecnológica. Es la era de las comunicaciones, los satélites, la computación, los viajes espaciales. En este escalón la humanidad se enfrenta con el más importante desafío de su historia, dejarse seducir por la era virtual y la conquista del ciber espacio, o trascender y subir un peldaño más conquistando el reino espiritual.",
    cosmicSpiralTurn:
      "Es el doceavo giro de espiral ascendente en la elíptica cósmica",
    image: "horoscopomaya-ardilla.jpg",
  },
  {
    id: "tortuga",
    moonNumber: 13,
    indigenousName: "Aak",
    animalName: "Tortuga",
    dates: "27 de junio a 25 de julio",
    personality:
      "A la tortuga le gusta mucho estar en su casa y disfrutar mucho de ella. Les encanta estar mucho con su familia y dedicarle mucho tiempo. Para ella las relaciones tanto de amistad como amorosas son de suma importancia en su vida. Son muy trabajadoras, siempre están dispuestas a todo, a esforzarse y dar mas de si cada día para darle todo a su familia. Las mujeres tortuga se dice que saben administrar el capital como ninguna mujer en el zodiaco. Y el hombre se puede decir que representa un ejemplo muy bueno a seguir como cabeza familiar. La Tortuga es el décimo tercer",
    genesisMayaStage:
      "La Tortuga es el décimo tercer peldaño de conciencia de la evolución, en el Génesis Maya. Representa la sabiduría, longevidad y experiencia que dan los años. La tortuga era considerada sabia por los mayas, la respetaban y veneraban. Es el último escalón de la pirámide, conlleva el peligro de echarse atrás, y no seguir adelante. Justo cuando uno esta a punto de lograr la meta aparecen las dudas y las vacilaciones. Aquí la sabiduría de la tortuga viene a rescatarnos y arrojar luz sobre la obscuridad de nuestras conciencias.",
    cosmicSpiralTurn:
      "Es el décimo tercer giro de espiral ascendente en la elíptica cósmica. Un nuevo ciclo comienza.",
    image: "horoscopomaya-tortuga.jpg",
  },
];

export const mayanSolarSeals: MayanSolarSeal[] = [
  {
    id: "dragon",
    number: 1,
    name: "Dragón",
    indigenousName: "Imix",
    description:
      "Personas innovadoras, entusiastas, con la sagrada misión de generar nacimientos y alumbramientos en diferentes órdenes de la existencia.",
    shadow: "Tendencia al apego desmedido o a la sensación de abandono.",
  },
  {
    id: "viento",
    number: 2,
    name: "Viento",
    indigenousName: "Ik",
    description:
      "Trae las noticias; espíritu comunicador, bondadoso y portador del aliento divino con una esencia sutil y ágil.",
    shadow:
      "Cuando se posiciona en las sombras puede manifestar inconstancia o deshonestidad.",
  },
  {
    id: "noche",
    number: 3,
    name: "Noche",
    indigenousName: "Akbal",
    description:
      "Se identifica con la sutileza, la profundidad meditativa y la capacidad de soñar para despertar la abundancia interior.",
    shadow:
      "Aislamiento excesivo o temor a la carencia y la penumbra interior.",
  },
  {
    id: "semilla",
    number: 4,
    name: "Semilla",
    indigenousName: "Kan",
    description:
      "Individuos con inmenso potencial creativo y maestría para organizar el florecimiento espiritual, orientando a la unidad comunitaria.",
    shadow:
      "En las sombras puede volverse prejuicioso, ansioso o temeroso de germinar.",
  },
  {
    id: "serpiente",
    number: 5,
    name: "Serpiente",
    indigenousName: "Chicchan",
    description:
      "Sabiduría vital, justicia, energía telúrica y efectividad incuestionable guiada por el instinto superior.",
    shadow:
      "Ubicada en el costado negativo puede caer en el rencor o la reactividad instintiva.",
  },
  {
    id: "enlazador",
    number: 6,
    name: "Enlazador de Mundos",
    indigenousName: "Cimi",
    description:
      "Espíritus pacificadores con el don de tender puentes entre personas y realidades, integrando proyectos y transmutando ciclos.",
    shadow:
      "Resistencia a soltar el pasado o tendencia a la dispersión y el olvido.",
  },
  {
    id: "mano",
    number: 7,
    name: "Mano",
    indigenousName: "Manik",
    description:
      "Especial capacidad sanadora y realizadora; son los hacedores que plasman ideas en obras concretas de bienestar.",
    shadow:
      "Exceso de autoexigencia o arrebatos de frustración cuando no se alcanzan las metas.",
  },
  {
    id: "estrella",
    number: 8,
    name: "Estrella",
    indigenousName: "Lamat",
    description:
      "Sensibilidad estética, elegancia armónica y perfeccionismo lúcido para irradiar belleza y arte al entorno.",
    shadow:
      "Puede volverse indeciso, hipersensible al juicio ajeno o compulsivo.",
  },
  {
    id: "luna",
    number: 9,
    name: "Luna",
    indigenousName: "Muluc",
    description:
      "Personas prácticas, intuitivas y con temple firme para tomar decisiones que purifican y sanan las aguas emocionales.",
    shadow:
      "Extremadamente calculador o víctima de mareas emocionales desbordadas.",
  },
  {
    id: "perro",
    number: 10,
    name: "Perro",
    indigenousName: "Oc",
    description:
      "Amistosos, leales por excelencia, valientes custodios y cooperativos, siempre alertas ante el llamado del corazón.",
    shadow:
      "En el aspecto sombrío pueden albergar celos excesivos, desconfianza o susceptibilidad.",
  },
  {
    id: "mono",
    number: 11,
    name: "Mono",
    indigenousName: "Chuen",
    description:
      "Artistas innatos, alquimistas de la alegría, amantes del juego sagrado y de la magia de la ilusión creadora.",
    shadow:
      "Tomarse las situaciones trascendentes a la ligera o burlarse para evadir el dolor.",
  },
  {
    id: "humano",
    number: 12,
    name: "Humano",
    indigenousName: "Eb",
    description:
      "Dadivoso, con enorme capacidad para recibir y compartir sabiduría superior con una voluntad firme e inquebrantable.",
    shadow:
      "Mal aspectado puede manifestar terquedad, rigidez dogmática o autocompasión.",
  },
  {
    id: "caminante",
    number: 13,
    name: "Caminante del Cielo",
    indigenousName: "Ben",
    description:
      "Explorador de nuevos horizontes, mediador diplomático y poseedor de un agudo poder analítico y vocación libertaria.",
    shadow:
      "Inseguridad, dispersión o temor al desarraigo y a la hostilidad terrenal.",
  },
  {
    id: "mago",
    number: 14,
    name: "Mago",
    indigenousName: "Ix",
    description:
      "Atrevimiento sagrado, vigor chamánico y visión receptiva enraizada en el momento presente y la magia del corazón.",
    shadow:
      "Impaciencia, presunción de superioridad o apego a la manipulación sutil.",
  },
  {
    id: "aguila",
    number: 15,
    name: "Águila",
    indigenousName: "Men",
    description:
      "Mente panorámica de altos vuelos, observador meticuloso y creador genial bendecido con prosperidad material y espiritual.",
    shadow: "Orgullo desmedido, distanciamiento frío o ambición desmesurada.",
  },
  {
    id: "guerrero",
    number: 16,
    name: "Guerrero",
    indigenousName: "Cib",
    description:
      "Elevada sensibilidad, temple sereno, habilidad para cuestionar con inteligencia y capacidad innata para conducir causas nobles.",
    shadow:
      "Inseguridad paralizante o lucha innecesaria contra molinos de viento.",
  },
  {
    id: "tierra",
    number: 17,
    name: "Tierra",
    indigenousName: "Caban",
    description:
      "Mentes prodigiosas para la ciencia y la evolución sincrónica; integran sabiduría cósmica con las fuerzas vivientes de la Madre Gea.",
    shadow:
      "Individualismo cerrado, obsesión intelectual o falta de flexibilidad.",
  },
  {
    id: "espejo",
    number: 18,
    name: "Espejo",
    indigenousName: "Etznab",
    description:
      "Luchadores incansables de impecable fortaleza espiritual; reflejan la verdad sin velos con solidaridad comunitaria.",
    shadow:
      "Severidad intolerante, hipercrítica o resentimiento contra los errores ajenos.",
  },
  {
    id: "tormenta",
    number: 19,
    name: "Tormenta",
    indigenousName: "Cauac",
    description:
      "Fuerza purificadora y transformadora; seres templados de inmensa perseverancia que catalizan la evolución interior.",
    shadow:
      "Impetuosidad destructiva, desborde caótico o resistencia al propio cambio.",
  },
  {
    id: "sol",
    number: 20,
    name: "Sol",
    indigenousName: "Ahau",
    description:
      "Conciencia despierta, visionarios luminosos, guías espirituales, juiciosos y amorosos que irradian calidez universal.",
    shadow:
      "Dificultad para encajar en el mundo terrenal o susceptibilidad ante las críticas.",
  },
];
