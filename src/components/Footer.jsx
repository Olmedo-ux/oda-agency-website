import React from "react";
import logo from "../assets/oda-logo.svg"; 
import { 
  FacebookLogo, 
  InstagramLogo, 
  LinkedinLogo, 
  MapPin, 
  EnvelopeSimple, 
  Phone 
  // Clock supprimé des imports
} from "phosphor-react";

const Footer = () => {
  return (
    <footer id="footer" style={{ backgroundColor: "#111", color: "#fff", paddingTop: "40px", paddingBottom: "20px" }}>
      <div className="container">
        
        {/* --- GRILLE DU PIED DE PAGE --- */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", 
          gap: "30px", 
          marginBottom: "30px",
          alignItems: "start" 
        }}>
          
          {/* COLONNE 1 : MARQUE */}
          <div style={{ marginTop: "-22px" }}>
            <a href="/#accueil" style={{ display: "inline-block", marginBottom: "0px", lineHeight: "0" }}>
              <img 
                src={logo} 
                alt="ODA Agency" 
                style={{ 
                  height: "115px", 
                  width: "auto", 
                  filter: "brightness(0) invert(1)",
                  display: "block",
                  opacity: "0.4"
                }} 
              />
            </a>
            
            <p style={{ 
              color: "#fff", 
              fontSize: "0.85rem", 
              lineHeight: "1.6", 
              marginTop: "-35px", 
              marginBottom: "1px",
              maxWidth: "90%",
              position: "relative", 
              zIndex: 2, 
              textShadow: "0 1px 2px rgba(0,0,0,0.9)" 
            }}>
              Agence digitale 360° basée à Lomé. Nous fusionnons <strong>stratégie, design et technologie</strong> pour créer des expériences web impactantes qui propulsent votre marque vers le succès.
            </p>
            
            <div style={{ display: "flex", gap: "10px", position: "relative", zIndex: 2 }}>
              <a href="#" style={socialIconStyle}><FacebookLogo size={18} weight="fill" /></a>
              <a href="#" style={socialIconStyle}><InstagramLogo size={18} weight="fill" /></a>
              <a href="#" style={socialIconStyle}><LinkedinLogo size={18} weight="fill" /></a>
            </div>
          </div>

          {/* COLONNE 2 : SERVICES */}
          <div>
            <h3 style={columnTitleStyle}>Services</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={listItemStyle}>Branding & Identité</li>
              <li style={listItemStyle}>Développement Web</li>
              <li style={listItemStyle}>Marketing Digital</li>
              <li style={listItemStyle}>UI/UX Design</li>
              <li style={listItemStyle}>Community Management</li>
            </ul>
          </div>

          {/* COLONNE 3 : CONTACT */}
          <div>
            <h3 style={columnTitleStyle}>Contact</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={contactRowStyle}>
                <MapPin size={18} color="#0056B3" weight="fill" style={{flexShrink: 0}} />
                <span>Agoè Logopé, Lomé, Togo</span>
              </div>
              <div style={contactRowStyle}>
                <EnvelopeSimple size={18} color="#0056B3" weight="fill" style={{flexShrink: 0}} />
                <a href="mailto:hello@agence-oda.com" style={{color: 'inherit'}}>hello@agence-oda.com</a>
              </div>
              <div style={contactRowStyle}>
                <Phone size={18} color="#0056B3" weight="fill" style={{flexShrink: 0}} />
                <div style={{display:'flex', gap:'10px'}}>
                   <a href="tel:+22893907838" style={{color: 'inherit'}}>93 90 78 38</a>
                   <a href="tel:+22879859416" style={{color: 'inherit'}}>79 85 94 16</a>
                </div>
              </div>
            </div>
          </div>

          {/* COLONNE 4 : HORAIRES (Sans l'icône Clock) */}
          <div>
            <h3 style={columnTitleStyle}>Horaires</h3>
            <div style={{ color: "#aaa", fontSize: "0.85rem" }}>
              <p style={{ marginBottom: "8px" }}>
                <strong style={{color:"#fff", display:"block", marginBottom:"2px"}}>Lundi - Vendredi</strong>
                08h00 - 18h00
              </p>
              <p style={{ marginBottom: "8px" }}>
                <strong style={{color:"#fff", display:"block", marginBottom:"2px"}}>Samedi</strong>
                09h00 - 13h00
              </p>
              <p style={{ margin: 0 }}>
                <strong style={{color:"#fff", display:"block", marginBottom:"2px"}}>Dimanche</strong>
                Fermé
              </p>
            </div>
          </div>

        </div>

        {/* --- BARRE DU BAS --- */}
        <div style={{ 
          borderTop: "1px solid rgba(255,255,255,0.1)", 
          paddingTop: "20px", 
          display: "flex", 
          flexWrap: "wrap", 
          justifyContent: "center", 
          alignItems: "center",
          gap: "30px", 
          fontSize: "0.8rem",
          color: "#666",
          textAlign: "center"
        }}>
          <p style={{ margin: 0 }}>© {new Date().getFullYear()} ODA Agency.</p>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
            <a href="#" style={{ color: "#666", textDecoration: "none" }}>Mentions Légales</a>
            <a href="#" style={{ color: "#666", textDecoration: "none" }}>Confidentialité</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

// --- STYLES ---
const columnTitleStyle = {
  fontSize: "1rem", 
  fontWeight: "700",
  marginTop: "15px", 
  marginBottom: "16px",
  color: "#fff",
  textTransform: "uppercase",
  letterSpacing: "0.5px"
};

const listItemStyle = {
  marginBottom: "8px",
  color: "#aaa",
  fontSize: "0.85rem",
  cursor: "default"
};

const contactRowStyle = {
  display: "flex",
  gap: "10px",
  color: "#aaa",
  fontSize: "0.85rem",
  lineHeight: "1.4",
  alignItems: "center"
};

const socialIconStyle = {
  width: "32px",
  height: "32px",
  backgroundColor: "rgba(255,255,255,0.05)",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  transition: "0.3s"
};

export default Footer;