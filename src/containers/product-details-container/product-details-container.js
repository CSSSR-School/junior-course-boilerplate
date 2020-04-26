import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { goBack } from 'connected-react-router';

import { dataSelectors } from '../../redux/modules/data';
import ProductDetails from '../../components/product-details';

class ProductDetailsContainer extends PureComponent {
  render() {
    const { product } = this.props;

    return <ProductDetails product={product} />;
  }
}

const mapStateToProps = (state, { id }) => {
  return {
    product: dataSelectors.getItemById(state, id)
  };
};

export default connect(mapStateToProps, { goBack })(ProductDetailsContainer);
