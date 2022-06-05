import React, { useState } from "react";
import {
  Form,
  FormControl,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import ResultCart from "./ResultCart";
const API_KEY = process.env.REACT_APP_TMDB_KEY;
const api = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`;

function WatchAdd() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  function onChange(e) {
    setQuery(e.target.value);
    fetch(`${api}&query=${e.target.value}`)
      .then((response) => response.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <Container>
      <Row className="watchadd text-center">
        <h1 className="text-white">Welcome!</h1>
        <p className="text-white">Discover millions of TV shows and movie!</p>
        <Form className="d-flex w-50 py-3">
          <FormControl
            type="search"
            placeholder="Search movie and shows.."
            className="me-2"
            aria-label="Search"
            onChange={onChange}
            value={query}
          />
          <Button variant="outline-success text-white">Search</Button>
        </Form>
      </Row>

      {results.length > 0 && (
        <Row className="mb-3">
          {results.map((movie) => (
            <Col className="gy-3 d-flex justify-content-center" key={movie.id}>
              <ResultCart movie={movie} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default WatchAdd;
