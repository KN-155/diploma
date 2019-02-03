import React from 'react';
import styled from "styled-components";

import List from "./List";

import { GUEST_LINKS } from "../../constants"

const StyledDropdown = styled.div`
    display: ${props => props.isDropdown ? 'block': 'none'};
    position: absolute;
    width: 180px;
    top: 64px;
    right: 0;
    z-index: 700;
    border: 1px solid #c5d0db;
    border-top: 0;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .2);
    padding: 10px 0;    
`;

const Dropdown = ({ isDropdown }) => (
    <StyledDropdown isDropdown={isDropdown}>
        <List items={GUEST_LINKS}/>
    </StyledDropdown>

);

export default Dropdown;