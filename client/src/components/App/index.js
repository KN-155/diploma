import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import HeaderContainer from '../../containers/HeaderContainer';
import AlertContainer from '../../containers/AlertContainer';
import ContentContainer from '../../containers/ContentContainer';

const App = () => (
  <Router>
    <div>
      <HeaderContainer />
      <ContentContainer />
      <AlertContainer />
    </div>
  </Router>
);

export default App;
