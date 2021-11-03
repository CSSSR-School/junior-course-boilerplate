import React from 'react';
import s from './Category.module.css';

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.handleClick(event);
    }

    render() {
        return (
            <div className={s.categories}>
                <div className={s.categories__title}>Категории</div>
                <div className={s.categories__wrapper}>
                    <button
                        className={s.categories__item}
                        name="clothes"
                        onClick={this.handleClick}
                    >Clothes</button>
                    <button
                        className={s.categories__item}
                        name="books"
                        onClick={this.handleClick}
                    >Books</button>
                </div>
            </div>
        );
    }
}

export default Category;
