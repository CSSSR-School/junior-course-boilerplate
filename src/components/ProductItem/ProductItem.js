import React from 'react';
import pt from 'prop-types';
import cx from 'classnames';
import s from 'csssr-school-product-card/src/index.module.css';
import style from './ProductItem.module.css';

const range = to => [...Array(to).keys()].map(i => i + 1)

function ProductItem({ isInStock, img, title, price, subPriceContent, maxRating, rating, ratingComponent }) {
  return (
    <div className={cx(s.goods, { [s.goodsNone]: !isInStock })}>
      <div className={cx(s.goodsType, { [s.goodsTypeNone]: !isInStock })}>
        {isInStock ? 'В наличии' : 'Недоступен'}
      </div>
      <img
        className={cx(s.goodsImg, { [s.goodsImgNone]: !isInStock })}
        src={img}
        alt="placeholder"
        width="224"
        height="200"
      />
      <div className={s.goodsName}>{title}</div>
      <div>
        {
          range(maxRating).map(i => React.createElement(ratingComponent, { key: i, isFilled:  i <= rating }))
        }
      </div>
      <div className={s.goodsPrise}>
        {price}{subPriceContent}
      </div>
    </div>
  );
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
