# 👋 Hola! Tu presentación está lista

## 🎉 ¿Qué tienes ahora?

Una **landing page profesional** que nadie esperará. Cuando presiones el botón de PLAY, 
se desplegará tu presentación de diapositivas. Tu audiencia pensará que es una web normal
hasta que reveles que es tu presentación... ¡Factor sorpresa! 🎯

## 📺 ¿Cómo se ve?

1. **Hero impresionante**: Título con gradiente, fondo con parallax, partículas flotantes
2. **Botón de play**: En el centro, con animaciones ripple
3. **Al presionar**: Transición suave a las diapositivas
4. **Navegación**: Flechas del teclado para avanzar cuando TÚ quieras

## 🏃‍♂️ Pruébalo AHORA (5 minutos)

```bash
cd presentacion-ia
npm run dev
```

1. Abre http://localhost:5173
2. Observa las animaciones del hero
3. Click en el botón PLAY
4. Usa las flechas → y ← para navegar
5. Presiona ESC para volver al inicio

## ✏️ Personaliza tus diapositivas (15 minutos)

### Paso 1: Abre el ejemplo
- Abre el archivo `ejemplo-slides-ia.html`
- Verás 8 diapositivas de ejemplo sobre IA

### Paso 2: Edita tu contenido
- Abre `index.html`
- Busca la línea 54: `<div class="presentation-slides" id="slides">`
- Reemplaza todo desde ahí hasta el `</div>` del final (línea 69)
- Pega el contenido de `ejemplo-slides-ia.html`

### Paso 3: Personaliza el contenido
Edita directamente en `index.html`:
- Cambia los títulos y textos
- Agrega o elimina diapositivas
- Usa `SLIDES.md` para ver más ejemplos de estilos

## 🖼️ Cambia la imagen de fondo (Opcional)

Si quieres usar tu propia imagen generada con IA:

1. Genera una imagen con Midjourney, DALL-E, etc.
2. Guárdala como `ai-background.jpg`
3. Reemplaza el archivo en `public/ai-background.jpg`

Recomendaciones:
- Tamaño: mínimo 1920x1080px
- Tema: Futurista, tecnológico, relacionado con IA
- Colores: Oscuros con detalles brillantes funcionan mejor

## 🌐 Sube a Vercel (10 minutos)

### Opción A: Con GitHub (Recomendado)

1. **Crea un repo en GitHub:**
   - Ve a https://github.com/new
   - Nombre: `presentacion-ia` (o el que quieras)
   - Privado o público (tú decides)
   - NO marques ningún checkbox
   - Click "Create repository"

2. **Sube tu código:**
   ```bash
   git remote add origin https://github.com/TU_USUARIO/presentacion-ia.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy en Vercel:**
   - Ve a https://vercel.com
   - Login con GitHub
   - Click "New Project"
   - Selecciona tu repo `presentacion-ia`
   - Click "Deploy"
   - ¡Espera 1 minuto y listo!

### Opción B: CLI de Vercel (Más rápido)

```bash
npm i -g vercel
vercel login
vercel
# Sigue las instrucciones (presiona Enter en todo)
vercel --prod
```

## 📅 Plan para el Lunes

### Domingo (Noche antes):
- [ ] Personaliza todas las diapositivas
- [ ] Sube a Vercel
- [ ] Practica la presentación 2 veces completas
- [ ] Carga tu laptop
- [ ] Exporta un PDF como backup (Ctrl+P → Guardar como PDF)

### Lunes (Día de la presentación):
- [ ] Llega 15 min antes
- [ ] Conecta tu laptop al proyector
- [ ] Abre la URL de tu presentación
- [ ] Cierra todas las demás pestañas
- [ ] Desactiva notificaciones (Windows + A → Focus Assist)
- [ ] Ten el PDF backup en el escritorio por si acaso

## 🎤 Durante la Presentación

### Inicio:
1. Abre la web (se verá el hero impresionante)
2. Habla un poco sobre IA mientras está visible
3. Cuando estés listo, click en PLAY
4. ¡Sorprende! La web SE TRANSFORMA en tu presentación

### Navegación:
- **Flecha derecha (→)**: Siguiente slide
- **Flecha izquierda (←)**: Slide anterior
- **NO toques el mouse** - usa solo el teclado

### Si algo sale mal:
- Presiona F5 para recargar
- Si no funciona internet, abre el PDF backup

## 💡 Tips Profesionales

1. **Practica el timing**: Sé cuánto tiempo pasas en cada slide
2. **No leas las slides**: Úsalas como apoyo visual
3. **Mantén contacto visual**: Con tu audiencia, no con la pantalla
4. **Respira**: Toma pausas entre slides
5. **Disfruta**: ¡Es TU momento para brillar!

## 🎯 El Factor Sorpresa

Tu audiencia pensará:
- "Ah, una página web normal sobre IA..."
- **[Presionas PLAY]**
- "¡¿Qué?! ¿Esta ES la presentación?!"
- "¡Esto está increíble! ¿Cómo lo hizo?"

Ahí es cuando dices:
> "Exacto. Esta presentación es una web que creé usando tecnologías modernas. 
> Así como la IA está transformando nuestro trabajo, las herramientas modernas 
> nos permiten hacer cosas que antes eran impensables. Y eso es precisamente 
> de lo que vamos a hablar hoy..."

🎤 *Drop the mic* 🎤

## 🆘 Si Necesitas Ayuda

### Archivos de documentación:
- `INICIO-RAPIDO.md` - Comandos básicos
- `SLIDES.md` - Cómo crear diapositivas custom
- `DEPLOY.md` - Guía completa de deployment
- `RESUMEN.md` - Overview completo del proyecto

### Comandos importantes:

```bash
# Ver la presentación local
npm run dev

# Build para producción
npm run build

# Deploy a Vercel
vercel --prod
```

## ✅ Checklist Final

- [ ] Probé la presentación en mi laptop
- [ ] Personalicé todas las diapositivas
- [ ] Subí el proyecto a Vercel
- [ ] Tengo la URL lista
- [ ] Practiqué la presentación completa
- [ ] Tengo un PDF de backup
- [ ] Mi laptop está cargada
- [ ] Sé usar las flechas del teclado para navegar

---

## 🚀 ¡Estás listo!

Tienes todo lo necesario para dar una presentación memorable sobre IA.
La tecnología está de tu lado. Ahora solo falta que TÚ brilles.

**Mucha suerte el lunes. ¡Vas a romperla! 💪**

---

*P.D.: Cuando termines la presentación y todos te pregunten "¿Cómo hiciste eso?", 
solo sonríe y di: "Con las herramientas adecuadas, todo es posible. Ese es el 
poder de la tecnología moderna." 😎*
