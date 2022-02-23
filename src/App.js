import { useState } from "react";
import moviesArr from "./data/movies.json";
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Controls from "./components/Controls";

function App() {

  const [movies, setMovies] = useState(moviesArr);

  const filterTopRated = (minRating = 9) => {
      const newList = moviesArr.filter( (element) => {
        return element.rating >= minRating;
      });
      setMovies(newList);
  }


  return (
    <div className="App">
      <Header numberOfMovies={movies.length} />
      <Controls displayTop={filterTopRated} />
      <Main moviesArr={movies} />
      <Footer />
    </div>
  );
}

export default App;
