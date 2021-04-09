import React, {memo} from 'react';
import s from './CartDetails.module.css';
import pt from 'prop-types';
import {PropValidator} from '../../prop-validator';
import CartContainer from '../../containers/CartContainer.jsx';
import ProductList from '../ProductsList/ProductsList.jsx';
import {PlanetIcon} from '../Icons';

const CartDetails = ({cartProductsList}) => {
  return (
    <>
      {
        cartProductsList.length ?
          <ProductList products={cartProductsList}/>
          :
          <div className={s.cartEmpty}>
            <h2>Корзина пуста</h2>
            <PlanetIcon/>
          </div>
      }
      <CartContainer isDetailMode/>
    </>
  );
};

CartDetails.propTypes = {
  cartProductsList: pt.arrayOf(PropValidator.PRODUCT_INFO).isRequired
};

export default memo(CartDetails);
