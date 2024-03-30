import React from 'react';
const ProductTile = ({ product }) => {
  return (
    <div className="product-tile">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductTile;
