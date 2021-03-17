import React, {memo} from 'react';
import pt from 'prop-types';
import s from './ProductRatingItem.module.css';

const ProductRatingItem = (isFilled) => {
  return (
    <div className={s.productRating}>
      <svg width={15} height={15}>
        <title>Rating</title>
        <path
          fill="#101113"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.54,4.41334l4.79329,0.41333L9.69999,7.98l1.0867,4.68665
            l-4.12002-2.4866l-4.12,2.4866L3.64,7.98L0,4.82667L4.79334,4.42L6.66667,0L8.54,4.41334z M4.16,10.44665l2.50667-1.51331
            L9.18,10.45335L8.51334,7.6l2.21335-1.92L7.80667,5.42667l-1.14-2.69333L5.53334,5.42l-2.92,0.25334l2.21333,1.92L4.16,10.44665z"
        />
        <g fill={isFilled ? '#101113' : 'none'}>
          <polygon
            fillRule="evenodd"
            clipRule="evenodd"
            points="2.61334, 5.67999 5.53338,5.4267 6.67004,2.74115 6.67004,8.93536 4.16003,10.45337 4.82665,7.59998"
          />
          <polygon
            fillRule="evenodd"
            clipRule="evenodd"
            points="10.72668,5.67999 7.80664,5.4267 6.66998,2.74115 6.66998,8.93536 9.17999,10.45337 8.51337,7.59998"
          />
        </g>
      </svg>
    </div>
  )
}

ProductRatingItem.propTypes = {
  isFilled: pt.bool.isRequired
};

export default memo(ProductRatingItem);


