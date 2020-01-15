import {connect} from 'react-redux';
import List from '../components/List/List';
import {getFilteredProducts} from '../utils/getFilteredProducts';
import {withRouter} from 'react-router';
import {productsActions} from '../store/products';

const mapStateToProps = ({filter, pagination, router, data}) => ({
    router,
    itemsPerPage: pagination.itemsPerPage,
    isLoading: data.isLoading,
    isError: false.isError,
    products: getFilteredProducts({
        ...filter,
        selectedCategories: router.location.query.category,
        products: data.products,
    })
});

const mapDispatchToProps = (dispatch) => ({
    loadProductsStart: () => dispatch(productsActions.loadProductsStart()) ,
    loadProductsSuccess: (value) => dispatch(productsActions.loadProductsSuccess(value)) ,
    loadProductsFail: (value) => dispatch(productsActions.loadProductsFail(value)) ,
});

const ListContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(List));

export default ListContainer;
