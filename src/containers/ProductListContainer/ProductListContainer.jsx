import React from 'react';
import { connect } from 'react-redux';

import LogRender from '../../components/LogRender/LogRender';
import ProductList from '../../components/ProductList/ProductList';

class ProductListContainer extends LogRender {
  render() {
    return (
      <ProductList
        products={ this.props.products }
        minPrice={ this.props.minPrice }
        maxPrice={ this.props.maxPrice }
        discount={ this.props.discount }
        category={ this.props.category }
      />
    )
  }
}

ProductListContainer.propTypes = {};

const mapStateToProps = (state) => ({
  products: state.products,
  minPrice: state.minPrice,
  maxPrice: state.maxPrice,
  discount: state.discount,
  category: state.category,
});

export default connect(mapStateToProps)(ProductListContainer);
