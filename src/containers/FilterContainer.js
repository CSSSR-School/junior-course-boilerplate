import {connect} from 'react-redux';
import {changeDiscount, changeMaxPrice, changeMinPrice, resetFilter} from '../store/actions';
import Filter from '../components/Filter/Filter';

const mapStateToProps = (state) => (
    {
        maxPrice: state.maxPrice,
        minPrice: state.minPrice,
        discount: state.discount
    });

const mapDispatchToProps = (dispatch) => ({

    handleChangeMinPrice: (value) => dispatch(changeMinPrice(value)),

    handleChangeMaxPrice: (value) => dispatch(changeMaxPrice(value)),

    handleChangeDiscount: (value) => dispatch(changeDiscount(value)),

    handleResetFilters: () => dispatch(resetFilter())

});

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default FilterContainer
