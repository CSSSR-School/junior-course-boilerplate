import React from 'react';
import PropTypes from 'prop-types';

import ProductItem from 'csssr-school-product-card';

const ratingComponent = ({ isFilled }) => {
  return <div className={isFilled && "starFill"} />;
};


const List = ({props}) => {
  return (
 		<div>
 			{
        props.map((item) => 
         ( 
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
        ))
      }

 		</div>
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

