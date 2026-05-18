export const PARTIDAS = {
  estructura:    { pct: 0.35 },
  instalaciones: { pct: 0.16 },
  canceleria:    { pct: 0.08 },
  acabados:      { pct: 0.18 },
  carpinteria:   { pct: 0.07 },
  cocina_banos:  { pct: 0.10 },
  fachada:       { pct: 0.06 },
};

export const PROYECTOS = [
  {id:"habitacional",        icon:"🏠", label:"Habitacional",           desc:"Casa o departamento de uso familiar. Acabados funcionales y de buena calidad.",           base_m2:10500},
  {id:"residencial",         icon:"🏡", label:"Residencial",            desc:"Casa amplia con espacios generosos, áreas de servicio y mayor nivel de acabados.",        base_m2:14500},
  {id:"residencial_premium", icon:"💎", label:"Residencial Premium",    desc:"Residencia de alto nivel con acabados selectos, detalles de diseño y gran calidad.",      base_m2:19000},
  {id:"local_comercial",     icon:"🏪", label:"Local o negocio",        desc:"Espacio para atender clientes, vender o instalar un negocio.",                            base_m2:9500},
  {id:"oficinas",            icon:"🏢", label:"Oficinas corporativas",  desc:"Espacio de trabajo profesional para despachos, empresas o corporativos.",                  base_m2:13500},
  {id:"mixto",               icon:"🏗", label:"Uso mixto",              desc:"Combinación de áreas habitacionales y comerciales en un mismo proyecto.",                  base_m2:11500},
];

export const STEPS = [
  {id:"proyecto",    title:"Tu proyecto",               sub:"¿Qué vas a construir?"},
  {id:"superficie",  title:"Superficie",                sub:"¿De qué tamaño?"},
  {id:"terreno",     title:"El terreno",                sub:"¿Cómo es el terreno?"},
  {id:"complejidad", title:"Concepto arquitectónico",   sub:"¿Cómo imaginas el proyecto?"},
  {id:"servicios",   title:"Servicios disponibles",     sub:"¿Con qué cuentas en el terreno?"},
  {id:"espacios",    title:"Espacios y distribución",   sub:"¿Cómo quieres vivir el espacio?"},
  {id:"techos",      title:"Techos y cubiertas",        sub:"¿Qué tipo de cubierta?"},
  {id:"bioclimatica",title:"Confort y clima",           sub:"¿Cómo quieres que se comporte tu proyecto con el clima?"},
  {id:"fachada",     title:"Fachada y exteriores",      sub:"¿Cómo se verá por fuera?"},
  {id:"carpinteria", title:"Carpintería y puertas",     sub:"¿Qué tipo de puertas interiores?"},
  {id:"ventanas",    title:"Ventanas y vanos",          sub:"¿Cómo entra la luz?"},
  {id:"aplanados",   title:"Acabados en muros",         sub:"¿Qué material y acabado en paredes interiores?"},
  {id:"lambrines",   title:"Detalles en muros",         sub:"¿Algún recubrimiento especial en muros?"},
  {id:"plafones",    title:"Plafones y techos interiores", sub:"¿Qué acabado en techos interiores?"},
  {id:"pisos",       title:"Pisos",                    sub:"¿Qué recubrimiento en el piso?"},
  {id:"cocina",      title:"Cocina",                   sub:"¿Qué nivel de acabado en cocina?"},
  {id:"banos",       title:"Baños",                    sub:"¿Qué nivel de acabado en baños?"},
  {id:"electricos",  title:"Eléctrico y luminarias",   sub:"¿Qué tipo de apagadores y lámparas?"},
  {id:"urgencia",    title:"Plazo de obra",             sub:"¿En cuánto tiempo quieres construir?"},
  {id:"extras",      title:"Extras",                   sub:"¿Algo más que quieras incluir?"},
  {id:"resultado",   title:"Tu presupuesto",           sub:""},
];
