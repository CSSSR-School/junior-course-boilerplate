import React from 'react';

export default function InputHandler(HocedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);

    }

    handleKeyControl = (event) => {
      event.target.value =  event.target.value.replace(/[^\d]/g,'');
    }

    handleChange = (event) => {
      event.preventDefault();
      let name = event.target.name;
      let value = Number(event.target.value);
      this.props.handleChangeState(name, value);
    }

    render() {
      return <HocedComponent {...this.props} handleKeyControl={this.handleKeyControl} handleChange={this.handleChange} />
    }
  }
}
