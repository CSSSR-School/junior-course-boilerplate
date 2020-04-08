import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

import styles from './products.module.scss';

import FilterProductsContainer from '../../containers/filter-products-container';
import ListProductsContainer from '../../containers/list-products-container';
import HeaderProducts from '../header-products';

const Products = props => {
  return (
    <section className={classnames(styles.products)}>
      <div className={classnames(styles.productsRow)}>
        <aside
          className={classnames(styles.productsCol, styles.productsColLeft)}
        >
          <FilterProductsContainer {...props} />
        </aside>
        <div
          className={classnames(styles.productsCol, styles.productsColRight)}
        >
          <HeaderProducts header={'Список товаров'} />
          <ListProductsContainer {...props} />
        </div>
      </div>
    </section>
  );
};

Products.propTypes = {
  filterProductsFilterField: propTypes.func
};

export default Products;
