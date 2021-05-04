import React from 'react';

import LogRender from '../LogRender/LogRender';

class Rating extends LogRender {
  render() {
    const { isFilled } = this.props;
    return (
      <span>{ isFilled ? '★' : '☆' }</span>
    );
  }
};

export default Rating;
