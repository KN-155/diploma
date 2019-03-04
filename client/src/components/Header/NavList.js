import React from 'react';
import styled from 'styled-components';
import NavListItem from './NavListItem';

const StyledList = styled.ul`
  list-style-type: none;

  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

const NavList = ({ items }) => (
  <StyledList>
    {items.map((item, i) => (
      <NavListItem to={item.url} key={i}>
        {item.title}
      </NavListItem>
    ))}
  </StyledList>
);

export default NavList;
