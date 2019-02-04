import React from 'react';
import styled from 'styled-components';

import MenuButton from './MenuButton';
import Logo from './Logo';
import Avatar from './Avatar';
import List from './List';

import { MAIN_LINKS } from '../../constants';

const Header = styled.header`
  color: #fff;
  background-color: #3f51b5;
  height: auto;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const ToolBar = ({ visibleDropdown, changeDrawer, changeDropdown, user }) => {
  return (
    <Header>
      <Nav>
        <MenuButton changeDrawer={changeDrawer} />
        <Logo />
        <Flex>
          <List items={MAIN_LINKS} />
          <Avatar
            changeDropdown={changeDropdown}
            visibleDropdown={visibleDropdown}
            user={user}
          />
        </Flex>
      </Nav>
    </Header>
  );
};

export default ToolBar;
