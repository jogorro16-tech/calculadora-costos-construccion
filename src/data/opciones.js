export const TERRENO = [
  {id:"plano",     icon:"⬜", label:"Terreno plano",         tag:"Sin sobrecosto",
   desc:"Sin pendiente, con acceso fácil para maquinaria y camiones. El escenario más eficiente para construir.", partida:"estructura", factor:1.0},
  {id:"pendiente", icon:"📐", label:"Con pendiente (> 15%)", tag:"+4% del total",
   desc:"Terreno inclinado que requiere muros de contención, cimentación especial o movimiento de tierras adicional.", partida:"estructura", factor:1.12},
  {id:"roca",      icon:"🪨", label:"Terreno rocoso",        tag:"+6% del total",
   desc:"Subsuelo con roca que requiere excavación con rompedora o explosivos. Común en zonas serranas de Querétaro.", partida:"estructura", factor:1.18},
  {id:"relleno",   icon:"⚠️", label:"Terreno de relleno o baja capacidad", tag:"+8% del total",
   desc:"Suelo que no soporta bien el peso. Requiere pilotes, mejoramiento de suelo o cimentación especial.", partida:"estructura", factor:1.22},
];

export const COMPLEJIDAD = [
  {id:"ortogonal", icon:"⬜", label:"Volumetría ortogonal",             tag:"Sin sobrecosto",
   desc:"Volúmenes de ángulos rectos y geometría limpia. El lenguaje arquitectónico contemporáneo más utilizado — orden, claridad y elegancia.",
   nota:"Permite optimizar estructura y materiales sin sacrificar calidad de diseño.", partida:"estructura", factor:1.0},
  {id:"niveles",   icon:"▦",  label:"Ortogonal con juego de niveles",  tag:"+3% del total",
   desc:"Volúmenes ortogonales con desniveles, voladizos, terrazas escalonadas o patios hundidos. Genera dinamismo y jerarquía espacial.",
   nota:"Mayor complejidad constructiva pero con un resultado arquitectónico de alto impacto.", partida:"estructura", factor:1.08},
  {id:"organico",  icon:"◈",  label:"Formas orgánicas o dinámicas",    tag:"+7% del total",
   desc:"Curvas, ángulos libres o geometrías no convencionales. Alta expresividad con estructura y cimbra especializada.",
   nota:"Para proyectos donde el concepto arquitectónico es el protagonista.", partida:"estructura", factor:1.20},
];

export const SERVICIOS = [
  {id:"todos",       icon:"🟢", label:"Todos los servicios disponibles",    tag:"Sin sobrecosto",
   desc:"Agua potable, drenaje, electricidad y gas frente al terreno. El escenario más eficiente.", partida:"instalaciones", factor:1.0},
  {id:"sin_gas",     icon:"🔵", label:"Sin red de gas natural",             tag:"+1% del total",
   desc:"Se instala tanque de gas LP estacionario. Muy común en zonas periféricas de Querétaro.", partida:"instalaciones", factor:1.06},
  {id:"sin_drenaje", icon:"🟡", label:"Sin drenaje municipal",              tag:"+4% del total",
   desc:"Se requiere fosa séptica o biodigestor para el tratamiento de aguas negras.", partida:"instalaciones", factor:1.14},
  {id:"sin_agua",    icon:"🟠", label:"Sin toma de agua potable",           tag:"+5% del total",
   desc:"Se requiere pozo, suministro por pipa o sistema de captación pluvial.", partida:"instalaciones", factor:1.18},
  {id:"sin_luz",     icon:"🔴", label:"Sin red eléctrica cercana",          tag:"+7% del total",
   desc:"Se requiere extensión de red CFE o sistema solar autónomo.", partida:"instalaciones", factor:1.22},
];

export const ESPACIOS = [
  {id:"definida",       icon:"🟦", label:"Espacios definidos y funcionales",   tag:"Sin sobrecosto",
   desc:"Zonas claramente delimitadas con altura de 2.60 a 3.00 m. Cada área tiene su función bien definida y es fácil de amueblar.",
   nota:"La opción más eficiente y versátil. Funciona perfectamente en cualquier tipo de proyecto.", partida:"estructura", factor:1.0},
  {id:"abierta",        icon:"🔲", label:"Planta abierta e integrada",         tag:"+2% del total",
   desc:"Sala, comedor y cocina conectados en un solo espacio sin muros intermedios. Requiere vigas para librar vanos grandes.",
   nota:"Hace los espacios sentirse más amplios y favorece la convivencia familiar.", partida:"estructura", factor:1.06},
  {id:"desniveles",     icon:"⬆️", label:"Juego de desniveles entre zonas",    tag:"+4% del total",
   desc:"Diferentes niveles o plataformas entre áreas del proyecto. Separa ambientes sin levantar muros y genera dinamismo espacial.",
   nota:"Muy efectivo para dar carácter sin necesidad de grandes alturas.", partida:"estructura", factor:1.12},
  {id:"grandes_alturas",icon:"🔝", label:"Grandes alturas o dobles espacios",  tag:"+6% del total",
   desc:"Espacios de 4 a 6 metros en zonas clave como sala, comedor o escalera. Genera un impacto visual muy poderoso.",
   nota:"Requiere estructura especial y mayor inversión en iluminación, cortinas y climatización.", partida:"estructura", factor:1.18},
];

export const TECHOS = [
  {id:"plano",     icon:"▬",  label:"Losa plana",                          tag:"Sin sobrecosto",
   desc:"La solución más utilizada en México. Robusta, económica y permite tener terraza o ampliar en el futuro.",
   nota:"Requiere buen impermeabilizante y pendientes mínimas para drenar el agua de lluvia.", partida:"estructura", factor:1.0},
  {id:"inclinado", icon:"🏔", label:"Cubierta inclinada contemporánea",     tag:"+2.5% del total",
   desc:"Planos inclinados como elemento de diseño en lenguaje actual — puede ser lámina arquitectónica, panel o concreto. No necesariamente con teja.",
   nota:"Excelente para climas lluviosos y genera un carácter arquitectónico fuerte y contemporáneo.", partida:"estructura", factor:1.07},
  {id:"verde",     icon:"🌿", label:"Techo verde o jardín en azotea",       tag:"+6% del total",
   desc:"Capa vegetal sobre impermeabilización especializada. Reduce el calor que entra al espacio hasta un 30% y mejora la imagen del proyecto.",
   nota:"Requiere que la estructura esté calculada para soportar el peso adicional del sustrato y la humedad.", partida:"estructura", factor:1.18},
  {id:"tecnica",   icon:"⚙️", label:"Losa técnica / industrial",            tag:"+3% del total",
   desc:"Instalaciones como ductos, tuberías y estructura metálica expuestas de manera intencional como parte del diseño. Estética industrial.",
   nota:"Popular en lofts, estudios creativos, oficinas y proyectos de diseño audaz.", partida:"estructura", factor:1.09},
  {id:"mixta",     icon:"◈",  label:"Cubierta mixta o asimétrica",          tag:"+4% del total",
   desc:"Combinación de planos horizontales e inclinados en el mismo proyecto. Da expresividad y carácter a la silueta del edificio.",
   nota:"Requiere detallado cuidadoso en los encuentros entre planos para evitar filtraciones.", partida:"estructura", factor:1.12},
];

export const BIOCLIMATICA = [
  {id:"ninguna",    icon:"○",  label:"Sin estrategias",     tag:"Sin sobrecosto",
   desc:"Diseño convencional. El espacio dependerá del aire acondicionado y calefacción para estar cómodo durante todo el año.",
   nota:"Considera que esto puede traducirse en un mayor gasto mensual de electricidad y gas a lo largo de la vida del proyecto.", partida:"instalaciones", factor:1.0},
  {id:"basico",     icon:"🌿", label:"Paquete básico",       tag:"+0.6% del total",
   desc:"Orientar el edificio hacia el sol correctamente, agregar voladizos (salientes del techo que dan sombra a las ventanas) y diseñar ventanas que aprovechen las corrientes de aire naturales para ventilar sin necesidad de aparatos.",
   nota:"Con esto el espacio se siente más fresco en verano y más cálido en invierno. Puede reducir hasta un 20% el uso del A/C.",
   incluye:"Orientación solar correcta · Voladizos de sombra · Ventanas para ventilación cruzada · Vegetación estratégica", partida:"instalaciones", factor:1.04},
  {id:"intermedio", icon:"🌱", label:"Paquete intermedio",   tag:"+1.5% del total",
   desc:"Agrega celosías (elementos que filtran el sol sin bloquear la vista ni el aire), muros gruesos que absorben el calor de día y lo liberan de noche, y aislamiento en el techo para que no entre el calor solar.",
   nota:"Con este paquete, la mayoría de los días del año se puede estar cómodo sin encender el A/C — especialmente en el clima templado de Querétaro.",
   incluye:"Todo básico · Celosías filtra-sol · Muros de masa térmica · Aislamiento en cubierta", partida:"instalaciones", factor:1.09},
  {id:"avanzado",   icon:"🌳", label:"Paquete avanzado",     tag:"+3% del total",
   desc:"Diseño completamente adaptado al clima local: estudio profesional de soleamiento y vientos, techo verde y sistema de captación de agua de lluvia. El proyecto aprovecha al máximo las condiciones naturales de Querétaro.",
   nota:"La mayor eficiencia energética posible. El costo de construcción sube, pero el ahorro en luz y gas es significativo cada mes.",
   incluye:"Todo intermedio · Estudio solar y de vientos · Techo verde · Sistema de captación pluvial", partida:"instalaciones", factor:1.19},
];

export const FACHADA = [
  {id:"estuco",     icon:"⬜", label:"Estuco o mortero pintado",            tag:"Sin sobrecosto",
   desc:"Recubrimiento exterior en estuco, pasta fina o mortero de calidad, acabado liso o texturizado. El acabado más utilizado en proyectos contemporáneos de la región.",
   nota:"Permite una gran variedad de texturas y colores. Fácil de mantener y reparar.", partida:"fachada", factor:1.0},
  {id:"concreto_ap",icon:"▦",  label:"Detalles en concreto aparente",       tag:"+1.5% del total",
   desc:"Muros base en estuco con columnas, elementos estructurales o muros de acento en concreto visto. Combina calidez y robustez.",
   nota:"Más viable económicamente que usar concreto aparente en toda la fachada. Alto impacto con uso selectivo.", partida:"fachada", factor:1.25},
  {id:"piedra",     icon:"🪨", label:"Piedra natural en zonas clave",        tag:"+3% del total",
   desc:"Muros principales en estuco con detalles en piedra natural, cantera o laja en zonas estratégicas de la fachada.",
   nota:"Altísima durabilidad y carácter regional. Muy presente en la arquitectura queretana contemporánea.", partida:"fachada", factor:1.50},
  {id:"madera",     icon:"🪵", label:"Madera tratada en exteriores",         tag:"+2% del total",
   desc:"Lamas o paneles de madera tratada para exterior en combinación con estuco. Calidez y textura únicas.",
   nota:"Requiere mantenimiento periódico con acabados UV. Usar maderas tratadas o de alta durabilidad para exterior.", partida:"fachada", factor:1.35},
  {id:"mixta_fach", icon:"◈",  label:"Fachada mixta premium",               tag:"+3.5% del total",
   desc:"Base en estuco combinada con dos o más materiales: piedra, concreto aparente, mármol, laja o detalles en herrería de diseño.",
   nota:"El mayor nivel de expresividad y personalización. Cada material se usa donde genera el mayor impacto visual.", partida:"fachada", factor:1.58},
];

export const CARPINTERIA = [
  {id:"estandar", icon:"🚪", label:"Puertas estándar (2.10 m)",              tag:"Sin sobrecosto",
   desc:"MDF o tablero tambor con chapa, marco de aluminio o madera. Funcional y económico.",
   nota:"Amplia disponibilidad. Ideal para proyectos donde la carpintería no es el protagonista.", partida:"carpinteria", factor:1.0},
  {id:"alta",     icon:"🏛", label:"Puertas de mayor altura (sin cerramiento)",tag:"+2% del total",
   desc:"2.60 a 3.00 m sin marco visible sobre el dintel. Genera continuidad visual entre espacios y altura real.",
   nota:"Elimina el espacio muerto sobre la puerta. Efecto muy sofisticado con un costo moderado.", partida:"carpinteria", factor:1.28},
  {id:"madera_s", icon:"🌳", label:"Madera sólida a medida",                  tag:"+3.5% del total",
   desc:"Cedro, encino u otras maderas sólidas fabricadas por carpintero especializado. Peso, solidez y carácter únicos.",
   nota:"Requiere tiempo de fabricación y carpintero de confianza. Resultado de altísima calidad.", partida:"carpinteria", factor:1.50},
  {id:"pivote",   icon:"↻",  label:"Puertas pivotantes de diseño",            tag:"+4.5% del total",
   desc:"Giro sobre eje vertical. Gran dimensión y presencia escultórica. Se convierte en un elemento arquitectónico.",
   nota:"Herraje europeo especializado. El elemento de entrada más impactante que existe.", partida:"carpinteria", factor:1.65},
];

export const VANOS_AMPLITUD = [
  {id:"introspectivo",icon:"🔳", label:"Introspectivo — vanos discretos",    tag:"BASE",
   desc:"Ventanas de menor dimensión. El interior se siente protegido, íntimo y con poca exposición al exterior.",
   nota:"Ideal para clientes que valoran la privacidad o el recogimiento. El diseño se concentra hacia adentro.", partida:"canceleria", factor:0.85},
  {id:"equilibrado",  icon:"🪟", label:"Equilibrado",                         tag:"Sin sobrecosto",
   desc:"Balance entre apertura y privacidad. Buena iluminación natural sin exceso de exposición al exterior.",
   nota:"La opción más versátil. Permite trabajar con vanos de diferentes dimensiones según cada fachada.", partida:"canceleria", factor:1.0},
  {id:"abierto",      icon:"🖼", label:"Abierto hacia el exterior",           tag:"+1.5% del total",
   desc:"Vanos amplios que conectan visualmente con el jardín, el paisaje o el contexto. Mayor luminosidad.",
   nota:"Muy efectivo cuando el entorno exterior merece ser parte del interior.", partida:"canceleria", factor:1.18},
  {id:"panoramico",   icon:"⬍", label:"Panorámico — máxima apertura",        tag:"+2.5% del total",
   desc:"La mayor relación posible entre interior y exterior. Vanos de gran dimensión como elemento protagónico de la fachada.",
   nota:"El límite entre adentro y afuera se disuelve. Requiere control solar bien resuelto.", partida:"canceleria", factor:1.30},
];

export const CANCELERIA_CALIDAD = [
  {id:"aluminio_nacional",  icon:"⬜", label:"Aluminio nacional",                  tag:"Sin sobrecosto",
   desc:"Perfil de aluminio de fabricación local. Funcional, económico y disponible en muchos colores y acabados.",
   nota:"El estándar del mercado mexicano. Buena relación costo-beneficio para la mayoría de proyectos.", partida:"canceleria", factor:1.0},
  {id:"aluminio_europeo",   icon:"▦",  label:"Aluminio europeo",                   tag:"+1.5% del total",
   desc:"Perfiles de mayor sección y precisión con mejor sellado, hermeticidad y acabados. Sistemas como Wicona, Cortizo o equivalentes.",
   nota:"Notablemente superior en hermeticidad, durabilidad y aislamiento. La diferencia se percibe en el uso.", partida:"canceleria", factor:1.20},
  {id:"alto_rendimiento",   icon:"★",  label:"Sistema de alto rendimiento",        tag:"+3% del total",
   desc:"Vidrio doble (DVH) o triple con cámara de aire o gas. Aísla el ruido exterior y reduce la transferencia de calor de manera importante.",
   nota:"Recomendado en zonas ruidosas, climas extremos o proyectos de alto estándar energético y de confort.", partida:"canceleria", factor:1.45},
];

export const APLANADOS = [
  {id:"yeso",           icon:"⬜", label:"Yeso liso en todo el proyecto",              tag:"Sin sobrecosto",
   desc:"Acabado liso y uniforme aplicado sobre los muros. El estándar de calidad en interiores — paredes perfectas listas para pintar.",
   nota:"Base ideal para cualquier acabado decorativo posterior.", partida:"acabados", factor:1.0},
  {id:"estuco_comunes", icon:"▦",  label:"Yeso en privados · Estuco en áreas sociales", tag:"+0.5% del total",
   desc:"Recámaras y zonas privadas en yeso liso. Sala, comedor y cocina en estuco fino texturizado o pigmentado en masa.",
   nota:"El estuco puede pigmentarse directamente — sin necesidad de pintura adicional.", partida:"acabados", factor:1.03},
  {id:"expuesto_acento",icon:"▧",  label:"Yeso + muro de acento en concreto o tabique",  tag:"+1% del total",
   desc:"Un muro o zona específica en concreto aparente o tabique visto como elemento de diseño interior.",
   nota:"Requiere precisión constructiva — el acabado final se define desde la colocación del material.", partida:"acabados", factor:1.06},
  {id:"pasta_especial", icon:"🌿", label:"Detalle en acabado fino: microcemento, chukum o aplanado pulido", tag:"+1.5% del total",
   desc:"Zonas clave con microcemento, chukum (pasta natural de alta calidad y acabado mineral) o aplanado quemado y pulido a mano.",
   nota:"Requiere maestros especializados. Acabado de alto impacto visual con profundidad y textura únicos. Más costoso en mano de obra.", partida:"acabados", factor:1.10},
  {id:"porcelanato_muro",icon:"◈", label:"Recubrimiento especial en muros: porcelanato, mármol o azulejo de diseño", tag:"+2% del total",
   desc:"Muros recubiertos con porcelanato de gran formato, mármol natural, azulejo artesanal u otro recubrimiento de diseño en zonas específicas.",
   nota:"Requiere definirse desde el proyecto. Máximo impacto visual en zonas como cocina, sala o baño principal.", partida:"acabados", factor:1.14},
];

export const LAMBRINES = [
  {id:"ninguno",  icon:"○",  label:"Sin detalles adicionales en muros",    tag:"Sin sobrecosto",
   desc:"Solo aplanados en muros, sin carpintería ni recubrimientos adicionales.", partida:"acabados", factor:1.0},
  {id:"parciales",icon:"▬",  label:"Lambrines parciales (h = 1.20 m)",    tag:"+0.5% del total",
   desc:"Remate inferior de madera o MDF en pasillos, escaleras o baños. Elegancia y protección en zonas de mayor desgaste.", partida:"acabados", factor:1.03},
  {id:"completos",icon:"▮",  label:"Lambrines de piso a techo",            tag:"+1% del total",
   desc:"Paneles que cubren el muro de manera completa. Efecto cálido y muy contemporáneo.", partida:"acabados", factor:1.06},
  {id:"diseno",   icon:"◈",  label:"Lambrines o paneles de diseño especial",tag:"+1.5% del total",
   desc:"Paneles con relieve, ranuras, materiales mixtos o tapizado. Elemento de diseño de alto impacto en recámara principal o sala.", partida:"acabados", factor:1.09},
];

export const PLAFONES = [
  {id:"expuesto",     icon:"○",  label:"Losa aparente o expuesta",              tag:"Sin sobrecosto",
   desc:"La estructura de losa queda visible sin ningún recubrimiento. Estética industrial, minimalista o brutalista.",
   nota:"Permite mostrar instalaciones de manera intencional. Popular en lofts, oficinas y proyectos contemporáneos.", partida:"acabados", factor:1.0},
  {id:"yeso_liso",    icon:"⬜", label:"Aplanado en yeso o estuco",             tag:"+0.5% del total",
   desc:"Acabado liso aplicado directamente sobre la losa. Oculta la estructura y queda listo para pintar.",
   nota:"La opción más limpia y económica para tener un techo interior terminado.", partida:"acabados", factor:1.03},
  {id:"detalle",      icon:"◈",  label:"Plafón con desnivel o luz indirecta",   tag:"+1% del total",
   desc:"Desniveles en el techo o canaletas de luz LED indirecta. Da profundidad visual y carácter al espacio.",
   nota:"Muy efectivo en sala, comedor y recámara principal. Requiere proyecto de iluminación.", partida:"acabados", factor:1.06},
  {id:"madera_plafon",icon:"🪵", label:"Plafón de madera (duelas o lamas)",     tag:"+1.5% del total",
   desc:"Duelas o lamas de madera natural, MDF enchapado o similar. Calidez y textura únicos en el espacio.",
   nota:"Puede combinarse con losa expuesta en zonas de servicio y circulaciones.", partida:"acabados", factor:1.09},
  {id:"mixto_plafon", icon:"◉",  label:"Combinación de plafones por zona",      tag:"+1% del total",
   desc:"Losa expuesta en servicios y circulaciones, yeso en recámaras, desnivel con luz en áreas sociales.",
   nota:"La solución más expresiva. Cada espacio tiene su propio carácter y tratamiento.", partida:"acabados", factor:1.06},
];

export const PISOS = [
  {id:"economico",icon:"◻", label:"Piso funcional",    tag:"Sin sobrecosto",
   desc:"Cerámica nacional, concreto pulido o loseta estándar. Durable y de fácil mantenimiento.",
   ejemplos:"Cerámica 40×40 · Concreto pulido · Loseta básica", partida:"acabados", factor:1.0},
  {id:"medio",    icon:"◼", label:"Piso intermedio",   tag:"+1% del total",
   desc:"Porcelanato rectificado, madera laminada de buena calidad o similar.",
   ejemplos:"Porcelanato 60×60 · Madera laminada · Travertino sintético", partida:"acabados", factor:1.06},
  {id:"premium",  icon:"★", label:"Piso premium",      tag:"+2% del total",
   desc:"Mármol natural, madera sólida o porcelanato importado de gran formato.",
   ejemplos:"Mármol natural · Madera sólida de encino · Porcelanato 120×120 importado", partida:"acabados", factor:1.12},
];

export const COCINA = [
  {id:"funcional", icon:"🍳",  label:"Cocina funcional",  tag:"Sin sobrecosto",
   desc:"Melamina económica, herrajes básicos, cubierta de granito nacional y tarja de acero inoxidable. Práctica y durable.",
   nota:"La solución más eficiente. Cumple perfectamente su función y es base sólida para renovar en el futuro.",
   ejemplos:"Melamina económica · Granito nacional · Herraje básico · Tarja sencilla", partida:"cocina_banos", factor:1.0},
  {id:"equipada",  icon:"👨‍🍳", label:"Cocina equipada",   tag:"+1% del total",
   desc:"Melamina de mayor calidad o tablero grueso, herraje Blum básico con cierre suave. Cuarzo o granito importado.",
   nota:"La diferencia se nota claramente en los herrajes y en la cubierta. El uso diario se siente mejor.",
   ejemplos:"Melamina premium · Cuarzo o granito importado · Herraje Blum básico · Iluminación LED", partida:"cocina_banos", factor:1.10},
  {id:"diseno",    icon:"🍽️",  label:"Cocina de diseño",  tag:"+2% del total",
   desc:"MDF lacado mate o brillante, herraje Blum con amortiguadores y extracción total. Cuarzo Silestone o similar.",
   nota:"El punto óptimo entre diseño y precio. Acabados de nivel interiorismo con una diferencia visible.",
   ejemplos:"MDF lacado · Silestone · Herraje Blum Tandem · LED integrado · Cubierta de gran formato", partida:"cocina_banos", factor:1.20},
  {id:"gourmet",   icon:"🍾",  label:"Cocina gourmet",    tag:"+3.5% del total",
   desc:"Madera sólida o laca de alta resistencia, mármol o Silestone premium, herraje europeo de extracción total e isla central.",
   nota:"Diseño de interiorismo completo. Requiere carpintero especializado y proyecto de diseño.",
   ejemplos:"Madera sólida o laca premium · Mármol o Silestone · Herraje Blum Legrabox · Isla · Campana de diseño", partida:"cocina_banos", factor:1.35},
];

export const BANOS = [
  {id:"funcional", icon:"🚿", label:"Baño funcional",   tag:"Sin sobrecosto",
   desc:"Cerámica nacional, WC y lavabo de marcas nacionales, espejo básico y accesorios de acero inoxidable.",
   nota:"Acabados que cumplen perfectamente su función. Ideal para baños de visita o de servicio.",
   ejemplos:"Cerámica 30×60 · WC y lavabo nacionales · Regadera estándar · Espejo sencillo", partida:"cocina_banos", factor:1.0},
  {id:"estandar",  icon:"🚿", label:"Baño estándar",    tag:"+0.8% del total",
   desc:"Porcelanato 60×60, lavabo de sobreponer, monomando de buena calidad y regadera estándar.",
   nota:"Un nivel claramente superior al funcional. Ideal para baños secundarios.",
   ejemplos:"Porcelanato 60×60 · Lavabo de sobreponer · Monomando · Regadera básica", partida:"cocina_banos", factor:1.10},
  {id:"disenado",  icon:"🛁", label:"Baño de diseño",   tag:"+1.5% del total",
   desc:"Porcelanato rectificado, lavabo de diseño, regadera tipo lluvia, nicho empotrado y espejo con iluminación LED.",
   nota:"El nivel donde el baño se convierte en una experiencia. Ideal para recámara principal.",
   ejemplos:"Porcelanato 60×120 · Lavabo de diseño · Regadera lluvia · Nicho · Espejo LED", partida:"cocina_banos", factor:1.20},
  {id:"spa",       icon:"✨", label:"Baño premium",     tag:"+3% del total",
   desc:"Porcelanato importado o mármol de gran formato, mueble flotante a medida, walk-in shower amplio o tina independiente y grifería de importación.",
   nota:"El nivel más alto. Requiere diseño de interiores y coordinación especial desde la etapa de obra.",
   ejemplos:"Mármol o porcelanato importado · Mueble flotante · Walk-in o tina · Grifería Hansgrohe / Grohe / Roca alta gama", partida:"cocina_banos", factor:1.35},
];

export const ELECTRICOS = [
  {id:"estandar",    icon:"○",  label:"Eléctrico estándar",    tag:"Sin sobrecosto",
   desc:"Apagadores y contactos de línea genérica, lámparas de techo sencillas.",
   nota:"Para proyectos donde el acabado eléctrico no es prioridad.", partida:"instalaciones", factor:1.0},
  {id:"disenado",    icon:"◼",  label:"Eléctrico de diseño",   tag:"+0.8% del total",
   desc:"Línea arquitectónica (Leviton Decora, Bticino Axolute u similar), luminarias LED de diseño seleccionadas.",
   nota:"Marca de manera notable la percepción de calidad del espacio. Vale la pena el cambio.", partida:"instalaciones", factor:1.05},
  {id:"premium_elec",icon:"★",  label:"Eléctrico premium",     tag:"+2% del total",
   desc:"Gama alta (Jung, Schneider Odace u similar), iluminación de carril o puntos de luz en todo el proyecto.",
   nota:"Requiere proyecto de iluminación coordinado desde el diseño arquitectónico.", partida:"instalaciones", factor:1.12},
  {id:"inteligente", icon:"📱", label:"Eléctrico inteligente",  tag:"+3% del total",
   desc:"Apagadores táctiles, dimmers, persianas automatizadas y control por aplicación móvil y voz.",
   nota:"Compatible con Alexa, Google Home y Apple HomeKit. El cableado especial debe instalarse desde la obra.", partida:"instalaciones", factor:1.19},
];

export const URGENCIA = [
  {id:"normal", icon:"📅", label:"Sin prisa — ritmo estándar",   tag:"Sin sobrecosto",
   desc:"Cuadrillas regulares con planificación optimizada. Permite coordinar mejor los materiales y el costo.", factor:1.0},
  {id:"rapido", icon:"⚡", label:"Quiero terminar pronto",        tag:"+5% del total",
   desc:"Cuadrillas adicionales o jornadas extendidas. Reduce el tiempo de obra aproximadamente un 30–40%.", nota:"Implica mayor coordinación y costo de mano de obra.", factor:1.05},
  {id:"urgente",icon:"🔥", label:"Urgente — plazo muy ajustado", tag:"+10% del total",
   desc:"Múltiples frentes de trabajo simultáneos, posibles turnos adicionales. Solo si hay una razón de peso.", nota:"El costo de urgencia puede ser significativo. Consultar antes de elegir esta opción.", factor:1.10},
];
