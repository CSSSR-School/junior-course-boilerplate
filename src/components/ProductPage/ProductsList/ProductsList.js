import React from 'react';
import s from './ProductsList.module.css';
// import ProductItem from 'csssr-school-product-card';
import Product from '../Product';
// import ratingComponent from '../ratingComponent/ratingComponent.js';
import LogRender from '../../../LogRender';

class ProductsList extends LogRender {
    render() {
        console.log('ProductsList#render');
        const products = this.props.data.map((product) =>
            <li key={product.id}>
                <Product
                    isInStock={product.isInStock}
                    img={product.img}
                    title={product.title}
                    price={product.price}
                    subPriceContent={product.subPriceContent}
                    maxRating={product.maxRating}
                    rating={product.rating}
                    // ratingComponent={ratingComponent}
                />
            </li>
        );
        return (
            <ul className={s.productsList}>
                {products}
            </ul>
        );
    }
}

export default ProductsList;
