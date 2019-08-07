import React from "react";
import ReactDOM from "react-dom";

import data from "./products.json";

import "./styles.css";

const ProductsList = ({ products }) => {
    const listItems = products.map(item => {
        const { id } = item;

        return <li key={id}>Имя товара {id}</li>;
    });

    return <ul>{listItems}</ul>;
};

function App() {
    return (
        <div>
            <h1>Список товаров </h1>
            <ProductsList products={data} />
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
