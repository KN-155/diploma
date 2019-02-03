import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const ListTile = styled.li`
    display: block;
`;

const ListTileLink = styled(Link)`
    color: rgba(0,0,0,0.87);
    display: block;
    font-size: 14px;
    font-weight: 500;
    height: 48px;
    line-height: 48px;
    padding: 0 32px;
    
    &:hover {
        background-color: rgba(0,0,0,0.05);
    }
    &.active {
        background-color: rgba(0,0,0,0.05);
        color: #303F9F;
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