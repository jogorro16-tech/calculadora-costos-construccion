import { useState, useRef } from "react";
import { T, FD, FB, FM, fmt } from "./data/tokens";
import { STEPS, PROYECTOS } from "./data/proyectos";
import {
  TERRENO, COMPLEJIDAD, SERVICIOS, ESPACIOS, TECHOS,
  BIOCLIMATICA, FACHADA,
  APLANADOS, LAMBRINES, PLAFONES, PISOS,
  COCINA, BANOS, ELECTRICOS, URGENCIA,
} from "./data/opciones";
import { calcTotal } from "./utils/calcTotal";
import ProgressBar from "./components/ProgressBar";
import StepHead from "./components/StepHead";
import StepProyecto from "./steps/StepProyecto";
import StepSuperficie from "./steps/StepSuperficie";
import StepOpciones from "./steps/StepOpciones";
import StepVentanas from "./steps/StepVentanas";
import StepCarpinteria from "./steps/StepCarpinteria";
import StepExtras from "./steps/StepExtras";
import StepResultado from "./steps/StepResultado";

const TOTAL = STEPS.length - 1;

const INIT = {
  proyecto: null, m2: 120,
  terreno: null, complejidad: null, servicios: null, espacios: null,
  techos: null, bioclimatica: null, fachada: null,
  puertas: null, closets: null,
  vanos_amplitud: null, canceleria_calidad: null,
  aplanados: null, lambrines: null, plafones: null, pisos: null,
  cocina: null, banos: null, electricos: null, urgencia: null,
  extras: [], cocheras: 0, dudas: [],
};

const PASOS_OPCIONES = [
  { step: 2,  key: "terreno",         opts: TERRENO,     stepTitle: "El terreno",                  pregunta: "La condición del terreno afecta directamente la cimentación y el costo total. Sé lo más preciso posible." },
  { step: 3,  key: "complejidad",     opts: COMPLEJIDAD,  stepTitle: "Concepto arquitectónico",     pregunta: "¿Cómo imaginas el proyecto en cuanto a forma y volumetría? Esto impacta en la estructura y complejidad de construcción." },
  { step: 4,  key: "servicios",       opts: SERVICIOS,    stepTitle: "Servicios disponibles",       pregunta: "Indica qué servicios tienes disponibles frente al terreno. Cada servicio que falte implica trabajo e inversión adicional." },
  { step: 5,  key: "espacios",        opts: ESPACIOS,     stepTitle: "Espacios y distribución",     pregunta: "¿Cómo quieres que se organice el espacio interior? Esto define la estructura, las circulaciones y cómo se vive el proyecto." },
  { step: 6,  key: "techos",          opts: TECHOS,       stepTitle: "Techos y cubiertas",          pregunta: "El tipo de cubierta define la forma del proyecto, la impermeabilización y el nivel de mantenimiento a futuro." },
  { step: 7,  key: "bioclimatica",    opts: BIOCLIMATICA, stepTitle: "Confort y clima",             pregunta: "Estas estrategias definen qué tan cómodo se sentirá el espacio durante el año, y cuánto dependerá del aire acondicionado o la calefacción." },
  { step: 8,  key: "fachada",         opts: FACHADA,      stepTitle: "Fachada y exteriores",        pregunta: "Los materiales de fachada definen la imagen del proyecto y su nivel de mantenimiento a largo plazo." },
  { step: 11, key: "aplanados",       opts: APLANADOS,    stepTitle: "Acabados en muros",           pregunta: "El acabado de las paredes interiores define la textura, el ambiente y la personalidad de cada espacio." },
  { step: 12, key: "lambrines",       opts: LAMBRINES,    stepTitle: "Detalles en muros",           pregunta: "Recubrimientos o paneles adicionales en muros interiores — pueden ser decorativos o protectores." },
  { step: 13, key: "plafones",        opts: PLAFONES,     stepTitle: "Plafones y techos interiores",pregunta: "El acabado del techo interior define la altura visual del espacio y es donde vive la iluminación integrada." },
  { step: 14, key: "pisos",           opts: PISOS,        stepTitle: "Pisos",                       pregunta: "El piso es el elemento de mayor superficie visible. Su elección define el carácter del espacio y el presupuesto de acabados." },
  { step: 15, key: "cocina",          opts: COCINA,       stepTitle: "Cocina",                      pregunta: "Los gabinetes, herrajes y cubiertas de cocina son los elementos de mayor uso diario. La calidad aquí se nota siempre." },
  { step: 16, key: "banos",           opts: BANOS,        stepTitle: "Baños",                       pregunta: "En los baños los acabados se perciben de cerca. Define el nivel de confort que quieres para tu proyecto." },
  { step: 17, key: "electricos",      opts: ELECTRICOS,   stepTitle: "Eléctrico y luminarias",      pregunta: "Apagadores, contactos y luminarias se deciden durante la obra — cambiarlos después es costoso." },
  { step: 18, key: "urgencia",        opts: URGENCIA,     stepTitle: "Plazo de obra",               pregunta: "El tiempo de construcción afecta la mano de obra. Construir más rápido requiere cuadrillas adicionales." },
];

export default function App() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState(INIT);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const top = useRef(null);

  const set = (k, v) => setData(d => ({ ...d, [k]: v }));
  const tog = id => set("extras", data.extras.includes(id) ? data.extras.filter(x => x !== id) : [...data.extras, id]);
  const togDuda = title => set("dudas", data.dudas.includes(title) ? data.dudas.filter(x => x !== title) : [...data.dudas, title]);
  const sc  = () => setTimeout(() => top.current?.scrollIntoView({ behavior: "smooth" }), 40);
  const next  = () => { setStep(s => s + 1); sc(); };
  const back  = () => { setStep(s => s - 1); sc(); };
  const reset = () => { setStep(0); setData(INIT); setName(""); setPhone(""); sc(); };

  const si   = STEPS[step];
  const calc = calcTotal(data);
  const pasoOpciones = PASOS_OPCIONES.find(p => p.step === step);

  return (
    <div style={{ minHeight: "100vh", background: T.bg, fontFamily: FB, color: T.ink }}>

      {/* Topbar */}
      <div style={{ background: T.surface, borderBottom: `1px solid ${T.hairline}`, padding: "13px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 22, height: 22, background: T.moss, flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, color: T.ink, fontFamily: FD, letterSpacing: "0.02em" }}>Calculadora de Costos de Construcción</div>
            <div style={{ fontSize: 9, color: T.inkMuted, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: FB }}>Querétaro · MXN · 2025</div>
          </div>
        </div>
        {step < TOTAL && calc?.total > 0 && (
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: T.moss, fontFamily: FD, letterSpacing: "-0.02em" }}>{fmt(calc.total)}</div>
            <div style={{ fontSize: 9, color: T.inkMuted, fontFamily: FM }}>{fmt(Math.round(calc.porM2))}/m²</div>
          </div>
        )}
      </div>

      <div ref={top} style={{ maxWidth: 580, margin: "0 auto", padding: "28px 16px 110px" }}>
        {step < TOTAL && <ProgressBar step={step} />}
        {step < TOTAL && <StepHead step={step} title={si.title} sub={si.sub} />}

        {step === 0  && <StepProyecto  data={data} set={set} onNext={next} />}
        {step === 1  && <StepSuperficie data={data} set={set} onBack={back} onNext={next} />}
        {step === 9  && <StepCarpinteria data={data} set={set} onBack={back} onNext={next} dudas={data.dudas} togDuda={togDuda} />}
        {step === 10 && <StepVentanas  data={data} set={set} onBack={back} onNext={next} dudas={data.dudas} togDuda={togDuda} />}
        {step === 19 && <StepExtras    data={data} set={set} tog={tog} onBack={back} onNext={next} dudas={data.dudas} togDuda={togDuda} />}
        {step === 20 && (
          <StepResultado
            c={calc} data={data}
            name={name} setName={setName}
            phone={phone} setPhone={setPhone}
            onReset={reset}
          />
        )}
        {pasoOpciones && (
          <StepOpciones
            opciones={pasoOpciones.opts}
            dataKey={pasoOpciones.key}
            data={data} set={set}
            onBack={back} onNext={next}
            pregunta={pasoOpciones.pregunta}
            stepTitle={pasoOpciones.stepTitle}
            dudas={data.dudas} togDuda={togDuda}
          />
        )}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        html{-webkit-font-smoothing:antialiased;}
        input[type=range]{-webkit-appearance:none;appearance:none;background:transparent;width:100%;}
        input[type=range]::-webkit-slider-runnable-track{background:#DDD8CF;height:2px;}
        input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:16px;height:16px;background:#3A5436;margin-top:-7px;cursor:pointer;}
        button,a,input{font-family:inherit;}
        button:hover{filter:brightness(0.95);}
      `}</style>
    </div>
  );
}
