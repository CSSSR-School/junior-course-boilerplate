import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import classnames from 'classnames';
import styles from './product-details.module.scss';
import Icon from '../icon';
import ProductCard from 'csssr-school-product-card';
import ProductRating from '../product-rating';
import Price from '../price';

const ProductDetails = props => {
  const { product = {} } = props;

  const { title = 'Товар не найден' } = product;

  return (
    <div className={classnames(styles.ProductDetails)}>
      <div className={classnames(styles.ProductDetailsWrapper)}>
        <Link
          to="/"
          onClick={props.goBack}
          className={classnames(styles.ProductDetailsLink)}
        >
          <Icon name="arrow" />
        </Link>
        <h3 className={classnames(styles.ProductDetailsHeader)}>{title}</h3>
      </div>

      {Object.entries(product).length !== 0 ? (
        <ProductCard
          isInStock={product.isInStock}
          img={product.img}
          title={title}
          maxRating={product.maxRating}
          rating={product.rating}
          price={<Price price={product.price} />}
          subPriceContent={
            product.subPriceContent ? (
              <Price price={product.subPriceContent} isPrimary={false} />
            ) : (
              ''
            )
          }
          ratingComponent={ProductRating}
        />
      ) : (
        <div>
          <Icon name="ill-planet" />
        </div>
      )}
    </div>
  );
};

ProductDetails.propTypes = {
  product: propTypes.shape({
    isInStock: propTypes.bool.isRequired,
    img: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    price: propTypes.node.isRequired,
    subPriceContent: propTypes.node.isRequired,
    maxRating: propTypes.number.isRequired,
    rating: propTypes.number.isRequired,
    ratingComponent: propTypes.func.isRequired
  })
};

export default ProductDetails;
