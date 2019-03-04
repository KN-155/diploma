import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { AppBar } from '../components/Header';
import { logoutUser } from '../actions';

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser()),
});

const mapStateToProps = state => ({
  user: state.user,
});

const HeaderContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AppBar),
);

export default HeaderContainer;
