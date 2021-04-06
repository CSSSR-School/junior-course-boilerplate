import React, {memo} from 'react';
import pt from 'prop-types';
import s from './ProductsList.module.css';
import {PropValidator} from '../../prop-validator';
import Title from '../Title/Title.jsx';
import NoProduct from '../NoProduct/NoProduct.jsx';
import ProductItemContainer from '../../containers/ProductItemContainer.jsx';

const ProductsList = ({products}) => {

  const renderProducts = () => (
    products.map((product) => (
      <li key={product.id}>
        <ProductItemContainer product={product}/>
      </li>
    ))
  );

  return (
    <div>
      <Title>Список товаров</Title>
      {
        !products.length ?
          <NoProduct
            title='По вашему запросу товары не найдены'
            isLinkable={false}
          />
          :
          <ul className={s.productsList}>
            {renderProducts()}
          </ul>
      }
    </div>
  );
};

ProductsList.propTypes = {
  products: pt.arrayOf(PropValidator.PRODUCT_INFO).isRequired
};

ProductsList.defaultProps = {
  products: []
};

export default memo(ProductsList);
