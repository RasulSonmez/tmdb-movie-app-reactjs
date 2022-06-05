import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { GlobalContext } from "../context/GlobalState";

function ResultCart({ movie }) {
  const { watchlist, watched, addMovieToWatchlist, addMovieToWatched } =
    useContext(GlobalContext);
  const storedMovieWatched = watched.find((o) => o.id === movie.id);
  const storedMovie = watchlist.find((o) => o.id === movie.id)
    ? true
    : !!storedMovieWatched;
  return (
    <>
      <Card style={{ width: "18rem" }}>
        {movie.poster_path ? (
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={movie.title}
            className="card__image"
          />
        ) : (
          <div className="no-image">image not found</div>
        )}
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.overview.substring(0, 70) + "..."}</Card.Text>
          {movie.vote_average ? (
            <Card.Text>
              {" "}
              <b>IMDB:</b> {movie.vote_average}
            </Card.Text>
          ) : (
            "-"
          )}
          {movie.release_date ? (
            <Card.Text>{movie.release_date.substring(0, 4)}</Card.Text>
          ) : (
            <Card.Text>not found release date</Card.Text>
          )}

          <div className="text-center">
            <Button
              variant="primary"
              disabled={storedMovie}
              onClick={() => addMovieToWatchlist(movie)}
              className="mb-1"
            >
              Add to Watchlist
            </Button>
            <Button
              variant="primary"
              disabled={storedMovieWatched}
              onClick={() => addMovieToWatched(movie)}
            >
              Add to Watched
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default ResultCart;
