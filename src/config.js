const useProxy = true;

export const getTxDataUrl = url => useProxy ? `/tx-data${url}` : url;
export const getTxRulesUrl = url => useProxy ? `/tx-rules${url}` : url;