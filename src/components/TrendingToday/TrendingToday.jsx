import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h1`
  padding: 20px;
`;

function TrendingToday() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/trending/all/day?api_key=6afb091b2145bfeb8b6232ea0253edb1'
      )
      .then(response => {
        setMovieList(response.data.results);
      });
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      <ul>
        {movieList.map(movie => (
          <li key={movie.id}>
            <Link to={'/movies/' + String(movie.id)}>
              {movie.title || movie.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TrendingToday;
