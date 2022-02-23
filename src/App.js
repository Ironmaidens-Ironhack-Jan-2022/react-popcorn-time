import { useState } from "react";
import moviesArr from "./data/movies.json";

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {

  const [movies, setMovies] = useState(moviesArr);

  const displayTopRated = () => {
    const newList = movies.filter( (element) => {
      return element.rating >= 9
    });
    setMovies(newList);
  }

  return (
    <div className="App">
      <Header numberOfMovies={movies.length} />

      <div className="controls">
        <h3>Filters:</h3>
        <button onClick={ displayTopRated } >Only Top Rated</button>
      </div>

      <Main moviesArr={movies} />
      <Footer />
    </div>
  );
}

export default App;
