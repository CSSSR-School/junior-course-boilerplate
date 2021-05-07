import React from 'react';
import { logger } from 'csssr-school-utils';

class LogRender extends React.Component {
  logRender(nextProps, nextState) {
    logger.call(this, this.constructor.name, nextProps, nextState);
  }
  shouldComponentUpdate(nextProps, nextState) {
    this.logRender(nextProps, nextState);
    return true
  }
}

export default LogRender;
