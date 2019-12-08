import React from 'react';
import s from './Category.module.scss'

const Category = props => {
    const {list, selectedCategories} = props;

    const handleSelectCategory = (event) => {
        props.handleSelectCategory(event, selectedCategories);
    };
    return (

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
        </div>
    )
};

export default Category;
