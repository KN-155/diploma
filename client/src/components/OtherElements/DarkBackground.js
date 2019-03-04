import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  opacity: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, ${({opacity}) => opacity ? opacity : '0.5'});
  z-index: 997;
`;

const DarkBackground = ({ visible, changeVisibility, opacity }) => (
  <Background onClick={() => changeVisibility ? changeVisibility(false) : null} visible={visible} opacity={opacity}/>
);

export default DarkBackground;
