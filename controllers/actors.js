const express = require('express');
const { Actor } = require('../db');

function create(req, res, next) {
    const { name, lastName } = req.body;

    Actor.create({
        name, lastName
    }).then(
        object => res.json(object)
    ).catch(
        err => res.send(err)
    );
}

function list(req, res, next) {
    Actor.findAll({ include: ['movie'] }).then(
        objects => res.json(objects)
    ).catch(
        err => res.send(err)
    );
}

function index(req, res, next) {
    const { id } = req.params;
    Actor.findByPk(id).then(
        object => res.json(object)
    ).catch(
        err => res.send(err)
    );
}

function replace(req, res, next) {
    const { id } = req.params;

    Actor.findByPk(id).then((object) => {
        const name = req.body.name
            ? req.body.name
            : null;
        const lastName = req.body.lastName
            ? req.body.lastName
            : null;
        return object.update({
            name, lastName,
        });
    }).then(
        object => res.json(object)
    ).catch(
        err => res.send(err)
    );
}

function update(req, res, next) {
    const { id } = req.params;

    Actor.findByPk(id).then((object) => {
        const name = req.body.name
            ? req.body.name
            : object.name;
        const lastName = req.body.lastName
            ? req.body.lastName
            : object.lastName;
        return object.update({
            name, lastName,
        });
    }).then(
        object => res.json(object)
    ).catch(
        err => res.send(err)
    );
}

function destroy(req, res, next) {
    const { id } = req.params;
    Actor.destroy({
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