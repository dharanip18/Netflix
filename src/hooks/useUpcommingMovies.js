import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpCommingMovies } from "../utils/movieSlice";

const useUpcommingMovies = () => {
  const dispatch = useDispatch();
  const upCommingMovies = useSelector((store) => store.movies.upCommingMovies);
  const getUpCommingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await response.json();

    dispatch(addUpCommingMovies(data.results));
  };
  useEffect(() => {
    !upCommingMovies && getUpCommingMovies();
  }, []);
};
export default useUpcommingMovies;
