import { connect } from 'react-redux';

import App from '../components/App';

const mapStateToProps = state => ({
  loading: state.loading,
});

const AppContainer = (
  connect(mapStateToProps)(App)
);

export default AppContainer;
