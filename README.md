# Calculadora de Costos de Construcción

## Deploy en Netlify

El sitio ya está creado en Netlify. Para publicarlo desde tu computadora:

### Primera vez

1. Instala Node.js si no lo tienes: https://nodejs.org
2. Abre la terminal en esta carpeta
3. Ejecuta:

```bash
npm install
npm run build
npx netlify-cli deploy --prod --dir=dist --site=303bb5b7-5d37-4d08-be92-d946dfe93045
```

Tu app quedará publicada en:
👉 https://calculadora-costos-construccion.netlify.app

### Actualizaciones futuras

Cada vez que hagamos cambios en Claude, recibirás el App.jsx actualizado.
Reemplázalo en src/ y ejecuta:

```bash
npm run build
npx netlify-cli deploy --prod --dir=dist --site=303bb5b7-5d37-4d08-be92-d946dfe93045
```

---

## Datos de contacto configurados

- WhatsApp: +52 442 226 4948
- Correo: jogorro16@gmail.com

---

## Estructura del proyecto

```
├── index.html          ← Entrada HTML
├── vite.config.js      ← Config de Vite
├── package.json        ← Dependencias
├── netlify.toml        ← Config de Netlify
└── src/
    ├── main.jsx        ← Punto de entrada React
    └── App.jsx         ← Toda la app ← aquí van los cambios
```
