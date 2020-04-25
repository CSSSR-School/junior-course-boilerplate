import { createSelector } from 'reselect';

const getFilter = ({ filter }) => filter;

const getFilterCategories = createSelector(getFilter, filter => {
  const { categories } = filter;
  return categories;
});

const getFilterActiveCategories = createSelector(
  getFilterCategories,
  categories =>
    Object.keys(categories).filter(category => categories[category].isActive)
);

export {
  getFilter,
  getFilterCategories,
  getFilterActiveCategories,
};
