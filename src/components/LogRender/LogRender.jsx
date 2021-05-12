import React from 'react';
import { logger } from 'csssr-school-utils';

class LogRender extends React.PureComponent {
  logRender(nextProps, nextState) {
    logger.call(this, this.constructor.name, nextProps, nextState);
  }

  render() {
    return this.props.children;
  }
}

export default LogRender;
