import { T, FD, FB, FM, fmt } from "../data/tokens";
import { PROYECTOS } from "../data/proyectos";
import Nav from "../components/Nav";

const REFERENCIA_M2 = {
  habitacional:        "Para una casa de 2–3 recámaras con sala, comedor, cocina y 2 baños, lo habitual es entre 120 y 180 m².",
  residencial:         "Para una casa de 3–4 recámaras con estudio, área de servicio y jardín, lo habitual es entre 200 y 350 m².",
  residencial_premium: "Una residencia premium con todas las áreas de servicio, jardín y amenidades suele estar entre 300 y 600 m².",
  local_comercial:     "Un local pequeño comienza en 40 m². Con almacén o zona de preparación, lo habitual es entre 80 y 150 m².",
  oficinas:            "Oficinas para 5–8 personas con sala de juntas: 80–120 m². Un despacho individual: 20–35 m².",
  mixto:               "Considera la suma de las áreas habitacionales y comerciales. Lo habitual es entre 150 y 300 m² en total.",
};

const DESCRIPCION_M2 = m2 => {
  if (m2 < 80)  return "Espacio compacto — departamento pequeño, cabaña o local chico.";
  if (m2 < 150) return "Casa familiar estándar — 2 a 3 recámaras con 2 baños.";
  if (m2 < 250) return "Casa amplia — 3 a 4 recámaras con estudio y cochera.";
  if (m2 < 500) return "Residencia generosa — con área de servicio y jardín.";
  return "Proyecto de gran escala — residencia plus o espacio corporativo.";
};

export default function StepSuperficie({ data, set, onBack, onNext }) {
  const baseM2 = PROYECTOS.find(p => p.id === data.proyecto)?.base_m2 || 0;
  const referencia = REFERENCIA_M2[data.proyecto];

  return (
    <>
      <div style={{ background: T.surface, border: `1px solid ${T.hairline}`, padding: "22px 20px", marginBottom: 2 }}>
        <p style={{ margin: "0 0 16px", fontSize: 12, color: T.inkSub, lineHeight: 1.75, fontFamily: FB }}>
          Incluye <strong>todas las áreas techadas</strong>: cuartos, pasillos, baños, cocina, cochera techada. No cuentes jardines o patios descubiertos.
        </p>
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <div style={{ fontSize: 64, fontWeight: 700, fontFamily: FD, color: T.ink, lineHeight: 1, letterSpacing: "-0.04em" }}>{data.m2}</div>
          <div style={{ fontSize: 10, color: T.inkMuted, marginTop: 6, letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: FB }}>metros cuadrados</div>
          {baseM2 > 0 && (
            <div style={{ marginTop: 10, fontSize: 13, fontWeight: 600, color: T.moss, fontFamily: FM }}>
              ≈ {fmt(baseM2 * data.m2)}
            </div>
          )}
          {baseM2 > 0 && (
            <div style={{ fontSize: 9, color: T.inkMuted, fontFamily: FB, letterSpacing: "0.06em" }}>estimado base antes de decisiones de diseño</div>
          )}
        </div>
        <input type="range" min={40} max={1500} step={5} value={data.m2}
          onChange={e => set("m2", Number(e.target.value))}
          style={{ width: "100%", accentColor: T.moss, cursor: "pointer" }} />
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 9, color: T.inkMuted, marginTop: 4, fontFamily: FM }}>
          <span>40 m²</span><span>1,500 m²</span>
        </div>
      </div>

      <div style={{ borderLeft: `2px solid ${T.moss}`, paddingLeft: 12, marginTop: 12, marginBottom: 2 }}>
        <p style={{ margin: 0, fontSize: 12, color: T.inkSub, lineHeight: 1.75, fontFamily: FB }}>
          {DESCRIPCION_M2(data.m2)}
        </p>
      </div>

      {referencia && (
        <div style={{ borderLeft: `2px solid ${T.clayBorder}`, paddingLeft: 12, marginTop: 8, background: T.clayLight, padding: "10px 12px" }}>
          <p style={{ margin: 0, fontSize: 11, color: "#7A5C20", lineHeight: 1.6, fontFamily: FB }}>
            <strong>Referencia para tu proyecto:</strong> {referencia}
          </p>
        </div>
      )}

      <Nav onBack={onBack} onNext={onNext} ok />
    </>
  );
}
