import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Onemovie = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/api/movies/${id}`)
      .then((response) => {
        setMovie(response.data[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:8080/api/movies/${id}`)
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Movie has been deleted.",
              icon: "success"
            });
            navigate('/', { state: { refresh: true } });
          })
          .catch((error) => {
            console.error(error);
            Swal.fire({
              title: "Error!",
              text: "Failed to delete movie",
              icon: "error"
            });
          });
      }
    });
  };

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-details">
      <img src={movie.poster} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>Duration: {movie.duration}</p>
      <div className="movie-actions">
        <button onClick={() => navigate(`/update/${id}`)}>Update Movie</button>
        <button onClick={handleDelete} className="delete-btn">Delete Movie</button>
      </div>
    </div>
  );
};

export default Onemovie;