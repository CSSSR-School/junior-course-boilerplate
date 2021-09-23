import React from 'react';
import Discount from 'csssr-school-input-discount';

function isNumericOrEmpty(str) {
    if (!isNaN(str) && !isNaN(parseFloat(str))) return true;
    if(str === '') return true;
}

class DiscountForm extends React.Component {
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
            <Discount
                title="Скидка"
                name="sale"
                value={this.props.value}
                onChange={this.handleChange}
            />
        );
    }
}

export default DiscountForm;
