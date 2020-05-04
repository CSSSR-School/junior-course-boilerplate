import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import classnames from 'classnames';
import styles from './app.module.scss';
import Products from '../products';
import Header from '../header';
import Icon from '../icon';
import ProductDetailsContainer from '../../containers/product-details-container';

const App = props => {
  return (
    <div className={classnames(styles.App)}>
      <Route
        path="/"
        exact
        render={() => {
          const {
            data: { items, isLoading, error }
          } = props;

          if (isLoading) {
            return (
              <div className={styles.AppSpinner}>
                <Icon name="spinner" />
              </div>
            );
          } else if (error) {
            return (
              <>
                <Header
                  header={error}
                  className={classnames(styles.AppHeader)}
                />
                <Icon name="ill-planet" />
              </>
            );
          } else if (items.length === 0) {
            return (
              <>
                <Header
                  header={'Товары не найдены'}
                  className={classnames(styles.AppHeader)}
                />
                <Icon name="ill-planet" />
              </>
            );
          }

          return (
            <>
              <Header
                header={'Список товаров'}
                className={classnames(
                  styles.AppHeader,
                  styles.AppHeaderProducts
                )}
              />
              <Products />
            </>
          );
        }}
      />

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
