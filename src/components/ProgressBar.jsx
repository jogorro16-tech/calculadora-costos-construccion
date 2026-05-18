import { T, FB, FM } from "../data/tokens";
import { STEPS } from "../data/proyectos";

const TOTAL = STEPS.length - 1;

export default function ProgressBar({ step }) {
  const grp = step <= 4 ? "Datos del proyecto" : step <= 13 ? "Decisiones de diseño" : "Acabados y resultado";
  return (
    <div style={{ marginBottom: 28 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <span style={{ fontSize: 9, color: T.inkMuted, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: FB }}>{grp}</span>
        <span style={{ fontSize: 9, color: T.inkMuted, fontFamily: FM }}>{String(step).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}</span>
      </div>
      <div style={{ display: "flex", gap: 2 }}>
        {Array.from({ length: TOTAL }).map((_, i) => (
          <div key={i} style={{ flex: 1, height: 2, background: i < step ? T.moss : i === step ? T.clay : T.hairline, transition: "background 0.3s" }} />
        ))}
      </div>
    </div>
  );
}
