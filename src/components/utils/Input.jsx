import React, { useState, useEffect } from 'react';

function Inputs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=6c7a0dafe896bb27d64a34e925385bbf`)
        .then(response => response.json())
        .then(data => {
          setMovies(data.results.slice(0, 20));
        })
        .catch(error => console.error('Error fetching data:', error));
    } else {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=6c7a0dafe896bb27d64a34e925385bbf&query=${searchQuery}`)
        .then(response => response.json())
        .then(data => {
          setMovies(data.results.slice(0, 20)); 
        })
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [searchQuery]);

  const handleInputChange = event => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-3xl font-semibold my-4 text-blue-600">Buscador de Películas</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar película..."
          value={searchQuery}
          onChange={handleInputChange}
          className="border border-gray-300 rounded px-4 py-2 w-full"
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {movies.map(movie => (
          <div key={movie.id} className="text-center">
            <h2 className="text-lg font-semibold mb-2 text-blue-700">{movie.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="mx-auto" />
            <p className="text-sm text-blue-500">{movie.overview.slice(0, 60)}{movie.overview.length > 60 ? '...' : ''}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inputs;
