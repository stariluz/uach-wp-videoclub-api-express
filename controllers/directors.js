const express = require('express');
const { Director } = require('../db');

function create(req, res, next) {
    const { name, lastName, status } = req.body;

    Director.create({
        name, lastName, status
    }).then(
        object => res.json(object)
    ).catch(
        err => res.send(err)
    );
}

function list(req, res, next) {
    Director.findAll({ include: ['movie'] }).then(
        objects => res.json(objects)
    ).catch(
        err => res.send(err)
    );
}

function index(req, res, next) {
    const { id } = req.params;
    Director.findByPk(id).then(
        object => res.json(object)
    ).catch(
        err => res.send(err)
    );
}

function replace(req, res, next) {
    const { id } = req.params;

    Director.findByPk(id).then((object) => {
        const name = req.body.name
            ? req.body.name
            : null;
        const lastName = req.body.lastName
            ? req.body.lastName
            : null;
        const status = req.body.status
            ? req.body.status
            : null;
        return object.update({
            name, lastName, status
        });
    }).then(
        object => res.json(object)
    ).catch(
        err => res.send(err)
    );
}

function update(req, res, next) {
    const { id } = req.params;

    Director.findByPk(id).then((object) => {
        const name = req.body.name
            ? req.body.name
            : object.name;
        const lastName = req.body.lastName
            ? req.body.lastName
            : object.lastName;
        const status = req.body.status
            ? req.body.status
            : object.status;
        return object.update({
            name, lastName, status
        });
    }).then(
        object => res.json(object)
    ).catch(
        err => res.send(err)
    );
}

function destroy(req, res, next) {
    const { id } = req.params;
    Director.destroy({
        where: {
            id: id,
        }
    }).then(
        object => res.json(object)
    ).catch(
        err => res.send(err)
    );
}

module.exports = { create, list, index, replace, update, destroy };