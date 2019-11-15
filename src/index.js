import React, { Component } from 'react';
import ReactDOM from "react-dom";
import data from './products.json';
import "./index.scss";
import MainTitle from "./components/MainTitle/MainTitle"
import List from "./components/List/List"


class App extends Component {
    render() {
        return <div className="App">
            <MainTitle/>
            <List data={data}/>
        </div>
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);