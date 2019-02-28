import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Card from './Card';
import styled from 'styled-components';

const List = styled.ul`
  width: 600px;
  list-style-type: none;
  margin-top: 20px;
  padding: 5px;
`;

const useCardAxios = flag => {
  const [list, setList] = useState([]);
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
