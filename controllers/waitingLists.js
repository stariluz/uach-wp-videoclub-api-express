const express = require('express');

function create(req, res, next) {
    res.send('Waiting lists create');
}

function list(req, res, next) {
    res.send('Waiting lists list');
}

function index(req, res, next) {
    res.send(`Waiting lists index ${req.params.id}`);
}

function replace(req, res, next) {
    res.send(`Waiting lists replace ${req.params.id}`);
}

function update(req, res, next) {
    res.send(`Waiting lists update ${req.params.id}`);
}

function destroy(req, res, next) {
    res.send(`Waiting lists destroy ${req.params.id}`);
}

module.exports={create, list, index, replace, update, destroy}