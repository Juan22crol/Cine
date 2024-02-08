import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './components/rutas/Router'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>
)
