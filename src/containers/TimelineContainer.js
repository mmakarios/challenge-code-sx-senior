import { connect } from 'react-redux';
import Timeline from '../components/Timeline';
import { indexTimeline } from '../reducers/timelineReducer';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => {
  return {
    data: state.timeline.data,
    error: state.timeline.error,
    isFetching: state.timeline.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    index: bindActionCreators(indexTimeline, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
