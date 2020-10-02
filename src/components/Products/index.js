import React from 'react';
import ProductItemUI from 'csssr-school-product-card';
import PropTypes from 'prop-types';
import LogRender from '../LogRender';

import styles from './index.module.css';

const ratingComponent = ({ isFilled }) => {
  return <div className={isFilled ? 'starFill' : undefined} />;
};

class ProductItem extends LogRender {
  render() {
    return (
      <ProductItemUI {...this.props} />
    )
  }
}

export default class Products extends React.PureComponent {
  generateList = () =>
    this.props.products.map((item, number) =>
      <li key={number}>
        <ProductItem
          title = {item.name}
          price = {item.price}
          subPriceContent = {item.subPriceContent}
        />
      </li>
  )

  render() {
    return (
      <ul className={styles.products}>
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
  img: '',
  title: 'Название первого товара',
  price: '23 000',
  subPriceContent: '23 000',
  maxRating: 5,
  rating: 4,
  ratingComponent: ratingComponent
};
