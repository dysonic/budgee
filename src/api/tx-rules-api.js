const TX_RULES_URL = '/tx-rules/api';

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

export const fetchAllStringRules = () => fetch(`${TX_RULES_URL}/string-rules`, defaultOptions);