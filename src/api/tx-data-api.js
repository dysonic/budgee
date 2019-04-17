const TX_DATA_URL = '/api/tx-data';

export const uploadOfx = (formData) => {
    console.log('uploadOfx');
    return window
        .fetch(`${TX_DATA_URL}/upload`, {
            method: 'POST',
            cache: 'no-cache',
            headers: {
                'Accept': '*/*',
                // 'Content-Type': 'multipart/form-data',
                // 'Accept': 'application/json',
                //"Content-Type": "application/xml",
            },
            body: formData,
    }).then(response => {
        return response;
        // return response.json();
    });
};
