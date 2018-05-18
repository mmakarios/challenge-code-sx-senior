import * as endpoints from '../constants/endpoints';
import { SUCCESS_SUFFIX, ERROR_SUFFIX } from 'redux-axios-middleware';

// action types
export const INDEX_TIMELINE = 'INDEX_TIMELINE';

// action creators
export const indexTimeline = () => {
  return {
    type: INDEX_TIMELINE,
    payload: {
      request: {
        url: endpoints.TIMELINE_INDEX
      }
    }
  };
};

// initial state
export const timelineInitialState = {
  data: null,
  error: null,
  isFetching: true
};

// reducers
const timelineReducer = (state = timelineInitialState, action) => {
  switch (action.type) {
    case INDEX_TIMELINE:
      return {
        ...state,
        isFetching: true
      };
    case INDEX_TIMELINE + SUCCESS_SUFFIX:
      return {
        ...state,
        isFetching: false,
        error: null,
        data: action.payload.data
      };
    case INDEX_TIMELINE + ERROR_SUFFIX:
      return {
        ...state,
        isFetching: false,
        error: action.error.response
      };
    default:
      return state;
  }
};

export default timelineReducer;
