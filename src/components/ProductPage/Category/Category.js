import React from 'react';
import s from './Category.module.css';

class Category extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={s.form}>
                <div className={s.form__title}>Категории</div>
            </div>
        );
    }
}

export default Category;
