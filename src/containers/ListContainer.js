import {connect} from 'react-redux';
import List from '../components/List/List';
import {getFilteredData} from '../utils/getData';
import {withRouter} from 'react-router';

const mapStateToProps = ({filter, pagination, router, data}) => ({
    ...filter,
    router,
    itemsPerPage: pagination.itemsPerPage,
    data: getFilteredData({
        ...filter,
        selectedCategories: router.location.query.category,
        data: data.products,
    })
});


const ListContainer = withRouter(connect(mapStateToProps)(List));

export default ListContainer;
