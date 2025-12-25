import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import { projects } from "../data";

// Hook pour l'animation au scroll
const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting), 
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return isIntersecting;
};

const Portfolio = () => {
  const portfolioRef = useRef();
  const isPortfolioVisible = useOnScreen(portfolioRef);

  return (
    <section id="portfolio" ref={portfolioRef} style={{ padding: '80px 0', backgroundColor: '#FFFFFF' }}>
      <div className="container">
        
        {/* --- EN-TÊTE --- */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{ 
            color: '#0056B3', 
            fontWeight: 'bold', 
            textTransform: 'uppercase', 
            letterSpacing: '1px',
            fontSize: '0.85rem',
            display: 'block',
            marginBottom: '10px'
          }}>
            Portfolio
          </span>

          <h2 className="section-title" style={{ marginBottom: '15px' }}>
            Nos Réalisations
          </h2>

          <p style={{ 
            color: '#666', 
            fontSize: '1rem', 
            maxWidth: '600px', 
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Découvrez une sélection de nos projets récents qui illustrent notre savoir-faire.
          </p>
        </div>

        {/* --- GRILLE IDENTIQUE AUX SERVICES --- */}
        <div style={{ 
          display: 'grid', 
          // Même taille de base que les services (220px)
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', 
          gap: '25px',
          justifyContent: 'center'
        }}>
          {projects.map((p, index) => (
            <Link 
              to={`/project/${p.id}`} 
              key={p.id} 
              className="portfolio-card"
              style={{
                textDecoration: 'none', 
                color: 'inherit', 
                ...cardStyle, // Application du style carré
                opacity: isPortfolioVisible ? 1 : 0,
                transform: isPortfolioVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = `translateY(-5px) scale(1.02)`;
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = `translateY(0px) scale(1)`; 
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
              }}
            >
              
              {/* Conteneur Image (Prend toute la place disponible) */}
              <div style={imageContainerStyle}>
                <img 
                  src={p.img} 
                  alt={p.title} 
                  loading="lazy" 
                  width="300" 
                  height="300"
                  style={imgStyle} 
                />
                <div style={categoryBadge}>{p.cat}</div>
              </div>

              {/* Texte (Compact en bas) */}
              <div style={{ padding: '15px', flexShrink: 0 }}>
                <h4 style={{ margin: '0 0 5px 0', fontSize: '1rem', fontWeight: '700' }}>{p.title}</h4>
                <p style={{ 
                  margin: 0, 
                  fontSize: '0.8rem', 
                  color: '#666', 
                  lineHeight: '1.4',
                  // Coupe le texte s'il est trop long pour garder le carré parfait
                  display: '-webkit-box',
                  WebkitLineClamp: '2',
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {p.desc}
                </p>
              </div>

            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- STYLES ---
const cardStyle = {
  // 1. Force le format carré PARFAIT (comme les services)
  aspectRatio: '1/1',
  
  // 2. Structure Flex pour gérer l'image et le texte
  display: 'flex',
  flexDirection: 'column',
  
  background: '#fff',
  borderRadius: '16px', // Arrondi identique aux services
  overflow: 'hidden',
  border: '1px solid rgba(0,0,0,0.03)', // Bordure subtile identique
  boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
  cursor: 'pointer'
};

const imageContainerStyle = {
  width: '100%',
  // flex: 1 permet à l'image de prendre tout l'espace restant
  flex: '1', 
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: '#f0f0f0'
};

const imgStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.4s ease-out'
};

const categoryBadge = {
  position: 'absolute',
  top: '10px',
  left: '10px',
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  color: '#0056B3',
  padding: '4px 10px',
  borderRadius: '20px',
  fontSize: '0.65rem',
  fontWeight: '700',
  textTransform: 'uppercase',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
};

export default Portfolio;