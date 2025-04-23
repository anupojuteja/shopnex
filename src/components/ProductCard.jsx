import React from 'react';

const ProductCard = ({ product }) => {
  const { title, image, price } = product; // destructuring

  return (
    <div className="border p-4 rounded shadow hover:shadow-lg">
      <img src={image} alt={title} className="h-40 mx-auto object-contain" />
      <h2 className="text-lg font-semibold mt-2">{title}</h2>
      <p className="text-blue-600 font-bold">${price}</p>
    </div>
  );
};

export default ProductCard;