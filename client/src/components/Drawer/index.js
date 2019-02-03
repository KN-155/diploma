import React from 'react';
import styled from "styled-components";

import List from "./List";

import { MAIN_LINKS, GUEST_LINKS } from "../../constants"

const SideNav = styled.nav`
    position: fixed;
    display: flex;
    width: 300px;
    left: 0;
    top: 0;
    transform: ${ props => props.isDrawer ? 'translateX(0%)' : 'translateX(-100%)'};
    transition: transform .3s;
    height: 100%;
    background-color: #fff;
    z-index: 999;
    overflow-y: auto;
    justify-content: space-between;
    flex-direction: column;
`;

const Index = ({ isDrawer }) => (
    <SideNav isDrawer={ isDrawer }>
        <List items={MAIN_LINKS}/>
        <List items={GUEST_LINKS}/>
    </SideNav>
);

export default Index;