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
    return minBy((obj) => obj.price, arr).price;
}
  
function getMaxValue(arr) {
    return maxBy((obj) => obj.price, arr).price;
}

function getFilteredProducts(arr, min, max) {
    const filtered = arr.filter((item) => {
        return (item.price >= min) && (item.price <= max);
    });

    return filtered;
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minValue: '',
            maxValue: '',
            filteredProducts: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: parseInt(event.target.value)
        });
    }

    formSubmit() {
        this.setState({
            filteredProducts: getFilteredProducts(data, this.state.minValue, this.state.maxValue)
        });
    }

    componentDidMount() {
        getInt(data);
        this.setState({
            minValue: getMinValue(data),
            maxValue: getMaxValue(data),
            filteredProducts: getFilteredProducts(data, getMinValue(data), getMaxValue(data))
        });
    }

    render() {
        
        // логи для проверки
        console.log('minValue:', this.state.minValue);
        console.log('maxValue:', this.state.maxValue);

        return <ProductPage
            filteredProducts={this.state.filteredProducts}
            minValue={this.state.minValue}
            maxValue={this.state.maxValue}
            handleChange={this.handleChange}
            formSubmit={this.formSubmit}
        />;
    }
}

export default App;
