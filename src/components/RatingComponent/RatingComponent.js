import React from 'react';
import './RatingComponent.css';

class RatingComponent extends React.Component {
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
