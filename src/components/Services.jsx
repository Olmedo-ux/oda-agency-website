import React from "react";
import { PaintBrush, DeviceMobile, Megaphone, Package, ChartLineUp, Code } from "phosphor-react";

const Services = () => {
  const servicesList = [
    {
      title: "Design Graphique",
      desc: "Création de logos et chartes graphiques qui marquent les esprits et définissent votre identité.",
      icon: <PaintBrush size={40} weight="duotone" />
    },
    {
      title: "Développement Web",
      desc: "Sites vitrines et e-commerce sur mesure, rapides, sécurisés et optimisés pour le référencement.",
      icon: <Code size={40} weight="duotone" />
    },
    {
      title: "Stratégie Digitale",
      desc: "Accompagnement complet pour booster votre présence en ligne et atteindre vos objectifs.",
      icon: <ChartLineUp size={40} weight="duotone" />
    },
    {
      title: "Social Media",
      desc: "Gestion de vos réseaux sociaux pour créer une communauté engagée autour de votre marque.",
      icon: <Megaphone size={40} weight="duotone" />
    },
    {
      title: "UI/UX Design",
      desc: "Conception d'interfaces intuitives centrées sur l'utilisateur pour une expérience mémorable.",
      icon: <DeviceMobile size={40} weight="duotone" />
    },
    {
      title: "Packaging",
      desc: "Design de produits et d'emballages qui se démarquent en rayon et séduisent vos clients.",
      icon: <Package size={40} weight="duotone" />
    }
  ];

  return (
    <section id="services" style={{ padding: '120px 0', backgroundColor: '#F8F9FA' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span style={{ color: '#0056B3', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Nos Expertises</span>
          <h2 style={{ fontSize: '2.5rem', marginTop: '10px', fontWeight: '800' }}>Des solutions créatives pour <br/>votre croissance.</h2>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px' 
        }}>
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              style={serviceCardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ color: '#0056B3', marginBottom: '20px' }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', fontWeight: '700' }}>{service.title}</h3>
              <p style={{ color: '#666', lineHeight: '1.7', fontSize: '0.95rem', margin: 0 }}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const serviceCardStyle = {
  background: '#fff',
  padding: '50px 40px',
  borderRadius: '20px',
  transition: 'all 0.3s ease',
  border: '1px solid #eee',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start'
};

export default Services;