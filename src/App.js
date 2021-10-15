import React from 'react';
import ProductPage from './components/ProductPage/ProductPage.js';
import data from './products.json';
import { maxBy, minBy, toInt } from 'csssr-school-utils';
import * as R from 'ramda';

function getInt(arr) {
    arr.forEach((item) => {
      return (item.price = toInt(item.price));
    });
}
  
function getMinValue(arr) {
    getInt(arr);
    return minBy((obj) => obj.price, arr).price;
}
  
function getMaxValue(arr) {
    return maxBy((obj) => obj.price, arr).price;
}

function getFilteredProducts(arr, min, max, sale) {
    return arr.filter((item) => {
        if (item.discount >= sale) {
            return (item.price >= min) && (item.price <= max);
        }
    });
}

/* на будущее
function memoizeByResult(fn) {
    let memoizedResult = null;
    return (callback, ...args) => {
      fn.apply(null, [(result) => {
        if (!R.equals(memoizedResult, result)) {
          memoizedResult = result;
        }
        callback(memoizedResult);
      }, ...args]);
    }
}

let memoizedGetFilteredProducts = memoizeByResult(getFilteredProducts);
*/

class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            minValue: getMinValue(data),
            maxValue: getMaxValue(data),
            sale: 0,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log('App#hangleChange');
        if (event.target.value === '') {
            this.setState({
                [event.target.name]: event.target.value
            }); 
        } else {
            this.setState({
                [event.target.name]: parseInt(event.target.value)
            }); 
        }
    }

    render() {
        console.log('App#render');
        const {minValue, maxValue, sale} = this.state;
        const filteredProducts = getFilteredProducts(data, minValue, maxValue, sale);
        // логи для проверки
        console.log(filteredProducts);
        // console.log('minValue:', minValue);
        // console.log('maxValue:', maxValue);
        // console.log('sale', sale);

        return <ProductPage
            filteredProducts={filteredProducts}
            minValue={minValue}
            maxValue={maxValue}
            sale={sale}
            handleChange={this.handleChange}
        />;
    }
}

export default App;
