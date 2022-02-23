import "./Main.css"
import Movie from "./Movie";

export default function Main(props) {
  return (
    <section className="Main">
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
