import React from 'react';
import ReactDOM from 'react-dom';
import {maxBy, minBy} from 'csssr-school-utils'
import data from './products.json';
import Title from './components/Title/Title';
import List from './components/List/List'
import PriceFilter from './components/PriceFilter/PriceFilter'
import './index.scss';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filteredData: data,
            minPrice: minBy(obj => obj.price, data).price,
            maxPrice: maxBy(obj => obj.price, data).price
        }

    }

    priceFilterData = (min, max) => {
        const minValue = min >= 0 ? min : this.state.minPrice;
        const maxValue = max >= 0 ? max : this.state.maxPrice;

        this.setState({
            filteredData: data.filter((item) => {
                return item.price >= minValue && item.price <= maxValue
            })
        });
    };

    render() {
        const {minPrice, maxPrice, filteredData} = this.state;

        return <div className="App">
            <div className="AppHeader">
                <Title>Список товаров</Title>
            </div>
            <div className="AppBody">
                <aside className="AppSidebar">
                    <PriceFilter minPrice={minPrice}
                                 maxPrice={maxPrice}
                                 priceFilterData={this.priceFilterData}/>
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
