import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import MovieList from '../src/components/Movielist';
import Onemovie from '../src/components/onemovie';
import Create from '../src/components/Create';
import Update from '../src/components/update';
import Navbar from '../src/components/Navbar';


function App() {
  

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieList  />} />
        <Route path="/movie/:id" element={<Onemovie />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </Router>
  );
}

export default App;