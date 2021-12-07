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
      discount: 30,
      filteredProducts: data
    };
  }

  handleChangeState = (name,value) => {
    this.setState({[name]: value});
  }

  render() {
    console.log(this.state.minPrice, this.state.maxPrice)
    return (
      <div className="main">
        <section className="aside-section">
          <PriceBlock
            inputMinValue={this.state.minPrice}
            inputMaxValue={this.state.maxPrice}
            handleChangeState={this.handleChangeState}
            discountValue={this.state.discount}
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
