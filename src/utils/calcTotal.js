import { PARTIDAS, PROYECTOS } from "../data/proyectos";
import {
  TERRENO, COMPLEJIDAD, ESPACIOS, TECHOS, SERVICIOS, BIOCLIMATICA,
  ELECTRICOS, FACHADA, PUERTAS, CLOSETS, VANOS_AMPLITUD, CANCELERIA_CALIDAD,
  APLANADOS, LAMBRINES, PLAFONES, PISOS,
  COCINA, BANOS, URGENCIA,
} from "../data/opciones";
import { EXTRAS } from "../data/extras";

const COSTO_COCHERA_POR_VEHICULO = 52000;

export function calcTotal(d) {
  if (!d.proyecto || !d.m2) return null;

  const proyecto = PROYECTOS.find(p => p.id === d.proyecto);
  if (!proyecto) return null;

  const { base_m2 } = proyecto;
  const m2 = d.m2;

  const costos = {};
  Object.entries(PARTIDAS).forEach(([key, val]) => {
    costos[key] = base_m2 * val.pct * m2;
  });

  const find = (arr, id) => arr.find(p => p.id === id)?.factor || 1;

  costos.estructura    *= find(TERRENO,     d.terreno);
  costos.estructura    *= find(COMPLEJIDAD, d.complejidad);
  costos.estructura    *= find(ESPACIOS,    d.espacios);
  costos.estructura    *= find(TECHOS,      d.techos);

  costos.instalaciones *= find(SERVICIOS,    d.servicios);
  costos.instalaciones *= find(BIOCLIMATICA, d.bioclimatica);
  costos.instalaciones *= find(ELECTRICOS,   d.electricos);

  costos.fachada      *= find(FACHADA,  d.fachada);
  costos.carpinteria  *= (find(PUERTAS, d.puertas) + find(CLOSETS, d.closets)) / 2;

  // Cancelería: apertura de vanos × calidad del sistema
  costos.canceleria *= find(VANOS_AMPLITUD,    d.vanos_amplitud);
  costos.canceleria *= find(CANCELERIA_CALIDAD, d.canceleria_calidad);

  const fAplan = find(APLANADOS, d.aplanados);
  const fLamb  = find(LAMBRINES, d.lambrines);
  const fPlaf  = find(PLAFONES,  d.plafones);
  const fPiso  = find(PISOS,     d.pisos);
  costos.acabados *= (fAplan + fLamb + fPlaf + fPiso) / 4;

  const fCoc  = find(COCINA, d.cocina);
  const fBano = find(BANOS,  d.banos);
  costos.cocina_banos *= (fCoc + fBano) / 2;

  const costoDirecto = Object.values(costos).reduce((a, b) => a + b, 0);
  const costoObra    = costoDirecto * find(URGENCIA, d.urgencia);

  const costoExtras = (d.extras || []).reduce((a, id) => {
    const e = EXTRAS.find(x => x.id === id);
    return a + (e ? e.costo_fijo : 0);
  }, 0);

  const costoCocheras = (d.cocheras || 0) * COSTO_COCHERA_POR_VEHICULO;

  const subtotal   = costoObra + costoExtras + costoCocheras;
  const indirectos = subtotal * 0.17;
  const total      = subtotal + indirectos;
  const porM2      = total / m2;
  const costoBase  = base_m2 * m2;

  return { costos, costoDirecto, costoObra, costoExtras, costoCocheras, indirectos, total, porM2, costoBase, m2 };
}

export { COSTO_COCHERA_POR_VEHICULO };
