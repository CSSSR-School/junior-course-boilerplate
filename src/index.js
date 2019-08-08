import React from "react";
import ReactDOM from "react-dom";
import data from './products.json';

import './index.css';


function App() {
    return (
        <div className="App">
            <ul className="data-list">
                {data.slice(0,3).map(item => (
                    <li key={item.id} > {item.name} </li>
                ))}
            </ul>
        </div>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(< App />, rootElement);