import React from 'react';
import { connect } from 'react-redux';

import LogRender from '../../components/LogRender/LogRender';
import ProductList from '../../components/ProductList/ProductList';

import { productsAndPagesSelector } from '../../store/store';


class ProductListContainer extends LogRender {
  render() {
    return (
      <ProductList
        { ...this.props }
      />
    )
  }
}

const mapStateToProps = (state) => ({
  products: productsAndPagesSelector(state).products,
});

export default connect(mapStateToProps)(ProductListContainer);
