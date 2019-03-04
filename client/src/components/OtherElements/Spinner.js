import React from 'react';
import styled from 'styled-components';

const FoldingCube = styled.div`
  display: inline-block;
  width: 60px;
  height: 60px;
  position: relative;
  transform: rotateZ(45deg);
`;

const Cube = styled.div`
  float: left;
  width: 50%;
  height: 50%;
  position: relative;
	transform: scale(1.1);
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #3f51b5;
    animation: foldCubeAngle 2.4s infinite linear both;
    transform-origin: 100% 100%;
  }
  
  @keyframes foldCubeAngle {
  0%, 10% {
		transform: perspective(140px) rotateX(-180deg);
		opacity: 0;
	}
	25%, 75% {
		transform: perspective(140px) rotateX(0deg);
		opacity: 1;
	}
	90%, 100% {
		transform: perspective(140px) rotateY(180deg);
		opacity: 0;
	}
}
`;

const Cube2 = styled(Cube)`
  transform: scale(1.1) rotateZ(90deg);
  &:before {
    animation-delay: 0.3s;
  }
`;

const Cube3 = styled(Cube)`
  transform: scale(1.1) rotateZ(180deg);
  &:before {
    animation-delay: 0.6s;
  }
`;

const Cube4 = styled(Cube)`
  transform: scale(1.1) rotateZ(270deg);
    &:before {
    animation-delay: 0.9s;
  }
`;

const Spinner = () => (
    <FoldingCube>
      <Cube/>
      <Cube2/>
      <Cube4/>
      <Cube3/>
    </FoldingCube>
);

export default Spinner;