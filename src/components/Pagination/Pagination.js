import React from 'react';

import cx from 'classnames';
import s from './Pagination.module.scss'

const Pagination = props => {

    const {items, paginationActivePage, changePaginationActive} = props;

    const handleClick = (value) => {
        if (value < 1 || value > items.length) {
            return false
        }

        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set('page', value);

        window.history.pushState(
            {...window.history.state, paginationActive: value},
            'pagination',
            '?' + searchParams.toString());
        changePaginationActive(value)
    };

    return (
        <ul className={s.Pagination}>
            <li className={cx(s.PaginationItem, s.PaginationItemPrev)}>
                <button type="button" className={s.PaginationButton} onClick={() => handleClick(+paginationActivePage - 1)}>Назад</button>
            </li>

            {items.map((item, key) => (
                <li className={cx(s.PaginationItem, {[s.PaginationItemActive]: item == paginationActivePage})} key={item}>
                    <button type="button" className={s.PaginationButton} onClick={() => handleClick(item)}>{item}</button>
                </li>
            ))}


            <li className={cx(s.PaginationItem, s.PaginationItemNext)}>
                <button type="button" className={s.PaginationButton} onClick={() => handleClick(+paginationActivePage + 1)}>Вперед</button>
            </li>
        </ul>
    )
};


export default Pagination;
