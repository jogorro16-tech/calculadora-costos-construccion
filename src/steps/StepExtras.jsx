import { T, FB, FM, fmt } from "../data/tokens";
import { EXTRAS } from "../data/extras";
import Toggle from "../components/Toggle";
import Nav from "../components/Nav";

export default function StepExtras({ data, tog, onBack, onNext }) {
  const totalExtras = data.extras.reduce((a, id) => {
    const e = EXTRAS.find(x => x.id === id);
    return a + (e ? e.costo_fijo : 0);
  }, 0);

  return (
    <>
      <p style={{ margin: "0 0 18px", fontSize: 12, color: T.inkSub, lineHeight: 1.75, fontFamily: FB }}>
        Estos son costos fijos estimados para Querétaro 2025. Selecciona lo que quieras incluir.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, marginBottom: 8 }}>
        {EXTRAS.map(e => (
          <Toggle key={e.id} opt={e} selected={data.extras.includes(e.id)} onClick={() => tog(e.id)} />
        ))}
      </div>
      <p style={{ margin: "10px 0 0", fontSize: 10, color: T.inkMuted, textAlign: "center", fontFamily: FB }}>
        {data.extras.length === 0
          ? "Puedes continuar sin seleccionar nada."
          : `${data.extras.length} extra${data.extras.length > 1 ? "s" : ""} seleccionado${data.extras.length > 1 ? "s" : ""} — ${fmt(totalExtras)}`}
      </p>
      <Nav onBack={onBack} onNext={onNext} label="Ver mi presupuesto →" ok />
    </>
  );
}
