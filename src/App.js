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
function getFilteredProducts(arr, minValue, maxValue, discountValue) {
    const filtered = arr.filter((item) => {
        return (item.price >= minValue) && (item.price <= maxValue) && (item.discount >= discountValue);
    });
    return filtered;
}

class Product {
    constructor(data) {
        this.id = data.id;
        this.isInStock = data.isInStock;
        this.img = data.img;
        this.title = data.title;
        this.priceInt = data.price;
        this.price = toInt(data.price);
        this.discount = data.discount;
        this.subPriceContent = data.subPriceContent;
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minValue: '',
            maxValue: '',
            discountValue: 0,
            filteredProducts: [],
            products: []
        };
        this.handleChangeMin = this.handleChangeMin.bind(this);
        this.handleChangeMax = this.handleChangeMax.bind(this);
        this.products = this.getProducts(data);
        this.discountChange = this.discountChange.bind(this);
    }


    handleChangeMin(minValue) {
        this.setState({
            minValue: parseInt(minValue),   
        },()=>{
            this.setState({
                filteredProducts: getFilteredProducts(this.products, this.state.minValue, this.state.maxValue, this.state.discountValue)
            });
            // временные логи для проверки:
            console.log('minValue:', this.state.minValue);
            console.log('maxValue:', this.state.maxValue);
        });
    }

    handleChangeMax(maxValue) {
        this.setState({
            maxValue: parseInt(maxValue), 
        },()=>{
            this.setState({
                filteredProducts: getFilteredProducts(this.products, this.state.minValue, this.state.maxValue, this.state.discountValue)
            });
            // временные логи для проверки:
            console.log('minValue:', this.state.minValue);
            console.log('maxValue:', this.state.maxValue);
        });
    }

    getProducts(arr) {
        let test = arr.map((item) => {
            return new Product(item);
        });
        // debugger;
        return test;
    }

    getDiscountedPrice() {

    }

    discountChange(discountValue) {
        this.setState({ discountValue: discountValue }, () => {
            this.setState({
                filteredProducts: getFilteredProducts(this.products, this.state.minValue, this.state.maxValue, this.state.discountValue)
            });
            console.log(this.state.discountValue); // лог для теста
            console.log(this.state.filteredProducts); // лог для теста
        });
    }

    componentDidMount() {
        // getInt(data);
        const min = getMinValue(this.products);
        const max = getMaxValue(this.products);
        this.setState({
            minValue: min,
            maxValue: max,
            filteredProducts: getFilteredProducts(this.products, min, max, this.state.discountValue),
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
            discountValue={this.state.discountValue}
            discountChange={this.discountChange}
        />;
    }
}

export default App;
