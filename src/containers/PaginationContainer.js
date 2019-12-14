import {connect} from 'react-redux';
import {changePaginationPage} from '../store/actions';
import Pagination from '../components/Pagination/Pagination';
import {getFilteredData} from '../utils/getData';
import data from '../products';

const mapStateToProps = (state) => ({
    paginationActivePage: state.paginationActivePage,
    itemsPerPage: state.itemsPerPage,

    data: getFilteredData(
        data,
        state.minPrice,
        state.maxPrice,
        state.discount,
        state.selectedCategories
    )
});

const mapDispatchToProps = (dispatch) => ({

    changePaginationActive: (value) => dispatch(changePaginationPage(value)),

});

const PaginationContainer = connect(mapStateToProps, mapDispatchToProps)(Pagination);

export default PaginationContainer;
