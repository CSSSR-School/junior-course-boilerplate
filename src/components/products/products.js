import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

import styles from './products.module.scss';

import FilterProducts from '../filter-products';
import HeaderProducts from '../header-products';
import ListProducts from '../list-products';
import LogRender from '../log-render';

class Products extends LogRender {
  render() {
    const {
      filter,
      list,
      updateProductsFilterFieldValidty,
      updateProductsFilterFieldPrice,
      updateProductsFilterValidity
    } = this.props;
    return (
      <section className={classnames(styles.products)}>
        <div className={classnames(styles.productsRow)}>
        <aside className={classnames(styles.productsCol, styles.productsColLeft)}>
            <FilterProducts
              filter={filter}
              updateProductsFilterFieldValidty={
                updateProductsFilterFieldValidty
              }
              updateProductsFilterFieldPrice={updateProductsFilterFieldPrice}
              updateProductsFilterValidity={updateProductsFilterValidity}
            />
          </aside>
          <div className={classnames(styles.productsCol, styles.productsColRight)}>
            <HeaderProducts header={'Список товаров'} />
            <ListProducts productsList={list} />
          </div>
        </div>
      </section>
    );
  }
}

Products.propTypes = {
  filter: propTypes.shape({
    fields: propTypes.shape({
      min: propTypes.shape({
        price: propTypes.number,
        isValid: propTypes.bool
      }),
      max: propTypes.shape({
        price: propTypes.number,
        isValid: propTypes.bool
      })
    })
  }),
  list: propTypes.arrayOf(
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
  ),
  updateProductsFilterFieldValidty: propTypes.func,
  updateProductsFilterValidity: propTypes.func,
  updateProductsFilterFieldPrice: propTypes.func
};

export default Products;
