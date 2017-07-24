import { combineReducers } from 'redux';
import IndexReducer from './index_reducers';
import PhotoReducer from './photo/reducers';

const rootReducer = combineReducers({
    index: IndexReducer,
    photo: PhotoReducer
});

export default rootReducer;
