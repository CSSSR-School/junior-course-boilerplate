import {connect} from 'react-redux';
import Pagination from '../components/Pagination/Pagination';
import {getFilteredData} from '../utils/getData';
import {push} from 'connected-react-router';

const mapStateToProps = ({filter, pagination, router}) => ({
    ...filter,
    ...router,
    ...pagination,
    data: getFilteredData({
        selectedCategories: router.location.query.category,
        ...filter,
    }),
});

const mapDispatchToProps = (dispatch) => ({
    resetPagination: (value) => dispatch(push(value))
});


const PaginationContainer = connect(mapStateToProps, mapDispatchToProps)(Pagination);

export default PaginationContainer;
