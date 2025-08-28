import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";
import logoEmpresa from "/assets/logo-copia.png";

export default function CustomNavigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Adiciona um highlight visual temporário
      element.style.border = '3px solid red';
      element.style.transition = 'border 0.3s ease';
      
      // Remove o highlight após 2 segundos
      setTimeout(() => {
        element.style.border = '';
      }, 2000);
      
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    } else {
      console.error('Elemento não encontrado com ID:', sectionId);
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = '5511999999999'; // Replace with your actual WhatsApp number
    const message = 'Olá, gostaria de saber mais sobre seus serviços!';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setMobileOpen(false);
  };

  return (
    <header className={`custom-navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="control-space-navigation">
        <div className="nav-container">
          {/* Logo */}
          <NavLink to="/" className="logo">
            <img src={logoEmpresa} alt="Logo da Empresa" className="logo-image" />
          </NavLink>

          {/* Botão mobile */}
          <button
            className={`mobile-toggle ${mobileOpen ? "open" : ""}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          {/* Menu */}
          <nav className={`nav-links ${mobileOpen ? "show" : ""}`}>
            <button 
              className="nav-link-btn"
              onClick={scrollToTop}
            >
              Início
            </button>
            <button 
              className="nav-link-btn"
              onClick={() => scrollToSection('sobre-nos')}
            >
              Sobre Nós
            </button>
            <button 
              className="nav-link-btn"
              onClick={() => scrollToSection('areas-atuacao')}
            >
              Áreas de Atuação
            </button>
            <button 
              className="nav-link-btn"
              onClick={() => scrollToSection('blog')}
            >
              Blog
            </button>
            <button 
              className="nav-link-btn"
              onClick={() => scrollToSection('contato')}
            >
              Contato
            </button>
            <button
              className="contact-btn"
              onClick={openWhatsApp}
            >
              Fale Conosco
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
