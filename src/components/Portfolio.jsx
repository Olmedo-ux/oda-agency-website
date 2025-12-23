import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import { projects } from "../data";

// Hook pour détecter si la section est visible
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
    <section id="portfolio" ref={portfolioRef} style={{ padding: '100px 0', backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div style={{ marginBottom: '50px' }}>
          <h2 className="section-title" style={{ textAlign: 'left', margin: 0 }}>Projets Réalisés</h2>
          <p style={{ color: '#888', marginTop: '10px' }}>Une sélection de nos meilleurs travaux en design et digital.</p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', 
          gap: '25px' 
        }}>
          {projects.map((p, index) => (
            <Link 
              to={`/project/${p.id}`} 
              key={p.id} 
              className="portfolio-card"
              style={{
                textDecoration: 'none', 
                color: 'inherit', 
                ...cardStyle,
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
              
              <div style={{ ...imageContainerStyle, overflow: 'hidden' }}>
                <img 
                  src={p.img} 
                  alt={p.title} 
                  loading="lazy" /* OPTIMISATION ICI */
                  width="300" 
                  height="300"
                  style={{ 
                    ...imgStyle,
                    transition: 'transform 0.4s ease-out'
                  }} 
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
                <div style={categoryBadge}>{p.cat}</div>
              </div>

              <div style={{ padding: '18px' }}>
                <h4 style={{ margin: '0 0 6px 0', fontSize: '1rem', fontWeight: '700' }}>{p.title}</h4>
                <p style={{ margin: 0, fontSize: '0.8rem', color: '#666', lineHeight: '1.5' }}>
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

const cardStyle = {
  background: '#fff',
  borderRadius: '10px',
  overflow: 'hidden',
  border: '1px solid #eee',
  boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
  cursor: 'pointer',
  display: 'block' 
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
  bottom: '10px',
  left: '10px',
  backgroundColor: '#0056B3',
  color: '#fff',
  padding: '3px 10px',
  borderRadius: '3px',
  fontSize: '0.65rem',
  fontWeight: '600',
  textTransform: 'uppercase'
};

export default Portfolio;