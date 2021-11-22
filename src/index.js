import React from 'react';
import ReactDOM from 'react-dom';

import data from './products.json';

import './index.css';

function App() {

  function Title(props) {
    return <h1 className="title">{props.title}</h1>
  }

  function List() {
    return (
      <ul className="list">
        {
          Object.entries(data).map( ([key,value]) => {
              for (let i = 0; key < 3;) {
                i++
                return (
                  <li className="list__item" key={key}>{value.name}</li>
                );
              }
            }
          )
        }
      </ul>
    );
  }

  console.log(data)

  return (
    <div className="App">
      <Title title="Список товаров" />
      <List />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement)
