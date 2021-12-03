import React from 'react';
import './RatingComponent.css';
import reactMixin from 'react-mixin';
import logRender from '../logRender/logRender';

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

reactMixin(RatingComponent.prototype, logRender)

export default RatingComponent
