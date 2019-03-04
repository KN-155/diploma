import styled from 'styled-components';

const Button = styled.button`
  color: #fff;
  text-decoration: none;
  user-select: none;
  background: #3f51b5;
  padding: 7px 15px;
  outline: none;
  border: 0;
  transition: background-color 0.3s;
  margin: 0 ${props => (props.noMargin ? 0 : 10)}px;
  cursor: pointer;

  &:hover {
    background: #303f9f;
  }

  &:active {
    background: #000051;
  }

  &:disabled {
    background-color: #9fa1a5;
    color: #48494b;
    cursor: default;
  }
`;

export default Button;
