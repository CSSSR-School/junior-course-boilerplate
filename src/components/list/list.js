import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import classnames from 'classnames';
import styles from './list.module.scss';
import ProductCard from 'csssr-school-product-card';
import { maxBy } from 'csssr-school-utils';
import ProductRating from '../product-rating';
import Price from '../price';
import ProductToggleContainer from '../../containers/product-toggle-container';

const List = props => {
  const { list } = props;

  const listElements = list.map(product => {
    const {
      id,
      name,
      img,
      price,
      status,
      subPriceContent,
      maxRating = maxBy(item => item.stars, list).stars,
      stars
    } = product;

    return (
      <Link
        to={`/product/${id}`}
        key={id}
        className={classnames(styles.ListItem)}
      >
        <ProductCard
          isInStock={status === 'IN_STOCK'}
          img={img}
          title={name}
          maxRating={maxRating}
          rating={stars}
          price={<Price price={price} />}
          subPriceContent={
            subPriceContent ? (
              <Price price={subPriceContent} isPrimary={false} />
            ) : (
              ''
            )
          }
          ratingComponent={ProductRating}
        />

        <ProductToggleContainer id={id} />
      </Link>
    );
  });

  return <ul className={classnames(styles.List)}>{listElements}</ul>;
};

List.propTypes = {
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
  )
};

export default List;
