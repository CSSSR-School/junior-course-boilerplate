import {createSelector} from 'reselect';
import getArrayFromQueryString from './getArrayFromQueryString';

export const getFilteredProducts = createSelector(
    ({products}) => products,
    ({minPrice}) => minPrice,
    ({maxPrice}) => maxPrice,
    ({discount}) => discount,
    ({selectedCategories}) => selectedCategories,
    (products, minPrice, maxPrice, discount, selectedCategories) => products.filter((item) => {
        return item.price >= minPrice
            && item.price <= maxPrice
            && item.discount >= discount
            && (getArrayFromQueryString(selectedCategories).length > 0 ? getArrayFromQueryString(selectedCategories).includes(item.category) : true)
        }
    )
);

