import React from 'react'
import '../styles/Skills.css'

const Skills = () => {
  const skillsData = {
    technical: [
      { category: 'Lenguajes', items: ['Java', 'Python', 'JavaScript', 'SQL', 'TypeScript', 'HTML', 'CSS'] },
      { category: 'Frameworks', items: ['React', 'Spring Boot', 'Node.js', 'Express'] },
      { category: 'Bases de Datos', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'] },
      { category: 'Testing & QA', items: ['JUnit', 'Selenium', 'Jest', 'Supertest', 'Testing manual', 'Diseño de casos de prueba', 'Documentación de pruebas'] },
      { category: 'Control de Versiones', items: ['Git', 'GitHub', 'GitLab'] },
      { category: 'Herramientas', items: ['VS Code', 'IntelliJ IDEA', 'Docker', 'Jira', 'Postman', 'pgAdmin'] },
      { category: 'IA & Visión por Computadora', items: ['Machine Learning', 'Visión por Computadora', 'YOLO / DeepSort', 'OpenCV'] }
    ],
    methodologies: [
      'UML (Casos de Uso, Diagramas de Clases, Secuencia)',
      'Análisis de Requisitos Funcionales y No Funcionales',
      'Diseño de APIs RESTful',
      'Metodologías Ágiles (Scrum, Kanban)',
      'Testing Manual y Automatizado',
      'Diseño y Ejecución de Casos de Prueba',
      'Trazabilidad de Requerimientos y Casos de Prueba',
      'Documentación Funcional y Técnica',
      'Análisis de Procesos de Negocio'
    ]
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Habilidades</h2>

        <div className="skills-grid">
          <div className="skills-category">
            <h3 className="category-title">Habilidades Técnicas</h3>
            <div className="tech-skills">
              {skillsData.technical.map((skill, index) => (
                <div key={index} className="skill-group">
                  <h4 className="skill-group-title">{skill.category}</h4>
                  <div className="skill-tags">
                    {skill.items.map((item, idx) => (
                      <span key={idx} className="skill-tag">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3 className="category-title">Metodologías & Conceptos</h3>
            <ul className="methodology-list">
              {skillsData.methodologies.map((method, index) => (
                <li key={index} className="methodology-item">{method}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
