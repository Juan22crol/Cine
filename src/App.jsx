import './App.css'
import Header from '/src/components/utils/Header.jsx'
import Pelis from '/src/components/utils/Pelis.jsx'
import Footer from '/src/components/utils/Footer.jsx'
import Ofertas from '/src/components/utils/Ofertas.jsx'

function App() {

  return (
    <>
      <Header />
      <Pelis />
      <Ofertas />
      <Footer />
    </>
  )
}

export default App;
