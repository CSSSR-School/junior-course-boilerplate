import React from 'react';
import ProductPage from './components/ProductPage/ProductPage.js';
import data from './products.json';
import { maxBy, minBy, toInt } from 'csssr-school-utils';
// import * as R from 'ramda';

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

function getFilteredProducts(arr, min, max, sale, category) {
    return arr.filter((item) => {
        if (item.discount >= sale) {
            if (category === '') {
                return (item.price >= min) && (item.price <= max);
            }
            else {
                return (item.price >= min) && (item.price <= max) && (item.category === category);
            }
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
            category: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
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

    handleClick(event) {
        this.setState({ category: event.target.name })
    }

    render() {
        const {minValue, maxValue, sale, category} = this.state;
        const filteredProducts = getFilteredProducts(data, minValue, maxValue, sale, category);
        console.log(this.state);

        return <ProductPage
            filteredProducts={filteredProducts}
            minValue={minValue}
            maxValue={maxValue}
            sale={sale}
            handleChange={this.handleChange}
            handleClick={this.handleClick}
        />;
    }
}

export default App;
