import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

import './rating-item.scss';
import RatingItemIcon from '../rating-item-icon';
import LogRender from '../log-render';

class RatingItem extends LogRender {
  render() {
    const {isFilled} = this.props;
    return (
      <div
        className={
          classnames(
            'rating-item',
            {'rating-item--is-filled': isFilled},
          )
        }
      >
        <RatingItemIcon isFilled={isFilled} />
      </div>
    );
  }
}

RatingItem.propTypes = {
  isFilled: propTypes.bool
};

export default RatingItem;
