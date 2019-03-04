//TEST

import React from 'react';
import { useState, useEffect } from 'react';
// import axios from 'axios';

import Card from './Card';
import styled from 'styled-components';

const List = styled.ul`
  list-style-type: none;
`;

const listP = [
  {
    id: 1,
    photo: 'http://galereya-novosibirsk.ru/upload/iblock/8da/snimok.jpg',
    name: 'Парковка',
    placenow: 130,
    maxplace: 200,
    address: 'Брест, Московская 267, 267/1',
    worktime: '06:00 - 22:00',
    price: 5
  },
  {
    id: 1,
    photo: 'http://galereya-novosibirsk.ru/upload/iblock/8da/snimok.jpg',
    name: 'Парковка',
    placenow: 130,
    maxplace: 200,
    address: 'Брест, Московская 267, 267/1',
    worktime: '06:00 - 22:00',
    price: 5
  },
  {
    id: 1,
    photo: 'http://galereya-novosibirsk.ru/upload/iblock/8da/snimok.jpg',
    name: 'Парковкаdsdsdsdsdsdsdsd',
    placenow: 130,
    maxplace: 200,
    address: 'Брест, Московская 267,3223232323232323232 267/1',
    worktime: '06:00 - 22:00',
    price: 55
  }
];

const useCardAxios = flag => {
  const [list] = useState(listP);
  useEffect(() => {
    // axios.get('/parking').then(res => setList(res.data));
  }, [flag]);
  return list;
};

const ListCard = () => {
  const list = useCardAxios(0);

  const listItems = list.map((item, i) => <Card key={i} item={item} />);

  return <List>{listItems}</List>;
};

export default ListCard;
