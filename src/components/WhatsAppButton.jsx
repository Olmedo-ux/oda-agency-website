import React from "react";
import { WhatsappLogo } from "phosphor-react";

const WhatsAppButton = () => {
  // Remplace par ton vrai numéro au format international sans le +
  const phoneNumber = "22893907838"; 
  const message = "Bonjour ODA, je souhaite discuter d'un projet.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      style={styles.floatBtn}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <WhatsappLogo size={32} weight="fill" />
      <span style={styles.tooltip}>Discuter</span>
    </a>
  );
};

const styles = {
  floatBtn: {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    backgroundColor: '#25D366', // Vert WhatsApp officiel
    color: '#fff',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
    zIndex: 9999,
    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    cursor: 'pointer',
    textDecoration: 'none'
  },
  tooltip: {
    position: 'absolute',
    right: '70px',
    backgroundColor: '#333',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '4px',
    fontSize: '0.8rem',
    whiteSpace: 'nowrap',
    opacity: 0, // Tu peux gérer l'apparition au hover via CSS classique si tu préfères
    pointerEvents: 'none',
  }
};

export default WhatsAppButton;