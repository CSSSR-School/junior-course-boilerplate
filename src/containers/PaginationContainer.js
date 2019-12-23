import {connect} from 'react-redux';
import Pagination from '../components/Pagination/Pagination';
import {getFilteredData} from '../utils/getData';
import {withRouter} from 'react-router';

const mapStateToProps = ({filter}) => ({
    ...filter,
    data: getFilteredData({
        ...filter
    })
});

const PaginationContainer = withRouter(connect(mapStateToProps)(Pagination));

export default PaginationContainer;
