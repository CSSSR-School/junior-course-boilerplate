import React from "react";

import LogRender from "../LogRender/LogRender";
import ProductItem from "csssr-school-product-card";
import PropTypes from "prop-types";

import styles from "./ProductsList.module.css";

const PRODUCTS_NUMBER = 6;

const ratingComponent = ({ isFilled }) => {
  return <div className={isFilled && "starFill"} />;
};

export default class ProductsList extends LogRender {
  generateList() {
    return this.props.products.slice(0, PRODUCTS_NUMBER)
      .filter((product) => (product.price >= this.props.price.min) && (product.price <= this.props.price.max))
      .map((item, number) =>
        <li key={number}>
          <ProductItem
            title = {item.name}
            price = {item.price}
            subPriceContent = {item.subPriceContent}
          />
        </li>
      )
  }

  render() {
    return (
      <ul className={styles.productsList}>
        {this.generateList()}
      </ul>
    )
  }
}

ProductItem.propTypes = {
  isInStock: PropTypes.bool.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  subPriceContent: PropTypes.number.isRequired,
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
