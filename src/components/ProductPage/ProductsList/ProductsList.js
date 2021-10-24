import React from 'react';
import s from './ProductsList.module.css';
import Product from '../Product';
import LogRender from '../../../LogRender';

class ProductsList extends LogRender {
    render() {
        const products = this.props.data.map((product) =>
            <li key={product.id}>
                <Product
                    category={product.category}
                    isInStock={product.isInStock}
                    img={product.img}
                    title={product.title}
                    price={product.price}
                    subPriceContent={product.subPriceContent}
                    maxRating={product.maxRating}
                    rating={product.rating}
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
