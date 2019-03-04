import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Alert } from '../components/OtherElements';
import { closeAlert } from '../actions';

const mapDispatchToProps = dispatch => ({
  closeAlert: () => dispatch(closeAlert()),
});

const mapStateToProps = state => ({
  alert: state.alert,
});

const AlertContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Alert),
);

export default AlertContainer;
