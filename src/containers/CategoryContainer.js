import {connect} from 'react-redux';
import Category from '../components/Category/Category';

const mapStateToProps = ({filter, router}) => ({
    filter,
    router
});

const CategoryContainer = connect(mapStateToProps)(Category);

export default CategoryContainer
