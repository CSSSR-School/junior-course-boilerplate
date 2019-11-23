import React from 'react';
import PropTypes from 'prop-types';
import s from './PriceFilter.module.scss'
import Title from "../Title/Title";
import InputNumber from '../InputNumber/InputNumber'

class PriceFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minPrice: this.props.minPrice,
            maxPrice: this.props.maxPrice
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.priceFilterData(this.state.minPrice, this.state.maxPrice);
    };

    changeMinPrice = (value) => {
        this.setState({
            minPrice: value
        });
    };

    changeMaxPrice = (value) => {
        this.setState({
            maxPrice: value
        });
    };


    render() {
        const {maxPrice, minPrice} = this.state;

        return (
            <form className={s.filter} onSubmit={this.handleSubmit}>
                <Title>Цена</Title>
                <div className={s.filterRow}>
                    <div className={s.filterItem}>
                        от
                        <InputNumber
                            value={minPrice}
                        />
                    </div>
                    <div className={s.filterItem}>
                        до
                        <InputNumber
                            value={maxPrice}
                        />
                    </div>
                </div>

                <button type="submit" className={s.filterSubmit}><span>Применить</span></button>
            </form>

        )
    }
};

PriceFilter.propTypes = {
    minPrice: PropTypes.number,
    maxPrice: PropTypes.number,
};

export default PriceFilter
