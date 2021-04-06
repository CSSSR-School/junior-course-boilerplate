import React, {memo} from 'react';
import {Link} from 'react-router-dom';
import pt from 'prop-types';
import s from './Cart.module.css';
import {CartIcon, CheckIcon} from '../Icons';
import ErrorBlock from '../ErrorBlock/ErrorBlock.jsx';
import Button from '../Button/Button.jsx';

const Cart = ({
  cartList,
  cartStatus,
  totalCartItems,
  onSaveCart,
  onResetCart
}) => {

  const {
    pending,
    success,
    error
  } = cartStatus;

  const saveCartHandler = () => onSaveCart(cartList);

  return (
    <div className={s.cart}>
      {error && <ErrorBlock>Ошибка! Корзина не сохранена.</ErrorBlock>}
      <div className={s.cartHeader}>
        <CartIcon/>
        <h2 className={s.cartTitle}>Корзина {totalCartItems}</h2>
        {success && <CheckIcon/>}
      </div>

      <Button
        type='button'
        disabled={pending || success}
        onClick={saveCartHandler}
      >
        Сохранить корзину
      </Button>

      {
        totalCartItems > 0 &&
        <Button
          type='reset'
          disabled={pending}
          onClick={onResetCart}
        >
          Очистить корзину
        </Button>
      }

      <Link
        to='/cart'
        className={s.link}
      >
        Перейти в корзину
      </Link>
    </div>
  );
};

Cart.propTypes = {
  cartList: pt.arrayOf(pt.node).isRequired,
  cartStatus: pt.object.isRequired,
  totalCartItems: pt.number.isRequired,
  onSaveCart: pt.func.isRequired,
  onResetCart: pt.func.isRequired
};

export default memo(Cart);
