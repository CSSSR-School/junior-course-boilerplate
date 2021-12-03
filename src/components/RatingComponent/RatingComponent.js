import React from 'react';
import './RatingComponent.css';
import logRender from '../logRender/logRender';

class RatingComponent extends logRender {
  constructor(props) {
    super(props);
    this.state = { isFilled: false };
  }
  render() {
    return (
      <div className={this.state.isFilled || ''} />
    )
  }
}

export default RatingComponent
