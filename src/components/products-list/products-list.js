import React from 'react';
import ProductsListItem from '../products-list-item';
import './products-list.scss';
import '../products-list-item/products-list-item.scss';

import Rating from '../rating';
import Price from '../price';

const ProductsList = ({ products }) => {
  const elements = products.map(product => {
    const { id, price, subPriceContent, ...productProps } = product;
    return (
      <li key={id} className="products__list-item list-item-products">
        <ProductsListItem
          {...productProps}
          price={((item, cls) => (
            <Price price={item} clsName={cls} />
          ))(price, 'list-item-products__price')}
          subPriceContent={((item, cls) => (item ? <Price price={item} clsName={cls} /> : ''))(
            subPriceContent,
            'list-item-products__sub-price-content'
          )}
          ratingComponent={Rating}
        />
      </li>
    );
  });

  return <ul className="products__list">{elements}</ul>;
};

export default ProductsList;
