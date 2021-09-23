import React from 'react';

function isNumericOrEmpty(str) {
    if (!isNaN(str) && !isNaN(parseFloat(str))) {
        return true;
    } else if(str === '') {
        return true;
    }
}


class InputNumber extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        if (isNumericOrEmpty(event.target.value)) {
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
