import Card from "../components/Card";
import Nav from "../components/Nav";
import { T, FB } from "../data/tokens";

export default function StepOpciones({ opciones, dataKey, data, set, onBack, onNext, pregunta, navLabel }) {
  return (
    <>
      {pregunta && (
        <p style={{ margin: "0 0 18px", fontSize: 12, color: T.inkSub, lineHeight: 1.75, fontFamily: FB }}>{pregunta}</p>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {opciones.map(o => (
          <Card key={o.id} opt={o} selected={data[dataKey] === o.id} onClick={() => set(dataKey, o.id)} />
        ))}
      </div>
      <Nav onBack={onBack} onNext={onNext} ok={!!data[dataKey]} label={navLabel} />
    </>
  );
}
