# 🚀 Guía de Deploy en Vercel

## Opción 1: Deploy desde GitHub (Recomendado)

### Paso 1: Crear repositorio en GitHub

1. Ve a https://github.com/new
2. Crea un nuevo repositorio (puede ser privado o público)
3. NO inicialices con README, .gitignore o licencia

### Paso 2: Subir el código

```bash
cd presentacion-ia
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git branch -M main
git commit -m "Initial commit: Presentación IA"
git push -u origin main
```

### Paso 3: Deploy en Vercel

1. Ve a https://vercel.com
2. Haz click en "New Project"
3. Importa tu repositorio de GitHub
4. Vercel detectará automáticamente que es un proyecto Vite
5. Haz click en "Deploy"

¡Listo! Tu presentación estará disponible en https://tu-proyecto.vercel.app

## Opción 2: Deploy directo con Vercel CLI

```bash
# Instalar Vercel CLI globalmente
npm i -g vercel

# Deploy
cd presentacion-ia
vercel

# Seguir las instrucciones en pantalla
# Presiona Enter para aceptar los valores por defecto
```

Para deploy a producción:
```bash
vercel --prod
```

## 🎯 URLs de ejemplo

- Preview: https://presentacion-ia-preview.vercel.app
- Production: https://presentacion-ia.vercel.app

## 🔧 Configuración personalizada

Si quieres usar un dominio personalizado:

1. Ve a tu proyecto en Vercel
2. Settings → Domains
3. Agrega tu dominio personalizado

## 📝 Notas importantes

- Cada push a `main` generará un deploy automático (si usaste GitHub)
- Los deploys de preview se generan automáticamente para cada Pull Request
- Vercel es gratis para proyectos personales

---

¡Tu presentación estará lista para sorprender a tu audiencia! 🎉
