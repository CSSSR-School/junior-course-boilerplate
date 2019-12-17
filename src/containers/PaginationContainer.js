import {connect} from 'react-redux';
import {paginationActions} from '../store/pagination';
import Pagination from '../components/Pagination/Pagination';
import {getFilteredData} from '../utils/getData';
import data from '../products';

const mapStateToProps = ({pagination, filter}) => ({
    ...filter,
    ...pagination,
    data: getFilteredData({
        data: data,
        ...filter,
        ...pagination
    })
});

const mapDispatchToProps = (dispatch) => ({

    changePaginationActive: (value) => dispatch(paginationActions.changePaginationPage(value)),

});

const PaginationContainer = connect(mapStateToProps, mapDispatchToProps)(Pagination);

export default PaginationContainer;
