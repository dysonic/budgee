import { getTxDataUrl } from '../config';

const TX_DATA_URL = getTxDataUrl('/api/tx-data');

const defaultHeaders = {
    'Accept': 'application/json',
};

const defaultOptions = {
    cache: 'no-cache',
    headers: defaultHeaders,
}

const postOptions = {
    ...defaultOptions,
    method: 'POST',
};

export const uploadOfx = (formData) => {
    const options = { 
        ...postOptions,
        body: formData,
    };
    return fetch(`${TX_DATA_URL}/upload`, options);
};

export const fetchAllTxData = () => fetch(TX_DATA_URL, defaultOptions);

export const fetchTxData = id => fetch(`${TX_DATA_URL}/${id}`, defaultOptions);
