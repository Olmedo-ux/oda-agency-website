import React, { useState, useEffect } from "react";
import { initialTestimonials } from "../data";
import { useFadeIn } from "../hooks/useFadeIn";

const Testimonials = () => {
  // On charge les avis depuis le localStorage s'ils existent, sinon on prend ceux de data.js
  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem("oda_reviews");
    return saved ? JSON.parse(saved) : initialTestimonials;
  });

  const [newReview, setNewReview] = useState({ name: "", role: "", text: "" });
  const [ref, isVisible] = useFadeIn(0.1);

  // Sauvegarde automatique dans localStorage à chaque changement de 'reviews'
  useEffect(() => {
    localStorage.setItem("oda_reviews", JSON.stringify(reviews));
  }, [reviews]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.text) return;

    const reviewToAdd = {
      id: Date.now(), // ID unique basé sur l'heure
      ...newReview,
      date: "À l'instant"
    };

    // Ajout du nouveau commentaire en haut de la liste
    setReviews([reviewToAdd, ...reviews]);
    setNewReview({ name: "", role: "", text: "" }); // Reset du formulaire
    alert("Merci pour votre témoignage !");
  };

  return (
    <section id="temoignages" ref={ref} style={{ padding: "100px 0", backgroundColor: "#F8F9FA" }}>
      <div className="container">
        
        {/* Titre */}
        <div style={{ textAlign: "center", marginBottom: "60px", opacity: isVisible ? 1 : 0, transition: "1s" }}>
          <h2 className="section-title">Ce que disent nos clients</h2>
          <p style={{ color: "#666" }}>Vos retours sont notre plus belle récompense.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
          
          {/* Colonne Gauche : Formulaire */}
          <div style={{ 
            backgroundColor: "white", padding: "40px", borderRadius: "20px", 
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)", height: "fit-content" 
          }}>
            <h3 style={{ marginBottom: "20px", fontSize: "1.5rem" }}>Laissez un avis</h3>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <input 
                type="text" 
                placeholder="Votre Nom" 
                value={newReview.name}
                onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                style={inputStyle}
                required
              />
              <input 
                type="text" 
                placeholder="Votre Rôle (ex: CEO, Designer...)" 
                value={newReview.role}
                onChange={(e) => setNewReview({...newReview, role: e.target.value})}
                style={inputStyle}
              />
              <textarea 
                placeholder="Votre témoignage..." 
                rows="4" 
                value={newReview.text}
                onChange={(e) => setNewReview({...newReview, text: e.target.value})}
                style={inputStyle}
                required
              ></textarea>
              <button type="submit" className="btn-primary" style={{ width: "100%", border: "none" }}>
                Publier mon avis
              </button>
            </form>
          </div>

          {/* Colonne Droite : Liste des avis (Scrollable) */}
          <div style={{ maxHeight: "600px", overflowY: "auto", paddingRight: "10px" }}>
            {reviews.map((review) => (
              <div key={review.id} style={cardStyle}>
                <p style={{ fontStyle: "italic", color: "#555", marginBottom: "20px", fontSize: "1.05rem" }}>
                  "{review.text}"
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                  <div style={avatarStyle}>{review.name.charAt(0)}</div>
                  <div>
                    <h4 style={{ fontSize: "1rem", margin: 0 }}>{review.name}</h4>
                    <span style={{ fontSize: "0.85rem", color: "#888" }}>
                      {review.role} • {review.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

// Styles CSS-in-JS pour ce composant
const inputStyle = {
  padding: "15px", borderRadius: "8px", border: "1px solid #ddd", 
  fontSize: "1rem", outline: "none", width: "100%", backgroundColor: "#FAFAFA"
};

const cardStyle = {
  backgroundColor: "white", padding: "30px", borderRadius: "15px", 
  marginBottom: "20px", boxShadow: "0 5px 15px rgba(0,0,0,0.03)", border: "1px solid #eee"
};

const avatarStyle = {
  width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#0056B3", 
  color: "white", display: "flex", alignItems: "center", justifyContent: "center", 
  fontWeight: "bold", fontSize: "1.2rem"
};

export default Testimonials;