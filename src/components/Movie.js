import "./Movie.css"

export default function Movie(props) {


  return (
    <div className="Movie">
        <h2>{props.title}</h2>
        <img src={props.imgURL} alt={props.title} />
        <p>
            Year: {props.year} <br />
            Rating: {props.rating} <br />
        </p>
    </div>
  )
}
