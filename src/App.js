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

// фильтрую массив по min и max значениям цены
function getFilteredProducts(arr, minValue, maxValue) {
    const filtered = arr.filter((item) => {
        return (item.price >= minValue) && (item.price <= maxValue);
    });
    return filtered;
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minValue: '',
            maxValue: '',
            filteredProducts: []
        };
        this.handleChangeMin = this.handleChangeMin.bind(this);
        this.handleChangeMax = this.handleChangeMax.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    handleChangeMin(minValue) {
        this.setState({minValue: parseInt(minValue)});
    }

    handleChangeMax(maxValue) {
        this.setState({maxValue: parseInt(maxValue)});
    }

    formSubmit() {
        this.setState({
            filteredProducts: getFilteredProducts(this.state.filteredProducts, this.state.minValue, this.state.maxValue)
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
        return <ProductPage
            data={data}
            filteredProducts={this.state.filteredProducts}
            minValue={this.state.minValue}
            maxValue={this.state.maxValue}
            changeMin={this.handleChangeMin}
            changeMax={this.handleChangeMax}
            formSubmit={this.formSubmit}
        />;
    }
}

export default App;
