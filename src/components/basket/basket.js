import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './basket.module.scss';
import Icon from '../icon';
import Delayed from '../../containers/delayed-container';

const Basket = props => {
  const { sum, basketListLength, isSending, isSuccessful, handleClick } = props;

  const isDisabled = isSending || basketListLength === 0;

  return (
    <form className={styles.Basket}>
      <section className={styles.BasketWrapper}>
        <Icon name="basket" />
        <h3 className={styles.BasketHeader}>Корзина</h3>
        <div className={styles.BasketAmount}>
          Товаров
          <div className={styles.BasketAmountValue}>{basketListLength}</div>
          {isSuccessful && (
            <Delayed showWhileTimeout={1000}>
              <Icon name="tick" />
            </Delayed>
          )}
        </div>
        <div className={styles.BasketSum}>
          Всего
          <div className={styles.BasketSumValue}>
            {sum.toLocaleString('en-US').replace(/,/g, ' ')}&nbsp;&#8381;
          </div>
        </div>
      </section>

      <button
        className={classnames(styles.BasketButton, {
          [styles.BasketButtonDisabled]: isDisabled
        })}
        disabled={isDisabled}
        onClick={event => handleClick(event)}
      >
        Очистить корзину
      </button>

      <button
        className={classnames(styles.BasketButton, {
          [styles.BasketButtonDisabled]: isDisabled
        })}
        disabled={isDisabled}
        onClick={event => handleClick(event)}
      >
        Cохранить корзину
      </button>

      <Link
        to={{ pathname: '/basket' }}
        className={classnames(styles.BasketLink)}
      >
        Перейти в корзину
      </Link>
    </form>
  );
};

Basket.propTypes = {
  sum: propTypes.number,
  basketListLength: propTypes.number,
  isSending: propTypes.bool,
  isSuccessful: propTypes.bool,
  handleClick: propTypes.func
};

export default Basket;
