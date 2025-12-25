import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; 
import logo from "../assets/oda-logo.svg"; 

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  // Détection du scroll
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setSticky(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Gestion de la navigation fluide
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    closeMenu();

    if (location.pathname === "/") {
      // Si on est déjà sur l'accueil, scroll fluide
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Si on est ailleurs, redirection vers l'accueil + ancre
      // Note: Pour que l'ancre fonctionne parfaitement après redirection, 
      // il faut souvent un petit utilitaire dans Home, mais navigate gère le changement de route.
      navigate(`/#${targetId}`);
      // Fallback simple si le navigateur ne scroll pas immédiatement
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const isHome = location.pathname === "/";
  const showSolidNav = sticky || !isHome || isOpen;

  return (
    <nav className={`navbar ${showSolidNav ? "sticky" : ""} ${isOpen ? "menu-open" : ""}`}>
      {/* LOGO */}
      <a href="/" onClick={(e) => handleNavClick(e, "accueil")} style={{ zIndex: 1002, display: 'flex' }}>
        <img src={logo} alt="ODA Logo" className="nav-logo-img" />
      </a>

      {/* BURGER ICON */}
      <div className={`burger-menu ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="burger-line line-1"></div>
        <div className="burger-line line-2"></div>
        <div className="burger-line line-3"></div>
      </div>

      {/* MENU LINKS */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="#accueil" onClick={(e) => handleNavClick(e, "accueil")}>Accueil</a></li>
        <li><a href="#services" onClick={(e) => handleNavClick(e, "services")}>Services</a></li>
        <li><a href="#portfolio" onClick={(e) => handleNavClick(e, "portfolio")}>Portfolio</a></li>
        <li><a href="/conseils" onClick={closeMenu}>Conseils</a></li>
        <li><a href="#temoignages" onClick={(e) => handleNavClick(e, "temoignages")}>Avis</a></li>
        <li><a href="#about" onClick={(e) => handleNavClick(e, "about")}>À Propos</a></li>
        <li><a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;