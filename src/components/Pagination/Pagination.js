import React from 'react';

import cx from 'classnames';
import s from './Pagination.module.scss'
import {Link} from 'react-router-dom';


const Pagination = props => {
    const {router, resetPagination, paginationLength} = props;

    const paginationActivePage = +router.location.query.page || 1;
    const searchParams = new URLSearchParams(router.location.search);
    const getPaginationSearchLink = (page) => {
        searchParams.set('page', page);
        return {
            search: searchParams.toString()
        }
    };

    if (paginationActivePage > paginationLength) {
        searchParams.delete('page');
        resetPagination('?' + searchParams.toString());
        return false;
    }

    if (paginationLength > 0) {
        return (

            <ul className={s.Pagination}>
                <li className={cx(s.PaginationItem, s.PaginationItemPrev)}>
                    <Link disabled={+paginationActivePage === 1}
                          className={cx(s.PaginationButton, {[s.PaginationButtonDisabled]: paginationActivePage === 1})}
                          to={getPaginationSearchLink(paginationActivePage - 1)}
                    >
                        Назад
                    </Link>
                </li>

                {[...Array(paginationLength)].map((item, key) => (
                    <li className={cx(s.PaginationItem, {[s.PaginationItemActive]: key + 1 === +paginationActivePage})} key={key}>
                        <Link className={s.PaginationButton}
                              to={getPaginationSearchLink(+key + 1)}>
                            {key + 1}
                        </Link>
                    </li>
                ))}


                <li className={cx(s.PaginationItem, s.PaginationItemNext)}>
                    <Link disabled={+paginationActivePage === paginationLength}
                          className={cx(s.PaginationButton, {[s.PaginationButtonDisabled]: paginationActivePage === paginationLength})}
                          to={getPaginationSearchLink(paginationActivePage + 1)}
                    >
                        Вперед
                    </Link>
                </li>
            </ul>
        )
    }

    else {
        return false;
    }

};


export default Pagination;
