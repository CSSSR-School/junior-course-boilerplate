import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { memoize } from 'lodash';

import ListProducts from '../../components/list-products';

class ListProductsContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.filterProductsList = memoize(
      this.filterProductsList,
      params => params
    );
  }
  filterProductsList = (params = {}, products = []) => {
    const {
      price: {
        min: { value: minValue },
        max: { value: maxValue }
      },
      discount: {
        total: { value: discountValue }
      }
    } = params;
    const filteredProducts = products.filter(
      ({ price, discount: productDiscount }) =>
        price >= minValue &&
        price <= maxValue &&
        productDiscount >= discountValue
    );
    const categoriesList = this.props.filterProductsFilterField(
      this.props.filter,
      'categories',
      'isActive'
    );

    if (categoriesList.length !== 0) {
      return filteredProducts.filter(({ category }) =>
        categoriesList.includes(category)
      );
    }
    return filteredProducts;
  };

  render() {
    const { filter, list } = this.props;
    return <ListProducts list={this.filterProductsList(filter, list)} />;
  }
}

const mapStateToProps = state => ({
  filter: state.productsFilter,
  list: state.productsList
});

export default connect(mapStateToProps)(ListProductsContainer);
