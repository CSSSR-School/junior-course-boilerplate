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
            sale: 0,
            filteredProducts: [],
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

    componentDidMount() {
        getInt(data);
        this.setState({
            minValue: getMinValue(data),
            maxValue: getMaxValue(data),
            filteredProducts: getFilteredProducts(data, getMinValue(data), getMaxValue(data))
        });
    }

    render() {
        const filteredProducts = getFilteredProducts(data, this.state.minValue, this.state.maxValue);
        // логи для проверки
        console.log('minValue:', this.state.minValue);
        console.log('maxValue:', this.state.maxValue);
        console.log('sale', this.state.sale);
        console.log('filteredProducts', this.state.filteredProducts);

        return <ProductPage
            filteredProducts={filteredProducts}
            minValue={this.state.minValue}
            maxValue={this.state.maxValue}
            discountValue={this.state.sale}
            handleChange={this.handleChange}
        />;
    }
}

export default App;
