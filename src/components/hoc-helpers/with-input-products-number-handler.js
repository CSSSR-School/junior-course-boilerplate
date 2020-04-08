import React, { PureComponent } from 'react';

const withInputProductsNumberHandler = WrappedComponent => {
  return class extends PureComponent {
    addNumberMask = value => {
      return Number(value.replace(/\D/g, ''));
    };

    handleChange = ({ target: { value, name: fieldName } }, groupName) => {
      const { updateProductsFilterField } = this.props;
      const maskedValue = this.addNumberMask(value);
      const payload = {
        groupName,
        fieldName,
        fieldData: {
          value: maskedValue,
          isValid: value > 0
        }
      };
      updateProductsFilterField(payload);
    };
    render() {
      return <WrappedComponent onChange={this.handleChange} {...this.props} />;
    }
  };
};
export default withInputProductsNumberHandler;
