import { combineReducers } from 'redux';
import { dataReducer } from './dataReducer'
import { storeReducer } from './storeReducer'
import { searchReducer } from './searchReducer'

export default combineReducers({
  dataReducer,
  storeReducer,
  searchReducer
});