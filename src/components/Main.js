import { useState } from "react";
import moviesArr from "../data/movies.json";
import "./Main.css"
import Movie from "./Movie";

export default function Main() {

  const [movies, setMovies] = useState(moviesArr);

  const displayTopRated = () => {
    const newList = movies.filter( (element) => {
      return element.rating >= 9
    });
    setMovies(newList);
  }

  return (
    <section className="Main">

      <div className="controls">
        <h3>Filters:</h3>
        <button onClick={ displayTopRated } >Only Top Rated</button>
      </div>


      <h2>There are {movies.length} movies that meet your criteria</h2>

      { 
        movies.map( (element, index) => {
          return (
            <Movie 
              key={element.id} 
              title={element.title} 
              year={element.year} 
              rating={element.rating} 
              imgURL={element.imgURL} 
            />
          )
        })
      }
    </section>
  )
}
