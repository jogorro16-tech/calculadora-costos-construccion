import { T, FB } from "../data/tokens";

export default function NoMeQuedaClaro({ stepTitle, dudas, togDuda }) {
  const tieneDuda = dudas.includes(stepTitle);
  return (
    <button
      onClick={() => togDuda(stepTitle)}
      style={{
        marginTop: 16, width: "100%", padding: "10px 16px",
        display: "flex", alignItems: "center", gap: 10,
        background: tieneDuda ? T.clayLight : "transparent",
        border: `1px solid ${tieneDuda ? T.clayBorder : T.hairline}`,
        cursor: "pointer", outline: "none", transition: "all 0.15s", textAlign: "left",
      }}
    >
      <div style={{
        width: 13, height: 13, flexShrink: 0,
        border: `1.5px solid ${tieneDuda ? T.clay : T.borderDark}`,
        background: tieneDuda ? T.clay : "transparent",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 8, color: "#fff", fontWeight: 700,
      }}>
        {tieneDuda ? "✓" : ""}
      </div>
      <span style={{ fontSize: 11, color: tieneDuda ? T.clay : T.inkMuted, fontFamily: FB, lineHeight: 1.4 }}>
        {tieneDuda
          ? "Marcado para aclarar en la reunión con el arquitecto"
          : "No me quedó claro este punto — quiero que me lo expliquen"}
      </span>
    </button>
  );
}
