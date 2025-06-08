import { useState, useEffect } from 'react';

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
        <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Inicio</a>
        <a href="#about" className={activeSection === 'about' ? 'active' : ''}>Nosotros</a>
        <a href="#menu" className={activeSection === 'menu' ? 'active' : ''}>Menú</a>
        <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contacto</a>
      </nav>
    </header>
  );
}

export default Header;

