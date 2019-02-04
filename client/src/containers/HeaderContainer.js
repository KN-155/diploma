import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import AppBar from '../components/AppBar';
import { signIn, signOut } from '../actions';

function mapDispatchToProps(dispatch) {
  return {
    onLogin: () => dispatch(signIn()),
    onLogout: () => dispatch(signOut()),
  };
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

const HeaderContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AppBar),
);

export default HeaderContainer;
