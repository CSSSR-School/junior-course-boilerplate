import React from 'react';
import classnames from 'classnames';
import styles from '../app.module.scss';
import Products from '../../products';
import Header from '../../header';
import Icon from '../../icon';

const renderContent = ({ list, isLoading, error }) => {
  if (isLoading) {
    return (
      <div className={styles.AppSpinner}>
        <Icon name="spinner" />
      </div>
    );
  } else if (error) {
    return (
      <>
        <Header header={error} className={classnames(styles.AppHeader)} />
        <Icon name="ill-planet" />
      </>
    );
  } else if (list.length === 0) {
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
        className={classnames(styles.AppHeader, styles.AppHeaderProducts)}
      />
      <Products />
    </>
  );
};

export { renderContent };
