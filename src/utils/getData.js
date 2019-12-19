import {splitEvery} from 'csssr-school-utils'
import {createSelector} from 'reselect';

export const getFilteredData = createSelector(
    ({data}) => data,
    ({minPrice}) => minPrice,
    ({maxPrice}) => maxPrice,
    ({discount}) => discount,
    (data, minPrice, maxPrice, discount) => data.filter((item) => {
            return item.price >= minPrice
                && item.price <= maxPrice
                && item.discount >= discount
        }
    )
);


export const getPaginationData = createSelector(
    ({data}) => data,
    ({minPrice}) => minPrice,
    ({maxPrice}) => maxPrice,
    ({discount}) => discount,
    ({selectedCategories}) => selectedCategories,
    ({itemsPerPage}) => itemsPerPage,
    ({paginationActivePage}) => paginationActivePage,
    (data, minPrice, maxPrice, discount, selectedCategories, itemsPerPage, paginationActivePage) => {
        const filteredData = getFilteredData({
            data,
            minPrice,
            maxPrice,
            discount,
            selectedCategories
        });
        return splitEvery(itemsPerPage, filteredData)[paginationActivePage - 1];
    }
);

