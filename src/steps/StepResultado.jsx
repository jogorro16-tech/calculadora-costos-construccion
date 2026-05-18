import { T, FD, FB, FM, fmt, WA, EMAIL } from "../data/tokens";
import { PROYECTOS } from "../data/proyectos";
import LogoMarca from "../components/LogoMarca";
import {
  TERRENO, COMPLEJIDAD, SERVICIOS, ESPACIOS, TECHOS,
  BIOCLIMATICA, FACHADA, PUERTAS, CLOSETS, VANOS_AMPLITUD, CANCELERIA_CALIDAD,
  APLANADOS, LAMBRINES, PLAFONES, PISOS, COCINA, BANOS, ELECTRICOS, URGENCIA,
} from "../data/opciones";
import { EXTRAS } from "../data/extras";
import { COSTO_COCHERA_POR_VEHICULO } from "../utils/calcTotal";

const L = (arr, id) => arr.find(x => x.id === id)?.label || "—";

function buildResumen(data, c, name, phone) {
  const extrasLabels = data.extras.length > 0
    ? data.extras.map(id => EXTRAS.find(x => x.id === id)?.label || id).join(" · ")
    : "Ninguno";
  const cocherasLine = (data.cocheras || 0) > 0
    ? `· Cocheras: ${data.cocheras} vehículo${data.cocheras > 1 ? "s" : ""} (${fmt((data.cocheras || 0) * COSTO_COCHERA_POR_VEHICULO)})`
    : "";
  const dudasLine = data.dudas?.length > 0
    ? `\n⚠️ PUNTOS POR ACLARAR:\n${data.dudas.map(d => `· ${d}`).join("\n")}`
    : "";

  return [
    `📐 *CALCULADORA DE COSTOS — LANDA*`,
    `👤 ${name || "—"}  📞 ${phone || "—"}`,
    ``,
    `── PROYECTO ──`,
    `· Tipo: ${L(PROYECTOS, data.proyecto)}`,
    `· Superficie: ${data.m2} m²`,
    ``,
    `── CONDICIONES ──`,
    `· Terreno: ${L(TERRENO, data.terreno)}`,
    `· Concepto: ${L(COMPLEJIDAD, data.complejidad)}`,
    `· Servicios: ${L(SERVICIOS, data.servicios)}`,
    ``,
    `── ESPACIOS ──`,
    `· Distribución: ${L(ESPACIOS, data.espacios)}`,
    `· Techos: ${L(TECHOS, data.techos)}`,
    `· Confort climático: ${L(BIOCLIMATICA, data.bioclimatica)}`,
    ``,
    `── FACHADA Y CANCELERÍA ──`,
    `· Fachada: ${L(FACHADA, data.fachada)}`,
    `· Apertura de vanos: ${L(VANOS_AMPLITUD, data.vanos_amplitud)}`,
    `· Sistema cancelería: ${L(CANCELERIA_CALIDAD, data.canceleria_calidad)}`,
    ``,
    `── INTERIORES ──`,
    `· Puertas: ${L(PUERTAS, data.puertas)}`,
    `· Closets: ${L(CLOSETS, data.closets)}`,
    `· Muros: ${L(APLANADOS, data.aplanados)}`,
    `· Det. muros: ${L(LAMBRINES, data.lambrines)}`,
    `· Plafones: ${L(PLAFONES, data.plafones)}`,
    `· Pisos: ${L(PISOS, data.pisos)}`,
    `· Cocina: ${L(COCINA, data.cocina)}`,
    `· Baños: ${L(BANOS, data.banos)}`,
    `· Eléctrico: ${L(ELECTRICOS, data.electricos)}`,
    ``,
    `── EXTRAS ──`,
    `· ${extrasLabels}`,
    cocherasLine,
    `· Plazo: ${L(URGENCIA, data.urgencia)}`,
    dudasLine,
    ``,
    `💰 *TOTAL: ${c ? fmt(c.total) : "—"}*`,
    `📏 ${c ? fmt(Math.round(c.porM2)) : "—"}/m²`,
    `📊 Rango: ${c ? fmt(c.total * 0.88) : "—"} – ${c ? fmt(c.total * 1.15) : "—"}`,
  ].filter(l => l !== "").join("\n");
}

export default function StepResultado({ c, data, name, setName, phone, setPhone, onReset }) {
  const resumen = c ? buildResumen(data, c, name, phone) : "";

  if (!c) return null;

  return (
    <>
      {/* Encabezado con logo */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16, paddingBottom: 14, borderBottom: `1px solid ${T.hairline}` }}>
          <LogoMarca height={34} color={T.ink} />
          <div style={{ width: 1, height: 28, background: T.hairline }} />
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, color: T.ink, fontFamily: FD, letterSpacing: "0.12em", textTransform: "uppercase" }}>Estudio Landa</div>
            <div style={{ fontSize: 9, color: T.inkMuted, letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: FB }}>Arquitectura · Interiorismo · Diseño</div>
          </div>
        </div>
        <h2 style={{ margin: "0 0 3px", fontSize: 18, fontWeight: 600, fontFamily: FD, color: T.ink }}>Tu presupuesto estimado</h2>
        <p style={{ margin: 0, fontSize: 12, color: T.inkSub, fontFamily: FB }}>Basado en costos reales de Querétaro 2025</p>
      </div>

      {/* Hero */}
      <div style={{ background: T.ink, color: T.bg, padding: "28px 22px", marginBottom: 2, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: 3, height: "100%", background: T.moss }} />
        <div style={{ position: "absolute", top: 0, right: 0, width: 60, height: "100%", background: T.moss, opacity: 0.12 }} />
        <p style={{ margin: "0 0 3px", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.5, fontFamily: FB }}>Estimación total — Querétaro 2025</p>
        <div style={{ fontSize: 36, fontWeight: 700, fontFamily: FD, lineHeight: 1, marginBottom: 4, letterSpacing: "-0.03em" }}>{fmt(c.total)}</div>
        <p style={{ margin: "0 0 20px", opacity: 0.45, fontSize: 11, fontFamily: FB }}>{c.m2} m² · {PROYECTOS.find(p => p.id === data.proyecto)?.label}</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 2 }}>
          {[
            { l: "Por m²",         v: fmt(Math.round(c.porM2)) },
            { l: "Escenario −12%", v: fmt(c.total * 0.88) },
            { l: "Escenario +15%", v: fmt(c.total * 1.15) },
          ].map(m => (
            <div key={m.l} style={{ background: "rgba(247,244,239,0.07)", padding: "10px 12px", borderTop: "1px solid rgba(247,244,239,0.12)" }}>
              <div style={{ fontSize: 8, opacity: 0.5, marginBottom: 3, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: FB }}>{m.l}</div>
              <div style={{ fontSize: 12, fontWeight: 600, fontFamily: FD }}>{m.v}</div>
            </div>
          ))}
        </div>
        <p style={{ margin: "12px 0 0", fontSize: 9, opacity: 0.35, fontFamily: FB, letterSpacing: "0.04em" }}>
          Rango acotado a ±12–15% · Calculado por partidas reales de construcción
        </p>
      </div>

      {/* Resumen de selecciones */}
      <div style={{ background: T.surface, border: `1px solid ${T.hairline}`, padding: "16px 18px", marginBottom: 2 }}>
        <p style={{ margin: "0 0 12px", fontWeight: 600, fontSize: 12, color: T.ink, fontFamily: FD }}>Resumen de selecciones</p>
        {[
          { l: "Tipo de proyecto",    v: L(PROYECTOS, data.proyecto) },
          { l: "Superficie",          v: `${data.m2} m²` },
          { l: "Terreno",             v: L(TERRENO, data.terreno) },
          { l: "Concepto",            v: L(COMPLEJIDAD, data.complejidad) },
          { l: "Servicios",           v: L(SERVICIOS, data.servicios) },
          { l: "Distribución",        v: L(ESPACIOS, data.espacios) },
          { l: "Techos",              v: L(TECHOS, data.techos) },
          { l: "Confort climático",   v: L(BIOCLIMATICA, data.bioclimatica) },
          { l: "Fachada",             v: L(FACHADA, data.fachada) },
          { l: "Apertura de vanos",   v: L(VANOS_AMPLITUD, data.vanos_amplitud) },
          { l: "Cancelería",          v: L(CANCELERIA_CALIDAD, data.canceleria_calidad) },
          { l: "Puertas",             v: L(PUERTAS, data.puertas) },
          { l: "Closets",             v: L(CLOSETS, data.closets) },
          { l: "Muros interiores",    v: L(APLANADOS, data.aplanados) },
          { l: "Detalles en muros",   v: L(LAMBRINES, data.lambrines) },
          { l: "Plafones",            v: L(PLAFONES, data.plafones) },
          { l: "Pisos",               v: L(PISOS, data.pisos) },
          { l: "Cocina",              v: L(COCINA, data.cocina) },
          { l: "Baños",               v: L(BANOS, data.banos) },
          { l: "Eléctrico",           v: L(ELECTRICOS, data.electricos) },
          { l: "Plazo de obra",       v: L(URGENCIA, data.urgencia) },
        ].map(r => (
          <div key={r.l} style={{ display: "flex", justifyContent: "space-between", gap: 10, padding: "5px 0", borderBottom: `1px solid ${T.hairline}` }}>
            <span style={{ fontSize: 10, color: T.inkMuted, fontFamily: FB, flexShrink: 0 }}>{r.l}</span>
            <span style={{ fontSize: 10, fontWeight: 500, color: T.ink, fontFamily: FB, textAlign: "right" }}>{r.v}</span>
          </div>
        ))}
      </div>

      {/* Dudas del cliente */}
      {data.dudas?.length > 0 && (
        <div style={{ background: T.clayLight, borderLeft: `3px solid ${T.clay}`, padding: "14px 16px", marginBottom: 2 }}>
          <p style={{ margin: "0 0 8px", fontWeight: 600, fontSize: 11, color: T.clay, fontFamily: FD }}>⚠ Puntos a aclarar en la reunión</p>
          {data.dudas.map(d => (
            <div key={d} style={{ fontSize: 11, color: "#7A5C20", fontFamily: FB, lineHeight: 1.6 }}>· {d}</div>
          ))}
        </div>
      )}

      {/* Desglose por partidas */}
      <div style={{ background: T.surface, borderLeft: `3px solid ${T.moss}`, padding: "18px 20px", marginBottom: 2 }}>
        <p style={{ margin: "0 0 14px", fontWeight: 600, fontSize: 12, color: T.ink, fontFamily: FD }}>Desglose por partidas</p>
        {[
          { l: "Estructura, cimentación y muros (35%)",            v: c.costos.estructura },
          { l: "Instalaciones hidro-sanitarias y eléctricas (16%)", v: c.costos.instalaciones },
          { l: "Acabados: pisos, aplanados y plafones (18%)",       v: c.costos.acabados },
          { l: "Cocina y baños (10%)",                               v: c.costos.cocina_banos },
          { l: "Cancelería y ventanas (8%)",                         v: c.costos.canceleria },
          { l: "Carpintería y puertas interiores (7%)",              v: c.costos.carpinteria },
          { l: "Fachada y recubrimientos exteriores (6%)",           v: c.costos.fachada },
        ].map(r => (
          <div key={r.l} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: `1px solid ${T.hairline}` }}>
            <span style={{ fontSize: 11, color: T.inkSub, fontFamily: FB, flex: 1, paddingRight: 10 }}>{r.l}</span>
            <span style={{ fontSize: 11, fontWeight: 600, color: T.ink, fontFamily: FM, whiteSpace: "nowrap" }}>{fmt(r.v)}</span>
          </div>
        ))}
        <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0 0" }}>
          <span style={{ fontSize: 12, fontWeight: 600, fontFamily: FD }}>Costo directo de obra</span>
          <span style={{ fontSize: 12, fontWeight: 700, color: T.ink, fontFamily: FM }}>{fmt(c.costoObra)}</span>
        </div>
      </div>

      {/* Costos adicionales */}
      <div style={{ background: T.surface, borderLeft: `3px solid ${T.clay}`, padding: "18px 20px", marginBottom: 2 }}>
        <p style={{ margin: "0 0 14px", fontWeight: 600, fontSize: 12, color: T.ink, fontFamily: FD }}>Costos adicionales</p>
        {c.costoExtras > 0 && (
          <div style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: `1px solid ${T.hairline}` }}>
            <span style={{ fontSize: 11, color: T.inkSub, fontFamily: FB }}>Extras seleccionados</span>
            <span style={{ fontSize: 11, fontWeight: 600, color: T.ink, fontFamily: FM }}>{fmt(c.costoExtras)}</span>
          </div>
        )}
        {c.costoCocheras > 0 && (
          <div style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: `1px solid ${T.hairline}` }}>
            <span style={{ fontSize: 11, color: T.inkSub, fontFamily: FB }}>Cocheras techadas ({data.cocheras} vehículo{data.cocheras > 1 ? "s" : ""})</span>
            <span style={{ fontSize: 11, fontWeight: 600, color: T.ink, fontFamily: FM }}>{fmt(c.costoCocheras)}</span>
          </div>
        )}
        <div style={{ padding: "7px 0", borderBottom: `1px solid ${T.hairline}` }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
            <span style={{ fontSize: 11, color: T.inkSub, fontFamily: FB }}>Honorarios, permisos y supervisión (17%)</span>
            <span style={{ fontSize: 11, fontWeight: 600, color: T.ink, fontFamily: FM }}>{fmt(c.indirectos)}</span>
          </div>
          <div style={{ fontSize: 10, color: T.inkMuted, fontFamily: FB, lineHeight: 1.5 }}>
            Incluye: honorarios de arquitecto · licencia de construcción · permisos municipales · supervisión técnica
          </div>
        </div>
        <div style={{ background: "#EEF4FF", borderLeft: `2px solid #93C5FD`, padding: "10px 12px", margin: "10px 0" }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: "#1D4ED8", marginBottom: 4, letterSpacing: "0.06em", textTransform: "uppercase", fontFamily: FB }}>Utilidad del contratista — ya incluida</div>
          <div style={{ display: "flex", gap: 10 }}>
            <div>
              <div style={{ fontSize: 9, color: "#3B82F6", fontFamily: FB }}>Mínimo (10%)</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#1D4ED8", fontFamily: FM }}>{fmt(c.costoObra * 0.10)}</div>
            </div>
            <div>
              <div style={{ fontSize: 9, color: "#3B82F6", fontFamily: FB }}>Máximo (18%)</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#1D4ED8", fontFamily: FM }}>{fmt(c.costoObra * 0.18)}</div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0 0" }}>
          <span style={{ fontSize: 14, fontWeight: 700, fontFamily: FD }}>Total estimado</span>
          <span style={{ fontSize: 14, fontWeight: 700, color: T.moss, fontFamily: FM }}>{fmt(c.total)}</span>
        </div>
      </div>

      {/* No incluido */}
      <div style={{ background: T.clayLight, borderLeft: `3px solid ${T.clay}`, padding: "14px 16px", marginBottom: 2 }}>
        <p style={{ margin: "0 0 6px", fontWeight: 600, fontSize: 11, color: T.clay, fontFamily: FD }}>⚠ No incluido en este estimado</p>
        {[
          "Terreno — no forma parte del costo de construcción",
          "Mobiliario, decoración y electrodomésticos",
          "Cuotas de conexión definitiva (CFE, CONAGUA, gas)",
          "Imprevistos — recomendamos reservar un 8–10% adicional",
        ].map(t => (
          <div key={t} style={{ fontSize: 11, color: "#7A5C20", fontFamily: FB, lineHeight: 1.6 }}>· {t}</div>
        ))}
      </div>

      {/* Guardar como PDF */}
      <button
        onClick={() => window.print()}
        className="no-print"
        style={{ width: "100%", padding: "14px", border: `1px solid ${T.moss}`, background: T.mossLight, color: T.moss, fontSize: 11, fontWeight: 700, cursor: "pointer", fontFamily: FB, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 2 }}
      >
        Guardar como PDF
      </button>

      {/* Enviar */}
      <div className="no-print" style={{ background: T.surface, border: `1px solid ${T.hairline}`, borderLeft: `3px solid ${T.moss}`, padding: "18px 20px", marginBottom: 2 }}>
        <p style={{ margin: "0 0 4px", fontWeight: 600, fontSize: 12, color: T.ink, fontFamily: FD }}>Enviar selecciones al arquitecto</p>
        <p style={{ margin: "0 0 14px", fontSize: 11, color: T.inkSub, fontFamily: FB, lineHeight: 1.6 }}>Se enviará el resumen completo con todas tus elecciones.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 14 }}>
          <input type="text" placeholder="Tu nombre completo" value={name} onChange={e => setName(e.target.value)} style={{ padding: "10px 13px", border: `1px solid ${T.hairline}`, fontSize: 13, color: T.ink, background: T.bg, outline: "none", fontFamily: FB }} />
          <input type="tel" placeholder="Tu teléfono (WhatsApp)" value={phone} onChange={e => setPhone(e.target.value)} style={{ padding: "10px 13px", border: `1px solid ${T.hairline}`, fontSize: 13, color: T.ink, background: T.bg, outline: "none", fontFamily: FB }} />
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <a href={`https://wa.me/${WA}?text=${encodeURIComponent(resumen)}`} target="_blank" rel="noopener noreferrer"
            style={{ flex: 1, padding: "12px", background: "#25D366", color: "#fff", fontSize: 12, fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: 6, fontFamily: FB, letterSpacing: "0.04em" }}>
            💬 WhatsApp
          </a>
          <a href={`mailto:${EMAIL}?subject=${encodeURIComponent("Calculadora de Costos – " + (name || "Cliente"))}&body=${encodeURIComponent(resumen)}`}
            style={{ flex: 1, padding: "12px", border: `1px solid ${T.hairline}`, background: T.surface, color: T.ink, fontSize: 12, fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: 6, fontFamily: FB, letterSpacing: "0.04em" }}>
            📧 Correo
          </a>
        </div>
      </div>

      <button onClick={onReset} className="no-print" style={{ width: "100%", padding: "12px", border: `1px solid ${T.hairline}`, background: "transparent", color: T.inkSub, fontSize: 12, fontWeight: 500, cursor: "pointer", fontFamily: FB, letterSpacing: "0.04em", marginTop: 2 }}>
        Nueva cotización
      </button>
    </>
  );
}
