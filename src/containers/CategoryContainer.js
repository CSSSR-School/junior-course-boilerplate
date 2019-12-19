import {connect} from 'react-redux';
import {filterActions} from '../store/filter';
import Category from '../components/Category/Category';
import {withRouter} from 'react-router';

const mapStateToProps = ({filter}) => ({
    categoryList: filter.categoryList,
    selectedCategories: filter.selectedCategories
});

const mapDispatchToProps = (dispatch) => ({
    handleSelectCategory: (value) => dispatch(filterActions.selectCategory(value))
});

const CategoryContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Category))

export default CategoryContainer
