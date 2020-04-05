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
      <Context.Consumer>
        {({ filter, list }) => (
          <section className={classnames(styles.products)}>
            <div className={classnames(styles.productsRow)}>
              <aside
                className={classnames(
                  styles.productsCol,
                  styles.productsColLeft
                )}
              >
                <FilterProducts filter={filter} />
              </aside>
              <div
                className={classnames(
                  styles.productsCol,
                  styles.productsColRight
                )}
              >
                <HeaderProducts header={'Список товаров'} />
                <ListProducts list={list} />
              </div>
            </div>
          </section>
        )}
      </Context.Consumer>
    );
  }
}

export default Products;
