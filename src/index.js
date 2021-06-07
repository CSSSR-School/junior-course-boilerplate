import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Title extends React.Component {
    render() {
        return <h1>Список товаров</h1>;
    }
}

class List extends React.Component {
    render() {
        return (
            <div className="listOfProducts">
                <Title />
                <ul>
                    <li id="1">Имя товара1</li>
                    <li id="2">Имя товара2</li>
                    <li id="3">Имя товара3</li>
                </ul>
            </div>
        );
    }
}

ReactDOM.render(
<List />,
document.getElementById('root')
);
