import { T, FD, FB, FM, fmt } from "../data/tokens";
import { PROYECTOS } from "../data/proyectos";
import Nav from "../components/Nav";

export default function StepSuperficie({ data, set, onBack, onNext }) {
  return (
    <>
      <div style={{ background: T.surface, border: `1px solid ${T.hairline}`, padding: "22px 20px", marginBottom: 2 }}>
        <p style={{ margin: "0 0 16px", fontSize: 12, color: T.inkSub, lineHeight: 1.75, fontFamily: FB }}>
          Incluye <strong>todas las áreas techadas</strong>: cuartos, pasillos, baños, cocina, cochera techada. No jardines descubiertos.
        </p>
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <div style={{ fontSize: 64, fontWeight: 700, fontFamily: FD, color: T.ink, lineHeight: 1, letterSpacing: "-0.04em" }}>{data.m2}</div>
          <div style={{ fontSize: 10, color: T.inkMuted, marginTop: 6, letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: FB }}>metros cuadrados</div>
          {data.proyecto && (
            <div style={{ marginTop: 10, fontSize: 13, fontWeight: 600, color: T.moss, fontFamily: FM }}>
              ≈ {fmt((PROYECTOS.find(p => p.id === data.proyecto)?.base_m2 || 0) * data.m2)}
            </div>
          )}
          {data.proyecto && <div style={{ fontSize: 9, color: T.inkMuted, fontFamily: FB, letterSpacing: "0.06em" }}>estimado base antes de decisiones de diseño</div>}
        </div>
        <input type="range" min={40} max={1500} step={5} value={data.m2} onChange={e => set("m2", Number(e.target.value))} style={{ width: "100%", accentColor: T.moss, cursor: "pointer" }} />
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 9, color: T.inkMuted, marginTop: 4, fontFamily: FM }}><span>40</span><span>1,500</span></div>
      </div>
      <div style={{ borderLeft: `2px solid ${T.moss}`, paddingLeft: 12, marginTop: 12 }}>
        <p style={{ margin: 0, fontSize: 12, color: T.inkSub, lineHeight: 1.75, fontFamily: FB }}>
          {data.m2 < 80   ? "Departamento o cabaña compacta — 1 a 2 recámaras." :
           data.m2 < 150  ? "Casa familiar estándar — 2 a 3 recámaras y 2 baños." :
           data.m2 < 250  ? "Casa amplia — 3 a 4 recámaras con estudio y cochera." :
           data.m2 < 500  ? "Residencia generosa con área de servicio y jardín." :
           "Proyecto de gran escala — residencia plus o espacio comercial."}
        </p>
      </div>
      <Nav onBack={onBack} onNext={onNext} ok />
    </>
  );
}
