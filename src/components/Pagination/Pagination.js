import React from 'react';

import cx from 'classnames';
import s from './Pagination.module.scss'
import {Link} from 'react-router-dom';
import getArrayFromStringWithCommas from '../../utils/getArrayFromStringWithCommas';
import {splitEvery} from 'csssr-school-utils';

const Pagination = props => {

    const {data, itemsPerPage, location, history} = props;

    const searchParams = new URLSearchParams(location.search);
    const selectedCategories = getArrayFromStringWithCommas(searchParams.get('category'));
    let paginationActivePage = searchParams.get('page') || 1;

    const getDataFilteredBySearchParams = (data) => {
        const filteredData = data.filter(item => {
            return (selectedCategories.length > 0 ? selectedCategories.includes(item.category) : true)
        });
        return splitEvery(itemsPerPage, filteredData) || []
    };

    const getPaginationSearchString = (page) => {
        searchParams.set('page', page);
        return {
            search: searchParams.toString()
        }
    };

    const paginationLength = getDataFilteredBySearchParams(data).length;

    if (paginationActivePage > paginationLength) {
        searchParams.delete('page');
        history.push('?' + searchParams.toString());
        return false;
    }

    if (getDataFilteredBySearchParams(data).length > 0 || paginationActivePage <= paginationLength) {
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
    } else {
        return false
    }
};


export default Pagination;
