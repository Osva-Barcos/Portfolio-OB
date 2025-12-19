import React from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import '../styles/Projects.css'

const Projects = () => {
  // Datos de ejemplo - Reemplazar con tus proyectos reales
  const projects = [
    {
      id: 1,
      title: 'Sistema de Gestión [Nombre del Sistema]',
      description: 'Breve descripción del proyecto, problema que resuelve y tu rol en el desarrollo. Máximo 2-3 líneas.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Express'],
      githubUrl: 'https://github.com/tu-usuario/proyecto',
      demoUrl: 'https://demo-proyecto.com',
      featured: true
    },
    {
      id: 2,
      title: 'API RESTful [Nombre de la API]',
      description: 'Descripción del proyecto backend, endpoints principales, funcionalidades implementadas.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'JUnit'],
      githubUrl: 'https://github.com/tu-usuario/proyecto',
      demoUrl: null,
      featured: true
    },
    {
      id: 3,
      title: 'Proyecto de Testing Automatizado',
      description: 'Suite de pruebas automatizadas para [aplicación/sistema]. Cobertura de casos de prueba.',
      technologies: ['Selenium', 'Python', 'pytest'],
      githubUrl: 'https://github.com/tu-usuario/proyecto',
      demoUrl: null,
      featured: false
    },
    {
      id: 4,
      title: 'Análisis y Documentación [Nombre]',
      description: 'Análisis funcional completo, casos de uso, diagramas UML y documentación técnica.',
      technologies: ['UML', 'Casos de Uso', 'Especificaciones'],
      githubUrl: 'https://github.com/tu-usuario/proyecto',
      demoUrl: null,
      featured: false
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Proyectos</h2>
        <p className="section-subtitle">
          Algunos de los proyectos en los que he trabajado
        </p>

        <div className="projects-grid">
          {projects.map(project => (
            <div 
              key={project.id} 
              className={`project-card ${project.featured ? 'featured' : ''}`}
            >
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
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

              <p className="project-description">{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="projects-note">
          <p>💡 <strong>Nota:</strong> Esta sección está preparada para que agregues tus proyectos reales.</p>
          <p>Edita el archivo <code>Projects.jsx</code> y actualiza el array <code>projects</code> con tu información.</p>
        </div>
      </div>
    </section>
  )
}

export default Projects
