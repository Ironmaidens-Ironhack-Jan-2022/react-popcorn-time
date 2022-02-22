import moviesArr from "../data/movies.json";
import Movie from "./Movie";

export default function Main() {

  return (
    <section>

      { 
        moviesArr.map( (element, index) => {
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
