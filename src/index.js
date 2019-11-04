import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import data from './products.json'

import './index.css'

class App extends Component {

    state = {
        products: data
    }

    renderProductList(num) {
        const actualProductList = this.state.products.slice(0, num)
        return <ul className="product-list">
            {
                actualProductList.map(product => {
                    return <li className="product" key={product.id}>
                        {product.name}
                    </li>
                })
            }
        </ul>
    }


    render() {
        return <div className="App">
            <div className="content">
                <h2 className="title">Список товаров</h2>
                {this.renderProductList(3)}
            </div>
        </div>
    }
}


const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)