import React from "react";
import ReactDOM from "react-dom";
import productsList from './data/products.json';
import ProductsH from './Components/ProductsH/ProductsH';
import ProductsItems from './Components/ProductsItems/ProductsItems';

class App extends React.Component {

  render() {
    return (
      <div className='goods'>
        <ProductsH title={'Список товаров'}/>
        <ProductsItems data={productsList}/>
      </div>
    );
  }

}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
