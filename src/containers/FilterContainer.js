import {connect} from 'react-redux';
import {filterActions} from '../store/filter';
import Filter from '../components/Filter/Filter';

const mapStateToProps = ({filter}) => ({
    maxPrice: filter.maxPrice,
    minPrice: filter.minPrice,
    discount: filter.discount
});

const mapDispatchToProps = (dispatch) => ({
    handleChangeMinPrice: (value) => dispatch(filterActions.changeMinPrice(value)),
    handleChangeMaxPrice: (value) => dispatch(filterActions.changeMaxPrice(value)),
    handleChangeDiscount: (value) => dispatch(filterActions.changeDiscount(value)),
    handleResetFilters: () => dispatch(filterActions.resetFilter())
});

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default FilterContainer
