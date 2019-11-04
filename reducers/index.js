// Imports: Dependencies
import { combineReducers } from 'redux';// Imports: Reducers
import authReducer from './authReducer';
import counterReducer from './counterReducer';
import requestReducer from './requestReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  authReducer: authReducer,
  counterReducer: counterReducer,
  requestReducer: requestReducer
});// Exports
export default rootReducer;