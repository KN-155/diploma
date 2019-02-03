import React from 'react';
import styled from "styled-components";

const AvatarTile = styled.div`
    display: flex;
    align-items: center;
    height: 64px;
    cursor: pointer;
    padding: 0 20px;
    background-color: ${props => props.isDropdown ? '#303F9F': ''};
    
    &:hover {
        background-color: #303F9F;
    }
`;

const AvatarPhoto = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: url(${props => props.src ? props.src : ''}) #fff;
    background-size: cover;
`;

const Avatar = ({ isDropdown, onDropdown }) => (
    <AvatarTile isDropdown={isDropdown} onClick={() => onDropdown(!isDropdown)}>
        <AvatarPhoto src="https://pp.userapi.com/c850632/v850632107/4e6f3/IbBVcRfI14g.jpg"/>
    </AvatarTile>
);

export default Avatar;