import React, { Component } from 'react';
import ReactDOM from "react-dom";
import data from './products.json';
import "./index.css";
import Header from "./components/Header"
import List from "./components/List/List"


class App extends Component {
    render() {
        return <div className="App">
            <Header/>
            <List data={data}/>
        </div>
    }
}

// class List1 extends React.Component {
//     render() {
//         return <ul>
//             {this.props.data.map((item) => {
//                 return <ListItem key={item.id} data={item}/>
//             })}
//         </ul>
//     }
// }
//
// class ListItem extends React.Component {
//     render() {
//         return <li>{this.props.data.name}</li>
//     }
// }

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);