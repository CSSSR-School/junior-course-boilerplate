import React from 'react';
import PropTypes from 'prop-types';

import ProductItem from 'csssr-school-product-card';
import starFill from './img/starFill.png';
import starEmpty from './img/starEmpty.png';

import styles from './List.module.css';

const ratingComponent = ({ isFilled }) => {
  return <img src={(isFilled) ? starFill : starEmpty} />;
};

const List = ({props}) => {
  console.log(styles);
  return (
    <ul className={styles.goodsList} > {
    props.map((item) => 
     ( 
      <li className={styles.goodsList__item} key={item.id}>
        <ProductItem 
          key={item.id}
          isInStock={item.isInStock}
          img={item.img}
          title={item.title}
          price={item.price}
          subPriceContent={item.subPriceContent}
          maxRating={item.maxRating}
          rating={item.rating}
          ratingComponent={ratingComponent}
        />
      </li>
    ))} </ul>
  );
};

List.propTypes = {
  isInStock: PropTypes.bool,
  img: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  subPriceContent: PropTypes.string,
  maxRating: PropTypes.number,
  rating: PropTypes.number,
  ratingComponent: PropTypes.func,
};


export default List;

