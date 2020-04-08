import React from 'react';
import classnames from 'classnames';

import styles from './app.module.scss';
import Products from '../products';

const App = () => {
  return (
    <main className={classnames(styles.app)}>
      <Products />
    </main>
  );
};

export default App;
