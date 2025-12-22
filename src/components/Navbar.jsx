import React, { useState, useEffect } from "react";
import logo from "../assets/ODA Logo .png"; 

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav style={{
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 1000,
      padding: sticky ? '15px 5%' : '25px 5%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      transition: 'all 0.4s ease',
      backgroundColor: sticky || isOpen ? 'rgba(255, 255, 255, 0.98)' : 'transparent',
      boxShadow: sticky ? '0 4px 25px rgba(0,0,0,0.1)' : 'none',
    }}>
      
      {/* LOGO */}
      <a href="#accueil" style={{ zIndex: 1001 }}>
        <img src={logo} alt="ODA Logo" style={{ 
          height: sticky ? '40px' : '55px', 
          transition: '0.4s',
          filter: sticky || isOpen ? 'none' : 'brightness(0) invert(1)'
        }} />
      </a>

      {/* BURGER ICON (Visible via CSS sur mobile) */}
      <div className="burger-menu" onClick={toggleMenu} style={burgerStyle}>
        <div style={{...lineStyle, backgroundColor: sticky || isOpen ? '#000' : '#fff', transform: isOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none'}}></div>
        <div style={{...lineStyle, backgroundColor: sticky || isOpen ? '#000' : '#fff', opacity: isOpen ? 0 : 1}}></div>
        <div style={{...lineStyle, backgroundColor: sticky || isOpen ? '#000' : '#fff', transform: isOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none'}}></div>
      </div>

      {/* MENU LINKS */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`} style={navLinksStyle}>
        {['accueil', 'services', 'portfolio', 'about'].map((item) => (
          <li key={item} style={liStyle}>
            <a href={`#${item}`} onClick={() => setIsOpen(false)} style={{
              color: 'inherit', textDecoration: 'none', transition: '0.3s',
              fontWeight: '600', fontSize: '0.85rem', textTransform: 'uppercase'
            }}>
              {item === 'about' ? 'À Propos' : item}
            </a>
          </li>
        ))}
        <li style={liStyle}>
          <a href="#about" onClick={() => setIsOpen(false)} style={{color: 'inherit', textDecoration: 'none', fontWeight: '600', fontSize: '0.85rem', textTransform: 'uppercase'}}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

// Styles internes (logique de base)
const burgerStyle = { display: 'none', flexDirection: 'column', gap: '5px', cursor: 'pointer', zIndex: 1001 };
const lineStyle = { width: '25px', height: '2px', transition: '0.4s' };
const navLinksStyle = { display: 'flex', gap: '35px', listStyle: 'none', margin: 0, padding: 0 };
const liStyle = { margin: 0 };

export default Navbar;