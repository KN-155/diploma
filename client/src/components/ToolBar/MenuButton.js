import React from 'react';
import styled from "styled-components";

const Icon = styled.i`
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    line-height: 64px;
    font-size: 32px;
    color: #fff;
    padding: 0 20px;
    cursor: pointer;
    
    :hover {
       background-color: #303F9F;
    }
    
    @media only screen and (min-width: 641px) {
        display: none;
    }
`;

const MenuButton = ({ onDrawer }) => (
    <Icon onClick={() => onDrawer(true)}>menu</Icon>
);

export default MenuButton;