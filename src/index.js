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
      valueMin: '',
      valueMax: '',
      filteredProducts: data,
      minPrice: minBy(obj => obj.price, data).price,
      maxPrice: maxBy(obj => obj.price, data).price
    };
  }

  handleChangeState = (valueMin, valueMax) => {
    valueMin = valueMin >= 0 ? valueMin : this.state.valueMin;
    valueMax = valueMax >= 0 ? valueMax : this.state.valueMax;

    this.setState({
      filteredProducts: data.filter((item) => {
        return item.price >= valueMin && item.price <= valueMax
      })
    })
  }

  render() {

    return (
      <div className="main">
        <PriceBlock
          inputMinValue={this.state.minPrice}
          inputMaxValue={this.state.maxPrice}
          onSubmit={this.handleChangeState}
        />
        <MainTitle title="Список товаров" />
        <CardsList listProducts={this.state.filteredProducts} minPrice={this.state.minPrice} maxPrice={this.state.maxPrice} />
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement)
