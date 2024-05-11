const express = require('express');
const { User } = require('../db');

function create(req, res, next) {
    const { name, lastName, email, password } = req.body;
    User.create({
        name, lastName, email, password
    }).then(
        object => res.json(object)
    ).catch(
        err => res.send(err)
    );
}

function list(req, res, next) {
    User.findAll({ }).then(
        objects => res.json(objects)
    ).catch(
        err => res.send(err)
    );
}

function index(req, res, next) {
    const { id } = req.params;
    User.findByPk(id).then(
        object => res.json(object)
    ).catch(
        err => res.send(err)
    );
}

function replace(req, res, next) {
    const { id } = req.params;

    User.findByPk(id).then((object) => {
        const name = req.body.name
            ? req.body.name
            : null;
        const lastName = req.body.lastName
            ? req.body.lastName
            : null;
        const email = req.body.email
            ? req.body.email
            : null;
        const password = req.body.password
            ? req.body.password
            : null;
        return object.update({
            name, lastName, email, password
        });
    }).then(
        object => res.json(object)
    ).catch(
        err => res.send(err)
    );
}

function update(req, res, next) {
    const { id } = req.params;

    User.findByPk(id).then((object) => {
        const name = req.body.name
            ? req.body.name
            : object.name;
        const lastName = req.body.lastName
            ? req.body.lastName
            : object.lastName;
        const email = req.body.email
            ? req.body.email
            : object.email;
        const password = req.body.password
            ? req.body.password
            : object.password;
        return object.update({
            name, lastName, email, password
        });
    }).then(
        object => res.json(object)
    ).catch(
        err => res.send(err)
    );
}

function destroy(req, res, next) {
    const { id } = req.params;
    User.destroy({
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