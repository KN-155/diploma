import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HeaderContainer from '../../containers/HeaderContainer';

const Index = () => <h2>Home</h2>;
const Cars = () => <h2>Cars</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;
const Login = () => <h2>Login</h2>;
const Registration = () => <h2>Registration</h2>;

const App = () => (
  <Router>
    <div>
      <HeaderContainer />
      <Route path="/" exact component={Index} />
      <Route path="/cars/" component={Cars} />
      <Route path="/about/" component={About} />
      <Route path="/users/" component={Users} />
      <Route path="/login/" component={Login} />
      <Route path="/registration/" component={Registration} />
    </div>
  </Router>
);

export default App;
