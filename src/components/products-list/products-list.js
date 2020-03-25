import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

import './products-list.scss';

import ProductsListItem from 'csssr-school-product-card';
import RatingItem from '../rating-item';
import Price from '../price';
import LogRender from '../log-render';

class ProductsList extends LogRender {
  render() {
    const { productsList } = this.props;
    const elements = productsList.map(product => {
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
          className={classnames('products__list-item', 'list-item-products')}
        >
          <ProductsListItem
            isInStock={isInStock}
            img={img}
            title={title}
            maxRating={maxRating}
            rating={rating}
            price={<Price value={price} />}
            subPriceContent={
              subPriceContent ? (
                <Price value={subPriceContent} isPrimary={false} />
              ) : (
                ''
              )
            }
            ratingComponent={RatingItem}
          />
        </li>
      );
    });

    return <ul className="products__list">{elements}</ul>;
  }
}

ProductsList.propTypes = {
  productsList: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      isInStock: propTypes.bool,
      img: propTypes.string,
      title: propTypes.node,
      price: propTypes.node,
      subPriceContent: propTypes.node,
      maxRating: propTypes.number,
      rating: propTypes.number
    })
  )
};

export default ProductsList;
