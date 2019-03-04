import React from 'react';
import styled from 'styled-components';
import LinkListItem from './LinkListItem';

const StyledList = styled.ul`
  list-style-type: none;
`;

const LinkList = ({ items, close, onLogout }) => (
  <StyledList>
    {items.map((item, i) =>
      item.url !== '/logout' ? (
        <LinkListItem to={item.url} key={i} onClick={close}>
          {item.title}
        </LinkListItem>
      ) : (
        <LinkListItem to="/login" onClick={() => {onLogout(); close();}} key={i}>
          {item.title}
        </LinkListItem>
      ),
    )}
  </StyledList>
);

export default LinkList;
