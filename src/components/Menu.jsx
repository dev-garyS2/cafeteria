import React, { useState } from 'react';
import menuItems from '../data/menuData';
import styles from './Menu.module.css';
import Checkout from './Checkout';

const categories = ['Todos', 'Café', 'Pasteles', 'Bebidas'];

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showCheckout, setShowCheckout] = useState(false);

  const filteredItems =
    selectedCategory === 'Todos'
      ? menuItems
      : menuItems.filter(item => item.category === selectedCategory);

  const openModal = (product) => {
    setSelectedProduct(product);
    setShowCheckout(false);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handleBuyClick = () => {
    setShowCheckout(true);
  };

  const handleBackToMenu = () => {
    setShowCheckout(false);
    setSelectedProduct(null);
  };

  const handleConfirmPurchase = (data) => {
    console.log('Compra confirmada:', data);
    alert(`Gracias por tu compra, ${data.name}!`);
    setShowCheckout(false);
    setSelectedProduct(null);
  };

  if (showCheckout && selectedProduct) {
    return (
      <Checkout
        product={selectedProduct}
        onBack={handleBackToMenu}
        onConfirm={handleConfirmPurchase}
      />
    );
  }

  return (
    <section id="menu" className={styles.menuSection}>
      <h2 className={styles.title}>Nuestro Menú</h2>

      <div className={styles.categories}>
        {categories.map(category => (
          <button
            key={category}
            className={`${styles.categoryButton} ${
              selectedCategory === category ? styles.active : ''
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.productsGrid}>
        {filteredItems.map((item) => (
          <div key={item.id} className={styles.productCard} onClick={() => openModal(item)}>
            <img src={item.image} alt={item.name} className={styles.productImage} />
            <h3 className={styles.productName}>{item.name}</h3>
            <p className={styles.productDescription}>{item.description}</p>
            <p className={styles.productPrice}>{item.price}</p>
          </div>
        ))}
      </div>

      {selectedProduct && !showCheckout && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>✕</button>
            <img src={selectedProduct.image} alt={selectedProduct.name} className={styles.modalImage} />
            <h3 className={styles.modalName}>{selectedProduct.name}</h3>
            <p className={styles.modalDescription}>{selectedProduct.description}</p>
            <p className={styles.modalPrice}>{selectedProduct.price}</p>
            <button className={styles.buyButton} onClick={handleBuyClick}>Comprar</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Menu;






