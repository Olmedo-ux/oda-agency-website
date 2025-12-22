import React, { useRef, useState, useEffect } from "react";
import { projects } from "../data";

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
    <section id="portfolio" ref={portfolioRef} style={{ padding: '120px 0', backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div style={{ marginBottom: '60px' }}>
          <h2 className="section-title" style={{ textAlign: 'left', margin: 0 }}>Projets Réalisés</h2>
          <p style={{ color: '#888', marginTop: '10px' }}>Une sélection de nos meilleurs travaux en design et digital.</p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', 
          gap: '30px' 
        }}>
          {projects.map((p, index) => (
            <div 
              key={p.id} 
              className="portfolio-card" 
              style={{
                ...cardStyle,
                opacity: isPortfolioVisible ? 1 : 0,
                transform: isPortfolioVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`,
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = `translateY(0px) scale(1.03)`}
              onMouseLeave={(e) => e.currentTarget.style.transform = `translateY(${isPortfolioVisible ? '0px' : '40px'}) scale(1)`}
            >
              
              <div style={{ ...imageContainerStyle, overflow: 'hidden' }}>
                <img 
                  src={p.img} 
                  alt={p.title} 
                  style={{ 
                    ...imgStyle,
                    transition: 'transform 0.4s ease-out'
                  }} 
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
                <div style={categoryBadge}>{p.cat}</div>
              </div>

              <div style={{ padding: '20px' }}>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '1.1rem', fontWeight: '700' }}>{p.title}</h4>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#666', lineHeight: '1.5' }}>
                  {p.desc}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const cardStyle = {
  background: '#fff',
  borderRadius: '12px',
  overflow: 'hidden',
  border: '1px solid #eee',
  boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
  cursor: 'pointer',
};

const imageContainerStyle = {
  width: '100%',
  aspectRatio: '1/1',
  position: 'relative'
};

const imgStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const categoryBadge = {
  position: 'absolute',
  bottom: '15px',
  left: '15px',
  backgroundColor: '#0056B3',
  color: '#fff',
  padding: '4px 12px',
  borderRadius: '4px',
  fontSize: '0.7rem',
  fontWeight: '600',
  textTransform: 'uppercase'
};

export default Portfolio;