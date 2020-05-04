import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { goBack } from 'connected-react-router';
import { maxBy } from 'csssr-school-utils';
import { dataSelectors } from '../../redux';
import ProductDetails from '../../components/product-details';

class ProductDetailsContainer extends PureComponent {
  render() {
    const { product = {}, items = [] } = this.props;

    const maxRating =
      items.length !== 0
        ? maxBy(item => item.stars, items).stars
        : product.stars;

    return <ProductDetails product={product} maxRating={maxRating} />;
  }
}

const mapStateToProps = (state, { id }) => {
  return {
    product: dataSelectors.getItemById(state, id),
    items: dataSelectors.getItems(state)
  };
};

export default connect(mapStateToProps, { goBack })(ProductDetailsContainer);
