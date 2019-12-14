import React from 'react';
import PropTypes from 'prop-types';

import s from './Category.module.scss'

const Category = props => {
    const {categoryList, selectedCategories} = props;
    const handleSelectCategory = (event) => {
        const selectedItem = event.target.name;
        const searchParams = new URLSearchParams(window.location.search);
        let categoriesList = [];

        if (selectedCategories.includes(selectedItem)) {
            categoriesList = selectedCategories.filter(item => item !== selectedItem)
        } else {
            categoriesList = [...selectedCategories, selectedItem]
        }

        if (categoriesList.length > 0) {
            searchParams.set('category', categoriesList.toString());
        } else {
            searchParams.delete('category');
        }

        window.history.pushState(
            {...window.history.state, category: categoriesList.toString()},
            'category',
            '?' + searchParams.toString());
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
