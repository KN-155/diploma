import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Content } from '../components/Content';
import { loginUser, registerUser, editUser } from '../actions';

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (email, password) => loginUser(email, password)(dispatch),
    registerUser: (email, password) => registerUser(email, password)(dispatch),
    editUser: (newUser) => editUser(newUser)(dispatch),
  };
};

const mapStateToProps = state => ({
  user: state.user,
});

const ContentContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Content),
);

export default ContentContainer;
