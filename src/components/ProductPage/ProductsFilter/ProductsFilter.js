import React from 'react';
import s from './ProductsFilter.module.css';
import FilterInput from '../FilterInput/FilterInput.js';
import LogRender from '../../../LogRender';

class ProductsFilter extends LogRender {
    constructor(props) {
        super(props);
        this.handleChangeMin = this.handleChangeMin.bind(this);
        this.handleChangeMax = this.handleChangeMax.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    handleChangeMin(minValue) {
        if (Math.sign(minValue) === 0 || Math.sign(minValue) === 1) {
          this.props.changeMin(minValue);
        }
    }
    
    handleChangeMax(maxValue) {
        if (Math.sign(maxValue) === 0 || Math.sign(maxValue) === 1) {
            this.props.changeMax(maxValue);
        }
    }

    formSubmit(e) {
        e.preventDefault();
        this.props.formSubmit();
    }

    render() {
        return (
            <div className={s.form}>
                <div className={s.form__title}>Цена</div>
                <form onSubmit={this.formSubmit}>
                    <div className={s.range__wrapper}>
                        <label className={s.range}>
                            от
                            <FilterInput
                                className={s.range__input}
                                inputValue={this.props.minValue}
                                onValueChange={this.handleChangeMin}
                            />
                        </label>
                        <label className={s.range}>
                            до
                            <FilterInput
                                className={s.range__input}
                                inputValue={this.props.maxValue}
                                onValueChange={this.handleChangeMax}
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

export default ProductsFilter;
