const express = require('express');

function create(req, res, next) {
    res.send('Loans create');
}

function list(req, res, next) {
    res.send('Loans list');
}

function index(req, res, next) {
    // console.log(req);
    res.send(`Loans index ${req.params.id}`);
}

function replace(req, res, next) {
    res.send(`Loans replace ${req.params.id}`);
}

function update(req, res, next) {
    res.send(`Loans update ${req.params.id}`);
}

function destroy(req, res, next) {
    res.send(`Loans destroy ${req.params.id}`);
}

module.exports={create, list, index, replace, update, destroy}