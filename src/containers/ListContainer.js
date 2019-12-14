import {connect} from 'react-redux';
import data from '../products.json';
import List from '../components/List/List';
import {getPaginationData} from '../utils/getData';

const mapStateToProps = (state) => ({

    data: getPaginationData(
        data,
        state.minPrice,
        state.maxPrice,
        state.discount,
        state.selectedCategories,
        state.itemsPerPage,
        state.paginationActivePage
    )
});


const ListContainer = connect(mapStateToProps)(List);

export default ListContainer;
