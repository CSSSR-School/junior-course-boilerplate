import React, { PureComponent } from 'react';
import Products from '../../components/products';

class ProductsContainer extends PureComponent {
  filterProductsFilterField = (filterParams, groupName, fieldName) => {
    const filterField = filterParams[groupName];
    return Object.keys(filterField).filter(
      value => filterField[value][fieldName]
    );
  };
  render() {
    return (
      <Products filterProductsFilterField={this.filterProductsFilterField} />
    );
  }
}

export default ProductsContainer;
