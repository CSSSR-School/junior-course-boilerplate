import React from 'react';
import ReactDOM from 'react-dom';
import data from './products.json';

import './index.css';

class Title extends React.Component {
    render() {
        return <h1>Список товаров</h1>;
    }
}

class List extends React.Component {
    render() {
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
            <div className="productsList">
                <Title />
                <ul>{products}</ul>
            </div>
        );
    }
}

ReactDOM.render(
<List />,
document.getElementById('root')
);
