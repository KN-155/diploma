import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';

const StyledList = styled.ul`
  list-style-type: none;
`;

const List = ({ items, close, onLogout }) => (
  <StyledList>
    {items.map((item, i) =>
      item.url !== '/logout' ? (
        <ListItem to={item.url} key={i} onClick={close}>
          {item.title}
        </ListItem>
      ) : (
        <ListItem to="/login" onClick={() => {onLogout(); close();}} key={i}>
          {item.title}
        </ListItem>
      ),
    )}
  </StyledList>
);

export default List;
