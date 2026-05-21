import { T, FD, FB, FM, fmt } from "../data/tokens";

export default function Toggle({ opt, selected, onClick }) {
  return (
    <button onClick={onClick} style={{
      display: "flex", gap: 10, alignItems: "flex-start",
      background: selected ? T.mossLight : T.surface,
      border: `1px solid ${selected ? T.moss : T.hairline}`,
      borderLeft: `3px solid ${selected ? T.moss : "transparent"}`,
      padding: "11px 13px", cursor: "pointer", textAlign: "left", transition: "all 0.15s", outline: "none",
    }}>
      <div style={{ width: 15, height: 15, flexShrink: 0, marginTop: 2, border: `1.5px solid ${selected ? T.moss : T.borderDark}`, background: selected ? T.moss : "transparent", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8, color: "#fff", fontWeight: 700 }}>{selected ? "✓" : ""}</div>
      <div>
        <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 2, flexWrap: "wrap" }}>
          <span style={{ fontSize: 12, color: selected ? T.moss : T.ink, fontFamily: FD, fontWeight: 600 }}>{opt.icon} {opt.label}</span>
          <span style={{ fontSize: 9, color: T.clay, fontFamily: FM }}>{fmt(opt.costo_fijo)}</span>
        </div>
        <p style={{ margin: 0, fontSize: 11, color: T.inkSub, lineHeight: 1.5, fontFamily: FB }}>{opt.desc}</p>
      </div>
    </button>
  );
}
