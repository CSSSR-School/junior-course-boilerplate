import React from 'react';
import s from './PriceFilter.module.css';
import InputNumber from '../InputNumber/InputNumber.js';
import LogRender from '../../../LogRender';

class PriceFilter extends LogRender {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.props.handleChange(event);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.formSubmit();
    }

    render() {
        return (
            <div className={s.form}>
                <div className={s.form__title}>Цена</div>
                <form onSubmit={this.handleSubmit}>
                    <div className={s.range__wrapper}>
                        <label className={s.range}>
                            от
                            <InputNumber
                                className={s.range__input}
                                name="minValue"
                                value={this.props.minValue}
                                handleChange={this.handleChange}
                            />
                        </label>
                        <label className={s.range}>
                            до
                            <InputNumber
                                className={s.range__input}
                                name="maxValue"
                                value={this.props.maxValue}
                                handleChange={this.handleChange}
                            />
                        </label>
                    </div>
                    <button 
                        className={s.filter__submit}
                        type="submit">
                            Применить
                    </button>
                </form>
            </div>
        );
    }
}

export default PriceFilter;
