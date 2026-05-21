import { T, FD, FB } from "../data/tokens";

export default function StepHead({ step, title, sub }) {
  return (
    <div style={{ marginBottom: 24, display: "flex", gap: 16, alignItems: "flex-start" }}>
      <div style={{ fontFamily: FD, fontSize: 44, fontWeight: 700, color: T.hairline, lineHeight: 1, letterSpacing: "-0.04em", flexShrink: 0, marginTop: -2, userSelect: "none" }}>
        {String(step + 1).padStart(2, "0")}
      </div>
      <div style={{ paddingTop: 4 }}>
        <h2 style={{ margin: "0 0 3px", fontSize: 18, fontWeight: 600, fontFamily: FD, color: T.ink, letterSpacing: "-0.01em", lineHeight: 1.2 }}>{title}</h2>
        <p style={{ margin: 0, fontSize: 12, color: T.inkSub, fontFamily: FB }}>{sub}</p>
      </div>
    </div>
  );
}
