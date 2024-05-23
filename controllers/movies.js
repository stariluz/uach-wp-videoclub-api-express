const express = require('express');

function create(req, res, next) {
    res.send('Movies create');
}

function list(req, res, next) {
    res.send('Movies list');
}

function index(req, res, next) {
    res.send(`Movies index ${req.params.id}`);
}

function replace(req, res, next) {
    res.send(`Movies replace ${req.params.id}`);
}

function update(req, res, next) {
    res.send(`Movies update ${req.params.id}`);
}

function destroy(req, res, next) {
    res.send(`Movies destroy ${req.params.id}`);
}

module.exports={create, list, index, replace, update, destroy}