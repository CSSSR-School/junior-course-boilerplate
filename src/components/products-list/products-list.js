import React from 'react';
import ProductsListItem from 'csssr-school-product-card';
import './products-list.scss';
import '../products-list-item/products-list-item.scss';

import Rating from '../rating';
import Price from '../price';

const ProductsList = ({ products }) => {
  const elements = products.map(product => {
    const {
      id,
      isInStock,
      img,
      title,
      price,
      subPriceContent,
      maxRating,
      rating
    } = product;
    return (
      <li key={id} className="products__list-item" style={{ marginBottom: 50 }}>
        <ProductsListItem
          isInStock={isInStock}
          img={img}
          title={title}
          maxRating={maxRating}
          rating={rating}
          price={<Price value={price} isPrimary={true} />}
          subPriceContent={
            subPriceContent ? (
              <Price value={subPriceContent} isPrimary={false} />
            ) : ''
          }
          ratingComponent={Rating}
        />
      </li>
    );
  });

  return <ul className="products__list">{elements}</ul>;
};

export default ProductsList;
