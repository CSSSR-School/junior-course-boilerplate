import React from 'react';
import './RatingComponent.css';
import logRender from '../logRender/logRender';

class RatingComponent extends logRender {

  render() {
    const {isFilled} = this.props
    return (
      <div className={`star ${isFilled ? 'is-filled' : ''}`} />
    )
  }
}

export default RatingComponent
