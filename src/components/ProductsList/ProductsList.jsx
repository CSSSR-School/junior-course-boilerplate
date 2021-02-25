import React from 'react';
import pt from 'prop-types';
import s from './ProductsList.module.css';
import ProductItem from '../ProductItem/ProductItem.jsx';
import ProductRatingItem from '../ProductRatingItem/ProductRatingItem.jsx';
import {PropValidator} from '../../prop-validator';

const ProductsList = ({products}) => {
  return (
    <div className={s.productsList}>
      {
        products.map((product) => (
          <ProductItem
            key={product.id}
            {...product}
            ratingComponent={ProductRatingItem}
          />
        ))
      }
    </div>
  )
}

ProductsList.propTypes = {
  products: pt.arrayOf(PropValidator.PRODUCT_INFO).isRequired
};

export default ProductsList;
