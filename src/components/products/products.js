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
      updateProductsList
    } = this.props;
    return (
      <section className={classnames(styles.products)}>
        <div className={classnames(styles.productsRow)}>
          <aside
            className={classnames(styles.productsCol, styles.productsColLeft)}
          >
            <FilterProducts
              filter={filter}
              updateProductsList={updateProductsList}
            />
          </aside>
          <div
            className={classnames(styles.productsCol, styles.productsColRight)}
          >
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
    min: propTypes.number,
    max: propTypes.number,
    isValid: propTypes.bool
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
  updateProductsList: propTypes.func
};

export default Products;
