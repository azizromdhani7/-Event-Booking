import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
const Create = () => {
    const [title, settitle] = useState("");
    const [poster, setposter] = useState("");
    const [duration, setduration] = useState("");
    const [rating, setrating] = useState(null);
    const [trailer, settrailer] = useState("");
    const [genre, setgenre] = useState("");
      const navigate = useNavigate();

      const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/api/movies', {title:title,duration:duration,poster:poster,trailler:trailer,rating:rating , genre : genre})
          .then(response => {
            console.log( response.data);
            navigate('/');
          })
          .catch(error => console.error( "hne",error));
      };
      return (
        <div className="create-movie-container">
          <h1>Add New Movie</h1>
          <form onSubmit={handleSubmit} className="create-movie-form">
            <div className="form-group">
              <input 
                type="text" 
                placeholder="Title" 
                onChange={(e) => {settitle(e.target.value)}} 
                required 
              />
            </div>

            <div className="form-group">
              <input 
                type="text" 
                placeholder="Duration" 
                onChange={(e) => {setduration(e.target.value)}} 
                required 
              />
            </div>

            <div className="form-group">
              <input 
                type="url" 
                placeholder="Poster URL" 
                onChange={(e) => {setposter(e.target.value)}} 
                required 
              />
            </div>

            <div className="form-group">
              <input 
                type="url" 
                placeholder="Trailer URL" 
                onChange={(e) => {settrailer(e.target.value)}} 
                required 
              />
            </div>

            <div className="form-group">
              <input 
                type="text" 
                placeholder="genre" 
                onChange={(e) => {setgenre(e.target.value)}} 
               required/>
            </div>
            <div className="form-group">
              <input 
                type="number" 
                placeholder="Rating (0-10)" 
                min="0"
                max="10"
                step="0.2"
                onChange={(e) => {setrating(e.target.value)}} 
                required 
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-btn">Add Movie</button>
              <button type="button" className="cancel-btn" onClick={() => navigate('/')}>Cancel</button>
            </div>
          </form>
        </div>
      );
    }

export default Create