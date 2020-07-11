import React from "react";
import pt from 'prop-types';
import s from "./discount.module.css";
import LogRender from "../logrender/log-render";
import toInt from "csssr-school-utils/lib/toInt";

class InputDiscount extends LogRender {
    handleChange = (evt) => {
        const inputValue = toInt(evt.target.value);
        this.props.onChange && this.props.onChange(evt, inputValue);
    }

    render() {
        return (
            <React.Fragment>
                <h3 className={s.title}>{this.props.title}</h3>
                <div className={s.wrapper}>
                    от <input
                    className={s.discountValue}
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.handleChange} />%
                </div>
            </React.Fragment>
        );
    }
}

InputDiscount.propTypes = {
    value: pt.number.isRequired,
    onChange: pt.func.isRequired,
    name: pt.string.isRequired,
    title: pt.string.isRequired
};

export default InputDiscount