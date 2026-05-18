import { T, FB, WA } from "../data/tokens";

export default function NoMeQuedaClaro({ stepTitle }) {
  const msg = `Hola, estoy usando la Calculadora de Costos de Construcción y tengo una duda sobre la sección "${stepTitle}". ¿Me pueden ayudar a entenderla?`;
  return (
    <div style={{ marginTop: 20, padding: "12px 16px", background: T.clayLight, borderLeft: `2px solid ${T.clayBorder}`, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
      <p style={{ margin: 0, fontSize: 11, color: T.inkSub, fontFamily: FB, lineHeight: 1.5 }}>
        ¿No te queda claro este punto?
      </p>
      <a
        href={`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontSize: 11, fontWeight: 600, color: T.clay, fontFamily: FB, textDecoration: "none", whiteSpace: "nowrap" }}
      >
        Escríbenos y te explicamos →
      </a>
    </div>
  );
}
