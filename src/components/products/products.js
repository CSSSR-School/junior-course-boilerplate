import React, { PureComponent } from 'react';
import classnames from 'classnames';

import styles from './products.module.scss';

import FilterProductsContainer from '../../containers/filter-products-container';
import ListProductsContainer from '../../containers/list-products-container';
import HeaderProducts from '../header-products';

class Products extends PureComponent {
  filterProductsFilterField = (filterParams, groupName, fieldName) => {
    const filterField = filterParams[groupName];
    return Object.keys(filterField).filter(
      value => filterField[value][fieldName]
    );
  };
  render() {
    return (
      <section className={classnames(styles.products)}>
        <div className={classnames(styles.productsRow)}>
          <aside
            className={classnames(styles.productsCol, styles.productsColLeft)}
          >
            <FilterProductsContainer
              filterProductsFilterField={this.filterProductsFilterField}
            />
          </aside>
          <div
            className={classnames(styles.productsCol, styles.productsColRight)}
          >
            <HeaderProducts header={'Список товаров'} />
            <ListProductsContainer
              filterProductsFilterField={this.filterProductsFilterField}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Products;
