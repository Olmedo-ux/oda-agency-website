import React from "react";

const Contact = () => {
  return (
    <section id="contact" style={{ backgroundColor: "#F4F7F6", padding: "100px 0" }}>
      <div className="container">
        
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <span style={{ color: "#0056B3", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.85rem" }}>
            Contact
          </span>
          <h2 className="section-title">Parlons de votre projet</h2>
        </div>

        {/* Formulaire seul et centré */}
        <div style={{ 
          maxWidth: '600px',
          margin: '0 auto',
          backgroundColor: '#fff',
          padding: '40px',
          borderRadius: '24px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
        }}>
            <p style={{ marginBottom: '25px', color: '#666', fontSize: '0.9rem', textAlign: 'center' }}>
              Remplissez ce formulaire et nous vous répondrons sous 24h.
            </p>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <input type="text" placeholder="Nom" style={inputStyle} />
                <input type="text" placeholder="Entreprise" style={inputStyle} />
              </div>
              <input type="email" placeholder="Email professionnel" style={inputStyle} />
              <select style={inputStyle}>
                <option value="">Type de projet...</option>
                <option value="site">Site Web</option>
                <option value="branding">Branding / Logo</option>
                <option value="marketing">Marketing Digital</option>
                <option value="multimedia">Multimédia / Motion</option>
                <option value="autre">Autre</option>
              </select>
              <textarea placeholder="Décrivez votre besoin..." rows="5" style={{ ...inputStyle, resize: 'none' }}></textarea>
              
              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '10px', border: 'none', justifyContent: 'center' }}>
                Envoyer ma demande
              </button>
            </form>
        </div>

      </div>
    </section>
  );
};

const inputStyle = {
  width: '100%',
  padding: '14px',
  borderRadius: '8px',
  border: '1px solid #eee',
  backgroundColor: '#F9F9F9',
  fontSize: '0.95rem',
  outline: 'none',
  transition: '0.3s'
};

export default Contact;