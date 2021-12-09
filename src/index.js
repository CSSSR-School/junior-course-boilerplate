import React from 'react';
import ReactDOM from 'react-dom';

import data from './products.json';

import MainTitle from './components/MainTitle/MainTitle';
import CardsList from './components/CardsList/CardsList';
import PriceBlock from './components/PriceBlock/PriceBlock';

import {minBy, maxBy} from 'csssr-school-utils';

import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minPrice: minBy(obj => obj.price, data).price,
      maxPrice: maxBy(obj => obj.price, data).price,
      discount: minBy(obj => obj.discount, data).discount,
      filteredProducts: data,
    };
  }

  handleChangeState = (name,filteredValue) => {
    this.setState({[name]: filteredValue});
    this.setState(state => {
      let products = state.filteredProducts;
      let filteredProducts = products.filter((listItem) => {
        return listItem.price >= state.minPrice
          && listItem.price <= state.maxPrice && listItem.discount === state.discount
      });
      products = [...filteredProducts];
      return {filteredProducts: products}
    })
  }

  render() {
    return (
      <div className="main">
        <section className="aside-section">
          <PriceBlock
            inputMinValue={this.state.minPrice}
            inputMaxValue={this.state.maxPrice}
            discountValue={this.state.discount}
            handleChangeState={this.handleChangeState}
          />
        </section>
        <section className="main-section">
          <MainTitle title="Список товаров" />
          <CardsList listProducts={this.state.filteredProducts} discount={this.state.discount} minPrice={this.state.minPrice} maxPrice={this.state.maxPrice} />
        </section>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement)
