/* eslint-env node */
const express = require('express');
const proxy = require('http-proxy-middleware');
const proxyRouter = require('./proxy-router.json');

const app = express();

const proxyOptions = {
    target: 'http://localhost:1000',

    // Could use replace, but take care of the leading '/'
    // Object.keys(router).forEach(route => path.replace(new RegExp(`^${escapeRegExp(route)}`), ''));
    pathRewrite: path => {
        const targetPath = '/' + path.split('/').slice(2).join('/');
        console.log('targetPath:', targetPath);
        return targetPath;
    },

    router: req => {
        console.log('originalUrl:', req.originalUrl);
        console.log('baseUrl:', req.baseUrl);
        console.log('path:', req.path);
        const route = '/' + req.originalUrl.split('/')[1];
        console.log('route:', route);
        const target = proxyRouter[route] || 'http://localhost:1000';
        console.log('target:', target);
        return target;
    }
        
};

const apiProxy = proxy('**', proxyOptions);
app.use(apiProxy);

app.listen(8080, () => {
    console.log('Proxy listening on port 8080');
});