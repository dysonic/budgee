import * as types from '../actions/action-types';
import initialState from './initial-state';

export default (state = initialState.txData, action) => {
  switch(action.type) {
    case types.FETCH_TX_DATA_SUCCESS:
    case types.UPLOAD_TX_DATA_SUCCESS:
      return action.txData
    default: 
      return state;
  }
};
