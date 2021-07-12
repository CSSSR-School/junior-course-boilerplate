import React from 'react';
import ProductPageTitle from './ProductPageTitle/ProductPageTitle.js';
import ProductsList from './ProductsList/ProductsList.js';
import data from '../../products.json';
import s from './ProductPage.module.css';
import ProductsFilter from './ProductsFilter/ProductsFilter';

function ProductPage() {
    return (
        <main>
            <div className={s.productPage}>   
                <ProductPageTitle />
                <div className={s.productPageContent}>
                    <div className={s.productPageFilterWrapper}>
                        <ProductsFilter data={data}/>
                    </div>
                    <ProductsList data={data}/>
                </div>
            </div>
        </main>
    );
}

export default ProductPage;
