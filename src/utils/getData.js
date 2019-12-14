import memoize from './memoize';
import {splitEvery} from 'csssr-school-utils'

export const getFilteredData = memoize((obj) => {
    const {
        data,
        minPrice,
        maxPrice,
        discount,
        selectedCategories
    } = obj;
    return data.filter((item) => {
        return item.price >= minPrice
            && item.price <= maxPrice
            && item.discount >= discount
            && (selectedCategories.length > 0 ? selectedCategories.includes(item.category) : true)
    });
});

export const getPaginationData = memoize((obj) => {
    const {
        data,
        minPrice,
        maxPrice,
        discount,
        selectedCategories,
        itemsPerPage,
        paginationActivePage
    } = obj;
    const filteredData = getFilteredData({
        data,
        minPrice,
        maxPrice,
        discount,
        selectedCategories
    });
    return splitEvery(itemsPerPage, filteredData)[paginationActivePage - 1];
});

