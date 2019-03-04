import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {ListCard} from '../components/Parking';

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => ({
  parking: state.parking,
});

const ParkingContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ListCard),
);

export default ParkingContainer;
