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
          data.map( ({id, name}) => {
              for (let i = 0; id < 4;) {
                i++
                return (
                  <li className="list__item" key={id}>{name}</li>
                );
              }
            }
          )
        }
      </ul>
    );
  }

  return (
    <div className="App">
      <Title title="Список товаров" />
      <List />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement)
