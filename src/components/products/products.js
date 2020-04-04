import React, { PureComponent } from 'react';
import classnames from 'classnames';

import styles from './products.module.scss';

import FilterProducts from '../filter-products';
import HeaderProducts from '../header-products';
import ListProducts from '../list-products';

import { Context } from '../context';

class Products extends PureComponent {
  render() {
    return (
      <section className={classnames(styles.products)}>
        <div className={classnames(styles.productsRow)}>
          <aside
            className={classnames(styles.productsCol, styles.productsColLeft)}
          >
            <Context.Consumer>
              {({ filter, updateProductsFilterField }) => (
                <FilterProducts
                  filter={filter}
                />
              )}
            </Context.Consumer>
          </aside>
          <div
            className={classnames(styles.productsCol, styles.productsColRight)}
          >
            <HeaderProducts header={'Список товаров'} />
            <Context.Consumer>
              {({ list }) => <ListProducts list={list} />}
            </Context.Consumer>
          </div>
        </div>
      </section>
    );
  }
}

export default Products;
