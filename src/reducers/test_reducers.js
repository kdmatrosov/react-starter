import {TEST_ACTION} from '../actions/index';
const INITIAL_STATE = {
  data:  false
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case TEST_ACTION:
      return {
        ...state, data: action.payload
      };
    default:
      return state;
  }
}