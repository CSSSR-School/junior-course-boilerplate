import React from 'react';

class FilterInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onValueChange(event.target.value);
    }

    render() {
        return (
            <input
                className={this.props.className}
                type="text"
                value={this.props.inputValue}
                onChange={this.handleChange}
            />
        );
    }
}

export default FilterInput;
