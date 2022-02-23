import { useState } from "react";
import "./AddMovie.css"

function AddMovie(props) {

  const [titleInput, setTitleInput] = useState("");
  const [yearInput, setYearInput] = useState(2000);
  const [ratingInput, setRatingInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
      title: titleInput,
      year: yearInput,
      rating: ratingInput
    }

    props.createMovie(newMovie);

    clearForm();
  }

  const clearForm = () => {
    setTitleInput("");
    setYearInput(2000);
    setRatingInput("");
  }


  // Extra: improve code, handling all in one single method 
  // https://stackoverflow.com/a/67234242/11298742

  const handleTitleInput = (e) => {
    setTitleInput(e.target.value);
  }

  const handleYearInput = (e) => {
    setYearInput(e.target.value);
  }

  const handleRatingInput = (e) => {
    setRatingInput(e.target.value);
  } 


  return (
    <div className="AddMovie">
      <form onSubmit={handleSubmit}>

        <label>Title:
          <input type="text" name="title" value={titleInput} onChange={handleTitleInput} />
        </label>

        <label>Year:
          <input type="number" name="year" value={yearInput} onChange={handleYearInput} />
        </label>

        <label>Rating:
          <input
            type="number"
            min={1}
            max={10}
            name="rating"
            value={ratingInput}
            onChange={handleRatingInput}
          />
        </label>

        <button type="submit">Add a Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;