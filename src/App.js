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

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minValue: '',
            maxValue: ''
        };
        this.handleChangeMin = this.handleChangeMin.bind(this);
        this.handleChangeMax = this.handleChangeMax.bind(this);
    }

    handleChangeMin(minValue) {
        this.setState({minValue});
    }

    handleChangeMax(maxValue) {
        this.setState({maxValue});
    }

    componentDidMount() {
        getInt(data);
        this.setState({
            minValue: getMinValue(data),
            maxValue: getMaxValue(data)
        });
    }

    render() {
        return <ProductPage
            data={data}
            minValue={this.state.minValue}
            maxValue={this.state.maxValue}
            changeMin={this.handleChangeMin}
            changeMax={this.handleChangeMax}     
        />;
    }
}

export default App;
