import React, {memo} from 'react';
import {Link} from 'react-router-dom';
import pt from 'prop-types';
import cx from 'classnames';
import s from './ProductItem.module.css';
import {PropValidator} from '../../prop-validator';
import {numberWithSpaces, range} from '../../helpers';
import ProductRatingItem from '../ProductRatingItem/ProductRatingItem.jsx';
import Button from '../Button/Button.jsx';

const ProductItem = ({
  product,
  isInCart,
  isDetailMode,
  cartStatus,
  onChangeCart
}) => {

  const {
    id,
    name,
    img,
    price,
    status,
    discount,
    stars
  } = product;

  const {pending} = cartStatus;

  const isInStock = status === 'IN_STOCK';

  const changeCartHandler = () => onChangeCart(id);

  return (
    <div className={cx(s.goods, { [s.goodsNone]: !isInStock, [s.detailMode]: isDetailMode })}>
      <div className={s.goodsImgBlock}>
        <div className={cx(s.goodsType, { [s.goodsTypeNone]: !isInStock })}>
          {isInStock ? 'В наличии' : 'Недоступен'}
        </div>
        <img
          className={cx(s.goodsImg, { [s.goodsImgNone]: !isInStock })}
          src={`/images/${img}`}
          alt={name}
          width="224"
          height="250"
        />
      </div>
      <div className={s.goodsDetails}>
        {
          isDetailMode ?
          <div className={s.goodsName}>{name}</div>
          :
          <Link
            className={cx(s.goodsName, s.goodsNameLink)}
            to={`/products/${id}`}
          >
            {name}
          </Link>
        }
        <div className={s.goodsRating}>
          {
            range().map((index) => (
              <ProductRatingItem
                key={index}
                isFilled={index <= stars}
              />
            ))
          }
        </div>
        <div className={s.goodsPriceBlock}>
          <span className={s.goodsPrice}>{numberWithSpaces(price)}&nbsp;&#8381;</span>
          {
            discount > 0 &&
            <span className={s.goodsDiscount}>
              Скидка: {discount}&nbsp;&#x25;
            </span>
          }
        </div>
        {
          isInStock &&
          <Button
            type='button'
            disabled={pending}
            onClick={changeCartHandler}
          >
            {isInCart ? 'Убрать' : 'Добавить'}
          </Button>
        }
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropValidator.PRODUCT_INFO.isRequired,
  isInCart: pt.bool.isRequired,
  isDetailMode: pt.bool,
  cartStatus: pt.object.isRequired,
  onChangeCart: pt.func.isRequired
};

export default memo(ProductItem);
