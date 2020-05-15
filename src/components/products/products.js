import React from 'react';
import propTypes from 'prop-types';
import Row from '../row';
import FilterContainer from '../../containers/filter-container/';
import BasketContainer from '../../containers/basket-container';
import { renderList } from './utils';

const Products = ({ fetchData }) => {
  return (
    <Row
      left={<FilterContainer />}
      center={<>{renderList(fetchData)}</>}
      right={<BasketContainer />}
    />
  );
};

Products.propTypes = {
  fetchData: propTypes.shape({
    listLength: propTypes.number,
    isLoading: propTypes.bool,
    error: propTypes.string
  })
};

export default Products;
