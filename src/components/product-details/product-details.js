import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import classnames from 'classnames';
import styles from './product-details.module.scss';
import Icon from '../icon';
import Header from '../header';
import ProductCard from 'csssr-school-product-card';
import ProductRating from '../product-rating';
import Price from '../price';

const ProductDetails = props => {
  const { product, maxRating } = props;

  const { name = 'Товар не найден' } = product;

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
        <Header header={name} className={styles.ProductDetailsHeader}/>
      </div>

      {Object.entries(product).length !== 0 ? (
        <ProductCard
          title={name}
          img={product.img}
          price={<Price price={product.price} />}
          isInStock={product.status === 'IN_STOCK'}
          maxRating={maxRating}
          rating={product.stars}
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
    isInStock: propTypes.bool,
    img: propTypes.string,
    title: propTypes.string,
    price: propTypes.node,
    subPriceContent: propTypes.node,
    maxRating: propTypes.number,
    rating: propTypes.number,
    ratingComponent: propTypes.func
  })
};

export default ProductDetails;
