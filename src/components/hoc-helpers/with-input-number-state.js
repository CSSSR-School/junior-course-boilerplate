import React, { PureComponent } from 'react';

const withInputNumberState = WrappedComponent => {
  return class extends PureComponent {
    state = {
      value: this.props.value,
      isValid: true
    };

    addNumberMask = value => {
      return Number(value.replace(/\D/g, ''));
    };

    handleChange = ({ target: { value } }) => {
      console.log('.');
      const maskedValue = this.addNumberMask(value);
      this.setState({ ...this.state, value: maskedValue, isValid: value > 0 });
    };
    render() {
      const {value, ...rest} = this.props;
      return (
        <WrappedComponent
          value={this.state.value}
          isValid={this.state.isValid}
          onChange={this.handleChange}
          {...rest}
        />
      );
    }
  };
};
export default withInputNumberState;
