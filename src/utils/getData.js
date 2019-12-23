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

