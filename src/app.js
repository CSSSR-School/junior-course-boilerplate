import React from 'react';
import productsData from './products.json';

function ProductsList(props) {
  return (
    <ul className="products__list">
      {props.data.map(elem =>
        <li className="products__item" key={elem.id}>{elem.name.slice(0, -1) + ' ' + elem.id}</li>
      )}
    </ul>
  )
}

function App() {
  return (
    <div className="wrapper">
      <section className="products">
        <h1 className="products__title">Список товаров</h1>
        <ProductsList data={productsData}/>
      </section>
    </div>
  );
}


export default App;
