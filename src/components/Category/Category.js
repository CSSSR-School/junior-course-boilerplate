import React from 'react';
import appContext from '../../app-context';
import {selectCategory} from '../../store/actions'
import s from './Category.module.scss'

const Category = props => {
    return (
        <appContext.Consumer>
            {/*{({categoryList: list, selectedCategories, handleSelectCategory}) => {*/}
            {({state, dispatch}) => {
                const {categoryList: list, selectedCategories} = state;


                const handleSelectCategory = (event) => {
                    const selectedItem = event.target.name;
                    let categoriesList = [];

                    if (selectedCategories.includes(selectedItem)) {
                        categoriesList = selectedCategories.filter(item => item !== selectedItem)
                    } else {
                        categoriesList = [...selectedCategories, selectedItem]
                    }
                    window.history.pushState({filter: categoriesList.toString()}, 'category', categoriesList.length > 0 ? categoriesList : '/');

                    dispatch(selectCategory(categoriesList))
                };
                return <div className={s.Category}>
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
            }}
        </appContext.Consumer>
    );
};

export default Category;
