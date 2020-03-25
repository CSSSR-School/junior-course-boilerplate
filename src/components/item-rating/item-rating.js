import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

import styles from './item-rating.module.scss';
import IconItemRating from '../icon-item-rating';
import LogRender from '../log-render';

class ItemRating extends LogRender {
  render() {
    const {isFilled} = this.props;
    return (
      <div
        className={
          classnames(
            styles.itemRating,
            {[styles.itemRatingIsFilled]: isFilled},
          )
        }
      >
        <IconItemRating isFilled={isFilled} />
      </div>
    );
  }
}

ItemRating.propTypes = {
  isFilled: propTypes.bool
};

export default ItemRating;
