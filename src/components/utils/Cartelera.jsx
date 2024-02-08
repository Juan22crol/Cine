import React, { useState, useEffect } from 'react';

const Cartelera = () => {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=6c7a0dafe896bb27d64a34e925385bbf&primary_release_year=2012&sort_by=popularity.desc&page=1`)
      .then(response => response.json())
      .then(data => {
        setTopMovies(data.results.slice(0, 3));
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-3xl font-semibold my-4 text-blue-600">Cartelera de este mes</h1>
      <div className="flex justify-center gap-4">
        {topMovies.map(movie => (
          <div key={movie.id} className="text-center">
            <h2 className="text-lg font-semibold mb-2 text-blue-700">{movie.title}</h2>
            <a href="/comprar">
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="mx-auto w-48 h-auto text-blue-500" style={{ width: "200px" }} />
            </a>
            <p className="text-sm max-w-md mx-auto">{movie.overview}</p> {/* Establecer un ancho máximo */}
          </div>
        ))}
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
  );
}

export default Cartelera;
