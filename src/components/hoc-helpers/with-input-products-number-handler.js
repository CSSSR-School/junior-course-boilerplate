import React, { PureComponent } from 'react';

const withInputProductsNumberHandler = WrappedComponent => {
  return class extends PureComponent {
    addNumberMask = value => {
      return Number(value.replace(/\D/g, ''));
    };

    handleChange = (event, groupName, cb) => {
      const {
        target: { value, name: fieldName }
      } = event;
      const maskedValue = this.addNumberMask(value);
      cb(groupName, fieldName, {
        value: maskedValue,
        isValid: value > 0
      });
    };
    render() {
      return (
        <WrappedComponent
          onChange={this.handleChange}
          {...this.props}
        />
      );
    }
  };
};
export default withInputProductsNumberHandler;
