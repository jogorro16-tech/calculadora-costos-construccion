import { T, FD, FB, FM, fmt } from "../data/tokens";
import { PROYECTOS } from "../data/proyectos";
import Nav from "../components/Nav";

const RANGOS = {
  habitacional: "60 – 450 m²",
  residencial:  "400 m² en adelante",
  local_comercial:     "30 – 400 m²",
  oficinas:            "40 – 600 m²",
  mixto:               "120 – 600 m²",
};

export default function StepProyecto({ data, set, onNext }) {
  return (
    <>
      <p style={{ margin: "0 0 18px", fontSize: 12, color: T.inkSub, lineHeight: 1.75, fontFamily: FB }}>
        El tipo de proyecto define el costo base por m². Los rangos son para Querétaro 2025 con acabados estándar incluidos.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {PROYECTOS.map(p => (
          <button key={p.id} onClick={() => set("proyecto", p.id)} style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            background: data.proyecto === p.id ? T.mossLight : T.surface,
            border: `1px solid ${data.proyecto === p.id ? T.moss : T.hairline}`,
            borderLeft: `3px solid ${data.proyecto === p.id ? T.moss : "transparent"}`,
            padding: "14px 18px", cursor: "pointer", outline: "none", transition: "all 0.15s",
          }}>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <span style={{ fontSize: 20 }}>{p.icon}</span>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: data.proyecto === p.id ? T.moss : T.ink, fontFamily: FD }}>{p.label}</div>
                <div style={{ fontSize: 11, color: T.inkSub, fontFamily: FB, marginTop: 2 }}>{p.desc}</div>
                <div style={{ marginTop: 5, display: "inline-block", fontSize: 9, fontWeight: 600, color: data.proyecto === p.id ? T.mossMid : T.inkMuted, fontFamily: FM, letterSpacing: "0.06em", border: `1px solid ${data.proyecto === p.id ? T.mossMid : T.border}`, padding: "1px 6px" }}>
                  {RANGOS[p.id]}
                </div>
              </div>
            </div>
            <div style={{ textAlign: "right", flexShrink: 0, marginLeft: 12 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: data.proyecto === p.id ? T.moss : T.ink, fontFamily: FM }}>{fmt(p.base_m2)}</div>
              <div style={{ fontSize: 9, color: T.inkMuted, fontFamily: FB, letterSpacing: "0.06em" }}>por m²</div>
            </div>
          </button>
        ))}
      </div>
      <Nav onNext={onNext} ok={!!data.proyecto} />
    </>
  );
}
