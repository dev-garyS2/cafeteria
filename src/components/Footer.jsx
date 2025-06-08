import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>
        © 2025 Café Aromático. Todos los derechos reservados por casicompila.
      </p>

      <div className={styles.socialIcons}>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className={styles.icon}
        >
          <FaFacebookF />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className={styles.icon}
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/5491123456789"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className={styles.icon}
        >
          <FaWhatsapp />
        </a>
      </div>
    </footer>
  );
}

export default Footer;



