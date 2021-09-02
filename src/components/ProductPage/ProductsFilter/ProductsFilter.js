import React from 'react';
import s from './ProductsFilter.module.css';
import InputNumber from '../InputNumber/InputNumber.js';
import LogRender from '../../../LogRender';

class ProductsFilter extends LogRender {
    constructor(props) {
        super(props);
        this.handleChangeMin = this.handleChangeMin.bind(this);
        this.handleChangeMax = this.handleChangeMax.bind(this);
    }

    handleChangeMin(minValue) {
        this.props.changeMin(minValue);
    }
    
    handleChangeMax(maxValue) {
        this.props.changeMax(maxValue);
    }

    render() {
        return (
            <div className={s.form}>
                <div className={s.form__title}>Цена</div>
                <form onSubmit={this.formSubmit}>
                    <div className={s.range__wrapper}>
                        <label className={s.range}>
                            от
                            <InputNumber
                                className={s.range__input}
                                inputValue={this.props.minValue}
                                onValueChange={this.handleChangeMin}
                            />
                        </label>
                        <label className={s.range}>
                            до
                            <InputNumber
                                className={s.range__input}
                                inputValue={this.props.maxValue}
                                onValueChange={this.handleChangeMax}
                            />
                        </label>
                    </div>
                    {/* <button
                        className={s.filter__submit}
                        type="submit">
                            Применить
                    </button> */}
                </form>
            </div>
        );
    }
}

export default ProductsFilter;
