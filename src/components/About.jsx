import React from 'react'
import '../styles/About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">Perfil Profesional</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-paragraph">
              Profesional en formación en Ingeniería en Sistemas, enfocado en el desarrollo de 
              soluciones tecnológicas de calidad mediante la aplicación de metodologías ágiles 
              y mejores prácticas de la industria.
            </p>
            <p className="about-paragraph">
              Mi experiencia abarca el análisis funcional de requisitos, diseño e implementación 
              de software, así como el aseguramiento de calidad a través de pruebas automatizadas 
              y manuales. Valoro la comunicación efectiva, el trabajo en equipo y el aprendizaje continuo.
            </p>
            <p className="about-paragraph">
              Busco oportunidades para aplicar y expandir mis conocimientos en entornos 
              colaborativos que promuevan la innovación y excelencia técnica.
            </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-item">
              <h3>Enfoque</h3>
              <p>Análisis funcional y desarrollo de software de calidad</p>
            </div>
            <div className="highlight-item">
              <h3>Metodologías</h3>
              <p>Scrum, Kanban, desarrollo ágil</p>
            </div>
            <div className="highlight-item">
              <h3>Valores</h3>
              <p>Aprendizaje continuo, colaboración, atención al detalle</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
