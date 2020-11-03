import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from './header'
ReactDOM.render(
  <React.StrictMode>
    <Header></Header>
    
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
