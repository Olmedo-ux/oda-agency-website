import React from "react";
import { initialTestimonials } from "../data";
import { Quotes } from "phosphor-react";

const Testimonials = () => {
  return (
    <section id="temoignages" className="section-padding" style={{ backgroundColor: "#F8F9FA" }}>
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">Avis Clients</span>
          <h2 className="section-title">Ce qu'ils disent de nous</h2>
          <p className="section-desc">
            La satisfaction de nos partenaires est notre meilleure carte de visite.
          </p>
        </div>

        <div className="grid-testimonials">
          {initialTestimonials.map((review) => (
            <div key={review.id} className="review-card">
              
              <div className="review-quote">
                <Quotes size={40} weight="fill" />
              </div>

              <p className="review-text">"{review.text}"</p>

              <div className="review-footer">
                <div className="review-avatar">
                  {review.name.charAt(0)}
                </div>
                
                <div>
                  <h4 style={{ fontSize: "1rem", fontWeight: "700", margin: 0, color: "#1A1A1A" }}>
                    {review.name}
                  </h4>
                  <span style={{ fontSize: "0.85rem", color: "#888", display: "block", marginTop: "4px" }}>
                    {review.role}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;