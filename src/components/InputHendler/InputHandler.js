import React from 'react';
import { toInt } from 'csssr-school-utils';

export default function InputHandler(HocedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
        this.state = {
          value: ''
        }
    }

    handleChange = (event) => {
      event.target.value =  event.target.value.replace(/[^\d]/g,'');
      const name = event.target.name;
      const value = event.target.value;
      const filteredValue = toInt(value);
      if (filteredValue !== '') {
        this.props.onChange(name, filteredValue)
      }
      return (
        this.setState({value:filteredValue})
      )
    }

    render() {
      return (
        <HocedComponent {...this.props} handleChange={this.handleChange} />
      )
    }
  }
}
