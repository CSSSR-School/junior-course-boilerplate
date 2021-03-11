import React, {PureComponent} from 'react';

const withInput = (WrappedComponent) => {
  return class WithInput extends PureComponent {

    constructor(props) {
      super(props);
      this.state = {
        value: this.props.value
      }
    }

    changeValueHandler = ({target: {value}}) => {
      const pattern = /^(\s*|\d+)$/;
      const isValid = pattern.test(value);

      if (!isValid) return;

      this.setState({value: Number(value)});
    }

    render() {
      const {value} = this.state;

      return (
        <WrappedComponent
          {...this.props}
          value={value}
          onChange={this.changeValueHandler}
        />
      )
    }
  }
}

export default withInput;
