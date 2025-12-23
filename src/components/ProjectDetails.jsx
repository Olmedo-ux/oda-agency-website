import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data";
import { ArrowLeft, CheckCircle } from "phosphor-react";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div style={{ padding: '150px 0', textAlign: 'center' }}>Projet introuvable.</div>;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <section style={{ paddingTop: '120px', paddingBottom: '80px', backgroundColor: '#F8F9FA' }}>
      <div className="container">
        <Link to="/#portfolio" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '30px', color: '#666', fontWeight: '600' }}>
          <ArrowLeft size={20} /> Retour aux projets
        </Link>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px', alignItems: 'center', marginBottom: '80px' }}>
          <div>
            <span style={{ color: '#0056B3', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>{project.cat}</span>
            <h1 style={{ fontSize: '2.5rem', margin: '15px 0 25px' }}>{project.title}</h1>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
              {project.desc}
              <br/><br/>
              Nous avons accompagné le client de la conception à la réalisation finale, en mettant l'accent sur l'impact visuel et l'expérience utilisateur.
            </p>
          </div>
          <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
            {/* OPTIMISATION IMAGE ICI */}
            <img 
              src={project.img} 
              alt={project.title} 
              loading="lazy" 
              style={{ width: '100%', display: 'block' }} 
            />
          </div>
        </div>

        <div style={{ backgroundColor: '#fff', padding: '60px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <h3 style={{ marginBottom: '30px' }}>Le Résultat</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
            {['Design Unique', 'Optimisé SEO', 'Mobile First'].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <CheckCircle size={32} color="#25D366" weight="fill" />
                <span style={{ fontWeight: '600', fontSize: '1.1rem' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;