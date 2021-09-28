import React from 'react';
import Discount from 'csssr-school-input-discount';
import HoccecInput from '../HoccedInput';

const DiscountForm = (props) => {
    return (
        <Discount
            title="Скидка"
            name="sale"
            value={props.value}
            onChange={props.handleChange}
        />
    );
}

const HoccedDiscountForm = HoccecInput(DiscountForm);

export default HoccedDiscountForm;
