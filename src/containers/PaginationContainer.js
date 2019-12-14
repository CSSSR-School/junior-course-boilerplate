import {connect} from 'react-redux';
import {changePaginationPage} from '../redux/modules/pagination';
import Pagination from '../components/Pagination/Pagination';
import {getFilteredData} from '../utils/getData';
import data from '../products';

const mapStateToProps = ({pagination, filter}) => ({
    paginationActivePage: pagination.paginationActivePage,
    itemsPerPage: pagination.itemsPerPage,

    data: getFilteredData({
        data: data,
        minPrice: filter.minPrice,
        maxPrice: filter.maxPrice,
        discount: filter.discount,
        selectedCategories: filter.selectedCategories
    })
});

const mapDispatchToProps = (dispatch) => ({

    changePaginationActive: (value) => dispatch(changePaginationPage(value)),

});

const PaginationContainer = connect(mapStateToProps, mapDispatchToProps)(Pagination);

export default PaginationContainer;
