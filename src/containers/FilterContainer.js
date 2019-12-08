import {connect} from 'react-redux';
import {changeDiscount, changeMaxPrice, changeMinPrice, resetFilter} from '../store/actions';
import Filter from '../components/Filter/Filter';

const mapStateToProps = (state) => {
    return {
        maxPrice: state.maxPrice,
        minPrice: state.minPrice,
        discount: state.discount
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

        handleChangeMinPrice: (value) => {
            dispatch(changeMinPrice(value))
        },

        handleChangeMaxPrice: (value) => {
            dispatch(changeMaxPrice(value))
        },

        handleChangeDiscount: (value) => {
            dispatch(changeDiscount(value))
        },

        handleResetFilter: () => {
            window.history.pushState({}, 'category', '/');
            dispatch(resetFilter())
        }
    }
};

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default FilterContainer
