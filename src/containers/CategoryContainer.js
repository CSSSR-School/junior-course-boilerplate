import {connect} from 'react-redux';
import {selectCategory} from '../store/actions';
import Category from '../components/Category/Category';

const mapStateToProps = (state) => {
    return {
        list: state.categoryList,
        selectedCategories: state.selectedCategories
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    console.info(ownProps);
    return {

        handleSelectCategory: (event, selectedCategories) => {
            const selectedItem = event.target.name;
            let categoriesList = [];

            if (selectedCategories.includes(selectedItem)) {
                categoriesList = selectedCategories.filter(item => item !== selectedItem)
            } else {
                categoriesList = [...selectedCategories, selectedItem]
            }
            window.history.pushState({filter: categoriesList.toString()}, 'category', categoriesList.length > 0 ? categoriesList : '/');

            dispatch(selectCategory(categoriesList))
        },

    }
};

const CategoryContainer = connect(mapStateToProps, mapDispatchToProps)(Category);

export default CategoryContainer
