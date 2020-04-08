import { minBy, maxBy } from 'csssr-school-utils';
import dataJSON from '../components/app/assets/products.json';

const getInitialState = data => {
  const listCategories = Array.from(new Set(data.map(item => item.category)));
  return {
    productsFilter: {
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
      categories: listCategories.reduce(
        (acc, category) => ({ ...acc, [category]: { isActive: false } }),
        {}
      )
    },
    productsList: data
  };
};

export const initialState = getInitialState(dataJSON);
