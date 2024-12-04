import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const fetchMovies = () => {
    axios.get('http://localhost:8080/api/movies')
      .then(response => {
        if (response.data) {
          setMovies(response.data);
          console.log("hedhi data",response.data)

        }
      })
      .catch(err => {
        console.error(err);
      })
   
  };

  useEffect(() => {
    console.log("Fetching ...");
    fetchMovies();
  }, [location.state])

  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  const handleAddMovie = () => {
    navigate('/create');
  };

 

   <div className="loading">Loading...</div>;

  return (
    <div className="movie-list-container">
      <header className="movie-list-header">
        <h1>Movies Collection</h1>
        <button className="add-movie-btn" onClick={handleAddMovie}>
          Add Movie
        </button>
      </header>
      
      <div className="movies-grid">
        {movies.map((movie) => (
          <div 
            key={movie.idmovies} 
            className="movie-card"
            onClick={() => handleMovieClick(movie.idmovies)}
          >
            <div className="movie-poster">
              <img src={movie.poster} alt={movie.title} />
            </div>
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p className="movie-duration">Duration: {movie.duration}</p>
              <p className="movie-genre">{movie.genre}</p>
              <p className="movie-rating">Rating: {movie.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;