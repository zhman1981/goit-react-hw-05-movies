import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Img = styled.img`
  padding: 0px;
  margin-top: 30px;
`;

function Cast() {
  const { movieID } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=6afb091b2145bfeb8b6232ea0253edb1&language=en-US`
      )
      .then(response => {
        setMovieInfo(response.data.cast);
      });
  }, [movieID]);

  if (movieInfo) {
    return (
      <ul>
        {movieInfo.map(actor => (
          <li key={actor.id}>
            <Img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
            />
            <p>Name: {actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default Cast;
