import React from 'react';
import ReactDOM from 'react-dom';

import data from './products.json';
import {minBy, maxBy} from 'csssr-school-utils';

import MainTitle from './components/MainTitle/MainTitle';
import CardsList from './components/CardsList/CardsList';
import PriceBlock from './components/PriceBlock/PriceBlock';
import InputDiscount from './components/InputDiscount/InputDiscount';
import Categories from './components/Categories/Categories';
import memoize from './utils/memoize';

import './index.css';
import { BaseContext } from './components/BaseContext/BaseContext';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minPrice: minBy(obj => obj.price, data).price,
      maxPrice: maxBy(obj => obj.price, data).price,
      discount: minBy(obj => obj.discount, data).discount,
      filteredProducts: data,
      category: 'books'
    };
  }

  handleChangeState = (name,filteredValue) => {
    this.setState({[name]: filteredValue});
  }

  categoryChangeState = (event) => {
    const { value } = event.target
    this.setState({category: value});
  }

  filterProducts = memoize((data, minPrice, maxPrice, discount, category) => {
    return data.filter((item) => {
      if (category !== '') {
        return item.price >= minPrice && item.price <= maxPrice && item.discount >= discount && item.category === category
      }
      else {
        return item.price >= minPrice && item.price <= maxPrice && item.discount >= discount
      }
    })
  })

  render() {
    return (
      <BaseContext.Provider value={
        {...this.state,
          categoryChangeState:this.categoryChangeState
        }
      }>
        <div className="main">
          <section className="aside-section">

            <PriceBlock
              inputMinValue={this.state.minPrice}
              inputMaxValue={this.state.maxPrice}
              handleChangeState={this.handleChangeState}
            />
            <div className="aside-block discount-block">
              <InputDiscount title='Скидка' name='discount' value={this.state.discount} onChange={this.handleChangeState}  />
            </div>
            <Categories/>
          </section>

          <section className="main-section">
            <MainTitle title="Список товаров" />
            <CardsList listProducts={this.filterProducts(this.state.filteredProducts,
              this.state.minPrice, this.state.maxPrice, this.state.discount, this.state.category)}
            />
          </section>
        </div>
      </BaseContext.Provider>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement)
