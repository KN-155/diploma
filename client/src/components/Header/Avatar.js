import React from 'react';
import styled from 'styled-components';

const AvatarTile = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
  cursor: pointer;
  padding: 0 20px;
  background-color: ${props => (props.visible ? '#303F9F' : '')};

  &:hover {
    background-color: #303f9f;
  }
`;

const AvatarPhoto = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: url(${props => (props.src ? props.src : '')}) #fff center;
  background-size: cover;
`;

const Avatar = ({ visibleDropdown, changeDropdown, user }) => (
  <AvatarTile
    visible={visibleDropdown}
    onClick={() => changeDropdown(!visibleDropdown)}
  >
    <AvatarPhoto src={user ? user.avatar : '/avatar/user.png'} />
  </AvatarTile>
);

export default Avatar;
