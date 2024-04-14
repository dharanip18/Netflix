import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="flex flex-col px-2 pl-[60px] text-white">
      <h1 className="font-bold text-3xl my-6">{title}</h1>
      <div className="flex  overflow-x-scroll">
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
