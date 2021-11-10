import React from 'react';
import s from './Category.module.css';
import { CategoryContext } from '../../../App.js';

class Category extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <CategoryContext.Consumer>
                {({ toggleCategory }) => (
                    <div className={s.categories}>
                        <div className={s.categories__title}>Категории</div>
                        <div className={s.categories__wrapper}>
                            <button
                                className={s.categories__item}
                                name="clothes"
                                onClick={toggleCategory}
                            >Clothes</button>
                            <button
                                className={s.categories__item}
                                name="books"
                                onClick={toggleCategory}
                            >Books</button>
                        </div>
                    </div>
                )} 
            </CategoryContext.Consumer>
        );
    }
}

export default Category;
