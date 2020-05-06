import React, { PureComponent } from 'react';

const withInputFilterNumberHandler = WrappedComponent => {
  return class extends PureComponent {
    addNumberMask = value => {
      return Number(value.replace(/\D/g, ''));
    };

    handleChange = ({ target: { value, name: fieldName } }, groupName) => {
      const { updateFilterField } = this.props;

      const maskedValue = this.addNumberMask(value);

      const payload = {
        groupName,
        fieldName,
        fieldData: {
          value: maskedValue,
          isValid:
            fieldName === 'min' || fieldName === 'max'
              ? value > 0
              : fieldName === 'total'
              ? value < 100
              : false
        }
      };

      updateFilterField(payload);
    };

    render() {
      const { push, searchParams, ...restProps } = this.props;

      return (
        <WrappedComponent handleChange={this.handleChange} {...restProps} />
      );
    }
  };
};

export default withInputFilterNumberHandler;
