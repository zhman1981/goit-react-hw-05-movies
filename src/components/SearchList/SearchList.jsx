import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SearchList({ query }) {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=6afb091b2145bfeb8b6232ea0253edb1&page=1&query=${query}`
      )
      .then(response => {
        setMovieList(response.data.results);
      });
  }, [query]);

  return (
    <>
      <ul>
        {movieList.map(movie => (
          <li key={movie.id}>
            <Link to={String(movie.id)}>{movie.title || movie.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default SearchList;
