import { combineReducers } from 'redux';
import unitReducer from './unitReducer';
import resourceReducer from './resourceReducer';

// const rootReducer = combineReducers({unitReducer, resourceReducer)};

const rootReducer = combineReducers({
  unitReducer,
  resourceReducer,
});

export default rootReducer;
