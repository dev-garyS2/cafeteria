import { useState } from 'react';
import styles from './Contact.module.css';

function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Validar campos simples
    if (!formData.nombre || !formData.email || !formData.mensaje) return;

    // Simular envío
    setEnviado(true);

    // Limpiar formulario después de 3s
    setTimeout(() => {
      setFormData({ nombre: '', email: '', mensaje: '' });
      setEnviado(false);
    }, 3000);
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.title}>Contáctanos</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Tu email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="mensaje"
          placeholder="Escribe tu mensaje..."
          value={formData.mensaje}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Enviar</button>
      </form>

      {enviado && <p className={styles.confirmacion}>¡Gracias! Tu mensaje ha sido enviado.</p>}
    </section>
  );
}

export default Contact;

