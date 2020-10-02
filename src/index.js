import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import App from './containers/app';

import './index.css';

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider> , rootElement);
