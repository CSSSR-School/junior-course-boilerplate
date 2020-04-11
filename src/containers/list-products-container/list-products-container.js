import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { productsSelectors } from '../../redux/modules/products';

import ListProducts from '../../components/list-products';

class ListProductsContainer extends PureComponent {
  render() {
    const { filter: productsFilter, list: productsList } = this.props;
    const { filterProductsList } = productsSelectors;
    return (
      <ListProducts
        list={filterProductsList({ productsFilter, productsList })}
      />
    );
  }
}

const mapStateToProps = state => {
  const { getProductsFilter, getProductsList } = productsSelectors;
  return {
    filter: getProductsFilter(state),
    list: getProductsList(state)
  };
};

export default connect(mapStateToProps)(ListProductsContainer);
