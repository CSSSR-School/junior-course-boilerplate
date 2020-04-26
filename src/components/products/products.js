import React from 'react';

import styles from './products.module.scss';
import Header from '../header';
import FilterContainer from '../../containers/filter-container/';
import ListContainer from '../../containers/list-container';
import PaginationContainer from '../../containers/pagination-container';

const HomePage = () => {
  return (
    <div className={styles.Products}>
      <div className={styles.ProductsHeader}>
        <Header header="Список Товаров" />
      </div>
      <div className={styles.ProductsBody}>
        <aside className={styles.ProductsSidebar}>
          <FilterContainer />
        </aside>
        <main className={styles.ProductsMain}>
          <ListContainer />
          <PaginationContainer />
        </main>
      </div>
    </div>
  );
};

export default HomePage;
