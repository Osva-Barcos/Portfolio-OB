import React, { useState, useEffect } from 'react'
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi'
import '../styles/Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Cargar preferencia guardada
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setIsDarkMode(true)
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }, [])

  const toggleDarkMode = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)
    if (newMode) {
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
      localStorage.setItem('theme', 'light')
    }
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <span className="brand-text">Portfolio</span>
        </div>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Botón de modo oscuro flotante */}
        <button 
          className="theme-toggle-float"
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>

        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><button onClick={() => scrollToSection('hero')}>Inicio</button></li>
          <li><button onClick={() => scrollToSection('about')}>Perfil</button></li>
          <li><button onClick={() => scrollToSection('skills')}>Habilidades</button></li>
          <li><button onClick={() => scrollToSection('projects')}>Proyectos</button></li>
          <li><button onClick={() => scrollToSection('education')}>Formación</button></li>
          <li><button onClick={() => scrollToSection('contact')}>Contacto</button></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
