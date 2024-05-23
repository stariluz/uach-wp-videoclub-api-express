const express = require('express');

function create(req, res, next) {
    res.send('Members create');
}

function list(req, res, next) {
    res.send('Members list');
}

function index(req, res, next) {
    res.send(`Members index ${req.params.id}`);
}

function replace(req, res, next) {
    res.send(`Members replace ${req.params.id}`);
}

function update(req, res, next) {
    res.send(`Members update ${req.params.id}`);
}

function destroy(req, res, next) {
    res.send(`Members destroy ${req.params.id}`);
}

module.exports={create, list, index, replace, update, destroy}