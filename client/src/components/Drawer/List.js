import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';

const StyledList = styled.ul`
  list-style-type: none;
`;

const List = ({ items, close, onLogin, onLogout }) => (
  <StyledList>
    {items.map((item, i) => (
      <ListItem
        to={item.url}
        key={i}
        onClick={() => {
          eval(item.method);
          close();
        }}
      >
        {item.title}
      </ListItem>
    ))}
  </StyledList>
);

export default List;
