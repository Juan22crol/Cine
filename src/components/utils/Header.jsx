import React from 'react'
import ReactPic from '/src/assets/react.svg'
const header = () => {
  return (
    <div className="bg-blue-500 text-white p-4 flex justify-between items-center font-semibold fon">

        <img src={ReactPic} className="w-20 h-10"/>
        <h1 className="text-4xl">Cinesur CJ</h1>
        <nav>
            <a className='pl-10' href="/">Inicio</a>
            <a className='pl-10' href="/buscador">Peliculas</a>
            <a className='pl-10' href="/entradas">Comprar entradas</a>
        </nav>

    </div>
  )
}

export default header