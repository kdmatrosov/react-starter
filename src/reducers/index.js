import { combineReducers } from 'redux';
import TestReducer from './test_reducers';
import PhotoReducer from './photo/reducers';

const rootReducer = combineReducers({
  test: TestReducer,
  photo: PhotoReducer
});

export default rootReducer;
