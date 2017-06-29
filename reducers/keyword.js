import {
  SET_KEYWORD
} from '../actions/actionConstants';

const keyword = (state = '', action) => {
  switch (action.type) {
    case SET_KEYWORD: {
      const theKeyword = action.payload.keyword;
      return theKeyword;
    }
    default:
      return state;
  }
};

export default keyword;
