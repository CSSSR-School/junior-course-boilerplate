import {createSelector} from 'reselect';
import getArrayFromQueryString from './getArrayFromQueryString';

export const getFilteredData = createSelector(
    ({data}) => data,
    ({minPrice}) => minPrice,
    ({maxPrice}) => maxPrice,
    ({discount}) => discount,
    ({selectedCategories}) => selectedCategories,
    (data, minPrice, maxPrice, discount, selectedCategories) => data.filter((item) => {
            return item.price >= minPrice
                && item.price <= maxPrice
                && item.discount >= discount
                && (getArrayFromQueryString(selectedCategories).length > 0 ? getArrayFromQueryString(selectedCategories).includes(item.category) : true)
        }
    )
);

