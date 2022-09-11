import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Img = styled.img`
  padding: 20px;
`;

const Container = styled.div`
  display: flex;
  padding-right: 20px;
`;

const Additional = styled.div`
  padding-left: 20px;
  border-top: 2px solid;
  border-bottom: 2px solid;
  border-color: gray;
`;

function MovieDetails() {
  const { movieID } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const location = useLocation();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieID}?api_key=6afb091b2145bfeb8b6232ea0253edb1&language=en-US`
      )
      .then(response => {
        setMovieInfo(response.data);
      });
  }, [movieID]);

  if (movieInfo) {
    return (
      <>
        <Container className="container">
          {movieInfo.poster_path && (
            <Img
              src={`https://image.tmdb.org/t/p/w200${movieInfo.poster_path}`}
              alt={movieInfo.title || movieInfo.name}
            />
          )}
          <div>
            <h1>{movieInfo.title || movieInfo.name}</h1>
            <p>User rating: {movieInfo.vote_average}</p>
            <h2>Overview</h2>
            <p>{movieInfo.overview || movieInfo.review}</p>
            <h2>Genres</h2>
            <p>
              {movieInfo.genres &&
                movieInfo.genres.map(genre => String(genre.name) + ' ')}
            </p>
          </div>
        </Container>
        <Additional>
          <p>Additional information:</p>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </Additional>
        {location.pathname.includes('cast') && <div>CAST</div>}
        {location.pathname.includes('reviews') && <div>REVIEW</div>}
      </>
    );
  }
}

export default MovieDetails;
