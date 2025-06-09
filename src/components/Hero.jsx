import styles from './Hero.module.css';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Bienvenido al Café Aromático CasiCompila</h1>
        <p className={styles.subtitle}>
          Disfrutá el mejor café de la ciudad en un ambiente acogedor.
        </p>
        <Link to="/menu" className={styles.ctaButton}>
          Ver Menú
        </Link>
      </div>
    </section>
  );
}

export default Hero;



