import React, {memo} from 'react';
import pt from 'prop-types';
import s from './ProductsList.module.css';
import {PropValidator} from '../../prop-validator';
import ProductItemContainer from '../../containers/ProductItemContainer.jsx';
import {PlanetIcon} from '../Icons';

const ProductsList = ({products}) => {

  const renderProducts = () => (
    products.map((product) => (
      <li key={product.id}>
        <ProductItemContainer product={product}/>
      </li>
    ))
  );

  return (
    <>
      {
        !products.length ?
          <div className={s.productsListEmpty}>
            <h2>Ничего не найдено</h2>
            <PlanetIcon/>
          </div>
          :
          <ul className={s.productsList}>
            {renderProducts()}
          </ul>

      }
    </>
  );
};

ProductsList.propTypes = {
  products: pt.arrayOf(PropValidator.PRODUCT_INFO).isRequired
};

export default memo(ProductsList);
