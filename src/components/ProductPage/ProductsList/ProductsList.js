import React from 'react';
import s from './ProductsList.module.css';
import ss from '../ProductItem/ProductItem.module.css';
import ProductItem from 'csssr-school-product-card';
import ratingComponent from '../ratingComponent/ratingComponent.js';

function ProductsList(props) {
    const products = props.data.map((product) =>
        <li key={product.id} className={ss.productItem}>
            <ProductItem isInStock={product.isInStock} img={product.img} title={product.title} price={product.price} subPriceContent={product.subPriceContent} maxRating={product.maxRating} rating={product.rating} ratingComponent={ratingComponent}/>
        </li>
    );
    return (
        <ul className={s.productsList}>
            {products}
        </ul>
    );
}

export default ProductsList;
