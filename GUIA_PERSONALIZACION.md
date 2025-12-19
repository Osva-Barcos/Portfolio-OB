# Guía de Personalización Rápida

## 🚀 Start Here - Pasos Esenciales

### 1. Instalación
\`\`\`bash
npm install
npm run dev
\`\`\`

### 2. Checklist de Personalización

#### ✅ Información Personal (Prioridad Alta)

- [ ] **Hero.jsx** - Línea 14: Tu nombre
- [ ] **Hero.jsx** - Línea 16: Tu rol/carrera
- [ ] **Hero.jsx** - Línea 18: Tu tagline
- [ ] **Hero.jsx** - Líneas 29-37: Links de GitHub, LinkedIn, Email

#### ✅ Perfil Profesional

- [ ] **About.jsx** - Líneas 11-23: Tu descripción profesional
- [ ] **About.jsx** - Líneas 27-39: Tus highlights (Enfoque, Metodologías, Valores)

#### ✅ Habilidades

- [ ] **Skills.jsx** - Líneas 5-15: Tus habilidades técnicas (lenguajes, frameworks, etc.)
- [ ] **Skills.jsx** - Líneas 16-23: Tus metodologías y conceptos

#### ✅ Proyectos

- [ ] **Projects.jsx** - Líneas 7-40: Reemplaza con TUS proyectos reales
  - Título del proyecto
  - Descripción clara
  - Tecnologías usadas
  - Links a GitHub/Demo
  - Marca featured: true para destacar

#### ✅ Formación Académica

- [ ] **Education.jsx** - Líneas 7-13: Tu carrera universitaria
- [ ] **Education.jsx** - Líneas 14-34: Tus cursos y certificaciones

#### ✅ Contacto

- [ ] **Contact.jsx** - Línea 21: Tu email (formulario)
- [ ] **Contact.jsx** - Líneas 25-29: Tus datos de contacto
- [ ] **Footer.jsx** - Línea 12: Tu nombre en el footer
- [ ] **Footer.jsx** - Líneas 20-31: Links de redes sociales

---

## 🎨 Personalización Avanzada

### Cambiar Colores

Edita `src/styles/index.css` líneas 6-14:

\`\`\`css
--color-primary: #2563eb;        /* Tu color principal */
--color-primary-dark: #1e40af;   /* Versión más oscura */
\`\`\`

**Sugerencias de paletas:**
- Azul (actual): `#2563eb`
- Verde: `#10b981`
- Violeta: `#7c3aed`
- Naranja: `#f59e0b`

### Cambiar Tipografía

Edita `src/styles/index.css` líneas 16-18:

\`\`\`css
--font-primary: 'Tu Fuente', sans-serif;
\`\`\`

**Fuentes recomendadas (Google Fonts):**
- Inter
- Poppins
- Roboto
- Montserrat

---

## 📸 Agregar Tu Foto

### Opción 1: En el Hero

1. Coloca tu foto en `src/assets/profile.jpg`
2. Edita `Hero.jsx`:

\`\`\`jsx
import profileImg from '../assets/profile.jpg'

// Dentro del return, agrega:
<div className="hero-image">
  <img src={profileImg} alt="Tu Nombre" />
</div>
\`\`\`

3. Agrega estilos en `Hero.css`:

\`\`\`css
.hero-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto var(--spacing-xl);
  border: 4px solid var(--color-primary);
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
\`\`\`

---

## 📧 Configurar Formulario de Contacto

### Opción 1: EmailJS (Gratis, fácil)

1. Regístrate en [emailjs.com](https://www.emailjs.com/)
2. Instala EmailJS:
\`\`\`bash
npm install @emailjs/browser
\`\`\`
3. Edita `Contact.jsx`:

\`\`\`jsx
import emailjs from '@emailjs/browser'

const handleSubmit = (e) => {
  e.preventDefault()
  
  emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    formData,
    'YOUR_PUBLIC_KEY'
  )
  .then(() => {
    alert('Mensaje enviado con éxito!')
    setFormData({ name: '', email: '', message: '' })
  })
  .catch(() => alert('Error al enviar'))
}
\`\`\`

### Opción 2: Formspree (Más simple)

1. Regístrate en [formspree.io](https://formspree.io/)
2. Edita el `<form>` en `Contact.jsx`:

\`\`\`jsx
<form 
  action="https://formspree.io/f/YOUR_FORM_ID" 
  method="POST"
>
\`\`\`

---

## 🚀 Deploy Rápido

### Vercel (Más fácil)

\`\`\`bash
npm install -g vercel
vercel
\`\`\`

### Netlify

1. Construye el proyecto: `npm run build`
2. Arrastra la carpeta `dist/` a [netlify.com](https://app.netlify.com/)

---

## 🔥 Tips Para Destacar

1. **Proyectos con impacto**: No pongas "Lista de tareas", describe el problema que resolviste
2. **Métricas reales**: "Reducción del 30% en tiempo de respuesta" suena mejor que "API rápida"
3. **Links funcionales**: Asegúrate que todos tus links funcionen
4. **Testimonios**: Si tienes, agrégalos en About
5. **CV descargable**: Agrega un botón para descargar tu CV en PDF
6. **Consistencia**: Usa el mismo estilo de escritura en todo el portfolio

---

## 🐛 Problemas Comunes

### El proyecto no inicia
\`\`\`bash
rm -rf node_modules package-lock.json
npm install
npm run dev
\`\`\`

### Los estilos no se aplican
- Verifica que los archivos CSS estén importados en cada componente
- Revisa la consola del navegador por errores

### Los iconos no aparecen
\`\`\`bash
npm install react-icons
\`\`\`

---

¿Necesitas más ayuda? Revisa el README.md principal.
