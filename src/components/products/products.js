import React from 'react';
// import propTypes from 'prop-types';
import classnames from 'classnames';

import styles from './products.module.scss';

import { productsSelectors } from '../../redux/modules/products';
import FilterProductsContainer from '../../containers/filter-products-container';
// import ListProducts from '../list-products';
import PaginationContainer from '../../containers/pagination-container';
import HeaderProducts from '../header-products';

const Products = props => {
  const { state } = props;
  const { filterProductsList } = productsSelectors;
  const list = filterProductsList(state);
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
          {list.length !== 0 ? (
            <>
              <HeaderProducts header={'Список товаров'} />
              <PaginationContainer />
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
};

// Products.propTypes = {
//   filterProductsFilterField: propTypes.func
// };

export default Products;
