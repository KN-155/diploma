import React from 'react';
import styled from 'styled-components';

import List from '../Drawer/List';

import { GUEST_LINKS, USER_LINKS } from '../../constants';

const StyledDropdown = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  position: absolute;
  width: 180px;
  top: 64px;
  right: 0;
  z-index: 700;
  border: 1px solid #c5d0db;
  border-top: 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  padding: 10px 0;
  background-color: #fff;
`;

const Dropdown = ({ visible, close, user, onLogout }) => (
  <StyledDropdown visible={visible}>
    <List
      items={user ? USER_LINKS : GUEST_LINKS}
      close={close}
      onLogout={onLogout}
    />
  </StyledDropdown>
);

export default Dropdown;
