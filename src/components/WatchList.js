import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Container, Row, Badge, Col } from "react-bootstrap";
import MovieCard from "./MovieCard";

function WatchList() {
  const { watchlist } = useContext(GlobalContext);

  return (
    <Container className="mt-3 mb-3 d-flex  flex-column  justify-content-center">
      <Row>
        <Col className="d-flex align-items-center justify-content-between">
          <h1>İzlenecek Filmler</h1>
          <Badge pill bg="primary">
            {watchlist.length} {watchlist.length < 2 ? "Movie" : "Movies"}
          </Badge>
        </Col>
      </Row>

      <Row>
        {watchlist.length > 0 ? (
          watchlist.map((movie) => (
            <MovieCard movie={movie} key={movie.id} type="watchlist" />
          ))
        ) : (
          <h2 className="text-muted">Listenizde Film Yok...</h2>
        )}
      </Row>
    </Container>
  );
}

export default WatchList;
