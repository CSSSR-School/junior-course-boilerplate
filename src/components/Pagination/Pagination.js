import React from 'react';

import cx from 'classnames';
import s from './Pagination.module.scss'

const Pagination = props => {

    const {data, itemsPerPage, paginationActivePage, changePaginationActive} = props;

    const handleChange = (value) => {

        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set('page', value);

        window.history.pushState(
            {...window.history.state, paginationActive: value},
            'pagination',
            '?' + searchParams.toString());
        changePaginationActive(value)
    };

    const paginationLength = Math.ceil(data.length / itemsPerPage);

    if (paginationActivePage > paginationLength) {
        handleChange(1);
    }

    if (data.length > 0) {
        return (
            <ul className={s.Pagination}>
                <li className={cx(s.PaginationItem, s.PaginationItemPrev)}>
                    <button type="button"
                            disabled={+paginationActivePage === 1}
                            className={s.PaginationButton}
                            onClick={() => handleChange(+paginationActivePage - 1)}>
                        Назад
                    </button>
                </li>

                {[...Array(paginationLength)].map((item, key) => (
                    <li className={cx(s.PaginationItem, {[s.PaginationItemActive]: key + 1 === +paginationActivePage})} key={key}>
                        <button type="button" className={s.PaginationButton} onClick={() => handleChange(key + 1)}>{key + 1}</button>
                    </li>
                ))}


                <li className={cx(s.PaginationItem, s.PaginationItemNext)}>
                    <button type="button"
                            disabled={+paginationActivePage === paginationLength}
                            className={s.PaginationButton}
                            onClick={() => handleChange(+paginationActivePage + 1)}>
                        Вперед
                    </button>
                </li>
            </ul>
        )
    } else {
        return false
    }
}


export default Pagination;
