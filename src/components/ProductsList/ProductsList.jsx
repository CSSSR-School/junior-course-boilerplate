import React from 'react';
import './ProductsList.css';
import data from '../../products.json';

export const ProductsList = () => {
  return (
    <ul className="products">
      {data.splice(0, 3).map(item => {
        return (
          <li className="products__item" key={item.id}>
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};
