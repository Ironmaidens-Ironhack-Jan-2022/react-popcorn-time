import "./Movie.css"

export default function Movie(props) {

  let imgTag;
  if(props.imgURL){
    imgTag = <img src={props.imgURL} alt={props.title} />;
  } else {
    imgTag = <img src="https://via.placeholder.com/182x268" alt="" />;
  }

  return (
    <div className="Movie">
        <h2>{props.title}</h2>
        
        {imgTag}

        <p>
            Year: {props.year} <br />
            Rating: {props.rating} <br />
        </p>
    </div>
  )
}
