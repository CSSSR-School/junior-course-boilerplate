import React from 'react';
import ReactDOM from 'react-dom';

import ProductPageTitle from './components/ProductPageTitle/ProductPageTitle';
import ProductsList from './components/ProductsList/ProductsList';

import './index.css';

class ProductPage extends React.Component {
    render() {
        return (
            <div>
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
