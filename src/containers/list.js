import React from 'react';
import { connect } from 'react-redux';
import Products from '../components/Products';

const getFilteredProducts = (price, checkedCategories, products) => {
  const currentPrice = price;
  const discountSize = currentPrice.discount / 100 ;
  const isMoreThanMinPrice = product => product.price >= currentPrice.min;
  const isLessThanMaxPrice = product => product.price <= currentPrice.max;
  const isRelevantDiscount = product =>
    product.price === (product.subPriceContent - product.subPriceContent * discountSize);

  const isRelevantCategory = product =>
    checkedCategories.length === 0 ? true : checkedCategories.includes(product.category);

  const setFilter = product =>
    isMoreThanMinPrice(product)
    && isLessThanMaxPrice(product)
    && isRelevantDiscount(product)
    && isRelevantCategory(product)

  return products.filter((product) => setFilter(product))
}

const mapStateToProps = state => {
  return {
    price: state.price,
    checkedCategories: state.checkedCategories,
    allProducts: state.products,
  }
}

const List = ({ price, checkedCategories, allProducts }) => <Products products={getFilteredProducts(price, checkedCategories, allProducts)} />


export default connect(mapStateToProps)(List);
