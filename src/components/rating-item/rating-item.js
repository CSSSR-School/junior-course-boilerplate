import React, { Component } from 'react';
import propTypes from 'prop-types';

import './rating-item.scss';
import RatingItemIcon from '../rating-item-icon';
import {logRender} from '../../utils/log-render';

class RatingItem extends Component {
  render() {
    const {isFilled} = this.props;
    return (
      <div
        className={
          isFilled ? 'rating-item rating-item--is-filled' : 'rating-item'
        }
      >
        <RatingItemIcon classModifier="rating-item" isFilled={isFilled} />
      </div>
    );
  }
}

RatingItem.propTypes = {
  isFilled: propTypes.bool
};


logRender(RatingItem);
export default RatingItem;
