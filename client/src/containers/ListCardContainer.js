import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ListCard from '../components/ListCard';

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => ({
  parking: state.parking,
});

const ListCardContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ListCard),
);

export default ListCardContainer;
