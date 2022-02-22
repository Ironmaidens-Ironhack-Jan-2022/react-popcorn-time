import "./Movie.css"

export default function Movie(props) {


  return (
    <div className="Movie">
        <h2>{props.title}</h2>
        <p>
            Year: {props.year} <br />
            Rating: {props.rating} <br />
        </p>
    </div>
  )
}
