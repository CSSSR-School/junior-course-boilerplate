import React from 'react';
import s from './ProductsList.module.css';
import ss from '../ProductItem/ProductItem.module.css';
import ProductItem from 'csssr-school-product-card';
import data from '../../../products.json';
import ratingComponent from '../ratingComponent/ratingComponent.js';

function ProductsList() {
    const products = data.map((product) =>
        <li key={product.id}>
            {ProductItem}
        </li>
    );
    return (
        <ul className={s.productsList}>
            {products}
        </ul>
    );
}

export default ProductsList;
