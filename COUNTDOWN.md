# ⏰ Cuenta Regresiva - Countdown

## ¿Qué es?

La presentación ahora incluye una **cuenta regresiva (countdown)** que bloquea el acceso a la web hasta que llegue la hora de tu charla.

## ⚙️ Configuración

La fecha y hora está configurada para:
- **Día**: 19 de Enero de 2026
- **Hora**: 15:45 hs (Horario Argentina)

### Cambiar la fecha/hora

Edita el archivo `src/main.js` línea 6:

```javascript
const PRESENTATION_DATE = '2026-01-19 15:45:00'
```

Formato: `'YYYY-MM-DD HH:mm:ss'`

## 🎯 Funcionalidad

### En Producción (el día de la charla):

1. Visitantes ven el countdown con efecto flip clock
2. Los números cambian cada segundo con animación
3. Cuando llega la hora (15:45), automáticamente pasa al hero
4. **NO hay forma de saltear el countdown** hasta que llegue la hora

### En Desarrollo (mientras preparas):

1. Ves el mismo countdown
2. **Botón "Skip ⏭"** en la esquina superior derecha
3. Click en "Skip" y vas directo al hero
4. Este botón es solo para desarrollo

## 🔒 Seguridad

- El botón "Skip" está visible pero se puede ocultar fácilmente
- Para ocultar el botón en producción: elimina o comenta la línea 78-80 del `index.html`
- O agrega CSS para ocultarlo: `.dev-skip-button { display: none; }`

## 🎨 Diseño del Countdown

El countdown incluye:
- ✨ Mismo fondo con parallax que el hero
- 🎆 50 partículas flotantes animadas
- 🔢 Reloj flip con efecto 3D
- 📅 Muestra: Días, Horas, Minutos, Segundos
- 🎭 Los días se ocultan automáticamente cuando llega a 0

## 📱 Responsive

El countdown es completamente responsive:
- Desktop: Números grandes y legibles
- Tablet: Se adapta al tamaño
- Mobile: Números más pequeños pero perfectos

## 🚀 Flujo Completo

```
Usuario abre la web
      ↓
Ve el Countdown (bloqueado)
      ↓
Espera a que llegue la hora
      ↓
Countdown llega a 00:00:00
      ↓
Transición automática al Hero
      ↓
Usuario presiona Play
      ↓
Presentación comienza
```

## 💻 Para Desarrollo

Mientras trabajas en la presentación:

1. **Método 1**: Click en "Skip" en la esquina
2. **Método 2**: Cambia la fecha a una pasada temporalmente
3. **Método 3**: Comenta las líneas 16-81 del `index.html` para ocultar el countdown

### Recomendación:

Usa el botón "Skip". Es más rápido y no requiere editar código.

## 🎬 El Día de la Presentación

### Antes:

1. Verifica que la fecha/hora sea correcta
2. (Opcional) Oculta el botón "Skip" agregando en `style.css`:
   ```css
   .dev-skip-button { display: none !important; }
   ```
3. Deploy a Vercel
4. Comparte la URL con anticipación

### Durante:

- La gente verá el countdown hasta las 15:45
- Crea expectativa y profesionalismo
- Cuando llegue la hora, automáticamente se revelará el hero
- Tu audiencia dirá "¡WOW!" 🤯

## 🛠️ Personalización

### Cambiar el texto:

Edita `index.html` líneas 26-30:

```html
<h1 class="countdown-title">
  <span class="title-line">Inteligencia</span>
  <span class="title-line">Artificial</span>
</h1>
<p class="countdown-subtitle">La presentación comenzará en</p>
```

### Cambiar colores:

Edita `style.css` las variables CSS o los estilos del countdown.

### Agregar un mensaje:

Agrega después de la línea 74 en `index.html`:

```html
<p style="margin-top: 2rem; color: rgba(255,255,255,0.6);">
  ¡Estamos preparando algo increíble!
</p>
```

## ⚡ Tips

1. **Prueba el countdown**: Cambia la fecha a 1 minuto en el futuro y observa
2. **Verifica la zona horaria**: Usa hora local (Argentina)
3. **Ten un plan B**: Si hay problemas, usa el botón Skip
4. **Comparte la URL antes**: Para generar expectativa

## 🐛 Troubleshooting

### El countdown no arranca:

- Revisa la consola del navegador (F12)
- Verifica que moment.js se cargó correctamente
- Asegúrate que la fecha tenga formato correcto

### Los números no se voltean:

- Verifica que las clases CSS estén aplicadas
- Revisa que no haya errores de JavaScript

### Quiero deshabilitar el countdown temporalmente:

Opción 1: Cambia la fecha a ayer
Opción 2: Oculta la sección con:
```css
.countdown-section { display: none !important; }
.hero { display: flex !important; }
```

---

**¡Tu countdown está listo para impresionar! ⏰✨**
