import React from 'react';
import ProductItem from 'csssr-school-product-card';
import RatingComponent from '../RatingComponent/RatingComponent';
import logRender from '../logRender/logRender';

class ProductCard extends logRender {
  render() {
    const{isInStock,img,title,price,maxRating,rating } = this.props
    return (
      <ProductItem isInStock={isInStock}
                   img={img}
                   title={title}
                   price={price}
                   subPriceContent={''}
                   maxRating={maxRating}
                   rating={rating}
                   ratingComponent={RatingComponent}
      />
    )
  }
}

export default ProductCard
