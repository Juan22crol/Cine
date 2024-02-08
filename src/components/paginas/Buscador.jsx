import React from 'react'
import Footer from '/src/components/utils/Footer.jsx'
import Header from '/src/components/utils/Header.jsx'
import Buscador from '/src/components/utils/Input.jsx'
const peliculas = () => {
  return (
    <div>
      <Header />
      <Buscador />
      <Footer />        
    </div>
  )
}

export default peliculas