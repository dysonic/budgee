import {combineReducers} from 'redux';
import txData from './tx-data-reducer';

const rootReducer = combineReducers({
  txData
});

export default rootReducer;