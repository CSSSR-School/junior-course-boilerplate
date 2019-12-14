import {connect} from 'react-redux';
import data from '../products.json';
import List from '../components/List/List';
import {getPaginationData} from '../utils/getData';

const mapStateToProps = ({filter, pagination}) => ({

    data: getPaginationData({
        data,
        ...filter,
        ...pagination
    })
});


const ListContainer = connect(mapStateToProps)(List);

export default ListContainer;
