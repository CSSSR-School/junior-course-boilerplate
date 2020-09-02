import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

import ProductList from '../../components/productList/index';
import EmptyProducts from '../../components/emptyProducts/index';
import { visibleProductsSelector } from '../../store/selectors';

class Products extends PureComponent {
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
