import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import products from './products.json';
import './index.css';

ReactDOM.render(<App products={products} />, document.getElementById('root'));
