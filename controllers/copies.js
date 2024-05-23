const express = require('express');

function create(req, res, next) {
    res.send('Copies create');
}

function list(req, res, next) {
    res.send('Copies list');
}

function index(req, res, next) {
    res.send(`Copies index ${req.params.id}`);
}

function replace(req, res, next) {
    res.send(`Copies replace ${req.params.id}`);
}

function update(req, res, next) {
    res.send(`Copies update ${req.params.id}`);
}

function destroy(req, res, next) {
    res.send(`Copies destroy ${req.params.id}`);
}

module.exports={create, list, index, replace, update, destroy}