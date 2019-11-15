import React, { Component } from 'react';
import ReactDOM from "react-dom";
import data from './products.json';
import "./index.css";
import Header from "./components/Header/Header"
import List from "./components/List/List"


class App extends Component {
    render() {
        return <div className="App">
            <Header/>
            <List data={data}/>
        </div>
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);