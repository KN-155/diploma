import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Content from '../components/Content';
import { loginUser, registerUser } from '../actions';

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (email, password) => loginUser(email, password)(dispatch),
    registerUser: (email, password) => registerUser(email, password)(dispatch),
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
