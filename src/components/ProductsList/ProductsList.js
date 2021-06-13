import React from 'react';
import data from '../../products.json';

const ProductsList = () => {
    const products = data.map(function(product) {
        if (product.id < 4) {
            return (
                <li key={product.id}>
                    {product.name}
                </li>
            );
        }
    });

    return (
        <ul>{products}</ul>
    );
}

export default ProductsList;
