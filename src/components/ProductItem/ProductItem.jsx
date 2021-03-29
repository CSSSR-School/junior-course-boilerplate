import React, {memo} from 'react';
import {Link} from 'react-router-dom';
import pt from 'prop-types';
import cx from 'classnames';
import s from './ProductItem.module.css';
import {PropValidator} from '../../prop-validator';
import {numberWithSpaces, range} from '../../helpers';
import ProductRatingItem from '../ProductRatingItem/ProductRatingItem.jsx';

const ProductItem = ({product, isDetailMode = false}) => {

  const {
    id,
    title,
    img,
    price,
    rating,
    maxRating,
    subPriceContent,
    isInStock
  } = product;

  return (
    <div className={cx(s.goods, { [s.goodsNone]: !isInStock, [s.detailMode]: isDetailMode })}>
      <div className={s.goodsImgBlock}>
        <div className={cx(s.goodsType, { [s.goodsTypeNone]: !isInStock })}>
          {isInStock ? 'В наличии' : 'Недоступен'}
        </div>
        <img
          className={cx(s.goodsImg, { [s.goodsImgNone]: !isInStock })}
          src={img}
          alt={title}
          width="224"
          height="250"
        />
      </div>
      <div className={s.goodsDetails}>
        {
          isDetailMode ?
          <div className={s.goodsName}>{title}</div>
          :
          <Link
            className={cx(s.goodsName, s.goodsNameLink)}
            to={`/products/${id}`}
          >
            {title}
          </Link>
        }
        <div className={s.goodsRating}>
          {
            range(maxRating).map((index) => (
              <ProductRatingItem
                key={index}
                isFilled={index <= rating}
              />
            ))
          }
        </div>
        <div className={s.goodsPriceBlock}>
          <span className={s.goodsPrice}>{numberWithSpaces(price)}&nbsp;&#8381;</span>
          {
            subPriceContent > price &&
            <span className={s.goodsSubPrice}>{numberWithSpaces(subPriceContent)}&nbsp;&#8381;</span>
          }
        </div>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropValidator.PRODUCT_INFO.isRequired,
  isDetailMode: pt.bool
};

export default memo(ProductItem);
