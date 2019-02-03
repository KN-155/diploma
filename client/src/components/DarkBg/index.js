import React from 'react';
import styled from "styled-components";

const Background = styled.div`
    display: ${ props => props.isDrawer ? 'block' : 'none' };
    opacity: 1;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    z-index: 997;
`;

const DarkBg = ({ isDrawer, onDrawer}) => (
    <Background onClick={() => onDrawer(false)} isDrawer={isDrawer}/>
);

export default DarkBg;