const TX_DATA_URL = '/tx-data/api/txdata';

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
