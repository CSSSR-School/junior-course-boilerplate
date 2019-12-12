import {connect} from 'react-redux';
import {changePaginationPage} from '../store/actions';
import Pagination from '../components/Pagination/Pagination';

const mapStateToProps = (state) => ({
    paginationActivePage: state.paginationActivePage,
    items: [1, 2, 3, 4, 5]
});

const mapDispatchToProps = (dispatch) => ({

    changePaginationActive: (value) => dispatch(changePaginationPage(value)),

});

const PaginationContainer = connect(mapStateToProps, mapDispatchToProps)(Pagination);

export default PaginationContainer;
