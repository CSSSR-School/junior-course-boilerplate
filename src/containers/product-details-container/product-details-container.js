import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { goBack } from 'connected-react-router';
import { maxBy } from 'csssr-school-utils';
import { productsSelectors } from '../../redux';
import ProductDetails from '../../components/product-details';

class ProductDetailsContainer extends PureComponent {
  render() {
    const { product = {}, maxRating = [] } = this.props;

    return <ProductDetails product={product} maxRating={maxRating} />;
  }
}

const mapStateToProps = (state, { id }) => {
  return {
    product: productsSelectors.getProductsListItemById(state, id),
    maxRating: productsSelectors.reduceProductsList(state, maxBy, 'stars')
  };
};

export default connect(mapStateToProps, { goBack })(ProductDetailsContainer);
