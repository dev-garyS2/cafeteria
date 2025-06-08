import React, { useState } from 'react';
import styles from './Checkout.module.css';

function Checkout({ product, onBack, onConfirm }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [option, setOption] = useState('Para llevar');

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm({ name, phone, option, product });
  };

  return (
    <div className={styles.checkoutContainer}>
      <h2>Checkout</h2>
      <h3>Producto: {product.name}</h3>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Nombre:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label>
          Teléfono:
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>

        <label>
          Seleccione opción:
          <select value={option} onChange={(e) => setOption(e.target.value)}>
            <option>Para llevar</option>
            <option>Consumir aquí</option>
          </select>
        </label>

        <div className={styles.buttons}>
          <button type="button" onClick={onBack}>Volver al menú</button>
          <button type="submit">Confirmar compra</button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;


