import React from 'react';
import s from './ProductsFilter.module.css';

class ProductsFilter extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeMin = this.handleChangeMin.bind(this);
        this.handleChangeMax = this.handleChangeMax.bind(this);
    }

    handleChangeMin(event) {
        if (Math.sign(event.target.value) === 0 || Math.sign(event.target.value) === 1) {
            this.props.onMinValueChange(event.target.value);
        }
    }

    handleChangeMax(event) {
        if (Math.sign(event.target.value) === 0 || Math.sign(event.target.value) === 1) {
          this.props.onMaxValueChange(event.target.value);
        }
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        const minValue = this.props.minValue;
        const maxValue = this.props.maxValue;

        return (
            <div className={s.form}>
                <div className={s.form__title}>Цена</div>
                <form onSubmit={this.handleSubmit}>
                    <div className={s.range__wrapper}>
                        <label className={s.range}>
                            от
                            <input
                                type="text"
                                className={s.range__input}
                                value={minValue}
                                onChange={this.handleChangeMin}
                                />
                        </label>
                        <label className={s.range}>
                            до
                            <input
                                type="text"
                                className={s.range__input}
                                value={maxValue}
                                onChange={this.handleChangeMax}
                                />
                        </label>
                    </div>
                    <input
                        className={s.filter__submit}
                        type="submit"
                        value="Применить" />
                </form>
            </div>
        );
    }
}

export default ProductsFilter;
