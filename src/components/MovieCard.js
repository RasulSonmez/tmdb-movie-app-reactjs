import React from "react";
import { Card, Col } from "react-bootstrap";
import MovieControls from "./MovieControls";

function MovieCard({ movie, type }) {
  return (
    <Col key={movie.id} className="gy-3 d-flex justify-content-center">
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
        <Card.Body className="d-flex align-center justify-content-center">
          <MovieControls movie={movie} type={type} />
        </Card.Body>

        {movie.vote_average ? (
          <span className="position-absolute card__badge">
            {movie.vote_average}
          </span>
        ) : (
          "-"
        )}
      </Card>
    </Col>
  );
}

export default MovieCard;
