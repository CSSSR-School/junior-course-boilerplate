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

// фильтрую массив по мин и макс значениям цены товара
function getFilteredProducts(arr, minValue, maxValue) {
    const filtered = arr.filter((item) => {
        return (item.price >= minValue) && (item.price <= maxValue);
    });
    // console.log(filtered);
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

    // здесь я хочу записать в стэйт фильтрованный по введенным пользователем минимальному и максимальному значениям список, но пока что при отправке формы список не перерендеривается
    formSubmit(data, minValue, maxValue) {
        this.setState({
            filteredProducts: getFilteredProducts(data, minValue, maxValue)
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
