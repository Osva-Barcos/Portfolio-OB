import React from 'react'
import { FiBook, FiAward } from 'react-icons/fi'
import '../styles/Education.css'

const Education = () => {
  const education = {
    university: {
      degree: 'Ingeniería en Sistemas',
      institution: '[Nombre de la Universidad]',
      period: '[Año inicio] - [Año fin / Actualidad]',
      status: 'En curso / Completado',
      description: 'Formación en análisis, diseño y desarrollo de sistemas de información, con énfasis en metodologías de desarrollo de software y aseguramiento de calidad.'
    },
    courses: [
      {
        name: 'Curso de Testing de Software',
        institution: '[Plataforma/Institución]',
        year: '2024',
        topics: ['Testing Manual', 'Testing Automatizado', 'Selenium']
      },
      {
        name: 'Desarrollo Full Stack',
        institution: '[Plataforma/Institución]',
        year: '2024',
        topics: ['React', 'Node.js', 'APIs RESTful']
      },
      {
        name: 'Metodologías Ágiles',
        institution: '[Plataforma/Institución]',
        year: '2023',
        topics: ['Scrum', 'Kanban', 'Jira']
      }
    ]
  }

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Formación Académica</h2>

        <div className="education-content">
          {/* Carrera Universitaria */}
          <div className="university-card">
            <div className="card-icon">
              <FiBook size={32} />
            </div>
            <div className="card-content">
              <h3 className="degree-title">{education.university.degree}</h3>
              <p className="institution">{education.university.institution}</p>
              <p className="period">
                {education.university.period} • {education.university.status}
              </p>
              <p className="description">{education.university.description}</p>
            </div>
          </div>

          {/* Cursos y Certificaciones */}
          <div className="courses-section">
            <h3 className="subsection-title">
              <FiAward size={24} />
              Cursos Complementarios
            </h3>
            
            <div className="courses-grid">
              {education.courses.map((course, index) => (
                <div key={index} className="course-card">
                  <h4 className="course-name">{course.name}</h4>
                  <p className="course-institution">{course.institution}</p>
                  <p className="course-year">{course.year}</p>
                  <div className="course-topics">
                    {course.topics.map((topic, idx) => (
                      <span key={idx} className="topic-tag">{topic}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="education-note">
            <p>💡 <strong>Nota:</strong> Reemplaza esta información con tus datos académicos reales.</p>
            <p>Edita el archivo <code>Education.jsx</code> y actualiza el objeto <code>education</code>.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
