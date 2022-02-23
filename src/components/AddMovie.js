import { useState } from "react";
import "./AddMovie.css"

function AddMovie(props) {

  const [inputs, setInputs] = useState(
    {
      title: "",
      year: 2000,
      rating: "",
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
      title: inputs.title,
      year: inputs.year,
      rating: inputs.rating
    }

    props.createMovie(newMovie);

    clearForm();
  }

  const clearForm = () => {
    setInputs({
      title: "",
      year: 2000,
      rating: "",
    });
  }


  // Extra: improve code, handling all in one single method 
  // https://stackoverflow.com/a/67234242/11298742

  const handleInputChange = (e) => {    
    setInputs( (prevState) => ({...prevState, [e.target.name]: e.target.value }));
  }

  return (
    <div className="AddMovie">
      <form onSubmit={handleSubmit}>

        <label>Title:
          <input type="text" name="title" value={inputs.title} onChange={handleInputChange} />
        </label>

        <label>Year:
          <input type="number" name="year" value={inputs.year} onChange={handleInputChange} />
        </label>

        <label>Rating:
          <input
            type="number"
            min={1}
            max={10}
            name="rating"
            value={inputs.rating}
            onChange={handleInputChange}
          />
        </label>

        <button type="submit">Add a Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;