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
          isValid: value > 0
        }
      };

      updateFilterField(payload);
    };

    render() {
      return <WrappedComponent handleChange={this.handleChange} {...this.props} />;
    }
  };
};
export default withInputFilterNumberHandler;
