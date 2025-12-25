import React from "react";
import { services } from "../data";
import { PenNib, Layout, Code, Megaphone, Users, FilmStrip } from "phosphor-react";

const Services = () => {
  const getIcon = (id) => {
    const size = 32; 
    const weight = "duotone";
    
    switch (id) {
      case 1: return <PenNib size={size} weight={weight} />;
      case 2: return <Layout size={size} weight={weight} />;
      case 3: return <Code size={size} weight={weight} />;
      case 4: return <Megaphone size={size} weight={weight} />;
      case 5: return <Users size={size} weight={weight} />;
      case 6: return <FilmStrip size={size} weight={weight} />;
      default: return <Code size={size} weight={weight} />;
    }
  };

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">Nos Services</span>
          <h2 className="section-title">Ce que nous faisons</h2>
          <p className="section-desc">
            Des solutions créatives et techniques pour transformer votre vision en succès digital.
          </p>
        </div>

        <div className="grid-services">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                {getIcon(service.id)}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;