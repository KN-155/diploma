import React from 'react';
import styled from 'styled-components';

const PageFiled = styled.label`
  position: relative;
  display: block;
  padding: 15px 0;
  width: 100%
  box-sizing: border-box;
`;

const FiledInput = styled.input`
  border: 0;
  background: #fff;
  border-bottom: 2px solid ${props => (props.valid ? '#ccc' : '#f00')}
  outline: none;
  padding: 0 5px;
  transition: border-bottom  .3s;
  width: 100%;
  
  resize: none;
  outline: none;
  overflow: hidden;
  
  
  ::placeholder {
      color: transparent;
      text-indent: 500px;
      transition: text-indent 0.3s ease, color .3s;
    }
  
  &:focus {
    border-bottom: 2px solid ${props => (props.valid ? '#3f51b5' : '#f00')};
    
    ::placeholder {
      color: #666
      text-indent: 0px;
    }
  }
`;

const FiledLabel = styled.span`
  position: absolute;
  top: -5px;
  font-size: 0.8em;
`;

const ErrorLabel = styled.span`
  position: absolute;
  top: 40px;
  color: red;
  font-size: 0.7em;
  display: ${props => (props.valid ? 'none' : 'block')};
`;

const Input = ({ placeholder, title, errorText, valid, ...props }) => (
    <PageFiled>
      <FiledLabel>{title}</FiledLabel>
      <ErrorLabel valid={valid}>{errorText}</ErrorLabel>
      <FiledInput placeholder={placeholder} valid={valid} {...props} />
    </PageFiled>

);

export default Input;
