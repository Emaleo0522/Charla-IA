# Presentación sobre Inteligencia Artificial

Una presentación web interactiva moderna con efectos visuales impactantes usando GSAP y parallax.

## 🚀 Características

- Hero section con efectos parallax y partículas animadas
- Botón de play con animaciones GSAP
- Sistema de presentación de diapositivas controlado por teclado
- Navegación con flechas del teclado (← →)
- Diseño responsivo y moderno
- Listo para desplegar en Vercel

## 📋 Requisitos

- Node.js 18+
- npm o pnpm

## 🛠️ Instalación

```bash
npm install
```

## 🎨 Desarrollo

```bash
npm run dev
```

Abre tu navegador en `http://localhost:5173`

## 📦 Build

```bash
npm run build
```

## 🌐 Deploy en Vercel

1. Instala Vercel CLI (si no lo tienes):
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

O simplemente conecta tu repositorio de GitHub con Vercel para deploys automáticos.

## 🎯 Uso

1. La página carga con una hero section impactante
2. Presiona el botón de PLAY para iniciar la presentación
3. Usa las flechas del teclado (← →) para navegar entre diapositivas
4. Presiona ESC o el botón X para cerrar la presentación

## 📝 Personalización

### Agregar tus diapositivas

Edita el archivo `index.html` y reemplaza las diapositivas de ejemplo dentro de `<div class="presentation-slides">`:

```html
<div class="slide">
  <h2>Tu Título</h2>
  <p>Tu contenido aquí</p>
</div>
```

### Cambiar la imagen de fondo

Reemplaza el archivo `public/ai-background.jpg` con tu propia imagen generada por IA.

### Colores y estilos

Edita las variables CSS en `src/style.css`:

```css
:root {
  --primary-color: #00d9ff;
  --secondary-color: #7b2cbf;
  --accent-color: #ff006e;
  --dark-bg: #0a0a0f;
}
```

## 🎨 Tecnologías

- Vite
- GSAP (animaciones)
- Simple Parallax JS
- Vanilla JavaScript
- CSS3

## 📄 Licencia

MIT

---

**Creado para una presentación sobre Inteligencia Artificial**
