import React from 'react'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import '../styles/Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p className="footer-text">
            Diseñado y desarrollado por <strong>[Tu Nombre]</strong>
          </p>
          <p className="footer-copyright">
            © {currentYear} Todos los derechos reservados
          </p>
        </div>

        <div className="footer-social">
          <a 
            href="https://github.com/tu-usuario" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FiGithub size={20} />
          </a>
          <a 
            href="https://linkedin.com/in/tu-perfil" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={20} />
          </a>
          <a 
            href="mailto:tu@email.com"
            aria-label="Email"
          >
            <FiMail size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
