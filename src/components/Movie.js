import "./Movie.css"

export default function Movie(props) {

//---- CONDITIONAL RENDERING WITH IF CONDITION ---
  // let imgTag;
  // if(props.imgURL){
  //   imgTag = <img src={props.imgURL} alt={props.title} />;
  // } else {
  //   imgTag = <img src="https://via.placeholder.com/182x268" alt="" />;
  // }

  return (
    <div className="Movie">
        <h2>{props.title}</h2>

        {/* ---- CONDITIONAL RENDERING WITH TERNARY OPERATOR --- */}
        {/* {
          props.imgURL 
          ? <img src={props.imgURL} alt={props.title} />
          : <img src="https://via.placeholder.com/182x268" alt="" />
        } */}


        {
          props.imgURL && <img src={props.imgURL} alt={props.title} />
        }

        <p>
            Year: {props.year} <br />
            Rating: {props.rating} <br />
        </p>
    </div>
  )
}

