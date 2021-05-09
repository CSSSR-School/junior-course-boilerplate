import React from 'react';

const NUMBER_MASK = /^[0-9]*$/;

export const withNumberMask = (InputComponent) => {
  return class WithNumberMask extends React.Component {
    constructor(props) {
      super(props);
      const { defaultValue } = props;
      this.inputRef =  React.createRef();
      this.state = {
        value: defaultValue,
      };
    }

    handleValueChange = () => {
      const { value } = this.inputRef.current;
      if (NUMBER_MASK.test(value)) {
        const numValue = Number(value);
        if (this.state.value !== numValue) {
          this.setState({ value: numValue });
          this.props.onChange(numValue);
        }
      }
    };

    render() {
      const { defaultValue, onChange, ...restProps} = this.props;
      const { value } = this.state;
      const { inputRef } = this;

      return (
        <InputComponent
          onChange={ this.handleValueChange }
          value={ value }
          inputRef={ inputRef }
          { ...restProps }
        />
      );
    }
  };
}
