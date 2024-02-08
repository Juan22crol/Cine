import React, { useState } from 'react';

function Compra() {
  const [asientoSeleccionado, setAsientoSeleccionado] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);

  const handleAsientoClick = (numeroAsiento) => {
    setAsientoSeleccionado(numeroAsiento);
    setMostrarModal(true);
  };

  const handleComprarClick = () => {
    // Aquí puedes implementar la lógica para comprar el asiento seleccionado
    alert(`Asiento ${asientoSeleccionado} comprado`);
    setMostrarModal(false);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-center text-3xl font-semibold mb-4">Selecciona tu asiento</h1>
      <div className="grid grid-cols-6 gap-4">
        {Array.from({ length: 30 }, (_, index) => (
          <div
            key={index + 1}
            className={`border border-gray-300 rounded-md py-2 px-4 cursor-pointer text-center ${
              asientoSeleccionado === index + 1 ? 'bg-blue-500 text-white' : ''
            }`}
            onClick={() => handleAsientoClick(index + 1)}
          >
            {index + 1}
          </div>
        ))}
      </div>

      {mostrarModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-8 rounded-md">
            <h2 className="text-lg font-semibold mb-4">Confirmar selección</h2>
            <p className="mb-4">Has seleccionado el asiento número {asientoSeleccionado}. ¿Deseas comprarlo?</p>
            <div className="flex justify-center">
              <button
                onClick={handleComprarClick}
                className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
              >
                Comprar
              </button>
              <button onClick={() => setMostrarModal(false)} className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md">
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

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
  );
}

export default Compra;
