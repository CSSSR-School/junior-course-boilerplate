import React from 'react';
import ReactDOM from 'react-dom';
import {maxBy, minBy} from 'csssr-school-utils'
import data from './products.json';
import Title from './components/Title/Title';
import List from './components/List/List';
import PriceFilter from './components/PriceFilter/PriceFilter';
import './index.scss';
import memoize from './containers/memoize';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: data,
            minPrice: minBy(obj => obj.price, data).price,
            maxPrice: maxBy(obj => obj.price, data).price,
            discount: minBy(obj => obj.discount, data).discount,
        }
    }


    handleChangeMinPrice = (value) => {
        this.setState({
            minPrice: value,
        })
    };

    handleChangeMaxPrice = (value) => {
        this.setState({
            maxPrice: value,
        })
    };

    handleChangeDiscount = (value) => {
        this.setState({
            discount: value,
        })
    };


    getFilteredData = memoize((data, minPrice, maxPrice, discount) => {
        return data.filter((item) => {
            return item.price >= minPrice && item.price <= maxPrice && item.discount >= discount
        })
    });


    render() {
        const {data, minPrice, maxPrice, discount} = this.state;
        return <div className="App">
            <div className="AppHeader">
                <Title>Список товаров</Title>
            </div>
            <div className="AppBody">
                <aside className="AppSidebar">
                    <PriceFilter minPrice={minPrice}
                                 maxPrice={maxPrice}
                                 discount={discount}
                                 handleChangeMinPrice={this.handleChangeMinPrice}
                                 handleChangeMaxPrice={this.handleChangeMaxPrice}
                                 handleChangeDiscount={this.handleChangeDiscount}
                    />
                </aside>
                <main className="AppMain">
                    <List data={this.getFilteredData(data, minPrice, maxPrice, discount)}/>
                </main>
            </div>
        </div>
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
