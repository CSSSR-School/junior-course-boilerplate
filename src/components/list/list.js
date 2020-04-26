import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

import styles from './list.module.scss';

import ItemList from 'csssr-school-product-card';
import ItemRating from '../product-rating';
import Price from '../price';

const List = props => {
  const { list, handleClick } = props;
  const listElements = list.map(product => {
    const {
      id,
      isInStock,
      img,
      title,
      price,
      subPriceContent,
      maxRating,
      rating
    } = product;

    return (
      <li
        key={id}
        className={classnames(styles.ListItem)}
        onClick={() => handleClick(id)}
      >
        <ItemList
          isInStock={isInStock}
          img={img}
          title={title}
          maxRating={maxRating}
          rating={rating}
          price={<Price price={price} />}
          subPriceContent={
            subPriceContent ? (
              <Price price={subPriceContent} isPrimary={false} />
            ) : (
              ''
            )
          }
          ratingComponent={ItemRating}
        />
      </li>
    );
  });

  return (
    <ul className={classnames(styles.List)}>
      {listElements}
    </ul>
  );
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
