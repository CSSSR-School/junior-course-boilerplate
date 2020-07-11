import React from "react";
import ReactDOM from "react-dom";

import ProductList from "./components/products-list/products-list"
import Title from "./components/title/title"
import Form from "./components/form/form";
import products from "./products.json";

import "./index.css"

const DEFAULT_SALE_SIZE = 50;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: this.props.products,
      price: this.getMinAndMaxPrice()
    };

    this.updateData = this.updateData.bind(this);
  }

  getMinPrice() {
    return this.props.products.reduce((a,b) => a.price < b.price ? a : b).price;
  }

  getMaxPrice() {
    return this.props.products.reduce((a,b) => a.price > b.price ? a : b).price;
  }

  getMinAndMaxPrice() {
    return {
      min: this.getMinPrice(),
      max: this.getMaxPrice(),
      sale: DEFAULT_SALE_SIZE
    }
  }

  updateData(value) {
    this.setState({price: value})
  }

  filter() {
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
          <ProductList products={this.filter()}/>
        </div>
      </div>
    )
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render (<App products = {products} />, rootElement);
