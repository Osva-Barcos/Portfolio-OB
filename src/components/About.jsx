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
            Soy estudiante avanzado de 5.º año de Ingeniería en Sistemas de Información de 21 años, con fuerte interés en el análisis funcional, la calidad de software y el desarrollo de soluciones orientadas a necesidades reales del usuario. A lo largo de mi formación académica y proyectos personales he participado en distintas etapas del ciclo de vida del software, desde el relevamiento y análisis de requerimientos hasta la validación y prueba de funcionalidades.
            </p>
            <p className="about-paragraph">
            Tengo experiencia en análisis funcional, realizando tareas de relevamiento, documentación y especificación de requerimientos, modelado UML, análisis de procesos y validación de funcionalidades junto a criterios de aceptación. Me enfoco en comprender el problema de negocio y traducirlo en soluciones claras, bien definidas y alineadas con los objetivos del proyecto.
            </p>
            <p className="about-paragraph">
            Complemento este perfil con una sólida base en QA (Quality Assurance), donde he trabajado en la elaboración de casos de prueba, ejecución de testing manual y automatizado, validación de APIs y documentación de resultados. He participado en procesos de aseguramiento de calidad, detección temprana de errores y verificación del correcto funcionamiento de sistemas, utilizando herramientas como Postman, Jest, Supertest y consultas SQL para validar datos.
            </p>
            <p className="about-paragraph">
            Además, cuento con conocimientos técnicos en desarrollo web, tanto en frontend como backend, utilizando tecnologías como React, Node.js, Express y bases de datos relacionales como MySQL y SQLite. Esto me permite tener una visión integral del sistema, facilitando la comunicación con equipos de desarrollo y mejorando la calidad del análisis y las pruebas realizadas.
            </p>
            <p className="about-paragraph">
            También he desarrollado proyectos vinculados a Inteligencia Artificial y visión por computadora, aplicando técnicas de Machine Learning y procesamiento de imágenes. Actualmente busco seguir creciendo profesionalmente en roles vinculados a Análisis Funcional, QA o posiciones híbridas, aportando una mirada integral, atención al detalle, pensamiento crítico y compromiso con la calidad del software.
            </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-item">
              <h3>Enfoque</h3>
              <p>Análisis funcional, aseguramiento de calidad y desarrollo de soluciones orientadas a negocio.</p>
            </div>
            <div className="highlight-item">
              <h3>Metodologías</h3>
              <p>Metodologías ágiles (Scrum y Kanban), planificación incremental y mejora continua.</p>
            </div>
            <div className="highlight-item">
              <h3>Valores</h3>
              <p>Aprendizaje constante, responsabilidad, trabajo en equipo y enfoque en la calidad del producto.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
