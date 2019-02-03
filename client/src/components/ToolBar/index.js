import React from 'react';
import styled from 'styled-components';

import MenuButton from './MenuButton'
import Logo from './Logo'
import Avatar from "./Avatar";
import List from "./List";

import { MAIN_LINKS } from "../../constants"

const Header = styled.header`
    color: #fff;
    background-color: #3F51B5;
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

const ToolBar = ({ isDropdown, onDrawer, onDropdown }) => {

    return (
        <Header>
            <Nav>
                <MenuButton onDrawer={onDrawer}/>
                <Logo/>
                <Flex>
                    <List items={MAIN_LINKS}/>
                    <Avatar onDropdown={onDropdown} isDropdown={isDropdown}/>
                </Flex>
            </Nav>
        </Header>
    )

};

export default ToolBar;