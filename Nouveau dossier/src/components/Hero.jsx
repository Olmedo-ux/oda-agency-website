import React from "react";
import { ArrowRight, ArrowDown } from "phosphor-react";
// Assurez-vous que l'image est bien dans src/assets/
import heroBg from "../assets/hero-bg.jpg"; 

const Hero = () => {
  return (
    <section id="accueil" className="hero-section">
      {/* IMAGE DE FOND */}
      <img
        src={heroBg}
        alt="Agence ODA Fond"
        className="hero-video"
      />

      {/* RIDEAU SOMBRE */}
      <div className="hero-overlay"></div>

      {/* CONTENU */}
      <div className="container hero-content">
        
        {/* Texte et Bouton Centré */}
        <div className="hero-text-block">
          <h1 className="hero-title">
            Transformons vos idées en <br />
            <span style={{ color: '#0056B3' }}>réalité numérique</span>
          </h1>

          <p className="hero-subtitle" style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 40px', opacity: 0.9, lineHeight: '1.6' }}>
            Agence créative basée au cœur de Lomé. Nous concevons des expériences digitales uniques qui marquent les esprits et propulsent votre marque.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a href="#portfolio" className="btn-primary">
              <span>Nos Projets</span>
              <ArrowRight size={20} weight="bold" className="btn-icon" />
            </a>
          </div>
        </div>

        {/* FLÈCHE FLOTTANTE (SEULE) */}
        <a href="#services" className="scroll-down-indicator">
            {/* Texte supprimé ici */}
            <ArrowDown size={40} weight="light" className="scroll-icon-anim" />
        </a>

      </div>
    </section>
  );
};

export default Hero;