import PropTypes from 'prop-types';

const { array, object, bool } = PropTypes;

export const stateTypes = {
  data: array,
  error: object,
  isFetching: bool
};
