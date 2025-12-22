import React from "react";
import { useFadeIn } from "../hooks/useFadeIn"; // Assure-toi d'avoir créé le hook

const About = () => {
  const [ref, isVisible] = useFadeIn(0.1);

  return (
    <section id="about" ref={ref} style={{ backgroundColor: "#fff", padding: "100px 0", overflow: 'hidden' }}>
      <div className="container" style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'all 0.8s ease-out',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
          <div style={{maxWidth: '800px'}}>
            <h2 className="section-title" style={{ textAlign:'left', marginBottom:'20px' }}>L'excellence créative à Lomé</h2>
            <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.6' }}>
              <strong>ODA (Olm Design Agency)</strong> est un studio multidisciplinaire...
            </p>
          </div>

          <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center' }}>
            <div style={{ width: '100%', height: '350px', borderRadius: '20px', overflow: 'hidden', backgroundColor: '#eee' }}>
              <iframe title="Localisation" src="https://www.google.com/maps/embed?..." width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
            </div>

            <div style={{ padding: '40px', background: '#F8F9FA', borderRadius: '24px' }}>
              <h3 style={{ marginBottom:'20px' }}>Démarrons un projet</h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <input type="text" placeholder="Votre Nom" style={inputStyle} />
                <input type="email" placeholder="Votre Email" style={inputStyle} />
                <textarea placeholder="Votre projet..." rows="4" style={inputStyle}></textarea>
                <button type="button" className="btn btn-primary" style={{ padding: '15px', borderRadius: '8px' }}>Envoyer</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const inputStyle = { padding: '12px', borderRadius:'8px', border:'1px solid #ddd', outline: 'none' };
export default About;