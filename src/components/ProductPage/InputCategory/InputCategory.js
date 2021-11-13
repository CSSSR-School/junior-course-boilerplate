import React from 'react';
import { CategoryContext } from '../../../App.js';
import s from './InputCategory.module.css';


class InputCategory extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <CategoryContext.Consumer>
                {({ handleSelectCategory, selectedCategories, item }) => (
                    <label className={s.checkboxCategory}>
                        <input 
                            type="checkbox"
                            checked={selectedCategories.includes(item)}
                            onChange={handleSelectCategory}
                            name={item}
                        />
                        <span>{item}</span>
                    </label>
                )}
            </CategoryContext.Consumer>
        );
    }
}

export default InputCategory;
