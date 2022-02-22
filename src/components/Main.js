import moviesArr from "../data/movies.json";
import Movie from "./Movie";

export default function Main() {

  return (
    <section>

      { 
        moviesArr.map( (element) => {
          return <Movie title={element.title} year={element.year} rating={element.rating} />
        })
      }
  
    </section>
  )
}
