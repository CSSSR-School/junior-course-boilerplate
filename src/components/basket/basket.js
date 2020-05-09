import React from 'react';
import propTypes from 'prop-types';
import styles from './basket.module.scss';
import classnames from 'classnames';
import Icon from '../icon';
import Delayed from '../../containers/delayed-container';

const Basket = props => {
  const {
    productsListLength,
    basketListLength,
    isSending,
    isSuccessful,
    handleClick
  } = props;

  const isDisabled = isSending || basketListLength === 0;

  return (
    <form className={styles.Basket}>
      <section className={styles.BasketWrapper}>
        <Icon name="basket" />
        <h3 className={styles.BasketHeader}>Корзина</h3>
        <div className={styles.BasketInner}>
          <input
            className={styles.BasketCounter}
            type="text"
            name="counter"
            value={basketListLength}
            maxLength={productsListLength}
            readOnly={true}
          />
          <div className={styles.BasketGhost}>{basketListLength}</div>
        </div>
        {isSuccessful && (
          <Delayed showWhileTimeout={1000}>
            <Icon name="tick" />
          </Delayed>
        )}
      </section>

      <input
        className={classnames(styles.BasketButton, {
          [styles.BasketButtonDisabled]: isDisabled
        })}
        type="button"
        value="Очистить корзину"
        disabled={isDisabled}
        onClick={handleClick}
      />
    </form>
  );
};

Basket.propTypes = {
  productsListLength: propTypes.number,
  basketListLength: propTypes.number,
  isSending: propTypes.bool,
  isSuccessful: propTypes.bool,
  handleClick: propTypes.func
};

export default Basket;
