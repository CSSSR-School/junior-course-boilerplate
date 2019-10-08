import React from "react";

import ProductItem from 'csssr-school-product-card';
import PropTypes from 'prop-types';

import "./ProductsList.css";

const PRODUCTS_NUMBER = 3;

const ratingComponent = ({ isFilled }) => {
  return <div className={isFilled && "starFill"} />;
};

const ProductsList = ({products}) => {
  const list = products.slice(0, PRODUCTS_NUMBER).map((item, number) =>
    <li key={number}>
      <ProductItem
        title = {item.name}
      />
    </li>
  );
  return (
    <ul>{list}</ul>
  );
}

ProductItem.propTypes = {
  isInStock: PropTypes.bool.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  subPriceContent: PropTypes.string.isRequired,
  maxRating: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  ratingComponent: PropTypes.func.isRequired
};

ProductItem.defaultProps = {
  isInStock: true,
  img: "",
  title: "Название первого товара",
  price: "23 000",
  subPriceContent: "23 000",
  maxRating: 5,
  rating: 4,
  ratingComponent: ratingComponent
};

export default ProductsList;
