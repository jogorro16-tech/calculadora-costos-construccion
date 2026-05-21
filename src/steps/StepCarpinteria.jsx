import { T, FD, FB } from "../data/tokens";
import { PUERTAS, CLOSETS } from "../data/opciones";
import Card from "../components/Card";
import Nav from "../components/Nav";
import NoMeQuedaClaro from "../components/NoMeQuedaClaro";

export default function StepCarpinteria({ data, set, onBack, onNext, dudas, togDuda }) {
  const duda = (dudas || []).includes("Carpintería y puertas");
  const ok = (!!data.puertas && !!data.closets) || duda;

  return (
    <>
      {/* Sección 1: Tipo de puerta */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <div style={{ width: 3, height: 16, background: T.moss }} />
          <span style={{ fontSize: 11, fontWeight: 600, color: T.ink, fontFamily: FD, letterSpacing: "0.06em", textTransform: "uppercase" }}>
            Tipo de puerta
          </span>
        </div>
        <p style={{ margin: "0 0 12px", fontSize: 12, color: T.inkSub, lineHeight: 1.75, fontFamily: FB }}>
          Aplica a todas las puertas interiores del proyecto, incluyendo la puerta principal. La elección define el carácter y la calidad percibida del espacio.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {PUERTAS.map(o => (
            <Card key={o.id} opt={o} selected={data.puertas === o.id} onClick={() => set("puertas", o.id)} />
          ))}
        </div>
      </div>

      {/* Sección 2: Closets y carpintería interior */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <div style={{ width: 3, height: 16, background: T.clay }} />
          <span style={{ fontSize: 11, fontWeight: 600, color: T.ink, fontFamily: FD, letterSpacing: "0.06em", textTransform: "uppercase" }}>
            Closets y carpintería interior
          </span>
        </div>
        <p style={{ margin: "0 0 12px", fontSize: 12, color: T.inkSub, lineHeight: 1.75, fontFamily: FB }}>
          Muebles de clóset, entre-paños y carpintería fija de interiores. El material y herraje define la durabilidad y el acabado cotidiano.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {CLOSETS.map(o => (
            <Card key={o.id} opt={o} selected={data.closets === o.id} onClick={() => set("closets", o.id)} />
          ))}
        </div>
      </div>

      <NoMeQuedaClaro stepTitle="Carpintería y puertas" dudas={dudas} togDuda={togDuda} />
      <Nav onBack={onBack} onNext={onNext} ok={ok} />
    </>
  );
}
