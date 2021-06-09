import { useState } from "react";

const Movie = (props) => {
  return (
    <div className="movie_container">
      {!props.poster ? (
        <img
          src={`https://cdn.iconscout.com/icon/free/png-512/data-not-found-1965034-1662569.png`}
          alt=""
        />
      ) : (
        <img src={`http://image.tmdb.org/t/p/w185${props.poster}`} alt="" />
      )}

      <button
        id={props.movie.id}
        className="movie_btn"
        onClick={props.openModal}
      >
        View Details
      </button>
    </div>
  );
};

export default Movie;
