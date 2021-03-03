import React from 'react';
import pt from 'prop-types';
import cx from 'classnames';
import s from './ProductItem.module.css';
import {numberWithSpaces} from '../../helpers';
import LogRender from '../LogRender/LogRender';

const range = to => [...Array(to).keys()].map(i => i + 1);

class ProductItem extends LogRender{
  render() {
    const {title, img, price, rating, maxRating, subPriceContent, isInStock, ratingComponent: RatingItem} = this.props;

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
          <span className={s.goodsSubPrice}>{numberWithSpaces(subPriceContent)}&nbsp;&#8381;</span>
        </div>
      </div>
    );
  }

};

ProductItem.propTypes = {
    title: pt.node.isRequired,
    img: pt.string.isRequired,
    price: pt.node.isRequired,
    rating: pt.number.isRequired,
    maxRating: pt.number.isRequired,
    subPriceContent: pt.node.isRequired,
    ratingComponent: pt.func.isRequired,
    isInStock: pt.bool.isRequired
};

export default ProductItem;
