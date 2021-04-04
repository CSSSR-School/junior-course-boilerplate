import {
  string,
  number,
  node,
  shape
} from 'prop-types';

export const PropValidator = {
  PRODUCT_INFO: shape({
    id: number.isRequired,
    name: node.isRequired,
    category: string.isRequired,
    status: string.isRequired,
    img: string.isRequired,
    price: node.isRequired,
    discount: node.isRequired,
    stars: number.isRequired
  })
};
