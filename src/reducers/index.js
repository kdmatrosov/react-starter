import { combineReducers } from 'redux';
import TestReducer from './test_reducers';

const rootReducer = combineReducers({
  test: TestReducer
});

export default rootReducer;
