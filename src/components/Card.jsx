import { T, FD, FB, FM } from "../data/tokens";

function ImpactTag({ tag }) {
  const isBase = tag === "Sin sobrecosto";
  return (
    <span style={{ fontSize: 9, color: isBase ? T.inkMuted : T.clay, border: `1px solid ${isBase ? T.hairline : T.clayBorder}`, padding: "2px 7px", fontFamily: FM, letterSpacing: "0.06em", whiteSpace: "nowrap", flexShrink: 0 }}>
      {isBase ? "BASE" : tag}
    </span>
  );
}

export default function Card({ opt, selected, onClick }) {
  return (
    <button onClick={onClick} style={{
      display: "flex", flexDirection: "column",
      background: selected ? T.mossLight : T.surface,
      border: `1px solid ${selected ? T.moss : opt.recomendado ? T.clayBorder : T.hairline}`,
      borderLeft: `3px solid ${selected ? T.moss : opt.recomendado ? T.clay : "transparent"}`,
      padding: "16px 18px 14px", cursor: "pointer", textAlign: "left",
      transition: "all 0.15s", outline: "none", width: "100%", position: "relative",
    }}>
      {opt.recomendado && (
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0,
          background: T.clayLight, borderBottom: `1px solid ${T.clayBorder}`,
          padding: "4px 18px", display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <span style={{ fontSize: 8, fontWeight: 700, color: T.clay, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: FM }}>
            Recomendado por Estudio Landa
          </span>
          <span style={{ fontSize: 8, color: T.clay, fontFamily: FM, opacity: 0.7 }}>✦</span>
        </div>
      )}
      <div style={{ fontSize: 16, marginBottom: 8, opacity: 0.7, marginTop: opt.recomendado ? 24 : 0 }}>{opt.icon}</div>
      {selected && (
        <div style={{ position: "absolute", top: opt.recomendado ? 36 : 12, right: 12, width: 16, height: 16, background: T.moss, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, color: "#fff", fontWeight: 700 }}>✓</div>
      )}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
        <span style={{ fontSize: 14, fontWeight: 600, color: selected ? T.moss : T.ink, fontFamily: FD, letterSpacing: "-0.01em", lineHeight: 1.2 }}>{opt.label}</span>
        <ImpactTag tag={opt.tag || "Sin sobrecosto"} />
      </div>
      <p style={{ margin: 0, fontSize: 12, color: T.inkSub, lineHeight: 1.7, fontFamily: FB }}>{opt.desc}</p>
      {opt.incluye && (
        <div style={{ marginTop: 8, borderTop: `1px solid ${T.hairline}`, paddingTop: 6 }}>
          <span style={{ fontSize: 9, color: T.moss, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: FB }}>Incluye · </span>
          <span style={{ fontSize: 10, color: T.mossMid, fontFamily: FB }}>{opt.incluye}</span>
        </div>
      )}
      {opt.nota && <p style={{ margin: "6px 0 0", fontSize: 11, color: T.clay, lineHeight: 1.5, fontFamily: FB, borderLeft: `2px solid ${T.clayBorder}`, paddingLeft: 8 }}>{opt.nota}</p>}
      {opt.ejemplos && <p style={{ margin: "4px 0 0", fontSize: 10, color: T.inkMuted, fontFamily: FM }}>{opt.ejemplos}</p>}
    </button>
  );
}
