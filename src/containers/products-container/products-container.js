import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { productsActions, productsSelectors } from '../../redux/';
import Products from '../../components/products';
import { withApi } from '../../components/hoc-helpers';

class ProductsContainer extends PureComponent {
  componentDidMount() {
    this.props.fetchProducts(`${this.props.apiBase}products`);
  }

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

const mapDispatchToProps = dispatch => {
  const { fetchProducts } = bindActionCreators(productsActions, dispatch);

  return { fetchProducts };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withApi(ProductsContainer));
