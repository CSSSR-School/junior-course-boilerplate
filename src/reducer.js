import { initialState } from './store';
import { DEFAULT_URL, PAGE_TITLE } from './components/App';

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER': {
      const changedCategory = action.payload.changedCategory;
      const checkedCategories = state.checkedCategories.slice();

      if (checkedCategories.includes(changedCategory)) {
        const deleteIndex = checkedCategories.indexOf(changedCategory);
        checkedCategories.splice(deleteIndex, 1);
      } else {
        checkedCategories.push(changedCategory);
      }

      return {
        ...state,
        checkedCategories
      }
    }

    case 'RESET_FILTER': {
      window.history.pushState(DEFAULT_URL, `${PAGE_TITLE}`, DEFAULT_URL);

      return {
        ...state,
        checkedCategories: []
      }
    }

    case 'CHANGE_PRICE': {
      const inputName = action.payload.inputName;
      const value = action.payload.changedValue;

      const price = {
        ...state.price,
        [inputName]: value
      }

      return {
        ...state,
        price
      }
    }

    case 'UPDATE_CHECKED_CATEGORIES': {
      const checkedCategories = action.payload.checkedCategories;

      return {
        ...state,
        checkedCategories
      }
    }

    default: {
      return state;
    }
  }
};

export default reducer;
