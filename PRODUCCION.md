# 🚀 Preparar para Producción

Cuando subas tu presentación a Vercel para el día de la charla, sigue estos pasos:

## 1️⃣ Ocultar el Botón "Skip"

El botón "Skip ⏭" es solo para desarrollo. Para producción tienes 3 opciones:

### Opción A: Ocultar con CSS (Recomendado)

Agrega al final de `src/style.css`:

```css
/* Ocultar botón Skip en producción */
.dev-skip-button {
  display: none !important;
}
```

### Opción B: Eliminar del HTML

Elimina o comenta las líneas 78-80 de `index.html`:

```html
<!-- Dev Skip Button (only for development) -->
<!-- <button class="dev-skip-button" id="devSkipButton" title="Saltar countdown (solo desarrollo)">
  Skip ⏭
</button> -->
```

### Opción C: Condición por Environment

Más avanzado - usa variables de entorno de Vercel:

En `src/main.js` cambia la línea 32:

```javascript
// Solo mostrar botón en desarrollo
if (import.meta.env.DEV) {
  this.devSkipButton.addEventListener('click', () => this.skipCountdown())
} else {
  this.devSkipButton.style.display = 'none'
}
```

## 2️⃣ Verificar la Fecha y Hora

Asegúrate que esté correcta en `src/main.js` línea 6:

```javascript
const PRESENTATION_DATE = '2026-01-19 15:45:00'
```

**Importante**: Usa horario de Argentina (UTC-3)

## 3️⃣ Probar Localmente

Antes de subir a Vercel:

```bash
# Build de producción
npm run build

# Preview del build
npm run preview
```

Abre la URL que te da y verifica:
- ✅ El countdown funciona
- ✅ El botón Skip está oculto (si elegiste ocultarlo)
- ✅ La fecha es correcta
- ✅ Las diapositivas son las correctas

## 4️⃣ Deploy a Vercel

### Si usas GitHub:

```bash
git add .
git commit -m "Preparar para producción - Ocultar botón Skip"
git push
```

Vercel detectará el push y hará deploy automáticamente.

### Si usas CLI:

```bash
vercel --prod
```

## 5️⃣ Verificación Final

Después del deploy:

1. Abre la URL de Vercel
2. Verifica que el countdown esté activo
3. Confirma que el botón Skip NO sea visible
4. Comprueba que la fecha sea correcta
5. (Opcional) Comparte la URL con anticipación

## 6️⃣ Compartir la URL (Opcional)

Puedes compartir la URL antes de la charla para:

- ✅ Generar expectativa
- ✅ Que la gente vea el countdown
- ✅ Crear profesionalismo
- ✅ Dar un toque de misterio

Ejemplo de mensaje:

```
🎯 Presentación sobre IA
📅 19 de Enero, 15:45 hs
🔗 https://tu-presentacion.vercel.app

¡No te la pierdas!
```

## 7️⃣ El Día de la Presentación

### 30 minutos antes:

- [ ] Abre la URL en tu laptop
- [ ] Verifica que el countdown esté funcionando
- [ ] Conecta al proyector
- [ ] Prueba la resolución
- [ ] Cierra todas las demás pestañas
- [ ] Desactiva notificaciones

### 15 minutos antes:

- [ ] Recarga la página
- [ ] Deja la pestaña abierta
- [ ] No toques nada más

### A las 15:45:

- [ ] El countdown llegará a 0
- [ ] Transición automática al hero
- [ ] Presiona PLAY cuando estés listo
- [ ] ¡Comienza tu presentación! 🎉

## 🆘 Plan B

Si algo falla:

1. **Countdown no funciona**: Abre las DevTools (F12) y revisa la consola
2. **Fecha incorrecta**: Usa el botón Skip si lo dejaste habilitado
3. **Internet cae**: Ten un PDF backup en el escritorio
4. **Proyector falla**: Usa tu laptop y que la gente se acerque

## 📝 Checklist Final

Antes de subir a producción:

- [ ] Botón Skip oculto
- [ ] Fecha y hora correctas
- [ ] Diapositivas finalizadas
- [ ] Build testeado localmente
- [ ] Deploy a Vercel exitoso
- [ ] URL verificada
- [ ] PDF backup creado
- [ ] Laptop cargada

## 💡 Tips Extra

1. **Modo presentación**: Presiona F11 en Chrome para fullscreen
2. **Backup offline**: Guarda la carpeta `dist/` después del build
3. **Video recording**: Considera grabar la presentación
4. **Analytics**: Agrega Google Analytics si quieres ver quién visitó

## 🎬 Momento de Brillar

Todo está listo. Ahora solo falta que TÚ des la mejor presentación sobre IA que hayan visto.

**¡Vas a romperla! 💪🚀**

---

**Última actualización**: Enero 2026  
**Para más ayuda**: Revisa COUNTDOWN.md y PARA-TI.md
