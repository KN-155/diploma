import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.li`
  background-color: red;
  width: 100%
  min-height: 100px;
  display: flex
  box-sizing: border-box;
  border: 1px solid #c5d0db;
  border-top: 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  margin: 5px 0;
`;

const Img = styled(Link)`
  display: block;
  flex-basis: 40%;
  background: url(${props => (props.src ? props.src : '')}) #fff;
  background-size: cover;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 7px;
  flex: 1;
  overflow: hidden;
`;

const Between = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SizeText = styled.div`
  font-size: ${props => props.size}em;
`;

const LinkText = styled(Link)`s
  flex: 1;
  overflow: hidden;
  text-decoration: none;
  color: #000;
  font-size: ${props => props.size}em;
`;

const Card = ({ item }) => (
  <Container>
    <Img to={`/ad/${item.id}`} src={item.photo} />
    <Info>
      <Between>
        <LinkText to={`/ad/${item.id}`} size={1.3}>
          {item.name}
        </LinkText>
        <SizeText size={1.2}>
          [{item.placenow}/{item.maxplace}]
        </SizeText>
      </Between>
      <SizeText size={0.9}>{item.address}</SizeText>
      <Between>
        <SizeText size={1.3}>{item.worktime}</SizeText>
        <SizeText hide size={1.3}>{item.price} р</SizeText>
      </Between>
    </Info>
  </Container>
);

export default Card;
