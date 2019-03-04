import React from 'react';
import styled from 'styled-components';
import ListCard from '../Parking/ListCard';
import {Button} from '../OtherElements'
import { Link } from 'react-router-dom';

const ProfileCard = styled.div`
  padding: 10px 5px;
`;

const Flex = styled.div`
  display: flex
  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const ProfileInfo = styled.div`
  flex: 1;
  overflow: hidden
  padding: 0 10px;
  
  @media only screen and (max-width: 500px) {
    padding: 10px 0;
  }
`;

const Text = styled.div`
  font-size: .9em;
  color: #555;
`;

const Avatar = styled.div`
  background: url(${props => (props.src ? props.src : '')}) center;
  background-size: cover;
  flex-basis: 250px;
  height: 250px;
`;

const Wight = styled.span`
  color: #000;
  font-weight: bold;
  
`;

const MarginTop = styled.div`
  margin-top: 10px;
`;

const ViewProfile = ({user}) => (
  <ProfileCard>
    <Flex>
      <Avatar src={user.avatar}/>
      <ProfileInfo>
        <h1>
          {user.firstName ? user.firstName : null}
          {user.lastName ? ' ' + user.lastName : null}
        </h1>
        <Text><Wight>email:</Wight> {user.email}</Text>
        {user.tel ? <Text><Wight>Номер:</Wight> +375 {user.tel}</Text> : null}
        <Link to="profile/edit/">
          <Button noMargin>Редактировать</Button>
        </Link>
      </ProfileInfo>
    </Flex>
    <MarginTop>
      <h2>Ваши парковки</h2>
      <ListCard/>
    </MarginTop>
  </ProfileCard>

);

export default ViewProfile;
