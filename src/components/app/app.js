import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import classnames from 'classnames';
import styles from './app.module.scss';
import ProductDetailsContainer from '../../containers/product-details-container';
import { renderContent } from './utils/render-content';

const App = props => {
  const { products } = props;

  return (
    <div className={classnames(styles.App)}>
      <Route path="/" exact render={() => renderContent(products)} />

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
