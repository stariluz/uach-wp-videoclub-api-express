const express = require('express');

function create(req, res, next) {
    res.send('Actors create');
}

function list(req, res, next) {
    res.send('Actors list');
}

function index(req, res, next) {
    // console.log(req);
    res.send(`Actors index ${req.params.id}`);
}

function replace(req, res, next) {
    res.send(`Actors replace ${req.params.id}`);
}

function update(req, res, next) {
    res.send(`Actors update ${req.params.id}`);
}

function destroy(req, res, next) {
    res.send(`Actors destroy ${req.params.id}`);
}

module.exports={create, list, index, replace, update, destroy}