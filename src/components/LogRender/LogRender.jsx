import React from 'react';
import shallowCompare from 'react-addons-shallow-compare'
import { logger } from 'csssr-school-utils';

class LogRender extends React.Component {
  logRender(nextProps, nextState) {
    logger.call(this, this.constructor.name, nextProps, nextState);
  }
  shouldComponentUpdate(nextProps, nextState) {
    this.logRender(nextProps, nextState);
    console.log(this, shallowCompare(this, this.state, nextState), shallowCompare(this, this.props, nextProps))
    return !shallowCompare(this, this.state, nextState) || !shallowCompare(this, this.props, nextProps);
  }

  render() {
    return this.props.children;
  }
}

export default LogRender;
