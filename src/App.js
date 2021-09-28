import React from 'react';
import ProductPage from './components/ProductPage/ProductPage.js';
import data from './products.json';
import { maxBy, minBy, toInt } from 'csssr-school-utils';

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
    const filtered = arr.filter((item) => {
        if (item.discount >= sale) {
            return (item.price >= min) && (item.price <= max);
        }
    });

    return filtered;
}

class App extends React.Component {
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
        const {minValue, maxValue, sale} = this.state;
        const filteredProducts = getFilteredProducts(data, minValue, maxValue, sale);
        // логи для проверки
        console.log('minValue:', minValue);
        console.log('maxValue:', maxValue);
        console.log('sale', sale);

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
