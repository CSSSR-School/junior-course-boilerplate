import {connect} from 'react-redux';
import {selectCategory} from '../store/actions';
import Category from '../components/Category/Category';

const mapStateToProps = (state) => ({
    categoryList: state.categoryList,
    selectedCategories: state.selectedCategories
});

const mapDispatchToProps = (dispatch) => ({
    handleSelectCategory: (value) => dispatch(selectCategory(value))
});

const CategoryContainer = connect(mapStateToProps, mapDispatchToProps)(Category);

export default CategoryContainer
