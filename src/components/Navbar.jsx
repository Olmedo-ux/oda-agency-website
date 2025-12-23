import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; 
import logo from "../assets/oda-logo.svg"; 

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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

  const isHome = location.pathname === "/";
  const showSolidNav = sticky || !isHome || isOpen;

  // --- STYLES AJUSTÉS ---
  const navStyle = {
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
    // PADDING RÉDUIT : On laisse moins d'espace vide autour pour que la barre reste fine
    padding: showSolidNav ? '5px 5%' : '10px 5%', 
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'all 0.4s ease',
    backgroundColor: showSolidNav ? 'rgba(255, 255, 255, 0.98)' : 'transparent',
    boxShadow: showSolidNav ? '0 4px 25px rgba(0,0,0,0.05)' : 'none',
    backdropFilter: showSolidNav ? 'blur(10px)' : 'none',
  };

  const logoStyle = {
    // LOGO AGRANDI : Il prendra plus de place visuellement
    height: showSolidNav ? '60px' : '90px', 
    width: 'auto',
    transition: '0.4s',
    filter: showSolidNav ? 'none' : 'brightness(0) invert(1)'
  };

  const navClass = `navbar ${showSolidNav ? "sticky" : ""} ${isOpen ? "menu-open" : ""}`;

  return (
    <nav className={navClass} style={navStyle}>
      {/* LOGO */}
      <a href="/#accueil" style={{ zIndex: 1002, display: 'flex', alignItems: 'center' }} onClick={closeMenu}>
        <img 
          src={logo} 
          alt="ODA Logo" 
          className="nav-logo-img"
          style={logoStyle} 
        />
      </a>

      {/* BURGER ICON */}
      <div className={`burger-menu ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="burger-line line-1"></div>
        <div className="burger-line line-2"></div>
        <div className="burger-line line-3"></div>
      </div>

      {/* MENU LINKS */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="/#accueil" onClick={closeMenu}>Accueil</a></li>
        <li><a href="/#services" onClick={closeMenu}>Services</a></li>
        <li><a href="/#portfolio" onClick={closeMenu}>Portfolio</a></li>
        <li><a href="/conseils" onClick={closeMenu}>Conseils</a></li>
        <li><a href="/#temoignages" onClick={closeMenu}>Avis</a></li>
        <li><a href="/#about" onClick={closeMenu}>À Propos</a></li>
        <li>
          <a href="#footer" onClick={closeMenu} className="nav-contact-btn">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;