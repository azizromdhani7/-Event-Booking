import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [duration, setDuration] = useState("");
  const [rating, setRating] = useState("");
  const [trailer, setTrailer] = useState("");
  const [genre, setGenre] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:8080/api/movies/${id}`)
      .then((response) => {
        const movie = response.data[0];
        setTitle(movie.title);
        setPoster(movie.poster);
        setDuration(movie.duration);
        setRating(movie.rating);
        setTrailer(movie.trailler);
        setGenre(movie.genre);
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Error!",
          text: "Failed to fetch movie data",
          icon: "error"
        });
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.put(`http://localhost:8080/api/movies/${id}`, {
      title: title,
      duration: duration,
      poster: poster,
      trailler: trailer,
      rating: rating,
      genre: genre
    })
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Movie updated successfully",
          icon: "success"
        });
        setTimeout(() => {
          navigate('/', { state: { refresh: true } });
        }, 1500);
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "Failed to update movie",
          icon: "error"
        });
      });
  };

  return (
    <div className="create-movie-container">
      <h1>Update Movie</h1>
      <form onSubmit={handleSubmit} className="create-movie-form">
        <div className="form-group">
          <input 
            type="text" 
            placeholder="Title" 
            value={title}
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
        </div>

        <div className="form-group">
          <input 
            type="text" 
            placeholder="Duration" 
            value={duration}
            onChange={(e) => setDuration(e.target.value)} 
            required 
          />
        </div>

        <div className="form-group">
          <input 
            type="url" 
            placeholder="Poster URL" 
            value={poster}
            onChange={(e) => setPoster(e.target.value)} 
            required 
          />
        </div>

        <div className="form-group">
          <input 
            type="url" 
            placeholder="Trailer URL" 
            value={trailer}
            onChange={(e) => setTrailer(e.target.value)} 
            required 
          />
        </div>

        <div className="form-group">
          <input 
            type="text" 
            placeholder="Genre" 
            value={genre}
            onChange={(e) => setGenre(e.target.value)} 
            required
          />
        </div>

        <div className="form-group">
          <input 
            type="number" 
            placeholder="Rating (0-10)" 
            min="0"
            max="10"
            step="0.1"
            value={rating}
            onChange={(e) => setRating(e.target.value)} 
            required 
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn">Update Movie</button>
          <button type="button" className="cancel-btn" onClick={() => navigate(`/movie/${id}`)}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default Update;