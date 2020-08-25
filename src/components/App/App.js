import React from 'react';
import Goods from '../Goods';
import Header from '../Header';
import GoodsList from '../GoodsList';

import styles from './App.module.sass';

const App = ({ products }) => {
  return (
    <div className={styles.App}>
      <Goods>
        <Header />
        <GoodsList goods={products} />
      </Goods>
    </div>
  );
};

export default App;
