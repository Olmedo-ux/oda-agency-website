import React from "react";
import heroVid from "../assets/hero-video.mp4"; 
import heroPlaceholder from "../assets/hero-placeholder.jpg"; 

const Hero = () => {
  return (
    <section id="accueil" style={heroSectionStyle}>
      {/* Vidéo de fond */}
      <video autoPlay loop muted playsInline poster={heroPlaceholder} style={videoStyle}>
        <source src={heroVid} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div style={overlayStyle}></div>

      {/* Contenu Texte */}
      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <h1 style={titleStyle}>
          L'architecture <span style={{ color: '#0056B3' }}>créative</span> <br/>
          au service de vos idées.
        </h1>
        <p style={subtitleStyle}>
          Agence ODA : Branding, Digital & Expériences immersives .
        </p>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <a href="#portfolio" className="btn btn-primary" style={mainBtnStyle}>
            Nos Projets
          </a>
        </div>
      </div>
    </section>
  );
};

const heroSectionStyle = {
  height: '100vh',
  width: '100%',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#FFF',
  overflow: 'hidden',
  backgroundColor: '#050505'
};

const videoStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transform: 'translate(-50%, -50%)',
  zIndex: 0
};

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'radial-gradient(circle, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)',
  zIndex: 1
};

const titleStyle = {
  fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
  fontWeight: '900',
  lineHeight: '1.1',
  marginBottom: '25px',
    color: '#fff',

};

const subtitleStyle = {
  fontSize: '1.2rem',
  maxWidth: '650px',
  margin: '0 auto 40px',
  opacity: 0.8,
};

const mainBtnStyle = {
  padding: '18px 40px',
  borderRadius: '4px',
  fontWeight: '600',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  cursor: 'pointer',
  backgroundColor: '#0056B3',
  color: '#fff',
  textDecoration: 'none'
};

export default Hero;