import React from 'react';
import classnames from 'classnames';

import styles from './app.module.scss';
import ProductsContainer from '../../containers/products-container';

const App = () => {
  return (
    <main className={classnames(styles.app)}>
      <ProductsContainer />
    </main>
  );
};

export default App;
