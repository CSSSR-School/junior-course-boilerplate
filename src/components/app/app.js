import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import classnames from 'classnames';
import styles from './app.module.scss';
import ProductDetailsContainer from '../../containers/product-details-container';
import NotFound from '../not-found';
import { renderContent } from './utils/render-content';

const App = props => {
  const { products } = props;

  return (
    <div className={classnames(styles.App)}>
      <Switch>
        <Route path="/" exact render={() => renderContent(products)} />

        <Route
          path="/product/:id"
          exact
          render={({ match: { params } }) => {
            const { id } = params;

            return <ProductDetailsContainer id={Number(id)} />;
          }}
        />

        <Route component={NotFound}/>
      </Switch>
    </div>
  );
};

export default withRouter(App);
