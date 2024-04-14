import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  {
    /*  MovieList - Popular
          - MovieCard*n
        MovieList - Trending
        MovieList - NowPlaying
    */
  }
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black  mt-[-67px]">
        <div className="relative -top-52">
          <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
          <MovieList
            title={"Now Playing Movies"}
            movies={movies.nowPlayingMovies}
          />
          {movies.popularMovies && (
            <MovieList title={"Popular"} movies={movies.popularMovies} />
          )}
          {movies.upCommingMovies && (
            <MovieList title={"UpComming"} movies={movies.upCommingMovies} />
          )}
          <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
          {/* <MovieList title={"Popular"} movies={movies.popularMovies} /> */}
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;
