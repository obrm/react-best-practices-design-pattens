import React from 'react';

const ProductList = ({ products }) => {
  return (
    <ul className="product-list">
      {products.map((product) => (
        <li key={product.id} className="product-list-item">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>${product.price}</p>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;