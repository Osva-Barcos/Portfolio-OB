import React from 'react'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import '../styles/Hero.css'
import profilePhoto from '../assets/profile.jpg'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          {/* Foto de perfil circular */}
          <div className="hero-image-container">
            <img 
              src={profilePhoto} 
              alt="Osvaldo Exequiel Barcos" 
              className="hero-image"
            />
          </div>
          <h1 className="hero-title">
            <span className="hero-greeting">Hola, soy</span>
            <span className="hero-name">Osvaldo Exequiel Barcos</span>
          </h1>
          <h2 className="hero-role">Ingeniería en Sistemas de Información</h2>
          <p className="hero-tagline">
            Especializado en análisis, desarrollo y aseguramiento de calidad de software
          </p>
          
          <div className="hero-cta">
            <button 
              className="btn btn-primary"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Proyectos
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Contactar
            </button>
          </div>

          <div className="hero-social">
            <a href="https://github.com/Osva-Barcos" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/osvaldo-barcos-748239270/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin size={24} />
            </a>
            <a href="osvaldobarcos179@gmail.com" aria-label="Email">
              <FiMail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
