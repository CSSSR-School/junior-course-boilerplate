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
                {({ handleSelectCategory, selectedCategories }) => (
                    <label className={s.checkboxCategory}>
                        <input 
                            type="checkbox"
                            checked={selectedCategories.includes(this.props.name)}
                            onChange={handleSelectCategory}
                            name={this.props.name}
                        />
                        <span>{this.props.name}</span>
                    </label>
                )}
            </CategoryContext.Consumer>
        );
    }
}

export default InputCategory;
