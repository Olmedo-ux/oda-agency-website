import React, { useEffect } from "react";
import { Lightbulb, Strategy, Megaphone, CheckCircle } from "phosphor-react";
import { Link } from "react-router-dom";

const tipsData = [
  {
    id: 1,
    category: "Branding",
    icon: <Lightbulb size={32} color="#D4AF37" weight="duotone" />,
    title: "Pourquoi un logo ne suffit pas ?",
    content: "Beaucoup confondent logo et image de marque. Votre marque, c'est ce que les gens disent de vous quand vous n'êtes pas là. Le logo n'est que la signature.",
  },
  {
    id: 2,
    category: "Marketing Digital",
    icon: <Megaphone size={32} color="#0056B3" weight="duotone" />,
    title: "Vendre efficacement sur WhatsApp",
    content: "Au Togo, WhatsApp est roi. N'envoyez pas juste des images en vrac. Utilisez les statuts pour le storytelling et les catalogues Business pour la conversion.",
  },
  {
    id: 3,
    category: "Stratégie Web",
    icon: <Strategy size={32} color="#25D366" weight="duotone" />,
    title: "Le site web : votre commercial 24/7",
    content: "Un site web n'est pas une dépense, c'est un investissement. Il travaille pour vous la nuit et les week-ends pour capturer des prospects pendant que vous dormez.",
  },
  {
    id: 4,
    category: "Communication",
    icon: <CheckCircle size={32} color="#FF5733" weight="duotone" />,
    title: "La règle des 3 secondes",
    content: "Sur les réseaux sociaux, vous avez 3 secondes pour capter l'attention. Vos visuels doivent être percutants et votre message clair dès le premier regard.",
  },
];

const Tips = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section style={{ padding: "120px 0", backgroundColor: "#F9F9F9" }}>
      <div className="container">
        {/* En-tête de la page */}
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 60px" }}>
          <span style={styles.subTitle}>L'Expertise ODA</span>
          <h1 style={styles.title}>Conseils & Bonnes Pratiques</h1>
          <p style={{ color: "#666", fontSize: "1.1rem" }}>
            Découvrez nos astuces pour booster votre présence digitale et développer votre activité.
          </p>
        </div>

        {/* Grille de Conseils */}
        <div style={styles.grid}>
          {tipsData.map((tip) => (
            <div
              key={tip.id}
              style={styles.card}
              // --- C'est ici que la magie de l'animation opère ---
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)'; // La carte monte
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)'; // L'ombre grandit
                e.currentTarget.style.borderColor = '#0056B3'; // La bordure devient bleue
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'; // Retour à la normale
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
                e.currentTarget.style.borderColor = '#eee';
              }}
              // ----------------------------------------------------
            >
              <div style={styles.iconBox}>{tip.icon}</div>
              <span style={styles.category}>{tip.category}</span>
              <h3 style={styles.cardTitle}>{tip.title}</h3>
              <p style={styles.cardText}>{tip.content}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div style={styles.ctaBox}>
          <h3 style={{ margin: "0 0 15px 0" }}>Besoin d'un accompagnement personnalisé ?</h3>
          <p style={{ marginBottom: "25px", color: "#555" }}>
            Nous appliquons ces stratégies pour propulser votre business.
          </p>
          <Link 
            to="/" 
            onClick={() => setTimeout(() => document.getElementById('contact').scrollIntoView(), 100)} 
            style={styles.button}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            Démarrer un projet
          </Link>
        </div>
      </div>
    </section>
  );
};

const styles = {
  subTitle: {
    color: "#0056B3",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "1px",
    display: "block",
    marginBottom: "10px",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "20px",
    color: "#333",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
    marginBottom: "80px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
    border: "1px solid #eee",
    // Cette ligne rend l'animation fluide (smooth)
    transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
    cursor: "default",
  },
  iconBox: {
    marginBottom: "20px",
    backgroundColor: "rgba(0, 86, 179, 0.05)",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  category: {
    fontSize: "0.8rem",
    color: "#888",
    textTransform: "uppercase",
    fontWeight: "600",
    marginBottom: "10px",
    display: "block",
  },
  cardTitle: {
    fontSize: "1.25rem",
    margin: "0 0 15px 0",
    color: "#222",
  },
  cardText: {
    color: "#666",
    lineHeight: "1.6",
    fontSize: "0.95rem",
  },
  ctaBox: {
    backgroundColor: "#E3F2FD",
    padding: "40px",
    borderRadius: "20px",
    textAlign: "center",
    maxWidth: "800px",
    margin: "0 auto",
  },
  button: {
    display: "inline-block",
    backgroundColor: "#0056B3",
    color: "#fff",
    padding: "12px 30px",
    borderRadius: "30px",
    textDecoration: "none",
    fontWeight: "600",
    transition: "transform 0.2s ease",
  },
};

export default Tips;