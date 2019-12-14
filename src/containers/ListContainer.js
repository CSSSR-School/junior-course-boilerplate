import {connect} from 'react-redux';
import data from '../products.json';
import List from '../components/List/List';
import {getPaginationData} from '../utils/getData';

const mapStateToProps = ({filter, pagination}) => ({

    data: getPaginationData({
        data: data,
        minPrice: filter.minPrice,
        maxPrice: filter.maxPrice,
        discount: filter.discount,
        selectedCategories: filter.selectedCategories,
        itemsPerPage: pagination.itemsPerPage,
        paginationActivePage: pagination.paginationActivePage
    })
});


const ListContainer = connect(mapStateToProps)(List);

export default ListContainer;
