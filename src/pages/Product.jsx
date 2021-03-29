import React, {memo} from 'react';
import pt from 'prop-types';
import ProductContainer from '../containers/ProductContainer.jsx';

const Product = ({match}) => {
  const {params: {prodID}} = match;

  return (
    <div className="product">
      <ProductContainer prodID={Number(prodID)}/>
    </div>
  );
};

Product.propTypes = {
  match: pt.object.isRequired
};

export default memo(Product);
