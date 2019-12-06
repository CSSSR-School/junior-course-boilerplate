import React from 'react';
import appContext from '../app-context';
import {changeDiscount, changeMaxPrice, changeMinPrice, resetFilter} from '../store/actions';
import Filter from '../components/Filter/Filter';

const FilterContainer = props => {
    return <appContext.Consumer>
        {({state, dispatch}) => {

            const {minPrice, maxPrice, discount} = state;

            const handleChangeMinPrice = (value) => {
                dispatch(changeMinPrice(value))
            };

            const handleChangeMaxPrice = (value) => {
                dispatch(changeMaxPrice(value))
            };

            const handleChangeDiscount = (value) => {
                dispatch(changeDiscount(value))
            };

            const handleResetFilter = () => {
                window.history.pushState({}, 'category', '/');
                dispatch(resetFilter())
            };

            return <Filter
                maxPrice={maxPrice}
                minPrice={minPrice}
                discount={discount}
                handleChangeMinPrice={handleChangeMinPrice}
                handleChangeMaxPrice={handleChangeMaxPrice}
                handleChangeDiscount={handleChangeDiscount}
                handleResetFilter={handleResetFilter}
            />
        }}
    </appContext.Consumer>
};


export default FilterContainer
