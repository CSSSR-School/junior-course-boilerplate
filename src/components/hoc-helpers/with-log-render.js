import React from 'react';

import LogRender from '../log-render';

const withLogRender = (WrappedComponent) => {
  return class extends LogRender {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
};

export default withLogRender;
