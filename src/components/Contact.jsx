import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    type: "",
    message: ""
  });
  const [status, setStatus] = useState(null); // null, 'success'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation d'envoi
    console.log("Données envoyées:", formData);
    setStatus("success");
    // Reset après 4s
    setTimeout(() => {
      setStatus(null);
      setFormData({ name: "", company: "", email: "", type: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: "#F4F7F6" }}>
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">Contact</span>
          <h2 className="section-title">Parlons de votre projet</h2>
        </div>

        <div className="contact-form-wrapper">
            <p className="text-center" style={{ marginBottom: '25px', color: '#666', fontSize: '0.9rem' }}>
              Remplissez ce formulaire et nous vous répondrons sous 24h.
            </p>
            
            {status === 'success' ? (
              <div style={{ padding: '20px', backgroundColor: '#d4edda', color: '#155724', borderRadius: '8px', textAlign: 'center' }}>
                Merci ! Votre message a été envoyé avec succès.
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div className="form-grid-2">
                  <input 
                    type="text" name="name" placeholder="Nom" required
                    className="form-input"
                    value={formData.name} onChange={handleChange}
                  />
                  <input 
                    type="text" name="company" placeholder="Entreprise" 
                    className="form-input"
                    value={formData.company} onChange={handleChange}
                  />
                </div>
                
                <input 
                  type="email" name="email" placeholder="Email professionnel" required
                  className="form-input"
                  value={formData.email} onChange={handleChange}
                />
                
                <select 
                  name="type" className="form-input"
                  value={formData.type} onChange={handleChange}
                >
                  <option value="">Type de projet...</option>
                  <option value="site">Site Web</option>
                  <option value="branding">Branding / Logo</option>
                  <option value="marketing">Marketing Digital</option>
                  <option value="multimedia">Multimédia / Motion</option>
                  <option value="autre">Autre</option>
                </select>
                
                <textarea 
                  name="message" placeholder="Décrivez votre besoin..." rows="5" required
                  className="form-input" style={{ resize: 'none' }}
                  value={formData.message} onChange={handleChange}
                ></textarea>
                
                <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '10px' }}>
                  Envoyer ma demande
                </button>
              </form>
            )}
        </div>

      </div>
    </section>
  );
};

export default Contact;