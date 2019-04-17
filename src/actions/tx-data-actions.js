import * as txDataApi from '../api/tx-data-api';

export const upload = formData => {
  return dispatch => {
    return txDataApi.uploadOfx(formData).then(txData => {
        console.log('txData:', txData);
      // dispatch(loadCatsSuccess(cats));
    }).catch(error => {
      throw(error);
    });
  };
};
