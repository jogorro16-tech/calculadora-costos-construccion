import { useState, useRef } from "react";
import { T, FD, FB, FM, fmt } from "./data/tokens";
import { STEPS, PROYECTOS } from "./data/proyectos";
import {
  TERRENO, COMPLEJIDAD, SERVICIOS, ESPACIOS, TECHOS,
  BIOCLIMATICA, FACHADA, CARPINTERIA, VENTANAS,
  APLANADOS, LAMBRINES, PLAFONES, PISOS,
  COCINA, BANOS, ELECTRICOS, URGENCIA,
} from "./data/opciones";
import { calcTotal } from "./utils/calcTotal";
import ProgressBar from "./components/ProgressBar";
import StepHead from "./components/StepHead";
import StepProyecto from "./steps/StepProyecto";
import StepSuperficie from "./steps/StepSuperficie";
import StepOpciones from "./steps/StepOpciones";
import StepExtras from "./steps/StepExtras";
import StepResultado from "./steps/StepResultado";

const TOTAL = STEPS.length - 1;

const INIT = {
  proyecto: null, m2: 120, terreno: null, complejidad: null,
  servicios: null, espacios: null, techos: null, bioclimatica: null,
  fachada: null, carpinteria: null, ventanas: null, aplanados: null,
  lambrines: null, plafones: null, pisos: null, cocina: null,
  banos: null, electricos: null, urgencia: null, extras: [],
};

// Mapa de pasos a datos y opciones
const PASOS_OPCIONES = [
  { step: 2,  key: "terreno",     opts: TERRENO,     pregunta: "La condición del terreno afecta directamente la cimentación y el costo. Sé lo más preciso posible." },
  { step: 3,  key: "complejidad", opts: COMPLEJIDAD,  pregunta: "La forma arquitectónica impacta en la estructura, cimbra y coordinación de obra." },
  { step: 4,  key: "servicios",   opts: SERVICIOS,    pregunta: "Indica qué servicios tienes disponibles frente al terreno. Cada uno faltante implica obra de introducción." },
  { step: 5,  key: "espacios",    opts: ESPACIOS,     pregunta: "La distribución define estructura, circulaciones y la experiencia de habitar el espacio." },
  { step: 6,  key: "techos",      opts: TECHOS,       pregunta: "El tipo de cubierta afecta la estructura, la impermeabilización y el aspecto visual del proyecto." },
  { step: 7,  key: "bioclimatica",opts: BIOCLIMATICA, pregunta: "Las estrategias bioclimáticas definen qué tan confortable es tu espacio sin depender de equipos mecánicos." },
  { step: 8,  key: "fachada",     opts: FACHADA,      pregunta: "La fachada define la identidad visual exterior y el mantenimiento a futuro del proyecto." },
  { step: 9,  key: "carpinteria", opts: CARPINTERIA,  pregunta: "Las puertas interiores definen el carácter espacial — un detalle que muchos subestiman." },
  { step: 10, key: "ventanas",    opts: VENTANAS,     pregunta: "La relación entre muros y vanos define luminosidad, ventilación y conexión con el exterior." },
  { step: 11, key: "aplanados",   opts: APLANADOS,    pregunta: "Define el material y acabado de tus muros según zona. La textura define el ambiente interior." },
  { step: 12, key: "lambrines",   opts: LAMBRINES,    pregunta: "Paneles de carpintería en muros — dan calidez y pueden dividir o acentuar espacios clave." },
  { step: 13, key: "plafones",    opts: PLAFONES,     pregunta: "El plafón define la altura visual del espacio y es donde vive la iluminación integrada." },
  { step: 14, key: "pisos",       opts: PISOS,        pregunta: "El piso es el elemento de mayor superficie visual. Elige según tus prioridades y presupuesto." },
  { step: 15, key: "cocina",      opts: COCINA,       pregunta: "Los gabinetes y acabados de cocina son los elementos más usados en el día a día." },
  { step: 16, key: "banos",       opts: BANOS,        pregunta: "Los baños son espacios donde los acabados se perciben más de cerca. Define tu nivel de confort." },
  { step: 17, key: "electricos",  opts: ELECTRICOS,   pregunta: "Apagadores, contactos y luminarias definen la experiencia eléctrica. Se decide en obra — no después." },
  { step: 18, key: "urgencia",    opts: URGENCIA,     pregunta: "El plazo afecta la mano de obra. Construir más rápido implica cuadrillas adicionales." },
];

export default function App() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState(INIT);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const top = useRef(null);

  const set = (k, v) => setData(d => ({ ...d, [k]: v }));
  const tog = id => set("extras", data.extras.includes(id) ? data.extras.filter(x => x !== id) : [...data.extras, id]);
  const sc  = () => setTimeout(() => top.current?.scrollIntoView({ behavior: "smooth" }), 40);
  const next  = () => { setStep(s => s + 1); sc(); };
  const back  = () => { setStep(s => s - 1); sc(); };
  const reset = () => { setStep(0); setData(INIT); sc(); };

  const si   = STEPS[step];
  const calc = calcTotal(data);

  // Buscar si el paso actual es un paso de opciones genérico
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
        {pasoOpciones && (
          <StepOpciones
            opciones={pasoOpciones.opts}
            dataKey={pasoOpciones.key}
            data={data}
            set={set}
            onBack={back}
            onNext={next}
            pregunta={pasoOpciones.pregunta}
          />
        )}
        {step === 19 && <StepExtras data={data} tog={tog} onBack={back} onNext={next} />}
        {step === 20 && (
          <StepResultado
            c={calc}
            data={data}
            name={name} setName={setName}
            phone={phone} setPhone={setPhone}
            onReset={reset}
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
