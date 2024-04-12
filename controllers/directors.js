const express = require('express');

function create(req, res, next) {
    res.send('Directors create');
}

function list(req, res, next) {
    res.send('Directors list');
}

function index(req, res, next) {
    // console.log(req);
    res.send(`Directors index ${req.params.id}`);
}

function replace(req, res, next) {
    res.send(`Directors replace ${req.params.id}`);
}

function update(req, res, next) {
    res.send(`Directors update ${req.params.id}`);
}

function destroy(req, res, next) {
    res.send(`Directors destroy ${req.params.id}`);
}

module.exports={create, list, index, replace, update, destroy}