# Portfolio Profesional - Ingeniería en Sistemas

Portfolio web minimalista y moderno diseñado para destacar tu perfil profesional como ingeniero en sistemas. Diseño limpio, responsive y fácil de personalizar.

---

## 📋 Características

✅ **Diseño minimalista y profesional** - Sin elementos innecesarios, enfocado en el contenido  
✅ **Totalmente responsive** - Se adapta perfectamente a desktop, tablet y móvil  
✅ **Componentes reutilizables** - Arquitectura React modular y escalable  
✅ **Paleta de colores profesional** - Azul corporativo con fondos neutros  
✅ **Animaciones sutiles** - Transiciones suaves que mejoran la experiencia  
✅ **Secciones completas** - Hero, Perfil, Habilidades, Proyectos, Formación, Contacto  
✅ **SEO friendly** - Estructura semántica y metadatos configurables  

---

## 🛠️ Stack Tecnológico

- **React 18** - Biblioteca de UI moderna y eficiente
- **Vite** - Build tool ultra rápido para desarrollo
- **CSS Moderno** - Variables CSS, Grid, Flexbox
- **React Icons** - Librería de iconos ligera y escalable

---

## 📁 Estructura del Proyecto

```
Portfolio-OB/
├── public/              # Archivos estáticos
├── src/
│   ├── components/      # Componentes React
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── styles/          # Estilos CSS modulares
│   │   ├── index.css    # Estilos globales y variables
│   │   ├── App.css
│   │   ├── Navbar.css
│   │   ├── Hero.css
│   │   ├── About.css
│   │   ├── Skills.css
│   │   ├── Projects.css
│   │   ├── Education.css
│   │   ├── Contact.css
│   │   └── Footer.css
│   ├── assets/          # Imágenes, iconos (vacío por ahora)
│   ├── App.jsx          # Componente principal
│   └── main.jsx         # Punto de entrada
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Instalación y Ejecución

### 1. Instalar dependencias

\`\`\`bash
npm install
\`\`\`

### 2. Ejecutar en modo desarrollo

\`\`\`bash
npm run dev
\`\`\`

El proyecto se abrirá automáticamente en `http://localhost:3000`

### 3. Construir para producción

\`\`\`bash
npm run build
\`\`\`

Los archivos optimizados se generarán en la carpeta `dist/`

### 4. Previsualizar build de producción

\`\`\`bash
npm run preview
\`\`\`

---

## 🎨 Personalización

### 1. Información Personal

#### **Hero Section** (`src/components/Hero.jsx`)
```jsx
// Líneas 9-16: Actualiza tu información
<span className="hero-name">[Tu Nombre]</span>
<h2 className="hero-role">Ingeniería en Sistemas</h2>
<p className="hero-tagline">Tu tagline profesional</p>

// Líneas 27-35: Actualiza tus enlaces de redes sociales
href="https://github.com/tu-usuario"
href="https://linkedin.com/in/tu-perfil"
href="mailto:tu@email.com"
\`\`\`

#### **About Section** (`src/components/About.jsx`)
```jsx
// Líneas 9-24: Personaliza tu descripción profesional
<p className="about-paragraph">Tu descripción aquí...</p>
\`\`\`

### 2. Proyectos

#### **Projects Section** (`src/components/Projects.jsx`)
```jsx
// Líneas 6-40: Reemplaza con tus proyectos reales
const projects = [
  {
    id: 1,
    title: 'Tu Proyecto',
    description: 'Descripción del proyecto',
    technologies: ['React', 'Node.js'],
    githubUrl: 'https://github.com/tu-usuario/proyecto',
    demoUrl: 'https://demo.com',
    featured: true
  },
  // Agrega más proyectos...
]
\`\`\`

### 3. Habilidades

#### **Skills Section** (`src/components/Skills.jsx`)
```jsx
// Líneas 5-17: Actualiza tus habilidades técnicas
const skillsData = {
  technical: [
    { category: 'Lenguajes', items: ['Java', 'Python', 'JavaScript'] },
    // Agrega más categorías...
  ],
  methodologies: [
    'UML', 'Scrum', 'Testing',
    // Agrega más metodologías...
  ]
}
\`\`\`

### 4. Formación Académica

#### **Education Section** (`src/components/Education.jsx`)
```jsx
// Líneas 6-32: Actualiza tu información académica
const education = {
  university: {
    degree: 'Tu Carrera',
    institution: 'Tu Universidad',
    period: '2020 - 2025',
    status: 'En curso',
    description: 'Descripción de tu carrera'
  },
  courses: [
    {
      name: 'Nombre del Curso',
      institution: 'Plataforma',
      year: '2024',
      topics: ['Tema 1', 'Tema 2']
    }
  ]
}
\`\`\`

### 5. Información de Contacto

#### **Contact Section** (`src/components/Contact.jsx`)
```jsx
// Línea 21: Actualiza el mailto del formulario
window.location.href = \`mailto:tu@email.com?subject=\${subject}&body=\${body}\`

// Líneas 24-28: Actualiza tus datos de contacto
const contactInfo = {
  email: 'tu@email.com',
  linkedin: 'https://linkedin.com/in/tu-perfil',
  github: 'https://github.com/tu-usuario'
}
\`\`\`

#### **Footer** (`src/components/Footer.jsx`)
```jsx
// Línea 12: Tu nombre en el footer
<strong>[Tu Nombre]</strong>

// Líneas 20-31: Enlaces de redes sociales
\`\`\`

---

## 🎨 Paleta de Colores

La paleta está definida en `src/styles/index.css` como variables CSS:

```css
:root {
  --color-primary: #2563eb;        /* Azul principal */
  --color-primary-dark: #1e40af;   /* Azul oscuro */
  --color-text: #1f2937;           /* Texto principal */
  --color-text-light: #6b7280;     /* Texto secundario */
  --color-background: #ffffff;     /* Fondo blanco */
  --color-background-alt: #f9fafb; /* Fondo alternativo */
  --color-border: #e5e7eb;         /* Bordes */
  --color-accent: #f3f4f6;         /* Acentos */
}
\`\`\`

### Cambiar el color principal

Para cambiar el azul por otro color, simplemente modifica las variables:

```css
--color-primary: #10b981;      /* Verde */
--color-primary-dark: #059669;
\`\`\`

---

## 📱 Responsive Design

El portfolio está optimizado para todos los dispositivos:

- **Desktop**: 1200px+ (diseño completo)
- **Tablet**: 768px - 1199px (grid adaptativo)
- **Mobile**: < 768px (layout vertical)

Los breakpoints están definidos en cada archivo CSS de componente.

---

## 🌟 Buenas Prácticas Implementadas

### Código
- ✅ Componentes funcionales con hooks
- ✅ Código limpio y comentado
- ✅ Estructura modular y escalable
- ✅ Nombres descriptivos de variables y funciones

### Diseño
- ✅ Espaciado consistente con variables CSS
- ✅ Tipografía jerárquica clara
- ✅ Transiciones suaves
- ✅ Foco en accesibilidad (aria-labels, semántica HTML)

### UX
- ✅ Navegación smooth scroll
- ✅ Feedback visual en interacciones
- ✅ Formulario de contacto funcional
- ✅ Carga rápida (Vite + React optimizado)

---

## 🔧 Próximas Mejoras Sugeridas

- [ ] Integrar servicio de email (EmailJS, Formspree)
- [ ] Agregar modo oscuro (dark mode)
- [ ] Implementar animaciones con Framer Motion
- [ ] Agregar blog/artículos técnicos
- [ ] Integrar Google Analytics
- [ ] Agregar sistema de internacionalización (i18n)
- [ ] Implementar PWA (Progressive Web App)
- [ ] Agregar galería de certificados

---

## 📝 Notas Importantes

### Para evitar que parezca una plantilla genérica:

1. **Personaliza todos los textos** - No dejes descripciones genéricas
2. **Agrega tus proyectos reales** - Con capturas de pantalla si es posible
3. **Sube tu foto profesional** - En el Hero o About
4. **Ajusta los colores** - Elige una paleta que te represente
5. **Completa el formulario de contacto** - Integra un servicio real de email
6. **Agrega tu CV descargable** - Link en el Hero o Contact
7. **Documenta tus logros** - Sé específico en resultados y métricas
8. **Mantén actualizado** - Revisa y actualiza regularmente

---

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

## 🤝 Contribuciones

Si encuentras algún bug o tienes sugerencias de mejora, no dudes en abrir un issue o pull request.

---

## 📧 Contacto del Template

Desarrollado con ❤️ para Ingeniería en Sistemas

**¿Preguntas o sugerencias?**  
Abre un issue en el repositorio o contacta directamente.

---

## 🚀 Deploy

### Opciones recomendadas (todas gratuitas):

#### **Vercel** (Recomendado)
\`\`\`bash
npm install -g vercel
vercel
\`\`\`

#### **Netlify**
\`\`\`bash
npm run build
# Arrastra la carpeta dist/ a netlify.com
\`\`\`

#### **GitHub Pages**
\`\`\`bash
# Instala gh-pages
npm install --save-dev gh-pages

# Agrega al package.json:
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}

# Despliega
npm run deploy
\`\`\`

---

¡Mucha suerte con tu portfolio profesional! 🎉