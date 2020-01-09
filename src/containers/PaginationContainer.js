import {connect} from 'react-redux';
import Pagination from '../components/Pagination/Pagination';
import {getFilteredData} from '../utils/getData';
import {push} from 'connected-react-router';
import {splitEvery} from 'csssr-school-utils';

const mapStateToProps = ({filter, pagination, router, data}) => ({
    router,
    paginationLength: splitEvery(pagination.itemsPerPage, getFilteredData({
        ...filter,
        selectedCategories: router.location.query.category,
        data: data.products,
    })).length
});

const mapDispatchToProps = (dispatch) => ({
    resetPagination: (value) => dispatch(push(value))
});


const PaginationContainer = connect(mapStateToProps, mapDispatchToProps)(Pagination);

export default PaginationContainer;
