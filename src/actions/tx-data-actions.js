import {
  SERVER_ERROR,
  UPLOAD_TX_DATA_SUCCESS,
  FETCHALL_TX_DATA_SUCCESS,
} from './action-types';
import * as txDataApi from '../api/tx-data-api';

export const serverError = (error) => {
  console.warn('server error', error);
  return {
    type: SERVER_ERROR,
    error,
  };
}

export const uploadTxDataSuccess = (txData) => {
  return {
    type: UPLOAD_TX_DATA_SUCCESS,
    txData,
  };
}

export const fetchAllTxDataSuccess = (txDataList) => {
  return {
    type: FETCHALL_TX_DATA_SUCCESS,
    txDataList,
  };
}

export const upload = formData => {
  return dispatch => {
    return txDataApi.uploadOfx(formData).then(txData => {
        console.log('txData:', txData);
    }).catch(error => {
      throw(error);
    });
  };
};

export const fetchAllTxDataAsync = () => {
  return dispatch => {
    return txDataApi.fetchAllTxData().then(r => r.json()).then(
      txDataList => dispatch(uploadTxDataSuccess(txDataList)),
      error => dispatch(serverError(error))
    );
  };
};
