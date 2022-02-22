import Movie from "./Movie";

export default function Main() {
  return (
    <section>
      <Movie title="The Godfather" year={2020} rating={10} />
      <Movie title="Matrix"  year={2030} rating={10} />
      <Movie title="American Beauty"  year={2040} rating={10} />
    </section>
  )
}
