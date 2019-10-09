import React from 'react';
import ReactDOM from 'react-dom';
import products from './products.json';

function ProductItem(props) {
  //Здесь не надо указывать ключ
  return (<li>{props.name}</li>);
}

function App(props) {
  const products = props.products;

  const listItems = products.slice(0,3).map((product) => { 
      return <ProductItem key = {product.id} name = {product.name} />
  }); 

  return (
    <React.Fragment>
      <h1>Список товаров</h1>
      <ul>{listItems}</ul>
    </React.Fragment>
  );
}

ReactDOM.render(<App products={products}/>, document.getElementById('root'))