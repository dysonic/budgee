import { getTxRulesUrl } from '../config';

const TX_RULES_URL = getTxRulesUrl('/api/tx-rules');


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