import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Indent = styled.div`
  position: fixed;
  transform: ${props => (props.active ? 'translateX(0%)' : 'translateX(100%)')};
  transition: transform 0.2s;
  top: 75px;
  padding: 0 10px;
  right: 0px;
`;

const PlaceForAlert = styled.div`
  background: ${props => (props.type === 'success' ? '#96F27D' : '#FF5252')};
  border: solid 1px
    ${props => (props.type === 'success' ? '#7BF05C' : '#FF5252')};
  padding: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

const changeAlert = (id, setId, done) => {
  clearTimeout(id);
  const idT = setTimeout(() => {
    done();
  }, 5000);
  setId(idT);
};

const Alert = ({ alert, closeAlert }) => {
  const [id, setId] = useState(null);
  useEffect(() => changeAlert(id, setId, closeAlert), [alert]);

  return (
    <Indent active={alert.active}>
      <PlaceForAlert type={alert.type}>{alert.message}</PlaceForAlert>
    </Indent>
  );
};

export default Alert;
