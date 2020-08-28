import React from 'react';
import ProductItem from 'school-product-card';
import Rating from '../Rating';
import Price from '../Price/Price';
import BaseComponent from '../BaseComponent/BaseComponent';
import styles from './GoodsList.module.sass';

class GoodsList extends BaseComponent {
  render() {
    let { goods } = this.props;
    return (
      <ul className={styles.GoodsList}>
        {goods.map(good => {
          const { id, price, subPriceContent, ...restProps } = good;

          return (
            <ProductItem
              {...restProps}
              price={<Price value={price} />}
              subPriceContent={
                subPriceContent ? (
                  <Price value={subPriceContent} isOriginalPrice={false} />
                ) : (
                  ''
                )
              }
              ratingComponent={Rating}
              key={id}
            />
          );
        })}
      </ul>
    );
  }
}

export default GoodsList;
