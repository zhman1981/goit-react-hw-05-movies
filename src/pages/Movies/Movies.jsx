import SearchList from 'components/SearchList/SearchList';
import React from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.form`
  padding: 20px;
`;

function Movies() {
  const [query, setQuery] = useSearchParams('');

  const onSubmit = evt => {
    evt.preventDefault();
    setQuery({ search: evt.target.query.value });
    evt.target.query.value = '';
  };

  return (
    <>
      <Nav onSubmit={onSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </Nav>
      {query.get('search') && <SearchList query={query.get('search')} />}
      <Outlet />
    </>
  );
}

export default Movies;
