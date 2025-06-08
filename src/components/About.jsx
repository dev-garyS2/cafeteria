import { useEffect, useRef, useState } from 'react';
import styles from './About.module.css';

function About() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // solo una vez
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`${styles.aboutSection} ${visible ? styles.visible : ''}`}
    >
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Nuestra Historia</h2>
        <p className={styles.description}>
          En Café Aromático, creemos que cada taza de café cuenta una historia. 
          Desde nuestros granos cuidadosamente seleccionados hasta la dedicación de nuestros baristas, 
          trabajamos para brindarte una experiencia inolvidable. Nuestro compromiso es ofrecer calidad, 
          calidez y un espacio donde puedas relajarte y disfrutar.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img 
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80" 
          alt="Interior de la cafetería" 
        />
      </div>
    </section>
  );
}

export default About;

