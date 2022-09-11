import React from 'react';
import styled from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  color: black;
  padding: 20px;
  text-decoration: none;

  &.active {
    color: red;
  }
`;

const Nav = styled.nav`
  padding: 20px;
  border-bottom: 2px solid;
  border-color: gray;
`;

function Home() {
  return (
    <>
      <Nav display="flex" marging="30px">
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="movies">Movies</StyledLink>
      </Nav>
      <Outlet />
    </>
  );
}

export default Home;
