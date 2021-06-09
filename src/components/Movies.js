import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
const APIKEY = `11a94f25c05bb1527d862447eaa20041`;

//DISPLAY POPULAR OR SEARCHED MOVIES
const DisplayMovies = (props) => {
  return (
    <main className="main">
      <div className="movies_container">
        {props.movieslist.map((movie, index) => {
          return <Movie key={index} movie={movie} poster={movie.poster_path} />;
        })}
      </div>
    </main>
  );
};

const Movies = (props) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularMoviesIndex, setPopularMoviesIndex] = useState(1);

  //FETCH POPULAR MOVIES DATA
  useEffect(() => {
    const popularMoviesAPI = `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=${popularMoviesIndex}`;

    axios.get(popularMoviesAPI).then((response) => {
      if (popularMoviesIndex < 1) {
        setPopularMoviesIndex((oldState) => {
          return oldState + 1;
        });
      } else {
        setPopularMoviesIndex((oldState) => {
          return oldState;
        });
      }
      setPopularMovies((oldState) => {
        return oldState.concat(response.data.results);
      });
    });
  }, [popularMoviesIndex]);

  //DISPLAY POPULAR MOVIES OR SEARCHED MOVIES
  if (props.movies.length > 0) {
    return <DisplayMovies movieslist={props.movies} />;
  } else {
    return <DisplayMovies movieslist={popularMovies} />;
  }
};

export default Movies;
