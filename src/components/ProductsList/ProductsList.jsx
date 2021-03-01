import React from 'react';
import pt from 'prop-types';
import s from './ProductsList.module.css';
import ProductItem from '../ProductItem/ProductItem.jsx';
import ProductRatingItem from '../ProductRatingItem/ProductRatingItem.jsx';
import {PropValidator} from '../../prop-validator';

const ProductsList = ({products}) => {

  const renderProductsList = () => (
    products.map((product) => (
      <li key={product.id}>
        <ProductItem
          {...product}
          ratingComponent={ProductRatingItem}
        />
      </li>
    ))
  );

  return (
    <>
      {
        products.length === 0 ?
          <p className={s.noProducts}>Список товаров пуст</p>
          :
          <ul className={s.productsList}>
            {renderProductsList()}
          </ul>
      }
    </>
  )
}

ProductsList.propTypes = {
  products: pt.arrayOf(PropValidator.PRODUCT_INFO).isRequired
};

ProductsList.defaultProps = {
  products: []
}

export default ProductsList;
