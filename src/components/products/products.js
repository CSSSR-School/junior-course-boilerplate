import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

import styles from './products.module.scss';

import FilterProducts from '../filter-products';
import HeaderProducts from '../header-products';
import ListProducts from '../list-products';

class Products extends PureComponent {
  render() {
    const {
      filter,
      list,
      updateProductsFilter
    } = this.props;
    return (
      <section className={classnames(styles.products)}>
        <div className={classnames(styles.productsRow)}>
          <aside
            className={classnames(styles.productsCol, styles.productsColLeft)}
          >
            <FilterProducts
              filter={filter}
              updateProductsFilter={updateProductsFilter}
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
    discount: propTypes.number
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
      rating: propTypes.number,
      discount: propTypes.number,
    })
  ),
  updateProductsFilter: propTypes.func
};

export default Products;
