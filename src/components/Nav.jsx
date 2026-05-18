import { T, FB } from "../data/tokens";

export default function Nav({ onBack, onNext, label = "Continuar", ok = true }) {
  return (
    <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 300, background: "rgba(247,244,239,0.97)", backdropFilter: "blur(10px)", borderTop: `1px solid ${T.hairline}`, padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
      {onBack ? (
        <button onClick={onBack} style={{ padding: "10px 20px", border: `1px solid ${T.hairline}`, background: "transparent", color: T.inkSub, cursor: "pointer", fontSize: 12, fontWeight: 500, fontFamily: FB, letterSpacing: "0.03em" }}>← Atrás</button>
      ) : <div />}
      <button onClick={onNext} disabled={!ok} style={{ padding: "12px 32px", border: "none", background: ok ? T.moss : T.hairline, color: ok ? "#fff" : T.inkMuted, cursor: ok ? "pointer" : "not-allowed", fontSize: 12, fontWeight: 600, fontFamily: FB, letterSpacing: "0.08em", textTransform: "uppercase", transition: "all 0.15s", opacity: ok ? 1 : 0.6 }}>{label}</button>
    </div>
  );
}
