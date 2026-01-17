# 📊 Cómo crear tus diapositivas

## Estructura básica de una diapositiva

Edita el archivo `index.html` y busca la sección `<div class="presentation-slides">`.

### Diapositiva simple

```html
<div class="slide">
  <h2>Título de la Diapositiva</h2>
  <p>Contenido principal aquí</p>
</div>
```

### Diapositiva con múltiples párrafos

```html
<div class="slide">
  <h2>¿Qué es la Inteligencia Artificial?</h2>
  <p>La IA es la simulación de procesos de inteligencia humana por parte de máquinas.</p>
  <p>Incluye aprendizaje, razonamiento y autocorrección.</p>
</div>
```

### Diapositiva con lista

```html
<div class="slide">
  <h2>Beneficios de la IA</h2>
  <ul style="text-align: left; max-width: 800px; font-size: 1.5rem; line-height: 2;">
    <li>Automatización de tareas repetitivas</li>
    <li>Análisis de grandes volúmenes de datos</li>
    <li>Mejora en la toma de decisiones</li>
    <li>Personalización de experiencias</li>
  </ul>
</div>
```

### Diapositiva con imagen

```html
<div class="slide">
  <h2>Ejemplo Visual</h2>
  <img src="/mi-imagen.jpg" alt="Descripción" style="max-width: 60%; border-radius: 20px; margin-top: 2rem;">
  <p>Descripción de la imagen</p>
</div>
```

### Diapositiva con código

```html
<div class="slide">
  <h2>Ejemplo de Código</h2>
  <pre style="background: rgba(255,255,255,0.1); padding: 2rem; border-radius: 15px; text-align: left;">
<code>
const ia = {
  aprendizaje: 'machine learning',
  vision: 'computer vision',
  lenguaje: 'NLP'
}
</code>
  </pre>
</div>
```

### Diapositiva con destacados

```html
<div class="slide">
  <h2>Dato Importante</h2>
  <p style="font-size: 3rem; font-weight: 700; margin: 2rem 0;">
    85%
  </p>
  <p>de las empresas planean adoptar IA en 2025</p>
</div>
```

### Diapositiva de dos columnas

```html
<div class="slide">
  <h2>Pros y Contras</h2>
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; max-width: 1200px; margin-top: 3rem;">
    <div>
      <h3 style="color: #00d9ff;">✅ Ventajas</h3>
      <ul style="text-align: left; font-size: 1.2rem;">
        <li>Eficiencia</li>
        <li>Precisión</li>
        <li>Disponibilidad 24/7</li>
      </ul>
    </div>
    <div>
      <h3 style="color: #ff006e;">⚠️ Desafíos</h3>
      <ul style="text-align: left; font-size: 1.2rem;">
        <li>Costo inicial</li>
        <li>Curva de aprendizaje</li>
        <li>Privacidad de datos</li>
      </ul>
    </div>
  </div>
</div>
```

## 🎨 Personalización avanzada

### Cambiar el color del título

```html
<h2 style="color: #00d9ff;">Título en Azul</h2>
```

### Agregar espaciado

```html
<p style="margin-top: 3rem;">Texto con espacio arriba</p>
```

### Texto más pequeño

```html
<p style="font-size: 1rem; opacity: 0.7;">Nota al pie</p>
```

### Centrar contenido

```html
<div style="text-align: center;">
  <!-- Contenido centrado -->
</div>
```

## 📋 Ejemplo completo para presentación de IA

```html
<!-- Diapositiva 1: Portada -->
<div class="slide">
  <h2>Inteligencia Artificial</h2>
  <p>Transformando el Futuro del Trabajo</p>
  <p class="slide-hint">Usa las flechas ← → para navegar</p>
</div>

<!-- Diapositiva 2: Introducción -->
<div class="slide">
  <h2>¿Qué es la IA?</h2>
  <p>La Inteligencia Artificial permite a las máquinas aprender y tomar decisiones</p>
  <p>similares a como lo haría un ser humano.</p>
</div>

<!-- Diapositiva 3: Aplicaciones -->
<div class="slide">
  <h2>Aplicaciones en mi Trabajo</h2>
  <ul style="text-align: left; max-width: 800px; font-size: 1.5rem; line-height: 2;">
    <li>Automatización de procesos</li>
    <li>Análisis predictivo</li>
    <li>Asistentes virtuales</li>
    <li>Generación de contenido</li>
  </ul>
</div>

<!-- Diapositiva 4: Miedos comunes -->
<div class="slide">
  <h2>Miedos y Realidades</h2>
  <p style="font-size: 1.3rem; opacity: 0.8;">
    "La IA no viene a reemplazarnos, viene a potenciarnos"
  </p>
</div>

<!-- Diapositiva 5: Conclusión -->
<div class="slide">
  <h2>El Futuro es Ahora</h2>
  <p>Es momento de adaptarnos y aprovechar estas herramientas</p>
  <p style="margin-top: 3rem; font-size: 2rem;">¡Gracias!</p>
</div>
```

## 💡 Consejos

1. **Mantén las diapositivas simples** - No sobrecargues de información
2. **Una idea por diapositiva** - Facilita la comprensión
3. **Usa imágenes relevantes** - Una imagen vale más que mil palabras
4. **Contraste de colores** - Asegúrate que el texto sea legible
5. **Practica la presentación** - Familiarízate con la navegación

## 🎯 Navegación

- **Flecha derecha (→)** o **Flecha abajo (↓)**: Siguiente diapositiva
- **Flecha izquierda (←)** o **Flecha arriba (↑)**: Diapositiva anterior
- **ESC**: Cerrar presentación y volver al inicio

---

¡Crea una presentación memorable! 🚀
