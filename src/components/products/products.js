import React from 'react';
import propTypes from 'prop-types';
import styles from './products.module.scss';
import classnames from 'classnames';
import FilterContainer from '../../containers/filter-container/';
import PaginationContainer from '../../containers/pagination-container';
import BasketContainer from '../../containers/basket-container';
import { renderList } from './utils';

const Products = ({ fetchData }) => {
  return (
    <div className={styles.Products}>
      <aside
        className={classnames(
          styles.ProductsSidebar,
          styles.ProductsSidebarLeft
        )}
      >
        <FilterContainer />
      </aside>

      <main className={styles.ProductsMain}>
        <div className={styles.ProductsMainWrapper}>
          {renderList(fetchData)}
        </div>
        <PaginationContainer />
      </main>

      <aside
        className={classnames(
          styles.ProductsSidebar,
          styles.ProductsSidebarRight
        )}
      >
        <BasketContainer />
      </aside>
    </div>
  );
};

Products.propTypes = {
  fetchData: propTypes.shape({
    listLength: propTypes.number,
    isLoading: propTypes.bool,
    error: propTypes.string
  })
};

export default Products;
