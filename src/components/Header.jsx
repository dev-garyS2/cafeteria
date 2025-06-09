import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Header() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'menu', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <h1>Café Aromático</h1>
      <nav>
        <Link to="/" className={activeSection === 'home' ? 'active' : ''}>Inicio</Link>
        <Link to="/about" className={activeSection === 'about' ? 'active' : ''}>Nosotros</Link>
        <Link to="/menu" className={activeSection === 'menu' ? 'active' : ''}>Menú</Link>
        <Link to="/contacto" className={activeSection === 'contact' ? 'active' : ''}>Contacto</Link>
      </nav>
    </header>
  );
}

export default Header;

