import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { productsActions, productsSelectors } from '../../redux/';
import App from '../../components/app';

class AppContainer extends PureComponent {
  componentDidMount() {
    this.props.fetchProducts('https://course-api.csssr.school/products');
  }

  render() {
    return <App products={this.props.products} />;
  }
}

const mapStateToProps = state => {
  return {
    products: productsSelectors.getProducts(state),
  };
};

const mapDispatchToProps = dispatch => {
  const { fetchProducts } = bindActionCreators(productsActions, dispatch);

  return { fetchProducts };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
