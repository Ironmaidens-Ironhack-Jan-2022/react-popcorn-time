import { useState } from "react";
import moviesArr from "./data/movies.json";
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {

  const [movies, setMovies] = useState(moviesArr);

  return (
    <div className="App">
      <Header moviesArr={movies} />
      <Main moviesArr={movies} />
      <Footer />
    </div>
  );
}

export default App;
