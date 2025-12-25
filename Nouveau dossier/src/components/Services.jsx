import React from "react";
import { services } from "../data";
import { PenNib, Layout, Code, Megaphone, Users, FilmStrip } from "phosphor-react";

const Services = () => {
  
  const getIcon = (id) => {
    const size = 32; 
    const weight = "duotone";
    
    switch (id) {
      case 1: return <PenNib size={size} weight={weight} />;
      case 2: return <Layout size={size} weight={weight} />;
      case 3: return <Code size={size} weight={weight} />;
      case 4: return <Megaphone size={size} weight={weight} />;
      case 5: return <Users size={size} weight={weight} />;
      case 6: return <FilmStrip size={size} weight={weight} />; // Icone pour Multimédia
      default: return <Code size={size} weight={weight} />;
    }
  };

  return (
    <section id="services" style={{ padding: "80px 0", backgroundColor: "#fff" }}>
      <div className="container">
        
        {/* EN-TÊTE */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <span style={{ 
            color: "#0056B3", 
            fontWeight: "bold", 
            textTransform: "uppercase", 
            letterSpacing: "1px",
            fontSize: "0.85rem",
            display: "block",
            marginBottom: "10px"
          }}>
            Nos Services
          </span>
          
          <h2 className="section-title" style={{ marginBottom: "15px" }}>
            Ce que nous faisons
          </h2>
          
          <p style={{ fontSize: "1rem", color: "#666", maxWidth: "600px", margin: "0 auto" }}>
            Des solutions créatives et techniques pour transformer votre vision en succès digital.
          </p>
        </div>

        {/* GRILLE DES SERVICES */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", 
          gap: "25px",
          justifyContent: "center"
        }}>
          {services.map((service) => (
            <div key={service.id} className="service-card" style={cardStyle}>
              <div style={{ marginBottom: "15px", color: "#0056B3" }}>
                {getIcon(service.id)}
              </div>
              <h3 style={{ marginBottom: "10px", fontSize: "1.1rem", fontWeight: "700" }}>
                {service.title}
              </h3>
              <p style={{ color: "#666", fontSize: "0.85rem", lineHeight: "1.5", margin: 0 }}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

const cardStyle = {
  aspectRatio: "1/1", 
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "25px", 
  backgroundColor: "#F8F9FA",
  borderRadius: "16px",
  border: "1px solid rgba(0,0,0,0.03)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s"
};

export default Services;