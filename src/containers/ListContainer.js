import {connect} from 'react-redux';
import List from '../components/List/List';
import {getFilteredProducts} from '../utils/getFilteredProducts';
import {withRouter} from 'react-router';

const mapStateToProps = ({filter, pagination, router, data}) => ({
    router,
    itemsPerPage: pagination.itemsPerPage,
    products: getFilteredProducts({
        ...filter,
        selectedCategories: router.location.query.category,
        products: data.products,
    })
});


const ListContainer = withRouter(connect(mapStateToProps)(List));

export default ListContainer;
