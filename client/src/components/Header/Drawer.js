import React from 'react';
import styled from 'styled-components';

import LinkList from './LinkList';

import { MAIN_LINKS, GUEST_LINKS, USER_LINKS } from '../../constants';

const SideNav = styled.nav`
  position: fixed;
  display: flex;
  width: 300px;
  left: 0;
  top: 0;
  transform: ${props =>
    props.visible ? 'translateX(0%)' : 'translateX(-100%)'};
  transition: transform 0.3s;
  height: 100%;
  background-color: #fff;
  z-index: 999;
  overflow-y: auto;
  justify-content: space-between;
  flex-direction: column;
`;

const Drawer = ({ visible, user, close, onLogout }) => (
  <SideNav visible={visible}>
    <LinkList items={MAIN_LINKS} close={close} />
    <LinkList
      items={user ? USER_LINKS : GUEST_LINKS}
      close={close}
      onLogout={onLogout}
    />
  </SideNav>
);

export default Drawer;
