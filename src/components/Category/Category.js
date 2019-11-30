import React from 'react';
import FilterContext from "../../filter-context";

import s from './Category.module.scss'

const Category = props => {
    return (
        <FilterContext.Consumer>
            {({categoryList: list, selectedCategories, handleSelectCategory}) => (
                <div className={s.Category}>
                    {list.map((item, key) => {
                        return (
                            <label className={s.CategoryButton} key={key}>
                                <input
                                    type="checkbox"
                                    checked={selectedCategories.indexOf(item) !== -1}
                                    onChange={handleSelectCategory}
                                    name={item}
                                />
                                <span>{item}</span>
                            </label>
                        )
                    })}
                </div>)}
        </FilterContext.Consumer>
    );
};

export default Category;
