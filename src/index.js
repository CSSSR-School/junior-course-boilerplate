import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {maxBy, minBy} from 'csssr-school-utils'
import data from './products.json';
import MainTitle from './components/MainTitle/MainTitle';
import List from './components/List/List'
import PriceFilter from './components/PriceFilter/PriceFilter'
import './index.scss';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filteredData: data,
            minPrice: minBy(obj => obj.price, data).price,
            maxPrice: maxBy(obj => obj.price, data).price
        }

    }

    priceFilterData = (min, max) => {
        min = min >= 0 ? min : this.state.minPrice;
        max = max >= 0 ? max : this.state.maxPrice;

        this.setState({
            filteredData: data.filter((item) => {
                return item.price >= min && item.price <= max
            })
        });
    };

    render() {
        return <div className="App">
            <MainTitle/>
            <div className="AppBody">
                <aside className="AppSidebar">
                    <PriceFilter minPrice={this.state.minPrice} maxPrice={this.state.maxPrice} priceFilterData={this.priceFilterData}/>
                </aside>
                <main className="AppMain">
                    <List data={this.state.filteredData}/>
                </main>
            </div>
        </div>
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
