import "./Main.css"
import Movie from "./Movie";

export default function Main(props) {


  const displayTopRated = () => {
    // const newList = props.movies.filter( (element) => {
    //   return element.rating >= 9
    // });
    // setMovies(newList);
  }

  return (
    <section className="Main">

      <div className="controls">
        <h3>Filters:</h3>
        <button onClick={ displayTopRated } >Only Top Rated</button>
      </div>

      { 
        props.moviesArr.map( (element, index) => {
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
