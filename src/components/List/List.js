import React from 'react';
import PropTypes from 'prop-types';

import ProductItem from 'csssr-school-product-card';
import starFill from './img/starFill.png';
import starEmpty from './img/starEmpty.png';

import './List.module.css';

const ratingComponent = ({ isFilled }) => {
  return <img src={(isFilled) ? starFill : starEmpty} className='star'/>;
};


const List = ({props}) => {
  return (
    props.map((item) => 
     ( 
      <li key={item.id}>
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
    ))
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

