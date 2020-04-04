import React, { PureComponent } from 'react';

const withInputProductsCategoryHandler = WrappedComponent => {
  return class extends PureComponent {
    handleClick = (event, groupName, cb) => {
      const {
        target: { name: key }
      } = event;

      cb(groupName, key, {
        isActive: !this.props.isActive
      });
    };
    render() {
      return <WrappedComponent onClick={this.handleClick} {...this.props} />;
    }
  };
};
export default withInputProductsCategoryHandler;
