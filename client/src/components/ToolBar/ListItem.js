import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const ListTile = styled.li`
    display: inline-block;
`;

const ListTileLink = styled(NavLink)`
    padding: 0 20px;
    line-height: 64px;
    color: #fff;
    display: block;
    transition: background-color .3s;
    
    &:hover {
        background-color: #303F9F;
    }
    &.active {
        background-color: #303F9F;
    }
`;

const ListItem = ({ children, to }) => (
    <ListTile>
        <ListTileLink to={to}>
            {children}
        </ListTileLink>
    </ListTile>
);

export default ListItem;