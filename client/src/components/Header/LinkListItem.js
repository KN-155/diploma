import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const ListTile = styled.li`
  display: block;
`;

const ListTileLink = styled(NavLink)`
  color: rgba(0, 0, 0, 0.87);
  display: block;
  font-size: 14px;
  font-weight: 500;
  height: 48px;
  line-height: 48px;
  padding: 0 32px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  
  &.active {
    background-color: rgba(0, 0, 0, 0.05);
    color: #303f9f;
  }
`;

const LinkListItem = ({ children, ...props }) => (
  <ListTile>
    <ListTileLink {...props}>{children}</ListTileLink>
  </ListTile>
);

export default LinkListItem;
