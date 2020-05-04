import React from 'react';
import styles from './products.module.scss';
import FilterContainer from '../../containers/filter-container/';
import ListContainer from '../../containers/list-container';
import PaginationContainer from '../../containers/pagination-container';

const Products = () => {
  return (
    <div className={styles.Products}>
      <aside className={styles.ProductsSidebar}>
        <FilterContainer />
      </aside>

      <main className={styles.ProductsMain}>
        <ListContainer />
        <PaginationContainer />
      </main>
    </div>
  );
};

export default Products;
