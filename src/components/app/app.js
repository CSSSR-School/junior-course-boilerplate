import React from 'react';
import classnames from 'classnames';

import styles from './app.module.scss';
import Header from '../header';
import FilterContainer from '../../containers/filter-container';
import ListContainer from '../../containers/list-container';
import PaginationContainer from '../../containers/pagination-container';

const App = () => {
  return (
    <div className={classnames(styles.App)}>
      <div className={styles.AppHeader}>
        <Header header="Список Товаров" />
      </div>
      <div className={styles.AppBody}>
        <aside className={styles.AppSidebar}>
          <FilterContainer />
        </aside>
        <main className={styles.AppMain}>
          <ListContainer />
          <PaginationContainer />
        </main>
      </div>
    </div>
  );
};

export default App;
