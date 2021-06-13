import React from 'react';
import ReactDOM from 'react-dom';
// import Card from 'csssr-school-product-card';
import ProductPageTitle from './components/ProductPageTitle/ProductPageTitle';
import ProductsList from './components/ProductsList/ProductsList';

import './index.css';
// import styled from './index.module.css';

class ProductPage extends React.Component {
    render() {
        return (
            <div className="productsList">
                <ProductPageTitle />
                <ProductsList />
            </div>
        );
    }
}

ReactDOM.render(
<ProductPage />,
document.getElementById('root')
);
