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
    }

    handleChangeMin(minValue) {
        if (Math.sign(minValue) === 0 || Math.sign(minValue) === 1) {
            this.setState({
                minValue: parseInt(minValue),
                filteredProducts: getFilteredProducts(this.state.filteredProducts, minValue, this.state.maxValue)
            });
            // временные логи для проверки:
            console.log(this.state.minValue);
            console.log(this.state.maxValue);
        }
        if (minValue === '') {
            this.setState({minValue: minValue});
        }
    }

    handleChangeMax(maxValue) {
        if (Math.sign(maxValue) === 0 || Math.sign(maxValue) === 1) {
            this.setState({
                maxValue: parseInt(maxValue),
                filteredProducts: getFilteredProducts(this.state.filteredProducts, this.state.minValue, maxValue)
            });
            // временные логи для проверки:
            console.log(this.state.minValue);
            console.log(this.state.maxValue);
        }
        if (maxValue === '') {
            this.setState({maxValue: maxValue});
        }
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
        />;
    }
}

export default App;
