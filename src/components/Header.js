import "./Header.css"

export default function Header(props) {
  return (
    <header className="Header">
      <h1>Popcorn Time!</h1>

      <h2>There are {props.moviesArr.length} movies that meet your criteria</h2>
    </header>
  )
}
