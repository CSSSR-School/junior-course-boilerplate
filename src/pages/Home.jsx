import React, {memo} from 'react';
import pt from 'prop-types';
import {PropValidator} from '../prop-validator';
import {connect} from 'react-redux';
import {getProducts} from '../state/modules/product';
import Title from '../components/Title/Title.jsx';
import ProductFilterContainer from '../containers/ProductFilterContainer.jsx';
import ProductsListContainer from '../containers/ProductsListContainer.jsx';
import CartContainer from '../containers/CartContainer.jsx';
import PaginationContainer from '../containers/PaginationContainer.jsx';
import NoProduct from '../components/NoProduct/NoProduct.jsx';

const Home = ({productsList}) => {

  if (!productsList.length) {
    return (
      <NoProduct
        title='Товары не найдены'
        isLinkable={false}
      />
    );
  }

  return (
    <div className='dashboard'>
      <Title>Список товаров</Title>
      <ProductFilterContainer/>
      <ProductsListContainer/>
      <CartContainer/>
      <PaginationContainer/>
    </div>
  );

};

Home.propTypes = {
  productsList: pt.arrayOf(PropValidator.PRODUCT_INFO).isRequired
};

const mapStateToProps = (state) => ({
  productsList: getProducts(state)
});

export default connect(mapStateToProps)(memo(Home));
