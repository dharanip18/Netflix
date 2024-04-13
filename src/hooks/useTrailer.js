import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getVideoData = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const data = await response.json();
    const filterTrailers = data.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterTrailers.length ? filterTrailers[0] : data.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getVideoData();
  }, []);
};

export default useTrailer;
