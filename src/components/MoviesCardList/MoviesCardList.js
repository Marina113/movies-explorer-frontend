import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({
  movies,
  savedMovies,
  onLikeMovie,
  onDislikeMovie,
}) {

  return (
    <section className="card-list">
      <div className="card-list__container">
        {movies.map((movie) => {
          return (
            <MoviesCard
              key={movie.movieId}
              movie={movie}
              savedMovies={savedMovies}
              onLikeMovie={onLikeMovie}
              onDislikeMovie={onDislikeMovie}
            />
          );
        })}
      </div>
    </section>
  );
}

export default MoviesCardList;
