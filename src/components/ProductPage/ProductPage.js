import React from 'react';
import ProductPageTitle from './ProductPageTitle/ProductPageTitle.js';
import ProductsList from './ProductsList/ProductsList.js';
import data from '../../products.json';
import s from './ProductPage.module.css';

function ProductPage() {
    return (
        <main>
            <div className={s.productPage}>
                <div>
                    <ProductPageTitle />
                    <ProductsList data={data}/>
                </div>
            </div>
        </main>
    );
}

export default ProductPage;
