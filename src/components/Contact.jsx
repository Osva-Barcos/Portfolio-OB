import React, { useState } from 'react'
import { FiMail, FiLinkedin, FiGithub, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi'
import emailjs from '@emailjs/browser'
import '../styles/Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault() // Previene el submit por defecto
    setIsLoading(true)
    setStatus({ type: '', message: '' })

    // ========================================
    // 🔧 CONFIGURACIÓN DE EMAILJS
    // ========================================
    const serviceID = 'service_gd07ows'        // ✅ Service ID configurado
    const templateID = 'template_3sdhpb4'      // ✅ Template ID configurado
    
    // Public Key: Obtén este valor desde EmailJS Dashboard → Account → General
    const publicKey = 'nxVM9epEaXSln63ID'    // 👈 REEMPLAZA CON TU PUBLIC KEY
    
    // ========================================
    // ENVÍO DE EMAIL
    // ========================================
    // IMPORTANTE: Los nombres de las variables deben coincidir EXACTAMENTE
    // con los nombres en el template de EmailJS: {{name}}, {{email}}, {{message}}
    emailjs.send(
      serviceID,
      templateID,
      {
        name: formData.name,       // Variable {{name}} en el template
        email: formData.email,     // Variable {{email}} en el template
        message: formData.message  // Variable {{message}} en el template
      },
      publicKey
    )
    .then((response) => {
      console.log('✅ Email enviado exitosamente:', response)
      
      // Mostrar mensaje de éxito
      setStatus({ 
        type: 'success', 
        message: '¡Mensaje enviado con éxito! Te responderé pronto.' 
      })
      
      // Resetear formulario
      setFormData({ name: '', email: '', message: '' })
    })
    .catch((error) => {
      console.error('❌ Error al enviar email:', error)
      
      // Mostrar mensaje de error
      setStatus({ 
        type: 'error', 
        message: 'Error al enviar el mensaje. Por favor intenta nuevamente.' 
      })
    })
    .finally(() => {
      // Desactivar estado de carga
      setIsLoading(false)
    })
  }

  const contactInfo = {
    email: 'osvaldobarcos179@gmail.com',
    linkedin: 'https://www.linkedin.com/in/osvaldo-barcos-748239270',
    github: 'https://github.com/Osva-Barcos'
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
              <div className="contact-method contact-method-static">
                <FiMail size={24} />
                <div>
                  <h4>Email</h4>
                  <p>{contactInfo.email}</p>
                </div>
              </div>

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

            {/* Mensajes de estado */}
            {status.message && (
              <div className={`form-status ${status.type}`}>
                {status.type === 'success' ? <FiCheck size={18} /> : <FiAlertCircle size={18} />}
                <span>{status.message}</span>
              </div>
            )}

            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isLoading}
            >
              {isLoading ? (
                <>Enviando...</>
              ) : (
                <>
                  <FiSend size={18} />
                  Enviar Mensaje
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
