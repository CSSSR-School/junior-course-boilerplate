import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import styles from '../products.module.scss';
import ListContainer from '../../../containers/list-container';
import Header from '../../header';
import Icon from '../../icon';

const renderList = ({ listLength, isLoading, error }) => {
  if (isLoading) {
    return (
      <div
        className={classnames(
          styles.ProductsIcon,
          styles.ProductsIconCenterVertically
        )}
      >
        <Icon name="spinner" />
      </div>
    );
  } else if (error) {
    return (
      <>
        <Header className={styles.ProductsHeader} header={error} />
        <div className={styles.ProductsIcon}>
          <Icon name="ill-planet" />
        </div>
      </>
    );
  } else if (listLength === 0) {
    return (
      <>
        <Header
          className={styles.ProductsHeader}
          header={'Товары не найдены'}
        />
        <div className={styles.ProductsIcon}>
          <Icon name="ill-planet" />
        </div>
      </>
    );
  } else {
    return (
      <>
        <Header className={styles.ProductsHeader} header={'Список товаров'} />
        <ListContainer />
      </>
    );
  }
};

renderList.propTypes = {
  listLength: propTypes.number,
  isLoading: propTypes.bool,
  error: propTypes.string
};

export { renderList };
