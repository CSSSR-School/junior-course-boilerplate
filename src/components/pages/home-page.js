import React from 'react';

import styles from './home-page.module.scss';
import Header from '../header';
import FilterContainer from '../../containers/filter-container/';
import ListContainer from '../../containers/list-container';
import PaginationContainer from '../../containers/pagination-container';

const HomePage = () => {
  return (
    <div className={styles.HomePage}>
      <div className={styles.HomePageHeader}>
        <Header header="Список Товаров" />
      </div>
      <div className={styles.HomePageBody}>
        <aside className={styles.HomePageSidebar}>
          <FilterContainer />
        </aside>
        <main className={styles.HomePageMain}>
          <ListContainer />
          <PaginationContainer />
        </main>
      </div>
    </div>
  );
};

export default HomePage;
