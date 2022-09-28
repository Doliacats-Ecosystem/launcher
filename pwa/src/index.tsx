import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import run from './utils/run';


const wrappedApp = (
  <React.StrictMode >
    <App />
  </React.StrictMode >
);

(window as any).run = run;

ReactDOM.render(wrappedApp, document.getElementById('root'));

