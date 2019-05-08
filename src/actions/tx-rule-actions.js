import {
    SERVER_ERROR,
    FETCHALL_STRING_RULES_SUCCESS,
  } from './action-types';
  import * as txRulesApi from '../api/tx-rules-api';
  
  export const serverError = (error) => {
    console.warn('server error', error);
    return {
      type: SERVER_ERROR,
      error,
    };
  }

  
  export const fetchAllStringRulesSuccess = stringRulesList => {
    return {
      type: FETCHALL_STRING_RULES_SUCCESS,
      stringRulesList,
    };
  }
  
  export const fetchAllStringRulesAsync = () => {
    return dispatch => {
      return txRulesApi.fetchAllStringRules().then(r => r.json()).then(
        json => dispatch(fetchAllStringRulesSuccess(json)),
        error => dispatch(serverError(error))
      );
    };
  };
  