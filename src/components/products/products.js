import React from 'react';
import styles from './products.module.scss';
import classnames from 'classnames';
import FilterContainer from '../../containers/filter-container/';
import ListContainer from '../../containers/list-container';
import PaginationContainer from '../../containers/pagination-container';
import BasketContainer from '../../containers/basket-container';

const Products = () => {
  return (
    <div className={styles.Products}>
      <aside className={classnames(styles.ProductsSidebar, styles.ProductsSidebarLeft)}>
        <FilterContainer />
      </aside>

      <main className={styles.ProductsMain}>
        <ListContainer />
        <PaginationContainer />
      </main>

      <aside className={classnames(styles.ProductsSidebar, styles.ProductsSidebarRight)}>
        <BasketContainer />
      </aside>
    </div>
  );
};

export default Products;
