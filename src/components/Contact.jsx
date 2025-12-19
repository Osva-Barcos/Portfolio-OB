import React, { useState } from 'react'
import { FiMail, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi'
import '../styles/Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí puedes integrar un servicio de email como EmailJS, Formspree, etc.
    // Por ahora, redirige al correo con mailto
    const subject = `Contacto desde Portfolio - ${formData.name}`
    const body = `Nombre: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMensaje:%0D%0A${formData.message}`
    window.location.href = `mailto:tu@email.com?subject=${subject}&body=${body}`
  }

  const contactInfo = {
    email: 'tu@email.com',
    linkedin: 'https://linkedin.com/in/tu-perfil',
    github: 'https://github.com/tu-usuario'
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        <p className="section-subtitle">
          ¿Interesado en colaborar? No dudes en contactarme
        </p>

        <div className="contact-content">
          {/* Información de contacto */}
          <div className="contact-info">
            <h3>Conectemos</h3>
            <p className="contact-intro">
              Estoy abierto a oportunidades de desarrollo profesional, 
              colaboraciones en proyectos y networking en la industria del software.
            </p>

            <div className="contact-methods">
              <a href={`mailto:${contactInfo.email}`} className="contact-method">
                <FiMail size={24} />
                <div>
                  <h4>Email</h4>
                  <p>{contactInfo.email}</p>
                </div>
              </a>

              <a 
                href={contactInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-method"
              >
                <FiLinkedin size={24} />
                <div>
                  <h4>LinkedIn</h4>
                  <p>Ver perfil profesional</p>
                </div>
              </a>

              <a 
                href={contactInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-method"
              >
                <FiGithub size={24} />
                <div>
                  <h4>GitHub</h4>
                  <p>Ver repositorios</p>
                </div>
              </a>
            </div>
          </div>

          {/* Formulario de contacto */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tu mensaje..."
              />
            </div>

            <button type="submit" className="btn btn-primary">
              <FiSend size={18} />
              Enviar Mensaje
            </button>
          </form>
        </div>

        <div className="contact-note">
          <p>💡 <strong>Nota:</strong> Actualiza tu email y enlaces de redes sociales en <code>Contact.jsx</code></p>
        </div>
      </div>
    </section>
  )
}

export default Contact
