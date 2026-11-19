import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, image, category, name, price, priceDiscount }) => {
  const imgSrc = image || `/produc-image-${id || 1}.jpeg`;

  return (
    <Link
      to={`/product/${id}`}
      className="bg-white rounded-lg p-4 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
    >
      <div className="h-44 flex items-center justify-center mb-3 bg-light-gray-3/40 rounded-md p-2">
        <img
          src={imgSrc}
          alt={name || 'Produto'}
          className="max-h-full object-contain"
        />
      </div>

      <div>
        <span className="text-xs text-light-gray-3 font-semibold block">
          {category || 'Tênis'}
        </span>
        <h3 className="text-dark-gray-2 font-medium text-sm mt-1">
          {name}
        </h3>

        <div className="flex items-center gap-2 mt-2">
          {priceDiscount ? (
            <>
              <span className="text-light-gray-3 line-through text-xs">
                R$ {Number(price).toFixed(2)}
              </span>
              <span className="text-dark-gray font-bold text-sm">
                R$ {Number(priceDiscount).toFixed(2)}
              </span>
            </>
          ) : (
            <span className="text-dark-gray font-bold text-sm">
              R$ {Number(price).toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;