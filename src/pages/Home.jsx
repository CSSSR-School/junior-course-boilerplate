import React, {memo} from 'react';
import ProductFilterContainer from '../containers/ProductFilterContainer.jsx';
import ProductsListContainer from '../containers/ProductsListContainer.jsx';
import PaginationContainer from '../containers/PaginationContainer.jsx';

const Home = () => {

  return (
    <div className='dashboard'>
      <ProductFilterContainer/>
      <ProductsListContainer/>
      <PaginationContainer/>
    </div>
  );
};

export default memo(Home);
