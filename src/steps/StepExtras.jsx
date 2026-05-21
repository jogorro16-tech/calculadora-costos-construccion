import { T, FD, FB, FM, fmt } from "../data/tokens";
import { EXTRAS } from "../data/extras";
import { COSTO_COCHERA_POR_VEHICULO } from "../utils/calcTotal";
import Toggle from "../components/Toggle";
import Nav from "../components/Nav";
import NoMeQuedaClaro from "../components/NoMeQuedaClaro";

export default function StepExtras({ data, set, tog, onBack, onNext, dudas, togDuda }) {
  const totalExtras = data.extras.reduce((a, id) => {
    const e = EXTRAS.find(x => x.id === id);
    return a + (e ? e.costo_fijo : 0);
  }, 0);
  const totalCocheras = (data.cocheras || 0) * COSTO_COCHERA_POR_VEHICULO;

  const setCocheras = v => set("cocheras", Math.max(0, Math.min(4, v)));

  return (
    <>
      <p style={{ margin: "0 0 18px", fontSize: 12, color: T.inkSub, lineHeight: 1.75, fontFamily: FB }}>
        Costos fijos estimados para Querétaro 2025. Selecciona lo que quieras incluir — puedes no elegir nada.
      </p>

      {/* Cocheras */}
      <div style={{ background: T.surface, border: `1px solid ${T.hairline}`, padding: "16px 18px", marginBottom: 2 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6, flexWrap: "wrap", gap: 8 }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: T.ink, fontFamily: FD }}>🚗 Cocheras techadas</div>
            <div style={{ fontSize: 10, color: T.inkMuted, fontFamily: FB, marginTop: 2 }}>
              {fmt(COSTO_COCHERA_POR_VEHICULO)} por vehículo · estructura techada ≈ 15 m² c/u
            </div>
          </div>
          {data.cocheras > 0 && (
            <span style={{ fontSize: 12, fontWeight: 700, color: T.moss, fontFamily: FM }}>
              {fmt(totalCocheras)}
            </span>
          )}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 12 }}>
          <button
            onClick={() => setCocheras((data.cocheras || 0) - 1)}
            disabled={!data.cocheras}
            style={{ width: 36, height: 36, border: `1px solid ${T.hairline}`, background: T.bg, fontSize: 18, cursor: data.cocheras ? "pointer" : "not-allowed", color: data.cocheras ? T.ink : T.inkMuted, fontFamily: FD, display: "flex", alignItems: "center", justifyContent: "center" }}
          >−</button>
          <div style={{ fontSize: 32, fontWeight: 700, fontFamily: FD, color: T.ink, minWidth: 28, textAlign: "center", lineHeight: 1 }}>
            {data.cocheras || 0}
          </div>
          <button
            onClick={() => setCocheras((data.cocheras || 0) + 1)}
            disabled={(data.cocheras || 0) >= 4}
            style={{ width: 36, height: 36, border: `1px solid ${T.hairline}`, background: T.bg, fontSize: 18, cursor: (data.cocheras || 0) < 4 ? "pointer" : "not-allowed", color: (data.cocheras || 0) < 4 ? T.ink : T.inkMuted, fontFamily: FD, display: "flex", alignItems: "center", justifyContent: "center" }}
          >+</button>
          <span style={{ fontSize: 11, color: T.inkSub, fontFamily: FB }}>
            {(data.cocheras || 0) === 0 ? "Sin cochera techada" : `${data.cocheras} vehículo${data.cocheras > 1 ? "s" : ""}`}
          </span>
        </div>
      </div>

      {/* Extras generales */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, marginTop: 2, marginBottom: 8 }}>
        {EXTRAS.map(e => (
          <Toggle key={e.id} opt={e} selected={data.extras.includes(e.id)} onClick={() => tog(e.id)} />
        ))}
      </div>

      <p style={{ margin: "10px 0 0", fontSize: 10, color: T.inkMuted, textAlign: "center", fontFamily: FB }}>
        {(data.extras.length === 0 && !data.cocheras)
          ? "Puedes continuar sin seleccionar nada."
          : `Total extras: ${fmt(totalExtras + totalCocheras)}`}
      </p>

      <NoMeQuedaClaro stepTitle="Extras y servicios adicionales" dudas={dudas} togDuda={togDuda} />
      <Nav onBack={onBack} onNext={onNext} label="Ver mi presupuesto →" ok />
    </>
  );
}
