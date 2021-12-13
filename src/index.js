import React from 'react';
import ReactDOM from 'react-dom';

import data from './products.json';

import MainTitle from './components/MainTitle/MainTitle';
import CardsList from './components/CardsList/CardsList';
import PriceBlock from './components/PriceBlock/PriceBlock';

import {minBy, maxBy} from 'csssr-school-utils';

import './index.css';

const memoize = (fn) => {
  const prevCall = {
    args: []
  }
  return function(...args) {
    let equal = true;
    args.forEach((el,index) => {
      equal = equal && prevCall.args[index] === el
    })
    if (!equal) {
      prevCall.args = args
      prevCall.result = fn(...args)
    }
    return prevCall.result
  }
}

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
  }

  filterProducts = memoize((data, minPrice, maxPrice, discount) => {
    return data.filter((item) => {
      return item.price >= minPrice && item.price <= maxPrice && item.discount >= discount
    })
  })

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
          <CardsList listProducts={this.filterProducts(this.state.filteredProducts, this.state.minPrice, this.state.maxPrice, this.state.discount)}  />
        </section>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement)
