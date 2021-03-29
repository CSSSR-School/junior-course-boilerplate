import React, {memo} from 'react';
import pt from 'prop-types';
import s from './ProductsList.module.css';
import {PropValidator} from '../../prop-validator';
import ProductItem from '../ProductItem/ProductItem.jsx';
import Title from '../Title/Title.jsx';

const ProductsList = ({products}) => {

  const renderProductsList = (products) => (
    products.map((product) => (
      <li key={product.id}>
        <ProductItem product={product}/>
      </li>
    ))
  );

  return (
    <div>
      <Title>Список товаров</Title>
      {
        !products.length ?
          <p className={s.noProducts}>Список товаров пуст</p>
          :
          <ul className={s.productsList}>
            {renderProductsList(products)}
          </ul>
      }
    </div>
  );
};

ProductsList.propTypes = {
  products: pt.arrayOf(PropValidator.PRODUCT_INFO).isRequired
};

ProductsList.defaultProps = {
  products: []
};

export default memo(ProductsList);
