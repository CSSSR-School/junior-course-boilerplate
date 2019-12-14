import {connect} from 'react-redux';
import data from '../products.json';
import List from '../components/List/List';
import {getPaginationData} from '../utils/getData';

const mapStateToProps = (state) => ({

    data: getPaginationData({
        data: data,
        minPrice: state.minPrice,
        maxPrice: state.maxPrice,
        discount: state.discount,
        selectedCategories: state.selectedCategories,
        itemsPerPage: state.itemsPerPage,
        paginationActivePage: state.paginationActivePage
    })
});


const ListContainer = connect(mapStateToProps)(List);

export default ListContainer;
