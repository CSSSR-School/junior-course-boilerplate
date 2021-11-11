import React from 'react';
import s from './Category.module.css';
import cx from 'classnames';
import { CategoryContext } from '../../../App.js';

class Category extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <CategoryContext.Consumer>
                {({ toggleCategory, isActive }) => (
                    <div className={s.categories}>
                        <div className={s.categories__title}>Категории</div>
                        <div className={s.categories__wrapper}>
                            <button
                                className={cx(s.categories__item, { [s.categories__itemActive]: isActive })}
                                name="clothes"
                                onClick={toggleCategory}
                            >Clothes</button>
                            <button
                                className={cx(s.categories__item, { [s.categories__itemActive]: isActive })}
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
