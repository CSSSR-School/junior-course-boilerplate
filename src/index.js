import React from "react";
import ReactDOM from "react-dom";
import data from './products.json';
import "./index.css";

function App() {
    return (
        <div className="App">
            <h1>Список товаров</h1>
            <List data={data.slice(0, 3)}/>
        </div>
    );
}

class List extends React.Component {
    render() {
        return <ul>
            {this.props.data.map((item) => {
                return <ListItem key={item.id} data={item}/>
            })}
        </ul>
    }
}

class ListItem extends React.Component {
    render() {
        return <li>{this.props.data.name}</li>
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);