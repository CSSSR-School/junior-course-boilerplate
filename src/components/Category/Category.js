import React from 'react';
import PropTypes from 'prop-types';
import s from './Category.module.scss'
import {Link} from 'react-router-dom';
import getArrayFromQueryString from '../../utils/getArrayFromQueryString';
import cx from 'classnames';

const Category = props => {
    const {filter, router} = props;
    const selectedCategories = getArrayFromQueryString(router.location.query.category);
    const searchParams = new URLSearchParams(router.location.search);

    const getCategorySearchString = (selectedItem) => {
        let categoriesList = [];

        if (selectedCategories.includes(selectedItem)) {
            categoriesList = selectedCategories.filter(item => item !== selectedItem)
        } else {
            categoriesList = [...selectedCategories, selectedItem]
        }

        if (categoriesList.length > 0) {
            searchParams.set('category', categoriesList);
        } else {
            searchParams.delete('category');
        }

        return {
            search: searchParams.toString()
        }
    };

    return (
        <div className={s.Category}>
            {filter.categoryList.map((item, key) => {
                return (
                    <Link 
                        key={key}
                        to={() => (getCategorySearchString(item))}
                        className={cx(s.CategoryButton, {
                            [s.CategoryButtonChecked]: selectedCategories.includes(item)
                        })}
                    >
                        {item}
                    </Link>
                )
            })}
        </div>
    )
};

Category.propTypes = {
    categoryList: PropTypes.array,
};

export default Category;
