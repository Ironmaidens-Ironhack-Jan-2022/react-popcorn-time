import { useState } from "react";
import moviesArr from "./data/movies.json";

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Controls from "./components/Controls";
import AddMovie from "./components/AddMovie";

function App() {

  const [movies, setMovies] = useState(moviesArr);

  const [titleInput, setTitleInput] = useState("");

  const filterTopRated = (minRating = 9) => {
      const newList = moviesArr.filter( (element) => {
        return element.rating >= minRating;
      });
      setMovies(newList);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
      title: titleInput
    }

    setMovies( [newMovie, ...movies] );
  }

  const handleTitleInput = (e) => {
    setTitleInput(e.target.value);
  }

  return (
    <div className="App">
      <Header numberOfMovies={movies.length} />
      
      
      {/* <AddMovie /> */}

      <form onSubmit={handleSubmit}>

        <label>Title:
          <input type="text" name="title" value={titleInput} onChange={handleTitleInput} />
        </label>

        <button type="submit">Add a Movie</button>
      </form>



      <Controls displayTop={filterTopRated} />
      <Main moviesArr={movies} />
      <Footer />
    </div>
  );
}

export default App;


