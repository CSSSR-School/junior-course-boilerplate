import React from 'react';
import PropTypes from 'prop-types';

import s from './Category.module.scss'

const Category = props => {
    const {categoryList, selectedCategories} = props;

    const handleSelectCategory = (event) => {
        const selectedItem = event.target.name;
        let categoriesList = [];

        if (selectedCategories.includes(selectedItem)) {
            categoriesList = selectedCategories.filter(item => item !== selectedItem)
        } else {
            categoriesList = [...selectedCategories, selectedItem]
        }
        window.history.pushState({filter: categoriesList.toString()}, 'category', categoriesList.length > 0 ? categoriesList : '/');

        props.handleSelectCategory(categoriesList);
    };

    return (
        <div className={s.Category}>
            {categoryList.map((item, key) => {
                return (
                    <label className={s.CategoryButton} key={key}>
                        <input
                            type="checkbox"
                            checked={selectedCategories.includes(item)}
                            onChange={handleSelectCategory}
                            name={item}
                        />
                        <span>{item}</span>
                    </label>
                )
            })}
        </div>
    )
};

Category.propTypes = {
    categoryList: PropTypes.array,
    selectedCategories: PropTypes.array,
    handleSelectCategory: PropTypes.func,
};

export default Category;
