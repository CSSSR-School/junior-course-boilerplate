import React from 'react';
import ProductPageTitle from './ProductPageTitle/ProductPageTitle.js';
import ProductsList from './ProductsList/ProductsList.js';

class ProductPage extends React.Component {
    render() {
        return (
            <main>
                <div>
                    <ProductPageTitle />
                    <ProductsList />
                </div>
            </main>
        );
    }
}

export default ProductPage;
