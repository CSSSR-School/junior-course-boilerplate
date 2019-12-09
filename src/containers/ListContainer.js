import {connect} from 'react-redux';
import data from '../products.json';
import memoize from '../memoize';
import List from '../components/List/List';

const getFilteredData = memoize((data, minPrice, maxPrice, discount, selectedCategories) => {
    return data.filter((item) => {
        return item.price >= minPrice
            && item.price <= maxPrice
            && item.discount >= discount
            && (selectedCategories.length > 0 ? selectedCategories.includes(item.category) : true)
    })
});

const mapStateToProps = (state) => ({
    minPrice: state.minPrice,
    maxPrice: state.maxPrice,
    discount: state.discount,
    selectedCategories: state.selectedCategories,
    data: getFilteredData(data, state.minPrice, state.maxPrice, state.discount, state.selectedCategories)
});

const ListContainer = connect(mapStateToProps)(List);

export default ListContainer;
