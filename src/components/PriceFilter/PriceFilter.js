import React from 'react';
import PropTypes from 'prop-types';
import s from './PriceFilter.module.scss'
import Title from "../Title/Title";

class PriceFilter extends React.Component {
    constructor({props}) {
        super(props);
        this.filterMinPrice = React.createRef();
        this.filterMaxPrice = React.createRef();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.priceFilterData(this.filterMinPrice.current.value, this.filterMaxPrice.current.value);
    };

    render() {
        const {maxPrice, minPrice} = this.props;

        return (
            <form className={s.filter} onSubmit={this.handleSubmit}>
                <Title>Цена</Title>
                <div className={s.filterRow}>
                    <div className={s.filterItem}>
                        от <input type="text" defaultValue={minPrice} ref={this.filterMinPrice}/>
                    </div>
                    <div className={s.filterItem}>
                        до <input type="text" defaultValue={maxPrice} ref={this.filterMaxPrice}/>
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
