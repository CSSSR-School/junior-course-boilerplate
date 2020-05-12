import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import classnames from 'classnames';
import styles from './basket-details.module.scss';
import Row from '../row';
import Icon from '../icon';
import Header from '../header';
import BasketContainer from '../../containers/basket-container';
import List from '../list';

const BasketDetails = props => {
  const { list, goBack } = props;

  return (
    <Row
      center={
        <div className={classnames(styles.BasketDetails)}>
          <div className={classnames(styles.BasketDetailsWrapper)}>
            <Link
              to="/"
              onClick={goBack}
              className={classnames(styles.BasketDetailsLink)}
            >
              <Icon name="arrow" />
            </Link>
            <Header header="Корзина" />
          </div>
          <List list={list} />
        </div>
      }
      right={<BasketContainer />}
    />
  );
};

BasketDetails.propTypes = {
  list: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      isInStock: propTypes.bool,
      img: propTypes.string,
      title: propTypes.node,
      price: propTypes.node,
      subPriceContent: propTypes.node,
      maxRating: propTypes.number,
      rating: propTypes.number,
      discount: propTypes.number,
      category: propTypes.string
    })
  ),
  goBack: propTypes.func
};

export default BasketDetails;
