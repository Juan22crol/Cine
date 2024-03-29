import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './components/rutas/Router';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import { store } from './store/store'
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={ store }>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
);
