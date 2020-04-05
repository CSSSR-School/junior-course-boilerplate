import React, { PureComponent } from 'react';

const withInputProductsCategoryHandler = WrappedComponent => {
  return class extends PureComponent {
    handleClick = ({ target: { name: fieldName } }, groupName) => {
      const { isActive, updateProductsFilterField } = this.props;

      updateProductsFilterField(groupName, fieldName, { isActive: !isActive });
    };
    render() {
      return <WrappedComponent onClick={this.handleClick} {...this.props} />;
    }
  };
};
export default withInputProductsCategoryHandler;
