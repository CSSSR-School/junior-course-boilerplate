import React from 'react';
import ReactDOM from 'react-dom';
import {maxBy, minBy} from 'csssr-school-utils'
import data from './products.json';
import Title from './components/Title/Title';
import List from './components/List/List';
import PriceFilter from './components/PriceFilter/PriceFilter';
import './index.scss';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filteredData: data,
            minPrice: minBy(obj => obj.price, data).price,
            maxPrice: maxBy(obj => obj.price, data).price,
            discount: 0
        }

    }

    priceFilterData = (min, max, discount) => {
        return data.filter((item) => {
            return item.price >= min && item.price <= max
        })
    };

    handleChangeMinPrice = (value) => {
        this.setState({
            minPrice: value,
            filteredData: this.priceFilterData(value, this.state.maxPrice, this.state.discount)
        })
    };
    handleChangeMaxPrice = (value) => {
        this.setState({
            maxPrice: value,
            filteredData: this.priceFilterData(this.state.minPrice, value, this.state.discount)
        })
    };
    handleChangeDiscount = (value) => {
        this.setState({
            discount: value,
            filteredData: this.priceFilterData(this.state.minPrice, this.state.maxPrice, value)
        })
    };

    render() {
        const {minPrice, maxPrice, discount, filteredData} = this.state;

        return <div className="App">
            <div className="AppHeader">
                <Title>Список товаров</Title>
            </div>
            <div className="AppBody">
                <aside className="AppSidebar">
                    <PriceFilter {...this.state}
                                 handleChangeMinPrice={this.handleChangeMinPrice}
                                 handleChangeMaxPrice={this.handleChangeMaxPrice}
                                 handleChangeDiscount={this.handleChangeDiscount}
                    />
                </aside>
                <main className="AppMain">
                    <List data={filteredData}/>
                </main>
            </div>
        </div>
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
