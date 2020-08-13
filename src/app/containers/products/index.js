import React from 'react';
import { connect } from 'react-redux'

import ProductList from '../../components/productList/index';
import BaseComponent from '../../components/baseComponent/index';
import EmptyProducts from '../../components/emptyProducts/index';
import { visibleProductsSelector } from '../../store/selectors';

class Products extends BaseComponent {
  render() {
    if(this.props.products.length > 0) {
      return (<ProductList products={ this.props.products }/>)
    }

    return (<EmptyProducts />)
  }
};

const mapStateToProps = function(state) {
  return {
    products: visibleProductsSelector(state)
  }
}

export default connect(mapStateToProps)(Products);
