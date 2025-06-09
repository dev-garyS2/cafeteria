import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Checkout.module.css';

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [option, setOption] = useState('Para llevar');

  if (!product) {
    return <p>No se ha seleccionado ningún producto.</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, phone, option, product });
    alert("¡Compra confirmada!");

    navigate('/menu'); 
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
          <button type="button" onClick={() => navigate('/menu')}>Volver al menú</button>
          <button type="submit">Confirmar compra</button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;

