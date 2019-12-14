import {connect} from 'react-redux';
import {changeDiscount, changeMaxPrice, changeMinPrice, resetFilter} from '../redux/modules/filter';
import Filter from '../components/Filter/Filter';

const mapStateToProps = ({filter}) => (
    {
        maxPrice: filter.maxPrice,
        minPrice: filter.minPrice,
        discount: filter.discount
    });

const mapDispatchToProps = (dispatch) => ({

    handleChangeMinPrice: (value) => dispatch(changeMinPrice(value)),

    handleChangeMaxPrice: (value) => dispatch(changeMaxPrice(value)),

    handleChangeDiscount: (value) => dispatch(changeDiscount(value)),

    handleResetFilters: () => dispatch(resetFilter())

});

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default FilterContainer
