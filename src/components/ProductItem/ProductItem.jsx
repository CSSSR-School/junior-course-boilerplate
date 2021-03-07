import React from 'react';
import pt from 'prop-types';
import cx from 'classnames';
import s from './ProductItem.module.css';
import {PropValidator} from '../../prop-validator';
import {numberWithSpaces, range} from '../../helpers';
import LogRender from '../LogRender/LogRender';

class ProductItem extends LogRender{
  render() {
    const {product, ratingComponent: RatingItem} = this.props;
    const {
      title,
      img,
      price,
      rating,
      maxRating,
      subPriceContent,
      isInStock
    } = product;

    return (
      <div className={cx(s.goods, { [s.goodsNone]: !isInStock })}>
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
        <div className={s.goodsName}>{title}</div>
        <div className={s.goodsRating}>
          {range(maxRating).map((index) => <RatingItem key={index} isFilled={index <= rating}/>)}
        </div>
        <div className={s.goodsPriceBlock}>
          <span className={s.goodsPrice}>{numberWithSpaces(price)}&nbsp;&#8381;</span>
          {
            subPriceContent > price &&
            <span className={s.goodsSubPrice}>{numberWithSpaces(subPriceContent)}&nbsp;&#8381;</span>
          }
        </div>
      </div>
    );
  }
};

ProductItem.propTypes = {
  product: PropValidator.PRODUCT_INFO.isRequired,
  ratingComponent: pt.func.isRequired
};

export default ProductItem;
