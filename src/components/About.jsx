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
              Estudiante avanzado de 5.º año de Ingeniería en Sistemas de Información (21 años), con foco en 
              <strong> Análisis Funcional y Quality Assurance</strong>. Tengo experiencia participando en distintas 
              etapas del ciclo de vida del software, desde el relevamiento de requerimientos hasta la validación 
              de funcionalidades.
            </p>

            <p className="about-paragraph">
              He trabajado en análisis funcional realizando relevamiento y documentación de requerimientos, 
              modelado UML, análisis de procesos y definición de criterios de aceptación, siempre orientado a 
              comprender el negocio y transformar necesidades en soluciones claras y alineadas a los objetivos del proyecto.
            </p>

            <p className="about-paragraph">
              Complemento este perfil con experiencia en QA, elaborando y ejecutando casos de prueba manuales y 
              automatizados, validación de APIs y control de datos, utilizando herramientas como 
              <strong> Postman, Jest, Supertest y SQL</strong>.
            </p>

            <p className="about-paragraph">
              Cuento además con conocimientos en desarrollo web frontend y backend 
              (<strong>React, Node.js, Express, MySQL y SQLite</strong>), lo que me permite una visión integral del sistema 
              y una mejor comunicación con equipos de desarrollo. También he participado en proyectos de 
              Inteligencia Artificial y visión por computadora.
            </p>

            <p className="about-paragraph">
              Actualmente busco oportunidades en roles de <strong>Análisis Funcional, QA o posiciones híbridas</strong>, 
              aportando pensamiento analítico, atención al detalle y compromiso con la calidad del software.
            </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-item">
              <h3>Enfoque</h3>
              <p>Análisis funcional, aseguramiento de calidad y soluciones orientadas al negocio.</p>
            </div>
            <div className="highlight-item">
              <h3>Metodologías</h3>
              <p>Metodologías ágiles (Scrum y Kanban), trabajo incremental y mejora continua.</p>
            </div>
            <div className="highlight-item">
              <h3>Valores</h3>
              <p>Responsabilidad, pensamiento crítico, aprendizaje constante y foco en la calidad.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
