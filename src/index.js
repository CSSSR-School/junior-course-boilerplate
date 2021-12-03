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
    valueMin = valueMin >= 0 ? this.setState.valueMin : this.state.valueMin;
    valueMax = valueMax >= 0 ? this.setState.valueMax : this.state.valueMax;

    function productFilter(item) {
      if(item.price >= valueMin && item.price <= valueMax) {
        return item;
      }
    }

    this.setState({filteredProducts: data.filter(item => productFilter(item))});
    console.log(data.filter(item => productFilter(item)))
  }

  render() {

    return (
      <div className="main">
        <PriceBlock
          inputMinValue={this.state.minPrice}
          inputMaxValue={this.state.maxPrice}
          handleChangeState={this.handleChangeState}
        />
        <MainTitle title="Список товаров" />
        <CardsList listProducts={this.state.filteredProducts} minPrice={this.state.minPrice} maxPrice={this.state.maxPrice} />
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement)
