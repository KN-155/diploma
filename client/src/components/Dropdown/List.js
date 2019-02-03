import React from 'react';
import styled from "styled-components";
import ListItem from "./ListItem";

const StyledList = styled.ul`
    list-style-type: none;
`;

const List = ({ items }) => (
    <StyledList>
        {
            items.map((item, i) => (
                <ListItem to={ item.url } key={i}>
                    { item.title }
                </ListItem>
            ))
        }
    </StyledList>
);

export default List;