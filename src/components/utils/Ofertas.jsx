import React from 'react'
import O1 from '/src/assets/o1.jpg'
import O2 from '/src/assets/o2.jpg'
import O3 from '/src/assets/o3.jpg'


const Ofertas = () => {
  return (
    <div>

      <div className="flex justify-around mt-32">
        <div>
          <img src={O1} alt="Imagen 1" />
        </div>
        <div>
          <img src={O2} alt="Imagen 2" />
        </div>
        <div>
          <img src={O3} alt="Imagen 3" />
        </div>
      </div>
      <hr className="border-0 h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 shadow-md my-4" />



      {/* Segunda fila */}
      <div className="text-center text-5xl">
        ENCUENTRANOS EN GOOGLE MAPS
      </div>
      <hr className="border-0 h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 shadow-md my-4" />




      {/* Tercera fila */}
      <div className="flex justify-center mb-10">
        <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50372.702320074444!2d-4.873207251367212!3d37.90019269999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6cdf3847a3889b%3A0xcde87e8031ce6413!2smk2%20Cinesur%20El%20Tablero!5e0!3m2!1ses!2ses!4v1707331853225!5m2!1ses!2ses"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
    
  )
}

export default Ofertas