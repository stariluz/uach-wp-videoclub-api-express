const express = require('express');

function create(req, res, next) {
    res.send('Genres create');
}

function list(req, res, next) {
    res.send('Genres list');
}

function index(req, res, next) {
    // console.log(req);
    res.send(`Genres index ${req.params.id}`);
}

function replace(req, res, next) {
    res.send(`Genres replace ${req.params.id}`);
}

function update(req, res, next) {
    res.send(`Genres update ${req.params.id}`);
}

function destroy(req, res, next) {
    res.send(`Genres destroy ${req.params.id}`);
}

module.exports={create, list, index, replace, update, destroy}