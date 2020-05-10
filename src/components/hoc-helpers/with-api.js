import React, { PureComponent } from 'react';

const withApi = WrappedComponent => {
  return class extends PureComponent {
    _API_BASE = 'https://course-api.csssr.school/';

    render() {
      return <WrappedComponent apiBase={this._API_BASE} {...this.props} />;
    }
  };
};

export default withApi;
