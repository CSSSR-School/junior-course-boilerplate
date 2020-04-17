import React from 'react';
import classnames from 'classnames';

import styles from './products.module.scss';

import FilterProductsContainer from '../../containers/filter-products-container';
import PaginationContainer from '../../containers/pagination-container';
import HeaderProducts from '../header-products';
import ListProducts from '../list-products';

const Products = props => {
  const { state, getFilteredProductsList, getVisibleProductsList } = props;
  const filteredList = getFilteredProductsList(state);
  const visibleList = getVisibleProductsList(state);
  return (
    <section className={classnames(styles.products)}>
      <div className={classnames(styles.productsRow)}>
        <aside
          className={classnames(styles.productsCol, styles.productsColLeft)}
        >
          <FilterProductsContainer {...props} />
        </aside>
        <div
          className={classnames(styles.productsCol, styles.productsColRight)}
        >
          {filteredList.length !== 0 ? (
            <>
              <HeaderProducts header={'Список товаров'} />
              <ListProducts list={visibleList} />
              <PaginationContainer
                pagination={state.pagination}
                list={filteredList}
              />
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Products;
