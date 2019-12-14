import memoize from './memoize';
import {splitEvery} from 'csssr-school-utils'

export const getFilteredData = memoize((
    data,
    minPrice,
    maxPrice,
    discount,
    selectedCategories
) => {
    return data.filter((item) => {
        return item.price >= minPrice
            && item.price <= maxPrice
            && item.discount >= discount
            && (selectedCategories.length > 0 ? selectedCategories.includes(item.category) : true)
    });
});

export const getPaginationData = memoize((
    data,
    minPrice,
    maxPrice,
    discount,
    selectedCategories,
    itemsPerPage,
    paginationActivePage
) => {
    const filteredData = getFilteredData(data,
        minPrice,
        maxPrice,
        discount,
        selectedCategories);

    return splitEvery(itemsPerPage, filteredData)[paginationActivePage - 1];
});

