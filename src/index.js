import React from 'react';
import ReactDOM from 'react-dom';
import { JssProvider } from 'react-jss';
import App from './js/app';

ReactDOM.render(
  (<JssProvider>
    <App />
  </JssProvider>),
  document.getElementById('canvas-poc-root')
);
