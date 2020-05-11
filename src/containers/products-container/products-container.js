import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { productsSelectors } from '../../redux/';
import Products from '../../components/products';

class ProductsContainer extends PureComponent {
  render() {
    const {
      productsData: { list, isLoading, error }
    } = this.props;

    const fetchData = { listLength: list.length, isLoading, error };

    return <Products fetchData={fetchData} />;
  }
}

const mapStateToProps = state => {
  return {
    productsData: productsSelectors.getProducts(state)
  };
};

export default connect(mapStateToProps)(ProductsContainer);
