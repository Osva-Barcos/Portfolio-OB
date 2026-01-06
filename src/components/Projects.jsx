import React, { useState } from 'react'
import { FiGithub, FiExternalLink, FiChevronDown, FiChevronUp, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import '../styles/Projects.css'

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  const [currentProjectImages, setCurrentProjectImages] = useState([])

  const projects = [
    {
      id: 1,
      title: 'Sistema Inteligente de Reconocimiento de Productos',
      subtitle: 'Supermercados',
      role: 'Full Stack Developer & QA',
      description: 'Aplicación web full-stack orientada a optimizar ventas, control de stock y gestión de depósitos mediante visión artificial y buenas prácticas de ingeniería de software.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Django REST Framework', 'PostgreSQL', 'JWT', 'YOLOv5', 'PyTorch', 'ReportLab'],
      githubUrl: 'https://github.com/IgnacioMaidana7/IngSoft2025.git',
      demoUrl: null,
      featured: true,
      documentation: {
        technicalDoc: 'https://github.com/Osva-Barcos/Docs/blob/6c0cb7d64a9bfa04fd5a9f97e090bb6b8ecc6fe1/Informe%20Final%20-%20Ingenieria%20Y%20Calidad%202025.pdf',  // 👈 Reemplaza con tu URL
        apiDoc: 'https://github.com/Osva-Barcos/Reconocimiento-Productos.git'            // 👈 Reemplaza con tu URL
      },
      images: [
        {
          src: '/src/assets/images/proyecto1-dashboard.jpg',  // 👈 Reemplaza con tu ruta
          caption: 'Panel de control principal'
        },
        {
          src: '/src/assets/images/proyecto1-reconocimiento.jpg',  // 👈 Reemplaza con tu ruta
          caption: 'Reconocimiento de productos en tiempo real'
        },
        {
          src: '/src/assets/images/proyecto1-gestion.jpg',  // 👈 Reemplaza con tu ruta
          caption: 'Administración de inventario y transferencias'
        }
      ],
      details: {
        challenges: [
            'Integración de visión artificial en flujos reales de negocio',
            'Coordinación entre frontend, backend, IA y base de datos',
            'Diseño de roles y permisos sin complejidad innecesaria',
            'Mantenimiento de estándares de código en un proyecto grupal',
            'Estimación y planificación en un dominio técnico complejo',
            'Validación funcional sin entorno productivo real'
        ],
        solution: [
        'Integración de YOLOv5 con backend Django para inferencia de imágenes',
        'Endpoints REST para ventas, transferencias y actualización de stock',
        'Persistencia consistente de datos con PostgreSQL',
        'Manejo de autenticación y roles mediante JWT',
        'Validación de lógica de negocio mediante testing automatizado'
        ],

        impact:'El proyecto validó la integración de visión artificial en un sistema de gestión, automatizando procesos clave como ventas y control de stock. Se aplicaron prácticas de ingeniería y calidad de software para construir una solución estable, mantenible y alineada a un enfoque profesional, aun sin un entorno productivo real.',
        methodology: 'Scrum con sprints de 3 semanas. Code reviews, testing continuo y documentación técnica.'
      }
    },
    {
      id: 2,
      title: 'Título de tu segundo proyecto',
      subtitle: 'Categoría o contexto',
      role: 'Tu rol principal',
      description: 'Descripción breve y directa del proyecto. Qué problema resuelve y para quién. Máximo 2-3 líneas que capturen lo esencial.',
      technologies: ['Tech1', 'Tech2', 'Tech3', 'Tech4'],
      githubUrl: 'https://github.com/tu-usuario/proyecto',
      demoUrl: 'https://demo.com',
      featured: true,
      images: [
        { src: '/src/assets/images/proyecto2-screenshot1.jpg', caption: 'Pantalla principal de la aplicación' },
        { src: '/src/assets/images/proyecto2-screenshot2.jpg', caption: 'Funcionalidad clave del sistema' },
        { src: '/src/assets/images/proyecto2-screenshot3.jpg', caption: 'Panel de administración' }
      ],
      details: {
        context: 'Contexto del proyecto: para quién, por qué, cuál era la necesidad inicial.',
        challenges: [
          'Desafío técnico 1',
          'Desafío técnico 2',
          'Desafío de proceso o metodología'
        ],
        solution: [
          'Solución implementada 1',
          'Solución implementada 2',
          'Enfoque de testing/calidad aplicado'
        ],
        impact: 'Resultado medible o impacto concreto del proyecto.',
        methodology: 'Metodología de trabajo, herramientas de gestión, prácticas aplicadas.'
      }
    }
  ]

  const toggleExpand = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId)
  }

  const openLightbox = (images, index) => {
    setCurrentProjectImages(images)
    setCurrentImage(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden' // Prevenir scroll del body
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = 'auto'
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % currentProjectImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + currentProjectImages.length) % currentProjectImages.length)
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Proyectos</h2>
        <p className="section-subtitle">
          Experiencia en desarrollo full stack, testing y análisis funcional
        </p>

        <div className="projects-list">
          {projects.map(project => (
            <article 
              key={project.id} 
              className={`project-item ${project.featured ? 'featured' : ''}`}
            >
              {/* Header del proyecto */}
              <div className="project-header">
                <div className="project-title-group">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-subtitle">{project.subtitle}</span>
                </div>
                <div className="project-links">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <FiGithub size={20} />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Demo"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Vista resumida */}
              <div className="project-summary">
                <p className="project-role">{project.role}</p>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Vista expandida */}
              {expandedProject === project.id && project.details && (
                <div className="project-details">
                  {/* Galería de imágenes */}
                  {project.images && project.images.length > 0 && (
                    <div className="detail-section project-gallery">
                      <h4>Capturas del sistema</h4>
                      <p className="gallery-intro">Algunas vistas principales del sistema desarrollado</p>
                      <div className="gallery-grid">
                        {project.images.map((image, index) => (
                          <div 
                            key={index} 
                            className="gallery-thumbnail"
                            onClick={() => openLightbox(project.images, index)}
                          >
                            <img src={image.src} alt={image.caption} />
                            <p className="thumbnail-caption">{image.caption}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="detail-section">
                    <h4>Desafíos técnicos</h4>
                    <ul>
                      {project.details.challenges.map((challenge, index) => (
                        <li key={index}>{challenge}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="detail-section">
                    <h4>Solución implementada</h4>
                    <ul>
                      {project.details.solution.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="detail-section">
                    <h4>Impacto</h4>
                    <p>{project.details.impact}</p>
                  </div>

                  <div className="detail-section">
                    <h4>Metodología</h4>
                    <p>{project.details.methodology}</p>
                  </div>

                  {/* Botones de documentación (solo para proyecto 1) */}
                  {project.id === 1 && project.documentation && (
                    <div className="project-documentation">
                      <a 
                        href={project.documentation.technicalDoc}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-doc btn-doc-primary"
                      >
                        📄 Documentación Técnica
                      </a>
                      <a 
                        href={project.documentation.apiDoc}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-doc btn-doc-secondary"
                      >
                        🔌 API Reconocimiento de Imágenes
                      </a>
                    </div>
                  )}
                </div>
              )}

              {/* Botón expandir/contraer */}
              {project.details && (
                <button 
                  className="project-toggle"
                  onClick={() => toggleExpand(project.id)}
                  aria-label={expandedProject === project.id ? "Ver menos" : "Ver más"}
                >
                  {expandedProject === project.id ? (
                    <>
                      Ver menos <FiChevronUp size={18} />
                    </>
                  ) : (
                    <>
                      Ver detalles <FiChevronDown size={18} />
                    </>
                  )}
                </button>
              )}
            </article>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxOpen && (
          <div className="lightbox-overlay" onClick={closeLightbox}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Cerrar">
              <FiX size={32} />
            </button>
            
            <button 
              className="lightbox-nav lightbox-prev" 
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              aria-label="Anterior"
            >
              <FiChevronLeft size={40} />
            </button>
            
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <img 
                src={currentProjectImages[currentImage]?.src} 
                alt={currentProjectImages[currentImage]?.caption} 
              />
              <p className="lightbox-caption">{currentProjectImages[currentImage]?.caption}</p>
              <p className="lightbox-counter">
                {currentImage + 1} / {currentProjectImages.length}
              </p>
            </div>
            
            <button 
              className="lightbox-nav lightbox-next" 
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              aria-label="Siguiente"
            >
              <FiChevronRight size={40} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
