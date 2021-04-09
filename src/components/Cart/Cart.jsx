import React, {memo} from 'react';
import {Link, withRouter} from 'react-router-dom';
import pt from 'prop-types';
import s from './Cart.module.css';
import {numberWithSpaces} from '../../helpers';
import {CartIcon, CheckIcon} from '../Icons';
import ErrorBlock from '../ErrorBlock/ErrorBlock.jsx';
import Button from '../Button/Button.jsx';

const Cart = ({
  cartList,
  cartStatus,
  sum,
  totalCartItems,
  isDetailMode = false,
  saveCart,
  resetCart
}) => {

  const {
    pending,
    success,
    error
  } = cartStatus;

  const saveCartHandler = () => saveCart(cartList);

  return (
    <div className={s.cart}>

      {error && <ErrorBlock>Ошибка! Корзина не сохранена.</ErrorBlock>}

      <div className={s.cartHeader}>
        <CartIcon/>
        <h2 className={s.cartTitle}>Корзина</h2>
        {success && <CheckIcon/>}
      </div>

      <p className={s.cartAmount}>Товаров: {totalCartItems}</p>
      <p className={s.cartSum}>Всего: <span>{numberWithSpaces(sum)}&nbsp;&#8381;</span></p>

      {
        totalCartItems > 0 &&
        <Button
          type='reset'
          disabled={pending}
          onClick={resetCart}
        >
          Очистить корзину
        </Button>
      }

      <Button
        type='button'
        disabled={pending || success}
        onClick={saveCartHandler}
      >
        Сохранить корзину
      </Button>

      {
        !isDetailMode &&
        <Link
          to='/cart'
          className={s.link}
        >
          Перейти в корзину
        </Link>
      }
    </div>
  );
};

Cart.propTypes = {
  cartList: pt.arrayOf(pt.node).isRequired,
  cartStatus: pt.object.isRequired,
  totalCartItems: pt.number.isRequired,
  sum: pt.number.isRequired,
  isDetailMode: pt.bool,
  saveCart: pt.func.isRequired,
  resetCart: pt.func.isRequired
};

export default withRouter(memo(Cart));
