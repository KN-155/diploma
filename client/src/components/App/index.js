import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import HeaderContainer from '../../containers/HeaderContainer';
import AlertContainer from '../../containers/AlertContainer';
import ContentContainer from '../../containers/ContentContainer';
import { Spinner } from  '../OtherElements'
import styled from 'styled-components';

const Flex = styled.div`
  display:flex;
  position: absolute
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Application = (
  <div>
    <HeaderContainer />
    <ContentContainer />
    <AlertContainer />
  </div>
);

const Loader = (
  <Flex>
    <Spinner/>
  </Flex>
);


const App = ({loading}) => (
  <Router>
    { loading ? Loader : Application }
  </Router>
);

export default App;
