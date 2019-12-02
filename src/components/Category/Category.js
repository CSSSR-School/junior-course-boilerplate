import React from 'react';
import filterContext from '../../filter-context';

import s from './Category.module.scss'

const Category = props => {
    return (
        <filterContext.Consumer>
            {({categoryList: list, selectedCategories, handleSelectCategory}) => (
                <div className={s.Category}>
                    {list.map((item, key) => {
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
                </div>)}
        </filterContext.Consumer>
    );
};

export default Category;
