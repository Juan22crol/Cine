import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function pelis() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=6c7a0dafe896bb27d64a34e925385bbf`)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results.slice(0, 10));
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return (
    <div className='max-w-screen-xl	ml-48'>
      <h1 className='text-4xl text-center text-blue-500 mb-10 mt-10'>Top 10 Películas Populares</h1>
      <Slider {...settings}>
        {movies.map(movie => (
          <div key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="mr-5"/>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default pelis;
