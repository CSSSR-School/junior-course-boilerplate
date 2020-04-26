import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import classnames from 'classnames';

import styles from './app.module.scss';
import Products from '../products';
import ProductDetailsContainer from '../../containers/product-details-container';

const App = () => {
  return (
    <div className={classnames(styles.App)}>
      <Route path="/" exact component={Products} />

      <Route
        path="/product/:id"
        exact
        render={({ match: { params } }) => {
          const { id } = params;
          return <ProductDetailsContainer id={Number(id)} />;
        }}
      />
    </div>
  );
};

export default withRouter(App);
