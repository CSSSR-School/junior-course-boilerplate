import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import classnames from 'classnames';
import styles from './app.module.scss';
import ProductDetailsContainer from '../../containers/product-details-container';
import NotFound from '../not-found';
import ProductsContainer from '../../containers/products-container';

const App = () => {
  return (
    <div className={classnames(styles.App)}>
      <div className={classnames(styles.AppContainer)}>
        <Switch>
          <Route path="/" exact component={ProductsContainer} />

          <Route
            path="/product/:id"
            exact
            render={({ match: { params } }) => {
              const { id } = params;

              return <ProductDetailsContainer id={Number(id)} />;
            }}
          />

          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
};

export default withRouter(App);
