import React from "react";
import pt from 'prop-types';
import s from "./discount.module.css";
import LogRender from "../logrender/log-render";
import WithMask from "../with-mask/with-mask";

class InputDiscountUI extends LogRender {
    render() {
        return (
            <React.Fragment>
                <h3 className={s.title}>{this.props.title}</h3>
                <div className={s.wrapper}>
                    от <input
                    className={s.discountValue}
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.props.handleChange} />%
                </div>
            </React.Fragment>
        );
    }
}

InputDiscountUI.propTypes = {
    value: pt.number.isRequired,
    onChange: pt.func.isRequired,
    name: pt.string.isRequired,
    title: pt.string.isRequired
};

const InputDiscount = WithMask(InputDiscountUI);
export default InputDiscount;