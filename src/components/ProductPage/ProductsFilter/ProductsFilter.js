import React from 'react';
import s from './ProductsFilter.module.css';
import {toInt} from 'csssr-school-utils';

class ProductsFilter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            minValue: this.getMinValue(props.data),
            maxValue: this.getMaxValue(props.data)
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeMin = this.handleChangeMin.bind(this);
        this.handleChangeMax = this.handleChangeMax.bind(this);
    }

    getMinValue(arr) {
        // делаем глубокую копию
        const temp = JSON.parse(JSON.stringify(arr));
        // убираем нечисловые символы
        temp.forEach(toInt(temp.price));
        // сортируем по возрастанию
        temp.sort((a, b) => {
            return a.price > b.price ? 1 : -1;
        });
        return temp[0].price;
    }

    handleChangeMin(event) {
        if (Math.sign(event.target.value) === 0 || Math.sign(event.target.value) === 1) {
            this.setState({minValue: event.target.value})
        }
    }

    handleChangeMax(event) {
        if (Math.sign(event.target.value) === 0 || Math.sign(event.target.value) === 1) {
            this.setState({maxValue: event.target.value})
        }
    }

    handleSubmit(event) {
        alert(`min value: ${this.state.minValue}, max value: ${this.state.maxValue}`);
        event.preventDefault();
    }

    render() {
        return (
            <div className={s.form}>
                <div className={s.form__title}>Цена</div>
                <form onSubmit={this.handleSubmit}>
                    <div className={s.range__wrapper}>
                        <label className={s.range}>
                            от
                            <input
                                name="startRange"
                                min="0"
                                type="text"
                                className={s.range__input}
                                value={this.state.minValue}
                                onChange={this.handleChangeMin}
                                // ref={this.input}
                                />
                        </label>
                        <label className={s.range}>
                            до
                            <input
                                name="endRange"
                                min="0"
                                type="text"
                                className={s.range__input}
                                value={this.state.maxValue}
                                onChange={this.handleChangeMax}
                                // ref={this.input}
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
