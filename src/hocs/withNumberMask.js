import React from 'react';

import LogRender from '../components/LogRender/LogRender';

const NUMBER_MASK = /^[0-9]*$/;

export const withNumberMask = (InputComponent) => {
  return class WithNumberMask extends LogRender {
    constructor(props) {
      super(props);
      const { defaultValue = 0 } = props;
      this.state = {
        value: defaultValue,
      };
    }

    handleValueChange = (evt) => {
      const { value } = evt.target;
      if (NUMBER_MASK.test(value)) {
        const numValue = Number(value);
        this.setState({ value: numValue });
        this.props.onChange && this.props.onChange(numValue);
      }
    };

    render() {
      const { defaultValue, onChange, ...restProps} = this.props;
      const { value } = this.state;
      return (
        <InputComponent
          { ...restProps }
          onChange={ this.handleValueChange }
          value={ value }
        />
      );
    }
  };
}
