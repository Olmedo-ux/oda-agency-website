import React from "react";
import { useFadeIn } from "../hooks/useFadeIn";

const About = () => {
  const [ref, isVisible] = useFadeIn(0.1);

  return (
    <section id="about" ref={ref} style={{ backgroundColor: "#fff", padding: "100px 0" }}>
      <div className="container">
        
        {/* Conteneur centré et limité en largeur */}
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto', 
          textAlign: 'center',
          opacity: isVisible ? 1 : 0, 
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)', 
          transition: '1s ease-out' 
        }}>
          
          <span style={{ color: "#0056B3", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.85rem", display: "block", marginBottom: "10px" }}>
            À Propos
          </span>

          <h2 className="section-title" style={{ marginBottom: '30px' }}>
            Agence créative <br/> au cœur de Lomé
          </h2>

          <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8', marginBottom: '20px' }}>
            <strong>ODA (Olm Design Agency)</strong> est une agence créative passionnée par le design et l'innovation digitale. Basée à Lomé, au Togo, nous accompagnons les entreprises locales et internationales dans leur transformation numérique.
          </p>

          <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.6' }}>
            Notre équipe pluridisciplinaire combine expertise technique et vision créative pour concevoir des solutions sur mesure qui répondent parfaitement aux besoins de nos clients.
          </p>

        </div>
      </div>
    </section>
  );
};

export default About;