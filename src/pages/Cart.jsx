import React from 'react';
import Title from '../components/Title/Title.jsx';
import CartDetailsContainer from '../containers/CartDetailsContainer.jsx';

const Cart = () => {
  return (
    <div className='cart'>
      <Title isLinkable>Корзина</Title>
      <CartDetailsContainer/>
    </div>
  );
};

export default Cart;
