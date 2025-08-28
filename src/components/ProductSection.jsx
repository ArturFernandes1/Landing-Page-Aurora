import React from 'react';
import './ProductSection.scss';
import colarModelo1 from '/assets/colar-modelo1.png';

export default function ProductSection() {
  const products = [
    { id: 1, name: "Colar Modelo 1", price: "R$ 299,90", image: colarModelo1 },
    { id: 2, name: "Colar Modelo 2", price: "R$ 349,90", image: colarModelo1 },
    { id: 3, name: "Colar Modelo 3", price: "R$ 279,90", image: colarModelo1 },
    { id: 4, name: "Colar Modelo 4", price: "R$ 399,90", image: colarModelo1 },
    { id: 5, name: "Colar Modelo 5", price: "R$ 259,90", image: colarModelo1 },
    { id: 6, name: "Colar Modelo 6", price: "R$ 329,90", image: colarModelo1 },
    { id: 7, name: "Colar Modelo 7", price: "R$ 289,90", image: colarModelo1 },
    { id: 8, name: "Colar Modelo 8", price: "R$ 379,90", image: colarModelo1 },
  ];

  return (
    <section className="product-section">
      <div className="container">
        <h2>Nossos Produtos</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="price">{product.price}</p>
                <button className="buy-button">Comprar</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
