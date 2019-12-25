import React from 'react';

import cx from 'classnames';
import s from './Pagination.module.scss'
import {Link} from 'react-router-dom';
import {splitEvery} from 'csssr-school-utils';


const Pagination = props => {
    const {data, location, itemsPerPage, resetPagination} = props;

    const paginationActivePage = +location.query.page || 1;
    const searchParams = new URLSearchParams(location.search);
    const paginationLength = splitEvery(itemsPerPage, data).length;

    const getPaginationSearchString = (page) => {
        searchParams.set('page', page);
        return {
            search: searchParams.toString()
        }
    };


    if (data.length > 0 && paginationActivePage <= paginationLength) {
        return (
            <ul className={s.Pagination}>
                <li className={cx(s.PaginationItem, s.PaginationItemPrev)}>
                    <Link disabled={+paginationActivePage === 1}
                          className={cx(s.PaginationButton, {[s.PaginationButtonDisabled]: paginationActivePage === 1})}
                          to={getPaginationSearchString(paginationActivePage - 1)}
                    >
                        Назад
                    </Link>
                </li>

                {[...Array(paginationLength)].map((item, key) => (
                    <li className={cx(s.PaginationItem, {[s.PaginationItemActive]: key + 1 === +paginationActivePage})} key={key}>
                        <Link className={s.PaginationButton}
                              to={getPaginationSearchString(+key + 1)}>
                            {key + 1}
                        </Link>
                    </li>
                ))}


                <li className={cx(s.PaginationItem, s.PaginationItemNext)}>
                    <Link disabled={+paginationActivePage === paginationLength}
                          className={cx(s.PaginationButton, {[s.PaginationButtonDisabled]: paginationActivePage === paginationLength})}
                          to={getPaginationSearchString(paginationActivePage + 1)}
                    >
                        Вперед
                    </Link>
                </li>
            </ul>
        )
    } else if (data.length === 0) {
        return false
    } else {
        searchParams.delete('page');
        resetPagination('?' + searchParams.toString());
        return false;
    }
};


export default Pagination;
