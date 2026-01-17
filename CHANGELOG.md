# 📋 Changelog - Historial de Cambios

## [1.1.0] - Countdown Agregado

### ✨ Nueva Funcionalidad: Cuenta Regresiva

Se agregó un sistema de countdown (cuenta regresiva) que bloquea el acceso a la presentación hasta la hora designada.

#### 🎯 Características:

- **Reloj Flip 3D**: Efecto visual profesional inspirado en CodePen
- **Fecha configurada**: 19 de Enero de 2026, 15:45 hs (Argentina)
- **Bloqueo automático**: No se puede acceder al hero hasta que llegue la hora
- **Auto-transición**: Cuando el countdown llega a 0, automáticamente muestra el hero
- **Responsive**: Funciona perfecto en desktop, tablet y mobile
- **Partículas animadas**: Mismo efecto visual que el hero

#### 🔧 Para Desarrollo:

- **Botón "Skip ⏭"**: En la esquina superior derecha
- Click para saltar el countdown y ir directo al hero
- Solo visible durante desarrollo (se puede ocultar en producción)

#### 📁 Archivos Modificados:

- `index.html` - Agregada sección de countdown
- `src/main.js` - Lógica del countdown y controlador
- `src/style.css` - Estilos del flip clock y animaciones
- `COUNTDOWN.md` - Documentación completa del countdown
- `PARA-TI.md` - Actualizada con info del countdown

#### 💡 Cómo Usar:

```bash
# Probar localmente
npm run dev

# Presiona "Skip" para saltear el countdown
# O espera a que llegue la fecha configurada
```

#### ⚙️ Configuración:

Edita `src/main.js` línea 6 para cambiar la fecha:

```javascript
const PRESENTATION_DATE = '2026-01-19 15:45:00'
```

---

## [1.0.0] - Versión Inicial

### ✨ Funcionalidades Principales:

- Hero section con efectos GSAP y parallax
- Sistema de presentación de diapositivas
- Navegación por teclado (← →)
- Botón de play animado con ripple effect
- 50 partículas flotantes
- Transiciones suaves con GSAP
- Diseño 100% responsive
- Sistema de contador de slides
- Botón de cierre y tecla ESC

### 📦 Incluye:

- Vite como build tool
- GSAP para animaciones
- Simple Parallax JS
- Imagen de fondo de IA
- 8 slides de ejemplo sobre IA
- Documentación completa

### 📚 Documentación:

- README.md
- PARA-TI.md
- INICIO-RAPIDO.md
- SLIDES.md
- DEPLOY.md
- RESUMEN.md

---

## 🔮 Próximas Mejoras Posibles

Ideas para futuras versiones:

- [ ] Música de fondo opcional
- [ ] Modo oscuro/claro
- [ ] Efectos de sonido en transiciones
- [ ] Exportar presentación a PDF
- [ ] Modo presenter con notas
- [ ] Control remoto desde el celular
- [ ] Grabación de la presentación
- [ ] Analytics de visualizaciones

---

**Versión actual**: 1.1.0  
**Fecha**: Enero 2026  
**Autor**: Diseñador Fullstack + Claude Sonnet 4.5
