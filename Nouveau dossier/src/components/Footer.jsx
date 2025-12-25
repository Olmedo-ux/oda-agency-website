import React from "react";
import { 
  FacebookLogo, 
  InstagramLogo, 
  LinkedinLogo, 
  MapPin, 
  EnvelopeSimple, 
  Phone, 
  Clock 
} from "phosphor-react";

// Importez votre logo ici s'il est dans assets, sinon utilisez un texte
// import logo from "../assets/logo-white.png"; 

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#111", color: "#fff", paddingTop: "80px", paddingBottom: "30px" }}>
      <div className="container">
        
        {/* --- GRILLE DU PIED DE PAGE --- */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
          gap: "40px",
          marginBottom: "60px"
        }}>
          
          {/* COLONNE 1 : MARQUE & RÉSEAUX */}
          <div>
            {/* Logo Textuel ou Image */}
            <h2 style={{ fontSize: "1.8rem", fontWeight: "900", color: "#fff", marginBottom: "20px" }}>
              ODA<span style={{ color: "#0056B3" }}>.</span>
            </h2>
            <p style={{ color: "#aaa", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "25px" }}>
              Agence créative digitale basée à Lomé. Nous transformons vos idées en expériences numériques impactantes.
            </p>
            {/* Réseaux Sociaux */}
            <div style={{ display: "flex", gap: "15px" }}>
              <a href="#" style={socialIconStyle}><FacebookLogo size={20} weight="fill" /></a>
              <a href="#" style={socialIconStyle}><InstagramLogo size={20} weight="fill" /></a>
              <a href="#" style={socialIconStyle}><LinkedinLogo size={20} weight="fill" /></a>
            </div>
          </div>

          {/* COLONNE 2 : SERVICES */}
          <div>
            <h3 style={columnTitleStyle}>Nos Services</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={listItemStyle}>Branding & Identité</li>
              <li style={listItemStyle}>Développement Web</li>
              <li style={listItemStyle}>Marketing Digital</li>
              <li style={listItemStyle}>UI/UX Design</li>
              <li style={listItemStyle}>Community Management</li>
              <li style={listItemStyle}>Multimédia & Motion</li>
            </ul>
          </div>

          {/* COLONNE 3 : CONTACT */}
          <div>
            <h3 style={columnTitleStyle}>Nous Contacter</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <div style={contactRowStyle}>
                <MapPin size={24} color="#0056B3" weight="fill" style={{flexShrink: 0}} />
                <span>Agoè Logopé, En face de la société Geothec SA, Lomé, Togo</span>
              </div>
              <div style={contactRowStyle}>
                <EnvelopeSimple size={24} color="#0056B3" weight="fill" style={{flexShrink: 0}} />
                <a href="mailto:hello@agence-oda.com" style={{color: 'inherit'}}>hello@agence-oda.com</a>
              </div>
              <div style={contactRowStyle}>
                <Phone size={24} color="#0056B3" weight="fill" style={{flexShrink: 0}} />
                <div style={{display:'flex', flexDirection:'column'}}>
                   <a href="tel:+22893907838" style={{color: 'inherit'}}>+228 93 90 78 38</a>
                   <a href="tel:+22879859416" style={{color: 'inherit'}}>+228 79 85 94 16</a>
                </div>
              </div>
            </div>
          </div>

          {/* COLONNE 4 : HORAIRES */}
          <div>
            <h3 style={columnTitleStyle}>Horaires</h3>
            <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", color: "#aaa", fontSize: "0.9rem" }}>
              <Clock size={24} color="#0056B3" weight="fill" />
              <div>
                <p style={{ margin: "0 0 5px 0" }}><strong style={{color:"#fff"}}>Lundi - Vendredi :</strong><br/> 08h00 - 18h00</p>
                <p style={{ margin: "0" }}><strong style={{color:"#fff"}}>Samedi :</strong><br/> 09h00 - 13h00</p>
              </div>
            </div>
          </div>

        </div>

        {/* --- BARRE DU BAS --- */}
        <div style={{ 
          borderTop: "1px solid #222", 
          paddingTop: "30px", 
          display: "flex", 
          flexWrap: "wrap", 
          justifyContent: "space-between", 
          alignItems: "center",
          gap: "20px",
          fontSize: "0.85rem",
          color: "#666"
        }}>
          <p>© {new Date().getFullYear()} ODA. Tous droits réservés.</p>
          <div style={{ display: "flex", gap: "20px" }}>
            <a href="#" style={{ color: "#666", textDecoration: "none" }}>Mentions Légales</a>
            <a href="#" style={{ color: "#666", textDecoration: "none" }}>Politique de Confidentialité</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

// --- STYLES ---
const columnTitleStyle = {
  fontSize: "1.1rem",
  fontWeight: "700",
  marginBottom: "20px",
  color: "#fff"
};

const listItemStyle = {
  marginBottom: "10px",
  color: "#aaa",
  fontSize: "0.9rem",
  cursor: "default" // Ou pointer si liens
};

const contactRowStyle = {
  display: "flex",
  gap: "15px",
  color: "#aaa",
  fontSize: "0.9rem",
  lineHeight: "1.5",
  alignItems: "center"
};

const socialIconStyle = {
  width: "35px",
  height: "35px",
  backgroundColor: "#222",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  transition: "0.3s"
};

export default Footer;