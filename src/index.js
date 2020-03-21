import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Open Sans:300,600', 'sans-serif']
  }
});

ReactDOM.render(<App />,
  document.getElementById('root'));
