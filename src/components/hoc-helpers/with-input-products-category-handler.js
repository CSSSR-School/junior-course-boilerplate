import React, { PureComponent } from 'react';

const withInputProductsCategoryHandler = WrappedComponent => {
  return class extends PureComponent {
    handleClick = (event, groupName, cb) => {
      const { target } = event;
      const { name: key } = target;
      const { isActive } = this.props;

      cb(groupName, key, { isActive: !isActive });
    };
    render() {
      return <WrappedComponent onClick={this.handleClick} {...this.props} />;
    }
  };
};
export default withInputProductsCategoryHandler;
