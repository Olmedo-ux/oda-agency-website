import React from "react";
import { FacebookLogo, InstagramLogo, LinkedinLogo, Phone, Envelope, MapPin } from "phosphor-react";
import logo from "../assets/ODA Logo .png"; 

const Footer = () => {
  return (
    <footer style={{ background: '#0a0a0a', color: '#fff', padding: '60px 0 30px', borderTop: '1px solid #1a1a1a' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>
          
          {/* Colonne 1 : Branding */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <img 
              src={logo} 
              alt="ODA Logo" 
              style={{ 
                height: '45px', 
                width: 'auto', // EMPÊCHE LA DÉFORMATION
                objectFit: 'contain',
                filter: 'brightness(0) invert(1)',
                alignSelf: 'flex-start'
              }} 
            />
            <p style={{ color: '#777', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Solutions digitales premium pour marques ambitieuses.
            </p>
          </div>

          {/* Colonne 2 : Navigation Rapide */}
          <div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '20px', color: '#0056B3' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', color: '#777', fontSize: '0.9rem' }}>
              <li>Design Graphique</li>
              <li>Développement Web</li>
              <li>Stratégie Digitale</li>
            </ul>
          </div>

          {/* Colonne 3 : Contact */}
          <div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '20px', color: '#0056B3' }}>Contact</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', color: '#777', fontSize: '0.9rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Phone size={16}/> +228 93 90 78 38</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Envelope size={16}/> olm.design.agency@gmail.com</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><MapPin size={16}/> Agoè Logopé, Lomé</li>
            </ul>
          </div>

          {/* Colonne 4 : Social */}
          <div style={{ textAlign: 'right' }}>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '20px', color: '#0056B3' }}>Suivez-nous</h4>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'flex-end' }}>
              <FacebookLogo size={24} weight="fill" />
              <InstagramLogo size={24} weight="fill" />
              <LinkedinLogo size={24} weight="fill" />
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