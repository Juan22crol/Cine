import React from 'react';
import App from '/src/App.jsx';
import Buscador from '/src/components/paginas/Buscador.jsx'
import Entradas from '/src/components/paginas/Entradas.jsx'
import Comprar from '/src/components/paginas/Comprar.jsx'

import { Routes, Route } from 'react-router-dom'

class Router extends React.Component {
    render(){
        return (
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/buscador' element={<Buscador />} />
                <Route path='/entradas' element={<Entradas />} />
                <Route path='/comprar' element={<Comprar />} />

            </Routes>
        );
    }
}

export default Router   