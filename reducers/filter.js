import {
  SET_FILTER
} from '../actions/actionConstants';

const filter = (state = 'All', action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter;
    }
    default:
      return state;
  }
};

export default filter;
