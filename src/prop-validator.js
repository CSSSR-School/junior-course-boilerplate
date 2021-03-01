import {
  string,
  number,
  bool,
  node,
  shape
} from 'prop-types';

export const PropValidator = {
  PRODUCT_INFO: shape({
    id: number.isRequired,
    isInStock: bool.isRequired,
    img: string.isRequired,
    title: node.isRequired,
    price: node.isRequired,
    subPriceContent: node.isRequired,
    maxRating: number.isRequired,
    rating: number.isRequired
  })
};
