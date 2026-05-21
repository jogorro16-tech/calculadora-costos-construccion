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
  {id:"ortogonal", icon:"⬜", label:"Volumetría ortogonal",             tag:"Sin sobrecosto", recomendado:true,
   desc:"Volúmenes de ángulos rectos y geometría limpia. El lenguaje arquitectónico contemporáneo más utilizado — orden, claridad y elegancia.",
   nota:"Permite optimizar estructura y materiales sin sacrificar calidad de diseño.", partida:"estructura", factor:1.0},
  {id:"niveles",   icon:"▦",  label:"Ortogonal con juego de niveles",  tag:"+3% del total",
   desc:"Volúmenes ortogonales con desniveles, voladizos, terrazas escalonadas o patios hundidos. Genera dinamismo y jerarquía espacial.",
   nota:"Mayor complejidad constructiva pero con un resultado arquitectónico de alto impacto.", partida:"estructura", factor:1.08},
  {id:"fuera_eje", icon:"◧",  label:"Volumetría fuera de eje",         tag:"+4% del total",
   desc:"Volúmenes ortogonales con ejes rotados o inclinados intencionalmente. Genera vestibulaciones distintas, aberturas anguladas y una dinámica espacial muy particular sin necesidad de curvas.",
   nota:"Entre lo ortogonal y lo orgánico. Requiere mayor precisión en el cálculo estructural y en el trazo de obra.", partida:"estructura", factor:1.12},
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
  {id:"abierta",        icon:"🔲", label:"Planta abierta e integrada",         tag:"+2% del total", recomendado:true,
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
  {id:"plano",     icon:"▬",  label:"Losa plana",                          tag:"Sin sobrecosto", recomendado:true,
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
  {id:"basico",     icon:"🌿", label:"Paquete básico",       tag:"+0.6% del total", recomendado:true,
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
  {id:"aplanado",      icon:"⬜", label:"Estuco y pintura exterior",              tag:"Sin sobrecosto",
   desc:"Toda la fachada resuelta en estuco o mortero de calidad con pintura exterior de primera. Limpio, contemporáneo y de bajo mantenimiento.",
   nota:"La base más utilizada en proyectos de calidad. Versátil en texturas y colores — puede verse muy bien con un buen diseño.", partida:"fachada", factor:1.0},
  {id:"aparentes",     icon:"▦",  label:"Estuco + materiales aparentes",          tag:"+1.5% del total",
   desc:"Muros en estuco con zonas en concreto aparente o tabique visto. Da carácter contemporáneo e industrial a zonas estratégicas de la fachada.",
   nota:"El material aparente se usa donde genera mayor impacto — acceso, esquinas o elementos verticales.", partida:"fachada", factor:1.25},
  {id:"combinacion",   icon:"◉",  label:"Estuco + acentos en material natural",  tag:"+2.5% del total", recomendado:true,
   desc:"Muros principales en estuco con zonas en material natural — piedra, laja o madera tratada — que enmarcan la entrada, ritman la fachada y jerarquizan las aberturas.",
   nota:"El balance que más nos gusta trabajar. Calidez del material natural con la limpieza del estuco. Funciona muy bien en Querétaro.", partida:"fachada", factor:1.40},
  {id:"recubrimientos",icon:"🪨", label:"Predominio de materiales naturales",     tag:"+3.5% del total",
   desc:"La mayor parte de la fachada resuelta en materiales naturales — piedra, laja volcánica, madera o combinaciones de alto impacto visual.",
   nota:"El nivel más expresivo. Requiere mayor tiempo de obra y coordinación con maestros especializados.", partida:"fachada", factor:1.55},
];

export const PUERTAS = [
  {id:"tambor_ligera",    icon:"🚪", label:"Puertas tambor estándar",              tag:"Sin sobrecosto",
   desc:"Hoja de tablero en marco de madera con relleno tipo panal. Ligeras, económicas y funcionales. Las más utilizadas en la construcción residencial.",
   nota:"Se pueden pintar, lacar o enchapar en madera. Buena relación costo-calidad para todo el proyecto.", partida:"carpinteria", factor:1.0},
  {id:"tambor_reforzada", icon:"🚪", label:"Puertas de mayor altura sin cerramiento", tag:"+1% del total",
   desc:"Tablero o MDF de mayor espesor, altura extendida de 2.40–3.00 m sin marco visible sobre el dintel. Genera continuidad visual y mayor presencia.",
   nota:"Elimina el espacio muerto sobre la puerta. Efecto sofisticado con un costo moderado.", partida:"carpinteria", factor:1.25},
  {id:"madera_solida",    icon:"🌳", label:"Madera sólida a medida",                tag:"+2% del total",
   desc:"Cedro, encino u otras maderas nobles fabricadas por carpintero especializado. Peso, solidez y carácter únicos en cada puerta.",
   nota:"Requiere tiempo de fabricación y carpintero de confianza. El nivel más alto en puertas interiores.", partida:"carpinteria", factor:1.55},
];

export const CLOSETS = [
  {id:"melamina_basica", icon:"▦",  label:"Closets en melamina básica",      tag:"Sin sobrecosto",
   desc:"Tablero melamínico de 15 mm con herrajes básicos. Funcional, limpio y accesible. La solución más común en construcción residencial.",
   nota:"Amplia disponibilidad. Ideal cuando la carpintería interior no necesita ser protagonista.", partida:"carpinteria", factor:1.0},
  {id:"melamina_media",  icon:"◼",  label:"Closets en melamina de calidad",  tag:"+1% del total",
   desc:"Tablero de mayor espesor (18–19 mm) con cantos gruesos y herraje Blum con cierre suave. Mayor durabilidad y terminado más cuidado.",
   nota:"La diferencia se nota en el tacto y en el uso cotidiano. Muy recomendable para la recámara principal.", partida:"carpinteria", factor:1.20},
  {id:"madera_closet",   icon:"🌳", label:"Closets en MDF lacado o madera",  tag:"+1.5% del total",
   desc:"MDF lacado mate o brillante, o madera con chapa natural, con herraje europeo de extracción total. Acabado de interiorismo de alta calidad.",
   nota:"Requiere carpintero especializado y proyecto de diseño. El nivel más alto en carpintería de interiores.", partida:"carpinteria", factor:1.50},
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
  {id:"liso",          icon:"⬜", label:"Aplanado liso + pintura",                        tag:"Sin sobrecosto",
   desc:"Acabado en yeso, estuco o mortero liso de alta calidad en todos los muros interiores, listo para pintura de primera. El estándar de los mejores proyectos contemporáneos.",
   nota:"Base perfecta para cualquier acabado posterior. Paredes planas, con la geometría del espacio como protagonista.", partida:"acabados", factor:1.0},
  {id:"aparente",      icon:"▦",  label:"Aplanado + acentos en material aparente",        tag:"+1% del total",
   desc:"Muros en aplanado liso con uno o varios muros de acento en concreto aparente, tabique visto o ladrillo. Da carácter e identidad sin revestir toda la superficie.",
   nota:"El muro de acento se define desde el proyecto. Su posición estratégica define el resultado.", partida:"acabados", factor:1.06},
  {id:"recubrimiento", icon:"◈",  label:"Aplanado + recubrimiento en zonas clave",        tag:"+1.5% del total",
   desc:"Aplanado liso con zonas en porcelanato de diseño, granito, mármol o azulejo artesanal. Ideal para sala, comedor o recámara principal.",
   nota:"Los recubrimientos deben definirse desde el proyecto. Máximo impacto visual donde el espacio lo merece.", partida:"acabados", factor:1.10},
  {id:"fino",          icon:"🌿", label:"Aplanado + acabado fino en zonas clave",         tag:"+2% del total",
   desc:"Aplanado liso en la mayoría de los muros con zonas en microcemento, chukum o aplanado quemado y pulido a mano. El acabado más expresivo en interiores.",
   nota:"Requiere maestros especializados y tiempo adicional. El resultado es único — profundidad y textura que no se replica con pintura.", partida:"acabados", factor:1.14},
];

export const LAMBRINES = [
  {id:"ninguno",    icon:"○",  label:"Sin lambrines",                                         tag:"Sin sobrecosto",
   desc:"Solo aplanados en muros, sin carpintería ni paneles adicionales.", partida:"acabados", factor:1.0},
  {id:"acento_eco", icon:"▬",  label:"Acento puntual — aprox. 3 m lineales",                 tag:"+0.5% del total",
   desc:"Un detalle de lambrin en melamina o WPC en un pasillo, escalera o zona de entrada. Solo donde importa.",
   nota:"Una sola franja bien ubicada puede cambiar la percepción de un espacio. Equivale a cubrir un muro angosto.", partida:"acabados", factor:1.03},
  {id:"zonas",      icon:"▮",  label:"Lambrin en zonas clave — aprox. 6 m lineales",          tag:"+1% del total",
   desc:"Melamina de calidad en dos o tres zonas del proyecto — recámara principal, sala o comedor. Con herraje y remates cuidados.",
   nota:"Equivale a cubrir un muro de la sala y uno de la recámara, de piso a techo.", partida:"acabados", factor:1.06},
  {id:"amplio_med", icon:"▪",  label:"Lambrin amplio — aprox. 10 m lineales",                 tag:"+1.5% del total",
   desc:"Melamina premium o chapa de madera en varias zonas del proyecto. Material con calidez y presencia.",
   nota:"Cubre varios muros clave en recámaras y sala. Aquí el interior empieza a sentirse como un proyecto de interiorismo.", partida:"acabados", factor:1.09},
  {id:"solida",     icon:"🪵", label:"Madera sólida — aprox. 10 m lineales",                  tag:"+2% del total",
   desc:"Paneles de madera sólida o enchapada en madera natural. El material más cálido y de mayor carácter para revestimiento interior.",
   nota:"Requiere carpintero especializado. Duradero, único y de altísima calidad.", partida:"acabados", factor:1.13},
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
  {id:"mixto_plafon", icon:"◉",  label:"Combinación de plafones por zona",      tag:"+1% del total", recomendado:true,
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
