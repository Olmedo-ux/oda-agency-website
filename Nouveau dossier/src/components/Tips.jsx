import React from "react";
import { Lightbulb, TrendUp, ShieldCheck } from "phosphor-react";

const Tips = () => {
  const tipsList = [
    { id: 1, icon: <Lightbulb size={32} weight="duotone" />, title: "Identité Visuelle", desc: "Votre logo est la première chose qu'on voit. Faites simple." },
    { id: 2, icon: <TrendUp size={32} weight="duotone" />, title: "SEO Local", desc: "Inscrivez votre entreprise sur Google Maps pour être visible à Lomé." },
    { id: 3, icon: <ShieldCheck size={32} weight="duotone" />, title: "Sécurité Web", desc: "Un site HTTPS rassure 80% des clients potentiels." }
  ];

  return (
    <section id="conseils" style={{ padding: "100px 0", backgroundColor: "#F8F9FA" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span style={{ color: "#0056B3", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.85rem", display: "block", marginBottom: "10px" }}>Nos Conseils</span>
          <h2 className="section-title">L'astuce de l'expert</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
          {tipsList.map((tip) => (
            <div key={tip.id} className="tip-card" style={cardStyle}>
              <div style={{ color: "#0056B3", marginBottom: "20px" }}>{tip.icon}</div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "10px" }}>{tip.title}</h3>
              <p style={{ color: "#555", lineHeight: "1.6", fontSize: "0.95rem" }}>{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const cardStyle = { backgroundColor: "#fff", padding: "30px", borderRadius: "16px", border: "1px solid rgba(0,0,0,0.02)" };
export default Tips;