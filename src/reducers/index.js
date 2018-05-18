// Set up your root reducer here...
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import timeline from './timelineReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  timeline
});

export default rootReducer;
