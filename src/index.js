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
      filteredProducts: data
    };
  }

  handleChangeState = (name,filteredValue) => {
    this.setState({name: filteredValue});
    this.setState({
      filteredProducts: data.filter((item) => {
        return item.price >= this.state.minPrice && item.price <= this.state.minPrice
        && item.discount === this.state.discount
      })
    })
  }

  render() {
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
          <CardsList listProducts={this.filteredProducts}  />
        </section>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement)
