const express = require('express');
const fs = require('fs');
const routes = require('./server.js');
require('isomorphic-fetch');

let itensJson = fs.readFileSync('api.json');
let itens = JSON.parse(itensJson);

routes.get('/', function (req, res) {
    res.send('Hello World!');
});
routes.get('/itens', function (req, res) {
    res.send(itens);
});
routes.get('/roberval', function (req, res) {
    let url = 'http://roberval.chaordicsystems.com/challenge/challenge.json';
    fetch(url).then(response => response.text()).then(resp => res.send(resp));
   
});

module.exports = routes;
