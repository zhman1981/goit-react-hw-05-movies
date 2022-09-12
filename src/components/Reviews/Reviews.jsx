import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Reviews() {
  const { movieID } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieID}/reviews?api_key=6afb091b2145bfeb8b6232ea0253edb1&language=en-US`
      )
      .then(response => {
        setMovieInfo(response.data.results);
      });
  }, [movieID]);

  if (movieInfo) {
    return (
      <ul>
        {movieInfo.map(item => (
          <li key={item.id}>
            <p>Author: {item.author}</p>
            <p>Review: {item.content}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default Reviews;
