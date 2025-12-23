import React from "react";
import { FacebookLogo, InstagramLogo, LinkedinLogo, Phone, Envelope, MapPin } from "phosphor-react";
import logo from "../assets/oda-logo.svg"; 

const Footer = () => {
  return (
    <footer id="footer" style={{ background: '#0a0a0a', color: '#fff', padding: '80px 0 30px', borderTop: '1px solid #1a1a1a' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          
          {/* Colonne 1 : Branding */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <img 
              src={logo} 
              alt="ODA Logo" 
              style={{ 
                height: '35px', 
                width: 'auto', 
                objectFit: 'contain',
                filter: 'brightness(0) invert(1)',
                alignSelf: 'flex-start'
              }} 
            />
            <p style={{ color: '#777', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Agence digitale créative basée à Lomé. Nous transformons vos idées en expériences numériques mémorables.
            </p>
          </div>

          {/* Colonne 2 : Services */}
          <div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '20px', color: '#0056B3' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', color: '#777', fontSize: '0.9rem' }}>
              <li>Design Graphique</li>
              <li>Développement Web</li>
              <li>Stratégie Digitale</li>
              <li>Community Management</li>
            </ul>
          </div>

          {/* Colonne 3 : Contact */}
          <div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '20px', color: '#0056B3' }}>Nous Contacter</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '15px', color: '#777', fontSize: '0.9rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={18} color="#0056B3"/> 
                <span>+228 93 90 78 38</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Envelope size={18} color="#0056B3"/> 
                <span>olm.design.agency@gmail.com</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MapPin size={18} color="#0056B3"/> 
                <span>Agoè Logopé, Lomé, Togo</span>
              </li>
            </ul>
          </div>

          {/* Colonne 4 : Social */}
          <div style={{ textAlign: 'right' }}>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '20px', color: '#0056B3' }}>Suivez-nous</h4>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'flex-end' }}>
              <a href="#" style={{ color: '#fff' }}><FacebookLogo size={24} weight="fill" /></a>
              <a href="#" style={{ color: '#fff' }}><InstagramLogo size={24} weight="fill" /></a>
              <a href="#" style={{ color: '#fff' }}><LinkedinLogo size={24} weight="fill" /></a>
            </div>
          </div>
        </div>

        {/* Ligne Copyright */}
        <div style={{ borderTop: '1px solid #1a1a1a', paddingTop: '20px', textAlign: 'center', color: '#444', fontSize: '0.8rem' }}>
          © {new Date().getFullYear()} ODA - OLM DESIGN AGENCY. TOUS DROITS RÉSERVÉS.
        </div>
      </div>
    </footer>
  );
};

export default Footer;