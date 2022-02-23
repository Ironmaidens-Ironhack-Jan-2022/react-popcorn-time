import { useState } from "react";
import moviesArr from "./data/movies.json";
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Controls from "./components/Controls";

function App() {

  const [movies, setMovies] = useState(moviesArr);

  const [titleInput, setTitleInput] = useState("");
  const [yearInput, setYearInput] = useState(2000);
  const [ratingInput, setRatingInput] = useState("");

  const filterTopRated = (minRating = 9) => {
      const newList = moviesArr.filter( (element) => {
        return element.rating >= minRating;
      });
      setMovies(newList);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
      title: titleInput,
      year: yearInput,
      rating: ratingInput
    }

    setMovies( [newMovie, ...movies] ); // update list of movies
    setTitleInput("") // clear form
  }

  const handleTitleInput = (e) => {
    setTitleInput(e.target.value);
  }

  const handleYearInput = (e) => {
    setYearInput(e.target.value);
  }

  const handleRatingInput = (e) => {
    setRatingInput(e.target.value);
  } 


  return (
    <div className="App">
      <Header numberOfMovies={movies.length} />
      


      <form onSubmit={handleSubmit}>

        <label>Title:
          <input type="text" name="title" value={titleInput} onChange={handleTitleInput} />
        </label>

        <label>Year:
          <input type="number" name="year" value={yearInput} onChange={handleYearInput} />
        </label>

        <label>Rating:
          <input 
            type="number" 
            min={1} 
            max={10} 
            name="rating" 
            value={ratingInput} 
            onChange={handleRatingInput} 
          />
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

