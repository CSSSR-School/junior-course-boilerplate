import React from 'react';
import ProductPageTitle from './ProductPageTitle/ProductPageTitle.js';
import ProductsList from './ProductsList/ProductsList.js';
import data from '../../products.json';

function ProductPage() {
    return (
        <main>
            <div>
                <ProductPageTitle />
                <ProductsList data={data}/>
            </div>
        </main>
    )
}

export default ProductPage;
