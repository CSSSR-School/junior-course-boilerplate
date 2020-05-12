import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import classnames from 'classnames';
import styles from './app.module.scss';
import NotFound from '../not-found';
import ProductsPage from '../pages/products-page';
import ProductDetailsPage from '../pages/product-details-page';

const App = () => {
  return (
    <div className={classnames(styles.App)}>
      <div className={classnames(styles.AppContainer)}>
        <Switch>
          <Route path="/" exact component={ProductsPage} />

          <Route
            path="/product/:id"
            exact
            render={({ match: { params } }) => {
              const { id } = params;

              return <ProductDetailsPage id={Number(id)} />;
            }}
          />

          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
};

export default withRouter(App);
