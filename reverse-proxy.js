/* eslint-env node */
const express = require('express');
const proxy = require('http-proxy-middleware');
const router = require('./proxy-router.json');

const app = express();

const proxyOptions = {
    target: 'http://localhost:1000',
    router,
    // Could use replace, but take care of the leading '/'
    // Object.keys(router).forEach(route => path.replace(new RegExp(`^${escapeRegExp(route)}`), ''));
    pathRewrite: (path, req) => {
        const targetPath =  '/' + path.split('/').slice(2).join('/'); // Could use replace, but take care of the leading '/'
        console.log('targetPath:', targetPath);
        return targetPath;
    },
};

const apiProxy = proxy('**', proxyOptions);
app.use(apiProxy);

// let route;
// for (route of routes) {
// app.use(route.route,
//     proxy({
//         target: route.address,
//         pathRewrite: (path, req) => {
//             const targetPath =  path.split('/').slice(2).join('/'); // Could use replace, but take care of the leading '/'
//             console.log('targetPath:', targetPath);
//             return targetPath;
//         },
//         logLevel: 'debug',
//         // logProvider: (provider) => {
//         //     // replace the default console log provider.
//         //     return morgan;
//         // },
//     })
// );

app.listen(8080, () => {
    console.log('Proxy listening on port 8080');
});