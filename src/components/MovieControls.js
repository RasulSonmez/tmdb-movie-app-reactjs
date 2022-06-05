import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { FaEye, FaTimes } from "react-icons/fa";
import { GlobalContext } from "../context/GlobalState";

function MovieControls({ movie, type }) {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeMovieFromWatched,
  } = useContext(GlobalContext);

  return (
    <div>
      {type === "watchlist" && (
        <>
          <Button
            variant="primary"
            className="d-flex- align-center justify-content-center mx-1"
            onClick={() => addMovieToWatched(movie)}
          >
            <FaEye />
          </Button>
          <Button
            variant="primary"
            className="d-flex- align-center justify-content-center "
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <FaTimes />
          </Button>
        </>
      )}
      {type === "watched" && (
        <>
          <Button
            variant="primary"
            className="d-flex- align-center justify-content-center mx-1"
            onClick={() => moveToWatchlist(movie)}
          >
            <FaEye />
          </Button>
          <Button
            variant="primary"
            className="d-flex- align-center justify-content-center "
            onClick={() => removeMovieFromWatched(movie.id)}
          >
            <FaTimes />
          </Button>
        </>
      )}
    </div>
  );
}

export default MovieControls;
