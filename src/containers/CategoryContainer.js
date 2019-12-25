import {connect} from 'react-redux';
import Category from '../components/Category/Category';

const mapStateToProps = ({filter, router}) => ({
    ...filter,
    ...router
});

const mapDispatchToProps = (dispatch) => ({
    // handleSelectCategory: (value) => dispatch(filterActions.selectCategory(value))
});

const CategoryContainer = connect(mapStateToProps, mapDispatchToProps)(Category)

export default CategoryContainer
