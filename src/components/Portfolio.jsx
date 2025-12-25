import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import { projects } from "../data";

// Hook pour l'animation au scroll
const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
            setIntersecting(true);
            observer.disconnect(); // Animation une seule fois
        }
      }, 
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
    <section id="portfolio" ref={portfolioRef} className="section-padding bg-white">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Nos Réalisations</h2>
          <p className="section-desc">
            Découvrez une sélection de nos projets récents qui illustrent notre savoir-faire.
          </p>
        </div>

        <div className="grid-services"> {/* Utilise la même grille que services (220px) */}
          {projects.map((p, index) => (
            <Link 
              to={`/project/${p.id}`} 
              key={p.id} 
              className="portfolio-card"
              style={{
                opacity: isPortfolioVisible ? 1 : 0,
                transform: isPortfolioVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`,
              }}
            >
              
              <div className="portfolio-img-container">
                <img 
                  src={p.img} 
                  alt={p.title} 
                  loading="lazy" 
                  width="300" 
                  height="300"
                  className="portfolio-img"
                />
                <div className="portfolio-badge">{p.cat}</div>
              </div>

              <div className="portfolio-content">
                <h4 className="portfolio-title">{p.title}</h4>
                <p className="portfolio-desc">{p.desc}</p>
              </div>

            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;