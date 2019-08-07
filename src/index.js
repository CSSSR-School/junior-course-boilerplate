import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'

const data = require('./products.json')
const title = React.createElement(
    'h1',
    { className: 'title' },
    'Список товаров'
)
const goods = React.createElement(
    'ul',
    { className: 'goods' },
    data.map((item, i) =>
        React.createElement(
            'li',
            { key: i },
            item.name
        )
    )
)
             
ReactDOM.render(
    <React.Fragment>
        {title}
        {goods}
    </React.Fragment>,
    document.getElementById('root')
);

