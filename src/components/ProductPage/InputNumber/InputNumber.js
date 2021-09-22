import React from 'react';

class InputNumber extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        if (!isNaN(parseInt(event.target.value)) || event.target.value === '') {
            this.props.handleChange(event);
        }
    }

    render() {
        return (
            <input
                className={this.props.className}
                name={this.props.name}
                value={this.props.value}
                onChange={this.handleChange} />
        );
    }
}

export default InputNumber;
