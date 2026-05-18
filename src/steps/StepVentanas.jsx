import { T, FD, FB } from "../data/tokens";
import { VANOS_AMPLITUD, CANCELERIA_CALIDAD } from "../data/opciones";
import Card from "../components/Card";
import Nav from "../components/Nav";
import NoMeQuedaClaro from "../components/NoMeQuedaClaro";

export default function StepVentanas({ data, set, onBack, onNext, dudas, togDuda }) {
  const ok = !!data.vanos_amplitud && !!data.canceleria_calidad;

  return (
    <>
      {/* Sección 1: Apertura visual */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <div style={{ width: 3, height: 16, background: T.moss }} />
          <span style={{ fontSize: 11, fontWeight: 600, color: T.ink, fontFamily: FD, letterSpacing: "0.06em", textTransform: "uppercase" }}>
            Apertura visual
          </span>
        </div>
        <p style={{ margin: "0 0 12px", fontSize: 12, color: T.inkSub, lineHeight: 1.75, fontFamily: FB }}>
          ¿Qué tan conectado quieres que se sienta el interior con el exterior? Esto define la proporción de vanos en el proyecto.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {VANOS_AMPLITUD.map(o => (
            <Card key={o.id} opt={o} selected={data.vanos_amplitud === o.id} onClick={() => set("vanos_amplitud", o.id)} />
          ))}
        </div>
      </div>

      {/* Sección 2: Calidad de cancelería */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <div style={{ width: 3, height: 16, background: T.clay }} />
          <span style={{ fontSize: 11, fontWeight: 600, color: T.ink, fontFamily: FD, letterSpacing: "0.06em", textTransform: "uppercase" }}>
            Sistema de cancelería
          </span>
        </div>
        <p style={{ margin: "0 0 12px", fontSize: 12, color: T.inkSub, lineHeight: 1.75, fontFamily: FB }}>
          El tipo de perfil y vidrio define el aislamiento acústico, térmico y la durabilidad de las ventanas.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {CANCELERIA_CALIDAD.map(o => (
            <Card key={o.id} opt={o} selected={data.canceleria_calidad === o.id} onClick={() => set("canceleria_calidad", o.id)} />
          ))}
        </div>
      </div>

      <NoMeQuedaClaro stepTitle="Ventanas y cancelería" dudas={dudas} togDuda={togDuda} />
      <Nav onBack={onBack} onNext={onNext} ok={ok} />
    </>
  );
}
