import React from "react";
import { initialTestimonials } from "../data";
// On utilise l'icône de citation pour le style
import { Quotes } from "phosphor-react";

const Testimonials = () => {
  return (
    <section id="temoignages" style={{ padding: "100px 0", backgroundColor: "#F8F9FA" }}>
      <div className="container">
        
        {/* --- EN-TÊTE --- */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span style={{ 
            color: "#0056B3", 
            fontWeight: "bold", 
            textTransform: "uppercase", 
            letterSpacing: "1px",
            fontSize: "0.85rem",
            display: "block",
            marginBottom: "10px"
          }}>
            Avis Clients
          </span>
          
          <h2 className="section-title" style={{ marginBottom: "15px" }}>
            Ce qu'ils disent de nous
          </h2>
          
          <p style={{ color: "#666", maxWidth: "600px", margin: "0 auto" }}>
            La satisfaction de nos partenaires est notre meilleure carte de visite.
          </p>
        </div>

        {/* --- GRILLE DES AVIS --- */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
          gap: "30px" 
        }}>
          {initialTestimonials.map((review) => (
            <div key={review.id} style={cardStyle} className="review-card">
              
              {/* Icône Citation Décorative */}
              <div style={{ marginBottom: "20px", color: "#0056B3", opacity: 0.2 }}>
                <Quotes size={40} weight="fill" />
              </div>

              {/* Texte de l'avis */}
              <p style={{ 
                fontStyle: "italic", 
                color: "#444", 
                lineHeight: "1.6", 
                marginBottom: "25px",
                flex: 1 // Permet d'aligner les bas de cartes si textes inégaux
              }}>
                "{review.text}"
              </p>

              {/* Auteur */}
              <div style={{ display: "flex", alignItems: "center", gap: "15px", borderTop: "1px solid #eee", paddingTop: "20px" }}>
                {/* Avatar (Initiale) */}
                <div style={avatarStyle}>
                  {review.name.charAt(0)}
                </div>
                
                {/* Infos */}
                <div>
                  <h4 style={{ fontSize: "1rem", fontWeight: "700", margin: 0, color: "#1A1A1A" }}>
                    {review.name}
                  </h4>
                  <span style={{ fontSize: "0.85rem", color: "#888", display: "block", marginTop: "4px" }}>
                    {review.role}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// --- STYLES ---
const cardStyle = {
  backgroundColor: "white",
  padding: "40px",
  borderRadius: "16px",
  boxShadow: "0 10px 40px rgba(0,0,0,0.03)",
  border: "1px solid rgba(0,0,0,0.02)",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.3s ease",
  height: "100%" // Assure que toutes les cartes ont la même hauteur visuelle
};

const avatarStyle = {
  width: "45px",
  height: "45px",
  borderRadius: "50%",
  backgroundColor: "#E6F0FA", // Fond bleu très clair
  color: "#0056B3",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "800",
  fontSize: "1.2rem",
  flexShrink: 0
};

export default Testimonials;