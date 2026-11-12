export interface ServiceItem {
  id: string;
  name: string;
  category: 'cuidar' | 'definir' | 'combos' | 'celebrar' | 'color' | 'maquillaje';
  categoryLabel: string;
  price: string;
  priceNum: number;
  duration?: string;
  description: string;
  details?: string[];
  popular?: boolean;
  tag?: string;
}

export interface CurlTypeInfo {
  id: string;
  label: string;
  code: string;
  description: string;
  characteristics: string[];
  recommendedCare: string;
  idealServices: string[];
}

export const CATEGORIES = [
  { id: 'todos', label: 'Todos los Servicios' },
  { id: 'cuidar', label: '01 · Cuidar e Hidratar' },
  { id: 'definir', label: '02 · Corte y Definición' },
  { id: 'combos', label: '03 · Combos Todo en Uno' },
  { id: 'celebrar', label: '04 · Peinados y Eventos' },
  { id: 'color', label: '05 · Colorimetría' },
  { id: 'maquillaje', label: '06 · Maquillaje' },
] as const;

export const SERVICES: ServiceItem[] = [
  // 01 · CUIDAR
  {
    id: 'rizos-sin-nudos',
    name: 'Rizos sin Nudos',
    category: 'cuidar',
    categoryLabel: '01 · Lavado e Hidratación',
    price: '$30.000',
    priceNum: 30000,
    duration: '35 min',
    description: 'Desenredo suave y profesional con técnica de separación manual y acondicionadores botánicos con alto deslizamiento.',
    details: ['Elimina nudos y enredos sin rotura ni daño', 'Apertura de cutícula controlada', 'Ideal para rizos compactos'],
  },
  {
    id: 'lavado-sencillo',
    name: 'Lavado Sencillo',
    category: 'cuidar',
    categoryLabel: '01 · Lavado e Hidratación',
    price: '$30.000',
    priceNum: 30000,
    duration: '30 min',
    description: 'Limpieza respetuosa con shampoo 100% libre de sulfatos agresivos y parabenos para conservar los aceites naturales.',
    details: ['Libre de sulfatos y parabenos', 'Masaje capilar activador de circulación', 'Acondicionamiento balanceado'],
  },
  {
    id: 'lavado-profundo',
    name: 'Lavado Profundo (Clarificante)',
    category: 'cuidar',
    categoryLabel: '01 · Lavado e Hidratación',
    price: '$50.000',
    priceNum: 50000,
    duration: '45 min',
    description: 'Shampoo con sulfatos suaves sin siliconas. El reinicio perfecto para remover acumulación de productos, aceites pesados y cloro.',
    details: ['Reinicio profundo de rutina', 'Elimina build-up y pesadez', 'Prepara la hebra para máxima absorción'],
  },
  {
    id: 'hidratacion-sencilla',
    name: 'Hidratación Sencilla',
    category: 'cuidar',
    categoryLabel: '01 · Lavado e Hidratación',
    price: '$40.000',
    priceNum: 40000,
    duration: '45 min',
    description: 'Mascarilla hidratante personalizada según la porosidad de tu cabello (baja, media o alta) y nivel de sed.',
    details: ['Mascarilla vegetal según tu hebra', 'Sellado de hidratación', 'Aporta suavidad y elasticidad inmediata'],
  },
  {
    id: 'hidratacion-ozono',
    name: 'Hidratación con Ozono',
    category: 'cuidar',
    categoryLabel: '01 · Lavado e Hidratación',
    price: '$50.000',
    priceNum: 50000,
    duration: '55 min',
    popular: true,
    tag: 'Más Solicitado',
    description: 'Terapia con vapor de ozono que abre la cutícula de forma suave para penetrar mascarillas nutritivas hasta el córtex capilar.',
    details: ['Mascarilla nutritiva + vapor ozono', 'Fortalece los folículos pilosos', 'Estimula el crecimiento y desinfecta el cuero cabelludo'],
  },

  // 02 · DEFINIR
  {
    id: 'definicion-rizos',
    name: 'Definición de Rizos Completa',
    category: 'definir',
    categoryLabel: '02 · Definición y Corte',
    price: '$80.000',
    priceNum: 80000,
    duration: '1h 30m',
    popular: true,
    tag: 'Especialidad',
    description: 'Hidrata, controla y define mechón a mechón con técnicas como fitagem, rake & shake y secado con difusor profesional.',
    details: ['Incluye asesoría y rutina para casa', 'Fijación flexible sin efecto tieso ni frizz', 'Duración de 3 a 5 días con cast suave'],
  },
  {
    id: 'corte-puntas',
    name: 'Corte de Puntas en Seco',
    category: 'definir',
    categoryLabel: '02 · Definición y Corte',
    price: '$30.000',
    priceNum: 30000,
    duration: '40 min',
    description: 'Corte en seco mechón a mechón para sanar puntas abiertas sin perder el largo ni alterar la caída natural de tus rizos.',
    details: ['Corte en seco respetando el factor encogimiento', 'Eliminación selectiva de horquillas', 'Conserva la longitud'],
  },
  {
    id: 'corte-de-forma',
    name: 'Corte de Forma Personalizado',
    category: 'definir',
    categoryLabel: '02 · Definición y Corte',
    price: '$50.000',
    priceNum: 50000,
    duration: '1h 00m',
    popular: true,
    tag: 'Favorito',
    description: 'Diseño estructural de capas y silueta (redondo, halo, degradado, shaggy rizado) adaptado milimétricamente a tu textura y estilo.',
    details: ['Resultado adaptado a tu textura y estilo', 'Volumen balanceado sin efecto pirámide', 'Ves la forma real mientras se corta'],
  },

  // 03 · COMBOS
  {
    id: 'combo-1',
    name: 'Combo 1: Esencial',
    category: 'combos',
    categoryLabel: '03 · Combos Todo en Uno',
    price: '$100.000',
    priceNum: 100000,
    duration: '2h 00m',
    description: 'El combo base para revivir tu melena con limpieza, nutrición y definición impecable.',
    details: ['Lavado suave botánico', 'Hidratación intensiva', 'Secado profesional con difusor', 'Definición mechón a mechón'],
  },
  {
    id: 'combo-2',
    name: 'Combo 2: Renovación Total',
    category: 'combos',
    categoryLabel: '03 · Combos Todo en Uno',
    price: '$120.000',
    priceNum: 120000,
    duration: '2h 30m',
    popular: true,
    tag: 'El Más Elegido',
    description: 'El paquete preferido por las quilleras: salud capilar, saneamiento de puntas y definición de larga duración.',
    details: ['Lavado revitalizante', 'Hidratación profunda', 'Corte de puntas en seco', 'Secado y Definición de rizos'],
  },
  {
    id: 'combo-3',
    name: 'Combo 3: Transformación Completa',
    category: 'combos',
    categoryLabel: '03 · Combos Todo en Uno',
    price: '$140.000',
    priceNum: 140000,
    duration: '2h 45m',
    description: 'Todo lo que tu cabello necesita para una silueta espectacular con volumen, movimiento y salud extrema.',
    details: ['Lavado + Hidratación + Ozono', 'Corte de forma especializado', 'Secado profesional', 'Definición de alta definición'],
  },
  {
    id: 'combo-transicion',
    name: 'Combo Transición Capilar',
    category: 'combos',
    categoryLabel: '03 · Combos Todo en Uno',
    price: '$160.000',
    priceNum: 160000,
    duration: '3h 00m',
    popular: true,
    tag: 'Acompañamiento VIP',
    description: 'Tratamiento amoroso para quienes dejan los químicos y alisados. Diagnóstico de hebra, corte progresivo o big chop y asesoría.',
    details: ['Hidratación intensiva restauradora', 'Definición con técnica mixta', 'Corte en seco de transición', 'Asesoría y guía paso a paso para casa'],
  },
  {
    id: 'combo-kids',
    name: 'Combo Kids (Niñas y Niños)',
    category: 'combos',
    categoryLabel: '03 · Combos Todo en Uno',
    price: '$120.000',
    priceNum: 120000,
    duration: '2h 00m',
    description: 'Atención paciente, cariñosa y sin lágrimas para que los más pequeños aprendan a amar y lucir sus rizos naturales con orgullo.',
    details: ['Asesoría para padres', 'Lavado sin lágrimas', 'Hidratación con ampolla nutritiva', 'Definición divertida y suave'],
  },
  {
    id: 'combo-babys',
    name: 'Combo Babys (Primeros Rizos)',
    category: 'combos',
    categoryLabel: '03 · Combos Todo en Uno',
    price: '$70.000',
    priceNum: 70000,
    duration: '1h 15m',
    description: 'Cuidado delicado para bebés y primeras texturas infantiles con productos dermatológicamente testeados y fórmulas ultraligeras.',
    details: ['Asesoría de cuidado infantil', 'Lavado ultra suave', 'Hidratación hipoalergénica', 'Definición natural'],
  },

  // 04 · CELEBRAR
  {
    id: 'peinado-recogido',
    name: 'Peinado Social Recogido',
    category: 'celebrar',
    categoryLabel: '04 · Peinados y Eventos',
    price: '$150.000',
    priceNum: 150000,
    duration: '1h 40m',
    description: 'Elegancia caribeña para bodas, grados y galas sin aplanar tus rizos naturales. Estructura firme con movimiento.',
    details: ['Termoprotector y fijadores de alta resistencia al calor y humedad', 'Duración impecable toda la noche', 'No incluye accesorios externos'],
  },
  {
    id: 'peinado-semi-recogido',
    name: 'Peinado Semi Recogido',
    category: 'celebrar',
    categoryLabel: '04 · Peinados y Eventos',
    price: '$120.000',
    priceNum: 120000,
    duration: '1h 30m',
    description: 'El balance idóneo entre sofisticación y la frescura de lucir el largo y volumen de tu textura natural.',
    details: ['Acabado impecable durante todo el evento', 'Resistente a la brisa barranquillera', 'Detalles en trenzas o torcidos'],
  },
  {
    id: 'onda-clasica',
    name: 'Onda Clásica Pulida',
    category: 'celebrar',
    categoryLabel: '04 · Peinados y Eventos',
    price: '$80.000',
    priceNum: 80000,
    duration: '1h 15m',
    description: 'Ondas pulidas, uniformes, brillantes y de larga duración con protección térmica certificada.',
    details: ['Ondas perfectas y elásticas', 'Brillo espejo sin apelmazar', 'Fijación táctil suave'],
  },
  {
    id: 'onda-sirena',
    name: 'Onda Sirena Caribeña',
    category: 'celebrar',
    categoryLabel: '04 · Peinados y Eventos',
    price: '$90.000',
    priceNum: 90000,
    duration: '1h 20m',
    popular: true,
    tag: 'Tendencia Costa',
    description: 'Volumen playero, textura moderna y movimiento suelto con un acabado saludable y lleno de vida.',
    details: ['Volumen y movimiento con acabado saludable', 'Ondas con efecto textura de playa', 'Look juvenil y descomplicado'],
  },

  // 05 · COLOR
  {
    id: 'color-normal',
    name: 'Coloración Capilar Normal',
    category: 'color',
    categoryLabel: '05 · Colorimetría Protegida',
    price: '$150.000',
    priceNum: 150000,
    duration: '2h 15m',
    description: 'Aplicación uniforme de 1 ó 2 tubos de tinte profesional con aceites protectores que respetan el patrón del rizo.',
    details: ['Distribución uniforme sin comprometer la textura', 'Fórmulas bajas en amoniaco', 'Brillo intenso y cobertura total'],
  },
  {
    id: 'color-largo',
    name: 'Coloración Cabello Largo + Ozono',
    category: 'color',
    categoryLabel: '05 · Colorimetría Protegida',
    price: '$200.000',
    priceNum: 200000,
    duration: '3h 00m',
    description: 'Color completo para cabellos abundantes o largos con tratamiento recuperador de hidratación con ozono incluido.',
    details: ['Incluye hidratación profunda + ozono', 'Máxima protección contra la sequedad', 'Fórmula de nutrición post-color'],
  },
  {
    id: 'iluminaciones-corta',
    name: 'Iluminaciones Básicas (Balayage Rizo)',
    category: 'color',
    categoryLabel: '05 · Colorimetría Protegida',
    price: '$380.000',
    priceNum: 380000,
    duration: '3h 30m',
    description: 'Reflejos de luz creados específicamente para la curvatura del rizo en cabello corto o medio sin dañar la elasticidad.',
    details: ['Reflejos naturales · balayage para rizos', 'Aclaración gradual y controlada con Plex', 'Efecto dimensional y luminoso'],
  },
  {
    id: 'iluminaciones-elaborada',
    name: 'Iluminaciones Elaboradas / Balayage Full',
    category: 'color',
    categoryLabel: '05 · Colorimetría Protegida',
    price: '$500.000',
    priceNum: 500000,
    duration: '4h 30m',
    description: 'Técnica avanzada de contraste, money piece y matices cálidos o miel pensados para realzar cada bucle y volumen.',
    details: ['Cambios de color vibrantes o sutiles', 'Protector de enlaces durante la decoloración', 'Matización personalizada y sellado de brillo'],
  },

  // 06 · MAQUILLAJE
  {
    id: 'maquillaje-casual',
    name: 'Maquillaje Casual / Social',
    category: 'maquillaje',
    categoryLabel: '06 · Maquillaje',
    price: 'Desde $70.000',
    priceNum: 70000,
    duration: '1h 15m',
    description: 'Look fresco, luminoso y elegante que resalta tu belleza natural. Ideal para almuerzos, sesiones de fotos o reuniones.',
    details: ['Básico con pestañas: $70.000', 'Básico sin pestañas: $80.000', 'Social clásico con contornos: $90.000', 'Glam con glitter y piedritas: $100.000'],
  },
  {
    id: 'maquillaje-premium',
    name: 'Maquillaje Premium para Eventos',
    category: 'maquillaje',
    categoryLabel: '06 · Maquillaje',
    price: 'Desde $130.000',
    priceNum: 130000,
    duration: '2h 30m',
    description: 'Preparación de piel blindada resistente al calor húmedo de Barranquilla con productos de alta gama y prueba previa opcional.',
    details: ['Graduación: $130.000 (piel completa duradera)', 'Quinceañera: $150.000 (productos alta gama)', 'Novia: $180.000 (tu gran día sin detalle al azar)'],
  },
];

export const CURL_TYPES: CurlTypeInfo[] = [
  {
    id: 'tipo-2',
    label: 'Cabello Ondulado',
    code: 'Tipo 2 (2A · 2B · 2C)',
    description: 'Ondas en forma de "S" suave o pronunciada. Tiende a ser más liso en la raíz y gana curvatura de medios a puntas.',
    characteristics: [
      'Textura ligera susceptible al peso',
      'Puede presentar frizz por humedad ambiental',
      'Pierde forma fácilmente con aceites densos',
    ],
    recommendedCare: 'Shampoos clarificantes suaves, mousses ligeros, geles en base agua y secado con difusor a temperatura media.',
    idealServices: ['Definición de Rizos', 'Corte de Forma (elimina pesadez)', 'Lavado Profundo'],
  },
  {
    id: 'tipo-3',
    label: 'Cabello Rizado',
    code: 'Tipo 3 (3A · 3B · 3C)',
    description: 'Espirales elásticos bien definidos con forma de resorte o sacacorchos. Presenta volumen natural y factor de encogimiento moderado.',
    characteristics: [
      'Curvatura circular completa y elástica',
      'Porosidad variable y tendencia a la sequedad en puntas',
      'Encogimiento entre el 20% y el 40%',
    ],
    recommendedCare: 'Técnica de fitagem mechón a mechón, mascarillas nutritivas semanales con ozono, geles con aloe vera y corte en seco.',
    idealServices: ['Combo 2 Renovación', 'Hidratación con Ozono', 'Corte de Puntas en Seco'],
  },
  {
    id: 'tipo-4',
    label: 'Cabello Afro / Kinky',
    code: 'Tipo 4 (4A · 4B · 4C)',
    description: 'Hebras con patrones en "Z" o resortes compactos muy densos. Una estructura majestuosa con máximo volumen y textura rica.',
    characteristics: [
      'Mayor factor de encogimiento (hasta 75%)',
      'Hebra fina y delicada que requiere máxima lubricación',
      'Retiene peinados protectores con belleza única',
    ],
    recommendedCare: 'Método LOC/LCO (Líquido, Óleo, Crema), mantecas puras de karité, desenredo exclusivo con acondicionador y cortes en halo o esfera.',
    idealServices: ['Rizos sin Nudos', 'Hidratación con Ozono', 'Combo 3 Transformación'],
  },
  {
    id: 'transicion',
    label: 'En Transición Capilar',
    code: 'Fase de Sanación',
    description: 'Proceso de dejar crecer la raíz natural mientras convive con extremos procesados por queratinas, alisados o calor excesivo.',
    characteristics: [
      'Dos texturas conviviendo en una misma hebra',
      'Zona de quiebre vulnerable en el punto de unión',
      'Requiere paciencia, contención y productos reconstituyentes',
    ],
    recommendedCare: 'Tratamientos de proteínas vegetales, cortes progresivos sin prisa o big chop decidido, y peinados protectores amorosos.',
    idealServices: ['Combo Transición Capilar', 'Asesoría Personalizada', 'Hidratación con Ozono'],
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Andrea Morales',
    role: 'Clienta desde 2022 · Barranquilla',
    curlType: 'Rizos 3B',
    avatarBg: '#0C695F',
    text: 'Encontrar a Estefani en Barranquilla fue una bendición. Antes iba a peluquerías tradicionales donde me cepillaban el rizo a la fuerza o me hacían cortes rectos que parecían un triángulo. En Rizos Quilleros me cortaron en seco respetando mi caída natural y mis rizos nunca habían tenido tanto brillo y movimiento.',
    service: 'Combo 2 Renovación Total',
  },
  {
    id: 2,
    name: 'Camila Peñaranda',
    role: 'Clienta Afro · Puerto Colombia',
    curlType: 'Afro 4C',
    avatarBg: '#CF2844',
    text: 'Llegué con miedo por malas experiencias, pero el trato desde el primer minuto fue de puro respeto y amor por mi afro. El servicio de rizos sin nudos y la hidratación con ozono son de otro nivel: cero dolor, cero tirones y mi cuero cabelludo quedó súper fresco y liviano.',
    service: 'Hidratación con Ozono & Desenredo',
  },
  {
    id: 3,
    name: 'Valeria Charry',
    role: 'En Transición · Barranquilla Norte',
    curlType: 'Transición a 3A/3B',
    avatarBg: '#46200D',
    text: 'Estaba a punto de volver a alisarme por la frustración de las dos texturas. El Combo Transición no solo salvó mi proceso, sino que Estefani me enseñó qué hacer en casa día a día. Hoy llevo 14 meses libre de químicos y amo mi textura más que nunca.',
    service: 'Combo Transición Capilar',
  },
];

export const FAQS = [
  {
    q: '¿Cómo debo llevar mi cabello el día de mi cita?',
    a: 'Para los servicios que incluyen corte en seco (corte de puntas, corte de forma y combos), es muy importante que vengas con el cabello completamente seco, desenredado previamente en casa, con tu definición habitual y sin colas, ganchos ni trenzas apretadas. Así Estefani puede evaluar el comportamiento real de tus rizos y su caída natural antes de realizar el corte.',
  },
  {
    q: '¿Atienden a niñas y niños pequeños?',
    a: '¡Por supuesto! Contamos con el Combo Kids y Combo Babys. Tenemos paciencia infinita, técnicas sin dolor ni tirones, y productos suaves formulados especialmente para la piel y cuero cabelludo infantil. Queremos que desde chiquitos amen sus rizos.',
  },
  {
    q: '¿Qué tipo de productos y fórmulas utilizan en el salón?',
    a: 'Todos nuestros shampoos, acondicionadores, mascarillas y geles están rigurosamente seleccionados: son 100% libres de sulfatos abrasivos, siliconas pesadas insolubles, parabenos y petrolatos. Usamos extractos botánicos de aloe, coco, karité, lino y aceites tropicales que nutren la fibra capilar.',
  },
  {
    q: '¿En qué consiste el corte en seco?',
    a: 'El cabello rizado tiene un factor de encogimiento muy variable según cada zona de la cabeza. Al cortar en seco mechón por mechón respetando la curvatura natural, ves exactamente la forma, el largo y el volumen que quedará al final, evitando sorpresas desagradables al secar.',
  },
  {
    q: '¿Dónde están ubicados y cuál es el horario de atención?',
    a: 'Nos encontramos en Barranquilla, Atlántico, en el corazón del sector norte (cerca de la Cra. 53). Atendemos de Martes a Sábado de 8:30 a.m. a 6:30 p.m. y Domingos con cita previa. Todas las citas se reservan anticipadamente por WhatsApp para garantizar tiempo exclusivo a tu melena.',
  },
  {
    q: '¿Cuánto tiempo dura una cita?',
    a: 'Depende del servicio: un corte de puntas o lavado toma entre 35 y 45 minutos, una definición completa aproximadamente 1 hora y media, y los combos integrales entre 2 y 3 horas, ya que dedicamos el tiempo necesario a la absorción de mascarillas, el vapor con ozono y el secado lento con difusor.',
  },
];
