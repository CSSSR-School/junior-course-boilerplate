import React from 'react';
import ReactDOM from 'react-dom';

import ProductList from './components/ProductList'
import Title from './components/Title'
import Form from './components/Form';
import products from './products.json';

import './index.css'

const DEFAULT_SALE_SIZE = 50;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: this.props.products,
      price: this.getPrice()
    };

    this.updateData = this.updateData.bind(this);
  }

  getMinPrice() {
    return this.props.products.reduce((a,b) => a.price < b.price ? a : b).price;
  }

  getMaxPrice() {
    return this.props.products.reduce((a,b) => a.price > b.price ? a : b).price;
  }

  getPrice() {
    return {
      min: this.getMinPrice(),
      max: this.getMaxPrice(),
      sale: DEFAULT_SALE_SIZE
    }
  }

  updateData(value) {
    this.setState({price: value})
  }

  getProducts() {
    const currentPrice = this.state.price;
    const saleSize = currentPrice.sale / 100 ;


    return this.state.products.filter((product) =>
        (product.price >= currentPrice.min)
        && (product.price <= currentPrice.max)
        && (product.price === (product.subPriceContent - product.subPriceContent * saleSize)))
  }

  render() {
    return (
      <div className='appWrapper'>
        <Title text='Список товаров'/>
        <div className='wrapper'>
          <Form
            price={this.state.price}
            updateData={this.updateData}/>
          <ProductList products={this.getProducts()}/>
        </div>
      </div>
    )
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render (<App products = {products} />, rootElement);
