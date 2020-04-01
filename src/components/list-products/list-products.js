import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

import styles from './list-products.module.scss';

import ItemListProducts from 'csssr-school-product-card';
import ItemRating from '../item-rating';
import Price from '../price';

class ListProducts extends PureComponent {
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
          className={classnames('itemListProducts', styles.listProductsItem)}
        >
          <ItemListProducts
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
            ratingComponent={ItemRating}
          />
        </li>
      );
    });

    return (
      <ul className={classnames('productsList', styles.listProducts)}>
        {elements}
      </ul>
    );
  }
}

ListProducts.propTypes = {
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

export default ListProducts;
