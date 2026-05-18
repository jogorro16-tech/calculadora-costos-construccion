export const TERRENO = [
  {id:"plano",     icon:"⬜", label:"Terreno plano",         tag:"Sin sobrecosto",
   desc:"Sin pendiente, acceso fácil para maquinaria. El escenario más eficiente.", partida:"estructura", factor:1.0},
  {id:"pendiente", icon:"📐", label:"Con pendiente (> 15%)", tag:"+4% del total",
   desc:"Requiere muros de contención, cimentación especial o terracerías adicionales.", partida:"estructura", factor:1.12},
  {id:"roca",      icon:"🪨", label:"Terreno rocoso",        tag:"+6% del total",
   desc:"Excavación con explosivos o rompedora. Muy común en zonas serranas de Querétaro.", partida:"estructura", factor:1.18},
  {id:"relleno",   icon:"⚠️", label:"Terreno de relleno",   tag:"+8% del total",
   desc:"Suelo con baja capacidad de carga. Requiere pilotes o mejoramiento de suelo.", partida:"estructura", factor:1.22},
];

export const COMPLEJIDAD = [
  {id:"simple",    icon:"⬜", label:"Forma simple (cuadrada o rectangular)", tag:"Sin sobrecosto",
   desc:"Planta ortogonal simple. Mínima cimbra, máxima eficiencia constructiva.", partida:"estructura", factor:1.0},
  {id:"moderada",  icon:"▦",  label:"Forma moderada (L, U o con retranqueos)", tag:"+3% del total",
   desc:"Planta en L o U, voladizos cortos. Mayor coordinación de obra.", partida:"estructura", factor:1.08},
  {id:"compleja",  icon:"◈",  label:"Forma compleja (curvas, ángulos, múltiples desniveles)", tag:"+7% del total",
   desc:"Geometría libre, planos inclinados o niveles escalonados. Cimbra y estructura especializada.", partida:"estructura", factor:1.20},
];

export const SERVICIOS = [
  {id:"todos",      icon:"🟢", label:"Todos los servicios",          tag:"Sin sobrecosto",
   desc:"Agua, drenaje, electricidad y gas disponibles frente al terreno. El escenario más eficiente.", partida:"instalaciones", factor:1.0},
  {id:"sin_gas",    icon:"🔵", label:"Sin red de gas natural",       tag:"+1% del total",
   desc:"Gas LP en tanque estacionario. Instalación sencilla y muy común.", partida:"instalaciones", factor:1.06},
  {id:"sin_drenaje",icon:"🟡", label:"Sin drenaje municipal",        tag:"+4% del total",
   desc:"Fosa séptica o biodigestor. Costo relevante.", partida:"instalaciones", factor:1.14},
  {id:"sin_agua",   icon:"🟠", label:"Sin toma de agua potable",     tag:"+5% del total",
   desc:"Pozo, pipa o captación pluvial.", partida:"instalaciones", factor:1.18},
  {id:"sin_luz",    icon:"🔴", label:"Sin red eléctrica cercana",    tag:"+7% del total",
   desc:"Extensión de red CFE o solución solar autónoma.", partida:"instalaciones", factor:1.22},
];

export const ESPACIOS = [
  {id:"convencional",icon:"🟦", label:"Distribución convencional",      tag:"Sin sobrecosto",
   desc:"Cuartos bien definidos, techos estándar 2.40–2.60 m. Fácil de construir y amueblar.",
   nota:"Ideal si valoras funcionalidad y eficiencia de espacio.", partida:"estructura", factor:1.0},
  {id:"abierta",     icon:"🔲", label:"Planta abierta y fluida",        tag:"+2% del total",
   desc:"Sala, comedor y cocina integrados. Requiere vigas o trabes para librar grandes vanos.",
   nota:"Muy popular en casas contemporáneas. Favorece la convivencia.", partida:"estructura", factor:1.06},
  {id:"dobles",      icon:"⬆️", label:"Dobles alturas",                 tag:"+5% del total",
   desc:"Alturas de 4–6 m en áreas clave, escaleras como elemento de diseño. Gran impacto visual.",
   nota:"Requiere estructura especial y mayor inversión en iluminación.", partida:"estructura", factor:1.15},
  {id:"privacidad",  icon:"🔒", label:"Alta privacidad y zonificación", tag:"+1.5% del total",
   desc:"Zonas separadas con accesos independientes y muros acústicos. Ideal para familias grandes.",
   nota:"Requiere mayor metraje en circulaciones.", partida:"estructura", factor:1.04},
];

export const TECHOS = [
  {id:"plano",     icon:"▬",  label:"Losa plana",                     tag:"Sin sobrecosto",
   desc:"La solución más común en México. Económica y fácil de ampliar a futuro.",
   nota:"Requiere buen impermeabilizante y pendientes mínimas para drenaje.", partida:"estructura", factor:1.0},
  {id:"inclinado", icon:"🏔", label:"Cubierta inclinada",              tag:"+2.5% del total",
   desc:"A dos aguas con teja, lámina o panel. Excelente para climas lluviosos.",
   nota:"Puede incorporar entretecho habitable.", partida:"estructura", factor:1.07},
  {id:"verde",     icon:"🌿", label:"Techo verde o jardín en azotea",  tag:"+6% del total",
   desc:"Sustrato vegetal, impermeabilización especial y drenaje. Excelente aislamiento térmico.",
   nota:"Reduce hasta 30% la ganancia de calor solar.", partida:"estructura", factor:1.18},
  {id:"tecnica",   icon:"⚙️", label:"Losa técnica / industrial",       tag:"+3% del total",
   desc:"Instalaciones a la vista. Estética industrial contemporánea.",
   nota:"Popular en lofts, oficinas y proyectos de diseño audaz.", partida:"estructura", factor:1.09},
  {id:"mixta",     icon:"◈",  label:"Cubierta mixta o asimétrica",     tag:"+4% del total",
   desc:"Combinación de planos inclinados y horizontales. Alta expresividad arquitectónica.",
   nota:"Requiere detallado cuidadoso en encuentros y desagüe.", partida:"estructura", factor:1.12},
];

export const BIOCLIMATICA = [
  {id:"ninguna",    icon:"○",  label:"Sin estrategias",    tag:"Sin sobrecosto",
   desc:"Diseño convencional. Se depende de A/C y calefacción para el confort.",
   nota:"Puede implicar mayores costos operativos de energía a largo plazo.", partida:"instalaciones", factor:1.0},
  {id:"basico",     icon:"🌿", label:"Paquete básico",     tag:"+0.6% del total",
   desc:"Orientación correcta, aleros para sombra y ventilación cruzada bien ubicada.",
   nota:"Puede reducir hasta 20% la necesidad de A/C en climas templados.",
   incluye:"Orientación solar · Aleros y voladizos · Ventilación cruzada · Vegetación de sombra", partida:"instalaciones", factor:1.04},
  {id:"intermedio", icon:"🌱", label:"Paquete intermedio", tag:"+1.5% del total",
   desc:"Agrega celosías, masa térmica en muros, plafones ventilados y aislamiento de cubierta.",
   nota:"Confort natural sin A/C en climas semicálidos la mayor parte del año.",
   incluye:"Todo básico · Celosías / brise-soleil · Masa térmica · Aislamiento de cubierta", partida:"instalaciones", factor:1.09},
  {id:"avanzado",   icon:"🌳", label:"Paquete avanzado",  tag:"+3% del total",
   desc:"Diseño pasivo integral: estudio solar y de vientos, cubierta verde y captación pluvial.",
   nota:"Máxima eficiencia. Requiere estudio especializado desde el diseño.",
   incluye:"Todo intermedio · Estudio solar y de vientos · Cubierta verde · Captación pluvial", partida:"instalaciones", factor:1.19},
];

export const FACHADA = [
  {id:"aplanado",   icon:"⬜", label:"Aplanado pintado",              tag:"Sin sobrecosto",
   desc:"Yeso o cemento-arena con pintura exterior. El más económico y fácil de mantener.",
   nota:"Amplia variedad de colores y texturas de pintura.", partida:"fachada", factor:1.0},
  {id:"concreto_ap",icon:"▦",  label:"Concreto aparente",             tag:"+1.5% del total",
   desc:"Muros de concreto visto sin recubrimiento. Estética contemporánea y robusta.",
   nota:"Exige precisión constructiva. Sin posibilidad de corrección.", partida:"fachada", factor:1.25},
  {id:"piedra",     icon:"🪨", label:"Piedra natural o cantera",      tag:"+3% del total",
   desc:"Piedra volcánica, cantera o chiluca. Calidez, textura e identidad regional.",
   nota:"Altísima durabilidad. Muy presente en la arquitectura queretana.", partida:"fachada", factor:1.50},
  {id:"madera",     icon:"🪵", label:"Madera o bambú en fachada",     tag:"+2% del total",
   desc:"Lamas de madera tratada en fachada. Calidez única pero requiere mantenimiento.",
   nota:"Popular en proyectos contemporáneos y ecológicos.", partida:"fachada", factor:1.35},
  {id:"mixta_fach", icon:"◈",  label:"Fachada mixta (dos materiales)",tag:"+3.5% del total",
   desc:"Aplanado combinado con piedra, madera o concreto aparente. Alto impacto visual.",
   nota:"El nivel más expresivo. Requiere detallado fino en uniones.", partida:"fachada", factor:1.58},
];

export const CARPINTERIA = [
  {id:"estandar", icon:"🚪", label:"Puertas estándar (2.10 m)",             tag:"Sin sobrecosto",
   desc:"MDF o tambor estándar, chapa y marco de aluminio. Funcional y económico.",
   nota:"Amplia disponibilidad en cualquier carpintería local.", partida:"carpinteria", factor:1.0},
  {id:"alta",     icon:"🏛", label:"Puertas piso a techo (sin cerramiento)", tag:"+2% del total",
   desc:"2.60–3.00 m sin marco visible. Continuidad visual entre espacios.",
   nota:"Elimina el 'quiebre' visual sobre la puerta. Muy sofisticado.", partida:"carpinteria", factor:1.28},
  {id:"madera_s", icon:"🌳", label:"Madera sólida a medida",                 tag:"+3.5% del total",
   desc:"Cedro, encino u otras maderas sólidas. Peso, solidez y carácter únicos.",
   nota:"Requiere carpintero especializado y tiempo de fabricación.", partida:"carpinteria", factor:1.50},
  {id:"pivote",   icon:"↻",  label:"Puertas pivotantes de diseño",           tag:"+4.5% del total",
   desc:"Giro sobre eje vertical. Gran dimensión y presencia escultórica.",
   nota:"Herraje europeo especializado. Elemento arquitectónico de alto impacto.", partida:"carpinteria", factor:1.65},
];

export const VENTANAS = [
  {id:"convencional",icon:"🪟", label:"Ventanas convencionales",            tag:"Sin sobrecosto",
   desc:"Dimensiones estándar 1.0–1.5 m de ancho. Buena relación costo-beneficio.",
   nota:"Fáciles de persianas, cortinas y mantenimiento.", partida:"canceleria", factor:1.0},
  {id:"amplios",     icon:"🖼", label:"Ventanales amplios (paños grandes)", tag:"+1.5% del total",
   desc:"Vanos de 1.8–2.5 m. Mayor luminosidad y conexión visual con el exterior.",
   nota:"Requiere cancelería de mayor perfil y vidrio más grueso.", partida:"canceleria", factor:1.18},
  {id:"piso_techo",  icon:"⬍", label:"Ventanas de piso a techo",           tag:"+2.5% del total",
   desc:"Del suelo hasta la losa. Máxima entrada de luz y difuminan el límite interior-exterior.",
   nota:"En climas cálidos requieren control solar para no generar efecto invernadero.", partida:"canceleria", factor:1.30},
  {id:"celosias",    icon:"⊞", label:"Celosías o vanos con profundidad",    tag:"+1.5% del total",
   desc:"Lamas orientables o marcos profundos. Filtran la luz y dan textura a la fachada.",
   nota:"Combinan función bioclimática y valor estético.", partida:"canceleria", factor:1.18},
  {id:"mixta_ven",   icon:"◈", label:"Combinación de tipos de vanos",       tag:"+2% del total",
   desc:"Diferentes vanos según orientación y uso de cada espacio.",
   nota:"Permite respuesta específica a cada fachada.", partida:"canceleria", factor:1.24},
];

export const APLANADOS = [
  {id:"yeso",            icon:"⬜", label:"Yeso liso en todo el proyecto",          tag:"Sin sobrecosto",
   desc:"Acabado liso y uniforme. El estándar de calidad en México — paredes perfectas.",
   nota:"Base ideal para cualquier acabado decorativo posterior.", partida:"acabados", factor:1.0},
  {id:"estuco_comunes",  icon:"▦",  label:"Yeso en recámaras · Estuco en áreas comunes", tag:"+0.5% del total",
   desc:"Recámaras en yeso liso. Sala, comedor y cocina en estuco fino pigmentado.",
   nota:"El estuco puede pigmentarse en masa — sin pintura adicional.", partida:"acabados", factor:1.03},
  {id:"expuesto_acento", icon:"▧",  label:"Yeso + Estuco + Muro expuesto de acento", tag:"+1% del total",
   desc:"Un muro en concreto aparente o tabique visto como elemento de diseño.",
   nota:"Requiere precisión constructiva — sin margen de corrección.", partida:"acabados", factor:1.06},
  {id:"natural_acento",  icon:"🌿", label:"Yeso + Estuco + Detalle en material natural", tag:"+1.5% del total",
   desc:"Zonas clave con barro, tepetate o piedra natural en muro.",
   nota:"Requiere maestros especializados. Muy presente en la arquitectura queretana.", partida:"acabados", factor:1.08},
  {id:"diseno_integral", icon:"◈",  label:"Diseño integral de muros por zona",      tag:"+2% del total",
   desc:"Cada espacio tiene su propio acabado. Proyecto de interiorismo completo.",
   nota:"Requiere plano de acabados y coordinación con interiorista.", partida:"acabados", factor:1.12},
];

export const LAMBRINES = [
  {id:"ninguno",  icon:"○",  label:"Sin lambrines",                  tag:"Sin sobrecosto",
   desc:"Solo aplanados en muros, sin carpintería adicional.", partida:"acabados", factor:1.0},
  {id:"parciales",icon:"▬",  label:"Lambrines parciales (h=1.20 m)", tag:"+0.5% del total",
   desc:"Remate inferior de madera o MDF en pasillos, escaleras o baños. Elegancia y protección.", partida:"acabados", factor:1.03},
  {id:"completos",icon:"▮",  label:"Lambrines de piso a techo",       tag:"+1% del total",
   desc:"Paneles que cubren el muro completo. Efecto cálido y contemporáneo.", partida:"acabados", factor:1.06},
  {id:"diseno",   icon:"◈",  label:"Lambrines de diseño especial",    tag:"+1.5% del total",
   desc:"Paneles con relieve, ranuras o materiales mixtos. Elemento de diseño de alto impacto.", partida:"acabados", factor:1.09},
];

export const PLAFONES = [
  {id:"sin_plafon",   icon:"○",  label:"Sin plafón — losa vista",           tag:"Sin sobrecosto",
   desc:"La losa queda expuesta. Estética industrial o minimalista.",
   nota:"Popular en proyectos contemporáneos. Permite instalaciones vistas intencionalmente.", partida:"acabados", factor:1.0},
  {id:"yeso_liso",    icon:"⬜", label:"Plafón de yeso liso",               tag:"+0.5% del total",
   desc:"Tablaroca o yeso adherido. Acabado liso y uniforme, listo para pintar.",
   nota:"Oculta instalaciones y es base para iluminación integrada.", partida:"acabados", factor:1.03},
  {id:"detalle",      icon:"◈",  label:"Plafón con desnivel o luz indirecta",tag:"+1% del total",
   desc:"Desniveles, cornisas o canaletas de luz indirecta. Da profundidad visual.",
   nota:"Muy efectivo en sala, comedor y recámara principal.", partida:"acabados", factor:1.06},
  {id:"madera_plafon",icon:"🪵", label:"Plafón de madera o lamas",          tag:"+1.5% del total",
   desc:"Lamas de madera, MDF enchapado o bambú. Calidez y textura únicas.",
   nota:"Puede combinarse con losa expuesta en zonas de servicio.", partida:"acabados", factor:1.09},
  {id:"mixto_plafon", icon:"◉",  label:"Combinación de plafones por zona",  tag:"+1% del total",
   desc:"Losa en servicios, yeso en recámaras, detalle en áreas sociales.",
   nota:"La solución más expresiva. Cada espacio tiene su carácter.", partida:"acabados", factor:1.06},
];

export const PISOS = [
  {id:"economico",icon:"◻", label:"Piso sencillo",   tag:"Sin sobrecosto",
   desc:"Cerámica nacional, concreto pulido o loseta estándar.",
   ejemplos:"Cerámica 40×40 · Concreto pulido · Loseta básica", partida:"acabados", factor:1.0},
  {id:"medio",    icon:"◼", label:"Piso intermedio", tag:"+1% del total",
   desc:"Porcelanato rectificado, madera laminada o mármol sintético.",
   ejemplos:"Porcelanato 60×60 · Madera laminada · Travertino sintético", partida:"acabados", factor:1.06},
  {id:"premium",  icon:"★", label:"Piso premium",    tag:"+2% del total",
   desc:"Mármol natural, madera sólida o porcelanato importado de gran formato.",
   ejemplos:"Mármol Carrara · Madera sólida encino · Porcelanato 120×120 importado", partida:"acabados", factor:1.12},
];

export const COCINA = [
  {id:"basica", icon:"🍳",  label:"Cocina funcional", tag:"Sin sobrecosto",
   desc:"Gabinetes de melamina, granito nacional y tarja de acero. Práctica y durable.",
   nota:"La solución más eficiente. Excelente base para renovar a futuro.",
   ejemplos:"Melamina · Granito nacional · Tarja sencilla · Herraje básico", partida:"cocina_banos", factor:1.0},
  {id:"media",  icon:"👨‍🍳", label:"Cocina equipada", tag:"+1.5% del total",
   desc:"MDF lacado, cuarzo o granito importado, herraje Blum con amortiguadores.",
   nota:"El punto óptimo entre calidad y precio para la mayoría de proyectos.",
   ejemplos:"MDF lacado · Cuarzo importado · Herraje Blum · Iluminación LED integrada", partida:"cocina_banos", factor:1.15},
  {id:"premium",icon:"🍾",  label:"Cocina gourmet",   tag:"+3% del total",
   desc:"Madera sólida, Silestone o mármol, herraje europeo de extracción total e isla central.",
   nota:"Diseño de interiorismo completo. Requiere carpintero especializado.",
   ejemplos:"Madera sólida / laca · Silestone o mármol · Herraje Blum Tandem · Isla · Campana", partida:"cocina_banos", factor:1.30},
];

export const BANOS = [
  {id:"estandar", icon:"🚿", label:"Baño estándar",  tag:"Sin sobrecosto",
   desc:"Cerámica nacional, WC y lavabo básicos, espejo y accesorios de acero inoxidable.",
   nota:"Acabados funcionales que cumplen perfectamente su función.",
   ejemplos:"Cerámica 30×60 · WC y lavabo nacionales · Regadera estándar · Espejo básico", partida:"cocina_banos", factor:1.0},
  {id:"disenado",icon:"🛁",  label:"Baño de diseño",  tag:"+1.5% del total",
   desc:"Porcelanato o cantera, lavabo de sobreponer, monomando y regadera tipo lluvia.",
   nota:"Da una experiencia notablemente más placentera. Popular en recámara principal.",
   ejemplos:"Porcelanato 60×60 · Lavabo de sobreponer · Monomando · Regadera lluvia · Nicho", partida:"cocina_banos", factor:1.15},
  {id:"spa",     icon:"✨",  label:"Baño tipo spa",   tag:"+3% del total",
   desc:"Mármol o piedra natural, mueble flotante, tina independiente y grifería de importación.",
   nota:"El nivel más alto. Requiere diseño de interiores y plomería especializada.",
   ejemplos:"Mármol o piedra · Mueble flotante · Tina o walk-in · Grifería Hansgrohe / Grohe", partida:"cocina_banos", factor:1.30},
];

export const ELECTRICOS = [
  {id:"estandar",    icon:"○",  label:"Eléctrico estándar",   tag:"Sin sobrecosto",
   desc:"Apagadores y contactos genéricos, lámparas de techo sencillas.",
   nota:"Para proyectos de renta o donde el acabado eléctrico no es prioridad.", partida:"instalaciones", factor:1.0},
  {id:"disenado",    icon:"◼",  label:"Eléctrico de diseño",  tag:"+0.8% del total",
   desc:"Línea arquitectónica (Leviton Decora, Bticino Axolute), luminarias LED de diseño.",
   nota:"Marca notablemente la percepción de calidad del espacio.", partida:"instalaciones", factor:1.05},
  {id:"premium_elec",icon:"★",  label:"Eléctrico premium",    tag:"+2% del total",
   desc:"Gama alta (Jung, Schneider Odace), iluminación de carril en todo el proyecto.",
   nota:"Requiere proyecto de iluminación coordinado con el diseño.", partida:"instalaciones", factor:1.12},
  {id:"inteligente", icon:"📱", label:"Eléctrico inteligente", tag:"+3% del total",
   desc:"Apagadores táctiles, dimmers, persianas automatizadas y control por app y voz.",
   nota:"Compatible con Alexa, Google Home y Apple HomeKit. Cableado especial desde obra.", partida:"instalaciones", factor:1.19},
];

export const URGENCIA = [
  {id:"normal", icon:"📅", label:"Sin prisa — ritmo estándar",  tag:"Sin sobrecosto",
   desc:"Cuadrillas regulares, planificación optimizada. Permite optimizar costos.", factor:1.0},
  {id:"rapido", icon:"⚡", label:"Quiero terminar pronto",      tag:"+5% del total",
   desc:"Cuadrillas adicionales o turnos extendidos.", nota:"≈ 30–40% menos tiempo de obra.", factor:1.05},
  {id:"urgente",icon:"🔥", label:"Urgente — plazo muy ajustado", tag:"+10% del total",
   desc:"Múltiples frentes simultáneos, posibles turnos nocturnos.", nota:"Solo si hay razón de peso.", factor:1.10},
];
