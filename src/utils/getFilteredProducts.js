import { toInt } from 'csssr-school-utils';

export default (arr, min, max, sale, selectedCategories) => {
    return arr.filter(item => {
        const priceItem = toInt(item.price);
        if (selectedCategories.length === 0) {
            return (item.discount >= sale) && (priceItem >= min) && (priceItem <= max);
        } else if (selectedCategories.includes(item.category)) {
                return (item.discount >= sale) && (priceItem >= min) && (priceItem <= max);
        }
    });
}
