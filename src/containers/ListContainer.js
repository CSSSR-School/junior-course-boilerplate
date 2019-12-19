import {connect} from 'react-redux';
import data from '../products.json';
import List from '../components/List/List';
import {getFilteredData} from '../utils/getData';
import {withRouter} from 'react-router';

const mapStateToProps = ({filter}) => ({
    ...filter,
    data: getFilteredData({
        data,
        ...filter
    }),

});

const ListContainer = withRouter(connect(mapStateToProps)(List));

export default ListContainer;
