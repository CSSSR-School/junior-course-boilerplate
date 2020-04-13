import { minBy, maxBy } from 'csssr-school-utils';
import dataJSON from '../../../components/app/assets/products.json';
import * as types from './types';

const getInitialState = data => {
  const productsCategories = Array.from(
    new Set(data.map(item => item.category))
  );
  return {
    products: {
      filter: {
        price: {
          min: {
            value: minBy(item => item.price, data).price,
            isValid: true
          },
          max: {
            value: maxBy(item => item.price, data).price,
            isValid: true
          }
        },
        discount: {
          total: {
            value: minBy(item => item.discount, data).discount,
            isValid: true
          }
        },
        categories: productsCategories.reduce(
          (acc, category) => ({ ...acc, [category]: { isActive: false } }),
          {}
        )
      },
      list: data,
      pagination: {
        currentPage: 1,
        itemsPerPage: 6,
        upperPageBound: 3,
        lowerPageBound: 0,
        isPrevActive: false,
        isNextActive: true,
        pageBound: 3
      }
    }
  };
};

const initialState = getInitialState(dataJSON);

export default (state = initialState, action) => {
  const { type, payload = {} } = action;
  switch (type) {
    case types.SET_INITIAL_STATE:
      return initialState;

    case types.UPDATE_PRODUCTS_FILTER_FIELD:
      const { groupName, fieldName, fieldData } = payload;
      return {
        ...state,
        products: {
          filter: {
            ...state.products.filter,
            [groupName]: {
              ...state.products.filter[groupName],
              [fieldName]: fieldData
            }
          },
          list: [...state.products.list],
          pagination: {
            ...state.products.pagination
          }
        }
      };

    case types.UPDATE_PRODUCTS_FILTER_CATEGORIES:
      const { state: historyState } = payload;
      return {
        ...state,
        products: {
          filter: {
            price: {
              ...state.products.filter.price
            },
            discount: {
              ...state.products.filter.discount
            },
            categories: {
              ...state.products.filter.categories,
              ...historyState
            }
          },
          list: [...state.products.list],
          pagination: {
            ...state.products.pagination
          }
        }
      };

    case types.UPDATE_PAGINATION_CURRENT_PAGE:
      const { currentPage } = payload;
      return {
        ...state,
        products: {
          filter: {
            ...state.products.filter
          },
          list: [...state.products.list],
          pagination: {
            ...state.products.pagination,
            currentPage
          }
        }
      };

    case types.MAKE_PAGINATION_CONTROLS_ACTIVE:
      return {
        ...state,
        products: {
          filter: {
            ...state.products.filter
          },
          list: [...state.products.list],
          pagination: {
            ...state.products.pagination,
            isPrevActive: true,
            isNextActive: true
          }
        }
      };

    case types.MAKE_PAGINATION_CONTROLS_INACTIVE:
      return {
        ...state,
        products: {
          filter: {
            ...state.products.filter
          },
          list: [...state.products.list],
          pagination: {
            ...state.products.pagination,
            isPrevActive: false,
            isNextActive: false
          }
        }
      };

    case types.MAKE_PAGINATION_CONTROL_PREV_ACTIVE:
      return {
        ...state,
        products: {
          filter: {
            ...state.products.filter
          },
          list: [...state.products.list],
          pagination: {
            ...state.products.pagination,
            isPrevActive: true
          }
        }
      };

    case types.MAKE_PAGINATION_CONTROL_PREV_INACTIVE:
      return {
        ...state,
        products: {
          filter: {
            ...state.products.filter
          },
          list: [...state.products.list],
          pagination: {
            ...state.products.pagination,
            isPrevActive: false
          }
        }
      };

    case types.MAKE_PAGINATION_CONTROL_NEXT_ACTIVE:
      return {
        ...state,
        products: {
          filter: {
            ...state.products.filter
          },
          list: [...state.products.list],
          pagination: {
            ...state.products.pagination,
            isNextActive: true
          }
        }
      };

    case types.MAKE_PAGINATION_CONTROL_NEXT_INACTIVE:
      return {
        ...state,
        products: {
          filter: {
            ...state.products.filter
          },
          list: [...state.products.list],
          pagination: {
            ...state.products.pagination,
            isNextActive: false
          }
        }
      };

    case types.SHIFT_PAGINATION_PAGE_BOUNDS_FORWARD:
      return {
        ...state,
        products: {
          filter: {
            ...state.products.filter
          },
          list: [...state.products.list],
          pagination: {
            ...state.products.pagination,
            upperPageBound:
              state.products.pagination.upperPageBound +
              state.products.pagination.pageBound,
            lowerPageBound:
              state.products.pagination.lowerPageBound +
              state.products.pagination.pageBound,
          }
        }
      };

    case types.SHIFT_PAGINATION_PAGE_BOUNDS_BACK:
      return {
        ...state,
        products: {
          filter: {
            ...state.products.filter
          },
          list: [...state.products.list],
          pagination: {
            ...state.products.pagination,
            upperPageBound:
              state.products.pagination.upperPageBound -
              state.products.pagination.pageBound,
            lowerPageBound:
              state.products.pagination.lowerPageBound -
              state.products.pagination.pageBound,
          }
        }
      };
    default:
      return state;
  }
};
