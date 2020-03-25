import React from 'react';
import propTypes from 'prop-types';

import './products.scss';

import FilterProducts from '../filter-products';
import ProductsHeader from '../products-header';
import ProductsList from '../products-list';
import LogRender from '../log-render';

class Products extends LogRender {
  render() {
    const { priceRange, productsList, updatePriceRange } = this.props;
    return (
      <section className="products">
        <div className="products__row">
          <aside className="products__col--left">
            <FilterProducts
              priceRange={priceRange}
              updatePriceRange={updatePriceRange}
            />
          </aside>
          <div className="products__col--right">
            <ProductsHeader header={'Список товаров'} />
            <ProductsList productsList={productsList} />
          </div>
        </div>
      </section>
    );
  }
}

Products.propTypes = {
  priceRange: propTypes.shape({
    min: propTypes.number,
    max: propTypes.number
  }),
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
  ),
  updatePriceRange: propTypes.func
};

export default Products;
