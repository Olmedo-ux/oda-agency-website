import React from "react";
import heroVid from "../assets/hero-video.mp4"; 
import heroPlaceholder from "../assets/hero-placeholder.jpg"; 

const Hero = () => {
  return (
    <section id="accueil" className="hero-section">
      {/* Vidéo de fond */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        poster={heroPlaceholder} 
        className="hero-video"
        preload="metadata" /* Charge juste les métadonnées au début */
      >
        <source src={heroVid} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Contenu Texte */}
      <div className="container hero-content">
        <h1 className="hero-title">
          L'architecture <span style={{ color: '#0056B3' }}>créative</span><br/>
          au service de vos idées.
        </h1>
        <p className="hero-subtitle">
          Agence ODA : Branding, Digital & Expériences immersives.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <a href="#portfolio" className="btn-primary">
            Nos Projets
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;