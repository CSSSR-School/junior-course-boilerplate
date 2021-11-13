import React from 'react';
import s from './PriceFilter.module.css';
import HoccedInputNumber from '../InputNumber/InputNumber.js';
import LogRender from '../../../LogRender';

class PriceFilter extends LogRender {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.handleChange(event);
    }

    render() {
        return (
            <div className={s.form}>
                <div className={s.form__title}>Цена</div>
                <form onSubmit={this.handleSubmit}>
                    <div className={s.range__wrapper}>
                        <label>
                            от
                            <HoccedInputNumber
                                className={s.range__input}
                                name="minValue"
                                value={this.props.minValue}
                                handleChange={this.handleChange}
                            />
                        </label>
                        <label>
                            до
                            <HoccedInputNumber
                                className={s.range__input}
                                name="maxValue"
                                value={this.props.maxValue}
                                handleChange={this.handleChange}
                            />
                        </label>
                    </div>
                </form>
            </div>
        );
    }
}

export default PriceFilter;
